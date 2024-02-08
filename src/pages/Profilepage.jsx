
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import axiosClient from "../utils/axiosClient.js";
import { getUser } from "../../../server/controllers/xController.js";

const Profilepage = () => {

  const dispatch = useDispatch();
  const [imagesPreview, setImagesPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagesPreview(reader.result);
      }
    }
    reader.readAsDataURL(file);
  }

  async function saveImg(img) {
    const response = await axiosClient.post("/gallery/saveprofile", { image: img });

    console.log(response);
    //dispatch(getUser());
    setImagesPreview(null);
  }

  const handleSaveProfile = async (e) => {
    saveImg(imagesPreview);

  }

  return (

    <div className="text-center my-4">
      <img className="h-32 w-32 rounded-full border-4 border-white dark:border-green-500 mx-auto my-4"
        src="https://randomuser.me/api/portraits/women/21.jpg" alt="User profile" />
      <div className="py-2">
        <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
        <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
          <svg className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path className=""
              d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
          Odisha, India
        </div>
      </div>
      <label htmlFor="thisx" className="btn-secondary">Update image</label>
      <input type="file"
        id="thisx"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      {
        imagesPreview ? <>

          <div className="mx-auto mt-4 h-20 w-20 rounded-full overflow-hidden">
            <img src={imagesPreview} alt="imagesPreview" className="h-full w-full object-cover" />
          </div>
          <button className="btn-primary mt-3" onClick={handleSaveProfile}>
            Save
          </button>
        </> : <></>
      }
    </div>

  );
};

export default Profilepage;