/** Chunk was on 13873 **/
/** chunk id: 125268, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AX: () => c,
  BR: () => d,
  Bo: () => g,
  Df: () => p,
  LT: () => b,
  ZZ: () => f,
  cV: () => u,
  fW: () => m,
  gr: () => h,
  oW: () => s
});
var Chunk261470 = require("./261470.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk984063 = require("./984063.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n, r, i) {
  l.Z.dispatch({
    type: "SHARED_CANVAS_DRAW_LINE_POINT",
    channelId: e,
    userId: n,
    lineId: t,
    streamerId: r,
    point: i
  })
}

function c(e, t, n, r) {
  return i.tn.post({
    url: o.ANM.SHARED_CANVAS_LINES(e, n),
    body: {
      line_id: t,
      points: r
    },
    rejectWithError: false
  })
}

function u(e, t, n, r) {
  l.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
    userId: t,
    lineId: e,
    newPoints: r,
    streamerId: n
  })
}

function d(e, t, n) {
  return i.tn.post({
    url: o.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
    body: {
      emoji_hose: n
    },
    rejectWithError: false
  })
}

function p(e, t, n) {
  i.tn.del({
    url: o.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
    backoff: new r.Z,
    rejectWithError: true
  })
}

function f(e, t) {
  t.state = a.f.STOP, l.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: t,
    userId: t.userId,
    streamerId: e
  })
}

function h(e, t, n) {
  l.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: e,
    userId: t,
    streamerId: n
  })
}

function m(e, t) {
  l.Z.dispatch({
    type: "SHARED_CANVAS_CLEAR_DRAWABLES",
    drawables: e,
    streamerId: t
  })
}

function g(e) {
  l.Z.dispatch({
    type: "SHARED_CANVAS_SET_DRAW_MODE",
    drawMode: e
  })
}

function b() {
  Chunk570140.Z.dispatch({
    type: "TOGGLE_OVERLAY_CANVAS"
  })
}