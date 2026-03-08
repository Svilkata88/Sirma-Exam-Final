function startingPlayers(allPlayers) {
  const startingPlayers = {};
  for (let player of allPlayers) {
    const pos = player.Position;
    switch (pos) {
      case "GK":
        startingPlayers["GK"] = player;
        break;
      case "DF":
        if (!startingPlayers["DF_LB"]) {
          startingPlayers["DF_LB"] = player;
        } else if (!startingPlayers["DF_RB"]) {
          startingPlayers["DF_RB"] = player;
        } else if (!startingPlayers["DF_C1"]) {
          startingPlayers["DF_C1"] = player;
        } else if (!startingPlayers["DF_C2"]) {
          startingPlayers["DF_C2"] = player;
        }
        break;
      case "MF":
        if (!startingPlayers["MF_LB"]) {
          startingPlayers["MF_LB"] = player;
        } else if (!startingPlayers["MF_RB"]) {
          startingPlayers["MF_RB"] = player;
        } else if (!startingPlayers["MF_C"]) {
          startingPlayers["MF_C"] = player;
        }
        break;
      case "FW":
        if (!startingPlayers["FW_L"]) {
          startingPlayers["FW_L"] = player;
        } else if (!startingPlayers["FW_R"]) {
          startingPlayers["FW_R"] = player;
        } else if (!startingPlayers["FW_S"]) {
          startingPlayers["FW_S"] = player;
        }
    }
  }
  return startingPlayers;
}

function sortPlayers(team, isEnabled) {
  const positionOrder = {
    GK: 1,
    DF: 2,
    MF: 3,
    FW: 4,
  };

  const sortedTeam = isEnabled
    ? [...team].sort(
        (a, b) => positionOrder[a.Position] - positionOrder[b.Position],
      )
    : team;

  return sortedTeam;
}

function normalizedDate(date, type) {
  let newDate = date.split("T")[0].split("-");

  switch (type) {
    case "iso":
      newDate = newDate.join("-");
      break;
    case "us":
      newDate = newDate.join("/");
      break;
    case "european":
      newDate = newDate.reverse();
      newDate = newDate.join("/");
      break;
    case "written":
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const [year, month, day] = newDate;
      newDate = `${months[month[1]]} ${day}, ${year}`;
      break;
    case "julian":
      const [y, m, d] = newDate.map(Number);
      const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

      if (isLeap) {
        daysInMonths[1] = 29;
      }

      let dayOfYear = d;

      for (let i = 0; i < m - 1; i++) {
        dayOfYear += daysInMonths[i];
      }

      const yy = String(y).slice(-2);

      newDate = yy + String(dayOfYear).padStart(3, "0");
      break;
  }

  return newDate;
}

function findTheWinner(score) {
  let homeScore = null;
  let awayScore = null;
  if (score.length === 3) {
    homeScore = Number(score.split("-")[0]);
    awayScore = Number(score.split("-")[1]);
  } else {
    homeScore = Number(score.split("-")[0].split("")[2]);
    awayScore = Number(score.split("-")[1].split("")[2]);
  }
  return [homeScore, awayScore];
}

export { startingPlayers, sortPlayers, normalizedDate, findTheWinner };
