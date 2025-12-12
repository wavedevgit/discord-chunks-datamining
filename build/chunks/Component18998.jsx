/** Chunk was on 51235 **/
/** chunk id: 18998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./583741.js"), require("./388685.js"), require("./539854.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  c = require.n(Chunk954955),
  Chunk748780 = require("./748780.js"),
  Chunk902704 = require("./902704.js"),
  Chunk481060 = require("./481060.js"),
  Chunk491455 = require("./491455.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let b = {
  friction: 10,
  tension: 300
};
class m extends Chunk473749.Component {
  shouldComponentUpdate(e, t) {
    return !(0, d.Z)(this.props, e, ["animate"]) || !(0, d.Z)(this.state, t)
  }
  componentDidMount() {
    let {
      hide: e
    } = this.props;
    module ? this.state.translateY.setValue(1) : this.state.translateY.setValue(0)
  }
  componentDidUpdate(e) {
    let {
      hide: t
    } = e, {
      hide: n
    } = this.props;
    n && !t ? this.animateOut() : !n && t && this.animateIn()
  }
  componentWillUnmount() {
    null != this._timeout && clearTimeout(this._timeout)
  }
  animateIn() {
    let {
      translateY: e
    } = this.state;
    if (null != this._timeout && clearTimeout(this._timeout), !this.props.animate) return void module.setValue(0);
    this._timeout = setTimeout(() => {
      Chunk748780.Z.spring(module, g({
        toValue: 0
      }, b)).start()
    }, 100)
  }
  animateOut() {
    let {
      translateY: e
    } = this.state;
    if (null != this._timeout && clearTimeout(this._timeout), !this.props.animate) return void module.setValue(1);
    Chunk748780.Z.spring(module, g({
      toValue: 1
    }, b)).start()
  }
  render() {
    let {
      className: e,
      text: t,
      hide: n,
      onClick: r
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk748780.Z.div, {
      className: o()(Chunk491455.bar, module, {
        [Chunk491455.hidden]: require
      }),
      onClick: r,
      style: this.getAnimatedStyle(),
      "aria-hidden": require,
      children: (0, Chunk54381.jsx)("span", {
        className: Chunk491455.text,
        children: exports
      })
    })
  }
  getAnimatedStyle() {
    let {
      translateY: e
    } = this.state, {
      reverse: t
    } = this.props;
    return {
      transform: [{
        translateY: module.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", exports ? "180%" : "-180%"]
        })
      }]
    }
  }
  constructor(e) {
    super(e), p(this, "_timeout", true), this.state = {
      translateY: new u.Z.Value,
      reduceMotion: false
    }
  }
}
class y extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    this.calculateState()
  }
  componentDidUpdate() {
    this.calculateState()
  }
  componentWillUnmount() {
    this.calculateState.cancel()
  }
  render() {
    let {
      unread: e,
      mention: t
    } = this.state, {
      textMention: n,
      textUnread: r,
      reverse: l,
      className: a,
      barClassName: s,
      hide: c,
      animate: u
    } = this.props, {
      reducedMotion: d
    } = this.context;
    return (0, Chunk54381.jsx)("div", {
      className: null != Chunk120356 ? Chunk120356 : true,
      children: (0, Chunk54381.jsx)(m, {
        hide: true === c || null == module && null == exports,
        className: o()(Chunk954955, null != exports ? Chunk491455.mention : Chunk491455.unread),
        text: null != exports ? require : r,
        reverse: Chunk473749,
        animate: Chunk748780 && !Chunk902704.enabled,
        onClick: this.handleClick
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      unread: null,
      mention: null
    }), p(this, "calculateState", c()(() => {
      let {
        items: e,
        expandedFolders: t,
        isVisible: n,
        isUnread: r,
        isMentioned: i,
        reverse: l,
        onCalculate: a
      } = this.props, o = null, s = null, c = [];
      e.forEach(e => {
        "string" == typeof e ? c.push(e) : "object" == typeof e && null != e.folderId ? null != t && t.has(e.folderId) ? (c.push("folder:".concat(e.folderId)), e.guildIds.forEach(e => c.push(e))) : c.push(e.guildIds) : c.push(e.guildIds[0])
      });
      let u = e => {
          null == o && i(e, l, c) && (o = e), null == s && r(e, l, c) && (s = e)
        },
        d = l ? c.length - 1 : 0,
        f = c[d];
      for (; null != f;) {
        if ("string" == typeof f) {
          if (n(f, l, c)) break;
          u(f)
        } else {
          let e = false;
          for (let t of f) {
            if (n(t, l, c)) {
              e = true;
              break
            }
            u(t)
          }
          if (e) break
        }
        d += l ? false : 1, f = c[d]
      }
      null != a && a(o, s, l), this.setState({
        mention: o,
        unread: s
      })
    }, 200)), p(this, "handleClick", e => {
      e.preventDefault(), e.stopPropagation();
      let {
        unread: t,
        mention: n
      } = this.state, {
        onJumpTo: r
      } = this.props, i = null != n ? n : t;
      null != i && r(i, [n, t])
    })
  }
}
p(y, "contextType", Chunk481060.Sfi), p(y, "defaultProps", {
  className: Chunk491455.container,
  reverse: false,
  hide: false,
  animate: true
});
let O = y