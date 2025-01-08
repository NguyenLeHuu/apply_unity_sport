const fs = require("fs");

/*- vì nhận thấy có sự lặp lại cấu trúc trong file
json nên áp dụng giải thuật nén Lempel-Ziv-Welch (LZW) sẽ mang lại hiệu quả cao nhất
*/

function compressLZW(inputFile, outputFile) {
  const data = fs.readFileSync(inputFile, "utf-8");

  const dictionary = {};
  let dictSize = 256;
  for (let i = 0; i < 256; i++) {
    dictionary[String.fromCharCode(i)] = i;
  }

  let w = "";
  const result = [];
  for (const char of data) {
    const wc = w + char;
    if (dictionary[wc] !== undefined) {
      w = wc;
    } else {
      result.push(dictionary[w]);
      dictionary[wc] = dictSize++;
      w = char;
    }
  }

  if (w !== "") result.push(dictionary[w]);

  fs.writeFileSync(outputFile, JSON.stringify(result), "utf-8");
  console.log(`File đã được nén và lưu tại: ${outputFile}`);
}

function decompressLZW(inputFile, outputFile) {
  const compressedData = JSON.parse(fs.readFileSync(inputFile, "utf-8"));

  const dictionary = {};
  let dictSize = 256;
  for (let i = 0; i < 256; i++) {
    dictionary[i] = String.fromCharCode(i);
  }

  let w = String.fromCharCode(compressedData[0]);
  let result = w;

  for (let i = 1; i < compressedData.length; i++) {
    const k = compressedData[i];
    const entry = dictionary[k] !== undefined ? dictionary[k] : w + w[0];
    result += entry;

    dictionary[dictSize++] = w + entry[0];
    w = entry;
  }

  fs.writeFileSync(outputFile, result, "utf-8");
  console.log(`File đã được giải nén và lưu tại: ${outputFile}`);
}

const inputJson = "data.json"; // File JSON gốc
const compressedFile = "compressed_lzw.json"; // File sau khi nén
const decompressedFile = "decompressed_lzw.json"; // File sau khi giải nén

compressLZW(inputJson, compressedFile);

decompressLZW(compressedFile, decompressedFile);
