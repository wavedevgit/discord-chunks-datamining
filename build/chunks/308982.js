/** Chunk was on 69283 **/
/** chunk id: 308982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E1: () => u,
  iD: () => d,
  kg: () => s
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  Chunk15753 = require("./15753.js"),
  Chunk51835 = require("./51835.js"),
  Chunk561678 = require("./561678.js");

function o() {
  return {
    pickedMemberIds: [],
    currentMemberId: null,
    prompt: "",
    timerDuration: null,
    shuffledOrder: null,
    animation: {
      animatingMemberId: null,
      previousMemberId: null,
      nextMemberId: null
    }
  }
}
let c = (e, t) => {
  null == e.channelStates[t] && (e.channelStates[t] = o())
};

function u(e, t) {
  return s(n => {
    var r;
    let a = null != (r = n.channelStates[e]) ? r : o();
    return null != t ? t(a) : a
  }, r.isEqual)
}
let s = (0, Chunk51835.F)()((0, Chunk15753.n)(e => ({
  channelStates: {},
  pickName: (t, n) => {
    e(e => {
      c(e, t), e.channelStates[t].pickedMemberIds.push(n), e.channelStates[t].currentMemberId = n
    })
  },
  reset: t => {
    e(e => {
      c(e, t), e.channelStates[t].pickedMemberIds = [], e.channelStates[t].currentMemberId = null, e.channelStates[t].shuffledOrder = null, e.channelStates[t].animation = {
        animatingMemberId: null,
        previousMemberId: null,
        nextMemberId: null
      }
    })
  },
  setAnimationState: (t, n) => {
    e(e => {
      c(e, t), e.channelStates[t].animation = n
    })
  },
  setPrompt: (t, n) => {
    e(e => {
      c(e, t), e.channelStates[t].prompt = n
    })
  },
  setTimerDuration: (t, n) => {
    e(e => {
      c(e, t), e.channelStates[t].timerDuration = n
    })
  },
  setShuffledOrder: (t, n) => {
    e(e => {
      c(e, t), e.channelStates[t].shuffledOrder = n
    })
  }
})));

function d(e, t) {
  var n;
  let r = null == (n = s.getState().channelStates[e]) ? true : n.animation;
  return t === (null == r ? true : r.animatingMemberId) ? l.U.ANIMATING : t === (null == r ? true : r.previousMemberId) ? l.U.PREVIOUS : t === (null == r ? true : r.nextMemberId) ? l.U.NEXT : null
}