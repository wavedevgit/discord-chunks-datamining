/** Chunk was on 39476 **/
/** chunk id: 817718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U3: () => p,
  XM: () => u,
  hd: () => c,
  lI: () => s,
  py: () => d
});
var Chunk481060 = require("./481060.js"),
  Chunk819640 = require("./819640.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let a = () => Chunk819640.Z.hasLayers() || (0, Chunk481060.$sL)(),
  s = 12633 == require.j ? {
    binds: ["right"],
    comboKeysBindGlobal: true,
    action() {
      if (!a()) return Chunk585483.S.dispatch(Chunk981631.CkL.CAROUSEL_NEXT), false
    }
  } : null,
  c = 12633 == require.j ? {
    binds: ["left"],
    comboKeysBindGlobal: true,
    action() {
      if (!a()) return Chunk585483.S.dispatch(Chunk981631.CkL.CAROUSEL_PREV), false
    }
  } : null,
  u = {
    binds: ["right", "down", "space"],
    comboKeysBindGlobal: true,
    action: () => (Chunk585483.S.dispatch(Chunk981631.CkL.MODAL_CAROUSEL_NEXT), false)
  },
  d = {
    binds: ["left", "up"],
    comboKeysBindGlobal: true,
    action: () => (Chunk585483.S.dispatch(Chunk981631.CkL.MODAL_CAROUSEL_PREV), false)
  },
  p = {
    binds: ["esc"],
    comboKeysBindGlobal: true,
    action() {
      if (Chunk585483.S.hasSubscribers(Chunk981631.CkL.MODAL_CLOSE)) return Chunk585483.S.dispatch(Chunk981631.CkL.MODAL_CLOSE), false
    }
  }