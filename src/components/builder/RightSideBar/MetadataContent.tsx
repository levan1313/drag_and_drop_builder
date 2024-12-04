import { FaCopy } from "react-icons/fa";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

const MetaData = {
  name: "string",
  age: "number",
  isDeveloper: "bool",
  skills: "[]",
  address: {
    street: "string",
    city: "string",
    zip: "string",
    test: [1, 2, 3, 4, 5],
    arrOfObj: [{ a: "a" }, { b: "b" }],
    aarOfObjOfArr: [
      { a: "a", bs: ["b", "b"] },
      { a: "a", bs: ["b", "b"], nums: [1, 2, 3, 4, 5] },
    ],
  },
};

const MetaDataContainer = () => {
  const copyToClipboard = (path: string) => {
    navigator.clipboard.writeText(`{{${path}}}`).then(() => {
      console.log(`Copied to clipboard: ${path}`);
    });
  };

  const renderProperties = (data: any, parentPath = "") => {
    return Object.entries(data).map(([key, value]) => {
      const currentPath = parentPath ? `${parentPath}.${key}` : key;

      return (
        <div className="max-w-full" key={key}>
          <Disclosure key={currentPath} as="div" className="mb-2 w-full">
            {({ open }) => (
              <>
                <DisclosureButton as={"div"}
                  className={`flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black rounded-lg hover:opacity-85 ${
                    typeof value !== "object"
                      ? "bg-yellow-400"
                      : "bg-green-600"
                  }`}
                >
                  <span className="truncate">{key}</span>
                  {typeof value !== "object" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent accordion toggle on copy button click
                        copyToClipboard(currentPath);
                      }}
                      className="ml-4 p-1 text-white bg-gray-800 rounded-full hover:bg-gray-600"
                    >
                      <FaCopy />
                    </button>
                  )}
                </DisclosureButton>
                {typeof value === "object" && (
                  <DisclosurePanel
                    className={
                      "px-4 pt-4 pb-2 text-sm text-gray-500 bg-red-400"
                    }
                  >
                    {Array.isArray(value) ? (
                      value.map((item, index) => {
                        const arrayPath = `${currentPath}[${index}]`;
                        return (
                          <div
                            key={arrayPath}
                            className="ml-4 overflow-hidden truncate"
                          >
                            <strong>[{index}]:</strong>{" "}
                            {typeof item === "object" ? (
                              renderProperties(item, arrayPath)
                            ) : (
                              <>
                                {JSON.stringify(item)}
                                <button
                                  onClick={() => copyToClipboard(arrayPath)}
                                  className="ml-2 p-1 text-white bg-gray-800 rounded-full hover:bg-gray-600"
                                >
                                  <FaCopy />
                                </button>
                              </>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      renderProperties(value, currentPath)
                    )}
                  </DisclosurePanel>
                )}
              </>
            )}
          </Disclosure>
        </div>
      );
    });
  };

  return (
    <div
  className="p-4 pt-0 max-w-[300px] w-full max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 relative"
  style={{ scrollbarGutter: "stable" }}
>
  <h2 className="text-xl py-4 font-bold mb-4 sticky top-0 bg-white z-10">MetaData</h2>
  <div className="space-y-2">{renderProperties(MetaData)}</div>
</div>
  );
};

export default MetaDataContainer;
