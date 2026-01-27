/** Chunk was on 52199 **/
/** chunk id: 949759, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  JU: () => u,
  fh: () => o,
  pu: () => d,
  wE: () => c,
  wR: () => h
}), require("./747238.js");
var Chunk988665 = require("./988665.js"),
  Chunk822382 = require("./822382.js"),
  Chunk771650 = require("./771650.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  return (0, l._o)(e).map((e, t, r) => a.l90.test(e.type) || (0, l.Zh)(e, r[t + 1]) ? e : new n.ou(e.getFullMatch(), n.dL))
}

function c(e, t) {
  return {
    type: e,
    data: t
  }
}

function u(e) {
  switch (e) {
    case a.x2k.HISTORY:
      return i.intl.string(i.t.tSZd5c);
    case a.LWr.FILTER_FROM:
      return i.intl.string(i.t.catERA);
    case a.LWr.FILTER_MENTIONS:
      return i.intl.string(i.t["l3K4B/"]);
    case a.LWr.FILTER_IN:
      return i.intl.string(i.t.vHyCgl);
    case a.LWr.FILTER_HAS:
      return i.intl.string(i.t.IC7gHM);
    default:
      return ""
  }
}

function d(e) {
  let {
    modeType: t,
    result: r,
    group: n
  } = e, {
    text: i,
    channel: o,
    group: c
  } = r, u = i;
  if (null != o && (u = (0, l.TZ)(u)), t === a.o$q.FILTER_ALL) {
    let e = s.Ay[null != c ? c : n];
    (null == e ? true : e.key) != null && (null == e ? true : e.key) !== "" && (u = "".concat(e.key, " ").concat(u))
  }
  return u
}

function h(e) {
  let {
    navId: t,
    index: r,
    selected: n
  } = e;
  return {
    id: "".concat(t, "-").concat(r),
    role: "option",
    tabIndex: false,
    "aria-selected": n
  }
}