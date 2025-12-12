/** Chunk was on web.js **/
/** chunk id: 687158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Of: () => u,
  ZP: () => l
}), require("./388685.js"), require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk251625 = require("./251625.js"),
  Chunk255564 = require("./255564.js"),
  Chunk621853 = require("./621853.js");

function l(e, t) {
  return (0, r.e7)([i.default, s.Z], () => null == e ? null : u(e, t, [i.default, s.Z]))
}
require("./484459.js");
let c = (0, Chunk251625.oH)((e, t) => new a.Z(e, t));

function u(e, t) {
  let [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.default, s.Z];
  if (null === e) return null;
  let o = n.getUser(e),
    a = r.getUserProfile(e),
    l = r.getGuildMemberProfile(e, t);
  return null == o || null == a ? null : c(a, l)
}