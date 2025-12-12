/** Chunk was on web.js **/
/** chunk id: 293745, original params: e,t,n (module,exports,re quire) **/
let Chunk52878 = require("./52878.js"),
  Chunk172959 = require("./172959.js"),
  Chunk393808 = require("./393808.js"),
  Chunk725616 = require("./725616.js"),
  Chunk690217 = require("./690217.js"),
  Chunk689478 = require("./689478.js");
module.exports = (e, t, n, c) => {
  switch (t) {
    case "===":
      return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
    case "!==":
      return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
    case "":
    case "=":
    case "==":
      return r(e, n, c);
    case "!=":
      return i(e, n, c);
    case ">":
      return o(e, n, c);
    case ">=":
      return a(e, n, c);
    case "<":
      return s(e, n, c);
    case "<=":
      return l(e, n, c);
    default:
      throw TypeError(`Invalid operator: ${t}`)
  }
}