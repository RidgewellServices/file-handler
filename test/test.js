import assert from 'assert';
import FileHandler from '../src/index';

describe('FileHandler', function() {
  const testFilesPath = 'test/data/';
  const fileName = 'hello.txt';
  const fileHandler = new FileHandler();
  describe('getData', function() {
    it('should return error when invalid path', function(done) {
      const path = "blah";
      const expected = "ENOENT: no such file or directory, open '" + path + "'";
      fileHandler.getData(path)
      .catch(function (e) {
        assert.equal(expected, e.message);
        done();
      })
      .catch(function(err) {
        done(err);
      });
    });

    it('should return file contents', function(done) {
      const expected = "hello";
      fileHandler.getData(`${testFilesPath}${fileName}`)
      .then(function(data) {
        assert.equal(encodeURI(data), expected);
        done();
      })
      .catch(function(err) {
        done(err);
      });
    });
  });
});
