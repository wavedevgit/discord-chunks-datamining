/** Chunk was on web.js **/
/** chunk id: 984802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A6: () => p,
  Ll: () => _,
  Zp: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk233398 = require("./233398.js"),
  Chunk514361 = require("./514361.js"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js");

function d() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : s.Z,
    {
      darkSidebar: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.ZP,
    {
      gradientPreset: n
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.Z,
    r = arguments.length > 3 ? arguments[3] : true,
    a = arguments.length > 4 ? arguments[4] : true,
    c = null != r.customUserThemeSettings || a;
  return (0, i.ap)(e.theme) && t && null == n && !c
}

function f() {
  let e = c.L1.getSetting(),
    t = a.Ig.getState().isEditorActive();
  return d(s.Z, l.ZP, o.Z, e, t)
}

function p() {
  let e = c.L1.useSetting(),
    t = (0, a.Ig)(e => e.isEditorActive());
  return (0, r.e7)([s.Z, l.ZP, o.Z], () => d(s.Z, l.ZP, o.Z, e, t))
}

function _() {
  return p() ? u.BRd.DARK : true
}