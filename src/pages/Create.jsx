import React, { useEffect, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { toast } from "react-toastify";
import { addImage } from "../../redux/slices/createImageSlice.js"
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading.jsx";

const Create = () => {
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);

  const [imagesPreview, setImagesPreview] = useState([]);
  //console.log(imagesPreview);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldImages) => [...oldImages, reader.result]);
          setImages((oldImages) => [...oldImages, reader.result]);
        }
      }
      reader.readAsDataURL(file);
    });

  }


  const handleSave = async () => {

    dispatch(addImage({ images }));

    setImages([]);
    setImagesPreview([]);
  }


  const { status } = useSelector((state) => state.create);

  useEffect(() => {
    if (status === 'succeeded') {
      toast.success("Success in creating images !");
    }
  }, [status]);

  if (status === 'pending') {
    return <><Loading /></>;
  }
  return (
    <div className="w-full">

      <div className=" flex flex-col gap-3 mx-auto mt-5 justify-center items-center w-80 h-80 border-2 border-dashed border-gray-500 rounded-md">
        <div className=" flex justify-center items-center w-10 h-10 rounded-full text-white bg-gray-500  hover:bg-gray-700 transition duration-300 ease-in-out">
          <label htmlFor="this"
            className=""
          >
            <MdAddAPhoto />

          </label>

        </div>
        <h2>Click this icon to add pics</h2>
        {
          imagesPreview.length > 0 &&
          <button className="btn-primary"
            onClick={handleSave}
          >
            Save
          </button>
        }
      </div>

      <input type="file"
        id="this"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageChange}
      />

      {imagesPreview.length > 0 && <>
        <h2 className="text-center text-2xl font-semibold text-neutral-100 p-5">Preview your Images</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {
            imagesPreview.map((image, i) =>
              <img draggable="false" src={image} alt="Images" key={i} className="w-full h-full object-contain" />
            )
          }
        </div>
      </>}
    </div>
  );
};

export default Create;
