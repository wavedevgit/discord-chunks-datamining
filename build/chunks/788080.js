/** Chunk was on web.js **/
/** chunk id: 788080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FB: () => b,
  GE: () => v,
  Pu: () => O,
  Vt: () => m,
  XX: () => p,
  Zs: () => y,
  c7: () => E,
  eS: () => _,
  fr: () => h,
  ox: () => g,
  yF: () => S
}), require("./35282.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk406432 = require("./406432.js"),
  Chunk314897 = require("./314897.js"),
  Chunk531441 = require("./531441.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  return i()().to(i()(e))
}

function _(e) {
  var t, n;
  return (0, o.CO)(e.filename) || (0, o.NU)(e.filename) ? "".concat(d._j).concat(null != (t = e.filename) ? t : ".png") : null != (n = e.filename) ? n : ""
}

function h(e) {
  var t, n, r, i;
  if (null == e.fields) return;
  let a = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
    header: null != (t = a[c.I5.HEADER]) ? t : "",
    icon: a[c.I5.ICON_TYPE],
    body: null != (n = a[c.I5.BODY]) ? n : "",
    ctas: (null != (r = a[c.I5.CTAS]) ? r : "").split(",").filter(e => "" !== e),
    timestamp: parseFloat(null != (i = a[c.I5.TIMESTAMP]) ? i : 0),
    theme: a[c.I5.THEME],
    learn_more_link: a[c.I5.LEARN_MORE_LINK],
    classification_id: a[c.I5.CLASSIFICATION_ID]
  }
}

function m(e) {
  return e.type !== l.lK.MESSAGE || "" === e.content && 0 === e.attachments.length
}
let g = e => ({
    [c.bK.DIDNT_VIOLATE_POLICY]: f.intl.string(f.t.mZffAi),
    [c.bK.TOO_STRICT_UNFAIR]: f.intl.string(f.t.wgZVAn),
    [c.bK.DONT_AGREE_PENALTY]: f.intl.string(f.t.eu8G4k),
    [c.bK.SOMETHING_ELSE]: f.intl.string(f.t.XU3s6r)
  })[e],
  E = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function b(e) {
  return null != e && null != e.guild_metadata
}
let y = e => e === u.evJ.DSA_APPEAL_REQUEST_DEFLECTION ? f.intl.string(f.t["0qyXXH"]) : f.intl.string(f.t.aPmsx3);

function O(e) {
  let t = e.max_expiration_time;
  if (null == t) return null;
  try {
    return new Date(t)
  } catch (e) {
    return null
  }
}
let v = () => null != (0, a.e7)([s.default], () => s.default.getSuspendedUserToken());

function S() {
  return null != s.default.getSuspendedUserToken()
}