import { Discuss, RotatingLines } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <RotatingLines
        visible={true}
        height={80}
        width={80}
        color="#C2F800"
        ariaLabel="loading"
        animationDuration={0.75}
      />

      {/* <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="discuss-loading"
        wrapperStyle={{}}
        wrapperClass="discuss-wrapper"
        color="#fff"
      /> */}
    </div>
  );
};

export default loading;
