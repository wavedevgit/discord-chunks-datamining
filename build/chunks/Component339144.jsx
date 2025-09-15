/** Chunk was on 11160 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => G,
  y: () => U
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk239091 = require("./239091.js"),
  Chunk434650 = require("./434650.js"),
  Chunk636449 = require("./636449.js"),
  Chunk620662 = require("./620662.js"),
  Chunk833664 = require("./833664.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk20471 = require("./20471.js"),
  Chunk522651 = require("./522651.js"),
  Chunk311352 = require("./311352.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk220410 = require("./220410.js"),
  Chunk668519 = require("./668519.js"),
  Chunk803647 = require("./803647.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381096 = require("./381096.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258628 = require("./258628.js");

function L(e) {
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

function k(e, t) {
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

function U(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === T.IIU.PLAYING && (0, g.Z)(t, T.xjy.JOIN)
  }
  returnfalse
}
let G = Chunk647438.memo(function(e) {
    let t, l, a, f, {
        stream: g,
        canGoLive: G,
        guildId: V,
        isStreaming: F,
        channel: H,
        canStream: z,
        runningGame: W,
        embeddedActivity: K,
        activity: Y,
        application: q,
        analyticsContext: X
      } = e,
      {
        showRefreshedGoLiveModal: Q
      } = (0, C.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: J
      } = (0, O.ZP)(),
      $ = (0, x.P6)("ActivityPanelGameCard"),
      ee = U(q, Y, K),
      et = i.useCallback(() => {
        var e;
        o()(null != Y, "Received null activity"), N.default.track(T.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == W ? true : W.id) ? e : null,
          application_id: Y.application_id
        }), (0, _.v)(J, _.d.INVITE), N.default.track(T.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: Y.application_id,
          location: X.location
        }), (0, d.h7)(Y, false)
      }, [Y, X, J, W]),
      en = i.useCallback((e, t) => () => {
        (0, _.v)(J, _.d.LEAVE_ACTIVITY), b.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [J]),
      er = i.useCallback(() => {
        (0, E.Z)(g)
      }, [g]),
      ei = i.useCallback(() => {
        let e = null != H && (0, P.vd)(H.type) ? H : null,
          t = null != e ? e.getGuildId() : V;
        (0, u.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
          return n => (0, r.jsx)(e, k(L({}, n), {
            sourcePID: null == W ? true : W.pid,
            selectSource: !!Q && null != I.Z.getVoiceChannelId(),
            guildId: t,
            analyticsLocation: T.Sbl.ACTIVITY_PANEL
          }))
        })
      }, [H, V, W, Q]),
      el = i.useCallback(e => {
        (0, p.jW)(e, async () => {
          let {
            default: e
          } = await n.e("58173").then(n.bind(n, 239120));
          return t => (0, r.jsx)(e, k(L({}, t), {
            activity: Y
          }))
        }, {
          position: "right"
        })
      }, [Y]),
      eo = i.useRef(null),
      {
        canStartAuthorization: ea,
        startAuthorization: es,
        hasAlreadyLinked: ec,
        connectionApp: eu
      } = (0, y.F)(q),
      ed = Z.Z.useConfig({
        location: "ActivityActions"
      }).enabled,
      ep = (null != W || null == K || (0, h.R)()) && (F || G) ? (F ? (t = false, l = () => {
        er(), (0, _.v)(J, _.d.STREAM, false)
      }, a = u.g5r, f = D.intl.string(D.t.S5anIS)) : z ? (t = false, l = () => {
        ei(), (0, _.v)(J, _.d.STREAM, true)
      }, a = u.hGI, f = null != W ? D.intl.formatToPlainString(D.t.AB5gT0, {
        game: W.name
      }) : D.intl.string(D.t.FeUKeH)) : (t = true, l = null, a = u.hGI, f = null != H && (0, P.vd)(H.type) ? D.intl.string(D.t.uQn9Bw) : null != V ? D.intl.string(D.t.fBXEoK) : D.intl.string(D.t.n3feND)), (0, r.jsx)("div", {
        className: M.panelButtonContainer,
        children: (0, r.jsx)(w.Z, {
          tooltipText: f,
          disabled: t,
          onClick: l,
          icon: a
        })
      })) : null,
      ef = ee && null == K ? (0, r.jsx)(w.Z, {
        ref: eo,
        tooltipText: D.intl.string(D.t["hC/Ze3"]),
        onClick: et,
        icon: u.ejJ
      }) : null,
      eh = null == K ? null : (0, r.jsx)(w.Z, {
        tooltipText: D.intl.string(D.t["R/FK4O"]),
        onClick: en(K.applicationId, K.location),
        icon: u.PBZ
      }),
      eg = null == g ? null : (0, r.jsx)(v.Z, {}),
      em = ed && ea && !ec ? (0, r.jsx)(B, {
        runningGame: W,
        startAuthorization: es,
        connectionApp: eu
      }) : null,
      eb = $ && null != Y && (0, m.Z)(Y) ? (0, r.jsx)(w.Z, {
        tooltipText: "Report Issue",
        onClick: el,
        icon: u.xhG
      }) : null,
      {
        isQuestBarEmpty: eO,
        hasLoadedQuestBar: ey
      } = (0, S.Ws)({
        location: R.dr.CONFLICT_CHECKS
      }),
      e_ = (() => {
        let e = [];
        return ee && ec && !(!ey || !eO) && e.push(s.z.ACCOUNT_LINK_INVITE_FRIENDS), (0, r.jsx)(j.ZP, {
          contentTypes: e,
          groupName: A.R.ACCOUNT_NAME_ZONE,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            if (t === s.z.ACCOUNT_LINK_INVITE_FRIENDS) return (0, r.jsx)(c.J2, {
              title: D.intl.string(D.t["0l2pEh"]),
              body: D.intl.string(D.t.DSZUKy),
              targetElementRef: eo,
              align: "right",
              shouldShow: true,
              onRequestClose: () => n(A.L.USER_DISMISS),
              caretConfig: {
                align: "end"
              },
              actions: [{
                text: D.intl.string(D.t.YdkBCA),
                onClick: () => {
                  n(A.L.TAKE_ACTION), et()
                }
              }]
            })
          }
        })
      })();
    return null == ep && null == ef && null == eh && null == em && null == eb ? null : (0, r.jsxs)("div", {
      className: M.actions,
      children: [null != em ? em : ef, ep, null != eh ? eh : eg, e_, eb]
    })
  }),
  B = e => {
    let {
      runningGame: t,
      startAuthorization: n,
      connectionApp: i
    } = e, l = (0, f.O)(e => {
      if (e && null != i) {
        var n;
        N.default.track(T.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
          game_id: null != (n = null == t ? true : t.id) ? n : null,
          application_id: i.id
        })
      }
    });
    return (0, r.jsx)(w.Z, {
      ref: l,
      onClick: () => {
        var e, r;
        N.default.track(T.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == t ? true : t.id) ? e : null,
          application_id: null != (r = null == i ? true : i.id) ? r : null
        }), n()
      },
      icon: a.u,
      tooltipText: D.intl.string(D.t.sbdnp6)
    })
  }