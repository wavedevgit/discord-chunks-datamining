/** Chunk was on 11160 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => R,
  y: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk239091 = require("./239091.js"),
  Chunk636449 = require("./636449.js"),
  Chunk620662 = require("./620662.js"),
  Chunk833664 = require("./833664.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk20471 = require("./20471.js"),
  Chunk522651 = require("./522651.js"),
  Chunk311352 = require("./311352.jsx"),
  Chunk48131 = require("./48131.js"),
  Chunk220410 = require("./220410.js"),
  Chunk668519 = require("./668519.js"),
  Chunk803647 = require("./803647.js"),
  Chunk131704 = require("./131704.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381096 = require("./381096.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258628 = require("./258628.js");

function w(e) {
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

function T(e, t) {
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

function A(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === I.IIU.PLAYING && (0, p.Z)(t, I.xjy.JOIN)
  }
  returnfalse
}
let R = Chunk647438.memo(function(e) {
    var t;
    let l, a, p, R, {
        stream: L,
        canGoLive: M,
        guildId: k,
        isStreaming: U,
        channel: G,
        canStream: B,
        runningGame: F,
        embeddedActivity: V,
        frame: H,
        activity: z,
        application: W,
        analyticsContext: K,
        inviteButtonRef: Y,
        accountLinkButtonRef: q
      } = e,
      {
        showRefreshedGoLiveModal: X
      } = (0, v.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: Q
      } = (0, g.ZP)(),
      J = (0, _.P6)("ActivityPanelGameCard"),
      $ = A(W, z, V),
      ee = i.useCallback(() => {
        var e;
        o()(null != z, "Received null activity"), E.default.track(I.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == F ? true : F.id) ? e : null,
          application_id: z.application_id
        }), (0, b.v)(Q, b.d.INVITE), E.default.track(I.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: z.application_id,
          location: K.location
        }), (0, c.h7)(z, false)
      }, [z, K, Q, F]),
      et = i.useCallback((e, t) => () => {
        (0, b.v)(Q, b.d.LEAVE_ACTIVITY), h.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [Q]),
      en = i.useCallback(e => () => {
        (0, b.v)(Q, b.d.LEAVE_ACTIVITY), y.Z.stopFrame({
          applicationId: e
        })
      }, [Q]),
      er = i.useCallback(() => {
        (0, j.Z)(L)
      }, [L]),
      ei = i.useCallback(() => {
        let e = null != G && (0, x.vd)(G.type) ? G : null,
          t = null != e ? e.getGuildId() : k;
        (0, s.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
          return n => (0, r.jsx)(e, T(w({}, n), {
            sourcePID: null == F ? true : F.pid,
            selectSource: !!X && null != C.Z.getVoiceChannelId(),
            guildId: t,
            analyticsLocation: I.Sbl.ACTIVITY_PANEL
          }))
        })
      }, [G, k, F, X]),
      el = i.useCallback(e => {
        (0, u.jW)(e, async () => {
          let {
            default: e
          } = await n.e("58173").then(n.bind(n, 239120));
          return t => (0, r.jsx)(e, T(w({}, t), {
            activity: z
          }))
        }, {
          position: "right"
        })
      }, [z]),
      {
        canStartAuthorization: eo,
        startAuthorization: ea,
        hasAlreadyLinked: es,
        connectionApp: ec
      } = (0, m.F)(W),
      eu = S.Z.useConfig({
        location: "ActivityActions"
      }).enabled,
      ed = (null != F || null == V || (0, d.R)()) && (U || M) ? (U ? (l = false, a = () => {
        er(), (0, b.v)(Q, b.d.STREAM, false)
      }, p = s.g5r, R = N.intl.string(N.t.S5anIS)) : B ? (l = false, a = () => {
        ei(), (0, b.v)(Q, b.d.STREAM, true)
      }, p = s.hGI, R = null != F ? N.intl.formatToPlainString(N.t.AB5gT0, {
        game: F.name
      }) : N.intl.string(N.t.FeUKeH)) : (l = true, a = null, p = s.hGI, R = null != G && (0, x.vd)(G.type) ? N.intl.string(N.t.uQn9Bw) : null != k ? N.intl.string(N.t.fBXEoK) : N.intl.string(N.t.n3feND)), (0, r.jsx)("div", {
        className: Z.panelButtonContainer,
        children: (0, r.jsx)(P.Z, {
          tooltipText: R,
          disabled: l,
          onClick: a,
          icon: p
        })
      })) : null,
      ep = $ && null == V ? (0, r.jsx)(P.Z, {
        ref: Y,
        tooltipText: N.intl.string(N.t["hC/Ze3"]),
        onClick: ee,
        icon: s.ejJ
      }) : null,
      ef = null == V ? null : (0, r.jsx)(P.Z, {
        tooltipText: N.intl.string(N.t["R/FK4O"]),
        onClick: et(V.applicationId, V.location),
        icon: s.PBZ
      }),
      eh = null == H ? null : (0, r.jsx)(P.Z, {
        tooltipText: N.intl.string(N.t["R/FK4O"]),
        onClick: en(H.applicationId),
        icon: s.PBZ
      }),
      eg = null == L ? null : (0, r.jsx)(O.Z, {}),
      em = eu && eo && !es ? (0, r.jsx)(D, {
        runningGame: F,
        startAuthorization: ea,
        connectionApp: ec,
        ref: q
      }) : null,
      eb = J && null != z && (0, f.Z)(z) ? (0, r.jsx)(P.Z, {
        tooltipText: "Report Issue",
        onClick: el,
        icon: s.xhG
      }) : null;
    return null == ed && null == ep && null == ef && null == eh && null == em && null == eb ? null : (0, r.jsxs)("div", {
      className: Z.actions,
      children: [null != em ? em : ep, ed, null != (t = null != ef ? ef : eh) ? t : eg, eb]
    })
  }),
  D = Chunk647438.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: i,
      connectionApp: l
    } = e;
    return (0, r.jsx)(P.Z, {
      ref: t,
      onClick: () => {
        var e, t;
        E.default.track(I.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: a.u,
      tooltipText: N.intl.string(N.t.sbdnp6)
    })
  })