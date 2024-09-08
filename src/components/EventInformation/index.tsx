function EventInformation(data:any) {
  return (
    <div className="flex-1 flex flex-col gap-3 text-left">
      <div className="font-bold text-4xl">
        {data.data.name}
      </div>
      <div>
        <div className="text-base text-gray-600">Hosted by:</div>
        <div className="flex gap-2 items-center cursor-pointer">
          <img
            className="w-6 h-6 rounded-full"
            src={data.data.ownerAvt}
            alt=""
          />
          <div className="text-lg font-bold">{data.data.owner}</div>
        </div>
      </div>
      <div>
        <div className="text-base text-gray-600">About event:</div>
        <div className="text-lg ">
         {data.data.description}
        </div>
      </div>
    </div>
  );
}

export default EventInformation;
