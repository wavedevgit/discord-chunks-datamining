/** Chunk was on web.js **/
/** chunk id: 872810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L6: () => F,
  Rc: () => B,
  WH: () => R,
  aP: () => k,
  dV: () => Z,
  g: () => j,
  iV: () => L,
  n9: () => M,
  pR: () => x,
  rn: () => D,
  tK: () => P,
  xc: () => U,
  zf: () => G
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk258609 = require("./258609.js"),
  Chunk569545 = require("./569545.js"),
  Chunk525925 = require("./525925.js"),
  Chunk522474 = require("./522474.js"),
  Chunk543882 = require("./543882.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js"),
  Chunk70956 = require("./70956.js"),
  Chunk557457 = require("./557457.js"),
  Chunk573261 = require("./573261.js");
require("./26151.js"), require("./493683.js");
var Chunk475179 = require("./475179.js");
require("./287734.js");
var Chunk981631 = require("./981631.js"),
  Chunk70722 = require("./70722.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}
let N = 2;

function R(e, t, n) {
  s.Z.dispatch(C({
    type: "STREAM_START",
    streamType: null != e ? S.lo.GUILD : S.lo.CALL,
    guildId: e,
    channelId: t,
    appContext: __OVERLAY__ ? T.IlC.OVERLAY : T.IlC.APP
  }, n))
}

function P(e, t) {
  let n = (0, c.V9)(e);
  s.Z.dispatch({
    type: "STREAM_SET_PAUSED",
    streamKey: n,
    paused: t
  })
}

function w(e, t) {
  let n = h.Z.getChannel(t);
  return i()(null != n, "Cannot join a null voice channel"), !E.Z.isInChannel(t) && (0, b.rY)(n, E.Z, m.Z)
}

function D(e, t) {
  if (null != l.Z.getRemoteSessionId()) return;
  let {
    guildId: n,
    channelId: r
  } = e;
  if (null != n && w(n, r)) return;
  let i = (0, c.V9)(e),
    o = (null == t ? true : t.forceMultiple) || _.Z.getAllActiveStreamsForChannel(r).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== p.default.getId()
    }).length >= N;
  s.Z.dispatch({
    type: "STREAM_WATCH",
    streamKey: i,
    allowMultiple: o
  }), o || null != t && t.noFocus || I.Z.selectParticipant(e.channelId, i)
}

function x(e, t) {
  s.Z.dispatch({
    type: "STREAM_UPDATE_SELF_HIDDEN",
    channelId: e,
    selfStreamHidden: t
  })
}

function L(e, t) {
  let {
    guildId: n,
    channelId: r
  } = e;
  if (null != n && w(n, r)) return;
  D(e, t);
  let i = d.Z.getWindowOpen(T.KJ3.CHANNEL_CALL_POPOUT),
    o = g.Z.getVoiceChannelId();
  i && o === r || (0, u.Z)(e)
}

function j(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  n && k(e, t), s.Z.dispatch({
    type: "STREAM_STOP",
    streamKey: e,
    appContext: __OVERLAY__ ? T.IlC.OVERLAY : T.IlC.APP
  })
}

function k(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  s.Z.dispatch({
    type: "STREAM_CLOSE",
    streamKey: e,
    canShowFeedback: t
  })
}
async function M(e, t, n) {
  if (!f.Z.shouldFetchPreview(e, t, n)) return;
  let r = (0, c.V9)({
    streamType: null != e ? S.lo.GUILD : S.lo.CALL,
    guildId: e,
    channelId: t,
    ownerId: n
  });
  s.Z.dispatch({
    type: "STREAM_PREVIEW_FETCH_START",
    streamKey: r
  });
  try {
    let e = await a.tn.get({
      url: T.ANM.STREAM_PREVIEW(r),
      query: {
        version: Date.now()
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    s.Z.dispatch({
      type: "STREAM_PREVIEW_FETCH_SUCCESS",
      streamKey: r,
      previewURL: e.body.url
    })
  } catch (t) {
    let e;
    429 === t.status && (e = t.body.retry_after * y.Z.Millis.SECOND), s.Z.dispatch({
      type: "STREAM_PREVIEW_FETCH_FAIL",
      streamKey: r,
      retryAfter: e
    })
  }
}
async function U(e) {
  try {
    await v.Z.post({
      url: T.ANM.STREAM_NOTIFY(e),
      oldFormErrors: true,
      trackedActionData: {
        event: o.NetworkActionNames.STREAM_NOTIFY
      },
      rejectWithError: true
    })
  } catch (e) {}
}

function G(e, t) {}

function B(e) {
  (0, O.Ye)(e.preset, e.resolution, e.frameRate), s.Z.dispatch(C({
    type: "STREAM_UPDATE_SETTINGS"
  }, e))
}

function Z(e, t) {
  a.tn.patch({
    url: T.ANM.STREAM(e),
    body: {
      region: t
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}

function F() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = Chunk199902.Z.getCurrentUserActiveStream();
  null != exports && j((0, Chunk569545.V9)(exports), module)
}