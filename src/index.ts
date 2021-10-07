import { cronics } from "./common";

async function loadData() {
  const res = await cronics.listings();
  const [, listing, meta] = res[0];
  console.log(listing.price.toString());
  console.log(meta);
  return res;
}

loadData();
