/** Chunk was on 81985 **/
/** chunk id: 333834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./539854.js"), require("./583741.js"), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk724757 = require("./724757.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk306680 = require("./306680.js"),
  Chunk585483 = require("./585483.js"),
  Chunk709054 = require("./709054.js"),
  Chunk821020 = require("./821020.js"),
  Chunk804932 = require("./804932.jsx"),
  Chunk389160 = require("./389160.js"),
  Chunk787879 = require("./787879.js"),
  Chunk370774 = require("./370774.js"),
  Chunk334426 = require("./334426.js"),
  Chunk862149 = require("./862149.jsx"),
  Chunk982183 = require("./982183.js"),
  Chunk981631 = require("./981631.js"),
  Chunk975114 = require("./975114.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk347344 = require("./347344.js");

function N(e) {
  e.stopPropagation()
}

function T(e) {
  let {
    group: t,
    isOpen: n,
    toggleOpenedState: i
  } = e;
  return (0, r.jsx)(d.P3F, {
    "aria-expanded": n,
    onClick: i,
    className: a()(Z.messagesGroupHeaderWrap, {
      [Z.collapsed]: !n
    }),
    children: (0, r.jsxs)(d.Kqy, {
      gap: 4,
      direction: "horizontal",
      align: "center",
      children: [(0, r.jsx)(d.Heading, {
        variant: "text-sm/medium",
        color: "text-subtle",
        className: Z.messagesGroupHeader,
        children: (0, o.capitalize)(P.intl.string(S.Vv[t]).toLowerCase())
      }), (0, r.jsx)(d.CJ0, {
        size: "xxs",
        className: Z.chevron
      })]
    })
  })
}
let A = [Chunk982183.KZ.UNREAD, Chunk982183.KZ.TODAY, Chunk982183.KZ.YESTERDAY, Chunk982183.KZ.OLDER];

function w() {
  let {
    analyticsLocations: e
  } = (0, h.ZP)(f.Z.NOTIFICATIONS_INBOX);
  return (0, r.jsx)("div", {
    className: Z.emptyStateContainer,
    children: (0, r.jsxs)(d.Kqy, {
      gap: 24,
      align: "center",
      children: [(0, r.jsxs)(d.Kqy, {
        gap: 16,
        align: "center",
        children: [(0, r.jsx)(d.xx7, {
          size: "custom",
          height: 40,
          width: 40,
          color: d.TVs.colors.BACKGROUND_MOD_STRONG
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          style: {
            textAlign: "center"
          },
          children: P.intl.string(I.default["O+racd"])
        })]
      }), (0, r.jsx)(d.Button, {
        variant: "secondary",
        onClick: () => (0, x.j4)(e),
        text: P.intl.string(I.default.klSpfs)
      })]
    })
  })
}

function R(e) {
  let {
    messages: t,
    unreadMessages: n,
    loadMore: l,
    renderLoadingState: o,
    renderMessageGroup: f,
    scrollerClassName: h,
    className: I,
    listName: P,
    ignoreGrouping: R = false
  } = e, D = (0, v.fJ)(), M = i.useRef(null), k = (0, p.Z)(P, M), {
    entrypoint: L,
    notificationCenterVariant: U
  } = (0, y.pN)({
    location: "NotificationsInboxSidebarList"
  }), {
    isLoading: G,
    isLoadingComplete: B,
    hasLoadedEver: F
  } = (0, u.cj)([j.Z], () => ({
    isLoading: j.Z.isLoading,
    isLoadingComplete: j.Z.isLoadingComplete,
    hasLoadedEver: j.Z.hasLoadedEver
  })), H = !F && G, {
    messageCategoryOpenStates: V,
    toggleOpenState: z
  } = (0, O.Z)(), W = function() {
    let e = (0, u.Wu)([j.Z], () => {
      var e;
      return null != (e = j.Z.getNotifyingChannelIds()) ? e : []
    });
    return (0, u.e7)([j.Z, g.ZP], () => {
      let t = j.Z.getChannelInfoMap();
      for (let r of e) {
        var n;
        let e = t[r];
        if ((null == e || e.loadState === S.a7.UNLOADED) && null != (n = g.ZP.hasUnread(r)) && n) returntrue
      }
      returnfalse
    }, [e])
  }();
  i.useEffect(() => {
    function e() {
      var e;
      null == (e = M.current) || e.scrollPageUp({
        animate: true
      })
    }

    function t() {
      var e;
      null == (e = M.current) || e.scrollPageDown({
        animate: true
      })
    }
    return m.S.subscribe(_.CkL.SCROLL_PAGE_DOWN, t), m.S.subscribe(_.CkL.SCROLL_PAGE_UP, e), () => {
      m.S.unsubscribe(_.CkL.SCROLL_PAGE_DOWN, t), m.S.unsubscribe(_.CkL.SCROLL_PAGE_UP, e)
    }
  }, []);
  let K = i.useCallback(() => {
      var e;
      let t = null == (e = M.current) ? true : e.getScrollerState();
      if (null == t) return;
      let n = .5 * t.offsetHeight;
      t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && (null == l || l(S.X.USER_SCROLL))
    }, [l]),
    Y = i.useMemo(() => {
      let e = {
          [S.KZ.UNREAD]: [],
          [S.KZ.TODAY]: [],
          [S.KZ.YESTERDAY]: [],
          [S.KZ.OLDER]: []
        },
        r = {
          [S.KZ.UNREAD]: [],
          [S.KZ.TODAY]: [],
          [S.KZ.YESTERDAY]: [],
          [S.KZ.OLDER]: []
        },
        i = {
          [S.KZ.UNREAD]: {},
          [S.KZ.TODAY]: {},
          [S.KZ.YESTERDAY]: {},
          [S.KZ.OLDER]: {}
        };
      return (t.length > 0 || n.length > 0) && (s().each(n, e => {
        e.kind === S.fL.MENTION ? r[S.KZ.UNREAD].push(e) : e.channelId in i[S.KZ.UNREAD] ? i[S.KZ.UNREAD][e.channelId].push(e) : i[S.KZ.UNREAD][e.channelId] = [e]
      }), s().each(t, e => {
        let t = (0, x.bl)(e);
        e.kind === S.fL.MENTION ? r[t].push(e) : e.channelId in i[t] ? i[t][e.channelId].push(e) : i[t][e.channelId] = [e]
      }), s().each(A, t => {
        [...Object.values(i[t]).map(e => e.reverse()), ...r[t].map(e => [e])].sort((e, t) => b.default.compare(t[0].id, e[0].id)).forEach(n => {
          e[t].push(n)
        })
      })), e
    }, [t, n]),
    q = 0 === t.length && 0 === n.length && B,
    X = 0 === t.length && 0 === n.length && !F && G,
    Q = i.useMemo(() => {
      let e = [];
      return X ? e.push(o()) : q ? e.push((0, r.jsx)(w, {}, "empty-state")) : R ? (e.push(...n.map(e => f([e], true))), e.push(...t.map(e => f([e], false)))) : s().each(A, t => {
        0 !== Y[t].length && (e.push((0, r.jsx)(T, {
          group: t,
          isOpen: V[t],
          toggleOpenedState: () => {
            let e = V[t];
            z(t), (0, v.RZ)({
              section: t,
              enabled: !e,
              viewId: D
            })
          }
        }, t)), V[t] && e.push(...Y[t].map(e => f(e, t === S.KZ.UNREAD))))
      }), e
    }, [t, n, o, V, z, Y, R, f, q, X, D]),
    J = Q[Q.length - 1],
    $ = i.isValidElement(J) && J.type === T,
    ee = (0, C.d)(e => e.setInboxReadState);
  i.useEffect(() => {
    X || ee(0 === Y.UNREAD.length)
  }, [Y, X, ee]);
  let et = (t.length > 0 || n.length > 0) && null != l && G;
  ! function(e) {
    let {
      loadingInitial: t,
      messagesByCategory: n
    } = e, r = i.useRef(false), l = n.UNREAD.length > 0, {
      setOpenStateFromUnreads: a
    } = (0, O.Z)();
    i.useEffect(() => {
      t || r.current || (a(l), r.current = true)
    }, [a, l, t])
  }({
    messagesByCategory: Y,
    loadingInitial: H
  });
  let en = i.useCallback(() => {
    var e;
    let t = A.filter(e => V[e]).reduce((e, t) => e + Y[t].length, 0),
      n = null == (e = M.current) ? true : e.getScrollerState();
    return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - t)
  }, [V, Y]);
  i.useEffect(() => {
    X || G || 0 >= en() || (!$ || W) && (null == l || l(S.X.FILL_SCROLLER))
  }, [en, l, X, G, $, W]);
  let er = i.useMemo(() => {
    let e = Math.min(Math.max(2, en()), 20);
    return (0, r.jsx)(E.Z, {
      withHeader: false,
      size: e
    })
  }, [en]);
  return (0, v.vU)({
    notificationCenterVariant: U,
    entrypoint: L,
    messages: t,
    unreadMessages: n,
    messagesByCategory: Y,
    viewId: D
  }), (0, r.jsx)("div", {
    className: a()(I, Z.messagesPopoutWrap),
    onClick: N,
    onDoubleClick: N,
    "aria-label": e["aria-label"],
    children: (0, r.jsx)(c.bG, {
      navigator: k,
      children: (0, r.jsx)(c.SJ, {
        children: e => {
          var t, n, {
              ref: i
            } = e,
            l = function(e, t) {
              if (null == e) return {};
              var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                  l = Object.keys(e);
                for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
              }
              return i
            }(e, ["ref"]);
          return (0, r.jsxs)(d.Den, (t = function(e) {
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
          }({
            ref: e => {
              var t;
              M.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
            },
            className: a()(Z.messagesPopout, h),
            onScroll: K,
            fade: true
          }, l), n = n = {
            children: [Q, et && !$ ? er : null]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })
    })
  })
}