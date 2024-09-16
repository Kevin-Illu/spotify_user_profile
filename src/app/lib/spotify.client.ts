export async function SpotifyAPI(url: any, access_token: string) {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

// export async function getUserInformation(access_token: string) {
//     return await SpotifyAPI('')
// }
