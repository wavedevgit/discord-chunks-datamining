/** Chunk was on web.js **/
/** chunk id: 518062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk122890 = require("./122890.js"),
  Chunk110818 = require("./110818.jsx"),
  Chunk351815 = require("./351815.js");

function d(e) {
  let {
    purchaseState: t,
    currentStep: n,
    onClose: d
  } = e, [f, _] = (0, l.z)({
    purchaseState: t,
    currentStep: n,
    initialScene: c.fe.Scenes.ENTRY,
    purchaseScene: c.fe.Scenes.STARS,
    errorScene: c.fe.Scenes.ERROR,
    successScene: c.fe.Scenes.SUCCESS
  }), p = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, r.jsxs)(a.xBx, {
    "data-migration-pending": true,
    align: s.Z.Align.START,
    className: u.header,
    separator: false,
    children: [(0, r.jsx)(c.fe, {
      className: u.animation,
      nextScene: f,
      onScenePlay: e => _(c.fe.getNextScene(e)),
      pauseWhileUnfocused: false,
      pause: p
    }), (0, r.jsx)("div", {
      className: u.headerTitle
    }), (0, r.jsx)(a.olH, {
      "data-migration-pending": true,
      onClick: d,
      className: u.closeButton
    })]
  })
}