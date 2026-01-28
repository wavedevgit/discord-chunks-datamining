/** Chunk was on 24665 **/
/** chunk id: 802790, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    purchaseState: n,
    currentStep: t,
    onClose: p
  } = e, [d, _] = (0, o.f)({
    purchaseState: n,
    currentStep: t,
    initialScene: c.V1.Scenes.ENTRY,
    purchaseScene: c.V1.Scenes.STARS,
    errorScene: c.V1.Scenes.ERROR,
    successScene: c.V1.Scenes.SUCCESS
  }), m = (0, i.bG)([a.A], () => a.A.useReducedMotion);
  return (0, l.jsxs)(r.rQ0, {
    "data-migration-pending": true,
    align: s.A.Align.START,
    className: u.wx,
    separator: false,
    children: [(0, l.jsx)(c.V1, {
      className: u.lY,
      nextScene: d,
      onScenePlay: e => _(c.V1.getNextScene(e)),
      pauseWhileUnfocused: false,
      pause: m
    }), (0, l.jsx)("div", {
      className: u.qd
    }), (0, l.jsx)(r.s_y, {
      "data-migration-pending": true,
      onClick: p,
      className: u.b
    })]
  })
}