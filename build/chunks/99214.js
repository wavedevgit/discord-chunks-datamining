/** Chunk was on 50751 **/
/** chunk id: 99214, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e3: () => s
}), require("./781311.js"), require("./35282.js"), require("./5254.js");
var Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js");

function o(e) {
  return (0, a._I)(e.toLocaleLowerCase()).trim()
}

function s(e) {
  let t = {},
    n = r.Z.getNickname(e.id);
  null != n && (t[n] = o(n).split(" "));
  let a = l.ZP.getGlobalName(e);
  return null != a && null == t[a] && (t[a] = o(a).split(" ")), t[e.username] = o(e.username).split(" "), i.ZP.getNicknames(e.id).forEach(e => {
    null == t[e] && (t[e] = o(e).split(" "))
  }), {
    names: t,
    nick: n
  }
}
require("./981631.js")