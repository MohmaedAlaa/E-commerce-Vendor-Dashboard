import React from "react";
import Tabs from "./../components/Tabs";
import UploadFiles from "./UploadFiles";
import AutoTwoWaySync from "./AutoTwoWaySync";

const ProductBulkUpload = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-6">Product Bulk Upload</h2>
        <Tabs />
      </div>
    </div>
  );
};

export default ProductBulkUpload;
