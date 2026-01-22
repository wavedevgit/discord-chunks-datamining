/** Chunk was on web.js **/
/** chunk id: 544048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => b
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk941861 = require("./941861.js"),
  Chunk844222 = require("./844222.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk317534 = require("./317534.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class E extends(r = Chunk64700.PureComponent) {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: r,
      pause: i,
      isWindowFocused: a,
      useReducedMotion: s,
      rendererSettings: o
    } = this.props, [l, {
      default: c
    }] = await Promise.all([e(), Promise.resolve().then(n.t.bind(n, 883885, 23))]);
    null != this.animationRef && (this.animation = c.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: l,
      rendererSettings: o
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(t), (r && !a || i || s) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = true, null != this.animation && (this.animation.destroy(), this.animation = true)
  }
  componentDidUpdate(e) {
    var t, n, r;
    let {
      nextScene: i,
      pauseWhileUnfocused: a,
      pause: s,
      isWindowFocused: o,
      useReducedMotion: l
    } = this.props;
    i !== this.currentScene && this.shouldForcePlayAfter() && !s && this.playScene(i), null != this.animation && (a && !e.isWindowFocused && o && !l && true !== s ? this.animation.play() : (l || a && e.isWindowFocused && !o) && this.animation.pause()), !e.pause && s ? null == (t = this.animation) || t.pause() : !e.pause || s || l || null == (n = this.animation) || n.play(), e.nextScene !== i && s && (this.playScene(i), null == (r = this.animation) || r.pause())
  }
  shouldForcePlayAfter() {
    let {
      sceneSegments: e
    } = this.props;
    returntrue === e[this.currentScene].shouldForcePlayAfter
  }
  playScene(e) {
    if (this.isUnmounted) return;
    let {
      onScenePlay: t,
      sceneSegments: n,
      useReducedMotion: r
    } = this.props, i = n[e], a = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || i.BEG !== a.BEG || i.END !== a.END) && this.animation.playSegments([i.BEG, i.END], true), this.currentScene = e, null != t && t(this.currentScene), r) {
      var s;
      null == (s = this.animation) || s.pause()
    }
  }
  render() {
    return (0, i.jsx)("div", {
      ref: this.handleSetRef,
      className: o()(this.props.className, d.i)
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
  var t;
  let {
    componentRef: n,
    ignoreReducedMotion: r = false
  } = e, s = m(e, ["componentRef", "ignoreReducedMotion"]), {
    isWindowFocused: o
  } = (0, u.G9)(), d = (0, l.R)(), {
    reducedMotion: f
  } = a.useContext(c.C), _ = f.enabled && !r, g = h(p({}, s), {
    isWindowFocused: null != (t = null == o ? true : o()) ? t : d,
    useReducedMotion: _
  });
  return (0, i.jsx)(E, h(p({}, g), {
    ref: n
  }))
}