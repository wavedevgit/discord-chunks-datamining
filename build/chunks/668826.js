/** Chunk was on 30202 **/
/** chunk id: 668826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KH: () => l,
  TD: () => d,
  YM: () => h,
  Z_: () => c,
  Zj: () => g,
  cn: () => u,
  jA: () => p,
  xD: () => o,
  yW: () => m
}), require("./35282.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk120421 = require("./120421.js"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  return r.Z.dispatch({
    type: "CLICKER_GAME_ADD_POINTS",
    numPoints: t,
    itemId: e
  })
}

function o(e) {
  return r.Z.dispatch({
    type: "CLICKER_GAME_PURCHASE_ITEM",
    id: e
  })
}

function c(e) {
  return r.Z.dispatch({
    type: "CLICKER_GAME_PURCHASE_ITEM_UPGRADE",
    id: e
  })
}

function d(e) {
  if (!s.Z.hasUnlockedAchievement(e)) return r.Z.dispatch({
    type: "CLICKER_GAME_UNLOCK_ACHIEVEMENT",
    id: e
  })
}

function u(e, t) {
  return r.Z.dispatch({
    type: "CLICKER_GAME_UPDATE_ITEM_METADATA",
    itemId: e,
    metadata: t
  })
}

function m() {
  return Chunk570140.Z.dispatch({
    type: "CLICKER_GAME_RESET"
  })
}

function p(e) {
  return r.Z.dispatch({
    type: "CLICKER_GAME_SET_VOLUME",
    volume: e
  })
}

function g(e) {
  return r.Z.dispatch({
    type: "CLICKER_GAME_SET_MUTED",
    isMuted: e
  })
}
async function h(e) {
  r.Z.dispatch({
    type: "CLICKER_GAME_REDEEM_PRIZE_START"
  });
  try {
    await i.tn.post({
      url: a.ANM.HOLIDAY_REDEEM_PRIZE,
      body: {
        prize_hash: e.id.split("").reduce((e, t) => e + Number.parseInt(t), 0)
      },
      rejectWithError: true
    }), r.Z.dispatch({
      type: "CLICKER_GAME_REDEEM_PRIZE_SUCCESS"
    })
  } catch (e) {
    r.Z.dispatch({
      type: "CLICKER_GAME_REDEEM_PRIZE_FAIL"
    })
  }
}