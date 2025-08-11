/** Chunk was on 5704 **/
/** chunk id: 360429, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk410575 = require("./410575.js"),
  Chunk906732 = require("./906732.js"),
  Chunk418469 = require("./418469.js"),
  Chunk701098 = require("./701098.js"),
  Chunk607783 = require("./607783.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk258609 = require("./258609.js"),
  Chunk569545 = require("./569545.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk111672 = require("./111672.js"),
  Chunk441167 = require("./441167.js"),
  Chunk700994 = require("./700994.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk358085 = require("./358085.js"),
  Chunk444295 = require("./444295.js"),
  Chunk1226 = require("./1226.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  return (0, i.e7)([w.Z], () => {
    let t = w.Z.getActiveStreamForApplicationStream(e);
    return null != t && (0, m.V9)(t) === (0, m.V9)(e)
  })
}

function T(e) {
  let {
    stream: t,
    analyticsContext: n,
    appContext: w,
    exitFullscreen: T,
    onSelect: B
  } = e, U = function(e) {
    let t = M(e),
      n = (0, O.Z)(C.Z),
      o = p.Z.getSettings().clipsEnabled,
      a = e.ownerId === Z.default.getId(),
      {
        enableViewerClipping: c,
        ignoreSenderPreference: s
      } = S.Z.useExperiment({
        location: "StreamContextMenu"
      }, {
        autoTrackExposure: false
      }),
      u = (0, i.e7)([p.Z], () => p.Z.getIsAtMaxSaveClipOperations()),
      d = (0, i.e7)([p.Z], () => p.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
    return n && c && t ? <l.sNh id={"clip-stream"} disabled={!o || !(a || d) || u} label={N.intl.string(N.t.U4URzM)} action={() => a ? (0, h.C1)() : (0, h.C1)((0, m.V9)(e))} /> : null
  }(t), G = M(t), J = function(e) {
    let t = M(e),
      n = (0, v.Z)(e.ownerId, L.Yn.STREAM);
    return t ? n : null
  }(t), Q = function(e) {
    let t, n = (0, i.e7)([j.Z], () => null != j.Z.getRemoteSessionId()),
      o = (0, i.e7)([x.Z], () => x.Z.getChannel(e.channelId), [e.channelId]),
      a = M(e),
      u = E.default.getCurrentUser(),
      d = null != u && e.ownerId === u.id;
    return (t = d ? N.intl.string(N.t.S5anIS) : a ? N.intl.string(N.t.q3O3Jy) : N.intl.string(N.t["7Xq/nZ"]), n || !d && a && (null == o ? true : o.isGuildStageVoice())) ? null : <l.sNh id={"watch"} label={t} action={a ? function() {
        (0, s.g)((0, m.V9)(e)), (0, k.Ws)(A.Odu.GO_LIVE, {
          type: k.Qu.GO_LIVE,
          value: k.bk.DISABLED,
          userId: e.ownerId
        })
      } : function() {
        c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e), (0, k.Ws)(A.Odu.GO_LIVE, {
          type: k.Qu.GO_LIVE,
          value: k.bk.ENABLED,
          userId: e.ownerId
        })
      }} />
  }(t), R = function(e) {
    let t = M(e),
      n = (0, i.e7)([C.Z], () => C.Z.isLocalMute(e.ownerId, L.Yn.STREAM)),
      a = E.default.getCurrentUser(),
      c = null != a && e.ownerId === a.id;
    return !t || c ? null : <l.S89 id={"mute"} label={N.intl.string(N.t.sWmtIy)} action={function() {
        o.Z.toggleLocalMute(e.ownerId, L.Yn.STREAM)
      }} checked={n} />
  }(t), F = function(e) {
    let t = M(e),
      n = e.ownerId === Z.default.getId(),
      {
        sidechainAvailable: a
      } = I.Z.getCurrentConfig({
        location: "StreamContextMenu"
      }),
      c = (0, i.e7)([C.Z], () => C.Z.getSidechainCompression()),
      s = (0, i.e7)([C.Z], () => C.Z.getSidechainCompressionStrength()),
      {
        analyticsLocations: u
      } = (0, d.ZP)();
    return n || !t || !a || (0, P.isWeb)() ? null : <l.kSQ>{<l.S89 id={"sidechain-compression"} label={N.intl.string(N.t["/jwMtr"])} action={() => o.Z.setSidechainCompression(!c, {
          analyticsLocations: u
        })} checked={c} />}{<l.II_ id={"sidechain-parameters"} label={N.intl.string(N.t.fhEzfn)} control={(e, t) => (0, r.jsx)(l._wy, _(D({}, e), {
          ref: t,
          value: s,
          maxValue: 100,
          onChange: e => o.Z.setSidechainCompressionStrength(e, {
            analyticsLocations: u
          }),
          "aria-label": N.intl.string(N.t.fhEzfn)
        }))} />}</l.kSQ>
  }(t), Y = (0, f.Z)(t, w, T), z = (0, b.G)({
    stream: t,
    channelId: t.channelId
  }), W = (0, g.B)({
    userId: t.ownerId,
    channelId: t.channelId,
    guildId: t.guildId
  }), q = function(e) {
    let t = t => {
        (0, V.cq)(e, t)
      },
      n = (0, V.BO)(e);
    return <l.II_ id={"stream-zoom"} label={N.intl.string(N.t.B3kEDg)} control={(e, i) => (0, r.jsx)(l._wy, _(D({}, e), {
        ref: i,
        value: n,
        maxValue: 300,
        onChange: t,
        minValue: 100,
        "aria-label": N.intl.string(N.t.B3kEDg)
      }))} />
  }(t), H = function(e) {
    let t = (0, V.xN)(e);
    return <l.S89 id={"fit"} label={N.intl.string(N.t.mpnvra)} action={() => {
        (0, V.gI)(e, t === y.L.CONTAIN ? y.L.COVER : y.L.CONTAIN)
      }} checked={t === y.L.COVER} />
  }(t);
  return <u.Z context={n} object={A.qAy.CONTEXT_MENU}><l.v2r navId={"stream-context"} onClose={a.Zy} aria-label={N.intl.string(N.t.Gl3Q39)} onSelect={B}>{<l.kSQ>{Q}{U}{R}{z}{W}</l.kSQ>}{<l.kSQ>{J}</l.kSQ>}{<l.kSQ>{q}{H}</l.kSQ>}{F}{<l.kSQ>{G && Y}</l.kSQ>}</l.v2r></u.Z>
}