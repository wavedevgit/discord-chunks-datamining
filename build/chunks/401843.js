/** Chunk was on web.js **/
/** chunk id: 401843, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A9: () => L,
  Ho: () => x,
  Nl: () => M,
  TZ: () => P,
  Tp: () => U,
  XI: () => R,
  Xd: () => F,
  Xi: () => k,
  a8: () => G,
  dA: () => V,
  nO: () => B,
  vN: () => j
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk110259 = require("./110259.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk643501 = require("./643501.js"),
  Chunk315606 = require("./315606.js"),
  Chunk652896 = require("./652896.js"),
  Chunk346846 = require("./346846.js"),
  Chunk87001 = require("./87001.js"),
  Chunk384200 = require("./384200.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk147036 = require("./147036.js"),
  Chunk927813 = require("./927813.js"),
  Chunk650338 = require("./650338.js"),
  Chunk499785 = require("./499785.js");
require("./387755.js"), require("./308528.js");
var Chunk367513 = require("./367513.js");
require("./956793.js");
var Chunk652215 = require("./652215.js"),
  Chunk502075 = require("./502075.js");

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
let w = 2;

function R(e, t, n) {
  s.h.dispatch(N({
    type: "STREAM_START",
    streamType: null != e ? T.U4.GUILD : T.U4.CALL,
    guildId: e,
    channelId: t,
    appContext: __OVERLAY__ ? S.BRT.OVERLAY : S.BRT.APP
  }, n))
}

function P(e, t) {
  let n = (0, u._z)(e);
  s.h.dispatch({
    type: "STREAM_SET_PAUSED",
    streamKey: n,
    paused: t
  })
}

function D(e, t) {
  let n = m.A.getChannel(t);
  return i()(null != n, "Cannot join a null voice channel"), !y.A.isInChannel(t) && (0, b.Pd)(n, y.A, g.A)
}

function L(e, t) {
  let {
    defaultWatchMultipleStreams: n
  } = (0, c.d)({
    location: "StreamActionCreators.watchStream"
  });
  if (null != l.default.getRemoteSessionId()) return;
  let {
    guildId: r,
    channelId: i
  } = e;
  if (null != r && D(r, i)) return;
  let a = (0, u._z)(e),
    o = (null == t ? true : t.forceMultiple) || _.A.getAllActiveStreamsForChannel(i).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== h.default.getId()
    }).length >= w;
  s.h.dispatch({
    type: "STREAM_WATCH",
    streamKey: a,
    allowMultiple: o || n
  }), (null == t ? true : t.forceFocus) !== true && (o || null != t && t.noFocus) || I.A.selectParticipant(e.channelId, a)
}

function x(e, t) {
  s.h.dispatch({
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
  if (null != n && D(n, r)) return;
  L(e, t);
  let i = f.A.getWindowOpen(S.MLl.CHANNEL_CALL_POPOUT),
    a = E.A.getVoiceChannelId();
  i && a === r || (0, d.A)(e)
}

function j(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  n && k(e, t), s.h.dispatch({
    type: "STREAM_STOP",
    streamKey: e,
    appContext: __OVERLAY__ ? S.BRT.OVERLAY : S.BRT.APP
  })
}

function k(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  s.h.dispatch({
    type: "STREAM_CLOSE",
    streamKey: e,
    canShowFeedback: t
  })
}
async function U(e, t, n) {
  if (!p.A.shouldFetchPreview(e, t, n)) return;
  let r = (0, u._z)({
    streamType: null != e ? T.U4.GUILD : T.U4.CALL,
    guildId: e,
    channelId: t,
    ownerId: n
  });
  s.h.dispatch({
    type: "STREAM_PREVIEW_FETCH_START",
    streamKey: r
  });
  try {
    let e = await o.Bo.get({
      url: S.Rsh.STREAM_PREVIEW(r),
      query: {
        version: Date.now()
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    s.h.dispatch({
      type: "STREAM_PREVIEW_FETCH_SUCCESS",
      streamKey: r,
      previewURL: e.body.url
    })
  } catch (t) {
    let e;
    429 === t.status && (e = t.body.retry_after * O.A.Millis.SECOND), s.h.dispatch({
      type: "STREAM_PREVIEW_FETCH_FAIL",
      streamKey: r,
      retryAfter: e
    })
  }
}
async function G(e) {
  try {
    await A.A.post({
      url: S.Rsh.STREAM_NOTIFY(e),
      oldFormErrors: true,
      trackedActionData: {
        event: a.NetworkActionNames.STREAM_NOTIFY
      },
      rejectWithError: true
    })
  } catch (e) {}
}

function F(e) {
  true !== e.noTrack && (0, v.K2)(e.preset, e.resolution, e.frameRate), s.h.dispatch(N({
    type: "STREAM_UPDATE_SETTINGS"
  }, e))
}

function V(e, t) {
  o.Bo.patch({
    url: S.Rsh.STREAM(e),
    body: {
      region: t
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}

function B() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = _.A.getCurrentUserActiveStream();
  null != t && j((0, u._z)(t), e)
}