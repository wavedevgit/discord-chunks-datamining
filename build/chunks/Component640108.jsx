/** Chunk was on web.js **/
/** chunk id: 640108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => en,
  yv: () => K
}), require("./539854.js"), require("./388685.js");
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk156077 = require("./156077.js"),
  Chunk540026 = require("./540026.jsx"),
  Chunk455813 = require("./455813.jsx"),
  Chunk283756 = require("./283756.jsx"),
  Chunk921135 = require("./921135.js"),
  Chunk428940 = require("./428940.jsx"),
  Chunk793148 = require("./793148.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk889350 = require("./889350.js"),
  Chunk727829 = require("./727829.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = 3e3,
  B = 1e3,
  V = "-:--",
  H = {
    friction: 14,
    tension: 200
  },
  Y = {
    VIDEO: "VIDEO",
    AUDIO: "AUDIO"
  },
  W = {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  };

function K(e) {
  let t = 0 | e,
    n = t % 60;
  return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
}

function z(e) {
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
let q = e => {
  let {
    current: t,
    duration: n
  } = e, r = null != t ? K(t) : V, i = null != n ? K(n) : V;
  return r = r.padStart(i.length, "0"), (0, a.jsxs)("div", {
    className: j.durationTimeWrapper,
    children: [(0, a.jsx)("span", {
      className: j.durationTimeDisplay,
      children: r
    }), (0, a.jsx)("span", {
      className: j.durationTimeSeparator,
      children: "/"
    }), (0, a.jsx)("span", {
      className: j.durationTimeDisplay,
      children: i
    })]
  })
};
class Q extends(r = Chunk473749.Component) {
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
    t ? d.Z.spring(n, U({
      toValue: e
    }, H)).start() : n.setValue(e)
  }
  getAnimatedStyle() {
    let {
      translateY: e
    } = this.state;
    return {
      transform: [{
        translateY: e.interpolate({
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
    return e ? (0, a.jsx)(_.P3F, {
      className: j.videoButton,
      onClick: r,
      tabIndex: o ? false : 0,
      "aria-label": L.intl.string(L.t.ZcgDJX),
      children: (0, a.jsx)(_.fpf, {
        size: "xs",
        color: "currentColor",
        className: j.controlIcon
      }, "pause")
    }) : null != t && t === n ? (0, a.jsx)(_.P3F, {
      className: j.videoButton,
      onClick: i,
      tabIndex: o ? false : 0,
      "aria-label": L.intl.string(L.t.hsvh0i),
      children: (0, a.jsx)(y.Z, {
        className: j.controlIcon
      }, "replay")
    }) : (0, a.jsx)(_.P3F, {
      className: j.videoButton,
      onClick: i,
      tabIndex: o ? false : 0,
      "aria-label": L.intl.string(L.t.RscU7I),
      children: (0, a.jsx)(_.o1U, {
        size: "xs",
        color: "currentColor",
        className: j.controlIcon
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
      width: p,
      volume: _,
      type: h
    } = this.props, m = "string" == typeof p || p > 250;
    return (0, a.jsxs)(d.Z.div, {
      className: h === Y.VIDEO ? j.videoControls : j.audioControls,
      onClick: e => e.stopPropagation(),
      onDoubleClick: e => e.stopPropagation(),
      style: this.getAnimatedStyle(),
      children: [this.renderPlayIcon(), m ? (0, a.jsx)(q, {
        current: n,
        duration: r
      }) : null, (0, a.jsx)(C.Z, {
        buffers: e,
        value: null != r ? r : 0,
        onDrag: o,
        onDragEnd: s,
        onDragStart: l,
        type: C.Z.Types.DURATION,
        ref: this.setDurationRef
      }), (0, a.jsx)("div", {
        className: M.flex,
        children: (0, a.jsx)(R.Z, {
          ref: this.setVolumeButtonRef,
          muted: i,
          value: _,
          minValue: 0,
          maxValue: 1,
          currentWindow: window,
          onValueChange: e => o(e, C.Z.Types.VOLUME),
          onToggleMute: c,
          onVolumeShow: u,
          onVolumeHide: f,
          iconClassName: j.controlIcon,
          iconColor: "currentColor",
          sliderWrapperClassName: j.volumeSliderWrapper
        })
      }), t]
    })
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      translateY: new d.Z.Value(0)
    }), k(this, "volumeButton", true), k(this, "durationBar", true), k(this, "setDurationRef", e => {
      this.durationBar = e
    }), k(this, "setVolumeButtonRef", e => {
      this.volumeButton = e
    })
  }
}

function X(e) {
  let {
    fileName: t,
    fileSize: n,
    src: r,
    disabled: i,
    mimeType: o,
    hideDownloadButton: s
  } = e;
  return (0, a.jsxs)("div", {
    className: j.audioMetadata,
    children: [(0, a.jsxs)("div", {
      className: j.metadataContent,
      children: [i ? t : (0, a.jsx)(m.Z, {
        href: r,
        className: j.metadataDownload,
        iconClassName: j.metadataIcon,
        mimeType: o,
        fileName: t
      }), (0, a.jsx)("div", {
        className: j.metadataSize,
        children: n
      })]
    }), !s && (0, a.jsx)(m.Z, {
      href: r,
      className: j.metadataDownload,
      iconClassName: j.metadataIcon,
      mimeType: o
    })]
  })
}
k(Q, "defaultProps", {
  disabled: false
});
class J extends Chunk473749.Component {
  pop() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    this.setState({
      play: e
    }, this.popAnimation)
  }
  getAnimatedStyle() {
    let {
      opacity: e,
      scale: t
    } = this.state;
    return d.Z.accelerate({
      opacity: e.interpolate({
        inputRange: [0, 1],
        outputRange: [0, .8]
      }),
      transform: [{
        scale: t.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2]
        })
      }]
    })
  }
  render() {
    let {
      play: e
    } = this.state, t = e ? _.o1U : _.fpf;
    return (0, a.jsx)(d.Z.div, {
      className: j.playPausePop,
      style: this.getAnimatedStyle(),
      children: (0, a.jsx)(t, {
        className: j.playPausePopIcon
      })
    })
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      play: false,
      scale: new d.Z.Value(0),
      opacity: new d.Z.Value(0)
    }), k(this, "popAnimation", () => {
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
      })]), d.Z.spring(t, Z(U({
        toValue: 1.5
      }, H), {
        friction: 80
      }))]).start()
    })
  }
}
let $ = (0, Chunk818083.B)({
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
class ee {
  moveToState(e) {
    this.stateTime = performance.now(), this.currentState = e
  }
  timeInState() {
    return performance.now() - this.stateTime
  }
  sendEvent() {
    this.analyticsEnabled && (null == this.errorCode && null == this.errorMessage && false === this.metadata.hasValidFrame && (this.errorCode = 4, this.errorMessage = "No valid video frames detected - codec may be unsupported"), O.default.track(D.rMx.MEDIA_PLAY_FINISHED, {
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
      connection_type: b.Z.getType(),
      effective_connection_speed: b.Z.getEffectiveConnectionSpeed(),
      service_provider: b.Z.getServiceProvider(),
      error_message: this.errorMessage,
      error_code: this.errorCode
    })), this.playTimeSec = 0, this.playWallTimeMs = 0, this.firstPlayWaitingMs = 0, this.stallCount = 0, this.stallMs = 0, this.seekCount = 0, this.seekWaitingMs = 0, this.playbackStartTime = true, this.lastPlayingTime = true, this.moveToState("not_started")
  }
  updatePlayTime(e) {
    var t, n;
    this.playTimeSec += Math.max((null != (t = this.lastPlayingTime) ? t : e) - (null != (n = this.playbackStartTime) ? n : 0), 0), this.playWallTimeMs += this.timeInState()
  }
  constructor(e) {
    k(this, "metadata", true), k(this, "playTimeSec", 0), k(this, "playWallTimeMs", 0), k(this, "firstPlayWaitingMs", 0), k(this, "stallCount", 0), k(this, "stallMs", 0), k(this, "seekCount", 0), k(this, "seekWaitingMs", 0), k(this, "errorMessage", null), k(this, "errorCode", null), k(this, "stateTime", performance.now()), k(this, "currentState", "not_started"), k(this, "playbackStartTime", true), k(this, "lastPlayingTime", true), k(this, "analyticsEnabled", true), k(this, "onWaiting", e => {
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
          (0, p.UT)(this.currentState)
      }
    }), k(this, "onSeeking", e => {
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
          (0, p.UT)(this.currentState)
      }
      this.seekCount += 1, this.moveToState("seeking")
    }), k(this, "onSeeked", e => {
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
          (0, p.UT)(this.currentState)
      }
    }), k(this, "onPause", e => {
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
          (0, p.UT)(this.currentState)
      }
    }), k(this, "onError", e => {
      this.moveToState("paused"), this.sendEvent()
    }), k(this, "onPlaying", e => {
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
          (0, p.UT)(this.currentState)
      }
      this.playbackStartTime = e.currentTarget.currentTime, this.moveToState("playing")
    }), k(this, "onTimeUpdate", e => {
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
          (0, p.UT)(this.currentState)
      }
    }), k(this, "onDragStart", e => {
      null != e && (this.lastPlayingTime = e)
    }), k(this, "onLoadedMetadata", e => {
      this.metadata.fileDurationSec = e.currentTarget.duration
    }), this.metadata = e, this.analyticsEnabled = $.getCurrentConfig({
      location: "media_player"
    }).enabled
  }
}
class et extends(i = Chunk473749.PureComponent) {
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
      type: r,
      src: i
    } = this.props;
    if (r === Y.VIDEO && (T.ZP.addChangeListener(this.handleStatsStoreChange), this._hasStatsListener = true, T.ZP.isVideoStatsEnabled(i) && !this.state.showStats)) try {
      this.toggleStats()
    } catch (e) {
      T.ZP.setVideoStats(i, false)
    }
    let {
      current: a
    } = this.mediaRef;
    null != a && (t && (a.muted = t), e && (this.play(true), this.handleUIUpdate()), a.volume = n)
  }
  componentDidUpdate(e, t) {
    let {
      props: {
        onPause: n,
        onVolumeChange: r,
        onMute: i,
        src: a,
        type: o
      },
      state: {
        playing: s,
        fullscreen: l,
        muted: c,
        dragging: u,
        volume: d,
        showStats: f
      }
    } = this;
    if (a !== e.src && o === Y.VIDEO) {
      null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes), T.ZP.clearVideoStats(e.src);
      let t = T.ZP.isVideoStatsEnabled(a);
      f !== t && (t ? this.toggleStats() : f && this.toggleStats())
    }
    let {
      current: p
    } = this.mediaRef, {
      current: _
    } = this.playPausePopRef;
    if (null == p) return;
    s && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == _ || _.pop(s))) : !s && t.playing && (p.pause(), null == _ || _.pop(s), null == n || n()), s && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
    let h = (0, I.fn)(p.parentNode, p);
    l && !t.fullscreen && null != h ? ((0, I.Dj)(h), h.addEventListener(I.NO, this.handleFullScreenExit)) : !l && t.fullscreen && null != h && (h.removeEventListener(I.NO, this.handleFullScreenExit), (0, I.Pr)(h, h.ownerDocument)), u === C.Z.Types.DURATION && t.dragging !== C.Z.Types.DURATION && s ? p.pause() : u !== C.Z.Types.DURATION && t.dragging === C.Z.Types.DURATION && s && p.play(), c !== t.muted && (p.muted = c, null == i || i(c)), d !== t.volume && (p.volume = d, null == r || r(d))
  }
  componentWillUnmount() {
    this._unmounted = true, null != this._statsCollector && (this._statsCollector.destroy(), this._statsCollector = null), this._hasStatsListener && (T.ZP.removeChangeListener(this.handleStatsStoreChange), this._hasStatsListener = false, this.props.type === Y.VIDEO && T.ZP.clearVideoStats(this.props.src));
    let {
      current: e
    } = this.mediaRef;
    if (null == e) return;
    let t = (0, I.fn)(e.parentNode, e);
    null != t && (t.removeEventListener(I.NO, this.handleFullScreenExit), (0, I.Pr)(t))
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
      if ("function" == typeof n) {
        let e = n();
        e !== this.state.volume && (i.volume = e, a.volume = e)
      }
      if ("function" == typeof r) {
        let e = r();
        e !== this.state.muted && (i.muted = e, a.muted = e)
      }
      this.setState(a), i.play(), null == t || t(e, i.currentTime * v.Z.Millis.SECOND, i.duration * v.Z.Millis.SECOND)
    }
  }
  getWidth() {
    let {
      width: e
    } = this.props;
    return "100%" === e ? e : Math.max(e, et.minWidth)
  }
  getHeight() {
    let {
      height: e
    } = this.props;
    return "100%" === e ? e : Math.max(e, et.minHeight)
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
    } = this.state, n = t ? B : F, r = Math.max(0, Date.now() - this._lastMove) > n;
    r !== this.state.hideControls && null == e && this.setState({
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
    return r ? (0, a.jsx)(h.Z, {
      alt: e,
      className: j.video,
      controls: false,
      height: u,
      poster: n,
      width: c,
      responsive: i && !l,
      mediaLayoutType: o,
      playsInline: true,
      autoPlay: s
    }) : (0, a.jsx)(h.Z, {
      alt: e,
      className: j.video,
      controls: false,
      playsInline: true,
      autoPlay: s,
      height: u,
      responsive: i && !l,
      mediaLayoutType: l ? x.hV.STATIC : o,
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
      poster: n,
      preload: this.state.preload,
      ref: this.mediaRef,
      width: c,
      src: t
    })
  }
  renderAudio() {
    return (0, a.jsx)("audio", {
      className: j.audio,
      controls: false,
      onClick: this.handleVideoClick,
      onEnded: this.handleEnded,
      onLoadedMetadata: this.handleLoaded,
      onProgress: this.handleBuffer,
      preload: this.state.preload,
      ref: this.mediaRef,
      children: (0, a.jsx)("source", {
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
        hideControls: p,
        muted: _,
        playing: h,
        fullscreen: m,
        volume: g,
        dragging: b
      }
    } = this, y = this.getWidth();
    return f || n || t === Y.AUDIO ? (0, a.jsx)(Q, {
      buffers: c,
      currentTime: u,
      duration: d,
      volume: (0, S.P)(g, 1),
      hide: t === Y.VIDEO && p,
      muted: _,
      autoPlay: n,
      onDrag: this.handleDrag,
      onDragEnd: this.handleDragEnd,
      onDragStart: this.handleDragStart,
      onPause: () => this.setPlay(false),
      onPlay: () => this.setPlay(true),
      onToggleMuted: this.toggleMuted,
      onVolumeShow: i,
      onVolumeHide: o,
      onControlsShow: l,
      onControlsHide: s,
      playing: h,
      dragging: b,
      type: t,
      ref: this.controlsRef,
      width: m ? window.screen.width : y,
      disabled: !r,
      children: t === Y.VIDEO ? (0, a.jsx)(E.Z, {
        "aria-label": L.intl.string(L.t["2nM3Pk"]),
        className: j.videoButton,
        iconClassName: j.controlIcon,
        guestWindow: window,
        onClick: this.toggleFullscreen,
        node: (0, I.fn)(null == e ? true : e.parentNode, e)
      }) : null
    }) : (0, a.jsx)(A.Z, {
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
    return null == e || null == t ? null : r === Y.AUDIO ? (0, a.jsx)(X, {
      fileName: e,
      fileSize: t,
      src: n,
      disabled: !i,
      mimeType: o,
      hideDownloadButton: true
    }) : null
  }
  renderPlayPausePop() {
    return (0, a.jsx)(J, {
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
    return r ? W : t === Y.AUDIO ? {
      width: true,
      height: "auto"
    } : e ? true : {
      width: i,
      height: n
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
      playing: p
    } = this.state, h = j.wrapperPaused;
    if (t === Y.AUDIO ? h = j.wrapperAudio : f ? h = j.wrapperControlsHidden : p && (h = j.wrapperPlaying), r && t === Y.VIDEO) {
      let t = this.getWidth();
      return (0, a.jsxs)("div", {
        className: l()(h, {
          [j.wrapperMediaMosaic]: c === x.hV.MOSAIC
        }),
        style: s ? true : {
          width: t,
          height: e
        },
        onKeyDown: this.handleKeyDown,
        tabIndex: 0,
        children: [this.renderMetadata(), this.renderVideo(), (0, a.jsx)("div", {
          className: j.playCenter,
          children: (0, a.jsx)(N.Z, {
            className: j.__invalid_playButton,
            externalURL: n,
            renderLinkComponent: o
          })
        })]
      })
    }
    return (0, a.jsxs)("div", {
      className: l()(h, j.newMosaicStyle, i, {
        [j.wrapperMediaMosaic]: c === x.hV.MOSAIC
      }),
      "data-fullscreen": d,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseMove: p ? this.handleMouseMove : true,
      onKeyDown: this.handleKeyDown,
      tabIndex: 0,
      style: this.getMediaStyle(),
      children: [this.renderMetadata(), t === Y.AUDIO ? this.renderAudio() : this.renderVideo(), (0, a.jsx)(_.f6W, {
        theme: D.BRd.MIDNIGHT,
        children: e => (0, a.jsx)("div", {
          className: e,
          children: this.renderControls()
        })
      }), t === Y.VIDEO ? this.renderPlayPausePop() : null, null != u ? (0, a.jsx)("div", {
        className: l()({
          [j.overlayContentHidden]: p || d
        }),
        children: u()
      }) : null, t === Y.VIDEO && this.state.showStats && null != this.state.videoStats ? (0, a.jsx)(w._, {
        stats: this.state.videoStats,
        onClose: this.toggleStats
      }) : null]
    })
  }
  checkVideoDecodability() {
    let {
      current: e
    } = this.mediaRef;
    if (null == e || !(0, f.kK)(e, HTMLVideoElement)) return;
    if (this.props.type !== Y.VIDEO) {
      this._analytics.metadata.hasValidFrame = true;
      return
    }
    if (null != this._analytics.metadata.hasValidFrame) return;
    let t = e.videoHeight,
      n = e.currentTime,
      r = e.readyState;
    if (0 === t && r >= 2) return void setTimeout(() => {
      if (null == e) return;
      let t = e.videoHeight,
        r = e.currentTime;
      if (0 === t && r > n + .5) {
        this._analytics.metadata.hasValidFrame = false;
        return
      }
      if (t > 0) {
        this._analytics.metadata.hasValidFrame = true;
        return
      }
    }, 1500);
    if (t > 0) {
      this._analytics.metadata.hasValidFrame = true;
      return
    }
  }
  constructor(e) {
    var t, n;
    super(e), t = this, k(this, "_unmounted", false), k(this, "_lastMove", 0), k(this, "_analytics", true), k(this, "_statsCollector", null), k(this, "_hasStatsListener", false), k(this, "mediaRef", o.createRef()), k(this, "controlsRef", o.createRef()), k(this, "playPausePopRef", o.createRef()), k(this, "handleFullScreenExit", () => {
      let {
        current: e
      } = this.mediaRef;
      if (null == e) return;
      let t = (0, I.fn)(e.parentNode, e);
      null != t && (0, I.rB)(t, null == t ? true : t.ownerDocument) || this.setState({
        fullscreen: false
      })
    }), k(this, "toggleFullscreen", () => {
      let e = !this.state.fullscreen;
      this.setState({
        fullscreen: e
      })
    }), k(this, "setMuted", e => {
      this.setState({
        muted: e
      })
    }), k(this, "toggleMuted", () => {
      this.setMuted(!this.state.muted)
    }), k(this, "setTime", function(e) {
      let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        {
          current: r
        } = t.mediaRef;
      null != r && isFinite(r.duration) && isFinite(r.currentTime) && (r.currentTime = e, t.updateValue(e / r.duration, n), t.updateTime(e, r.duration))
    }), k(this, "handleUIUpdate", () => {
      if (!this.state.playing || this._unmounted) return;
      let {
        current: e
      } = this.mediaRef;
      null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate))
    }), k(this, "handleDrag", (e, t) => {
      let {
        current: n
      } = this.mediaRef;
      if (t === C.Z.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, false);
      else if (t === C.Z.Types.VOLUME) {
        let t = (0, S.A)(e, 1);
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
    }), k(this, "handleLoaded", e => {
      this._analytics.onLoadedMetadata(e);
      let {
        current: t
      } = this.mediaRef;
      null != t && (this.updateTime(t.currentTime, t.duration), this.setState({
        hasLoadedMetadata: true,
        currentTime: t.currentTime,
        duration: t.duration
      }))
    }), k(this, "handleDurationChange", () => {
      let {
        current: e
      } = this.mediaRef;
      null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
        duration: e.duration
      }))
    }), k(this, "handleBuffer", u().debounce(() => {
      let {
        current: e
      } = this.mediaRef;
      if (null == e) return void this.setState({
        buffers: []
      });
      this.setState({
        buffers: z(e)
      })
    }, 400)), k(this, "handleEnded", e => {
      let {
        onEnded: t
      } = this.props;
      null != t && t(e), this.setState({
        playing: false,
        hideControls: false
      })
    }), k(this, "handleMouseMove", () => {
      this._lastMove = Date.now()
    }), k(this, "handleMouseLeave", () => {
      this.state.playing && (this._lastMove = 0), this.setState({
        hovering: false
      })
    }), k(this, "handleMouseEnter", () => {
      "none" === this.state.preload && this.setState({
        preload: "metadata"
      }), this.setState({
        hovering: true
      })
    }), k(this, "handleVideoClick", e => {
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
    }), k(this, "setPlay", e => {
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
    }), k(this, "handleDragStart", e => {
      var t, n;
      this.setState({
        dragging: e
      }), this._analytics.onDragStart(null != (n = null == (t = this.mediaRef.current) ? true : t.currentTime) ? n : null)
    }), k(this, "handleDragEnd", () => {
      this.setState({
        dragging: null
      }), this._lastMove = Date.now()
    }), k(this, "handleKeyDown", e => {
      let {
        current: t
      } = this.mediaRef, {
        disableArrowKeySeek: n
      } = this.props;
      if (e.which === D.yXg.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
      else if (e.which !== D.yXg.ARROW_LEFT || null == t || n)
        if (e.which !== D.yXg.ARROW_RIGHT || null == t || n) {
          if (e.which >= D.yXg.DIGIT_0 && e.which <= D.yXg.DIGIT_9 && null != t) {
            e.preventDefault(), e.stopPropagation();
            let n = (e.which - D.yXg.DIGIT_0) / 10;
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
    }), k(this, "handleError", e => {
      var t, n, r, i;
      let a = e.currentTarget;
      this._analytics.errorCode = null != (r = null == (t = a.error) ? true : t.code) ? r : null, this._analytics.errorMessage = null != (i = null == (n = a.error) ? true : n.message) ? i : null, this._analytics.onError(e)
    }), k(this, "_isUpdatingStats", false), k(this, "toggleStats", () => {
      let {
        showStats: e
      } = this.state, {
        current: t
      } = this.mediaRef, {
        src: n
      } = this.props;
      if (e) null != this._statsCollector && this._statsCollector.stopTracking(), this._isUpdatingStats = true, this.setState({
        showStats: false
      }, () => {
        this._isUpdatingStats = false, this._unmounted || T.ZP.setVideoStats(this.props.src, false)
      });
      else if (null != t && (0, f.kK)(t, HTMLVideoElement)) try {
        null == this._statsCollector && (this._statsCollector = new P.Z(t, this.props.fileSizeBytes)), this._statsCollector.startTracking(this.handleStatsUpdate), this._isUpdatingStats = true, this.setState({
          showStats: true,
          videoStats: this._statsCollector.getStats()
        }, () => {
          this._isUpdatingStats = false, this._unmounted || T.ZP.setVideoStats(this.props.src, true)
        })
      } catch (e) {
        null != this._statsCollector && (this._statsCollector.destroy(), this._statsCollector = null), this._isUpdatingStats = false, this._unmounted || T.ZP.setVideoStats(this.props.src, false)
      } else T.ZP.setVideoStats(n, false)
    }), k(this, "handleStatsUpdate", e => {
      this.setState({
        videoStats: e
      })
    }), k(this, "handleStatsStoreChange", () => {
      let {
        src: e,
        type: t
      } = this.props;
      t !== Y.VIDEO || this._isUpdatingStats || T.ZP.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats()
    }), this._analytics = new ee({
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
      width: et.minWidth,
      height: et.minHeight,
      hovering: false,
      showStats: false,
      videoStats: null
    }
  }
}
k(et, "Types", Y), k(et, "defaultProps", {
  width: 400,
  height: 300,
  forceExternal: false,
  playable: true,
  downloadable: true,
  autoPlay: false,
  autoMute: false,
  volume: 1
}), k(et, "minWidth", 150), k(et, "minHeight", 110);
let en = et