/** Chunk was on 38626 **/
/** chunk id: 446489, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  y: () => g
});
var i, r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk748780 = require("./748780.js"),
  Chunk451478 = require("./451478.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var m = ((i = m || {})[i.ABOVE = 0] = "ABOVE", i[i.VISIBLE = 1] = "VISIBLE", i[i.BELOW = 2] = "BELOW", i);

function f(e, t) {
  return {
    toValue: e,
    duration: null != t ? t : 300,
    easing: c.Z.Easing.inOut(c.Z.Easing.back())
  }
}

function g(e, t, n) {
  if (null != t) {
    let i = Math.ceil(Math.log10(e + 1));
    return null != n && n > 0 ? Math.min(i, n) * t : i * t
  }
}
class b extends(r = Chunk647438.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    let {
      prevValue: n,
      currValue: i,
      nextValue: r
    } = t;
    return null == n && i !== e.value ? {
      prevValue: u.Z.isFocused() ? i : null,
      currValue: e.value
    } : null != r && r !== e.value ? {
      nextValue: e.value
    } : null
  }
  componentDidUpdate(e, t) {
    let {
      prevValue: n,
      currValue: i
    } = this.state;
    n !== t.prevValue && null != n && this.animateBetween(n, i)
  }
  animateBetween(e, t) {
    let n, {
      forcePosition: i,
      animationSpeed: r
    } = this.props;
    this.prevAnimate.setValue(1), null != i ? 0 === i ? (this.currAnimate.setValue(0), n = 2) : 2 === i && (this.currAnimate.setValue(2), n = 0) : e > t ? (this.currAnimate.setValue(0), n = 2) : (this.currAnimate.setValue(2), n = 0), c.Z.parallel([c.Z.timing(this.prevAnimate, f(n, r)), c.Z.timing(this.currAnimate, f(1, r))]).start(this.animateNext)
  }
  getAnimatedStyle(e) {
    let {
      animationColor: t
    } = this.props;
    return h({
      transform: [{
        translateY: e.interpolate({
          inputRange: [0, 1, 2],
          outputRange: ["-100%", "0%", "100%"]
        })
      }],
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }, null != t && {
      color: t
    })
  }
  getMinWidth(e) {
    let {
      digitWidth: t,
      padStartLength: n
    } = this.props;
    return g(e, t, n)
  }
  padValue(e) {
    let {
      padStartLength: t
    } = this.props;
    return null != t ? String(e).padStart(t, "0") : e
  }
  render() {
    let {
      prevValue: e,
      currValue: t
    } = this.state, {
      color: n,
      formatString: i
    } = this.props, r = s().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
    if (null == module) return (0, Chunk951288.jsx)("div", p(h({}, r), {
      style: {
        color: require,
        minWidth: this.getMinWidth(exports)
      },
      children: null != i ? i(this.padValue(exports)) : this.padValue(exports)
    }));
    let o = Math.max(module, exports);
    return (0, Chunk951288.jsxs)("div", p(h({}, r), {
      style: {
        color: require,
        position: "relative",
        overflow: "hidden"
      },
      children: [(0, Chunk951288.jsx)("div", {
        style: {
          visibility: "hidden",
          minWidth: this.getMinWidth(Chunk647438)
        },
        children: this.padValue(Chunk647438)
      }), (0, Chunk951288.jsx)(Chunk748780.Z.div, {
        style: h({
          color: require
        }, this.getAnimatedStyle(this.prevAnimate)),
        children: null != i ? i(this.padValue(module)) : this.padValue(module)
      }), (0, Chunk951288.jsx)(Chunk748780.Z.div, {
        style: h({
          color: require
        }, this.getAnimatedStyle(this.currAnimate)),
        children: null != i ? i(this.padValue(exports)) : this.padValue(exports)
      })]
    }))
  }
  constructor(e) {
    super(e), d(this, "prevAnimate", true), d(this, "currAnimate", true), d(this, "animateNext", () => {
      let {
        currValue: e,
        nextValue: t
      } = this.state;
      null != t ? this.setState({
        prevValue: u.Z.isFocused() ? e : null,
        currValue: t,
        nextValue: null
      }) : this.setState({
        prevValue: null
      })
    }), this.state = {
      prevValue: null,
      currValue: e.value,
      nextValue: null
    }, this.prevAnimate = new c.Z.Value(0), this.currAnimate = new c.Z.Value(1)
  }
}
d(b, "Positions", m)