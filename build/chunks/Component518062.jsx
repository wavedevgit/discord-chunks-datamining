/** Chunk was on 66546 **/
/** chunk id: 518062, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk122890 = require("./122890.js"),
  Chunk110818 = require("./110818.jsx"),
  Chunk197081 = require("./197081.js");

function s(e) {
  let {
    purchaseState: n,
    currentStep: t,
    onClose: s
  } = e, [u, d] = (0, c.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: _.fe.Scenes.ENTRY,
    purchaseScene: _.fe.Scenes.STARS,
    errorScene: _.fe.Scenes.ERROR,
    successScene: _.fe.Scenes.SUCCESS
  }), b = (0, r.e7)([a.Z], () => a.Z.useReducedMotion);
  return (0, o.jsxs)(i.xBx, {
    align: l.Z.Align.START,
    className: p.header,
    separator: false,
    children: [(0, o.jsx)(_.fe, {
      className: p.animation,
      nextScene: u,
      onScenePlay: e => d(_.fe.getNextScene(e)),
      pauseWhileUnfocused: false,
      pause: b
    }), (0, o.jsx)("div", {
      className: p.headerTitle
    }), (0, o.jsx)(i.olH, {
      onClick: s,
      className: p.closeButton
    })]
  })
}