import fs from 'fs';

class FileHandler {
  getData(path, type = 'utf8') {
    return new Promise((resolve, reject) => {
      fs.readFile(path, type, (err, data) => {
        if (err) { reject(err); }
        resolve(data);
      })
    });
  }
}

export default FileHandler;
