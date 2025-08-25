/** Chunk was on web.js **/
/** chunk id: 330349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => s,
  N: () => a
});
var Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js");

function o(e) {
  let t = new i.bB(e.items);
  return {
    firstProfileEffect: t.firstProfileEffect,
    firstAvatarDecoration: t.firstAvatarDecoration,
    firstNameplate: t.firstNameplate
  }
}

function a(e) {
  let {
    firstAvatarDecoration: t,
    firstProfileEffect: n,
    firstNameplate: r
  } = o(e), i = null != t && null != n && null == r, a = null != t && null != n && null != r;
  return i || a
}

function s(e) {
  if (!(0, r.x6)(e)) returnfalse;
  let {
    firstNameplate: t
  } = o(e);
  return null != t
}