import React, { useState, useEffect, useMemo } from 'react';
import { fetchImages } from '../../redux/slices/imageSlices';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft } from "react-icons/fa6";
import Loading from '../components/Loading';



const Gallerypage = () => {

  const dispatch = useDispatch();

  const { images, status, error } = useSelector((state) => state.gallery);
  const [isOpenSlider, setIsOpenSlider] = useState(false);
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const handleStart = (event) => {
    setStartX(event.touches ? event.touches[0].clientX : event.clientX);
  }

  const size = images?.length;
  const handleEnd = (event) => {
    if (startX !== null) {
      const endX = event.touches ? event.touches[0].clientX : event.clientX;
      const deltaX = endX - startX;

      if (deltaX < 0) {
        if (index < size - 1) {
          setIndex((index + 1));
        }
      }
      else if (deltaX > 0) {
        if (index > 0) {
          setIndex((index - 1));
        }
      }
    }
  }

  useEffect(() => {
    if (images.length === 0)
      dispatch(fetchImages());
  }, [dispatch, images]);

  if (status === 'loading') {
    return <><Loading /></>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=" w-full h-full container mx-auto md:p-3 ">
      {
        isOpenSlider ? (
          <>
            <div className='relative w-full h-full flex items-center justify-cente'>
              <div className='md:w-[420px] md:mx-auto'
                onTouchStart={handleStart}
                onMouseDown={handleStart}
                onTouchEnd={handleEnd}
                onMouseUp={handleEnd}
              >
                <span className='absolute left-3 top-3 text-sm' onClick={
                  () => {
                    setIsOpenSlider(false);
                  }
                }>
                  <FaArrowLeft />
                </span>
                <img src={images[index].url} alt="image" draggable="false" className='aspect-square object-contain ' />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-1 grid-cols-4 sm:grid-cols-5 md:grid-cols-5 md:gap-2 lg:grid-cols-7 xl:grid-cols-9 lg:gap-2">
              {images.map((image, index) => (
                <div key={index} onClick={() => {
                  setIndex(index);
                  setIsOpenSlider(true);
                }}>
                  <Image src={image.url} alt="images" />
                </div>
              ))}

            </div>
          </>)
      }
    </div>
  );
};


const Image = ({ src, alt }) => {


  return (
    <div>
      <img className="aspect-square object-cover" src={src} alt={alt} loading="lazy" />
    </div>
  );
};

export default Gallerypage;





