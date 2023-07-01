import styles from "../styles";

const NewFeatures = ({imgUrl,title,subtitle}) => (
  <div className="flex-2 flex flex-col px-[20px]   sm:max-w-[250px] min-w-[270px]">

   <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>

    <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain"/>
   </div>
   
   <h1 className="mt-[26px] font-bold text-[24px] leading=[30.24px] text-white">
      Title : {title}
   </h1>
   <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">

    Subtitle : {subtitle}
   </p>
  </div>
);

export default NewFeatures;
