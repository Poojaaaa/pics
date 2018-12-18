import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID fbb759e95d130dc655826c188febae700dc456ad87ae6a91aec4b3df4971e442"
  }
});
