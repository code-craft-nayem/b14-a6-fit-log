import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1 className=" mt-4 text-2xl font-bold">Page Not Found</h1>
      <p className="mt-2 text-gray-400">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 font-bold text-black">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
