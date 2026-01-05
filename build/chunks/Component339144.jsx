/** Chunk was on 67000 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => R,
  y: () => A
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

function A(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === N.IIU.PLAYING && (0, h.Z)(t, N.xjy.JOIN)
  }
  returnfalse
}
let R = Chunk473749.memo(function(e) {
    var t, l;
    let {
      stream: o,
      canGoLive: s,
      isStreaming: h,
      channel: O,
      canStream: x,
      runningGame: E,
      embeddedActivity: Z,
      frame: R,
      activity: L,
      application: k,
      analyticsContext: G,
      inviteButtonRef: U,
      accountLinkButtonRef: B,
      startAuthorization: F,
      canStartAuthorization: V,
      hasAlreadyLinked: H,
      connectionApp: W
    } = e, {
      parentAnalyticsLocation: z,
      analyticsLocations: K
    } = (0, g.ZP)(), Y = (0, C.Z)(k, "rtc-activity-panel"), q = A(k, L, Z), Q = i.useCallback(() => {
      var e;
      a()(null != L, "Received null activity"), I.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
        action_type: "invite_to_game",
        game_id: null != (e = null == E ? true : E.id) ? e : null,
        application_id: L.application_id
      }), (0, m.v)(z, m.d.INVITE), I.default.track(N.rMx.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: L.application_id,
        location: G.location
      }), (0, d.h7)(L, false)
    }, [L, G, z, E]), X = i.useCallback((e, t) => () => {
      (0, m.v)(z, m.d.LEAVE_ACTIVITY), p.Z.leaveActivity({
        location: t,
        applicationId: e,
        showFeedback: true
      })
    }, [z]), J = i.useCallback(e => () => {
      (0, m.v)(z, m.d.LEAVE_ACTIVITY), v.Z.stopFrame({
        applicationId: e
      })
    }, [z]), $ = i.useCallback(() => {
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
      H && (er(false), null != et.current && (clearTimeout(et.current), et.current = null))
    }, [H]);
    let ei = (null == Y ? true : Y.guildId) == null || null == k ? null : (0, r.jsx)(M, {
        guildId: Y.guildId,
        applicationId: Y.id
      }),
      el = function() {
        let e, t, n;
        if (null == E && null != Z && !(0, f.R)() || !h && !s) return null;
        let i = null;
        return h ? (e = false, t = () => {
          $(), (0, m.v)(z, m.d.STREAM, false)
        }, n = u.g5r, i = w.intl.string(w.t.S5anIc)) : x ? (e = false, t = () => {
          ee(), (0, m.v)(z, m.d.STREAM, true)
        }, n = u.hGI, i = null != E ? w.intl.formatToPlainString(w.t.AB5gTy, {
          game: E.name
        }) : w.intl.string(w.t.FeUKeA)) : (e = true, t = null, n = u.hGI, null != O && (0, S.vd)(O.type) && (i = w.intl.string(w.t.uQn9B8))), (0, r.jsx)("div", {
          className: T.panelButtonContainer,
          children: (0, r.jsx)(P.Z, {
            tooltipText: i,
            disabled: e,
            onClick: t,
            icon: n
          })
        })
      }(),
      ea = q && null == Z ? (0, r.jsx)(P.Z, {
        ref: U,
        tooltipText: w.intl.string(w.t["hC/Zey"]),
        onClick: Q,
        icon: u.ejJ
      }) : null,
      eo = null == Z ? null : (0, r.jsx)(P.Z, {
        tooltipText: w.intl.string(w.t["R/FK4A"]),
        onClick: X(Z.applicationId, Z.location),
        icon: u.PBZ
      }),
      es = null == R ? null : (0, r.jsx)(P.Z, {
        tooltipText: w.intl.string(w.t["R/FK4A"]),
        onClick: J(R.applicationId),
        icon: u.PBZ
      }),
      ec = null == o ? null : (0, r.jsx)(y.Z, {}),
      eu = !V || H ? null : (0, r.jsx)(D, {
        runningGame: E,
        startAuthorization: () => {
          F({
            analyticsLocations: K
          }) === b.ro.RPC && (er(true), null != et.current && clearTimeout(et.current), et.current = setTimeout(() => {
            er(false)
          }, 9e4))
        },
        connectionApp: W,
        ref: B
      }),
      ed = !V || H ? null : (0, r.jsx)(c.J2, {
        title: w.intl.string(w.t.ULvRFd),
        body: w.intl.string(w.t["HJJDr+"]),
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
      className: T.actions,
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
        I.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: o.u,
      tooltipText: w.intl.string(w.t.sbdnpw)
    })
  });

function M(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, l = i.useRef(null);
  i.useEffect(() => {
    I.default.track(N.rMx.RTC_GAME_SHOP_BUTTON_VIEWED, {
      application_id: t
    })
  }, [t]);
  let [a, o] = (0, O.US)([s.z.GAME_SHOP_RTC_POPOVER], Z.R.ACCOUNT_NAME_ZONE, true), c = i.useCallback(() => {
    (0, x.eagerNavigateToSocialLayerStorefront)({
      guildId: n
    })
  }, [n]), d = i.useCallback(() => {
    (0, x.default)({
      guildId: n
    }), o(Z.L.USER_DISMISS)
  }, [n, o]), f = i.useCallback(() => {
    I.default.track(N.rMx.RTC_GAME_SHOP_BUTTON_CLICKED, {
      application_id: t
    }), d()
  }, [t, d]), h = i.useCallback(() => {
    o(Z.L.USER_DISMISS)
  }, [o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(P.Z, {
      tooltipText: w.intl.string(w.t.vyaWs7),
      onClick: f,
      onMouseDown: c,
      icon: u.EOn,
      ref: l
    }), a === s.z.GAME_SHOP_RTC_POPOVER ? (0, r.jsx)(E.Z, {
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