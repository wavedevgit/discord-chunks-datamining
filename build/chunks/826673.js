/** Chunk was on web.js **/
/** chunk id: 826673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dr: () => h,
  JZ: () => _,
  dX: () => g,
  in: () => E,
  k8: () => p,
  u$: () => m
});
var Chunk311907 = require("./311907.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk967198 = require("./967198.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk460288 = require("./460288.js"),
  Chunk256787 = require("./256787.js"),
  Chunk367727 = require("./367727.js"),
  Chunk757792 = require("./757792.js");

function p(e) {
  let {
    bypassNewUserCheck: t = false,
    cooldownDurationMs: n = s.A.Millis.WEEK,
    guildId: r
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  if (!t && (0, f.P3)(e)) returntrue;
  if ((0, u.L0)(e)) return (0, d.En)(e).isDismissed;
  {
    var i;
    if ((0, u.IL)(e)) return m(e, l.default.fromTimestamp(Date.now())).isDismissed;
    if ((0, u.ki)(e)) return (0, d.FZ)(e, {
      cooldownDurationMs: n
    }).isDismissed;
    if ((0, u.ef)(e)) return (0, d.iC)(e, r);
    if ((0, u.XQ)(e)) return (0, d.D8)(e, r);
    if ((0, u.PN)(e)) return (0, d.D4)(e, r);
    let t = null == (i = a.A.settings.userContent) ? true : i.dismissedContents;
    return null != t && (0, c.c0)(t, e)
  }
}

function _(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return (0, r.bG)([a.A, o.A], () => p(e, t))
}
async function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  p(e, {
    bypassNewUserCheck: true
  }) || ((0, d.YV)(e, t), await (0, i.o_)(e), (0, d.X0)(e, t))
}

function m(e, t) {
  var n, r;
  if ((0, f.P3)(e)) return {
    isDismissed: true,
    lastDismissedSnowflakeId: null
  };
  let i = null == (r = a.A.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? true : n.lastDismissedObjectId;
  return {
    isDismissed: null != i && 1 !== l.default.compare(t, i),
    lastDismissedSnowflakeId: i
  }
}
async function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  (0, d.YV)(e, n), await (0, d.wH)(e, t, 1), (0, d.X0)(e, n)
}
async function E(e, t, n, r) {
  let i = (0, d.Sx)(e, n);
  (0, d.YV)(e, r), await (0, d.G4)(e, t, n, i), (0, d.X0)(e, r)
}