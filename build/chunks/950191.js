/** Chunk was on web.js **/
/** chunk id: 950191, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AP: () => u,
  Ay: () => l
}), require("./896048.js"), require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk583613 = require("./583613.js"),
  Chunk204369 = require("./204369.js"),
  Chunk622543 = require("./622543.js");

function l(e, t) {
  return (0, r.bG)([i.default, s.A], () => null == e ? null : u(e, t, [i.default, s.A]))
}
require("./576622.js");
let c = (0, Chunk583613.L_)((e, t) => new o.A(e, t));

function u(e, t) {
  let [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.default, s.A];
  if (null === e) return null;
  let a = n.getUser(e),
    o = r.getUserProfile(e),
    l = r.getGuildMemberProfile(e, t);
  return null == a || null == o ? null : c(o, l)
}