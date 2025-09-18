/** Chunk was on 11160 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => A,
  y: () => T
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

function Z(e) {
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

function w(e, t) {
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

function T(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === P.IIU.PLAYING && (0, p.Z)(t, P.xjy.JOIN)
  }
  returnfalse
}
let A = Chunk647438.memo(function(e) {
    let t, l, a, p, {
        stream: A,
        canGoLive: D,
        guildId: L,
        isStreaming: M,
        channel: k,
        canStream: U,
        runningGame: G,
        embeddedActivity: B,
        activity: V,
        application: F,
        analyticsContext: H,
        inviteButtonRef: z,
        accountLinkButtonRef: W
      } = e,
      {
        showRefreshedGoLiveModal: K
      } = (0, _.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: Y
      } = (0, g.ZP)(),
      q = (0, y.P6)("ActivityPanelGameCard"),
      X = T(F, V, B),
      Q = i.useCallback(() => {
        var e;
        o()(null != V, "Received null activity"), C.default.track(P.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == G ? true : G.id) ? e : null,
          application_id: V.application_id
        }), (0, b.v)(Y, b.d.INVITE), C.default.track(P.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: V.application_id,
          location: H.location
        }), (0, c.h7)(V, false)
      }, [V, H, Y, G]),
      J = i.useCallback((e, t) => () => {
        (0, b.v)(Y, b.d.LEAVE_ACTIVITY), h.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [Y]),
      $ = i.useCallback(() => {
        (0, v.Z)(A)
      }, [A]),
      ee = i.useCallback(() => {
        let e = null != k && (0, j.vd)(k.type) ? k : null,
          t = null != e ? e.getGuildId() : L;
        (0, s.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
          return n => (0, r.jsx)(e, w(Z({}, n), {
            sourcePID: null == G ? true : G.pid,
            selectSource: !!K && null != x.Z.getVoiceChannelId(),
            guildId: t,
            analyticsLocation: P.Sbl.ACTIVITY_PANEL
          }))
        })
      }, [k, L, G, K]),
      et = i.useCallback(e => {
        (0, u.jW)(e, async () => {
          let {
            default: e
          } = await n.e("58173").then(n.bind(n, 239120));
          return t => (0, r.jsx)(e, w(Z({}, t), {
            activity: V
          }))
        }, {
          position: "right"
        })
      }, [V]),
      {
        canStartAuthorization: en,
        startAuthorization: er,
        hasAlreadyLinked: ei,
        connectionApp: el
      } = (0, m.F)(F),
      eo = E.Z.useConfig({
        location: "ActivityActions"
      }).enabled,
      ea = (null != G || null == B || (0, d.R)()) && (M || D) ? (M ? (t = false, l = () => {
        $(), (0, b.v)(Y, b.d.STREAM, false)
      }, a = s.g5r, p = I.intl.string(I.t.S5anIS)) : U ? (t = false, l = () => {
        ee(), (0, b.v)(Y, b.d.STREAM, true)
      }, a = s.hGI, p = null != G ? I.intl.formatToPlainString(I.t.AB5gT0, {
        game: G.name
      }) : I.intl.string(I.t.FeUKeH)) : (t = true, l = null, a = s.hGI, p = null != k && (0, j.vd)(k.type) ? I.intl.string(I.t.uQn9Bw) : null != L ? I.intl.string(I.t.fBXEoK) : I.intl.string(I.t.n3feND)), (0, r.jsx)("div", {
        className: N.panelButtonContainer,
        children: (0, r.jsx)(S.Z, {
          tooltipText: p,
          disabled: t,
          onClick: l,
          icon: a
        })
      })) : null,
      es = X && null == B ? (0, r.jsx)(S.Z, {
        ref: z,
        tooltipText: I.intl.string(I.t["hC/Ze3"]),
        onClick: Q,
        icon: s.ejJ
      }) : null,
      ec = null == B ? null : (0, r.jsx)(S.Z, {
        tooltipText: I.intl.string(I.t["R/FK4O"]),
        onClick: J(B.applicationId, B.location),
        icon: s.PBZ
      }),
      eu = null == A ? null : (0, r.jsx)(O.Z, {}),
      ed = eo && en && !ei ? (0, r.jsx)(R, {
        runningGame: G,
        startAuthorization: er,
        connectionApp: el,
        ref: W
      }) : null,
      ep = q && null != V && (0, f.Z)(V) ? (0, r.jsx)(S.Z, {
        tooltipText: "Report Issue",
        onClick: et,
        icon: s.xhG
      }) : null;
    return null == ea && null == es && null == ec && null == ed && null == ep ? null : (0, r.jsxs)("div", {
      className: N.actions,
      children: [null != ed ? ed : es, ea, null != ec ? ec : eu, ep]
    })
  }),
  R = Chunk647438.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: i,
      connectionApp: l
    } = e;
    return (0, r.jsx)(S.Z, {
      ref: t,
      onClick: () => {
        var e, t;
        C.default.track(P.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: a.u,
      tooltipText: I.intl.string(I.t.sbdnp6)
    })
  })