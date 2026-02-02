/** Chunk was on 92643 **/
/** chunk id: 660653, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Wb: () => s,
  uh: () => a
});
var Chunk993408 = require("./993408.js"),
  Chunk442759 = require("./442759.js");

function l(t) {
  var e;
  let n;
  return e = t.items, {
    firstProfileEffect: (n = new i.Ym(e)).firstProfileEffect,
    firstAvatarDecoration: n.firstAvatarDecoration,
    firstNameplate: n.firstNameplate
  }
}

function a(t) {
  return function(t) {
    let {
      firstAvatarDecoration: e,
      firstProfileEffect: n,
      firstNameplate: r
    } = t;
    return null != e && null != n && null == r || null != e && null != n && null != r
  }(l(t))
}

function s(t) {
  if (!(0, r.aw)(t)) returnfalse;
  let {
    firstNameplate: e
  } = l(t);
  return null != e
}