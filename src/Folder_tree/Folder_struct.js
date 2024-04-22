import React, { useState } from "react";
import "./Folder_struct.css";

export default function Folder_struct() {
  const FoldersFiles = {
    childern: [
      {
        name: "file 1",
        childern: [
          {
            name: "file 2",
            childern: [
              {
                name: "file 6",
              },
            ],
          },
        ],
      },
      {
        name: "file 3",
        childern: [
          {
            name: "file 5",
          },
        ],
      },
      {
        name: "file 4",
      },
    ],
  };

  function InnerFiles({ files, depth }) {
    const [dropDown, setDropDown] = useState(false);
    return (
      <div>
        {/* <button
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
            
          {files.name}
        </button> */}
        <button onClick={() => {
            setDropDown(!dropDown);
          }}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              ></path>
            </svg>{" "}
            {files.name}
            
          </span>
        </button>

        {dropDown && (
          <div style={{ paddingLeft: `${depth * 20}px` }}>
            {files.childern?.map((files) => {
              return (
                <div>
                  <InnerFiles files={files} depth={depth + 1} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
  return (
    <>
      {FoldersFiles.childern.map((files) => {
        return (
          <div>
            <InnerFiles files={files} depth={1} />
          </div>
        );
      })}
    </>
  );
}
