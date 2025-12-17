/** Chunk was on 67000 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => D,
  y: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk636449 = require("./636449.js"),
  Chunk620662 = require("./620662.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
  Chunk522651 = require("./522651.js"),
  Chunk311352 = require("./311352.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk48131 = require("./48131.js"),
  Chunk668519 = require("./668519.js"),
  Chunk803647 = require("./803647.js"),
  Chunk631863 = require("./631863.js"),
  Chunk705338 = require("./705338.js"),
  Chunk445606 = require("./445606.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk538700 = require("./538700.js");

function R(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === Z.IIU.PLAYING && (0, h.Z)(t, Z.xjy.JOIN)
  }
  returnfalse
}
let D = Chunk473749.memo(function(e) {
    var t, l;
    let o, s, h, O, {
        stream: E,
        canGoLive: S,
        guildId: w,
        isStreaming: D,
        channel: k,
        canStream: G,
        runningGame: U,
        embeddedActivity: B,
        frame: F,
        activity: V,
        application: H,
        analyticsContext: z,
        inviteButtonRef: W,
        accountLinkButtonRef: K,
        startAuthorization: Y,
        canStartAuthorization: q,
        hasAlreadyLinked: Q,
        connectionApp: X
      } = e,
      {
        showRefreshedGoLiveModal: J
      } = (0, j.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: $,
        analyticsLocations: ee
      } = (0, g.ZP)(),
      et = (0, x.Z)(H, "rtc-activity-panel"),
      en = R(H, V, B),
      er = i.useCallback(() => {
        var e;
        a()(null != V, "Received null activity"), P.default.track(Z.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == U ? true : U.id) ? e : null,
          application_id: V.application_id
        }), (0, m.v)($, m.d.INVITE), P.default.track(Z.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: V.application_id,
          location: z.location
        }), (0, d.h7)(V, false)
      }, [V, z, $, U]),
      ei = i.useCallback((e, t) => () => {
        (0, m.v)($, m.d.LEAVE_ACTIVITY), p.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [$]),
      el = i.useCallback(e => () => {
        (0, m.v)($, m.d.LEAVE_ACTIVITY), v.Z.stopFrame({
          applicationId: e
        })
      }, [$]),
      ea = i.useCallback(() => {
        (0, C.Z)(E)
      }, [E]),
      eo = i.useCallback(() => {
        let e = null != k && (0, I.vd)(k.type) ? k : null,
          t = null != e ? e.getGuildId() : w;
        (0, u.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("4093"), n.e("44183"), n.e("50442")]).then(n.bind(n, 60594));
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
              sourcePID: null == U ? true : U.pid,
              selectSource: !!J && null != _.Z.getVoiceChannelId(),
              guildId: t,
              analyticsLocation: Z.Sbl.ACTIVITY_PANEL
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
      }, [k, w, U, J]),
      es = i.useRef(null),
      [ec, eu] = i.useState(false);
    i.useEffect(() => () => {
      null != es.current && clearTimeout(es.current)
    }, []), i.useEffect(() => {
      Q && (eu(false), null != es.current && (clearTimeout(es.current), es.current = null))
    }, [Q]);
    let ed = (null == et ? true : et.guildId) == null || null == H ? null : (0, r.jsx)(L, {
        guildId: et.guildId,
        applicationId: et.id
      }),
      ef = (null != U || null == B || (0, f.R)()) && (D || S) ? (D ? (o = false, s = () => {
        ea(), (0, m.v)($, m.d.STREAM, false)
      }, h = u.g5r, O = T.intl.string(T.t.S5anIc)) : G ? (o = false, s = () => {
        eo(), (0, m.v)($, m.d.STREAM, true)
      }, h = u.hGI, O = null != U ? T.intl.formatToPlainString(T.t.AB5gTy, {
        game: U.name
      }) : T.intl.string(T.t.FeUKeA)) : (o = true, s = null, h = u.hGI, O = null != k && (0, I.vd)(k.type) ? T.intl.string(T.t.uQn9B8) : null != w ? T.intl.string(T.t.fBXEoJ) : T.intl.string(T.t.n3feNG)), (0, r.jsx)("div", {
        className: A.panelButtonContainer,
        children: (0, r.jsx)(N.Z, {
          tooltipText: O,
          disabled: o,
          onClick: s,
          icon: h
        })
      })) : null,
      eh = en && null == B ? (0, r.jsx)(N.Z, {
        ref: W,
        tooltipText: T.intl.string(T.t["hC/Zey"]),
        onClick: er,
        icon: u.ejJ
      }) : null,
      ep = null == B ? null : (0, r.jsx)(N.Z, {
        tooltipText: T.intl.string(T.t["R/FK4A"]),
        onClick: ei(B.applicationId, B.location),
        icon: u.PBZ
      }),
      eg = null == F ? null : (0, r.jsx)(N.Z, {
        tooltipText: T.intl.string(T.t["R/FK4A"]),
        onClick: el(F.applicationId),
        icon: u.PBZ
      }),
      eb = null == E ? null : (0, r.jsx)(y.Z, {}),
      em = !q || Q ? null : (0, r.jsx)(M, {
        runningGame: U,
        startAuthorization: () => {
          Y({
            analyticsLocations: ee
          }) === b.ro.RPC && (eu(true), null != es.current && clearTimeout(es.current), es.current = setTimeout(() => {
            eu(false)
          }, 9e4))
        },
        connectionApp: X,
        ref: K
      }),
      ey = !q || Q ? null : (0, r.jsx)(c.J2, {
        title: T.intl.string(T.t.ULvRFd),
        body: T.intl.string(T.t["HJJDr+"]),
        targetElementRef: K,
        position: "top",
        align: "center",
        caretConfig: {
          align: "center"
        },
        shouldShow: ec,
        onRequestClose: () => {
          eu(false), null != es.current && (clearTimeout(es.current), es.current = null)
        }
      });
    return null == ef && null == eh && null == ep && null == eg && null == em && null == ed ? null : (0, r.jsxs)("div", {
      className: A.actions,
      children: [null != (t = null != ed ? ed : em) ? t : eh, ef, null != (l = null != ep ? ep : eg) ? l : eb, ey]
    })
  }),
  M = Chunk473749.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: i,
      connectionApp: l
    } = e;
    return (0, r.jsx)(N.Z, {
      ref: t,
      onClick: () => {
        var e, t;
        P.default.track(Z.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: o.u,
      tooltipText: T.intl.string(T.t.sbdnpw)
    })
  });

function L(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, l = i.useRef(null);
  i.useEffect(() => {
    P.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_VIEWED, {
      application_id: t
    })
  }, [t]);
  let [a, o] = (0, O.US)([s.z.GAME_SHOP_RTC_POPOVER], w.R.ACCOUNT_NAME_ZONE, true), c = i.useCallback(() => {
    (0, E.eagerNavigateToSocialLayerStorefront)({
      guildId: n
    })
  }, [n]), d = i.useCallback(() => {
    (0, E.default)({
      guildId: n
    }), o(w.L.USER_DISMISS)
  }, [n, o]), f = i.useCallback(() => {
    P.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_CLICKED, {
      application_id: t
    }), d()
  }, [t, d]), h = i.useCallback(() => {
    o(w.L.USER_DISMISS)
  }, [o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.Z, {
      tooltipText: T.intl.string(T.t.vyaWs7),
      onClick: f,
      onMouseDown: c,
      icon: u.EOn,
      ref: l
    }), a === s.z.GAME_SHOP_RTC_POPOVER ? (0, r.jsx)(S.Z, {
      onActionClick: d,
      onRequestClose: h,
      targetElementRef: l,
      position: "top",
      align: "center",
      caretConfig: {
        align: "center"
      }
    }) : null]
  })
}