/** Chunk was on web.js **/
/** chunk id: 719974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class h extends Chunk64700.Component {
  getDefaultAnimProps(e, t) {
    return {
      duration: null != e ? e : 300,
      progress: 0,
      last: Date.now(),
      intensity: null != t ? t : 5,
      lastDirection: false,
      frameCount: 0
    }
  }
  componentWillUnmount() {
    this._animationCleanup()
  }
  shake(e, t) {
    this.animProps = this.getDefaultAnimProps(e, t), this.state.shaking || this.setState({
      shaking: true
    }, this._animate)
  }
  stop() {
    this.state.shaking && this.setState({
      shaking: false
    })
  }
  _animationComplete() {
    this.setState({
      shaking: false
    }, this._animationCleanup)
  }
  render() {
    let e = this.props,
      {
        children: t
      } = e,
      n = p(e, ["children"]);
    return (0, r.jsx)("div", f(u({}, n), {
      ref: this.ref,
      children: t
    }))
  }
  constructor(e) {
    super(e), c(this, "animProps", true), c(this, "_animationFrame", true), c(this, "ref", i.createRef()), c(this, "_animate", () => {
      let {
        animProps: e
      } = this;
      if (!this.state.shaking || e.progress > e.duration || null == this.ref.current) return void this._animationComplete();
      let t = Date.now();
      if (e.progress += t - e.last, e.last = t, e.frameCount % 2 != 0) {
        let t = e.lastDirection * e.intensity,
          n = l().random(-e.intensity, e.intensity, true),
          r = Math.max(0, Math.cbrt(e.duration - e.progress / 1e3));
        e.intensity *= Math.min(1, r), e.lastDirection *= false, o()(null != this.ref.current, "Shakeable style set when not mounted"), this.ref.current.style.transform = "translate3d(".concat(t, "px,").concat(n, "px,0px)")
      }
      e.frameCount += 1, this._animationFrame = requestAnimationFrame(this._animate)
    }), c(this, "_animationCleanup", () => {
      null != this.ref.current && (this.ref.current.style.transform = ""), cancelAnimationFrame(this._animationFrame)
    }), this.state = {
      shaking: false
    }
  }
}