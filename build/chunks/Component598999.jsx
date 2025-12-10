/** Chunk was on web.js **/
/** chunk id: 598999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => H,
  h4: () => G,
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
  Chunk129633 = require("./129633.js");

function N(e, t, n) {
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
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e, t) {
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
let L = 43,
  j = 25,
  M = 40,
  k = 250;

function U(e) {
  e.stopPropagation()
}
let G = e => {
    let {
      title: t,
      icon: n,
      children: i,
      className: a
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(a, A.header),
      children: [(0, r.jsxs)("div", {
        className: A.titleContainer,
        children: [null != n ? (0, r.jsx)(n, {
          color: d.TVs.colors.INTERACTIVE_TEXT_DEFAULT
        }) : null, null == t ? null : (0, r.jsx)(d.Text, {
          variant: "text-lg/semibold",
          color: "interactive-text-active",
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
      className: A.emptyPlaceholder,
      children: [(0, r.jsx)("div", {
        className: A.image,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      }), (0, r.jsx)("div", {
        className: A.body,
        children: t
      })]
    })
  };
class B extends Chunk473749.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: Chunk129633.buttonContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "secondary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.k5WiPf),
        onClick: this.handleClickJump,
        loading: module
      })
    })
  }
  renderCloseButton() {
    let {
      onCloseMessage: e,
      canCloseAllMessages: t,
      canManageMessages: n,
      channel: i,
      closeAriaLabel: a
    } = this.props;
    return null != module && (exports || require || null != Chunk473749 && Chunk473749.isPrivate()) ? (0, Chunk54381.jsx)("div", {
      className: Chunk129633.buttonContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.hU, {
        icon: Chunk481060.Dio,
        size: "sm",
        variant: "secondary",
        "aria-label": null != Chunk120356 ? Chunk120356 : Chunk388032.intl.string(Chunk388032.t.cpT0Cq),
        onClick: this.handleClickClose
      })
    }) : null
  }
  render() {
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk129633.actionButtons,
      children: [this.renderJumpButton(), this.renderCloseButton()]
    })
  }
  constructor(...e) {
    super(...e), N(this, "handleClickJump", e => {
      let {
        jumpTo: t,
        message: n
      } = this.props;
      t(n, e)
    }), N(this, "handleClickClose", e => {
      let {
        onCloseMessage: t,
        message: n
      } = this.props;
      null != t && t(n, e)
    })
  }
}
let F = Chunk442837.ZP.connectStores([Chunk496675.Z], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && E.Z.can(T.Plq.MANAGE_MESSAGES, t)
  }
})(B);

function V(e) {
  let {
    analyticsName: t,
    items: n,
    hasMore: a,
    loading: s,
    loadMore: f,
    renderHeader: m,
    renderEmptyState: h,
    renderItem: g,
    getProTip: E,
    scrollerClassName: S,
    className: I,
    listName: N
  } = e, R = i.useRef(null), x = (0, p.Z)(N, R), G = (0, u.e7)([b.ZP], () => b.ZP.hasNotice()), Z = (0, u.e7)([y.Z], () => y.Z.windowSize());
  i.useEffect(() => {
    O.default.track(T.rMx.OPEN_POPOUT, {
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
    return v.S.subscribe(T.CkL.SCROLL_PAGE_DOWN, t), v.S.subscribe(T.CkL.SCROLL_PAGE_UP, e), () => {
      v.S.unsubscribe(T.CkL.SCROLL_PAGE_DOWN, t), v.S.unsubscribe(T.CkL.SCROLL_PAGE_UP, e)
    }
  }, []);
  let B = i.useCallback(() => {
      var e;
      let t = null == (e = R.current) ? true : e.getScrollerState();
      null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < k && a && !s && (null == f || f())
    }, [a, f, s]),
    F = [],
    V = true;
  null == n || s && 0 === n.length ? F = [(0, r.jsx)("div", {
    className: o()(A.emptyPlaceholder, A.loadingPlaceholder),
    children: (0, r.jsx)(d.$jN, {})
  }, "spinner")] : 0 === n.length ? F.push((0, r.jsx)(i.Fragment, {
    children: h()
  }, "empty-state")) : (V = false, F = [], l().each(n, e => {
    F.push(...g(e))
  }));
  let H = null;
  null != n && n.length > 0 && null != f && (H = s ? (0, r.jsx)("div", {
    className: A.loadingMore,
    children: (0, r.jsx)(d.$jN, {})
  }, "loading-more-after") : a ? (0, r.jsx)("div", {
    className: A.hasMore,
    children: (0, r.jsx)(d.Button, {
      variant: "secondary",
      size: "sm",
      fullWidth: true,
      text: C.intl.string(C.t.XBlaiC),
      onClick: f
    })
  }) : (0, r.jsx)("div", {
    className: A.scrollingFooterWrap,
    children: h()
  }));
  let Y = null == E ? true : E(),
    W = V && null != Y ? (0, r.jsx)("div", {
      className: A.footer,
      children: (0, r.jsx)(_.Z, {
        style: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        },
        children: Y
      })
    }) : null,
    K = {
      maxHeight: Z.height - L - j - 48
    };
  G && (K.maxHeight -= M);
  let z = null != f && a;
  return (0, r.jsx)("div", {
    className: o()(I, A.messagesPopoutWrap),
    style: K,
    onClick: U,
    onDoubleClick: U,
    "aria-label": e["aria-label"],
    children: (0, r.jsxs)(d.y5t, {
      component: m(),
      children: [(0, r.jsxs)(d.Den, {
        className: o()(A.messagesPopout, S),
        onScroll: z ? B : true,
        ref: R,
        children: [(0, r.jsx)(c.bG, {
          navigator: x,
          children: (0, r.jsx)(c.SJ, {
            children: e => {
              var {
                ref: t
              } = e, n = w(e, ["ref"]);
              return (0, r.jsx)("div", D(P({
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

function H(e) {
  let {
    analyticsName: t,
    onFetch: n,
    channel: a,
    messages: o,
    hasMore: s,
    loading: l,
    loadMore: c,
    onJump: d,
    canCloseAllMessages: p = false,
    renderHeader: _,
    renderEmptyState: E,
    renderMessage: b,
    getProTip: y,
    scrollerClassName: O,
    className: v,
    onCloseMessage: C,
    listName: N,
    closeAriaLabel: P
  } = e, R = (0, u.e7)([g.Z], () => {
    let e = null != a ? g.Z.getMessages(a.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function D(e, n) {
    let r = () => {
      let {
        id: r,
        channel_id: i
      } = e, a = h.Z.getChannel(i);
      null != a && (f.Z.trackJump(i, r, t), (0, m.uL)(T.Z5c.CHANNEL(a.getGuildId(), i, r))), null == d || d(n)
    };
    (0, S.Z)(e, r) && !R && r()
  }

  function w(e) {
    let {
      message: t,
      channel: n
    } = e;
    if (null == t) return [];
    if (null != b) return b(t, e => D(t, e));
    let i = [];
    return null == n ? [] : (i.push((0, r.jsxs)("div", {
      className: A.messageGroupWrapper,
      children: [(0, r.jsx)(I.Z, {
        className: A.messageGroupCozy,
        message: t,
        channel: n
      }), (0, r.jsx)(F, {
        channel: a,
        message: t,
        jumping: R,
        canCloseAllMessages: p,
        jumpTo: D,
        onCloseMessage: C,
        closeAriaLabel: P
      })]
    }, t.id)), i)
  }
  i.useEffect(() => {
    n(a)
  }, [a, n]);
  let x = i.useMemo(() => null == o ? true : o.map(e => ({
    message: e,
    channel: a
  })), [o, a]);
  return (0, r.jsx)(V, {
    className: v,
    scrollerClassName: O,
    items: x,
    loading: l,
    analyticsName: t,
    renderEmptyState: E,
    renderHeader: _,
    hasMore: s,
    loadMore: c,
    getProTip: y,
    renderItem: w,
    listName: N,
    "aria-label": e["aria-label"]
  })
}