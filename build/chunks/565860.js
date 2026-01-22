/** Chunk was on 71447 **/
/** chunk id: 565860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jP: () => s
}), require("./733351.js"), require("./747238.js"), require("./346084.js");
var Chunk696451 = require("./696451.js"),
  Chunk994500 = require("./994500.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js");

function o(e) {
  return (0, l.sS)(e.toLocaleLowerCase()).trim()
}

function s(e) {
  let t = {},
    n = r.A.getNickname(e.id);
  null != n && (t[n] = o(n).split(" "));
  let l = a.Ay.getGlobalName(e);
  return null != l && null == t[l] && (t[l] = o(l).split(" ")), t[e.username] = o(e.username).split(" "), i.Ay.getNicknames(e.id).forEach(e => {
    null == t[e] && (t[e] = o(e).split(" "))
  }), {
    names: t,
    nick: n
  }
}
require("./652215.js")