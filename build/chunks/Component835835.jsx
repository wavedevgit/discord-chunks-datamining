/** Chunk was on 84127 **/
/** chunk id: 835835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => D,
  Y9: () => T,
  u9: () => x
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk928039 = require("./928039.js"),
  Chunk12351 = require("./12351.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk519057 = require("./519057.js"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk81437 = require("./81437.js"),
  Chunk636922 = require("./636922.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk726195 = require("./726195.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  e.stopPropagation()
}
let T = e => {
    let {
      title: t,
      icon: n,
      children: l,
      className: a
    } = e;
    return (0, r.jsxs)("div", {
      className: s()(a, L.wx),
      children: [(0, r.jsxs)("div", {
        className: L.gn,
        children: [null != n ? (0, r.jsx)(n, {
          color: p.LU0.colors.INTERACTIVE_TEXT_DEFAULT
        }) : null, null == t ? null : (0, r.jsx)(p.Text, {
          variant: "text-lg/semibold",
          color: "interactive-text-active",
          children: t
        })]
      }), l]
    })
  },
  x = e => {
    let {
      msg: t,
      image: n
    } = e;
    return (0, r.jsxs)("div", {
      className: L.zC,
      children: [(0, r.jsx)("div", {
        className: L.Sl,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      }), (0, r.jsx)("div", {
        className: L.rf,
        children: t
      })]
    })
  };
class S extends Chunk64700.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: L.UD,
      children: (0, r.jsx)(p.Button, {
        variant: "secondary",
        size: "sm",
        text: N.intl.string(N.t.k5WiPf),
        onClick: this.handleClickJump,
        loading: e
      })
    })
  }
  renderCloseButton() {
    let {
      onCloseMessage: e,
      canCloseAllMessages: t,
      canManageMessages: n,
      channel: l,
      closeAriaLabel: a
    } = this.props;
    return null != e && (t || n || null != l && l.isPrivate()) ? (0, r.jsx)("div", {
      className: L.UD,
      children: (0, r.jsx)(p.K0, {
        icon: p.PGe,
        size: "sm",
        variant: "secondary",
        "aria-label": null != a ? a : N.intl.string(N.t.cpT0Cq),
        onClick: this.handleClickClose
      })
    }) : null
  }
  render() {
    return (0, r.jsxs)("div", {
      className: L.uu,
      children: [this.renderJumpButton(), this.renderCloseButton()]
    })
  }
  constructor(...e) {
    super(...e), v(this, "handleClickJump", e => {
      let {
        jumpTo: t,
        message: n
      } = this.props;
      t(n, e)
    }), v(this, "handleClickClose", e => {
      let {
        onCloseMessage: t,
        message: n
      } = this.props;
      null != t && t(n, e)
    })
  }
}
let w = Chunk311907.Ay.connectStores([Chunk576705.A], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && b.A.can(P.xBc.MANAGE_MESSAGES, t)
  }
})(S);

function G(e) {
  let {
    analyticsName: t,
    items: n,
    hasMore: a,
    loading: i,
    loadMore: d,
    renderHeader: h,
    renderEmptyState: O,
    renderItem: y,
    getProTip: b,
    scrollerClassName: I,
    className: j,
    listName: T
  } = e, x = l.useRef(null), S = (0, f.A)(T, x), w = (0, u.bG)([g.Ay], () => g.Ay.hasNotice()), G = (0, u.bG)([_.A], () => _.A.windowSize());
  l.useEffect(() => {
    m.default.track(P.HAw.OPEN_POPOUT, {
      type: t
    })
  }, [t]), l.useEffect(() => {
    function e() {
      var e;
      null == (e = x.current) || e.scrollPageUp({
        animate: true
      })
    }

    function t() {
      var e;
      null == (e = x.current) || e.scrollPageDown({
        animate: true
      })
    }
    return E._.subscribe(P.jej.SCROLL_PAGE_DOWN, t), E._.subscribe(P.jej.SCROLL_PAGE_UP, e), () => {
      E._.unsubscribe(P.jej.SCROLL_PAGE_DOWN, t), E._.unsubscribe(P.jej.SCROLL_PAGE_UP, e)
    }
  }, []);
  let D = l.useCallback(() => {
      var e;
      let t = null == (e = x.current) ? true : e.getScrollerState();
      null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && a && !i && (null == d || d())
    }, [a, d, i]),
    W = [],
    F = true;
  null == n || i && 0 === n.length ? W = [(0, r.jsx)("div", {
    className: s()(L.zC, L.k$),
    children: (0, r.jsx)(p.y$y, {})
  }, "spinner")] : 0 === n.length ? W.push((0, r.jsx)(l.Fragment, {
    children: O()
  }, "empty-state")) : (F = false, W = [], o().each(n, e => {
    W.push(...y(e))
  }));
  let k = null;
  null != n && n.length > 0 && null != d && (k = i ? (0, r.jsx)("div", {
    className: L.sw,
    children: (0, r.jsx)(p.y$y, {})
  }, "loading-more-after") : a ? (0, r.jsx)("div", {
    className: L.u9,
    children: (0, r.jsx)(p.Button, {
      variant: "secondary",
      size: "sm",
      fullWidth: true,
      text: N.intl.string(N.t.XBlaiC),
      onClick: d
    })
  }) : (0, r.jsx)("div", {
    className: L.lJ,
    children: O()
  }));
  let R = null == b ? true : b(),
    K = F && null != R ? (0, r.jsx)("div", {
      className: L.qr,
      children: (0, r.jsx)(A.A, {
        style: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        },
        children: R
      })
    }) : null,
    U = {
      maxHeight: G.height - 43 - 25 - 48
    };
  w && (U.maxHeight -= 40);
  let B = null != d && a;
  return (0, r.jsx)("div", {
    className: s()(j, L.KQ),
    style: U,
    onClick: C,
    onDoubleClick: C,
    "aria-label": e["aria-label"],
    children: (0, r.jsxs)(p.Fmo, {
      component: h(),
      children: [(0, r.jsxs)(p.T7Y, {
        className: s()(L.m4, I),
        onScroll: B ? D : true,
        ref: x,
        children: [(0, r.jsx)(c.hD, {
          navigator: S,
          children: (0, r.jsx)(c.PR, {
            children: e => {
              var t, n;
              let {
                ref: l
              } = e, a = function(e, t) {
                if (null == e) return {};
                var n, r, l, a = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                  for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                  return a
                }
                if (a = function(e, t) {
                    if (null == e) return {};
                    var n, r, l = {},
                      a = Object.getOwnPropertyNames(e);
                    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l
                  }(e, t), Object.getOwnPropertySymbols)
                  for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                return a
              }(e, ["ref"]);
              return (0, r.jsx)("div", (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    v(e, t, n[t])
                  })
                }
                return e
              }({
                ref: l
              }, a), n = n = {
                children: W
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
        }), k]
      }), K]
    })
  })
}

function D(e) {
  let {
    analyticsName: t,
    onFetch: n,
    channel: a,
    messages: s,
    hasMore: i,
    loading: o,
    loadMore: c,
    onJump: p,
    canCloseAllMessages: f = false,
    renderHeader: A,
    renderEmptyState: b,
    renderMessage: g,
    getProTip: _,
    scrollerClassName: m,
    className: E,
    onCloseMessage: N,
    listName: v,
    closeAriaLabel: C
  } = e, T = (0, u.bG)([y.A], () => {
    let e = null != a ? y.A.getMessages(a.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function x(e, n) {
    let r = () => {
      let {
        id: r,
        channel_id: l
      } = e, a = O.A.getChannel(l);
      null != a && (d.A.trackJump(l, r, t), (0, h.pX)(P.BVt.CHANNEL(a.getGuildId(), l, r))), null == p || p(n)
    };
    (0, I.A)(e, r) && !T && r()
  }
  l.useEffect(() => {
    n(a)
  }, [a, n]);
  let S = l.useMemo(() => null == s ? true : s.map(e => ({
    message: e,
    channel: a
  })), [s, a]);
  return (0, r.jsx)(G, {
    className: E,
    scrollerClassName: m,
    items: S,
    loading: o,
    analyticsName: t,
    renderEmptyState: b,
    renderHeader: A,
    hasMore: i,
    loadMore: c,
    getProTip: _,
    renderItem: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      if (null == t) return [];
      if (null != g) return g(t, e => x(t, e));
      let l = [];
      return null == n ? [] : (l.push((0, r.jsxs)("div", {
        className: L.Uc,
        children: [(0, r.jsx)(j.A, {
          className: L.i0,
          message: t,
          channel: n
        }), (0, r.jsx)(w, {
          channel: a,
          message: t,
          jumping: T,
          canCloseAllMessages: f,
          jumpTo: x,
          onCloseMessage: N,
          closeAriaLabel: C
        })]
      }, t.id)), l)
    },
    listName: v,
    "aria-label": e["aria-label"]
  })
}