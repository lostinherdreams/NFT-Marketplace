const { ethers } = require("hardhat");
const fs = require("fs");

const delay = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

async function main() {
    const MarketPlace = await ethers.getContractFactory("MarketPlace");
    const feePercentage = 10;

    // Deploy the contract
    console.log("[ 🧐 ] Deploying...");
    const marketPlace = await MarketPlace.deploy(feePercentage);
    console.log(
        "[ ✅ ] MarketPlace deployed to:",
        await marketPlace.getAddress()
    );

    //waiting for the ...
    console.log(`[ ☕️ ] Waiting...`);
    await delay(10000);

    //Verify the contract
    console.log("[ 🧐 ] Verifying...");
    await run("verify:verify", {
        address: await marketPlace.getAddress(),
        constructorArguments: [feePercentage],
    });
    console.log(`[ ✅ ] Contract's source code verified on block explorer.`);

    saveFrontendFiles(marketPlace, "MarketPlace");
}

function saveFrontendFiles(contract, name) {
    const contractsDir = __dirname + "/../../React/contractConfig";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + `/${name}-address.json`,
        JSON.stringify({ address: contract.address }, undefined, 2)
    );

    const contractArtifact = artifacts.readArtifactSync(name);

    fs.writeFileSync(
        contractsDir + `/${name}.json`,
        JSON.stringify(contractArtifact, null, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
