
import fetch from "node-fetch";



let defaultFetchOptions = {
  headers: {
    "User-Agent": "neos-gh-issue-bridge (https://github.com/mralext20/neos-gh-issue-bridge)"
  }
}

/**
 * @param {string} url
 * 
 */
export async function getJson(url, fetchOptions = defaultFetchOptions) {
  let data;
  const request = await fetch(url, fetchOptions);
  if (request.ok) {
    return await request.json();
  } else {
    throw new Error("responce not ok")
  }
}