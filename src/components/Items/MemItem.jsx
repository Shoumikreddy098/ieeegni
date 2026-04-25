function MemItem({ memimg, memname, memrole }) {
  return (
    <div className="text-center text-white space-y-3">
      <img
        src={memimg}
        alt={memname}
        className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover mx-auto"
      />
      <h3 className="text-lg font-semibold">{memname}</h3>
      <p className="text-sm text-gray-300">{memrole}</p>
    </div>
  );
}

export default MemItem;
