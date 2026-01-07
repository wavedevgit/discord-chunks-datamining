/** Chunk was on web.js **/
/** chunk id: 775030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
var c = function(e) {
  return e.SVG = "svg", e.CANVAS = "canvas", e
}(c || {});
class u extends(r = Chunk473749.Component) {
  componentDidMount() {
    null != this.props.versionKey && this.props.versionKey < 0 || this.loadAnimation()
  }
  componentDidUpdate(e) {
    null != this.props.versionKey && this.props.versionKey < 0 || (null != this.props.versionKey && null != e.versionKey && this.props.versionKey > e.versionKey ? this.loadAnimation() : this.playOrPauseAnimation(e))
  }
  componentWillUnmount() {
    null != this.animation && (this.animation.stop(), this.animation.destroy(), this.animation = null), this.delayTimeout.stop()
  }
  playOrPauseAnimation(e) {
    null != this.animation && (this.props.shouldAnimate && (null == e || !e.shouldAnimate) ? this.props.resetOnPlay ? this.animation.goToAndPlay(0) : this.animation.play() : !this.props.shouldAnimate && (null == e || e.shouldAnimate) && (this.animation.pause(), null != this.props.pauseAtFrame && this.animation.goToAndStop(this.props.pauseAtFrame, true)))
  }
  render() {
    return (0, i.jsx)("div", {
      className: this.props.className,
      ref: this.animationRef
    })
  }
  constructor(...e) {
    super(...e), s(this, "animationRef", a.createRef()), s(this, "animation", true), s(this, "delayTimeout", new o.V7), s(this, "loadAnimation", async () => {
      var e;
      let {
        importData: t,
        loop: r,
        autoplay: i,
        delay: a,
        renderer: o,
        rendererSettings: s,
        shouldAnimate: c
      } = this.props;
      null != this.animation && this.animation.destroy();
      let [u, {
        default: d
      }] = await Promise.all([t(), Promise.resolve().then(n.t.bind(n, 500923, 23))]);
      if (null == this.animationRef.current) return;
      let f = "object" == typeof u && null != u && "default" in u && "string" == typeof u.default ? {
        path: u.default
      } : {
        animationData: u
      };
      this.animation = d.loadAnimation(l({
        container: this.animationRef.current,
        renderer: o,
        loop: r,
        autoplay: i && null == a && c,
        rendererSettings: s
      }, f)), null != a ? this.delayTimeout.start(a, () => {
        var e;
        null == (e = this.animation) || e.play()
      }) : this.playOrPauseAnimation(), null == (e = this.animation) || e.addEventListener("complete", this.handleComplete)
    }), s(this, "handleComplete", () => {
      let {
        onComplete: e
      } = this.props;
      null != e && e()
    })
  }
}
s(u, "defaultProps", {
  loop: true,
  autoplay: true,
  renderer: "svg",
  shouldAnimate: true,
  resetOnPlay: false
}), s(u, "Renderers", c)