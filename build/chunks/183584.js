/** Chunk was on 11010 **/
/** chunk id: 183584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IN: () => c,
  oZ: () => s
}), require("./54381.js"), require("./473749.js");
var Chunk570140 = require("./570140.js"),
  Chunk610394 = require("./610394.js");
require("./238246.jsx"), require("./788983.js"), require("./592125.js"), require("./19780.js");
var Chunk237997 = require("./237997.js");
require("./998502.js"), require("./487029.jsx");
var Chunk710111 = require("./710111.js");
require("./981631.js"), require("./388032.jsx");
let o = {
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

function c(e, t) {
  let n = i.Z.isOverlayV3EnabledForPID(t),
    a = l.default.disableClickableRegions;
  n || a || r.Z.dispatch({
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

function s(e) {
  r.Z.dispatch({
    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
    pid: e,
    enabled: false
  });
  let t = i.Z.isOverlayV3EnabledForPID(e),
    n = l.default.disableClickableRegions;
  l.default.isLocked(e) || t || n || r.Z.dispatch({
    type: "OVERLAY_SET_INPUT_LOCKED",
    locked: true,
    pid: e
  })
}
Chunk710111.FW.padding, o.width, o.height