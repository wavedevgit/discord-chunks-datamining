/** Chunk was on 92643 **/
/** chunk id: 660653, original params: t,e,l (module,exports,require) **/
require.d(exports, {
  W: () => i,
  u: () => s
});
var Chunk993408 = require("./993408.js"),
  Chunk442759 = require("./442759.js");

function a(t) {
  let e = new n.Ym(t.items);
  return {
    firstProfileEffect: e.firstProfileEffect,
    firstAvatarDecoration: e.firstAvatarDecoration,
    firstNameplate: e.firstNameplate
  }
}

function s(t) {
  let {
    firstAvatarDecoration: e,
    firstProfileEffect: l,
    firstNameplate: r
  } = a(t);
  return null != e && null != l && null == r || null != e && null != l && null != r
}

function i(t) {
  if (!(0, r.aw)(t)) returnfalse;
  let {
    firstNameplate: e
  } = a(t);
  return null != e
}