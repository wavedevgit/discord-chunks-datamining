/** Chunk was on 54157 **/
/** chunk id: 494404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => M,
  h4: () => A,
  nH: () => N
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk724757 = require("./724757.js"),
  Chunk576855 = require("./576855.jsx"),
  Chunk804063 = require("./804063.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk933429 = require("./933429.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk547660 = require("./547660.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  e.stopPropagation()
}
let A = e => {
    let {
      title: t,
      icon: n,
      children: s,
      className: l
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(l, P.header),
      children: [(0, r.jsxs)("div", {
        className: P.titleContainer,
        children: [null != n ? (0, r.jsx)(n, {
          color: h.TVs.colors.INTERACTIVE_NORMAL
        }) : null, null == t ? null : (0, r.jsx)(h.Text, {
          variant: "text-lg/semibold",
          color: "interactive-active",
          children: t
        })]
      }), s]
    })
  },
  N = e => {
    let {
      msg: t,
      image: n
    } = e;
    return (0, r.jsxs)("div", {
      className: P.emptyPlaceholder,
      children: [(0, r.jsx)("div", {
        className: P.image,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      }), (0, r.jsx)("div", {
        className: P.body,
        children: t
      })]
    })
  };
class Z extends Chunk73800.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.P3F, {
      className: Chunk547660.jumpButton,
      onClick: this.handleClickJump,
      children: [(0, Chunk255367.jsx)("div", {
        className: a()(Chunk547660.__invalid_text, {
          hidden: module
        }),
        children: Chunk388032.intl.string(Chunk388032.t.k5WiPT)
      }), (0, Chunk255367.jsx)(Chunk481060.$jN, {
        type: Chunk481060.$jN.Type.PULSING_ELLIPSIS,
        className: a()(Chunk547660.loading, {
          [Chunk547660.visible]: module
        })
      })]
    })
  }
  renderCloseButton() {
    let {
      onCloseMessage: e,
      canCloseAllMessages: t,
      canManageMessages: n,
      channel: s
    } = this.props;
    return null != module && (exports || require || null != Chunk73800 && Chunk73800.isPrivate()) ? (0, Chunk255367.jsx)(Chunk755721.zx, {
      look: Chunk755721.zx.Looks.BLANK,
      size: Chunk755721.zx.Sizes.NONE,
      onClick: this.handleClickClose,
      children: (0, Chunk255367.jsx)(Chunk481060.Dio, {
        size: "md",
        color: "currentColor",
        className: Chunk547660.closeIcon
      })
    }) : null
  }
  render() {
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk547660.actionButtons,
      children: [this.renderJumpButton(), this.renderCloseButton()]
    })
  }
  constructor(...e) {
    super(...e), T(this, "handleClickJump", e => {
      let {
        jumpTo: t,
        message: n
      } = this.props;
      t(n, e)
    }), T(this, "handleClickClose", e => {
      let {
        onCloseMessage: t,
        message: n
      } = this.props;
      null != t && t(n, e)
    })
  }
}
let w = Chunk442837.ZP.connectStores([Chunk496675.Z], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && E.Z.can(R.Plq.MANAGE_MESSAGES, t)
  }
})(Z);

function k(e) {
  let {
    analyticsName: t,
    items: n,
    hasMore: l,
    loading: i,
    loadMore: p,
    renderHeader: g,
    renderEmptyState: S,
    renderItem: m,
    getProTip: y,
    scrollerClassName: b,
    className: E,
    listName: A
  } = e, N = s.useRef(null), Z = (0, f.Z)(A, N), w = (0, u.e7)([x.ZP], () => x.ZP.hasNotice()), k = (0, u.e7)([C.Z], () => C.Z.windowSize());
  s.useEffect(() => {
    O.default.track(R.rMx.OPEN_POPOUT, {
      type: t
    })
  }, [t]), s.useEffect(() => {
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
    return v.S.subscribe(R.CkL.SCROLL_PAGE_DOWN, t), v.S.subscribe(R.CkL.SCROLL_PAGE_UP, e), () => {
      v.S.unsubscribe(R.CkL.SCROLL_PAGE_DOWN, t), v.S.unsubscribe(R.CkL.SCROLL_PAGE_UP, e)
    }
  }, []);
  let M = s.useCallback(() => {
      var e;
      let t = null == (e = N.current) ? true : e.getScrollerState();
      null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !i && (null == p || p())
    }, [l, p, i]),
    D = [],
    L = true;
  null == n || i && 0 === n.length ? D = [(0, r.jsx)("div", {
    className: a()(P.emptyPlaceholder, P.loadingPlaceholder),
    children: (0, r.jsx)(h.$jN, {})
  }, "spinner")] : 0 === n.length ? D.push((0, r.jsx)(s.Fragment, {
    children: S()
  }, "empty-state")) : (L = false, D = [], o().each(n, e => {
    D.push(...m(e))
  }));
  let F = null;
  null != n && n.length > 0 && null != p && (F = i ? (0, r.jsx)("div", {
    className: P.loadingMore,
    children: (0, r.jsx)(h.$jN, {})
  }, "loading-more-after") : l ? (0, r.jsx)("div", {
    className: P.hasMore,
    children: (0, r.jsx)(d.zx, {
      look: d.zx.Looks.FILLED,
      color: d.zx.Colors.PRIMARY,
      size: d.zx.Sizes.MAX,
      onClick: p,
      children: j.intl.string(j.t.XBlaiI)
    })
  }) : (0, r.jsx)("div", {
    className: P.scrollingFooterWrap,
    children: S()
  }));
  let H = null == y ? true : y(),
    U = L && null != H ? (0, r.jsx)("div", {
      className: P.footer,
      children: (0, r.jsx)(_.Z, {
        style: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        },
        children: H
      })
    }) : null,
    B = {
      maxHeight: k.height - 43 - 25 - 48
    };
  w && (B.maxHeight -= 40);
  let W = null != p && l;
  return (0, r.jsx)("div", {
    className: a()(E, P.messagesPopoutWrap),
    style: B,
    onClick: I,
    onDoubleClick: I,
    "aria-label": e["aria-label"],
    children: (0, r.jsxs)(h.y5t, {
      component: g(),
      children: [(0, r.jsxs)(h.Den, {
        className: a()(P.messagesPopout, b),
        onScroll: W ? M : true,
        ref: N,
        children: [(0, r.jsx)(c.bG, {
          navigator: Z,
          children: (0, r.jsx)(c.SJ, {
            children: e => {
              var t, n, {
                  ref: s
                } = e,
                l = function(e, t) {
                  if (null == e) return {};
                  var n, r, s = function(e, t) {
                    if (null == e) return {};
                    var n, r, s = {},
                      l = Object.keys(e);
                    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
                  }
                  return s
                }(e, ["ref"]);
              return (0, r.jsx)("div", (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    T(e, t, n[t])
                  })
                }
                return e
              }({
                ref: s
              }, l), n = n = {
                children: D
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
        }), F]
      }), U]
    })
  })
}

function M(e) {
  let {
    analyticsName: t,
    onFetch: n,
    channel: l,
    messages: a,
    hasMore: i,
    loading: o,
    loadMore: c,
    onJump: d,
    canCloseAllMessages: h = false,
    renderHeader: f,
    renderEmptyState: _,
    renderMessage: E,
    getProTip: x,
    scrollerClassName: C,
    className: O,
    onCloseMessage: v,
    listName: j
  } = e, T = (0, u.e7)([b.Z], () => {
    let e = null != l ? b.Z.getMessages(l.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function I(e, n) {
    if ((0, g.Z)(e) && !T) {
      let {
        id: r,
        channel_id: s
      } = e, l = y.Z.getChannel(s);
      null != l && (p.Z.trackJump(s, r, t), (0, m.uL)(R.Z5c.CHANNEL(l.getGuildId(), s, r))), null == d || d(n)
    }
  }
  s.useEffect(() => {
    n(l)
  }, [l, n]);
  let A = s.useMemo(() => null == a ? true : a.map(e => ({
    message: e,
    channel: l
  })), [a, l]);
  return (0, r.jsx)(k, {
    className: O,
    scrollerClassName: C,
    items: A,
    loading: o,
    analyticsName: t,
    renderEmptyState: _,
    renderHeader: f,
    hasMore: i,
    loadMore: c,
    getProTip: x,
    renderItem: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      if (null == t) return [];
      if (null != E) return E(t, e => I(t, e));
      let s = [];
      return null == n ? [] : (s.push((0, r.jsxs)("div", {
        className: P.messageGroupWrapper,
        children: [(0, r.jsx)(S.Z, {
          className: P.messageGroupCozy,
          message: t,
          channel: n
        }), (0, r.jsx)(w, {
          channel: l,
          message: t,
          jumping: T,
          canCloseAllMessages: h,
          jumpTo: I,
          onCloseMessage: v
        })]
      }, t.id)), s)
    },
    listName: j,
    "aria-label": e["aria-label"]
  })
}