/** Chunk was on web.js **/
/** chunk id: 20439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk594061 = require("./594061.js"),
  Chunk967198 = require("./967198.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk541689 = require("./541689.js"),
  Chunk256787 = require("./256787.js"),
  Chunk826673 = require("./826673.js"),
  Chunk367727 = require("./367727.js"),
  Chunk357186 = require("./357186.js");

function _(e, t) {
  (0, c.IR)(t ? null : e)
}

function h(e, t) {
  let n = (0, p.c)(e),
    r = (0, f.J8)(e, {});
  return (_(e, t), t) ? ((0, a._N)(e), false) : ((0, f.bQ)(e, n, r), true)
}

function m(e, t) {
  let n = (0, f.J8)(e, {});
  return (_(e, t), t) ? ((0, a._N)(e), false) : ((0, f.Uu)(e, l.default.fromTimestamp(Date.now() + f.rw), n), true)
}

function g(e, t) {
  return (_(e, t), t) ? ((0, a._N)(e), false) : ((0, f.ss)(e, (0, f.J8)(e, {})), true)
}

function E(e, t) {
  return (_(e, t), t) ? ((0, a.xB)(e), false) : ((0, a.o_)(e), true)
}

function y(e, t, n) {
  if (null == t) returnfalse;
  let r = null != t ? (0, f.Sx)(e, t) : 1;
  return (_(e, n), n) ? ((0, f.R2)(e, t, r - 1), false) : ((0, f.wH)(e, t, r), true)
}

function b(e, t, n) {
  if (null == t) returnfalse;
  let r = null != t ? (0, f.Sx)(e, t) : 1;
  return (_(e, n), n) ? ((0, f.rZ)(e, t, r - 1), false) : ((0, f.gG)(e, t, r), true)
}

function O(e, t, n) {
  if (null == t) returnfalse;
  let r = null != t ? (0, f.Sx)(e, t) : 1;
  return (_(e, n), n) ? ((0, f.fb)(e, t, r - 1), false) : ((0, f.G4)(e, l.default.fromTimestamp(Date.now() + f.rw), t, r), true)
}

function v(e) {
  let t = (0, i.bG)([o.A], () => o.A.getGuildId()),
    n = (0, d.JZ)(e, {
      cooldownDurationMs: s.A.Millis.WEEK,
      guildId: t
    }),
    a = (0, r.useCallback)(() => {
      if ((0, u.L0)(e)) return h(e, n);
      if ((0, u.IL)(e)) return m(e, n);
      if ((0, u.ki)(e)) return g(e, n);
      if ((0, u.ef)(e)) return y(e, t, n);
      if ((0, u.XQ)(e)) return b(e, t, n);
      else if ((0, u.PN)(e)) return O(e, t, n);
      else return E(e, n)
    }, [e, t, n]);
  return {
    isDismissed: n,
    handleToggleDismissState: a
  }
}