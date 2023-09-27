import React from "react";

export default function CardProject(props) {
  const { imageSrc, company, title, description } = props;

  return (
    <div className="relative flex flex-col justify-center my-9 lg:mx-2   ">
      {/* <!-- card --> */}
      <div className=" my-auto mx-auto flex w-96  flex-col justify-center bg-white rounded-2xl shadow-l shadow-slate-300/60">
        {/* <!-- img --> */}
        <img
          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src={imageSrc}
          alt={title} // You can add alt text for accessibility
        />
        {/* <!-- text information --> */}
        <div className="p-4">
          <small className="text-blue-400 text-xs">{company}</small>
          <h1 className="text-2xl font-medium text-slate-600 pb-2">{title}</h1>
          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
