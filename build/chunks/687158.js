/** Chunk was on web.js **/
/** chunk id: 687158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Of: () => _,
  ZP: () => u,
  le: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk251625 = require("./251625.js"),
  Chunk255564 = require("./255564.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js");

function u(e, t) {
  return (0, i.e7)([a.default, l.Z], () => null == e ? null : _(e, t, [a.default, l.Z]))
}

function d(e, t) {
  return r.useEffect(() => {
    (0, c.Z)(e, true, {
      guildId: null != t ? t : true
    })
  }, [t, e]), u(e, t)
}
let f = (0, Chunk251625.oH)((e, t) => new s.Z(e, t));

function _(e, t) {
  let [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [a.default, l.Z];
  if (null === e) return null;
  let i = n.getUser(e),
    o = r.getUserProfile(e),
    s = r.getGuildMemberProfile(e, t);
  return null == i || null == o ? null : f(o, s)
}