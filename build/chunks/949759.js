/** Chunk was on web.js **/
/** chunk id: 949759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JU: () => u,
  fh: () => l,
  pu: () => d,
  wE: () => c,
  wR: () => f
}), require("./747238.js");
var Chunk988665 = require("./988665.js"),
  Chunk822382 = require("./822382.js"),
  Chunk771650 = require("./771650.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  return (0, i._o)(e).map((e, t, n) => s.l90.test(e.type) || (0, i.Zh)(e, n[t + 1]) ? e : new r.ou(e.getFullMatch(), r.dL))
}

function c(e, t) {
  return {
    type: e,
    data: t
  }
}

function u(e) {
  switch (e) {
    case s.x2k.HISTORY:
      return o.intl.string(o.t.tSZd5c);
    case s.LWr.FILTER_FROM:
      return o.intl.string(o.t.catERA);
    case s.LWr.FILTER_MENTIONS:
      return o.intl.string(o.t["l3K4B/"]);
    case s.LWr.FILTER_IN:
      return o.intl.string(o.t.vHyCgl);
    case s.LWr.FILTER_HAS:
      return o.intl.string(o.t.IC7gHM);
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
    text: o,
    channel: l,
    group: c
  } = n, u = o;
  null != l && (u = (0, i.TZ)(u));
  let d = null != c ? c : r;
  if (t === s.o$q.FILTER_ALL) {
    let e = a.Ay[d];
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