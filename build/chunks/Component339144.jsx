/** Chunk was on 64271 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => D,
  y: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk524995 = require("./524995.js"),
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
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258628 = require("./258628.js");

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
    let a, s, h, y, {
        stream: C,
        canGoLive: E,
        guildId: w,
        isStreaming: D,
        channel: k,
        canStream: G,
        runningGame: U,
        embeddedActivity: B,
        frame: F,
        activity: V,
        application: H,
        analyticsContext: W,
        inviteButtonRef: z,
        accountLinkButtonRef: K,
        startAuthorization: Y,
        canStartAuthorization: q,
        hasAlreadyLinked: Q,
        connectionApp: X
      } = e,
      {
        showRefreshedGoLiveModal: J
      } = (0, v.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: $
      } = (0, g.ZP)(),
      ee = (0, x.Z)(H, "rtc-activity-panel"),
      et = R(H, V, B),
      en = i.useCallback(() => {
        var e;
        o()(null != V, "Received null activity"), P.default.track(Z.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == U ? true : U.id) ? e : null,
          application_id: V.application_id
        }), (0, b.v)($, b.d.INVITE), P.default.track(Z.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: V.application_id,
          location: W.location
        }), (0, d.h7)(V, false)
      }, [V, W, $, U]),
      er = i.useCallback((e, t) => () => {
        (0, b.v)($, b.d.LEAVE_ACTIVITY), p.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [$]),
      ei = i.useCallback(e => () => {
        (0, b.v)($, b.d.LEAVE_ACTIVITY), O.Z.stopFrame({
          applicationId: e
        })
      }, [$]),
      el = i.useCallback(() => {
        (0, j.Z)(C)
      }, [C]),
      eo = i.useCallback(() => {
        let e = null != k && (0, S.vd)(k.type) ? k : null,
          t = null != e ? e.getGuildId() : w;
        (0, u.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("4093"), n.e("47863"), n.e("50442")]).then(n.bind(n, 60594));
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
              selectSource: !!J && null != I.Z.getVoiceChannelId(),
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
      ea = i.useRef(null),
      [es, ec] = i.useState(false);
    i.useEffect(() => () => {
      null != ea.current && clearTimeout(ea.current)
    }, []), i.useEffect(() => {
      Q && (ec(false), null != ea.current && (clearTimeout(ea.current), ea.current = null))
    }, [Q]);
    let eu = null == ee || null == H ? null : (0, r.jsx)(M, {
        guildId: ee,
        applicationId: H.id
      }),
      ed = (null != U || null == B || (0, f.R)()) && (D || E) ? (D ? (a = false, s = () => {
        el(), (0, b.v)($, b.d.STREAM, false)
      }, h = u.g5r, y = T.intl.string(T.t.S5anIc)) : G ? (a = false, s = () => {
        eo(), (0, b.v)($, b.d.STREAM, true)
      }, h = u.hGI, y = null != U ? T.intl.formatToPlainString(T.t.AB5gTy, {
        game: U.name
      }) : T.intl.string(T.t.FeUKeA)) : (a = true, s = null, h = u.hGI, y = null != k && (0, S.vd)(k.type) ? T.intl.string(T.t.uQn9B8) : null != w ? T.intl.string(T.t.fBXEoJ) : T.intl.string(T.t.n3feNG)), (0, r.jsx)("div", {
        className: A.panelButtonContainer,
        children: (0, r.jsx)(N.Z, {
          tooltipText: y,
          disabled: a,
          onClick: s,
          icon: h
        })
      })) : null,
      ef = et && null == B ? (0, r.jsx)(N.Z, {
        ref: z,
        tooltipText: T.intl.string(T.t["hC/Zey"]),
        onClick: en,
        icon: u.ejJ
      }) : null,
      eh = null == B ? null : (0, r.jsx)(N.Z, {
        tooltipText: T.intl.string(T.t["R/FK4A"]),
        onClick: er(B.applicationId, B.location),
        icon: u.PBZ
      }),
      ep = null == F ? null : (0, r.jsx)(N.Z, {
        tooltipText: T.intl.string(T.t["R/FK4A"]),
        onClick: ei(F.applicationId),
        icon: u.PBZ
      }),
      eg = null == C ? null : (0, r.jsx)(_.Z, {}),
      em = !q || Q ? null : (0, r.jsx)(L, {
        runningGame: U,
        startAuthorization: () => {
          Y() === m.r.RPC && (ec(true), null != ea.current && clearTimeout(ea.current), ea.current = setTimeout(() => {
            ec(false)
          }, 9e4))
        },
        connectionApp: X,
        ref: K
      }),
      eb = !q || Q ? null : (0, r.jsx)(c.J2, {
        title: T.intl.string(T.t.ULvRFd),
        body: T.intl.string(T.t["HJJDr+"]),
        targetElementRef: K,
        position: "top",
        align: "center",
        caretConfig: {
          align: "center"
        },
        shouldShow: es,
        onRequestClose: () => {
          ec(false), null != ea.current && (clearTimeout(ea.current), ea.current = null)
        }
      });
    return null == ed && null == ef && null == eh && null == ep && null == em && null == eu ? null : (0, r.jsxs)("div", {
      className: A.actions,
      children: [null != (t = null != eu ? eu : em) ? t : ef, ed, null != (l = null != eh ? eh : ep) ? l : eg, eb]
    })
  }),
  L = Chunk473749.forwardRef(function(e, t) {
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
      icon: a.u,
      tooltipText: T.intl.string(T.t.sbdnpw)
    })
  });

function M(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, l = i.useRef(null);
  i.useEffect(() => {
    P.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_VIEWED, {
      application_id: t
    })
  }, [t]);
  let [o, a] = (0, y.US)([s.z.GAME_SHOP_RTC_POPOVER], w.R.ACCOUNT_NAME_ZONE, true), c = i.useCallback(() => {
    (0, C.default)({
      guildId: n
    }), a(w.L.USER_DISMISS)
  }, [n, a]), d = i.useCallback(() => {
    P.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_CLICKED, {
      application_id: t
    }), c()
  }, [t, c]), f = i.useCallback(() => {
    a(w.L.USER_DISMISS)
  }, [a]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.Z, {
      tooltipText: T.intl.string(T.t.vyaWs7),
      onClick: d,
      icon: u.EOn,
      ref: l
    }), o === s.z.GAME_SHOP_RTC_POPOVER ? (0, r.jsx)(E.Z, {
      onActionClick: c,
      onRequestClose: f,
      targetElementRef: l,
      position: "top",
      align: "center",
      caretConfig: {
        align: "center"
      }
    }) : null]
  })
}