const DeviceShare = artifacts.require('DeviceShare'); 

contract('DeviceShare', (accounts) => {
  let deviceShareInstance;

  before(async () => {
    deviceShareInstance = await DeviceShare.new(...); 
  });

  it('should allow a provider to add a device', async () => {
    const provider = accounts[0];
    const deviceName = 'Sample Device';
    const totalGPU = 4;
    const gpuRam = 8;
    const uri = 'https://example.com/';
    const hours = 24;
    const tokenRate = 100; 

    await deviceShareInstance.addDevice(
      deviceName,
      totalGPU,
      gpuRam,
      uri,
      hours,
      tokenRate,
      { from: provider }
    );

    const deviceDetails = await deviceShareInstance.getDeviceByDeviceID(1);
    assert.equal(deviceDetails.name, deviceName, 'Device name does not match');
    assert.equal(deviceDetails.totalGPU.toNumber(), totalGPU, 'Total GPU does not match');
    assert.equal(deviceDetails.GPURam.toNumber(), gpuRam, 'GPU RAM does not match');
    assert.equal(deviceDetails.uri, uri, 'URI does not match');
    assert.equal(deviceDetails.hrs.toNumber(), hours, 'Hours do not match');
    assert.equal(deviceDetails.tokenRate.toNumber(), tokenRate, 'Token rate does not match');
    assert.equal(deviceDetails.engage, false, 'Device should not be engaged');
    assert.equal(deviceDetails.recipient, provider, 'Recipient address does not match');
  });


});
