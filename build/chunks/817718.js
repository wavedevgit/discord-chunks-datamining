/** Chunk was on 92504 **/
/** chunk id: 817718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U3: () => p,
  XM: () => d,
  hd: () => c,
  lI: () => o,
  py: () => u
});
var Chunk481060 = require("./481060.js"),
  Chunk819640 = require("./819640.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let s = () => r.Z.hasLayers() || (0, a.$sL)(),
  o = {
    binds: ["right"],
    comboKeysBindGlobal: true,
    action() {
      if (!s()) return i.S.dispatch(l.CkL.CAROUSEL_NEXT), false
    }
  },
  c = {
    binds: ["left"],
    comboKeysBindGlobal: true,
    action() {
      if (!s()) return i.S.dispatch(l.CkL.CAROUSEL_PREV), false
    }
  },
  d = {
    binds: ["right", "down", "space"],
    comboKeysBindGlobal: true,
    action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), false)
  },
  u = {
    binds: ["left", "up"],
    comboKeysBindGlobal: true,
    action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), false)
  },
  p = {
    binds: ["esc"],
    comboKeysBindGlobal: true,
    action() {
      if (i.S.hasSubscribers(l.CkL.MODAL_CLOSE)) return i.S.dispatch(l.CkL.MODAL_CLOSE), false
    }
  }