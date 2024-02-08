import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMembers } from "../../redux/slices/memberSlices";
import dummyImg from "../assets/download.png";
import Loading from '../components/Loading';


const Memberspage = () => {

  const dispatch = useDispatch();

  const data = useSelector(state => state.members.member);
  const status = useSelector(state => state.members.status);

  useEffect(() => {
    if (!data || data.length === 0)
      dispatch(getMembers());
  }, [dispatch,]);

  if (status === "loading") {
    return (
      <div><Loading /></div>
    )
  }

  if (status === "succeeded") {
    return (
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-3xl text-white-400 first-letter:text-green-400 text-center first-letter:text-4xl my-3">All family members 🎉</h2>
        <div className="border border-neutral-700"></div>
        <div className="p-4 grid grid-cols-3 md:grid-cols-4 gap-4">
          {data.map((dt, i) => (
            <div key={i} className="flex flex-col items-center gap-2 mb-10">
              <div className="md:w-40 md:h-auto aspect-square rounded-full overflow-hidden">
                <img src={dt.avatar?.url || dummyImg} alt={dt.name} className="w-full h-full object-cover" />
              </div>
              <p className=" text-center text-xl font-bold text-neutral-400">{dt.name.split(" ")[0]}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Memberspage;
