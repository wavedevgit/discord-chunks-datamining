/** Chunk was on 49289 **/
/** chunk id: 518062, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk122890 = require("./122890.js"),
  Chunk110818 = require("./110818.jsx"),
  Chunk567440 = require("./567440.js");

function _(e) {
  let {
    purchaseState: n,
    currentStep: t,
    onClose: _
  } = e, [u, d] = (0, c.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: s.fe.Scenes.ENTRY,
    purchaseScene: s.fe.Scenes.STARS,
    errorScene: s.fe.Scenes.ERROR,
    successScene: s.fe.Scenes.SUCCESS
  }), f = (0, r.e7)([a.Z], () => a.Z.useReducedMotion);
  return (0, o.jsxs)(i.xBx, {
    align: l.Z.Align.START,
    className: p.header,
    separator: false,
    children: [(0, o.jsx)(s.fe, {
      className: p.animation,
      nextScene: u,
      onScenePlay: e => d(s.fe.getNextScene(e)),
      pauseWhileUnfocused: false,
      pause: f
    }), (0, o.jsx)("div", {
      className: p.headerTitle
    }), (0, o.jsx)(i.olH, {
      onClick: _,
      className: p.closeButton
    })]
  })
}