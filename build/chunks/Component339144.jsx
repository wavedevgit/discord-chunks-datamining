/** Chunk was on 71832 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => B,
  y: () => G
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk198168 = require("./198168.jsx"),
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
  Chunk239249 = require("./239249.js");

function k(e) {
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

function U(e, t) {
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

function G(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === A.IIU.PLAYING && (0, m.Z)(t, A.xjy.JOIN)
  }
  returnfalse
}
let B = Chunk647438.memo(function(e) {
    let t, l, a, m, {
        stream: B,
        canGoLive: F,
        guildId: H,
        isStreaming: z,
        channel: W,
        canStream: K,
        runningGame: Y,
        embeddedActivity: q,
        activity: X,
        application: Q,
        analyticsContext: J
      } = e,
      {
        showRefreshedGoLiveModal: $
      } = (0, E.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: ee
      } = (0, y.ZP)(),
      et = (0, C.P6)("ActivityPanelGameCard"),
      en = G(Q, X, q),
      er = i.useCallback(() => {
        var e;
        o()(null != X, "Received null activity"), Z.default.track(A.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == Y ? true : Y.id) ? e : null,
          application_id: X.application_id
        }), (0, j.v)(ee, j.d.INVITE), Z.default.track(A.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: X.application_id,
          location: J.location
        }), (0, p.h7)(X, false)
      }, [X, J, ee, Y]),
      ei = i.useCallback((e, t) => () => {
        (0, j.v)(ee, j.d.LEAVE_ACTIVITY), O.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [ee]),
      el = i.useCallback(() => {
        (0, S.Z)(B)
      }, [B]),
      eo = i.useCallback(() => {
        let e = null != W && (0, I.vd)(W.type) ? W : null,
          t = null != e ? e.getGuildId() : H;
        (0, d.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
          return n => (0, r.jsx)(e, U(k({}, n), {
            sourcePID: null == Y ? true : Y.pid,
            selectSource: !!$ && null != N.Z.getVoiceChannelId(),
            guildId: t,
            analyticsLocation: A.Sbl.ACTIVITY_PANEL
          }))
        })
      }, [W, H, Y, $]),
      ea = i.useCallback(e => {
        (0, f.jW)(e, async () => {
          let {
            default: e
          } = await n.e("58173").then(n.bind(n, 239120));
          return t => (0, r.jsx)(e, U(k({}, t), {
            activity: X
          }))
        }, {
          position: "right"
        })
      }, [X]),
      es = i.useRef(null),
      {
        canStartAuthorization: ec,
        startAuthorization: eu,
        hasAlreadyLinked: ed,
        connectionApp: ep
      } = (0, _.F)(Q),
      ef = w.Z.useConfig({
        location: "ActivityActions"
      }).enabled,
      eh = (0, h.O)(e => {
        if (e && null != ep) {
          var t;
          Z.default.track(A.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
            game_id: null != (t = null == Y ? true : Y.id) ? t : null,
            application_id: ep.id
          })
        }
      }),
      eg = (null != Y || null == q || (0, g.R)()) && (z || F) ? (z ? (t = false, l = () => {
        el(), (0, j.v)(ee, j.d.STREAM, false)
      }, a = d.g5r, m = M.intl.string(M.t.S5anIS)) : K ? (t = false, l = () => {
        eo(), (0, j.v)(ee, j.d.STREAM, true)
      }, a = d.hGI, m = null != Y ? M.intl.formatToPlainString(M.t.AB5gT0, {
        game: Y.name
      }) : M.intl.string(M.t.FeUKeH)) : (t = true, l = null, a = d.hGI, m = null != W && (0, I.vd)(W.type) ? M.intl.string(M.t.uQn9Bw) : null != H ? M.intl.string(M.t.fBXEoK) : M.intl.string(M.t.n3feND)), (0, r.jsx)("div", {
        className: L.panelButtonContainer,
        children: (0, r.jsx)(T.Z, {
          tooltipText: m,
          disabled: t,
          onClick: l,
          icon: a
        })
      })) : null,
      em = en && null == q ? (0, r.jsx)(T.Z, {
        ref: es,
        tooltipText: M.intl.string(M.t["hC/Ze3"]),
        onClick: er,
        icon: d.ejJ
      }) : null,
      eb = null == q ? null : (0, r.jsx)(T.Z, {
        tooltipText: M.intl.string(M.t["R/FK4O"]),
        onClick: ei(q.applicationId, q.location),
        icon: d.PBZ
      }),
      eO = null == B ? null : (0, r.jsx)(v.Z, {}),
      ey = ef && ec && !ed ? (0, r.jsx)(V, {
        runningGame: Y,
        startAuthorization: eu,
        connectionApp: ep,
        ref: eh
      }) : null,
      e_ = et && null != X && (0, b.Z)(X) ? (0, r.jsx)(T.Z, {
        tooltipText: "Report Issue",
        onClick: ea,
        icon: d.xhG
      }) : null,
      {
        isQuestBarEmpty: ej,
        hasLoadedQuestBar: ev
      } = (0, P.Ws)({
        location: D.dr.CONFLICT_CHECKS
      }),
      ex = (() => {
        let e = [],
          t = !ev || !ej;
        return en && ed && ef && !t && e.push(s.z.ACCOUNT_LINK_INVITE_FRIENDS), ef && ec && !ed && !t && null != Q && e.push(s.z.ACCOUNT_LINK_PROMPT), (0, r.jsx)(x.ZP, {
          contentTypes: e,
          groupName: R.R.ACCOUNT_NAME_ZONE,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            return t === s.z.ACCOUNT_LINK_INVITE_FRIENDS ? (0, r.jsx)(u.J2, {
              title: M.intl.string(M.t["0l2pEh"]),
              body: M.intl.string(M.t.DSZUKy),
              targetElementRef: es,
              align: "right",
              shouldShow: true,
              onRequestClose: () => n(R.L.USER_DISMISS),
              caretConfig: {
                align: "end"
              },
              actions: [{
                text: M.intl.string(M.t.YdkBCA),
                onClick: () => {
                  n(R.L.TAKE_ACTION), er()
                }
              }]
            }) : t === s.z.ACCOUNT_LINK_PROMPT ? (0, r.jsx)(u.J2, {
              graphic: {
                type: "dynamic",
                component: c.P3.ACCOUNT_LINK_DISPLAY,
                props: {
                  application: Q
                }
              },
              title: M.intl.formatToPlainString(M.t["lo6H6+"], {
                gameName: Q.name
              }),
              body: M.intl.string(M.t.qYAzOj),
              targetElementRef: eh,
              align: "right",
              shouldShow: true,
              gradientColor: "purple",
              onRequestClose: () => n(R.L.USER_DISMISS),
              caretConfig: {
                align: "end"
              },
              actions: [{
                text: M.intl.string(M.t.lw71NT),
                onClick: () => {
                  n(R.L.TAKE_ACTION), eu()
                }
              }]
            }) : true
          }
        })
      })();
    return null == eg && null == em && null == eb && null == ey && null == e_ ? null : (0, r.jsxs)("div", {
      className: L.actions,
      children: [null != ey ? ey : em, eg, null != eb ? eb : eO, ex, e_]
    })
  }),
  V = Chunk647438.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: i,
      connectionApp: l
    } = e;
    return (0, r.jsx)(T.Z, {
      ref: t,
      onClick: () => {
        var e, t;
        Z.default.track(A.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: a.u,
      tooltipText: M.intl.string(M.t.sbdnp6)
    })
  })