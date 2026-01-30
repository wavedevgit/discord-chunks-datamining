/** Chunk was on 78376 **/
/** chunk id: 802790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk899343 = require("./899343.js"),
  Chunk796012 = require("./796012.jsx"),
  Chunk752472 = require("./752472.js");

function u(e) {
  let {
    purchaseState: t,
    currentStep: n,
    onClose: u
  } = e, [_, p] = (0, o.f)({
    purchaseState: t,
    currentStep: n,
    initialScene: c.V1.Scenes.ENTRY,
    purchaseScene: c.V1.Scenes.STARS,
    errorScene: c.V1.Scenes.ERROR,
    successScene: c.V1.Scenes.SUCCESS
  }), m = (0, i.bG)([s.A], () => s.A.useReducedMotion);
  return (0, r.jsxs)(l.rQ0, {
    "data-migration-pending": true,
    align: a.A.Align.START,
    className: d.wx,
    separator: false,
    children: [(0, r.jsx)(c.V1, {
      className: d.lY,
      nextScene: _,
      onScenePlay: e => p(c.V1.getNextScene(e)),
      pauseWhileUnfocused: false,
      pause: m
    }), (0, r.jsx)("div", {
      className: d.qd
    }), (0, r.jsx)(l.s_y, {
      "data-migration-pending": true,
      onClick: u,
      className: d.b
    })]
  })
}