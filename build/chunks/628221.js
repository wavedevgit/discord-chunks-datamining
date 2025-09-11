/** Chunk was on web.js **/
/** chunk id: 628221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nk: () => c,
  cm: () => s,
  fC: () => l,
  lR: () => u
});
var Chunk349033 = require("./349033.js"),
  Chunk607802 = require("./607802.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  return (0, i.kG)(e).map((e, t, n) => (0, i.Fr)(e, n[t + 1]) ? e : new r.WU(e.getFullMatch(), r.Xe))
}

function l(e, t) {
  return {
    type: e,
    data: t
  }
}

function c(e) {
  switch (e) {
    case a.rtL.HISTORY:
      return o.intl.string(o.t.tSZd5e);
    case a.dCx.FILTER_FROM:
      return o.intl.string(o.t.catERE);
    case a.dCx.FILTER_MENTIONS:
      return o.intl.string(o.t.l3K4Bw);
    case a.dCx.FILTER_IN:
      return o.intl.string(o.t.vHyCgo);
    case a.dCx.FILTER_HAS:
      return o.intl.string(o.t.IC7gHB);
    default:
      return ""
  }
}

function u(e) {
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