/** Chunk was on 69813 **/
/** chunk id: 125268, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AX: () => s,
  BR: () => d,
  Bo: () => m,
  Df: () => f,
  LT: () => h,
  ZZ: () => p,
  cV: () => u,
  fW: () => b,
  gr: () => g,
  oW: () => c
});
var Chunk261470 = require("./261470.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk984063 = require("./984063.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n, r, l) {
  i.Z.dispatch({
    type: "SHARED_CANVAS_DRAW_LINE_POINT",
    channelId: e,
    userId: n,
    lineId: t,
    streamerId: r,
    point: l
  })
}

function s(e, t, n, r) {
  return l.tn.post({
    url: o.ANM.SHARED_CANVAS_LINES(e, n),
    body: {
      line_id: t,
      points: r
    },
    rejectWithError: false
  })
}

function u(e, t, n, r) {
  i.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
    userId: t,
    lineId: e,
    newPoints: r,
    streamerId: n
  })
}

function d(e, t, n) {
  return l.tn.post({
    url: o.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
    body: {
      emoji_hose: n
    },
    rejectWithError: false
  })
}

function f(e, t, n) {
  l.tn.del({
    url: o.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
    backoff: new r.Z,
    rejectWithError: true
  })
}

function p(e, t) {
  t.state = a.f.STOP, i.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: t,
    userId: t.userId,
    streamerId: e
  })
}

function g(e, t, n) {
  i.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: e,
    userId: t,
    streamerId: n
  })
}

function b(e, t) {
  i.Z.dispatch({
    type: "SHARED_CANVAS_CLEAR_DRAWABLES",
    drawables: e,
    streamerId: t
  })
}

function m(e) {
  i.Z.dispatch({
    type: "SHARED_CANVAS_SET_DRAW_MODE",
    drawMode: e
  })
}

function h() {
  i.Z.dispatch({
    type: "TOGGLE_OVERLAY_CANVAS"
  })
}