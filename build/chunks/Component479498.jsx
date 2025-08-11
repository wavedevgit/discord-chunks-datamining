/** Chunk was on web.js **/
/** chunk id: 479498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => b
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk451478 = require("./451478.js"),
  Chunk555712 = require("./555712.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class E extends(r = Chunk73800.PureComponent) {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: r,
      pause: i,
      isWindowFocused: o,
      useReducedMotion: a,
      rendererSettings: s
    } = this.props, [l, {
      default: c
    }] = await Promise.all([module(), Promise.resolve().then(require.t.bind(require, 500923, 23))]);
    null != this.animationRef && (this.animation = Chunk607070.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Chunk442837,
      rendererSettings: s
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(exports), (r && !Chunk73800 || Chunk255367 || Chunk120356) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = true, null != this.animation && (this.animation.destroy(), this.animation = true)
  }
  componentDidUpdate(e) {
    var t, n, r;
    let {
      nextScene: i,
      pauseWhileUnfocused: o,
      pause: a,
      isWindowFocused: s,
      useReducedMotion: l
    } = this.props;
    i !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(i), null != this.animation && (o && !e.isWindowFocused && s && !l && true !== a ? this.animation.play() : (l || o && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && a ? null == (t = this.animation) || t.pause() : !e.pause || a || l || null == (n = this.animation) || n.play(), e.nextScene !== i && a && (this.playScene(i), null == (r = this.animation) || r.pause())
  }
  shouldForcePlayAfter() {
    let {
      sceneSegments: e
    } = this.props;
    returntrue === module[this.currentScene].shouldForcePlayAfter
  }
  playScene(e) {
    if (this.isUnmounted) return;
    let {
      onScenePlay: t,
      sceneSegments: n,
      useReducedMotion: r
    } = this.props, i = n[e], o = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || i.BEG !== o.BEG || i.END !== o.END) && this.animation.playSegments([i.BEG, i.END], true), this.currentScene = e, null != t && t(this.currentScene), r) {
      var a;
      null == (a = this.animation) || a.pause()
    }
  }
  render() {
    return (0, Chunk255367.jsx)("div", {
      ref: this.handleSetRef,
      className: s()(this.props.className, Chunk555712.wrapper)
    })
  }
  constructor(...e) {
    super(...e), f(this, "animationRef", null), f(this, "animation", true), f(this, "currentScene", this.props.nextScene), f(this, "isUnmounted", false), f(this, "handleLoopComplete", () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }), f(this, "handleComplete", () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }), f(this, "handleEnterFrame", e => {
      let {
        onEnterFrame: t
      } = this.props;
      null == t || t(this.currentScene, e)
    }), f(this, "handleSetRef", e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    })
  }
}
f(E, "defaultProps", {
  pauseWhileUnfocused: true,
  pause: false
});
let b = e => {
  var {
    componentRef: t,
    ignoreReducedMotion: n = false
  } = e, r = m(e, ["componentRef", "ignoreReducedMotion"]);
  let o = (0, l.e7)([u.Z], () => u.Z.isFocused()),
    a = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
  return (0, i.jsx)(E, h(_({}, r), {
    isWindowFocused: o,
    useReducedMotion: a && !n,
    ref: t
  }))
}