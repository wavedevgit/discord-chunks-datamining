/** Chunk was on 7685 **/
/** chunk id: 565860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jP: () => o
}), require("./733351.js"), require("./747238.js"), require("./346084.js");
var Chunk696451 = require("./696451.js"),
  Chunk994500 = require("./994500.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js");

function a(e) {
  return (0, i.sS)(e.toLocaleLowerCase()).trim()
}

function o(e) {
  let t = {},
    n = r.A.getNickname(e.id);
  null != n && (t[n] = a(n).split(" "));
  let i = s.Ay.getGlobalName(e);
  return null != i && null == t[i] && (t[i] = a(i).split(" ")), t[e.username] = a(e.username).split(" "), l.Ay.getNicknames(e.id).forEach(e => {
    null == t[e] && (t[e] = a(e).split(" "))
  }), {
    names: t,
    nick: n
  }
}
require("./652215.js")