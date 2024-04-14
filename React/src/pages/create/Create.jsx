import { Link } from "react-router-dom";
import "./Create.css";

export function Create() {
  return (
    <>
      <Link to="/create-collection" className="create-btn">Create Collection</Link>
      <Link to="/mint-nft" className="create-btn">Mint NFT</Link>
    </>
  );
}
