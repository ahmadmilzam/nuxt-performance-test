import onLoadVendor from "@/utils/lazyLoadVendors";

export default () => {
  onLoadVendor(() => {
    console.log("do something after onLoad");
  });
};
