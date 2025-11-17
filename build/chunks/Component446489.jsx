/** Chunk was on web.js **/
/** chunk id: 446489, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  y: () => m
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk748780 = require("./748780.js"),
  Chunk451478 = require("./451478.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var p = function(e) {
  return e[e.ABOVE = 0] = "ABOVE", e[e.VISIBLE = 1] = "VISIBLE", e[e.BELOW = 2] = "BELOW", e
}(p || {});

function h(e, t) {
  return {
    toValue: e,
    duration: null != t ? t : 300,
    easing: l.Z.Easing.inOut(l.Z.Easing.back())
  }
}

function m(e, t, n) {
  if (null != t) {
    let r = Math.ceil(Math.log10(e + 1));
    return null != n && n > 0 ? Math.min(r, n) * t : r * t
  }
}
class g extends(r = Chunk473749.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    let {
      prevValue: n,
      currValue: r,
      nextValue: i
    } = t;
    return null == n && r !== e.value ? {
      prevValue: c.Z.isFocused() ? r : null,
      currValue: e.value
    } : null != i && i !== e.value ? {
      nextValue: e.value
    } : null
  }
  componentDidUpdate(e, t) {
    let {
      prevValue: n,
      currValue: r
    } = this.state;
    n !== t.prevValue && null != n && this.animateBetween(n, r)
  }
  animateBetween(e, t) {
    let n, {
      forcePosition: r,
      animationSpeed: i
    } = this.props;
    this.prevAnimate.setValue(1), null != r ? 0 === r ? (this.currAnimate.setValue(0), n = 2) : 2 === r && (this.currAnimate.setValue(2), n = 0) : e > t ? (this.currAnimate.setValue(0), n = 2) : (this.currAnimate.setValue(2), n = 0), l.Z.parallel([l.Z.timing(this.prevAnimate, h(n, i)), l.Z.timing(this.currAnimate, h(1, i))]).start(this.animateNext)
  }
  getAnimatedStyle(e) {
    let {
      animationColor: t
    } = this.props;
    return d({
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
    return m(e, t, n)
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
      formatString: r
    } = this.props, a = s().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
    if (null == module) return (0, Chunk54381.jsx)("div", _(d({}, Chunk473749), {
      style: {
        color: require,
        minWidth: this.getMinWidth(exports)
      },
      children: null != r ? r(this.padValue(exports)) : this.padValue(exports)
    }));
    let o = Math.max(module, exports);
    return (0, Chunk54381.jsxs)("div", _(d({}, Chunk473749), {
      style: {
        color: require,
        position: "relative",
        overflow: "hidden"
      },
      children: [(0, Chunk54381.jsx)("div", {
        style: {
          visibility: "hidden",
          minWidth: this.getMinWidth(Chunk392711)
        },
        children: this.padValue(Chunk392711)
      }), (0, Chunk54381.jsx)(Chunk748780.Z.div, {
        style: d({
          color: require
        }, this.getAnimatedStyle(this.prevAnimate)),
        children: null != r ? r(this.padValue(module)) : this.padValue(module)
      }), (0, Chunk54381.jsx)(Chunk748780.Z.div, {
        style: d({
          color: require
        }, this.getAnimatedStyle(this.currAnimate)),
        children: null != r ? r(this.padValue(exports)) : this.padValue(exports)
      })]
    }))
  }
  constructor(e) {
    super(e), u(this, "prevAnimate", true), u(this, "currAnimate", true), u(this, "animateNext", () => {
      let {
        currValue: e,
        nextValue: t
      } = this.state;
      null != t ? this.setState({
        prevValue: c.Z.isFocused() ? e : null,
        currValue: t,
        nextValue: null
      }) : this.setState({
        prevValue: null
      })
    }), this.state = {
      prevValue: null,
      currValue: e.value,
      nextValue: null
    }, this.prevAnimate = new l.Z.Value(0), this.currAnimate = new l.Z.Value(1)
  }
}
u(g, "Positions", p)