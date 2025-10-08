/** Chunk was on 69310 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => D,
  y: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk907862 = require("./907862.js"),
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
  Chunk272304 = require("./272304.js"),
  Chunk668519 = require("./668519.js"),
  Chunk803647 = require("./803647.js"),
  Chunk131704 = require("./131704.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381096 = require("./381096.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239249 = require("./239249.js");

function T(e) {
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

function A(e, t) {
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

function R(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === N.IIU.PLAYING && (0, h.Z)(t, N.xjy.JOIN)
  }
  returnfalse
}
let D = Chunk647438.memo(function(e) {
    var t;
    let l, a, h, D, {
        stream: M,
        canGoLive: k,
        guildId: U,
        isStreaming: G,
        channel: B,
        canStream: F,
        runningGame: V,
        embeddedActivity: H,
        frame: z,
        activity: W,
        application: K,
        analyticsContext: Y,
        inviteButtonRef: q,
        accountLinkButtonRef: X
      } = e,
      {
        showRefreshedGoLiveModal: Q
      } = (0, j.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: J
      } = (0, m.ZP)(),
      $ = (0, v.P6)("ActivityPanelGameCard"),
      ee = R(K, W, H),
      et = i.useCallback(() => {
        var e;
        o()(null != W, "Received null activity"), S.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == V ? true : V.id) ? e : null,
          application_id: W.application_id
        }), (0, _.v)(J, _.d.INVITE), S.default.track(N.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: W.application_id,
          location: Y.location
        }), (0, u.h7)(W, false)
      }, [W, Y, J, V]),
      en = i.useCallback((e, t) => () => {
        (0, _.v)(J, _.d.LEAVE_ACTIVITY), g.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [J]),
      er = i.useCallback(e => () => {
        (0, _.v)(J, _.d.LEAVE_ACTIVITY), O.Z.stopFrame({
          applicationId: e
        })
      }, [J]),
      ei = i.useCallback(() => {
        (0, x.Z)(M)
      }, [M]),
      el = i.useCallback(() => {
        let e = null != B && (0, C.vd)(B.type) ? B : null,
          t = null != e ? e.getGuildId() : U;
        (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
          return n => (0, r.jsx)(e, A(T({}, n), {
            sourcePID: null == V ? true : V.pid,
            selectSource: !!Q && null != E.Z.getVoiceChannelId(),
            guildId: t,
            analyticsLocation: N.Sbl.ACTIVITY_PANEL
          }))
        })
      }, [B, U, V, Q]),
      eo = i.useCallback(e => {
        (0, d.jW)(e, async () => {
          let {
            default: e
          } = await n.e("58173").then(n.bind(n, 239120));
          return t => (0, r.jsx)(e, A(T({}, t), {
            activity: W
          }))
        }, {
          position: "right"
        })
      }, [W]),
      {
        canStartAuthorization: ea,
        startAuthorization: es,
        hasAlreadyLinked: ec,
        connectionApp: eu
      } = (0, b.FG)(K, {
        allowedFlows: [b.ro.RPC]
      }),
      ed = I.Z.useConfig({
        location: "ActivityActions"
      }).enabled,
      ep = i.useRef(null),
      [eh, ef] = i.useState(false);
    i.useEffect(() => () => {
      null != ep.current && clearTimeout(ep.current)
    }, []), i.useEffect(() => {
      ec && (ef(false), null != ep.current && (clearTimeout(ep.current), ep.current = null))
    }, [ec]);
    let eg = (null != V || null == H || (0, p.R)()) && (G || k) ? (G ? (l = false, a = () => {
        ei(), (0, _.v)(J, _.d.STREAM, false)
      }, h = c.g5r, D = Z.intl.string(Z.t.S5anIS)) : F ? (l = false, a = () => {
        el(), (0, _.v)(J, _.d.STREAM, true)
      }, h = c.hGI, D = null != V ? Z.intl.formatToPlainString(Z.t.AB5gT0, {
        game: V.name
      }) : Z.intl.string(Z.t.FeUKeH)) : (l = true, a = null, h = c.hGI, D = null != B && (0, C.vd)(B.type) ? Z.intl.string(Z.t.uQn9Bw) : null != U ? Z.intl.string(Z.t.fBXEoK) : Z.intl.string(Z.t.n3feND)), (0, r.jsx)("div", {
        className: w.panelButtonContainer,
        children: (0, r.jsx)(P.Z, {
          tooltipText: D,
          disabled: l,
          onClick: a,
          icon: h
        })
      })) : null,
      em = ee && null == H ? (0, r.jsx)(P.Z, {
        ref: q,
        tooltipText: Z.intl.string(Z.t["hC/Ze3"]),
        onClick: et,
        icon: c.ejJ
      }) : null,
      eb = null == H ? null : (0, r.jsx)(P.Z, {
        tooltipText: Z.intl.string(Z.t["R/FK4O"]),
        onClick: en(H.applicationId, H.location),
        icon: c.PBZ
      }),
      e_ = null == z ? null : (0, r.jsx)(P.Z, {
        tooltipText: Z.intl.string(Z.t["R/FK4O"]),
        onClick: er(z.applicationId),
        icon: c.PBZ
      }),
      ey = null == M ? null : (0, r.jsx)(y.Z, {}),
      eO = ed && ea && !ec ? (0, r.jsx)(L, {
        runningGame: V,
        startAuthorization: () => {
          ef(true), null != ep.current && clearTimeout(ep.current), ep.current = setTimeout(() => {
            ef(false)
          }, 9e4), es()
        },
        connectionApp: eu,
        ref: X
      }) : null,
      ev = $ && null != W && (0, f.Z)(W) ? (0, r.jsx)(P.Z, {
        tooltipText: "Report Issue",
        onClick: eo,
        icon: c.xhG
      }) : null,
      ej = ed && ea && !ec ? (0, r.jsx)(s.J2, {
        title: Z.intl.string(Z.t.ULvRFR),
        body: Z.intl.string(Z.t.HJJDr6),
        targetElementRef: X,
        position: "top",
        align: "center",
        caretConfig: {
          align: "center"
        },
        shouldShow: eh,
        onRequestClose: () => {
          ef(false), null != ep.current && (clearTimeout(ep.current), ep.current = null)
        }
      }) : null;
    return null == eg && null == em && null == eb && null == e_ && null == eO && null == ev ? null : (0, r.jsxs)("div", {
      className: w.actions,
      children: [null != eO ? eO : em, eg, null != (t = null != eb ? eb : e_) ? t : ey, ev, ej]
    })
  }),
  L = Chunk647438.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: i,
      connectionApp: l
    } = e;
    return (0, r.jsx)(P.Z, {
      ref: t,
      onClick: () => {
        var e, t;
        S.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: a.u,
      tooltipText: Z.intl.string(Z.t.sbdnp6)
    })
  })