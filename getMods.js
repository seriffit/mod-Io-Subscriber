"use strict";
const acceptHeader = "application/json";

async function getModsInJsonData(url, options) {
  const response = await fetch(url, options);
  const jsonResponse = await response.json();
  console.log("Yhteensä tämän verran modeja: " + jsonResponse.result_total);
  return jsonResponse;
}

async function subscribeToIds(arrayOfIds, options, gameId) {
  arrayOfIds.forEach(function (id) {
    subscribeToId(id, options, gameId);
  });
}

async function subscribeToId(id, options, gameId) {
  const subUrl = `https://api.mod.io/v1/games/${gameId}/mods/${id}/subscribe`;
  console.log("URL: " + subUrl);
  const response = await fetch(subUrl, options);
  console.log(response.status);
  const responseJSON = await response.json();
  console.log(responseJSON);
}

///Starts here
async function subscibeToFriendsMods() {
  const subBearerToken = document.getElementById("yourInput").value;
  const bearerToken = document.getElementById("friendInput").value;
  const gameId = document.getElementById("gameId").value;
  const getUrl = "https://api.mod.io/v1/me/subscribed";
  const getOptions = {
    method: "GET",
    headers: {
      Accept: acceptHeader,
      Authorization: "Bearer " + bearerToken,
    },
  };

  const subOptions = {
    method: "POST",
    headers: {
      Accept: acceptHeader,
      Authorization: "Bearer " + subBearerToken,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const jsonResponse = await getModsInJsonData(getUrl, getOptions);

  const modIds = jsonResponse.data.map(function (data) {
    if (data.game_id == gameId) {
      return data.id;
    }
  });

  subscribeToIds(modIds, subOptions, gameId);

  console.log(modIds);
}
