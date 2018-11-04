const minimist = require("minimist");
const error = require("./utils/error");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  switch (cmd) {
    case "today":
      require("./cmds/today")(args);
      break;
    case "version":
      require("./cmds/version")(args);
    case "help":
      require("./cmds/help")(args);
      break;
    case "forecast":
      require("./cmds/forecast")(args);
      break;
    default:
      error(`"${cmd}" is not a vaild command!`, true);
      break;
  }
};
