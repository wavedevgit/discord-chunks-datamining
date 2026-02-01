/** Chunk was on 42402 **/
/** chunk id: 313452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./321073.js"), require("./264879.js"), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928039 = require("./928039.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk222823 = require("./222823.js"),
  Chunk203982 = require("./203982.js"),
  Chunk661191 = require("./661191.js"),
  Chunk851109 = require("./851109.js"),
  Chunk932883 = require("./932883.jsx"),
  Chunk39324 = require("./39324.js"),
  Chunk320697 = require("./320697.js"),
  Chunk394953 = require("./394953.js"),
  Chunk628325 = require("./628325.js"),
  Chunk524628 = require("./524628.jsx"),
  Chunk849077 = require("./849077.js"),
  Chunk652215 = require("./652215.js"),
  Chunk228160 = require("./228160.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk128354 = require("./128354.js");

function T(e) {
  e.stopPropagation()
}

function P(e) {
  let {
    group: t,
    isOpen: n,
    toggleOpenedState: l
  } = e;
  return (0, r.jsx)(d.DUT, {
    "aria-expanded": n,
    onClick: l,
    className: s()(N.TP, {
      [N.yZ]: !n
    }),
    children: (0, r.jsxs)(d.BJc, {
      gap: 4,
      direction: "horizontal",
      align: "center",
      children: [(0, r.jsx)(d.Heading, {
        variant: "text-sm/medium",
        color: "text-subtle",
        className: N.P7,
        children: (0, a.capitalize)(I.intl.string(E.v7[t]).toLowerCase())
      }), (0, r.jsx)(d.abt, {
        size: "xxs",
        className: N.ai
      })]
    })
  })
}
let w = [Chunk849077.Ur.UNREAD, Chunk849077.Ur.TODAY, Chunk849077.Ur.YESTERDAY, Chunk849077.Ur.OLDER];

function R() {
  let {
    analyticsLocations: e
  } = (0, g.Ay)(h.A.NOTIFICATIONS_INBOX);
  return (0, r.jsx)("div", {
    className: N.y7,
    children: (0, r.jsxs)(d.BJc, {
      gap: 24,
      align: "center",
      children: [(0, r.jsxs)(d.BJc, {
        gap: 16,
        align: "center",
        children: [(0, r.jsx)(d.K$s, {
          size: "custom",
          height: 40,
          width: 40,
          color: d.LU0.colors.BACKGROUND_MOD_STRONG
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          style: {
            textAlign: "center"
          },
          children: I.intl.string(S.default["O+racd"])
        })]
      }), (0, r.jsx)(d.Button, {
        variant: "secondary",
        onClick: () => (0, x.tZ)(e),
        text: I.intl.string(S.default.klSpfs)
      })]
    })
  })
}

function D(e) {
  let t, {
      messages: n,
      unreadMessages: i,
      loadMore: a,
      renderLoadingState: h,
      renderMessageGroup: g,
      scrollerClassName: S,
      className: I,
      listName: D,
      ignoreGrouping: L = false
    } = e,
    M = (0, y.op)(),
    G = l.useRef(null),
    k = (0, p.A)(D, G),
    {
      entrypoint: U,
      notificationCenterVariant: V
    } = (0, A.X8)({
      location: "NotificationsInboxSidebarList"
    }),
    {
      isLoading: B,
      isLoadingComplete: H,
      hasLoadedEver: F
    } = (0, u.cf)([j.A], () => ({
      isLoading: j.A.isLoading,
      isLoadingComplete: j.A.isLoadingComplete,
      hasLoadedEver: j.A.hasLoadedEver
    })),
    Y = !F && B,
    {
      messageCategoryOpenStates: K,
      toggleOpenState: W
    } = (0, O.A)(),
    z = (t = (0, u.yK)([j.A], () => {
      var e;
      return null != (e = j.A.getNotifyingChannelIds()) ? e : []
    }), (0, u.bG)([j.A, f.Ay], () => {
      let e = j.A.getChannelInfoMap();
      for (let r of t) {
        var n;
        let t = e[r];
        if ((null == t || t.loadState === E.Ve.UNLOADED) && null != (n = f.Ay.hasUnread(r)) && n) returntrue
      }
      returnfalse
    }, [t]));
  l.useEffect(() => {
    function e() {
      var e;
      null == (e = G.current) || e.scrollPageUp({
        animate: true
      })
    }

    function t() {
      var e;
      null == (e = G.current) || e.scrollPageDown({
        animate: true
      })
    }
    return m._.subscribe(C.jej.SCROLL_PAGE_DOWN, t), m._.subscribe(C.jej.SCROLL_PAGE_UP, e), () => {
      m._.unsubscribe(C.jej.SCROLL_PAGE_DOWN, t), m._.unsubscribe(C.jej.SCROLL_PAGE_UP, e)
    }
  }, []);
  let X = l.useCallback(() => {
      var e;
      let t = null == (e = G.current) ? true : e.getScrollerState();
      if (null == t) return;
      let n = .5 * t.offsetHeight;
      t.scrollHeight - (t.scrollTop + t.offsetHeight) <= n && (null == a || a(E.VA.USER_SCROLL))
    }, [a]),
    q = l.useMemo(() => {
      let e = {
          [E.Ur.UNREAD]: [],
          [E.Ur.TODAY]: [],
          [E.Ur.YESTERDAY]: [],
          [E.Ur.OLDER]: []
        },
        t = {
          [E.Ur.UNREAD]: [],
          [E.Ur.TODAY]: [],
          [E.Ur.YESTERDAY]: [],
          [E.Ur.OLDER]: []
        },
        r = {
          [E.Ur.UNREAD]: {},
          [E.Ur.TODAY]: {},
          [E.Ur.YESTERDAY]: {},
          [E.Ur.OLDER]: {}
        };
      return (n.length > 0 || i.length > 0) && (o().each(i, e => {
        e.kind === E.yL.MENTION ? t[E.Ur.UNREAD].push(e) : e.channelId in r[E.Ur.UNREAD] ? r[E.Ur.UNREAD][e.channelId].push(e) : r[E.Ur.UNREAD][e.channelId] = [e]
      }), o().each(n, e => {
        let n = (0, x.i7)(e);
        e.kind === E.yL.MENTION ? t[n].push(e) : e.channelId in r[n] ? r[n][e.channelId].push(e) : r[n][e.channelId] = [e]
      }), o().each(w, n => {
        [...Object.values(r[n]).map(e => e.reverse()), ...t[n].map(e => [e])].sort((e, t) => b.default.compare(t[0].id, e[0].id)).forEach(t => {
          e[n].push(t)
        })
      })), e
    }, [n, i]),
    J = 0 === n.length && 0 === i.length && H,
    Q = 0 === n.length && 0 === i.length && !F && B,
    Z = l.useMemo(() => {
      let e = [];
      return Q ? e.push(h()) : J ? e.push((0, r.jsx)(R, {}, "empty-state")) : L ? (e.push(...i.map(e => g([e], true))), e.push(...n.map(e => g([e], false)))) : o().each(w, t => {
        0 !== q[t].length && (e.push((0, r.jsx)(P, {
          group: t,
          isOpen: K[t],
          toggleOpenedState: () => {
            let e = K[t];
            W(t), (0, y.Ut)({
              section: t,
              enabled: !e,
              viewId: M
            })
          }
        }, t)), K[t] && e.push(...q[t].map(e => g(e, t === E.Ur.UNREAD))))
      }), e
    }, [n, i, h, K, W, q, L, g, J, Q, M]),
    $ = Z[Z.length - 1],
    ee = l.isValidElement($) && $.type === P,
    et = (0, _.S)(e => e.setInboxReadState);
  l.useEffect(() => {
    Q || et(0 === q.UNREAD.length)
  }, [q, Q, et]);
  let en = (n.length > 0 || i.length > 0) && null != a && B;
  ! function(e) {
    let {
      loadingInitial: t,
      messagesByCategory: n
    } = e, r = l.useRef(false), i = n.UNREAD.length > 0, {
      setOpenStateFromUnreads: s
    } = (0, O.A)();
    l.useEffect(() => {
      t || r.current || (s(i), r.current = true)
    }, [s, i, t])
  }({
    messagesByCategory: q,
    loadingInitial: Y
  });
  let er = l.useCallback(() => {
    var e;
    let t = w.filter(e => K[e]).reduce((e, t) => e + q[t].length, 0),
      n = null == (e = G.current) ? true : e.getScrollerState();
    return null == n ? 0 : Math.max(0, Math.ceil(n.offsetHeight / 64) - t)
  }, [K, q]);
  l.useEffect(() => {
    Q || B || 0 >= er() || (!ee || z) && (null == a || a(E.VA.FILL_SCROLLER))
  }, [er, a, Q, B, ee, z]);
  let el = l.useMemo(() => {
    let e = Math.min(Math.max(2, er()), 20);
    return (0, r.jsx)(v.A, {
      withHeader: false,
      size: e
    })
  }, [er]);
  return (0, y.Hi)({
    notificationCenterVariant: V,
    entrypoint: U,
    messages: n,
    unreadMessages: i,
    messagesByCategory: q,
    viewId: M
  }), (0, r.jsx)("div", {
    className: s()(I, N.KQ),
    onClick: T,
    onDoubleClick: T,
    "aria-label": e["aria-label"],
    children: (0, r.jsx)(c.hD, {
      navigator: k,
      children: (0, r.jsx)(c.PR, {
        children: e => {
          var t, n;
          let {
            ref: l
          } = e, i = function(e, t) {
            if (null == e) return {};
            var n, r, l, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
              return i
            }
            if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                  i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
              }(e, t), Object.getOwnPropertySymbols)
              for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }(e, ["ref"]);
          return (0, r.jsxs)(d.T7Y, (t = function(e) {
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
              G.current = e, l.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
            },
            className: s()(N.m4, S),
            onScroll: X,
            fade: true
          }, i), n = n = {
            children: [Z, en && !ee ? el : null]
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