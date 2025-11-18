/** Chunk was on web.js **/
/** chunk id: 598999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => Y,
  h4: () => B,
  nH: () => Z
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk724757 = require("./724757.js"),
  Chunk576855 = require("./576855.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk933429 = require("./933429.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk804063 = require("./804063.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk509447 = require("./509447.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = x(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let M = 43,
  j = 25,
  k = 40,
  U = 250;

function G(e) {
  e.stopPropagation()
}
let B = e => {
    let {
      title: t,
      icon: n,
      children: i,
      className: a
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(a, N.header),
      children: [(0, r.jsxs)("div", {
        className: N.titleContainer,
        children: [null != n ? (0, r.jsx)(n, {
          color: f.TVs.colors.INTERACTIVE_NORMAL
        }) : null, null == t ? null : (0, r.jsx)(f.Text, {
          variant: "text-lg/semibold",
          color: "interactive-active",
          children: t
        })]
      }), i]
    })
  },
  Z = e => {
    let {
      msg: t,
      image: n
    } = e;
    return (0, r.jsxs)("div", {
      className: N.emptyPlaceholder,
      children: [(0, r.jsx)("div", {
        className: N.image,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      }), (0, r.jsx)("div", {
        className: N.body,
        children: t
      })]
    })
  };
class F extends Chunk473749.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk481060.P3F, {
      className: Chunk509447.jumpButton,
      onClick: this.handleClickJump,
      children: [(0, Chunk54381.jsx)("div", {
        className: o()(Chunk509447.__invalid_text, {
          hidden: module
        }),
        children: Chunk388032.intl.string(Chunk388032.t.k5WiPf)
      }), (0, Chunk54381.jsx)(Chunk481060.$jN, {
        type: Chunk481060.$jN.Type.PULSING_ELLIPSIS,
        className: o()(Chunk509447.loading, {
          [Chunk509447.visible]: module
        })
      })]
    })
  }
  renderCloseButton() {
    let {
      onCloseMessage: e,
      canCloseAllMessages: t,
      canManageMessages: n,
      channel: i
    } = this.props;
    return null != module && (exports || require || null != Chunk473749 && Chunk473749.isPrivate()) ? (0, Chunk54381.jsx)(Chunk755721.zx, {
      look: Chunk755721.zx.Looks.BLANK,
      size: Chunk755721.zx.Sizes.NONE,
      onClick: this.handleClickClose,
      children: (0, Chunk54381.jsx)(Chunk481060.Dio, {
        size: "md",
        color: "currentColor",
        className: Chunk509447.closeIcon
      })
    }) : null
  }
  render() {
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk509447.actionButtons,
      children: [this.renderJumpButton(), this.renderCloseButton()]
    })
  }
  constructor(...e) {
    super(...e), R(this, "handleClickJump", e => {
      let {
        jumpTo: t,
        message: n
      } = this.props;
      t(n, e)
    }), R(this, "handleClickClose", e => {
      let {
        onCloseMessage: t,
        message: n
      } = this.props;
      null != t && t(n, e)
    })
  }
}
let V = Chunk442837.ZP.connectStores([Chunk496675.Z], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && b.Z.can(A.Plq.MANAGE_MESSAGES, t)
  }
})(F);

function H(e) {
  let {
    analyticsName: t,
    items: n,
    hasMore: a,
    loading: s,
    loadMore: d,
    renderHeader: _,
    renderEmptyState: m,
    renderItem: g,
    getProTip: E,
    scrollerClassName: b,
    className: T,
    listName: S
  } = e, R = i.useRef(null), D = (0, p.Z)(S, R), x = (0, u.e7)([y.ZP], () => y.ZP.hasNotice()), B = (0, u.e7)([O.Z], () => O.Z.windowSize());
  i.useEffect(() => {
    v.default.track(A.rMx.OPEN_POPOUT, {
      type: t
    })
  }, [t]), i.useEffect(() => {
    function e() {
      var e;
      null == (e = R.current) || e.scrollPageUp({
        animate: true
      })
    }

    function t() {
      var e;
      null == (e = R.current) || e.scrollPageDown({
        animate: true
      })
    }
    return I.S.subscribe(A.CkL.SCROLL_PAGE_DOWN, t), I.S.subscribe(A.CkL.SCROLL_PAGE_UP, e), () => {
      I.S.unsubscribe(A.CkL.SCROLL_PAGE_DOWN, t), I.S.unsubscribe(A.CkL.SCROLL_PAGE_UP, e)
    }
  }, []);
  let Z = i.useCallback(() => {
      var e;
      let t = null == (e = R.current) ? true : e.getScrollerState();
      null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < U && a && !s && (null == d || d())
    }, [a, d, s]),
    F = [],
    V = true;
  null == n || s && 0 === n.length ? F = [(0, r.jsx)("div", {
    className: o()(N.emptyPlaceholder, N.loadingPlaceholder),
    children: (0, r.jsx)(f.$jN, {})
  }, "spinner")] : 0 === n.length ? F.push((0, r.jsx)(i.Fragment, {
    children: m()
  }, "empty-state")) : (V = false, F = [], l().each(n, e => {
    F.push(...g(e))
  }));
  let H = null;
  null != n && n.length > 0 && null != d && (H = s ? (0, r.jsx)("div", {
    className: N.loadingMore,
    children: (0, r.jsx)(f.$jN, {})
  }, "loading-more-after") : a ? (0, r.jsx)("div", {
    className: N.hasMore,
    children: (0, r.jsx)(f.Button, {
      variant: "secondary",
      size: "sm",
      fullWidth: true,
      text: C.intl.string(C.t.XBlaiC),
      onClick: d
    })
  }) : (0, r.jsx)("div", {
    className: N.scrollingFooterWrap,
    children: m()
  }));
  let Y = null == E ? true : E(),
    W = V && null != Y ? (0, r.jsx)("div", {
      className: N.footer,
      children: (0, r.jsx)(h.Z, {
        style: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        },
        children: Y
      })
    }) : null,
    K = {
      maxHeight: B.height - M - j - 48
    };
  x && (K.maxHeight -= k);
  let z = null != d && a;
  return (0, r.jsx)("div", {
    className: o()(T, N.messagesPopoutWrap),
    style: K,
    onClick: G,
    onDoubleClick: G,
    "aria-label": e["aria-label"],
    children: (0, r.jsxs)(f.y5t, {
      component: _(),
      children: [(0, r.jsxs)(f.Den, {
        className: o()(N.messagesPopout, b),
        onScroll: z ? Z : true,
        ref: R,
        children: [(0, r.jsx)(c.bG, {
          navigator: D,
          children: (0, r.jsx)(c.SJ, {
            children: e => {
              var {
                ref: t
              } = e, n = L(e, ["ref"]);
              return (0, r.jsx)("div", w(P({
                ref: t
              }, n), {
                children: F
              }))
            }
          })
        }), H]
      }), W]
    })
  })
}

function Y(e) {
  let {
    analyticsName: t,
    onFetch: n,
    channel: a,
    messages: o,
    hasMore: s,
    loading: l,
    loadMore: c,
    onJump: d,
    canCloseAllMessages: f = false,
    renderHeader: p,
    renderEmptyState: h,
    renderMessage: b,
    getProTip: y,
    scrollerClassName: O,
    className: v,
    onCloseMessage: I,
    listName: C
  } = e, R = (0, u.e7)([E.Z], () => {
    let e = null != a ? E.Z.getMessages(a.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function P(e, n) {
    if ((0, T.Z)(e) && !R) {
      let {
        id: r,
        channel_id: i
      } = e, a = g.Z.getChannel(i);
      null != a && (_.Z.trackJump(i, r, t), (0, m.uL)(A.Z5c.CHANNEL(a.getGuildId(), i, r))), null == d || d(n)
    }
  }

  function D(e) {
    let {
      message: t,
      channel: n
    } = e;
    if (null == t) return [];
    if (null != b) return b(t, e => P(t, e));
    let i = [];
    return null == n ? [] : (i.push((0, r.jsxs)("div", {
      className: N.messageGroupWrapper,
      children: [(0, r.jsx)(S.Z, {
        className: N.messageGroupCozy,
        message: t,
        channel: n
      }), (0, r.jsx)(V, {
        channel: a,
        message: t,
        jumping: R,
        canCloseAllMessages: f,
        jumpTo: P,
        onCloseMessage: I
      })]
    }, t.id)), i)
  }
  i.useEffect(() => {
    n(a)
  }, [a, n]);
  let w = i.useMemo(() => null == o ? true : o.map(e => ({
    message: e,
    channel: a
  })), [o, a]);
  return (0, r.jsx)(H, {
    className: v,
    scrollerClassName: O,
    items: w,
    loading: l,
    analyticsName: t,
    renderEmptyState: h,
    renderHeader: p,
    hasMore: s,
    loadMore: c,
    getProTip: y,
    renderItem: D,
    listName: C,
    "aria-label": e["aria-label"]
  })
}