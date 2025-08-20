/** Chunk was on 26434 **/
/** chunk id: 920888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk566006 = require("./566006.js"),
  Chunk60174 = require("./60174.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk434624 = require("./434624.jsx"),
  Chunk287151 = require("./287151.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk127947 = require("./127947.js"),
  Chunk893973 = require("./893973.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = (e, t) => null == e && null == t || e === t;
class v extends Chunk647438.PureComponent {
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
      isGuest: l,
      isPendingMember: h,
      isForumToolbar: b,
      channel: E,
      className: C,
      forceAddReactions: v,
      reactionClassName: O,
      useChatFontScaling: y,
      forceHideReactionCreates: x,
      remainingReactions: j,
      combinedReactions: I,
      visibleReactionsCount: S
    } = this.props, {
      disableTransitionAppear: T
    } = this.state, P = y ? Chunk893973 : Chunk127947, N = S > 0;
    if (!N && !v) return null;
    let A = v || N;
    return (0, Chunk951288.jsxs)(Chunk215569.W, {
      component: "div",
      className: o()(P.reactions, C),
      transitionAppear: !T,
      role: "group",
      transitionLeave: false,
      id: (0, Chunk453687.bY)(module),
      onMouseEnter: () => this.setState({
        isHovered: true
      }),
      onMouseLeave: () => this.setState({
        isHovered: false
      }),
      children: [(0, Chunk951288.jsx)(Chunk434624.l, {
        reactions: I,
        message: module,
        readOnly: require,
        isLurking: Chunk647438,
        isGuest: Chunk120356,
        isPendingMember: h,
        isForumToolbar: b,
        useChatFontScaling: y,
        className: O
      }), j > 0 && (0, Chunk951288.jsx)(Chunk481060.P3F, {
        onClick: t => {
          t.stopPropagation(), (0, m.op)(E, e)
        },
        className: o()(P.reaction, O, P.remainingReactions),
        "aria-label": Chunk388032.intl.string(Chunk388032.t.lfIHs7),
        children: (0, Chunk951288.jsxs)(Chunk481060.Text, {
          className: P.reactionInner,
          variant: "text-sm/normal",
          children: ["+", j]
        })
      }), !exports && !x && (0, Chunk951288.jsx)(Chunk60174.X, {
        tabIndex: A || this.state.isHovered ? 0 : false,
        type: Chunk566006.O.NORMAL,
        message: module,
        channel: E,
        useChatFontScaling: y,
        isHovered: this.state.isHovered,
        className: o()({
          [P.forceShow]: A
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      disableTransitionAppear: true,
      reactionsCount: this.props.message.reactions.length,
      isHovered: false
    })
  }
}
let O = e => {
  let {
    message: t,
    maxReactions: n,
    hoistReaction: l
  } = e, {
    combinedReactions: o,
    remainingReactions: a,
    visibleReactionsCount: s
  } = i.useMemo(() => {
    let e = [],
      r = ((e, t) => {
        if (null == t) return e;
        let n = e.findIndex(e => C(e.emoji.id, null == t ? true : t.id) && C(e.emoji.name, null == t ? true : t.name));
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
      })(t.reactions, l),
      i = null != n && n < r.length ? r.slice(0, n) : r,
      o = r.length - i.length,
      a = r.length;
    return i.forEach(t => {
      t.burst_count > 0 && e.push(E(b({}, t), {
        type: c.O.BURST
      })), t.count > 0 && e.push(E(b({}, t), {
        type: c.O.NORMAL
      })), null != t.me_vote && --a
    }), {
      combinedReactions: e,
      visibleReactionsCount: a,
      remainingReactions: o
    }
  }, [l, n, t.reactions]);
  return (0, r.jsx)(v, E(b({}, e), {
    visibleReactionsCount: s,
    combinedReactions: o,
    remainingReactions: a
  }))
}