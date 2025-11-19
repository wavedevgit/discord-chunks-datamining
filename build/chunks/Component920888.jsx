/** Chunk was on web.js **/
/** chunk id: 920888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk566006 = require("./566006.js"),
  Chunk490597 = require("./490597.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk434624 = require("./434624.jsx"),
  Chunk287151 = require("./287151.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk127947 = require("./127947.js"),
  Chunk893973 = require("./893973.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = (e, t) => null == e && null == t || e === t,
  v = (e, t) => e.findIndex(e => O(e.emoji.id, null == t ? true : t.id) && O(e.emoji.name, null == t ? true : t.name)),
  I = (e, t) => {
    if (null == t) return e;
    let n = v(e, t);
    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
  };
class T extends Chunk473749.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let n = e.message.reactions.length;
    return 0 === t.reactionsCount && n > 0 ? {
      disableTransitionAppear: false,
      reactionsCount: n
    } : t.reactionsCount !== n ? {
      reactionsCount: n
    } : null
  }
  render() {
    let {
      message: e,
      disableReactionCreates: t,
      disableReactionUpdates: n,
      isLurking: i,
      isGuest: a,
      isPendingMember: c,
      isForumToolbar: g,
      channel: E,
      className: b,
      forceAddReactions: y,
      reactionClassName: O,
      useChatFontScaling: v,
      forceHideReactionCreates: I,
      remainingReactions: T,
      combinedReactions: S,
      visibleReactionsCount: A
    } = this.props, {
      disableTransitionAppear: C
    } = this.state, N = v ? Chunk893973 : Chunk127947, R = A > 0;
    if (!R && !y) return null;
    let P = y || R;
    return (0, Chunk54381.jsxs)(Chunk215569.W, {
      component: "div",
      className: o()(N.reactions, b),
      transitionAppear: !C,
      role: "group",
      transitionLeave: false,
      id: (0, Chunk453687.bY)(module),
      onMouseEnter: () => this.setState({
        isHovered: true
      }),
      onMouseLeave: () => this.setState({
        isHovered: false
      }),
      children: [(0, Chunk54381.jsx)(Chunk434624.l, {
        reactions: S,
        message: module,
        readOnly: require,
        isLurking: Chunk473749,
        isGuest: Chunk120356,
        isPendingMember: Chunk566006,
        isForumToolbar: g,
        useChatFontScaling: v,
        className: O
      }), T > 0 && (0, Chunk54381.jsx)(Chunk481060.P3F, {
        onClick: t => {
          t.stopPropagation(), (0, _.op)(E, e)
        },
        className: o()(N.reaction, O, N.remainingReactions),
        "aria-label": Chunk388032.intl.string(Chunk388032.t.lfIHs4),
        children: (0, Chunk54381.jsxs)(Chunk481060.Text, {
          className: N.reactionInner,
          variant: "text-sm/normal",
          children: ["+", T]
        })
      }), !exports && !I && (0, Chunk54381.jsx)(Chunk490597.X, {
        tabIndex: P || this.state.isHovered ? 0 : false,
        message: module,
        channel: E,
        useChatFontScaling: v,
        isHovered: this.state.isHovered,
        className: o()({
          [N.forceShow]: P
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      disableTransitionAppear: true,
      reactionsCount: this.props.message.reactions.length,
      isHovered: false
    })
  }
}
let S = e => {
  let {
    message: t,
    maxReactions: n,
    hoistReaction: a
  } = e, {
    combinedReactions: o,
    remainingReactions: s,
    visibleReactionsCount: l
  } = i.useMemo(() => {
    let e = [],
      r = I(t.reactions, a),
      i = null != n && n < r.length ? r.slice(0, n) : r,
      o = r.length - i.length,
      s = r.length;
    return i.forEach(t => {
      t.burst_count > 0 && e.push(y(E({}, t), {
        type: c.O.BURST
      })), t.count > 0 && e.push(y(E({}, t), {
        type: c.O.NORMAL
      })), null != t.me_vote && --s
    }), {
      combinedReactions: e,
      visibleReactionsCount: s,
      remainingReactions: o
    }
  }, [a, n, t.reactions]);
  return (0, r.jsx)(T, y(E({}, e), {
    visibleReactionsCount: l,
    combinedReactions: o,
    remainingReactions: s
  }))
}