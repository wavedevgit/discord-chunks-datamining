/** Chunk was on 84927 **/
/** chunk id: 183584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IN: () => o,
  oZ: () => c
}), require("./951288.js"), require("./647438.js");
var Chunk570140 = require("./570140.js"),
  Chunk610394 = require("./610394.js");
require("./238246.jsx"), require("./788983.js"), require("./592125.js"), require("./19780.js");
var Chunk237997 = require("./237997.js");
require("./998502.js"), require("./487029.jsx");
var Chunk710111 = require("./710111.js");
require("./981631.js"), require("./388032.jsx");
let a = {
  width: Chunk710111.FW.width,
  height: Chunk710111.FW.height,
  resizable: false,
  movable: false,
  alwaysOnTop: true,
  frame: false,
  transparent: true,
  hasShadow: false,
  skipTaskbar: true,
  menubar: true,
  backgroundColor: "#00000000",
  titleBarStyle: null
};

function o(e, t) {
  let n = l.ZP.isOverlayV3EnabledForPID(t),
    i = s.default.disableClickableRegions;
  n || i || r.Z.dispatch({
    type: "OVERLAY_SET_INPUT_LOCKED",
    locked: false,
    pid: t
  }), r.Z.dispatch({
    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
    pid: t,
    enabled: true,
    keepOpen: e
  })
}

function c(e) {
  r.Z.dispatch({
    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
    pid: e,
    enabled: false
  });
  let t = l.ZP.isOverlayV3EnabledForPID(e),
    n = s.default.disableClickableRegions;
  s.default.isLocked(e) || t || n || r.Z.dispatch({
    type: "OVERLAY_SET_INPUT_LOCKED",
    locked: true,
    pid: e
  })
}
Chunk710111.FW.padding, a.width, a.height