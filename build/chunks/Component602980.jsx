/** Chunk was on web.js **/
/** chunk id: 602980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ec: () => l,
  LQ: () => s,
  Ss: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk899343 = require("./899343.js"),
  Chunk796012 = require("./796012.jsx");

function o(e) {
  let {
    currentStep: t,
    purchaseState: n,
    className: o,
    pause: s
  } = e, [l, c] = (0, i.f)({
    purchaseState: n,
    currentStep: t,
    initialScene: a.yh.Scenes.NORMAL,
    purchaseScene: a.yh.Scenes.SPEED_START,
    errorScene: a.yh.Scenes.NORMAL,
    successScene: a.yh.Scenes.FINISH
  });
  return (0, r.jsx)(a.yh, {
    className: o,
    nextScene: l,
    onScenePlay: e => c(a.yh.getNextScene(e)),
    pauseWhileUnfocused: false,
    pause: s
  })
}

function s(e) {
  let {
    currentStep: t,
    purchaseState: n,
    className: o,
    pause: s
  } = e, [l, c] = (0, i.f)({
    purchaseState: n,
    currentStep: t,
    initialScene: a.rF.Scenes.NORMAL,
    purchaseScene: a.rF.Scenes.SPEED_START,
    errorScene: a.rF.Scenes.NORMAL,
    successScene: a.rF.Scenes.FINISH
  });
  return (0, r.jsx)(a.rF, {
    className: o,
    nextScene: l,
    onScenePlay: e => c(a.rF.getNextScene(e)),
    pauseWhileUnfocused: false,
    pause: s
  })
}

function l(e) {
  let {
    currentStep: t,
    purchaseState: n,
    className: o,
    pause: s
  } = e, [l, c] = (0, i.f)({
    purchaseState: n,
    currentStep: t,
    initialScene: a.yC.Scenes.IDLE_ENTRY,
    purchaseScene: a.yC.Scenes.BOOST_START,
    errorScene: a.yC.Scenes.ERROR,
    successScene: a.yC.Scenes.BOOST_END
  });
  return (0, r.jsx)(a.yC, {
    className: o,
    nextScene: l,
    onScenePlay: e => c(a.yC.getNextScene(e)),
    pauseWhileUnfocused: false,
    pause: s
  })
}