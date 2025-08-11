/** Chunk was on web.js **/
/** chunk id: 920888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk566006 = require("./566006.js"),
  Chunk60174 = require("./60174.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk434624 = require("./434624.jsx"),
  Chunk287151 = require("./287151.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk92254 = require("./92254.js"),
  Chunk588429 = require("./588429.js");

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
class T extends Chunk73800.PureComponent {
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
      isGuest: o,
      isPendingMember: g,
      isForumToolbar: E,
      channel: b,
      className: y,
      forceAddReactions: O,
      reactionClassName: v,
      useChatFontScaling: I,
      forceHideReactionCreates: T,
      remainingReactions: S,
      combinedReactions: A,
      visibleReactionsCount: N
    } = this.props, {
      disableTransitionAppear: C
    } = this.state, R = I ? Chunk588429 : Chunk92254, P = N > 0;
    if (!P && !O) return null;
    let w = O || P;
    return <Chunk215569.W component={"div"} className={a()(R.reactions, y)} transitionAppear={!C} role={"group"} transitionLeave={false} id={(0, Chunk453687.bY)(module)} onMouseEnter={() => this.setState({
        isHovered: true
      })} onMouseLeave={() => this.setState({
        isHovered: false
      })}>{<Chunk434624.l reactions={A} message={module} readOnly={require} isLurking={Chunk73800} isGuest={Chunk120356} isPendingMember={g} isForumToolbar={E} useChatFontScaling={I} className={v} />}{S > 0 && <Chunk481060.P3F onClick={t => {
          t.stopPropagation(), (0, _.op)(b, e)
        }} className={a()(R.reaction, v, R.remainingReactions)} aria-label={Chunk388032.intl.string(Chunk388032.t.lfIHs7)}><Chunk481060.Text className={R.reactionInner} variant={"text-sm/normal"}>{"+"}{S}</Chunk481060.Text></Chunk481060.P3F>}{!exports && !T && <Chunk60174.X tabIndex={w || this.state.isHovered ? 0 : false} type={Chunk566006.O.NORMAL} message={module} channel={b} useChatFontScaling={I} isHovered={this.state.isHovered} className={a()({
          [R.forceShow]: w
        })} />}</Chunk215569.W>
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
    hoistReaction: o
  } = e, {
    combinedReactions: a,
    remainingReactions: s,
    visibleReactionsCount: l
  } = i.useMemo(() => {
    let e = [],
      r = I(t.reactions, o),
      i = null != n && n < r.length ? r.slice(0, n) : r,
      a = r.length - i.length,
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
      remainingReactions: a
    }
  }, [o, n, t.reactions]);
  return <T{...y(E({}, e), {
    visibleReactionsCount: l,
    combinedReactions: a,
    remainingReactions: s
  })} />
}