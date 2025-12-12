/** Chunk was on web.js **/
/** chunk id: 616030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bk: () => l,
  tK: () => s,
  zC: () => a
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk122890 = require("./122890.js"),
  Chunk110818 = require("./110818.jsx");

function a(e) {
  let {
    currentStep: t,
    purchaseState: n,
    className: a,
    pause: s
  } = e, [l, c] = (0, i.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: o.NQ.Scenes.NORMAL,
    purchaseScene: o.NQ.Scenes.SPEED_START,
    errorScene: o.NQ.Scenes.NORMAL,
    successScene: o.NQ.Scenes.FINISH
  });
  return (0, r.jsx)(o.NQ, {
    className: a,
    nextScene: l,
    onScenePlay: e => c(o.NQ.getNextScene(e)),
    pauseWhileUnfocused: false,
    pause: s
  })
}

function s(e) {
  let {
    currentStep: t,
    purchaseState: n,
    className: a,
    pause: s
  } = e, [l, c] = (0, i.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: o.HC.Scenes.NORMAL,
    purchaseScene: o.HC.Scenes.SPEED_START,
    errorScene: o.HC.Scenes.NORMAL,
    successScene: o.HC.Scenes.FINISH
  });
  return (0, r.jsx)(o.HC, {
    className: a,
    nextScene: l,
    onScenePlay: e => c(o.HC.getNextScene(e)),
    pauseWhileUnfocused: false,
    pause: s
  })
}

function l(e) {
  let {
    currentStep: t,
    purchaseState: n,
    className: a,
    pause: s
  } = e, [l, c] = (0, i.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: o.Db.Scenes.IDLE_ENTRY,
    purchaseScene: o.Db.Scenes.BOOST_START,
    errorScene: o.Db.Scenes.ERROR,
    successScene: o.Db.Scenes.BOOST_END
  });
  return (0, r.jsx)(o.Db, {
    className: a,
    nextScene: l,
    onScenePlay: e => c(o.Db.getNextScene(e)),
    pauseWhileUnfocused: false,
    pause: s
  })
}