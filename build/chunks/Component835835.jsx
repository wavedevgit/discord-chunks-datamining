/** Chunk was on 52199 **/
/** chunk id: 835835, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => F,
  Y9: () => L,
  u9: () => N
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438);
if (21552 == require.j) var Chunk837381 = require("./837381.jsx");
var Chunk311907 = require("./311907.js"),
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

function x(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function j(e) {
  e.stopPropagation()
}
let L = e => {
    let {
      title: t,
      icon: r,
      children: l,
      className: s
    } = e;
    return (0, n.jsxs)("div", {
      className: a()(s, T.wx),
      children: [(0, n.jsxs)("div", {
        className: T.gn,
        children: [null != r ? (0, n.jsx)(r, {
          color: d.LU0.colors.INTERACTIVE_TEXT_DEFAULT
        }) : null, null == t ? null : (0, n.jsx)(d.Text, {
          variant: "text-lg/semibold",
          color: "interactive-text-active",
          children: t
        })]
      }), l]
    })
  },
  N = e => {
    let {
      msg: t,
      image: r
    } = e;
    return (0, n.jsxs)("div", {
      className: T.zC,
      children: [(0, n.jsx)("div", {
        className: T.Sl,
        style: {
          backgroundImage: "url(".concat(r, ")")
        }
      }), (0, n.jsx)("div", {
        className: T.rf,
        children: t
      })]
    })
  };
class C extends Chunk64700.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, n.jsx)("div", {
      className: T.UD,
      children: (0, n.jsx)(d.Button, {
        variant: "secondary",
        size: "sm",
        text: v.intl.string(v.t.k5WiPf),
        onClick: this.handleClickJump,
        loading: e
      })
    })
  }
  renderCloseButton() {
    let {
      onCloseMessage: e,
      canCloseAllMessages: t,
      canManageMessages: r,
      channel: l,
      closeAriaLabel: s
    } = this.props;
    return null != e && (t || r || null != l && l.isPrivate()) ? (0, n.jsx)("div", {
      className: T.UD,
      children: (0, n.jsx)(d.K0, {
        icon: d.PGe,
        size: "sm",
        variant: "secondary",
        "aria-label": null != s ? s : v.intl.string(v.t.cpT0Cq),
        onClick: this.handleClickClose
      })
    }) : null
  }
  render() {
    return (0, n.jsxs)("div", {
      className: T.uu,
      children: [this.renderJumpButton(), this.renderCloseButton()]
    })
  }
  constructor(...e) {
    super(...e), x(this, "handleClickJump", e => {
      let {
        jumpTo: t,
        message: r
      } = this.props;
      t(r, e)
    }), x(this, "handleClickClose", e => {
      let {
        onCloseMessage: t,
        message: r
      } = this.props;
      null != t && t(r, e)
    })
  }
}
let P = Chunk311907.Ay.connectStores([Chunk576705.A], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && A.A.can(R.xBc.MANAGE_MESSAGES, t)
  }
})(C);

function w(e) {
  let {
    analyticsName: t,
    items: r,
    hasMore: s,
    loading: i,
    loadMore: h,
    renderHeader: g,
    renderEmptyState: _,
    renderItem: E,
    getProTip: A,
    scrollerClassName: O,
    className: I,
    listName: L
  } = e, N = l.useRef(null), C = (0, p.A)(L, N), P = (0, u.bG)([y.Ay], () => y.Ay.hasNotice()), w = (0, u.bG)([S.A], () => S.A.windowSize());
  l.useEffect(() => {
    b.default.track(R.HAw.OPEN_POPOUT, {
      type: t
    })
  }, [t]), l.useEffect(() => {
    function e() {
      var e;
      null == (e = N.current) || e.scrollPageUp({
        animate: true
      })
    }

    function t() {
      var e;
      null == (e = N.current) || e.scrollPageDown({
        animate: true
      })
    }
    return m._.subscribe(R.jej.SCROLL_PAGE_DOWN, t), m._.subscribe(R.jej.SCROLL_PAGE_UP, e), () => {
      m._.unsubscribe(R.jej.SCROLL_PAGE_DOWN, t), m._.unsubscribe(R.jej.SCROLL_PAGE_UP, e)
    }
  }, []);
  let F = l.useCallback(() => {
      var e;
      let t = null == (e = N.current) ? true : e.getScrollerState();
      null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && s && !i && (null == h || h())
    }, [s, h, i]),
    k = [],
    D = true;
  null == r || i && 0 === r.length ? k = [(0, n.jsx)("div", {
    className: a()(T.zC, T.k$),
    children: (0, n.jsx)(d.y$y, {})
  }, "spinner")] : 0 === r.length ? k.push((0, n.jsx)(l.Fragment, {
    children: _()
  }, "empty-state")) : (D = false, k = [], o().each(r, e => {
    k.push(...E(e))
  }));
  let W = null;
  null != r && r.length > 0 && null != h && (W = i ? (0, n.jsx)("div", {
    className: T.sw,
    children: (0, n.jsx)(d.y$y, {})
  }, "loading-more-after") : s ? (0, n.jsx)("div", {
    className: T.u9,
    children: (0, n.jsx)(d.Button, {
      variant: "secondary",
      size: "sm",
      fullWidth: true,
      text: v.intl.string(v.t.XBlaiC),
      onClick: h
    })
  }) : (0, n.jsx)("div", {
    className: T.lJ,
    children: _()
  }));
  let M = null == A ? true : A(),
    H = D && null != M ? (0, n.jsx)("div", {
      className: T.qr,
      children: (0, n.jsx)(f.A, {
        style: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        },
        children: M
      })
    }) : null,
    U = {
      maxHeight: w.height - 43 - 25 - 48
    };
  P && (U.maxHeight -= 40);
  let G = null != h && s;
  return (0, n.jsx)("div", {
    className: a()(I, T.KQ),
    style: U,
    onClick: j,
    onDoubleClick: j,
    "aria-label": e["aria-label"],
    children: (0, n.jsxs)(d.Fmo, {
      component: g(),
      children: [(0, n.jsxs)(d.T7Y, {
        className: a()(T.m4, O),
        onScroll: G ? F : true,
        ref: N,
        children: [(0, n.jsx)(c.hD, {
          navigator: C,
          children: (0, n.jsx)(c.PR, {
            children: e => {
              var t, r;
              let {
                ref: l
              } = e, s = function(e, t) {
                if (null == e) return {};
                var r, n, l, s = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                  for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                  return s
                }
                if (s = function(e, t) {
                    if (null == e) return {};
                    var r, n, l = {},
                      s = Object.getOwnPropertyNames(e);
                    for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l
                  }(e, t), Object.getOwnPropertySymbols)
                  for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s
              }(e, ["ref"]);
              return (0, n.jsx)("div", (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  }))), n.forEach(function(t) {
                    x(e, t, r[t])
                  })
                }
                return e
              }({
                ref: l
              }, s), r = r = {
                children: k
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, n)
                }
                return r
              })(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              }), t))
            }
          })
        }), W]
      }), H]
    })
  })
}

function F(e) {
  let {
    analyticsName: t,
    onFetch: r,
    channel: s,
    messages: a,
    hasMore: i,
    loading: o,
    loadMore: c,
    onJump: d,
    canCloseAllMessages: p = false,
    renderHeader: f,
    renderEmptyState: A,
    renderMessage: y,
    getProTip: S,
    scrollerClassName: b,
    className: m,
    onCloseMessage: v,
    listName: x,
    closeAriaLabel: j
  } = e, L = (0, u.bG)([E.A], () => {
    let e = null != s ? E.A.getMessages(s.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function N(e, r) {
    let n = () => {
      let {
        id: n,
        channel_id: l
      } = e, s = _.A.getChannel(l);
      null != s && (h.A.trackJump(l, n, t), (0, g.pX)(R.BVt.CHANNEL(s.getGuildId(), l, n))), null == d || d(r)
    };
    (0, O.A)(e, n) && !L && n()
  }
  l.useEffect(() => {
    r(s)
  }, [s, r]);
  let C = l.useMemo(() => null == a ? true : a.map(e => ({
    message: e,
    channel: s
  })), [a, s]);
  return (0, n.jsx)(w, {
    className: m,
    scrollerClassName: b,
    items: C,
    loading: o,
    analyticsName: t,
    renderEmptyState: A,
    renderHeader: f,
    hasMore: i,
    loadMore: c,
    getProTip: S,
    renderItem: function(e) {
      let {
        message: t,
        channel: r
      } = e;
      if (null == t) return [];
      if (null != y) return y(t, e => N(t, e));
      let l = [];
      return null == r ? [] : (l.push((0, n.jsxs)("div", {
        className: T.Uc,
        children: [(0, n.jsx)(I.A, {
          className: T.i0,
          message: t,
          channel: r
        }), (0, n.jsx)(P, {
          channel: s,
          message: t,
          jumping: L,
          canCloseAllMessages: p,
          jumpTo: N,
          onCloseMessage: v,
          closeAriaLabel: j
        })]
      }, t.id)), l)
    },
    listName: x,
    "aria-label": e["aria-label"]
  })
}