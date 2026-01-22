/** Chunk was on web.js **/
/** chunk id: 604121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => u
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}
var c = function(e) {
  return e.SVG = "svg", e.CANVAS = "canvas", e
}(c || {});
class u extends(r = Chunk64700.Component) {
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
    super(...e), o(this, "animationRef", a.createRef()), o(this, "animation", true), o(this, "delayTimeout", new s.Ep), o(this, "loadAnimation", async () => {
      var e;
      let {
        importData: t,
        loop: r,
        autoplay: i,
        delay: a,
        renderer: s,
        rendererSettings: o,
        shouldAnimate: c
      } = this.props;
      null != this.animation && this.animation.destroy();
      let [u, {
        default: d
      }] = await Promise.all([t(), Promise.resolve().then(n.t.bind(n, 883885, 23))]);
      if (null == this.animationRef.current) return;
      let f = "object" == typeof u && null != u && "default" in u && "string" == typeof u.default ? {
        path: u.default
      } : {
        animationData: u
      };
      this.animation = d.loadAnimation(l({
        container: this.animationRef.current,
        renderer: s,
        loop: r,
        autoplay: i && null == a && c,
        rendererSettings: o
      }, f)), null != a ? this.delayTimeout.start(a, () => {
        var e;
        null == (e = this.animation) || e.play()
      }) : this.playOrPauseAnimation(), null == (e = this.animation) || e.addEventListener("complete", this.handleComplete)
    }), o(this, "handleComplete", () => {
      let {
        onComplete: e
      } = this.props;
      null != e && e()
    })
  }
}
o(u, "defaultProps", {
  loop: true,
  autoplay: true,
  renderer: "svg",
  shouldAnimate: true,
  resetOnPlay: false
}), o(u, "Renderers", c)