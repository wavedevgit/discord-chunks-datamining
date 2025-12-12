/** Chunk was on web.js **/
/** chunk id: 628221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nk: () => u,
  ew: () => l,
  fC: () => c,
  lR: () => f,
  lw: () => d
}), require("./35282.js");
var Chunk349033 = require("./349033.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  return (0, i.kG)(e).map((e, t, n) => a.TNx.test(e.type) || (0, i.Fr)(e, n[t + 1]) ? e : new r.WU(e.getFullMatch(), r.Xe))
}

function c(e, t) {
  return {
    type: e,
    data: t
  }
}

function u(e) {
  switch (e) {
    case a.rtL.HISTORY:
      return s.intl.string(s.t.tSZd5c);
    case a.dCx.FILTER_FROM:
      return s.intl.string(s.t.catERA);
    case a.dCx.FILTER_MENTIONS:
      return s.intl.string(s.t["l3K4B/"]);
    case a.dCx.FILTER_IN:
      return s.intl.string(s.t.vHyCgl);
    case a.dCx.FILTER_HAS:
      return s.intl.string(s.t.IC7gHM);
    default:
      return ""
  }
}

function d(e) {
  let {
    modeType: t,
    result: n,
    group: r
  } = e, {
    text: s,
    channel: l,
    group: c
  } = n, u = s;
  null != l && (u = (0, i.Jl)(u));
  let d = null != c ? c : r;
  if (t === a.Sap.FILTER_ALL) {
    let e = o.ZP[d];
    (null == e ? true : e.key) != null && (null == e ? true : e.key) !== "" && (u = "".concat(e.key, " ").concat(u))
  }
  return u
}

function f(e) {
  let {
    navId: t,
    index: n,
    selected: r
  } = e;
  return {
    id: "".concat(t, "-").concat(n),
    role: "option",
    tabIndex: false,
    "aria-selected": r
  }
}