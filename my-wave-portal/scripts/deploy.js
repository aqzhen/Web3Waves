const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther('0.001'),
    });
  
    await waveContract.deployed();

    console.log('WavePortal address: ', waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();

//0xB552D19ED1c38b932701B7025504E433faf5a3AD