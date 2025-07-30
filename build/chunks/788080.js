/** Chunk was on 75347 **/
"use strict";
n.d(t, {
  FB: () => A,
  GE: () => m,
  Pu: () => f,
  Vt: () => N,
  XX: () => u,
  Zs: () => T,
  c7: () => p,
  eS: () => d,
  fr: () => S,
  ox: () => L
}), n(35282);
var i = n(913527),
  r = n.n(i),
  a = n(442837),
  s = n(406432),
  o = n(314897),
  _ = n(531441),
  E = n(800530),
  l = n(981631),
  c = n(959517),
  I = n(388032);

function u(e) {
  return r()().to(r()(e))
}

function d(e) {
  var t, n;
  return (0, s.CO)(e.filename) || (0, s.NU)(e.filename) ? "".concat(c._j).concat(null != (t = e.filename) ? t : ".png") : null != (n = e.filename) ? n : ""
}

function S(e) {
  var t, n, i, r;
  if (null == e.fields) return;
  let a = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
    header: null != (t = a[E.I5.HEADER]) ? t : "",
    icon: a[E.I5.ICON_TYPE],
    body: null != (n = a[E.I5.BODY]) ? n : "",
    ctas: (null != (i = a[E.I5.CTAS]) ? i : "").split(",").filter(e => "" !== e),
    timestamp: parseFloat(null != (r = a[E.I5.TIMESTAMP]) ? r : 0),
    theme: a[E.I5.THEME],
    learn_more_link: a[E.I5.LEARN_MORE_LINK],
    classification_id: a[E.I5.CLASSIFICATION_ID]
  }
}

function N(e) {
  return e.type !== _.lK.MESSAGE || "" === e.content && 0 === e.attachments.length
}
let L = e => ({
    [E.bK.DIDNT_VIOLATE_POLICY]: I.intl.string(I.t.mZffAg),
    [E.bK.TOO_STRICT_UNFAIR]: I.intl.string(I.t.wgZVAg),
    [E.bK.DONT_AGREE_PENALTY]: I.intl.string(I.t.eu8G4u),
    [E.bK.SOMETHING_ELSE]: I.intl.string(I.t.XU3s6u)
  })[e],
  p = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function A(e) {
  return null != e && null != e.guild_metadata
}
let T = e => e === l.evJ.DSA_APPEAL_REQUEST_DEFLECTION ? I.intl.string(I.t["0qyXXF"]) : I.intl.string(I.t.aPmsx8);

function f(e) {
  let t = e.max_expiration_time;
  if (null == t) return null;
  try {
    return new Date(t)
  } catch (e) {
    return null
  }
}
let m = () => null != (0, a.e7)([o.default], () => o.default.getSuspendedUserToken())