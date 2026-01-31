/** Chunk was on 64935 **/
/** chunk id: 573163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk505527 = require("./505527.js"),
  Chunk960538 = require("./960538.jsx"),
  Chunk860227 = require("./860227.js"),
  Chunk866630 = require("./866630.jsx"),
  Chunk260821 = require("./260821.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk233080 = require("./233080.js"),
  Chunk710504 = require("./710504.js");

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

function y(e, t) {
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
let A = (e, t) => null == e && null == t || e === t;
class v extends Chunk64700.PureComponent {
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
      isPendingMember: l,
      isForumToolbar: c,
      channel: h,
      className: b,
      forceAddReactions: y,
      reactionClassName: A,
      useChatFontScaling: v,
      forceHideReactionCreates: O,
      remainingReactions: x,
      combinedReactions: E,
      visibleReactionsCount: j
    } = this.props, {
      disableTransitionAppear: C
    } = this.state, I = v ? _ : g, S = j > 0;
    if (!S && !y) return null;
    let T = y || S;
    return (0, r.jsxs)(s.F, {
      component: "div",
      className: a()(I.reactions, b),
      transitionAppear: !C,
      role: "group",
      transitionLeave: false,
      id: (0, d.JH)(e),
      onMouseEnter: () => this.setState({
        isHovered: true
      }),
      onMouseLeave: () => this.setState({
        isHovered: false
      }),
      children: [(0, r.jsx)(p.A, {
        reactions: E,
        message: e,
        readOnly: n,
        isLurking: i,
        isPendingMember: l,
        isForumToolbar: c,
        useChatFontScaling: v,
        className: A
      }), x > 0 && (0, r.jsx)(o.DUT, {
        onClick: t => {
          t.stopPropagation(), (0, m.$l)(h, e)
        },
        className: a()(I.reaction, A, I.remainingReactions),
        "aria-label": f.intl.string(f.t.lfIHs4),
        children: (0, r.jsxs)(o.Text, {
          className: I.reactionInner,
          variant: "text-sm/normal",
          children: ["+", x]
        })
      }), !t && !O && (0, r.jsx)(u.t, {
        tabIndex: T || this.state.isHovered ? 0 : false,
        message: e,
        channel: h,
        useChatFontScaling: v,
        isHovered: this.state.isHovered,
        className: a()({
          [I.forceShow]: T
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
    combinedReactions: a,
    remainingReactions: s,
    visibleReactionsCount: o
  } = i.useMemo(() => {
    let e = [],
      r = ((e, t) => {
        if (null == t) return e;
        let n = e.findIndex(e => A(e.emoji.id, null == t ? true : t.id) && A(e.emoji.name, null == t ? true : t.name));
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
      })(t.reactions, l),
      i = null != n && n < r.length ? r.slice(0, n) : r,
      a = r.length - i.length,
      s = r.length;
    return i.forEach(t => {
      t.burst_count > 0 && e.push(y(b({}, t), {
        type: c.v.BURST
      })), t.count > 0 && e.push(y(b({}, t), {
        type: c.v.NORMAL
      })), null != t.me_vote && --s
    }), {
      combinedReactions: e,
      visibleReactionsCount: s,
      remainingReactions: a
    }
  }, [l, n, t.reactions]);
  return (0, r.jsx)(v, y(b({}, e), {
    visibleReactionsCount: o,
    combinedReactions: a,
    remainingReactions: s
  }))
}