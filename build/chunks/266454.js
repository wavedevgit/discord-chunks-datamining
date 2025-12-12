/** Chunk was on web.js **/
/** chunk id: 266454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nj: () => _,
  Ob: () => h,
  Q3: () => m,
  wE: () => g,
  zu: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915486 = require("./915486.js"),
  Chunk428967 = require("./428967.js"),
  Chunk605236 = require("./605236.js"),
  Chunk57207 = require("./57207.js");

function p(e) {
  let {
    bypassNewUserCheck: t = false,
    cooldownDurationMs: n = s.Z.Millis.WEEK,
    guildId: r
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  if (!t && (0, f.Bh)(e)) returntrue;
  if ((0, u.lg)(e)) return (0, d.H4)(e).isDismissed;
  {
    var i;
    if ((0, u.I0)(e)) return h(e, l.default.fromTimestamp(Date.now())).isDismissed;
    if ((0, u.OQ)(e)) return (0, d.Fo)(e, {
      cooldownDurationMs: n
    }).isDismissed;
    if ((0, u.Vc)(e)) return (0, d.XY)(e, r);
    if ((0, u.ms)(e)) return (0, d.oK)(e, r);
    let t = null == (i = o.Z.settings.userContent) ? true : i.dismissedContents;
    return null != t && (0, c.jl)(t, e)
  }
}

function _(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return (0, r.e7)([o.Z, a.Z], () => p(e, t))
}
async function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  p(e, {
    bypassNewUserCheck: true
  }) || ((0, d.u9)(e, t), await (0, i.nm)(e), (0, d.ME)(e, t))
}

function h(e, t) {
  var n, r;
  if ((0, f.Bh)(e)) return {
    isDismissed: true,
    lastDismissedSnowflakeId: null
  };
  let i = null == (r = o.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? true : n.lastDismissedObjectId;
  return {
    isDismissed: null != i && 1 !== l.default.compare(t, i),
    lastDismissedSnowflakeId: i
  }
}
async function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  (0, d.u9)(e, n), await (0, d.XM)(e, t, 1), (0, d.ME)(e, n)
}