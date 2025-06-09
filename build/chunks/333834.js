/** Chunk was on 61717 **/
n.d(t, {
  Z: () => I
}), n(539854), n(583741), n(388685), n(642613);
var r = n(255367),
  i = n(73800),
  l = n(120356),
  o = n.n(l),
  s = n(392711),
  a = n.n(s),
  c = n(91192),
  u = n(481060),
  d = n(724757),
  h = n(100527),
  p = n(906732),
  f = n(585483),
  g = n(709054),
  m = n(821020),
  b = n(538397),
  y = n(389160),
  O = n(370774),
  v = n(982183),
  _ = n(981631),
  C = n(388032),
  j = n(709701);

function S(e) {
  e.stopPropagation()
}

function x(e) {
  let {
    group: t,
    isOpen: n,
    toggleOpenedState: i
  } = e;
  return (0, r.jsx)(u.P3F, {
    onClick: i,
    className: o()(j.messagesGroupHeaderWrap, {
      [j.collapsed]: !n
    }),
    children: (0, r.jsxs)(u.Kqy, {
      gap: 4,
      direction: "horizontal",
      align: "center",
      children: [(0, r.jsx)(u.X6q, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: j.messagesGroupHeader,
        children: (0, s.capitalize)(C.intl.string(v.Vv[t]).toLowerCase())
      }), (0, r.jsx)(u.CJ0, {
        size: "xxs",
        className: j.chevron
      })]
    })
  })
}
let E = [v.KZ.UNREAD, v.KZ.TODAY, v.KZ.YESTERDAY, v.KZ.OLDER];

function P() {
  let {
    analyticsLocations: e
  } = (0, p.ZP)(h.Z.NOTIFICATIONS_INBOX);
  return (0, r.jsx)("div", {
    className: j.emptyStateContainer,
    children: (0, r.jsxs)(u.Kqy, {
      gap: 24,
      align: "center",
      children: [(0, r.jsxs)(u.Kqy, {
        gap: 16,
        align: "center",
        children: [(0, r.jsx)(u.xx7, {
          size: "custom",
          height: 40,
          width: 40,
          color: u.TVs.colors.BG_MOD_STRONG
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: _.tPk.TEXT_MUTED,
          style: {
            textAlign: "center"
          },
          children: C.intl.string(C.t["O+racX"])
        })]
      }), (0, r.jsx)(u.zxk, {
        onClick: () => (0, O.j4)(e),
        color: u.zxk.Colors.PRIMARY,
        style: {
          fontWeight: 600
        },
        children: C.intl.string(C.t.klSpfn)
      })]
    })
  })
}

