/** Chunk was on 92643 **/
/** chunk id: 660653, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => s,
  u: () => a
});
var Chunk993408 = require("./993408.js"),
  Chunk442759 = require("./442759.js");

function l(t) {
  let e = new r.Ym(t.items);
  return {
    firstProfileEffect: e.firstProfileEffect,
    firstAvatarDecoration: e.firstAvatarDecoration,
    firstNameplate: e.firstNameplate
  }
}

function a(t) {
  let {
    firstAvatarDecoration: e,
    firstProfileEffect: n,
    firstNameplate: i
  } = l(t);
  return null != e && null != n && null == i || null != e && null != n && null != i
}

function s(t) {
  if (!(0, i.aw)(t)) returnfalse;
  let {
    firstNameplate: e
  } = l(t);
  return null != e
}