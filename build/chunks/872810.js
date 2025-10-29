/** Chunk was on web.js **/
/** chunk id: 872810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L6: () => F,
  Rc: () => B,
  WH: () => P,
  aP: () => j,
  dV: () => Z,
  g: () => k,
  iV: () => M,
  n9: () => U,
  pR: () => x,
  rn: () => L,
  tK: () => D,
  xc: () => G
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk258609 = require("./258609.js"),
  Chunk595816 = require("./595816.js"),
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

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}
let R = 2;

function P(e, t, n) {
  s.Z.dispatch(N({
    type: "STREAM_START",
    streamType: null != e ? A.lo.GUILD : A.lo.CALL,
    guildId: e,
    channelId: t,
    appContext: __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP
  }, n))
}

function D(e, t) {
  let n = (0, u.V9)(e);
  s.Z.dispatch({
    type: "STREAM_SET_PAUSED",
    streamKey: n,
    paused: t
  })
}

function w(e, t) {
  let n = m.Z.getChannel(t);
  return i()(null != n, "Cannot join a null voice channel"), !b.Z.isInChannel(t) && (0, y.rY)(n, b.Z, g.Z)
}

function L(e, t) {
  let {
    defaultWatchMultipleStreams: n
  } = (0, c.$)({
    location: "StreamActionCreators.watchStream"
  });
  if (null != l.default.getRemoteSessionId()) return;
  let {
    guildId: r,
    channelId: i
  } = e;
  if (null != r && w(r, i)) return;
  let a = (0, u.V9)(e),
    o = (null == t ? true : t.forceMultiple) || p.Z.getAllActiveStreamsForChannel(i).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== h.default.getId()
    }).length >= R;
  s.Z.dispatch({
    type: "STREAM_WATCH",
    streamKey: a,
    allowMultiple: o || n
  }), o || null != t && t.noFocus || T.Z.selectParticipant(e.channelId, a)
}

function x(e, t) {
  s.Z.dispatch({
    type: "STREAM_UPDATE_SELF_HIDDEN",
    channelId: e,
    selfStreamHidden: t
  })
}

function M(e, t) {
  let {
    guildId: n,
    channelId: r
  } = e;
  if (null != n && w(n, r)) return;
  L(e, t);
  let i = f.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
    a = E.Z.getVoiceChannelId();
  i && a === r || (0, d.Z)(e)
}

function k(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  n && j(e, t), s.Z.dispatch({
    type: "STREAM_STOP",
    streamKey: e,
    appContext: __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP
  })
}

function j(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  s.Z.dispatch({
    type: "STREAM_CLOSE",
    streamKey: e,
    canShowFeedback: t
  })
}
async function U(e, t, n) {
  if (!_.Z.shouldFetchPreview(e, t, n)) return;
  let r = (0, u.V9)({
    streamType: null != e ? A.lo.GUILD : A.lo.CALL,
    guildId: e,
    channelId: t,
    ownerId: n
  });
  s.Z.dispatch({
    type: "STREAM_PREVIEW_FETCH_START",
    streamKey: r
  });
  try {
    let e = await o.tn.get({
      url: S.ANM.STREAM_PREVIEW(r),
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
    429 === t.status && (e = t.body.retry_after * O.Z.Millis.SECOND), s.Z.dispatch({
      type: "STREAM_PREVIEW_FETCH_FAIL",
      streamKey: r,
      retryAfter: e
    })
  }
}
async function G(e) {
  try {
    await I.Z.post({
      url: S.ANM.STREAM_NOTIFY(e),
      oldFormErrors: true,
      trackedActionData: {
        event: a.NetworkActionNames.STREAM_NOTIFY
      },
      rejectWithError: true
    })
  } catch (e) {}
}

function B(e) {
  true !== e.noTrack && (0, v.Ye)(e.preset, e.resolution, e.frameRate), s.Z.dispatch(N({
    type: "STREAM_UPDATE_SETTINGS"
  }, e))
}

function Z(e, t) {
  o.tn.patch({
    url: S.ANM.STREAM(e),
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
  null != exports && k((0, Chunk569545.V9)(exports), module)
}