/** Chunk was on web.js **/
/** chunk id: 573163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk505527 = require("./505527.js"),
  Chunk960538 = require("./960538.jsx"),
  Chunk860227 = require("./860227.js"),
  Chunk644249 = require("./644249.jsx"),
  Chunk260821 = require("./260821.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk233080 = require("./233080.js"),
  Chunk710504 = require("./710504.js");

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

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = (e, t) => null == e && null == t || e === t,
  v = (e, t) => e.findIndex(e => O(e.emoji.id, null == t ? true : t.id) && O(e.emoji.name, null == t ? true : t.name)),
  A = (e, t) => {
    if (null == t) return e;
    let n = v(e, t);
    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
  };
class I extends Chunk64700.PureComponent {
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
      className: y,
      forceAddReactions: b,
      reactionClassName: O,
      useChatFontScaling: v,
      forceHideReactionCreates: A,
      remainingReactions: I,
      combinedReactions: S,
      visibleReactionsCount: T
    } = this.props, {
      disableTransitionAppear: C
    } = this.state, N = v ? m : h, R = T > 0;
    if (!R && !b) return null;
    let w = b || R;
    return (0, r.jsxs)(o.F, {
      component: "div",
      className: s()(N.reactions, y),
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
      children: [(0, r.jsx)(f.A, {
        reactions: S,
        message: e,
        readOnly: n,
        isLurking: i,
        isGuest: a,
        isPendingMember: c,
        isForumToolbar: g,
        useChatFontScaling: v,
        className: O
      }), I > 0 && (0, r.jsx)(l.DUT, {
        onClick: t => {
          t.stopPropagation(), (0, p.$l)(E, e)
        },
        className: s()(N.reaction, O, N.remainingReactions),
        "aria-label": _.intl.string(_.t.lfIHs4),
        children: (0, r.jsxs)(l.Text, {
          className: N.reactionInner,
          variant: "text-sm/normal",
          children: ["+", I]
        })
      }), !t && !A && (0, r.jsx)(u.t, {
        tabIndex: w || this.state.isHovered ? 0 : false,
        message: e,
        channel: E,
        useChatFontScaling: v,
        isHovered: this.state.isHovered,
        className: s()({
          [N.forceShow]: w
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
    combinedReactions: s,
    remainingReactions: o,
    visibleReactionsCount: l
  } = i.useMemo(() => {
    let e = [],
      r = A(t.reactions, a),
      i = null != n && n < r.length ? r.slice(0, n) : r,
      s = r.length - i.length,
      o = r.length;
    return i.forEach(t => {
      t.burst_count > 0 && e.push(b(E({}, t), {
        type: c.v.BURST
      })), t.count > 0 && e.push(b(E({}, t), {
        type: c.v.NORMAL
      })), null != t.me_vote && --o
    }), {
      combinedReactions: e,
      visibleReactionsCount: o,
      remainingReactions: s
    }
  }, [a, n, t.reactions]);
  return (0, r.jsx)(I, b(E({}, e), {
    visibleReactionsCount: l,
    combinedReactions: s,
    remainingReactions: o
  }))
}