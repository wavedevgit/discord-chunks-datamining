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
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk210887.Z,
    {
      darkSidebar: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Chunk740492.ZP,
    {
      gradientPreset: n
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : Chunk514361.Z,
    r = arguments.length > 3 ? arguments[3] : true,
    o = arguments.length > 4 ? arguments[4] : true,
    c = null != Chunk442837.customUserThemeSettings || Chunk233398;
  return (0, Chunk780384.ap)(module.theme) && exports && null == require && !Chunk695346
}

function f() {
  let e = Chunk695346.L1.getSetting(),
    t = Chunk233398.Ig.getState().isEditorActive();
  return d(Chunk210887.Z, Chunk740492.ZP, Chunk514361.Z, module, exports)
}

function p() {
  let e = Chunk695346.L1.useSetting(),
    t = (0, Chunk233398.Ig)(e => e.isEditorActive());
  return (0, Chunk442837.e7)([Chunk210887.Z, Chunk740492.ZP, Chunk514361.Z], () => d(Chunk210887.Z, Chunk740492.ZP, Chunk514361.Z, module, exports))
}

function _() {
  return p() ? Chunk981631.BRd.DARK : true
}