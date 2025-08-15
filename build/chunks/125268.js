/** Chunk was on 24255 **/
/** chunk id: 125268, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AX: () => s,
  BR: () => d,
  Bo: () => g,
  Df: () => f,
  LT: () => S,
  ZZ: () => p,
  cV: () => c,
  fW: () => E,
  gr: () => m,
  oW: () => u
});
var Chunk261470 = require("./261470.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk984063 = require("./984063.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n, r, l) {
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

function c(e, t, n, r) {
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

function m(e, t, n) {
  i.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: e,
    userId: t,
    streamerId: n
  })
}

function E(e, t) {
  i.Z.dispatch({
    type: "SHARED_CANVAS_CLEAR_DRAWABLES",
    drawables: e,
    streamerId: t
  })
}

function g(e) {
  i.Z.dispatch({
    type: "SHARED_CANVAS_SET_DRAW_MODE",
    drawMode: e
  })
}

function S() {
  Chunk570140.Z.dispatch({
    type: "TOGGLE_OVERLAY_CANVAS"
  })
}