function I(e) {
  let {
    messages: t,
    loading: n,
    loadMore: l,
    renderMessageGroup: s,
    setInboxReadState: h,
    scrollerClassName: p,
    className: C,
    listName: I,
    ignoreGrouping: w = !1
  } = e, N = i.useRef(null), Z = (0, d.Z)(I, N), {
    notificationCenterVariant: T
  } = m.L.useExperiment({
    location: "NotificationsInboxSidebarList"
  }), {
    messageCategoryOpenStates: A,
    toggleOpenState: R
  } = (0, y.Z)();
  i.useEffect(() => {
    function e() {
      var e;
      null == (e = N.current) || e.scrollPageUp({
        animate: !0
      })
    }

    function t() {
      var e;
      null == (e = N.current) || e.scrollPageDown({
        animate: !0
      })
    }
    return f.S.subscribe(_.CkL.SCROLL_PAGE_DOWN, t), f.S.subscribe(_.CkL.SCROLL_PAGE_UP, e), () => {
      f.S.unsubscribe(_.CkL.SCROLL_PAGE_DOWN, t), f.S.unsubscribe(_.CkL.SCROLL_PAGE_UP, e)
    }
  }, []);
  let D = i.useCallback(() => {
      var e;
      let t = null == (e = N.current) ? void 0 : e.getScrollerState(),
        n = (0, O.s)(A);
      null != t && t.scrollHeight >= t.scrollTop + t.offsetHeight && (null == l || l(n))
    }, [l, A]),
    L = (0, O.fW)(null != t ? t : []),
    M = i.useMemo(() => {
      if (null == t) return null;
      let e = {
          [v.KZ.UNREAD]: [],
          [v.KZ.TODAY]: [],
          [v.KZ.YESTERDAY]: [],
          [v.KZ.OLDER]: []
        },
        n = {
          [v.KZ.UNREAD]: {},
          [v.KZ.TODAY]: {},
          [v.KZ.YESTERDAY]: {},
          [v.KZ.OLDER]: {}
        },
        r = {
          [v.KZ.UNREAD]: [],
          [v.KZ.TODAY]: [],
          [v.KZ.YESTERDAY]: [],
          [v.KZ.OLDER]: []
        };
      return null != t && t.length > 0 && (a().each(t, t => {
        let {
          message: r,
          kind: i
        } = t, l = L(r.id);
        i === v.fL.MENTION ? e[l].push(r) : r.channel_id in n[l] ? n[l][r.channel_id].push(r) : n[l][r.channel_id] = [r]
      }), a().each(E, t => {
        [...Object.values(n[t]).map(e => e.reverse()), ...e[t].map(e => [e])].sort((e, t) => g.default.compare(t[0].id, e[0].id)).forEach(e => {
          r[t].push(e)
        })
      })), r
    }, [t, L]),
    k = i.useMemo(() => {
      let e = [];
      return null == t ? e.push((0, r.jsx)("div", {
        className: o()(j.emptyPlaceholder, j.loadingPlaceholder),
        children: (0, r.jsx)(u.$jN, {})
      }, "spinner")) : 0 === t.length ? e.push((0, r.jsx)(P, {}, "empty-state")) : w ? e.push(...t.map(e => {
        let {
          message: t
        } = e;
        return s([t], "sidebar" === T, L(t.id) === v.KZ.UNREAD)
      })) : null != M && a().each(E, t => {
        0 !== M[t].length && (e.push((0, r.jsx)(x, {
          group: t,
          isOpen: A[t],
          toggleOpenedState: () => {
            let e = A[t];
            R(t), (0, b.RZ)({
              section: t,
              enabled: !e
            })
          }
        })), A[t] && e.push(...M[t].map(e => s(e, "sidebar" === T, L(e[0].id) === v.KZ.UNREAD))))
      }), (null == t ? void 0 : t.length) !== 0 && e.push((0, r.jsx)(u.LZC, {
        size: 8
      }, "spacer")), e
    }, [t, A, R, M, w, s, T, L]);
  i.useEffect(() => {
    null != M && 0 === M.UNREAD.length ? h(v.xM.READ) : h(v.xM.UNREAD)
  }, [M, h]);
  let U = null;
  return null != t && t.length > 0 && null != l && n && (U = (0, r.jsx)("div", {
    className: j.loadingMore,
    children: (0, r.jsx)(u.$jN, {})
  }, "loading-more-after")), (0, b.vU)({
    notificationCenterVariant: T,
    wrappedMessages: t,
    groupedUnreadMessages: null == M ? void 0 : M.UNREAD
  }), (0, r.jsx)("div", {
    className: o()(C, j.messagesPopoutWrap),
    onClick: S,
    onDoubleClick: S,
    "aria-label": e["aria-label"],
    children: (0, r.jsxs)(u.Den, {
      className: o()(j.messagesPopout, p),
      onScroll: D,
      ref: N,
      children: [(0, r.jsx)(c.bG, {
        navigator: Z,
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
            return (0, r.jsx)("div", (t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : e[t] = r
                })
              }
              return e
            }({
              ref: i,
              style: {
                height: "100%"
              }
            }, l), n = n = {
              children: k
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
      }), U]
    })
  })
}