const Dropbox = require('dropbox').Dropbox
let dbx;
 
class DropBoxApi {
    constructor() {
        dbx = new Dropbox({
            accessToken: proceess.env.VUE_APP_DROPBOX_ACCSESSTOKEN
         });
    }
 
    filesListFolder(path = '') {
        let listFolder = "test";
        dbx.filesListFolder({ path })
        .then(function(response) {
          console.log(response.result.entries)
          listFolder = response.result.entries[0].path_display;
        })
        .catch(function(error) {
          console.error(error.error);
        });
        return listFolder;
    }

    getSharedLink(path = '') {
        dbx.filesListFolder({ path })
        .then(function(response) {
          console.log(response.result.entries)
        })
        .catch(function(error) {
          console.error(error.error);
        });
        return 'test'
    }
}
 
const dropboxApi = new DropBoxApi();

export default dropboxApi;