/** Chunk was on web.js **/
/** chunk id: 640108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => $,
  yv: () => H
}), require("./539854.js"), require("./388685.js");
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk748780 = require("./748780.js"),
  Chunk374470 = require("./374470.js"),
  Chunk283693 = require("./283693.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk167080 = require("./167080.jsx"),
  Chunk818083 = require("./818083.js"),
  Chunk268353 = require("./268353.jsx"),
  Chunk866960 = require("./866960.js"),
  Chunk181058 = require("./181058.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk36703 = require("./36703.js"),
  Chunk228488 = require("./228488.js"),
  Chunk540026 = require("./540026.jsx"),
  Chunk455813 = require("./455813.jsx"),
  Chunk283756 = require("./283756.jsx"),
  Chunk793148 = require("./793148.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk55343 = require("./55343.js"),
  Chunk149715 = require("./149715.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = 3e3,
  G = 1e3,
  B = "-:--",
  Z = {
    friction: 14,
    tension: 200
  },
  F = {
    VIDEO: "VIDEO",
    AUDIO: "AUDIO"
  },
  V = {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  };

function H(e) {
  let t = 0 | e,
    n = t % 60;
  return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
}

function Y(e) {
  let t = [],
    {
      duration: n
    } = e;
  for (let r = 0; r < e.buffered.length; r++) {
    let i = e.buffered.start(r),
      a = e.buffered.end(r);
    if (a - i < 1) continue;
    let o = (a - i) / n,
      s = i / n;
    t.push([s, o])
  }
  return t
}
let W = e => {
  let {
    current: t,
    duration: n
  } = e, r = null != t ? H(t) : B, i = null != n ? H(n) : B;
  return r = r.padStart(i.length, "0"), (0, a.jsxs)("div", {
    className: D.durationTimeWrapper,
    children: [(0, a.jsx)("span", {
      className: D.durationTimeDisplay,
      children: r
    }), (0, a.jsx)("span", {
      className: D.durationTimeSeparator,
      children: "/"
    }), (0, a.jsx)("span", {
      className: D.durationTimeDisplay,
      children: i
    })]
  })
};
class K extends(r = Chunk647438.Component) {
  componentDidMount() {
    this.state.translateY.setValue(+!!this.props.autoPlay)
  }
  componentDidUpdate(e) {
    var t, n, r, i, a;
    let {
      hide: o,
      playing: s
    } = this.props;
    o && !e.hide ? (this.animateControls(1, s), null == (t = this.volumeButton) || t.blur(), null == (n = (r = this.props).onControlsHide) || n.call(r)) : !o && e.hide && (this.animateControls(0, s), null == (i = (a = this.props).onControlsShow) || i.call(a))
  }
  updateProgress(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      {
        durationBar: n
      } = this;
    null != n && n.setGrabber(e, t)
  }
  animateControls(e, t) {
    let {
      translateY: n
    } = this.state;
    t ? d.Z.spring(n, M({
      toValue: e
    }, Z)).start() : n.setValue(e)
  }
  getAnimatedStyle() {
    let {
      translateY: e
    } = this.state;
    return {
      transform: [{
        translateY: module.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "100%"]
        })
      }]
    }
  }
  renderPlayIcon() {
    let {
      playing: e,
      currentTime: t,
      duration: n,
      onPause: r,
      onPlay: i,
      disabled: o
    } = this.props;
    return module ? (0, Chunk951288.jsx)(Chunk481060.P3F, {
      className: Chunk55343.videoButton,
      onClick: r,
      tabIndex: Chunk647438 ? false : 0,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.ZcgDJX),
      children: (0, Chunk951288.jsx)(Chunk481060.fpf, {
        size: "xs",
        color: "currentColor",
        className: Chunk55343.controlIcon
      }, "pause")
    }) : null != exports && exports === require ? (0, Chunk951288.jsx)(Chunk481060.P3F, {
      className: Chunk55343.videoButton,
      onClick: i,
      tabIndex: Chunk647438 ? false : 0,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.hsvh0i),
      children: (0, Chunk951288.jsx)(Chunk181058.Z, {
        className: Chunk55343.controlIcon
      }, "replay")
    }) : (0, Chunk951288.jsx)(Chunk481060.P3F, {
      className: Chunk55343.videoButton,
      onClick: i,
      tabIndex: Chunk647438 ? false : 0,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.RscU7I),
      children: (0, Chunk951288.jsx)(Chunk481060.o1U, {
        size: "xs",
        color: "currentColor",
        className: Chunk55343.controlIcon
      }, "play")
    })
  }
  render() {
    let {
      buffers: e,
      children: t,
      currentTime: n,
      duration: r,
      muted: i,
      onDrag: o,
      onDragEnd: s,
      onDragStart: l,
      onToggleMuted: c,
      onVolumeShow: u,
      onVolumeHide: f,
      width: _,
      volume: p,
      type: h
    } = this.props, m = "string" == typeof Chunk283693 || Chunk283693 > 250;
    return (0, Chunk951288.jsxs)(Chunk748780.Z.div, {
      className: Chunk70097 === F.VIDEO ? Chunk55343.videoControls : Chunk55343.audioControls,
      onClick: e => e.stopPropagation(),
      onDoubleClick: e => e.stopPropagation(),
      style: this.getAnimatedStyle(),
      children: [this.renderPlayIcon(), Chunk167080 ? (0, Chunk951288.jsx)(W, {
        current: require,
        duration: r
      }) : null, (0, Chunk951288.jsx)(Chunk540026.Z, {
        buffers: module,
        value: null != r ? r : 0,
        onDrag: Chunk647438,
        onDragEnd: Chunk120356,
        onDragStart: l,
        type: Chunk540026.Z.Types.DURATION,
        ref: this.setDurationRef
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk149715.flex,
        children: (0, Chunk951288.jsx)(Chunk793148.Z, {
          ref: this.setVolumeButtonRef,
          muted: i,
          value: Chunk481060,
          minValue: 0,
          maxValue: 1,
          currentWindow: window,
          onValueChange: e => o(e, S.Z.Types.VOLUME),
          onToggleMute: Chunk392711,
          onVolumeShow: u,
          onVolumeHide: Chunk374470,
          iconClassName: Chunk55343.controlIcon,
          iconColor: "currentColor",
          sliderWrapperClassName: Chunk55343.volumeSliderWrapper
        })
      }), exports]
    })
  }
  constructor(...e) {
    super(...e), L(this, "state", {
      translateY: new d.Z.Value(0)
    }), L(this, "volumeButton", true), L(this, "durationBar", true), L(this, "setDurationRef", e => {
      this.durationBar = e
    }), L(this, "setVolumeButtonRef", e => {
      this.volumeButton = e
    })
  }
}

function z(e) {
  let {
    fileName: t,
    fileSize: n,
    src: r,
    disabled: i,
    mimeType: o,
    hideDownloadButton: s
  } = e;
  return (0, a.jsxs)("div", {
    className: D.audioMetadata,
    children: [(0, a.jsxs)("div", {
      className: D.metadataContent,
      children: [i ? t : (0, a.jsx)(m.Z, {
        href: r,
        className: D.metadataDownload,
        iconClassName: D.metadataIcon,
        mimeType: o,
        fileName: t
      }), (0, a.jsx)("div", {
        className: D.metadataSize,
        children: n
      })]
    }), !s && (0, a.jsx)(m.Z, {
      href: r,
      className: D.metadataDownload,
      iconClassName: D.metadataIcon,
      mimeType: o
    })]
  })
}
L(K, "defaultProps", {
  disabled: false
});
class q extends Chunk647438.Component {
  pop() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    this.setState({
      play: module
    }, this.popAnimation)
  }
  getAnimatedStyle() {
    let {
      opacity: e,
      scale: t
    } = this.state;
    return Chunk748780.Z.accelerate({
      opacity: module.interpolate({
        inputRange: [0, 1],
        outputRange: [0, .8]
      }),
      transform: [{
        scale: exports.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2]
        })
      }]
    })
  }
  render() {
    let {
      play: e
    } = this.state, t = module ? Chunk481060.o1U : Chunk481060.fpf;
    return (0, Chunk951288.jsx)(Chunk748780.Z.div, {
      className: Chunk55343.playPausePop,
      style: this.getAnimatedStyle(),
      children: (0, Chunk951288.jsx)(exports, {
        className: Chunk55343.playPausePopIcon
      })
    })
  }
  constructor(...e) {
    super(...e), L(this, "state", {
      play: false,
      scale: new d.Z.Value(0),
      opacity: new d.Z.Value(0)
    }), L(this, "popAnimation", () => {
      let {
        opacity: e,
        scale: t
      } = this.state;
      t.setValue(0), e.setValue(0), d.Z.parallel([d.Z.sequence([d.Z.timing(e, {
        toValue: 1,
        duration: 200
      }), d.Z.timing(e, {
        toValue: 0,
        duration: 200
      })]), d.Z.spring(t, j(M({
        toValue: 1.5
      }, Z), {
        friction: 80
      }))]).start()
    })
  }
}
let X = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-03_media_play_metrics",
  label: "Media play metrics User Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Send metrics",
    config: {
      enabled: true
    }
  }]
});
class Q {
  moveToState(e) {
    this.stateTime = performance.now(), this.currentState = e
  }
  timeInState() {
    return performance.now() - this.stateTime
  }
  sendEvent() {
    this.analyticsEnabled && (null == this.errorCode && null == this.errorMessage && false === this.metadata.hasValidFrame && (this.errorCode = 4, this.errorMessage = "No valid video frames detected - codec may be unsupported"), Chunk626135.default.track(Chunk981631.rMx.MEDIA_PLAY_FINISHED, {
      play_time_sec: this.playTimeSec,
      play_wall_time_ms: this.playWallTimeMs,
      first_play_waiting_ms: this.firstPlayWaitingMs,
      stall_count: this.stallCount,
      stall_ms: this.stallMs,
      seek_count: this.seekCount,
      seek_waiting_ms: this.seekWaitingMs,
      media_source: this.metadata.src,
      mime_type: this.metadata.mimeType,
      file_size: this.metadata.fileSize,
      file_duration_sec: this.metadata.fileDurationSec,
      connection_type: Chunk866960.Z.getType(),
      effective_connection_speed: Chunk866960.Z.getEffectiveConnectionSpeed(),
      service_provider: Chunk866960.Z.getServiceProvider(),
      error_message: this.errorMessage,
      error_code: this.errorCode
    })), this.playTimeSec = 0, this.playWallTimeMs = 0, this.firstPlayWaitingMs = 0, this.stallCount = 0, this.stallMs = 0, this.seekCount = 0, this.seekWaitingMs = 0, this.playbackStartTime = true, this.lastPlayingTime = true, this.moveToState("not_started")
  }
  updatePlayTime(e) {
    var t, n;
    this.playTimeSec += Math.max((null != (t = this.lastPlayingTime) ? t : e) - (null != (n = this.playbackStartTime) ? n : 0), 0), this.playWallTimeMs += this.timeInState()
  }
  constructor(e) {
    L(this, "metadata", true), L(this, "playTimeSec", 0), L(this, "playWallTimeMs", 0), L(this, "firstPlayWaitingMs", 0), L(this, "stallCount", 0), L(this, "stallMs", 0), L(this, "seekCount", 0), L(this, "seekWaitingMs", 0), L(this, "errorMessage", null), L(this, "errorCode", null), L(this, "stateTime", performance.now()), L(this, "currentState", "not_started"), L(this, "playbackStartTime", true), L(this, "lastPlayingTime", true), L(this, "analyticsEnabled", true), L(this, "onWaiting", e => {
      switch (this.currentState) {
        case "not_started":
          this.moveToState("not_started_waiting");
          break;
        case "playing":
          this.updatePlayTime(e.currentTarget.currentTime), this.stallCount += 1, this.moveToState("stalled");
          break;
        case "seeking":
        case "not_started_waiting":
        case "stalled":
          break;
        case "paused":
        case "seeked":
          this.moveToState("stalled");
          break;
        default:
          (0, _.UT)(this.currentState)
      }
    }), L(this, "onSeeking", e => {
      switch (this.currentState) {
        case "seeking":
        case "seeked":
          this.moveToState("seeking");
          return;
        case "stalled":
          this.stallMs += this.timeInState();
          break;
        case "playing":
          this.updatePlayTime(e.currentTarget.currentTime);
          break;
        case "not_started":
        case "not_started_waiting":
        case "paused":
          break;
        default:
          (0, _.UT)(this.currentState)
      }
      this.seekCount += 1, this.moveToState("seeking")
    }), L(this, "onSeeked", e => {
      switch (this.currentState) {
        case "seeking":
        case "seeked":
          let t = this.stateTime;
          this.moveToState("seeked"), this.stateTime = t;
          break;
        case "not_started":
        case "not_started_waiting":
        case "stalled":
        case "playing":
        case "paused":
          break;
        default:
          (0, _.UT)(this.currentState)
      }
    }), L(this, "onPause", e => {
      switch (this.currentState) {
        case "playing":
          this.updatePlayTime(e.currentTarget.currentTime), this.moveToState("paused"), this.sendEvent();
          break;
        case "stalled":
          this.stallMs += this.timeInState(), this.moveToState("paused"), this.sendEvent();
          break;
        case "not_started":
        case "not_started_waiting":
        case "paused":
        case "seeking":
          break;
        case "seeked":
          this.seekWaitingMs += this.timeInState(), this.seekCount += 1;
          break;
        default:
          (0, _.UT)(this.currentState)
      }
    }), L(this, "onError", e => {
      this.moveToState("paused"), this.sendEvent()
    }), L(this, "onPlaying", e => {
      switch (this.currentState) {
        case "playing":
          return;
        case "not_started":
          this.firstPlayWaitingMs = 0;
          break;
        case "not_started_waiting":
          this.firstPlayWaitingMs = this.timeInState();
          break;
        case "stalled":
          this.stallMs += this.timeInState();
          break;
        case "seeked":
          this.seekWaitingMs += this.timeInState();
          break;
        case "paused":
        case "seeking":
          break;
        default:
          (0, _.UT)(this.currentState)
      }
      this.playbackStartTime = e.currentTarget.currentTime, this.moveToState("playing")
    }), L(this, "onTimeUpdate", e => {
      switch (this.currentState) {
        case "playing":
          this.lastPlayingTime = e.currentTarget.currentTime;
          return;
        case "not_started":
        case "not_started_waiting":
        case "stalled":
        case "seeked":
        case "paused":
        case "seeking":
          break;
        default:
          (0, _.UT)(this.currentState)
      }
    }), L(this, "onDragStart", e => {
      null != e && (this.lastPlayingTime = e)
    }), L(this, "onLoadedMetadata", e => {
      this.metadata.fileDurationSec = e.currentTarget.duration
    }), this.metadata = e, this.analyticsEnabled = X.getCurrentConfig({
      location: "media_player"
    }).enabled
  }
}
class J extends(i = Chunk647438.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    return !e.playable && t.playing ? {
      playing: false,
      hideControls: false
    } : null
  }
  componentDidMount() {
    let {
      playing: e,
      muted: t,
      volume: n
    } = this.state, {
      current: r
    } = this.mediaRef;
    null != r && (exports && (r.muted = exports), module && (this.play(true), this.handleUIUpdate()), r.volume = require)
  }
  componentDidUpdate(e, t) {
    let {
      props: {
        onPause: n,
        onVolumeChange: r,
        onMute: i
      },
      state: {
        playing: a,
        fullscreen: o,
        muted: s,
        dragging: l,
        volume: c
      }
    } = this, {
      current: u
    } = this.mediaRef, {
      current: d
    } = this.playPausePopRef;
    if (null == u) return;
    a && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == d || d.pop(a))) : !a && t.playing && (u.pause(), null == d || d.pop(a), null == n || n()), a && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
    let f = (0, T.fn)(u.parentNode, u);
    o && !t.fullscreen && null != f ? ((0, T.Dj)(f), f.addEventListener(T.NO, this.handleFullScreenExit)) : !o && t.fullscreen && null != f && (f.removeEventListener(T.NO, this.handleFullScreenExit), (0, T.Pr)(f, f.ownerDocument)), l === S.Z.Types.DURATION && t.dragging !== S.Z.Types.DURATION && a ? u.pause() : l !== S.Z.Types.DURATION && t.dragging === S.Z.Types.DURATION && a && u.play(), s !== t.muted && (u.muted = s, null == i || i(s)), c !== t.volume && (u.volume = c, null == r || r(c))
  }
  componentWillUnmount() {
    this._unmounted = true;
    let {
      current: e
    } = this.mediaRef;
    if (null == module) return;
    let t = (0, Chunk228488.fn)(module.parentNode, module);
    null != exports && (exports.removeEventListener(Chunk228488.NO, this.handleFullScreenExit), (0, Chunk228488.Pr)(exports))
  }
  play() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      {
        onPlay: t,
        volume: n,
        autoMute: r
      } = this.props,
      {
        current: i
      } = this.mediaRef;
    if (null != i) {
      let a = {};
      if ("function" == typeof require) {
        let e = require();
        module !== this.state.volume && (i.volume = module, Chunk951288.volume = module)
      }
      if ("function" == typeof r) {
        let e = r();
        module !== this.state.muted && (i.muted = module, Chunk951288.muted = module)
      }
      this.setState(Chunk951288), i.play(), null == exports || exports(module, i.currentTime * Chunk70956.Z.Millis.SECOND, i.duration * Chunk70956.Z.Millis.SECOND)
    }
  }
  getWidth() {
    let {
      width: e
    } = this.props;
    return "100%" === module ? module : Math.max(module, J.minWidth)
  }
  getHeight() {
    let {
      height: e
    } = this.props;
    return "100%" === module ? module : Math.max(module, J.minHeight)
  }
  updateValue(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      {
        current: n
      } = this.controlsRef;
    null != n && n.updateProgress(e, t)
  }
  updateTime(e, t) {
    let n = 0 | e,
      r = 0 | t;
    (this.state.currentTime !== n || this.state.duration !== r) && this.setState({
      currentTime: n,
      duration: r
    })
  }
  updateControlsVisibility() {
    let {
      dragging: e,
      fullscreen: t
    } = this.state, n = exports ? G : U, r = Math.max(0, Date.now() - this._lastMove) > require;
    r !== this.state.hideControls && null == module && this.setState({
      hideControls: r
    })
  }
  renderVideo() {
    let {
      alt: e,
      src: t,
      poster: n,
      forceExternal: r,
      responsive: i,
      mediaLayoutType: o
    } = this.props, {
      playing: s,
      fullscreen: l
    } = this.state, c = this.getWidth(), u = this.getHeight();
    return r ? (0, Chunk951288.jsx)(Chunk70097.Z, {
      alt: module,
      className: Chunk55343.video,
      controls: false,
      height: u,
      poster: require,
      width: Chunk392711,
      responsive: i && !l,
      mediaLayoutType: Chunk647438,
      playsInline: true,
      autoPlay: Chunk120356
    }) : (0, Chunk951288.jsx)(Chunk70097.Z, {
      alt: module,
      className: Chunk55343.video,
      controls: false,
      playsInline: true,
      autoPlay: Chunk120356,
      height: u,
      responsive: i && !l,
      mediaLayoutType: l ? Chunk217702.hV.STATIC : Chunk647438,
      onClick: this.handleVideoClick,
      onEnded: this.handleEnded,
      onError: this.handleError,
      onWaiting: this._analytics.onWaiting,
      onSeeking: this._analytics.onSeeking,
      onSeeked: this._analytics.onSeeked,
      onPause: this._analytics.onPause,
      onPlaying: this._analytics.onPlaying,
      onTimeUpdate: this._analytics.onTimeUpdate,
      onLoadedMetadata: this.handleLoaded,
      onProgress: this.handleBuffer,
      poster: require,
      preload: this.state.preload,
      ref: this.mediaRef,
      width: Chunk392711,
      src: exports
    })
  }
  renderAudio() {
    return (0, Chunk951288.jsx)("audio", {
      className: Chunk55343.audio,
      controls: false,
      onClick: this.handleVideoClick,
      onEnded: this.handleEnded,
      onLoadedMetadata: this.handleLoaded,
      onProgress: this.handleBuffer,
      preload: this.state.preload,
      ref: this.mediaRef,
      children: (0, Chunk951288.jsx)("source", {
        src: this.props.src
      })
    })
  }
  renderControls() {
    let {
      current: e
    } = this.mediaRef, {
      props: {
        type: t,
        autoPlay: n,
        playable: r = true,
        onVolumeShow: i,
        onVolumeHide: o,
        onControlsHide: s,
        onControlsShow: l
      },
      state: {
        buffers: c,
        currentTime: u,
        duration: d,
        hasClickedPlay: f,
        hideControls: _,
        muted: p,
        playing: h,
        fullscreen: m,
        volume: g,
        dragging: b
      }
    } = this, y = this.getWidth();
    return Chunk374470 || require || exports === F.AUDIO ? (0, Chunk951288.jsx)(K, {
      buffers: Chunk392711,
      currentTime: u,
      duration: Chunk748780,
      volume: (0, Chunk36703.P)(Chunk818083, 1),
      hide: exports === F.VIDEO && Chunk283693,
      muted: Chunk481060,
      autoPlay: require,
      onDrag: this.handleDrag,
      onDragEnd: this.handleDragEnd,
      onDragStart: this.handleDragStart,
      onPause: () => this.setPlay(false),
      onPlay: () => this.setPlay(true),
      onToggleMuted: this.toggleMuted,
      onVolumeShow: i,
      onVolumeHide: Chunk647438,
      onControlsShow: l,
      onControlsHide: Chunk120356,
      playing: Chunk70097,
      dragging: Chunk866960,
      type: exports,
      ref: this.controlsRef,
      width: Chunk167080 ? window.screen.width : Chunk181058,
      disabled: !r,
      children: exports === F.VIDEO ? (0, Chunk951288.jsx)(Chunk268353.Z, {
        "aria-label": Chunk388032.intl.string(Chunk388032.t["2nM3Pk"]),
        className: Chunk55343.videoButton,
        iconClassName: Chunk55343.controlIcon,
        guestWindow: window,
        onClick: this.toggleFullscreen,
        node: (0, Chunk228488.fn)(null == module ? true : module.parentNode, module)
      }) : null
    }) : (0, Chunk951288.jsx)(Chunk455813.Z, {
      onPlay: this.handleVideoClick,
      inactive: !r
    })
  }
  renderMetadata() {
    let {
      fileName: e,
      fileSize: t,
      src: n,
      type: r,
      playable: i,
      mimeType: o
    } = this.props;
    return null == module || null == exports ? null : r === F.AUDIO ? (0, Chunk951288.jsx)(z, {
      fileName: module,
      fileSize: exports,
      src: require,
      disabled: !i,
      mimeType: Chunk647438,
      hideDownloadButton: true
    }) : null
  }
  renderPlayPausePop() {
    return (0, Chunk951288.jsx)(q, {
      ref: this.playPausePopRef
    })
  }
  getMediaStyle() {
    let {
      responsive: e,
      type: t,
      height: n
    } = this.props, {
      fullscreen: r
    } = this.state, i = this.getWidth();
    return r ? V : exports === F.AUDIO ? {
      width: true,
      height: "auto"
    } : module ? true : {
      width: i,
      height: require
    }
  }
  render() {
    let {
      height: e,
      type: t,
      src: n,
      forceExternal: r,
      className: i,
      renderLinkComponent: o,
      responsive: s,
      mediaLayoutType: c,
      renderOverlayContent: u
    } = this.props, {
      fullscreen: d,
      hideControls: f,
      playing: _
    } = this.state, h = Chunk55343.wrapperPaused;
    if (exports === F.AUDIO ? h = Chunk55343.wrapperAudio : Chunk374470 ? h = Chunk55343.wrapperControlsHidden : Chunk283693 && (h = Chunk55343.wrapperPlaying), r && exports === F.VIDEO) {
      let t = this.getWidth();
      return (0, Chunk951288.jsxs)("div", {
        className: l()(Chunk70097, {
          [Chunk55343.wrapperMediaMosaic]: Chunk392711 === Chunk217702.hV.MOSAIC
        }),
        style: Chunk120356 ? true : {
          width: exports,
          height: module
        },
        onKeyDown: this.handleKeyDown,
        tabIndex: 0,
        children: [this.renderMetadata(), this.renderVideo(), (0, Chunk951288.jsx)("div", {
          className: Chunk55343.playCenter,
          children: (0, Chunk951288.jsx)(Chunk283756.Z, {
            className: Chunk55343.__invalid_playButton,
            externalURL: require,
            renderLinkComponent: Chunk647438
          })
        })]
      })
    }
    return (0, Chunk951288.jsxs)("div", {
      className: l()(Chunk70097, Chunk55343.newMosaicStyle, i, {
        [Chunk55343.wrapperMediaMosaic]: Chunk392711 === Chunk217702.hV.MOSAIC
      }),
      "data-fullscreen": Chunk748780,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseMove: Chunk283693 ? this.handleMouseMove : true,
      onKeyDown: this.handleKeyDown,
      tabIndex: 0,
      style: this.getMediaStyle(),
      children: [this.renderMetadata(), exports === F.AUDIO ? this.renderAudio() : this.renderVideo(), (0, Chunk951288.jsx)(Chunk481060.f6W, {
        theme: Chunk981631.BRd.MIDNIGHT,
        children: e => (0, a.jsx)("div", {
          className: e,
          children: this.renderControls()
        })
      }), exports === F.VIDEO ? this.renderPlayPausePop() : null, null != u ? (0, Chunk951288.jsx)("div", {
        className: l()({
          [Chunk55343.overlayContentHidden]: Chunk283693 || Chunk748780
        }),
        children: u()
      }) : null]
    })
  }
  checkVideoDecodability() {
    let {
      current: e
    } = this.mediaRef;
    if (null == module || !(0, Chunk374470.kK)(module, HTMLVideoElement)) return;
    if (this.props.type !== F.VIDEO) {
      this._analytics.metadata.hasValidFrame = true;
      return
    }
    if (null != this._analytics.metadata.hasValidFrame) return;
    let t = module.videoHeight,
      n = module.currentTime,
      r = module.readyState;
    if (0 === exports && r >= 2) return void setTimeout(() => {
      if (null == module) return;
      let t = module.videoHeight,
        r = module.currentTime;
      if (0 === exports && r > require + .5) {
        this._analytics.metadata.hasValidFrame = false;
        return
      }
      if (exports > 0) {
        this._analytics.metadata.hasValidFrame = true;
        return
      }
    }, 1500);
    if (exports > 0) {
      this._analytics.metadata.hasValidFrame = true;
      return
    }
  }
  constructor(e) {
    var t, n;
    super(e), t = this, L(this, "_unmounted", false), L(this, "_lastMove", 0), L(this, "_analytics", true), L(this, "mediaRef", o.createRef()), L(this, "controlsRef", o.createRef()), L(this, "playPausePopRef", o.createRef()), L(this, "handleFullScreenExit", () => {
      let {
        current: e
      } = this.mediaRef;
      if (null == e) return;
      let t = (0, T.fn)(e.parentNode, e);
      null != t && (0, T.rB)(t, null == t ? true : t.ownerDocument) || this.setState({
        fullscreen: false
      })
    }), L(this, "toggleFullscreen", () => {
      let e = !this.state.fullscreen;
      this.setState({
        fullscreen: e
      })
    }), L(this, "setMuted", e => {
      this.setState({
        muted: e
      })
    }), L(this, "toggleMuted", () => {
      this.setMuted(!this.state.muted)
    }), L(this, "setTime", function(e) {
      let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        {
          current: r
        } = t.mediaRef;
      null != r && isFinite(r.duration) && isFinite(r.currentTime) && (r.currentTime = e, t.updateValue(e / r.duration, n), t.updateTime(e, r.duration))
    }), L(this, "handleUIUpdate", () => {
      if (!this.state.playing || this._unmounted) return;
      let {
        current: e
      } = this.mediaRef;
      null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate))
    }), L(this, "handleDrag", (e, t) => {
      let {
        current: n
      } = this.mediaRef;
      if (t === S.Z.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, false);
      else if (t === S.Z.Types.VOLUME) {
        let t = (0, I.A)(e, 1);
        0 === t ? this.setState({
          muted: true,
          volume: t
        }) : this.state.muted && t > 0 ? this.setState({
          muted: false,
          volume: t
        }) : this.setState({
          volume: t
        })
      }
    }), L(this, "handleLoaded", e => {
      this._analytics.onLoadedMetadata(e);
      let {
        current: t
      } = this.mediaRef;
      null != t && (this.updateTime(t.currentTime, t.duration), this.setState({
        hasLoadedMetadata: true,
        currentTime: t.currentTime,
        duration: t.duration
      }))
    }), L(this, "handleDurationChange", () => {
      let {
        current: e
      } = this.mediaRef;
      null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
        duration: e.duration
      }))
    }), L(this, "handleBuffer", u().debounce(() => {
      let {
        current: e
      } = this.mediaRef;
      if (null == e) return void this.setState({
        buffers: []
      });
      this.setState({
        buffers: Y(e)
      })
    }, 400)), L(this, "handleEnded", e => {
      let {
        onEnded: t
      } = this.props;
      null != t && t(e), this.setState({
        playing: false,
        hideControls: false
      })
    }), L(this, "handleMouseMove", () => {
      this._lastMove = Date.now()
    }), L(this, "handleMouseLeave", () => {
      this.state.playing && (this._lastMove = 0), this.setState({
        hovering: false
      })
    }), L(this, "handleMouseEnter", () => {
      "none" === this.state.preload && this.setState({
        preload: "metadata"
      }), this.setState({
        hovering: true
      })
    }), L(this, "handleVideoClick", e => {
      let {
        state: {
          hasClickedPlay: t,
          playing: n
        },
        props: {
          onClick: r,
          autoPlay: i,
          autoMute: a
        }
      } = this;
      if (null != r) return void r(e);
      e.stopPropagation(), i && !t && n && a ? this.setState({
        muted: false,
        hasClickedPlay: true
      }) : this.setPlay(!this.state.playing)
    }), L(this, "setPlay", e => {
      let {
        props: {
          autoMute: t
        },
        state: {
          hasClickedPlay: n,
          muted: r
        }
      } = this;
      e !== this.state.playing && (e ? this.setState({
        playing: e,
        hasClickedPlay: true,
        muted: (!!n || !t) && r
      }) : this.setState({
        playing: false,
        hideControls: false
      }))
    }), L(this, "handleDragStart", e => {
      var t, n;
      this.setState({
        dragging: e
      }), this._analytics.onDragStart(null != (n = null == (t = this.mediaRef.current) ? true : t.currentTime) ? n : null)
    }), L(this, "handleDragEnd", () => {
      this.setState({
        dragging: null
      }), this._lastMove = Date.now()
    }), L(this, "handleKeyDown", e => {
      let {
        current: t
      } = this.mediaRef, {
        disableArrowKeySeek: n
      } = this.props;
      if (e.which === R.yXg.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
      else if (e.which !== R.yXg.ARROW_LEFT || null == t || n)
        if (e.which !== R.yXg.ARROW_RIGHT || null == t || n) {
          if (e.which >= R.yXg.DIGIT_0 && e.which <= R.yXg.DIGIT_9 && null != t) {
            e.preventDefault(), e.stopPropagation();
            let n = (e.which - R.yXg.DIGIT_0) / 10;
            t.currentTime = t.duration * n, this.setPlay(true)
          }
        } else {
          e.preventDefault(), e.stopPropagation();
          let n = Math.min(isFinite(t.duration) ? t.duration : 0, t.currentTime + 5);
          this.setTime(n)
        }
      else {
        e.preventDefault(), e.stopPropagation();
        let n = Math.max(0, t.currentTime - 5);
        this.setTime(n)
      }
    }), L(this, "handleError", e => {
      var t, n, r, i;
      let a = e.currentTarget;
      this._analytics.errorCode = null != (r = null == (t = a.error) ? true : t.code) ? r : null, this._analytics.errorMessage = null != (i = null == (n = a.error) ? true : n.message) ? i : null, this._analytics.onError(e)
    }), this._analytics = new Q({
      src: e.src,
      mimeType: null == (n = e.mimeType) ? true : n.join("/"),
      fileSize: e.fileSizeBytes
    });
    let {
      autoPlay: r,
      autoMute: i,
      volume: a,
      playable: s
    } = this.props, l = "function" == typeof a ? a() : a, c = "function" == typeof i ? i() : i;
    this.state = {
      buffers: [],
      currentTime: null,
      dragging: null,
      duration: null,
      fullscreen: false,
      hasClickedPlay: false,
      hasLoadedMetadata: false,
      hideControls: !s,
      muted: c,
      volume: l,
      playing: r,
      preload: "none",
      width: J.minWidth,
      height: J.minHeight,
      hovering: false
    }
  }
}
L(J, "Types", F), L(J, "defaultProps", {
  width: 400,
  height: 300,
  forceExternal: false,
  playable: true,
  downloadable: true,
  autoPlay: false,
  autoMute: false,
  volume: 1
}), L(J, "minWidth", 150), L(J, "minHeight", 110);
let $ = J