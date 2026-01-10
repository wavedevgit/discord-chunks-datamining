/** Chunk was on 81985 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => R,
  y: () => w
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

function w(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === Z.IIU.PLAYING && (0, f.Z)(t, Z.xjy.JOIN)
  }
  returnfalse
}
let R = Chunk473749.memo(function(e) {
    var t, l;
    let {
      stream: o,
      canGoLive: s,
      isStreaming: f,
      channel: v,
      canStream: C,
      runningGame: E,
      embeddedActivity: N,
      frame: R,
      activity: k,
      application: L,
      analyticsContext: U,
      inviteButtonRef: G,
      accountLinkButtonRef: B,
      startAuthorization: F,
      canStartAuthorization: H,
      hasAlreadyLinked: V,
      connectionApp: z
    } = e, {
      parentAnalyticsLocation: W,
      analyticsLocations: K
    } = (0, g.ZP)(), Y = (0, x.Z)(L, "rtc-activity-panel"), q = w(L, k, N), X = i.useCallback(() => {
      var e;
      a()(null != k, "Received null activity"), I.default.track(Z.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
        action_type: "invite_to_game",
        game_id: null != (e = null == E ? true : E.id) ? e : null,
        application_id: k.application_id
      }), (0, b.v)(W, b.d.INVITE), I.default.track(Z.rMx.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: k.application_id,
        location: U.location
      }), (0, d.h7)(k, false)
    }, [k, U, W, E]), Q = i.useCallback((e, t) => () => {
      (0, b.v)(W, b.d.LEAVE_ACTIVITY), h.Z.leaveActivity({
        location: t,
        applicationId: e,
        showFeedback: true
      })
    }, [W]), J = i.useCallback(e => () => {
      (0, b.v)(W, b.d.LEAVE_ACTIVITY), O.Z.stopFrame({
        applicationId: e
      })
    }, [W]), $ = i.useCallback(() => {
      (0, j.Z)(o)
    }, [o]), ee = i.useCallback(() => {
      (0, u.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("46746"), n.e("95200")]).then(n.bind(n, 60594));
        return t => {
          var n, i;
          return (0, r.jsx)(e, (n = function(e) {
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
          }({}, t), i = i = {
            sourcePID: null == E ? true : E.pid,
            selectSource: null != _.Z.getVoiceChannelId(),
            analyticsLocations: K
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      })
    }, [E, K]), et = i.useRef(null), [en, er] = i.useState(false);
    i.useEffect(() => () => {
      null != et.current && clearTimeout(et.current)
    }, []), i.useEffect(() => {
      V && (er(false), null != et.current && (clearTimeout(et.current), et.current = null))
    }, [V]);
    let ei = (null == Y ? true : Y.guildId) == null || null == L ? null : (0, r.jsx)(M, {
        guildId: Y.guildId,
        applicationId: Y.id
      }),
      el = function() {
        let e, t, n;
        if (null == E && null != N && !(0, p.R)() || !f && !s) return null;
        let i = null;
        return f ? (e = false, t = () => {
          $(), (0, b.v)(W, b.d.STREAM, false)
        }, n = u.g5r, i = T.intl.string(T.t.S5anIc)) : C ? (e = false, t = () => {
          ee(), (0, b.v)(W, b.d.STREAM, true)
        }, n = u.hGI, i = null != E ? T.intl.formatToPlainString(T.t.AB5gTy, {
          game: E.name
        }) : T.intl.string(T.t.FeUKeA)) : (e = true, t = null, n = u.hGI, null != v && (0, S.vd)(v.type) && (i = T.intl.string(T.t.uQn9B8))), (0, r.jsx)("div", {
          className: A.panelButtonContainer,
          children: (0, r.jsx)(P.Z, {
            tooltipText: i,
            disabled: e,
            onClick: t,
            icon: n
          })
        })
      }(),
      ea = q && null == N ? (0, r.jsx)(P.Z, {
        ref: G,
        tooltipText: T.intl.string(T.t["hC/Zey"]),
        onClick: X,
        icon: u.ejJ
      }) : null,
      eo = null == N ? null : (0, r.jsx)(P.Z, {
        tooltipText: T.intl.string(T.t["R/FK4A"]),
        onClick: Q(N.applicationId, N.location),
        icon: u.PBZ
      }),
      es = null == R ? null : (0, r.jsx)(P.Z, {
        tooltipText: T.intl.string(T.t["R/FK4A"]),
        onClick: J(R.applicationId),
        icon: u.PBZ
      }),
      ec = null == o ? null : (0, r.jsx)(y.Z, {}),
      eu = !H || V ? null : (0, r.jsx)(D, {
        runningGame: E,
        startAuthorization: () => {
          F({
            analyticsLocations: K
          }) === m.ro.RPC && (er(true), null != et.current && clearTimeout(et.current), et.current = setTimeout(() => {
            er(false)
          }, 9e4))
        },
        connectionApp: z,
        ref: B
      }),
      ed = !H || V ? null : (0, r.jsx)(c.J2, {
        title: T.intl.string(T.t.ULvRFd),
        body: T.intl.string(T.t["HJJDr+"]),
        targetElementRef: B,
        position: "top",
        align: "center",
        caretConfig: {
          align: "center"
        },
        shouldShow: en,
        onRequestClose: () => {
          er(false), null != et.current && (clearTimeout(et.current), et.current = null)
        }
      });
    return null == el && null == ea && null == eo && null == es && null == eu && null == ei ? null : (0, r.jsxs)("div", {
      className: A.actions,
      children: [null != (t = null != ei ? ei : eu) ? t : ea, el, null != (l = null != eo ? eo : es) ? l : ec, ed]
    })
  }),
  D = Chunk473749.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: i,
      connectionApp: l
    } = e;
    return (0, r.jsx)(P.Z, {
      ref: t,
      onClick: () => {
        var e, t;
        I.default.track(Z.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: o.u,
      tooltipText: T.intl.string(T.t.sbdnpw)
    })
  });

function M(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, l = i.useRef(null);
  i.useEffect(() => {
    I.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_VIEWED, {
      application_id: t
    })
  }, [t]);
  let [a, o] = (0, v.US)([s.z.GAME_SHOP_RTC_POPOVER], N.R.ACCOUNT_NAME_ZONE, true), c = i.useCallback(() => {
    (0, C.eagerNavigateToSocialLayerStorefront)({
      guildId: n
    })
  }, [n]), d = i.useCallback(() => {
    (0, C.default)({
      guildId: n
    }), o(N.L.USER_DISMISS)
  }, [n, o]), p = i.useCallback(() => {
    I.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_CLICKED, {
      application_id: t
    }), d()
  }, [t, d]), f = i.useCallback(() => {
    o(N.L.USER_DISMISS)
  }, [o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(P.Z, {
      tooltipText: T.intl.string(T.t.vyaWs7),
      onClick: p,
      onMouseDown: c,
      icon: u.EOn,
      ref: l
    }), a === s.z.GAME_SHOP_RTC_POPOVER ? (0, r.jsx)(E.Z, {
      onActionClick: d,
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