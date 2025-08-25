/** Chunk was on web.js **/
/** chunk id: 972118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk675478 = require("./675478.js"),
  Chunk914010 = require("./914010.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915486 = require("./915486.js"),
  Chunk883904 = require("./883904.js"),
  Chunk428967 = require("./428967.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk644916 = require("./644916.js");

function f(e, t) {
  (0, s.pR)(t ? null : e)
}

function _(e) {
  let t = (0, d.t)(e),
    {
      isDismissed: n
    } = (0, u.H4)(e);

  function i() {
    f(e, n), n ? (0, r.Z1)(e) : (0, u.Bn)(e, t)
  }
  return {
    isDismissed: n,
    handleToggleDismissState: i
  }
}

function p(e) {
  let {
    isDismissed: t
  } = (0, c.Ob)(e, o.default.fromTimestamp(Date.now()));

  function n() {
    f(e, t), t ? (0, r.Z1)(e) : (0, u.po)(e, o.default.fromTimestamp(Date.now() + u.wx))
  }
  return {
    isDismissed: t,
    handleToggleDismissState: n
  }
}

function h(e) {
  let {
    isDismissed: t
  } = (0, u.Fo)(e);

  function n() {
    f(e, t), t ? (0, r.Z1)(e) : (0, u.z2)(e)
  }
  return {
    isDismissed: t,
    handleToggleDismissState: n
  }
}

function m(e, t) {
  let n = (0, a.jl)(t, e);

  function i() {
    f(e, n), n ? (0, r.w9)(e) : (0, r.nm)(e)
  }
  return {
    isDismissed: n,
    handleToggleDismissState: i
  }
}

function g(e) {
  let t = i.Z.getGuildId();
  if (null == t) return {
    isDismissed: false,
    handleToggleDismissState: () => {}
  };
  let n = (0, u.XY)(e, t);

  function r() {
    null != t && (f(e, n), n ? (0, u.ZF)(e, t) : (0, u.XM)(e, t))
  }
  return {
    isDismissed: n,
    handleToggleDismissState: r
  }
}

function E(e) {
  let t = i.Z.getGuildId();
  if (null == t) return {
    isDismissed: false,
    handleToggleDismissState: () => {}
  };
  let n = (0, u.oK)(e, t);

  function r() {
    null != t && (f(e, n), n ? (0, u.J0)(e, t) : (0, u.Ei)(e, t))
  }
  return {
    isDismissed: n,
    handleToggleDismissState: r
  }
}

function b(e, t) {
  if ((0, l.lg)(e)) return _(e);
  if ((0, l.I0)(e)) return p(e);
  if ((0, l.OQ)(e)) return h(e);
  if ((0, l.Vc)(e)) return g(e);
  if ((0, l.ms)(e)) return E(e);
  else return m(e, t)
}