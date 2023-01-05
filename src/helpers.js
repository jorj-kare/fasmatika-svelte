exports.sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.toBase64 = (arr) => {
	// arr = new Uint8Array(arr);
	return window.btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''));
};
