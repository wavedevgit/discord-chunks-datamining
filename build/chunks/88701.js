/** Chunk was on web.js **/
/** chunk id: 88701, original params: e,t,n (module,exports,re quire) **/
let Chunk177335 = require("./177335.js"),
  Chunk601861 = require("./601861.js"),
  Chunk800670 = require("./800670.js"),
  Chunk569671 = require("./569671.js"),
  Chunk596641 = require("./596641.js"),
  Chunk738018 = require("./738018.js");
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
      return a(e, n, c);
    case ">=":
      return o(e, n, c);
    case "<":
      return s(e, n, c);
    case "<=":
      return l(e, n, c);
    default:
      throw TypeError(`Invalid operator: ${t}`)
  }
}