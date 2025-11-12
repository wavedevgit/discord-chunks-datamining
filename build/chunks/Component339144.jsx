/** Chunk was on 38388 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => L,
  y: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk636449 = require("./636449.js"),
  Chunk620662 = require("./620662.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk535139 = require("./535139.js"),
  Chunk522651 = require("./522651.js"),
  Chunk311352 = require("./311352.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk48131 = require("./48131.js"),
  Chunk668519 = require("./668519.js"),
  Chunk803647 = require("./803647.js"),
  Chunk746298 = require("./746298.js"),
  Chunk705338 = require("./705338.js"),
  Chunk445606 = require("./445606.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381096 = require("./381096.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258628 = require("./258628.js");

function D(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === w.IIU.PLAYING && (0, h.Z)(t, w.xjy.JOIN)
  }
  returnfalse
}
let L = Chunk647438.memo(function(e) {
    var t, l;
    let a, s, h, y, {
        stream: C,
        canGoLive: E,
        guildId: T,
        isStreaming: L,
        channel: G,
        canStream: U,
        runningGame: B,
        embeddedActivity: F,
        frame: V,
        activity: H,
        application: z,
        analyticsContext: W,
        inviteButtonRef: K,
        accountLinkButtonRef: Y
      } = e,
      {
        showRefreshedGoLiveModal: q
      } = (0, v.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: X
      } = (0, g.ZP)(),
      Q = (0, x.Z)(z),
      J = D(z, H, F),
      $ = i.useCallback(() => {
        var e;
        o()(null != H, "Received null activity"), P.default.track(w.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == B ? true : B.id) ? e : null,
          application_id: H.application_id
        }), (0, b.v)(X, b.d.INVITE), P.default.track(w.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: H.application_id,
          location: W.location
        }), (0, d.h7)(H, false)
      }, [H, W, X, B]),
      ee = i.useCallback((e, t) => () => {
        (0, b.v)(X, b.d.LEAVE_ACTIVITY), f.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [X]),
      et = i.useCallback(e => () => {
        (0, b.v)(X, b.d.LEAVE_ACTIVITY), O.Z.stopFrame({
          applicationId: e
        })
      }, [X]),
      en = i.useCallback(() => {
        (0, j.Z)(C)
      }, [C]),
      er = i.useCallback(() => {
        let e = null != G && (0, S.vd)(G.type) ? G : null,
          t = null != e ? e.getGuildId() : T;
        (0, u.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("4093"), n.e("47863"), n.e("33641")]).then(n.bind(n, 60594));
          return n => {
            var i, l;
            return (0, r.jsx)(e, (i = function(e) {
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
            }({}, n), l = l = {
              sourcePID: null == B ? true : B.pid,
              selectSource: !!q && null != I.Z.getVoiceChannelId(),
              guildId: t,
              analyticsLocation: w.Sbl.ACTIVITY_PANEL
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
            }), i))
          }
        })
      }, [G, T, B, q]),
      {
        canStartAuthorization: ei,
        startAuthorization: el,
        hasAlreadyLinked: eo,
        connectionApp: ea
      } = (0, m.F)(z, {
        allowedFlows: [m.r.RPC, m.r.WEB]
      }),
      es = N.Z.useConfig({
        location: "ActivityActions"
      }).enabled,
      ec = i.useRef(null),
      [eu, ed] = i.useState(false);
    i.useEffect(() => () => {
      null != ec.current && clearTimeout(ec.current)
    }, []), i.useEffect(() => {
      eo && (ed(false), null != ec.current && (clearTimeout(ec.current), ec.current = null))
    }, [eo]);
    let ep = null == Q ? null : (0, r.jsx)(k, {
        guildId: Q
      }),
      eh = (null != B || null == F || (0, p.R)()) && (L || E) ? (L ? (a = false, s = () => {
        en(), (0, b.v)(X, b.d.STREAM, false)
      }, h = u.g5r, y = A.intl.string(A.t.S5anIc)) : U ? (a = false, s = () => {
        er(), (0, b.v)(X, b.d.STREAM, true)
      }, h = u.hGI, y = null != B ? A.intl.formatToPlainString(A.t.AB5gTy, {
        game: B.name
      }) : A.intl.string(A.t.FeUKeA)) : (a = true, s = null, h = u.hGI, y = null != G && (0, S.vd)(G.type) ? A.intl.string(A.t.uQn9B8) : null != T ? A.intl.string(A.t.fBXEoJ) : A.intl.string(A.t.n3feNG)), (0, r.jsx)("div", {
        className: R.panelButtonContainer,
        children: (0, r.jsx)(Z.Z, {
          tooltipText: y,
          disabled: a,
          onClick: s,
          icon: h
        })
      })) : null,
      ef = J && null == F ? (0, r.jsx)(Z.Z, {
        ref: K,
        tooltipText: A.intl.string(A.t["hC/Zey"]),
        onClick: $,
        icon: u.ejJ
      }) : null,
      eg = null == F ? null : (0, r.jsx)(Z.Z, {
        tooltipText: A.intl.string(A.t["R/FK4A"]),
        onClick: ee(F.applicationId, F.location),
        icon: u.PBZ
      }),
      em = null == V ? null : (0, r.jsx)(Z.Z, {
        tooltipText: A.intl.string(A.t["R/FK4A"]),
        onClick: et(V.applicationId),
        icon: u.PBZ
      }),
      eb = null == C ? null : (0, r.jsx)(_.Z, {}),
      e_ = es && ei && !eo ? (0, r.jsx)(M, {
        runningGame: B,
        startAuthorization: () => {
          ed(true), null != ec.current && clearTimeout(ec.current), ec.current = setTimeout(() => {
            ed(false)
          }, 9e4), el()
        },
        connectionApp: ea,
        ref: Y
      }) : null,
      ey = es && ei && !eo ? (0, r.jsx)(c.J2, {
        title: A.intl.string(A.t.ULvRFd),
        body: A.intl.string(A.t["HJJDr+"]),
        targetElementRef: Y,
        position: "top",
        align: "center",
        caretConfig: {
          align: "center"
        },
        shouldShow: eu,
        onRequestClose: () => {
          ed(false), null != ec.current && (clearTimeout(ec.current), ec.current = null)
        }
      }) : null;
    return null == eh && null == ef && null == eg && null == em && null == e_ && null == ep ? null : (0, r.jsxs)("div", {
      className: R.actions,
      children: [null != (t = null != ep ? ep : e_) ? t : ef, eh, null != (l = null != eg ? eg : em) ? l : eb, ey]
    })
  }),
  M = Chunk647438.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: i,
      connectionApp: l
    } = e;
    return (0, r.jsx)(Z.Z, {
      ref: t,
      onClick: () => {
        var e, t;
        P.default.track(w.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: a.u,
      tooltipText: A.intl.string(A.t.sbdnpw)
    })
  });

function k(e) {
  let {
    guildId: t
  } = e, n = i.useRef(null), [l, o] = (0, y.US)([s.z.GAME_SHOP_RTC_POPOVER], T.R.ACCOUNT_NAME_ZONE, true), a = i.useCallback(() => {
    (0, C.Z)({
      guildId: t
    }), o(T.L.USER_DISMISS)
  }, [t, o]), c = i.useCallback(() => {
    o(T.L.USER_DISMISS)
  }, [o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Z.Z, {
      tooltipText: A.intl.string(A.t.vyaWs7),
      onClick: a,
      icon: u.EOn,
      ref: n
    }), l === s.z.GAME_SHOP_RTC_POPOVER ? (0, r.jsx)(E.Z, {
      onActionClick: a,
      onRequestClose: c,
      targetElementRef: n,
      position: "top",
      align: "center",
      caretConfig: {
        align: "center",
        position: "top"
      }
    }) : null]
  })
}