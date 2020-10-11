/* global Expo */
import superagent from "superagent";
import Constants from "expo-constants";

let apiKey = Constants.manifest.extra.REACT_APP_API_KEY;
let apiURL = Constants.manifest.extra.REACT_APP_API_URL;

const get = (uri: string) => {
  return new Promise((resolve, reject) => {
    superagent
      .get(apiURL + uri.replace(/API_KEY/g, apiKey.toString()))
      // .set("api_key", ${apiKey})
      // .set("language", "en-US")
      .then((res) => {
        resolve(res.body);
      })
      .catch((err) => {
        // const errMessage = getErrorMessage(err);
        reject(err);
      });
  });
};

// const getErrorMessage = (err) => {
//   switch (err.status) {
//     case 403:
//       err.message = t("MESSAGE_UNAUTHORISED_USER");
//       return err;
//     case 404:
//       err.message = t(
//         "MESSAGE_NOT_FOUND" || "What you requested couldn't be found."
//       );
//       return err;
//     default:
//       return err;
//   }
// };

export { get };
