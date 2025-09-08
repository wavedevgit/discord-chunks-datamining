/** Chunk was on web.js **/
/** chunk id: 972118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk675478 = require("./675478.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk883904 = require("./883904.js"),
  Chunk428967 = require("./428967.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk644916 = require("./644916.js");

function f(e, t) {
  (0, s.pR)(t ? null : e)
}

function _(e) {
  let t = (0, d.t)(e);

  function n() {
    return (0, u.H4)(e).isDismissed
  }

  function i() {
    let i = n();
    return (f(e, i), i) ? ((0, r.Z1)(e), false) : ((0, u.Bn)(e, t), true)
  }
  return {
    isDismissed: n(),
    handleToggleDismissState: i
  }
}

function p(e) {
  function t() {
    return (0, c.Ob)(e, o.default.fromTimestamp(Date.now())).isDismissed
  }

  function n() {
    let n = t();
    return (f(e, n), n) ? ((0, r.Z1)(e), false) : ((0, u.po)(e, o.default.fromTimestamp(Date.now() + u.wx)), true)
  }
  return {
    isDismissed: t(),
    handleToggleDismissState: n
  }
}

function h(e) {
  function t() {
    return (0, u.Fo)(e, {
      cooldownDurationMs: a.Z.Millis.WEEK
    }).isDismissed
  }

  function n() {
    let n = t();
    return (f(e, n), n) ? ((0, r.Z1)(e), false) : ((0, u.z2)(e), true)
  }
  return {
    isDismissed: t(),
    handleToggleDismissState: n
  }
}

function m(e) {
  function t() {
    return (0, c.zu)(e)
  }

  function n() {
    let n = t();
    return (f(e, n), n) ? ((0, r.w9)(e), false) : ((0, r.nm)(e), true)
  }
  return {
    isDismissed: t(),
    handleToggleDismissState: n
  }
}

function g(e) {
  let t = i.Z.getGuildId();

  function n() {
    return null != t && (0, u.XY)(e, t)
  }

  function r() {
    if (null == t) returnfalse;
    let r = n();
    return (f(e, r), r) ? ((0, u.ZF)(e, t), false) : ((0, u.XM)(e, t), true)
  }
  return {
    isDismissed: n(),
    handleToggleDismissState: r
  }
}

function E(e) {
  let t = i.Z.getGuildId();

  function n() {
    return null != t && (0, u.oK)(e, t)
  }

  function r() {
    if (null == t) returnfalse;
    let r = n();
    return (f(e, r), r) ? ((0, u.J0)(e, t), false) : ((0, u.Ei)(e, t), true)
  }
  return {
    isDismissed: n(),
    handleToggleDismissState: r
  }
}

function b(e) {
  if ((0, l.lg)(e)) return _(e);
  if ((0, l.I0)(e)) return p(e);
  if ((0, l.OQ)(e)) return h(e);
  if ((0, l.Vc)(e)) return g(e);
  if ((0, l.ms)(e)) return E(e);
  else return m(e)
}