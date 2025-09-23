/** Chunk was on 96887 **/
/** chunk id: 330349, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  L: () => o,
  N: () => l
});
var Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js");

function n(e) {
  let t = new i.bB(e.items);
  return {
    firstProfileEffect: t.firstProfileEffect,
    firstAvatarDecoration: t.firstAvatarDecoration,
    firstNameplate: t.firstNameplate
  }
}

function l(e) {
  let {
    firstAvatarDecoration: t,
    firstProfileEffect: r,
    firstNameplate: a
  } = n(e);
  return null != t && null != r && null == a || null != t && null != r && null != a
}

function o(e) {
  if (!(0, a.x6)(e)) returnfalse;
  let {
    firstNameplate: t
  } = n(e);
  return null != t
}