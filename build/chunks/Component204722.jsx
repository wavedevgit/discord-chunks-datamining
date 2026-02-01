/** Chunk was on 42402 **/
/** chunk id: 204722, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => R,
  f: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk141628 = require("./141628.jsx"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk298990 = require("./298990.js"),
  Chunk646865 = require("./646865.js"),
  Chunk833349 = require("./833349.js"),
  Chunk869003 = require("./869003.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk362490 = require("./362490.js"),
  Chunk384059 = require("./384059.js"),
  Chunk359348 = require("./359348.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk625180 = require("./625180.js"),
  Chunk338771 = require("./338771.js"),
  Chunk453774 = require("./453774.js"),
  Chunk44724 = require("./44724.js"),
  Chunk849134 = require("./849134.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk42473 = require("./42473.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk275540 = require("./275540.js");

function R(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === N.$pd.PLAYING && (0, h.A)(t, N.jUm.JOIN)
  }
  returnfalse
}
let D = Chunk64700.memo(function(e) {
    var t, i;
    let {
      stream: a,
      canGoLive: o,
      isStreaming: h,
      channel: y,
      canStream: _,
      runningGame: v,
      embeddedActivity: T,
      frame: D,
      activity: G,
      application: k,
      analyticsContext: U,
      inviteButtonRef: V,
      accountLinkButtonRef: B,
      startAuthorization: H,
      canStartAuthorization: F,
      hasAlreadyLinked: Y,
      connectionApp: K
    } = e, {
      parentAnalyticsLocation: W,
      analyticsLocations: z
    } = (0, f.Ay)(), X = (0, x.A)(k, "rtc-activity-panel"), q = R(k, G, T), J = l.useCallback(() => {
      var e;
      s()(null != G, "Received null activity"), S.default.track(N.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
        action_type: "invite_to_game",
        game_id: null != (e = null == v ? true : v.id) ? e : null,
        application_id: G.application_id
      }), (0, b.X)(W, b.O.INVITE), S.default.track(N.HAw.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: G.application_id,
        location: U.location
      }), (0, d.qf)(G, false)
    }, [G, U, W, v]), Q = l.useCallback((e, t) => () => {
      (0, b.X)(W, b.O.LEAVE_ACTIVITY), g.A.leaveActivity({
        location: t,
        applicationId: e,
        showFeedback: true
      })
    }, [W]), Z = l.useCallback(e => () => {
      (0, b.X)(W, b.O.LEAVE_ACTIVITY), O.A.stopFrame({
        applicationId: e
      })
    }, [W]), $ = l.useCallback(() => {
      (0, j.A)(a)
    }, [a]), ee = l.useCallback(() => {
      (0, u.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
        return t => {
          var n, l;
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
          }({}, t), l = l = {
            sourcePID: null == v ? true : v.pid,
            selectSource: null != C.A.getVoiceChannelId(),
            analyticsLocations: z
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      })
    }, [v, z]), et = l.useRef(null), [en, er] = l.useState(false);
    l.useEffect(() => () => {
      null != et.current && clearTimeout(et.current)
    }, []), l.useEffect(() => {
      Y && (er(false), null != et.current && (clearTimeout(et.current), et.current = null))
    }, [Y]);
    let el = (null == X ? true : X.guildId) == null || null == k ? null : (0, r.jsx)(M, {
        guildId: X.guildId,
        applicationId: X.id
      }),
      ei = function() {
        let e, t, n;
        if (null == v && null != T && !(0, p.f)() || !h && !o) return null;
        let l = null;
        return h ? (e = false, t = () => {
          $(), (0, b.X)(W, b.O.STREAM, false)
        }, n = u.GT3, l = P.intl.string(P.t.S5anIc)) : _ ? (e = false, t = () => {
          ee(), (0, b.X)(W, b.O.STREAM, true)
        }, n = u.Fzq, l = null != v ? P.intl.formatToPlainString(P.t.AB5gTy, {
          game: v.name
        }) : P.intl.string(P.t.FeUKeA)) : (e = true, t = null, n = u.Fzq, null != y && (0, E.gV)(y.type) && (l = P.intl.string(P.t.uQn9B8))), (0, r.jsx)("div", {
          className: w.IF,
          children: (0, r.jsx)(I.A, {
            tooltipText: l,
            disabled: e,
            onClick: t,
            icon: n
          })
        })
      }(),
      es = q && null == T ? (0, r.jsx)(I.A, {
        ref: V,
        tooltipText: P.intl.string(P.t["hC/Zey"]),
        onClick: J,
        icon: u.DpX
      }) : null,
      ea = null == T ? null : (0, r.jsx)(I.A, {
        tooltipText: P.intl.string(P.t["R/FK4A"]),
        onClick: Q(T.applicationId, T.location),
        icon: u.oLl
      }),
      eo = null == D ? null : (0, r.jsx)(I.A, {
        tooltipText: P.intl.string(P.t["R/FK4A"]),
        onClick: Z(D.applicationId),
        icon: u.oLl
      }),
      ec = null == a ? null : (0, r.jsx)(A.A, {}),
      eu = !F || Y ? null : (0, r.jsx)(L, {
        runningGame: v,
        startAuthorization: () => {
          H({
            analyticsLocations: z
          }) === m._M.RPC && (er(true), null != et.current && clearTimeout(et.current), et.current = setTimeout(() => {
            er(false)
          }, 9e4))
        },
        connectionApp: K,
        ref: B
      }),
      ed = !F || Y ? null : (0, r.jsx)(c.AM, {
        title: P.intl.string(P.t.ULvRFd),
        body: P.intl.string(P.t["HJJDr+"]),
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
    return null == ei && null == es && null == ea && null == eo && null == eu && null == el ? null : (0, r.jsxs)("div", {
      className: w.o1,
      children: [null != (t = null != el ? el : eu) ? t : es, ei, null != (i = null != ea ? ea : eo) ? i : ec, ed]
    })
  }),
  L = Chunk64700.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: l,
      connectionApp: i
    } = e;
    return (0, r.jsx)(I.A, {
      ref: t,
      onClick: () => {
        var e, t;
        S.default.track(N.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == i ? true : i.id) ? t : null
        }), l()
      },
      icon: a.A,
      tooltipText: P.intl.string(P.t.sbdnpw)
    })
  });

function M(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, i = l.useRef(null);
  l.useEffect(() => {
    S.default.track(N.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, {
      application_id: t
    })
  }, [t]);
  let [s, a] = (0, y.kn)([o.M.GAME_SHOP_RTC_POPOVER], T.m.ACCOUNT_NAME_ZONE, true), c = l.useCallback(() => {
    (0, _.X)({
      guildId: n
    })
  }, [n]), d = l.useCallback(() => {
    (0, _.default)({
      guildId: n
    }), a(T.i.USER_DISMISS)
  }, [n, a]), p = l.useCallback(() => {
    S.default.track(N.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, {
      application_id: t
    }), d()
  }, [t, d]), h = l.useCallback(() => {
    a(T.i.USER_DISMISS)
  }, [a]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I.A, {
      tooltipText: P.intl.string(P.t.vyaWs7),
      onClick: p,
      onMouseDown: c,
      icon: u.U1X,
      ref: i
    }), s === o.M.GAME_SHOP_RTC_POPOVER ? (0, r.jsx)(v.A, {
      onActionClick: d,
      onRequestClose: h,
      targetElementRef: i,
      position: "top",
      align: "center",
      caretConfig: {
        align: "center"
      }
    }) : null]
  })
}