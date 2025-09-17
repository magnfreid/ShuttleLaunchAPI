import { createLaunchModels } from "./data/launch-model.js";
import { URL_LIMIT_10, URL_LIMIT_10_DEV } from "./data/api-urls.js";
import { MOCK_API_RESULT_10_DEV } from "./data/mock-data.js";

export async function fetchLaunches(testMode = false) {
  if (!testMode) {
    try {
      const data = await fetch(URL_LIMIT_10_DEV).then((data) => data.json());
      const dataModels = createLaunchModels(data);
      return dataModels;
    } catch (error) {
      throw error;
    }
  } else {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = await Promise.resolve(MOCK_API_RESULT_10_DEV);
      const dataModels = createLaunchModels(data);
      return dataModels;
    } catch (error) {
      throw error;
    }
  }
}
