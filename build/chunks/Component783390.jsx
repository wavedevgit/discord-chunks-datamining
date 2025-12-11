/** Chunk was on web.js **/
/** chunk id: 783390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => b
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk150677 = require("./150677.js"),
  Chunk213305 = require("./213305.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk200981 = require("./200981.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class E extends(r = Chunk473749.PureComponent) {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: r,
      pause: i,
      isWindowFocused: a,
      useReducedMotion: o,
      rendererSettings: s
    } = this.props, [l, {
      default: c
    }] = await Promise.all([module(), Promise.resolve().then(require.t.bind(require, 500923, 23))]);
    null != this.animationRef && (this.animation = Chunk213305.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Chunk150677,
      rendererSettings: s
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(exports), (r && !Chunk473749 || Chunk54381 || Chunk120356) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = true, null != this.animation && (this.animation.destroy(), this.animation = true)
  }
  componentDidUpdate(e) {
    var t, n, r;
    let {
      nextScene: i,
      pauseWhileUnfocused: a,
      pause: o,
      isWindowFocused: s,
      useReducedMotion: l
    } = this.props;
    i !== this.currentScene && this.shouldForcePlayAfter() && !o && this.playScene(i), null != this.animation && (a && !e.isWindowFocused && s && !l && true !== o ? this.animation.play() : (l || a && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && o ? null == (t = this.animation) || t.pause() : !e.pause || o || l || null == (n = this.animation) || n.play(), e.nextScene !== i && o && (this.playScene(i), null == (r = this.animation) || r.pause())
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
    } = this.props, i = n[e], a = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || i.BEG !== a.BEG || i.END !== a.END) && this.animation.playSegments([i.BEG, i.END], true), this.currentScene = e, null != t && t(this.currentScene), r) {
      var o;
      null == (o = this.animation) || o.pause()
    }
  }
  render() {
    return (0, Chunk54381.jsx)("div", {
      ref: this.handleSetRef,
      className: s()(this.props.className, Chunk200981.wrapper)
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
  var t, {
      componentRef: n,
      ignoreReducedMotion: r = false
    } = e,
    o = h(e, ["componentRef", "ignoreReducedMotion"]);
  let {
    isWindowFocused: s
  } = (0, u.ZF)(), d = (0, l.C)(), {
    reducedMotion: f
  } = a.useContext(c.S), _ = f.enabled && !r, g = m(p({}, o), {
    isWindowFocused: null != (t = null == s ? true : s()) ? t : d,
    useReducedMotion: _
  });
  return (0, i.jsx)(E, m(p({}, g), {
    ref: n
  }))
}