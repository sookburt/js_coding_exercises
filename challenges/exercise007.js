/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 * @returns {Number}
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  // assumed non-negative numbers.
  const splitIncoming = n.split("");
  let total = 0;
  splitIncoming.forEach(num => {
    let parsed = Number.parseInt(num);
    if (Number.isNaN(parsed)) throw new Error("a string containing a number is required")
    total += parsed;
  });
  return total;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 * @returns {Array} 
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) throw new Error("step is required");
  if (start > end) throw new Error("start should be less than end");
  if (step > end) throw new Error("step should be less than end");

  let returnArray = [];
  while (start <= end) {
    returnArray.push(start);
    start += step;
  }
  return returnArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 * @param {String} date // TODO: better to send in a Date and get string from that?
 * @returns {Array}
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (Number.isNaN(Date.parse(date))) throw new Error("date is not a date");

  let usersOver100Minutes = [];
  const limit = 100;

  users.forEach(user => {

    // get the userid 
    let userid = user.username;

    // find the usage record with the correct date
    user.screenTime.forEach(record => {

      if (record.date === date) {

        // get the total minutes screentime for that date.
        let total = 0;
        for (let key in record.usage) {
          total += record.usage[key];
        }

        // if the total is > 100 , push the username into the return array.
        if (total > limit) {
          usersOver100Minutes.push(userid);
        }
      }
    });
  });

  return usersOver100Minutes;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 * @return {String}
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (!/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i.test(hexStr.trim())) throw new Error("hexStr must a contain hexadecimal code")

  let hexSection = hexStr.replace("#", "");
  let r, g, b = 0;

  // turn F13 into FF1133 by duplicating each of the characters
  if (hexSection.length === 3) {
    hexSection = [...hexSection].map(char => char + char).join("");
  }

  r = parseInt(hexSection.substring(0, 2), 16);
  g = parseInt(hexSection.substring(2, 4), 16);
  b = parseInt(hexSection.substring(4, 6), 16);

  return `rgb(${r},${g},${b})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 * @return {String}
 */
const findWinner = board => {
  checkBoardDimensions(board);

  let winner = "";

  // TODO: consider refactoring (look for patterns).
  winner = checkRowsForWinner(board.flat(), winner);
  if (winner !== "") {
    return winner;
  }

  winner = checkColumnsForWinner(board.flat(), winner);
  if (winner !== "") {
    return winner;
  }

  winner = checkDiagonalsForWinner(board.flat(), winner);
  if (winner !== "") {
    return winner;
  }

  return null;
};

const checkDiagonalsForWinner = (board, winner) => {

  if (board[0] === board[4] && board[0] === board[8]) { return board[0]; }
  if (board[2] === board[4] && board[2] === board[6]) { return board[2]; }

  return winner;
}

const checkColumnsForWinner = (board, winner) => {

  if (board[0] === board[3] && board[0] === board[6]) { return board[0]; }
  if (board[1] === board[4] && board[1] === board[7]) { return board[1]; }
  if (board[2] === board[5] && board[2] === board[8]) { return board[2]; }

  return winner;
}

const checkRowsForWinner = (board, winner) => {

  if (board[0] === board[1] && board[0] === board[2]) { return board[0]; }
  if (board[3] === board[4] && board[3] === board[5]) { return board[3]; }
  if (board[6] === board[7] && board[6] === board[8]) { return board[6]; }

  return winner;
}

/**
 * Checks that the board sent in is a 3 x 3 2-dimensional array.
 * @param {Array} board 
 */
const checkBoardDimensions = board => {
  if (board === undefined) throw new Error("board is required");
  if (board.length !== 3) throw new Error("The board requires 3 elements.");

  let isValid = true;
  board.forEach(dimension => {
    if (dimension.length !== 3) { isValid = false; };
  });
  if (!isValid) throw new Error("Each of the elements in the board requires 3 elements.")

  return isValid;
}

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
  checkBoardDimensions
};
