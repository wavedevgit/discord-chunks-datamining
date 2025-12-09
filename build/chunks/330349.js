/** Chunk was on 87624 **/
/** chunk id: 330349, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => o,
  N: () => i
});
var Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js");

function a(t) {
  let e = new r.bB(t.items);
  return {
    firstProfileEffect: e.firstProfileEffect,
    firstAvatarDecoration: e.firstAvatarDecoration,
    firstNameplate: e.firstNameplate
  }
}

function i(t) {
  let {
    firstAvatarDecoration: e,
    firstProfileEffect: n,
    firstNameplate: l
  } = a(t);
  return null != e && null != n && null == l || null != e && null != n && null != l
}

function o(t) {
  if (!(0, l.x6)(t)) returnfalse;
  let {
    firstNameplate: e
  } = a(t);
  return null != e
}