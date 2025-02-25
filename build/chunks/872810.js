/** Chunk was on web.js **/
"use strict";
n.d(t, {
  L6: () => F,
  Rc: () => G,
  WH: () => R,
  aP: () => j,
  dV: () => B,
  g: () => M,
  iV: () => x,
  n9: () => k,
  pR: () => L,
  rn: () => w,
  tK: () => P,
  xc: () => U
});
var r = n(512722),
  i = n.n(r),
  o = n(990547),
  a = n(544891),
  s = n(570140),
  l = n(258609),
  c = n(569545),
  u = n(525925),
  d = n(522474),
  f = n(543882),
  p = n(199902),
  _ = n(314897),
  h = n(592125),
  m = n(430824),
  g = n(944486),
  E = n(979651),
  v = n(934415),
  b = n(70956),
  y = n(557457),
  O = n(573261);
n(26151), n(493683);
var S = n(475179);
n(287734);
var I = n(981631),
  T = n(70722);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}
let C = 2;

function R(e, t, n) {
  s.Z.dispatch(A({
    type: "STREAM_START",
    streamType: null != e ? T.lo.GUILD : T.lo.CALL,
    guildId: e,
    channelId: t,
    appContext: __OVERLAY__ ? I.IlC.OVERLAY : I.IlC.APP
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

function D(e, t) {
  let n = h.Z.getChannel(t);
  return i()(null != n, "Cannot join a null voice channel"), !E.Z.isInChannel(t) && (0, v.rY)(n, E.Z, m.Z)
}

function w(e, t) {
  if (null != l.Z.getRemoteSessionId()) return;
  let {
    guildId: n,
    channelId: r
  } = e;
  if (null != n && D(n, r)) return;
  let i = (0, c.V9)(e),
    o = (null == t ? void 0 : t.forceMultiple) || p.Z.getAllActiveStreamsForChannel(r).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== _.default.getId()
    }).length >= C;
  s.Z.dispatch({
    type: "STREAM_WATCH",
    streamKey: i,
    allowMultiple: o
  }), o || null != t && t.noFocus || S.Z.selectParticipant(e.channelId, i)
}

function L(e, t) {
  s.Z.dispatch({
    type: "STREAM_UPDATE_SELF_HIDDEN",
    channelId: e,
    selfStreamHidden: t
  })
}

function x(e, t) {
  let {
    guildId: n,
    channelId: r
  } = e;
  if (null != n && D(n, r)) return;
  w(e, t);
  let i = d.Z.getWindowOpen(I.KJ3.CHANNEL_CALL_POPOUT),
    o = g.Z.getVoiceChannelId();
  (!i || o !== r) && (0, u.Z)(e)
}

function M(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  j(e, t), s.Z.dispatch({
    type: "STREAM_STOP",
    streamKey: e,
    appContext: __OVERLAY__ ? I.IlC.OVERLAY : I.IlC.APP
  })
}

function j(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  s.Z.dispatch({
    type: "STREAM_CLOSE",
    streamKey: e,
    canShowFeedback: t
  })
}
async function k(e, t, n) {
  if (!f.Z.shouldFetchPreview(e, t, n)) return;
  let r = (0, c.V9)({
    streamType: null != e ? T.lo.GUILD : T.lo.CALL,
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
      url: I.ANM.STREAM_PREVIEW(r),
      query: {
        version: Date.now()
      },
      oldFormErrors: !0,
      rejectWithError: !1
    });
    s.Z.dispatch({
      type: "STREAM_PREVIEW_FETCH_SUCCESS",
      streamKey: r,
      previewURL: e.body.url
    })
  } catch (t) {
    let e;
    429 === t.status && (e = t.body.retry_after * b.Z.Millis.SECOND), s.Z.dispatch({
      type: "STREAM_PREVIEW_FETCH_FAIL",
      streamKey: r,
      retryAfter: e
    })
  }
}
async function U(e) {
  try {
    await O.Z.post({
      url: I.ANM.STREAM_NOTIFY(e),
      oldFormErrors: !0,
      trackedActionData: {
        event: o.NetworkActionNames.STREAM_NOTIFY
      },
      rejectWithError: !0
    })
  } catch (e) {}
}

function G(e) {
  (0, y.Ye)(e.preset, e.resolution, e.frameRate), s.Z.dispatch(A({
    type: "STREAM_UPDATE_SETTINGS"
  }, e))
}

function B(e, t) {
  a.tn.patch({
    url: I.ANM.STREAM(e),
    body: {
      region: t
    },
    oldFormErrors: !0,
    rejectWithError: !0
  })
}

function F() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = p.Z.getCurrentUserActiveStream();
  null != t && M((0, c.V9)(t), e)
}