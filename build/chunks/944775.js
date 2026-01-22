/** Chunk was on 31748 **/
/** chunk id: 944775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lk: () => c,
  hK: () => o
}), require("./627968.js"), require("./64700.js");
var Chunk73153 = require("./73153.js"),
  Chunk395011 = require("./395011.js");
require("./923917.jsx"), require("./574172.js"), require("./734057.js"), require("./383501.js");
var Chunk256415 = require("./256415.js");
require("./837921.js"), require("./927421.jsx");
var Chunk980504 = require("./980504.js");
require("./652215.js"), require("./985018.jsx");
let s = {
  width: Chunk980504.ed.width,
  height: Chunk980504.ed.height,
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
  let n = r.A.isOverlayV3EnabledForPID(t),
    a = i.default.disableClickableRegions;
  n || a || l.h.dispatch({
    type: "OVERLAY_SET_INPUT_LOCKED",
    locked: false,
    pid: t
  }), l.h.dispatch({
    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
    pid: t,
    enabled: true,
    keepOpen: e
  })
}

function c(e) {
  l.h.dispatch({
    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
    pid: e,
    enabled: false
  });
  let t = r.A.isOverlayV3EnabledForPID(e),
    n = i.default.disableClickableRegions;
  i.default.isLocked(e) || t || n || l.h.dispatch({
    type: "OVERLAY_SET_INPUT_LOCKED",
    locked: true,
    pid: e
  })
}
Chunk980504.ed.padding, s.width, s.height