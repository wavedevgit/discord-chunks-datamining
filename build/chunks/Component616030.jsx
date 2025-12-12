/** Chunk was on web.js **/
/** chunk id: 616030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bk: () => l,
  tK: () => s,
  zC: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk122890 = require("./122890.js"),
  Chunk110818 = require("./110818.jsx");

function o(e) {
  let {
    currentStep: t,
    purchaseState: n,
    className: o,
    pause: s
  } = e, [l, c] = (0, i.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: a.NQ.Scenes.NORMAL,
    purchaseScene: a.NQ.Scenes.SPEED_START,
    errorScene: a.NQ.Scenes.NORMAL,
    successScene: a.NQ.Scenes.FINISH
  });
  return (0, r.jsx)(a.NQ, {
    className: o,
    nextScene: l,
    onScenePlay: e => c(a.NQ.getNextScene(e)),
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
  } = e, [l, c] = (0, i.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: a.HC.Scenes.NORMAL,
    purchaseScene: a.HC.Scenes.SPEED_START,
    errorScene: a.HC.Scenes.NORMAL,
    successScene: a.HC.Scenes.FINISH
  });
  return (0, r.jsx)(a.HC, {
    className: o,
    nextScene: l,
    onScenePlay: e => c(a.HC.getNextScene(e)),
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
  } = e, [l, c] = (0, i.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: a.Db.Scenes.IDLE_ENTRY,
    purchaseScene: a.Db.Scenes.BOOST_START,
    errorScene: a.Db.Scenes.ERROR,
    successScene: a.Db.Scenes.BOOST_END
  });
  return (0, r.jsx)(a.Db, {
    className: o,
    nextScene: l,
    onScenePlay: e => c(a.Db.getNextScene(e)),
    pauseWhileUnfocused: false,
    pause: s
  })
}