/** Chunk was on web.js **/
/** chunk id: 393033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jn: () => m,
  Tk: () => b,
  UI: () => O,
  W$: () => v,
  _W: () => p,
  _g: () => y,
  eu: () => E,
  f4: () => h,
  l0: () => g,
  qn: () => A,
  tF: () => _
}), require("./747238.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk77350 = require("./77350.js"),
  Chunk961350 = require("./961350.js"),
  Chunk739010 = require("./739010.js"),
  Chunk239093 = require("./239093.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  return i()().to(i()(e))
}

function _(e) {
  var t, n;
  return (0, s.u)(e.filename) || (0, s.AE)(e.filename) ? "".concat(d._W).concat(null != (t = e.filename) ? t : ".png") : null != (n = e.filename) ? n : ""
}

function h(e) {
  var t, n, r, i;
  if (null == e.fields) return;
  let a = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
    header: null != (t = a[c.g0.HEADER]) ? t : "",
    icon: a[c.g0.ICON_TYPE],
    body: null != (n = a[c.g0.BODY]) ? n : "",
    ctas: (null != (r = a[c.g0.CTAS]) ? r : "").split(",").filter(e => "" !== e),
    timestamp: parseFloat(null != (i = a[c.g0.TIMESTAMP]) ? i : 0),
    theme: a[c.g0.THEME],
    learn_more_link: a[c.g0.LEARN_MORE_LINK],
    classification_id: a[c.g0.CLASSIFICATION_ID]
  }
}

function m(e) {
  return e.type !== l.Xo.MESSAGE || "" === e.content && 0 === e.attachments.length
}
let g = e => ({
    [c.Iv.DIDNT_VIOLATE_POLICY]: f.intl.string(f.t.mZffAi),
    [c.Iv.TOO_STRICT_UNFAIR]: f.intl.string(f.t.wgZVAn),
    [c.Iv.DONT_AGREE_PENALTY]: f.intl.string(f.t.eu8G4k),
    [c.Iv.SOMETHING_ELSE]: f.intl.string(f.t.XU3s6r)
  })[e],
  E = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function y(e) {
  return null != e && null != e.guild_metadata
}
let b = e => e === u.t02.DSA_APPEAL_REQUEST_DEFLECTION ? f.intl.string(f.t["0qyXXH"]) : f.intl.string(f.t.aPmsx3);

function O(e) {
  let t = e.max_expiration_time;
  if (null == t) return null;
  try {
    return new Date(t)
  } catch (e) {
    return null
  }
}
let v = () => null != (0, a.bG)([o.default], () => o.default.getSuspendedUserToken());

function A() {
  return null != o.default.getSuspendedUserToken()
}