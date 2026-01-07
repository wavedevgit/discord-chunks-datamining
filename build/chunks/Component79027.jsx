/** Chunk was on web.js **/
/** chunk id: 79027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => h
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk10874 = require("./10874.js");

function d(e, t, n) {
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
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {
  friction: 7,
  tension: 60
};
class h extends(r = Chunk473749.Component) {
  componentWillAppear(e) {
    this.animateTo(1).start(e)
  }
  componentWillEnter(e) {
    this.animateTo(1).start(e)
  }
  componentWillLeave(e) {
    let {
      reducedMotion: t
    } = this.context;
    t.enabled ? this.animateTo(0).start(e) : l.Z.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
  }
  animateTo(e) {
    return l.Z.spring(this.animation, _(f({}, m), {
      toValue: e
    }))
  }
  getAnimatedStyle() {
    let {
      reducedMotion: e
    } = this.context;
    return l.Z.accelerate({
      opacity: this.animation,
      transform: e.enabled ? true : [{
        translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["150%", "0%"]
        })
      }]
    })
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, i.jsx)(l.Z.div, {
      className: s()(e, u.slider),
      style: this.getAnimatedStyle(),
      children: t
    })
  }
  constructor(...e) {
    super(...e), d(this, "animation", new l.Z.Value(0))
  }
}
d(h, "contextType", Chunk481060.Sfi)