/** Chunk was on web.js **/
/** chunk id: 518062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk122890 = require("./122890.js"),
  Chunk110818 = require("./110818.jsx"),
  Chunk197081 = require("./197081.js");

function d(e) {
  let {
    purchaseState: t,
    currentStep: n,
    onClose: d
  } = e, [f, p] = (0, l.z)({
    purchaseState: t,
    currentStep: n,
    initialScene: c.fe.Scenes.ENTRY,
    purchaseScene: c.fe.Scenes.STARS,
    errorScene: c.fe.Scenes.ERROR,
    successScene: c.fe.Scenes.SUCCESS
  }), _ = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
  return (0, r.jsxs)(o.xBx, {
    "data-migration-pending": true,
    align: s.Z.Align.START,
    className: u.header,
    separator: false,
    children: [(0, r.jsx)(c.fe, {
      className: u.animation,
      nextScene: f,
      onScenePlay: e => p(c.fe.getNextScene(e)),
      pauseWhileUnfocused: false,
      pause: _
    }), (0, r.jsx)("div", {
      className: u.headerTitle
    }), (0, r.jsx)(o.olH, {
      "data-migration-pending": true,
      onClick: d,
      className: u.closeButton
    })]
  })
}