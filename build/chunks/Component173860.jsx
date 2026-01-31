/** Chunk was on 17534 **/
/** chunk id: 173860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./264879.js"), require("./896048.js"), require("./321073.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk111956 = require("./111956.js"),
  c = require.n(Chunk111956),
  Chunk615300 = require("./615300.js"),
  Chunk52133 = require("./52133.js"),
  Chunk397927 = require("./397927.js"),
  Chunk473134 = require("./473134.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
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
let m = {
  friction: 10,
  tension: 300
};
class b extends Chunk64700.Component {
  shouldComponentUpdate(e, t) {
    return !(0, d.A)(this.props, e, ["animate"]) || !(0, d.A)(this.state, t)
  }
  componentDidMount() {
    let {
      hide: e
    } = this.props;
    e ? this.state.translateY.setValue(1) : this.state.translateY.setValue(0)
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
    (null != this._timeout && clearTimeout(this._timeout), this.props.animate) ? this._timeout = setTimeout(() => {
      u.A.spring(e, f({
        toValue: 0
      }, m)).start()
    }, 100): e.setValue(0)
  }
  animateOut() {
    let {
      translateY: e
    } = this.state;
    (null != this._timeout && clearTimeout(this._timeout), this.props.animate) ? u.A.spring(e, f({
      toValue: 1
    }, m)).start(): e.setValue(1)
  }
  render() {
    let {
      className: e,
      text: t,
      hide: n,
      onClick: r
    } = this.props;
    return (0, l.jsx)(u.A.div, {
      className: a()(p.M0, e, {
        [p.R]: n
      }),
      onClick: r,
      style: this.getAnimatedStyle(),
      "aria-hidden": n,
      children: (0, l.jsx)("span", {
        className: p.Qq,
        children: t
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
        translateY: e.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", t ? "180%" : "-180%"]
        })
      }]
    }
  }
  constructor(e) {
    super(e), g(this, "_timeout", true), this.state = {
      translateY: new u.A.Value,
      reduceMotion: false
    }
  }
}
class A extends(r = Chunk64700.PureComponent) {
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
      reverse: i,
      className: s,
      barClassName: o,
      hide: c,
      animate: u
    } = this.props, {
      reducedMotion: d
    } = this.context;
    return (0, l.jsx)("div", {
      className: null != s ? s : true,
      children: (0, l.jsx)(b, {
        hide: true === c || null == e && null == t,
        className: a()(o, null != t ? p.lE : p.gy),
        text: null != t ? n : r,
        reverse: i,
        animate: u && !d.enabled,
        onClick: this.handleClick
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      unread: null,
      mention: null
    }), g(this, "calculateState", c()(() => {
      let {
        items: e,
        expandedFolders: t,
        isVisible: n,
        isUnread: r,
        isMentioned: l,
        reverse: i,
        onCalculate: s
      } = this.props, a = null, o = null, c = [];
      e.forEach(e => {
        "string" == typeof e ? c.push(e) : "object" == typeof e && null != e.folderId ? null != t && t.has(e.folderId) ? (c.push("folder:".concat(e.folderId)), e.guildIds.forEach(e => c.push(e))) : c.push(e.guildIds) : c.push(e.guildIds[0])
      });
      let u = e => {
          null == a && l(e, i, c) && (a = e), null == o && r(e, i, c) && (o = e)
        },
        d = i ? c.length - 1 : 0,
        h = c[d];
      for (; null != h;) {
        if ("string" == typeof h) {
          if (n(h, i, c)) break;
          u(h)
        } else {
          let e = false;
          for (let t of h) {
            if (n(t, i, c)) {
              e = true;
              break
            }
            u(t)
          }
          if (e) break
        }
        d += i ? false : 1, h = c[d]
      }
      null != s && s(a, o, i), this.setState({
        mention: a,
        unread: o
      })
    }, 200)), g(this, "handleClick", e => {
      e.preventDefault(), e.stopPropagation();
      let {
        unread: t,
        mention: n
      } = this.state, {
        onJumpTo: r
      } = this.props, l = null != n ? n : t;
      null != l && r(l, [n, t])
    })
  }
}
g(A, "contextType", Chunk397927.CZY), g(A, "defaultProps", {
  className: Chunk473134.kL,
  reverse: false,
  hide: false,
  animate: true
});
let y = A