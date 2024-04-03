import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment";

const FileUI = ({ data }) => {
  return (
    <div
      className="p-4 bg-white shadow-lg rounded-lg min-w-[300px] mb-4"
      key={data.id}
    >
      <div className="flex justify-between">
        <h1>{data.name}</h1>
        <BsThreeDotsVertical />
      </div>

      <div className="flex justify-between mt-4">
        <p className="text-sm">{moment(data.createdAt).format("DD/MM/YYYY")}</p>
        <p className="text-sm">Size: {data.size}</p>
      </div>
    </div>
  );
};

const FileFolder = ({ data }) => {
  return (
    <>
      {data?.type === "file" ? (
        <FileUI data={data} />
      ) : (
        <Link
          href={{
            pathname: "/pages/Files",
            query: {
              id: data?.id,
            },
          }}
        >
          <FileUI data={data} />
        </Link>
      )}
    </>
  );
};

export default FileFolder;
