/** Chunk was on 75909 **/
/** chunk id: 656357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
  Chunk55160 = require("./55160.js"),
  Chunk754700 = require("./754700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk866960 = require("./866960.js"),
  Chunk228488 = require("./228488.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk184299 = require("./184299.js"),
  Chunk937797 = require("./937797.js"),
  Chunk535584 = require("./535584.js"),
  Chunk550235 = require("./550235.js"),
  Chunk720293 = require("./720293.js"),
  Chunk922826 = require("./922826.jsx"),
  Chunk104800 = require("./104800.jsx"),
  Chunk215113 = require("./215113.jsx"),
  Chunk449788 = require("./449788.jsx"),
  Chunk508067 = require("./508067.jsx"),
  Chunk890193 = require("./890193.jsx"),
  Chunk325916 = require("./325916.js"),
  Chunk939389 = require("./939389.js"),
  Chunk267322 = require("./267322.js"),
  Chunk70417 = require("./70417.js"),
  Chunk934703 = require("./934703.js"),
  Chunk981786 = require("./981786.js"),
  Chunk324805 = require("./324805.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk273339 = require("./273339.js");
let q = {
  tension: 250,
  friction: 5,
  clamp: true
};

function Y() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.getState().theme);
  return (0, Chunk54381.jsx)("div", {
    className: Chunk273339.pauseText,
    style: {
      background: (0, Chunk780384.wj)(module) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
    },
    children: (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: Chunk388032.intl.string(Chunk388032.t["U7Xrb+"])
    })
  })
}

function Q(e) {
  var t, n, l, d, E, H, Q, G, W;
  let {
    videoTask: z,
    onOptimisticProgressUpdate: K,
    autoplay: X,
    parentTransitionState: J,
    performanceClockStartTime: $,
    orientation: ee
  } = e, {
    sourceQuestContent: et,
    quest: en,
    videoSessionId: er
  } = o.useContext(R.VideoQuestModalContext), eo = (0, y.km)(e => e.transcriptEnabled), el = (0, y.km)(e => e.setTranscriptEnabled), ei = (0, y.km)(e => e.captionEnabled), ea = (0, y.km)(e => e.setCaptionEnabled), es = (0, y.km)(e => e.fullScreenEnabled), ec = (0, y.km)(e => e.setFullScreenEnabled), {
    enabled: eu,
    variant: ed
  } = _.EO.useConfig({
    location: F.dr.VIDEO_MODAL
  }), em = ed === _.m_.OVERLAY_SHARE_ON_VIDEO, {
    focused: ef,
    focusedChanged: ep
  } = (0, M.xU)(), {
    visible: ev,
    visibleChanged: eE,
    targetRef: eg
  } = (0, M.Yy)(), [eO, eh] = o.useState(true === X ? w.rq.PLAYING : w.rq.PAUSED), [eb, eS] = o.useState(false), [eC, ey] = o.useState(false), e_ = (0, C.il)(en), [ex, ej] = o.useState(e_.percentComplete), eD = o.useCallback(e => {
    eG(null), ej(e)
  }, []), [eP, eT] = o.useState(false), [eR, eI] = o.useState(true), [eN, eA] = o.useState(false), [ew, ek] = o.useState([]), [eM, eL] = o.useState(g.Z.getEffectiveConnectionSpeed()), [eV, eZ] = o.useState(0), [eF, eB] = o.useState(0), [eH, eU] = o.useState(false), [eq, eY] = o.useState(false), [eQ, eG] = o.useState(null), eW = o.useRef(true), ez = o.useRef(null), eK = o.useRef(null), eX = (0, y.km)(e => {
    var t;
    return null != (t = e.videoProgress[en.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, s.X), eJ = (0, y.km)(e => e.setVideoProgress), e$ = (0, y.km)(e => e.muted), e0 = (0, y.km)(e => e.volume), e1 = (0, u.e7)([p.Z], () => p.Z.useReducedMotion), e2 = (0, o.useRef)(null), e3 = (0, o.useRef)(null), e4 = o.useRef(true), e8 = (null == (t = en.userStatus) ? true : t.completedAt) != null, [e7, e9] = o.useState(null), [e6, e5] = o.useState(false), [te, tt] = o.useState(false), [tn, tr] = o.useState(null), to = e8 ? null != (E = null == (n = e2.current) ? true : n.duration) ? E : 0 : Math.max(eX.maxTimestampSec, e_.progressSeconds), tl = o.useMemo(() => (0, x.T)({
    quest: en,
    location: F.dr.VIDEO_MODAL
  }), [en]), ti = (0, k.$R)(e8, eX, e_), [ta, ts] = o.useState(w._H.MD), tc = {
    [w._H.MD]: 50,
    [w._H.LG]: 58
  };
  (0, f.Ng)(() => {
    e4.current && (e4.current = false, eL(g.Z.getEffectiveConnectionSpeed()), e8 && eX.timestampSec >= eX.duration && eJ(en.id, 0, eX.duration))
  });
  let {
    videoVariant: tu,
    videoAsset: td,
    hlsRef: tm,
    onFirstChunkLoaded: tf
  } = (0, L.Z)(e2, eM, ti), tp = (0, D.CC)(tu), {
    trackQuestVideoLoadingStarted: tv,
    trackQuestVideoLoadingEnded: tE,
    trackQuestVideoProgressed: tg,
    trackQuestVideoResumed: tO,
    trackQuestVideoPaused: th,
    trackQuestVideoFocusChange: tb,
    trackQuestContentClick: tS,
    trackQuestVideoBufferingStarted: tC,
    trackQuestVideoBufferingEnded: ty,
    trackWatchTimeAnalytics: t_,
    trackQuestVideoTimeToFirstFrame: tx,
    trackQuestVideoFullscreenChanged: tj,
    trackQuestVideoError: tD,
    trackQuestVideoVolumeChanged: tP
  } = (0, V.Z)({
    questId: en.id,
    isQuestCompleted: e8,
    videoRef: e2,
    hlsRef: tm,
    videoSessionId: er,
    videoAssetId: tp,
    sourceQuestContent: et,
    logger: tl
  });
  (0, Z.Z)({
    videoAssetUrl: null == td ? true : td.url,
    videoRef: e2,
    hlsRef: tm,
    videoVariant: tu
  });
  let tT = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e2.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tR
    } = (0, j.Z)({
      getCurrentVideoTime: tT,
      isPlaying: eO === w.rq.PLAYING,
      isMetadataLoaded: e6,
      isInitialSeekComplete: te,
      onAnalytics: t_,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tI = o.useCallback(e => {
      if (tl.info("[QV] | updatePlayerState | playerState: ".concat(e)), eh(e), null != e2.current) switch (e) {
        case w.rq.PLAYING:
          e2.current.paused && tO(e7), e9(null), e2.current.play();
          break;
        case w.rq.PAUSED:
          e2.current.paused || tR(), e2.current.pause(), eW.current = false;
          break;
        case w.rq.ENDED:
          tR(), el(false)
      }
    }, [tO, e7, tR, el, tl]);
  o.useEffect(() => {
    th(e7)
  }, [e7, th]), o.useEffect(() => {
    ep && tb(ef, eO)
  }, [ef, ep, eO, tb]);
  let tN = o.useCallback(e => {
    var t;
    e8 || (null == (t = en.userStatus) ? true : t.enrolledAt) == null || (tl.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, C.FI)(en, e)), tg()
  }, [e8, en, tl, tg]);
  o.useEffect(() => {
    J !== m.Dvm.HIDDEN && J !== m.Dvm.EXITING && J !== m.Dvm.EXITED && (null == J || !eE || ev || e8) && (!ep || ef || e8) || null == e2.current || eO !== w.rq.PLAYING || (tl.info("[QV] | Pausing video | playerState: ".concat(eO, ", parentTransitionState: ").concat(J, ", visible: ").concat(ev, ", focused: ").concat(ef, ", isQuestCompleted: ").concat(e8)), tI(w.rq.PAUSED), e8 || e9(S.yE.LOST_FOCUS))
  }, [J, ef, ep, ev, eE, eO, e8, tI, tN, tl]);
  let [tA, tw] = o.useState(false), tk = o.useRef(null), tM = o.useRef(performance.now()), tL = o.useCallback(() => {
    null != tk.current && clearTimeout(tk.current), eO === w.rq.PLAYING && (tk.current = setTimeout(() => {
      eO === w.rq.PLAYING && tw(true)
    }, Math.max(0, 3e3 - (performance.now() - tM.current))))
  }, [eO]), tV = () => {
    tw(false), tM.current = performance.now(), tL()
  };
  o.useEffect(() => {
    if (eO !== w.rq.PLAYING) {
      tw(false), null != tk.current && clearTimeout(tk.current);
      return
    }
    return tL(), () => {
      null != tk.current && clearTimeout(tk.current)
    }
  }, [eO, tL]);
  let tZ = !tA && (eC || eb || eO === w.rq.ENDED),
    tF = o.useCallback(() => {
      var e;
      tl.info("[QV] | handleFullScreenExit");
      let t = (0, O.fn)(null == (e = e2.current) ? true : e.parentNode, e2.current);
      null == t || (0, O.rB)(t) || (t.removeEventListener(O.NO, tF), ec(false), tj(false), ts(w._H.MD))
    }, [ec, tl, tj]),
    tB = () => {
      if (null == e2.current) return;
      let e = Math.max(e2.current.currentTime - 10, 0);
      tl.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tU(e), eO === w.rq.ENDED && tI(w.rq.PAUSED), tS(S.jn.VIDEO_MODAL, b.jZ.SEEK_BACKWARD)
    },
    tH = () => {
      if (null == e2.current || !t4) return;
      let e = Math.min(e2.current.currentTime + 10, to);
      tl.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tU(e), eO !== w.rq.ENDED && e >= e2.current.duration && tI(w.rq.ENDED), tS(S.jn.VIDEO_MODAL, b.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e2.current;
    return () => {
      let t = (0, O.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(O.NO, tF)
    }
  }, [tF]);
  let tU = o.useCallback(e => {
      var t;
      null != e2.current && (tl.info("[QV] | seekTimeline | timeSec: ".concat(e)), eG(e / (null != (t = e2.current.duration) ? t : 1) * 100), tR(), eT(true), tt(false), e2.current.currentTime = e, eJ(en.id, e, e2.current.duration))
    }, [e2, eJ, en.id, tR, tl]),
    tq = () => {
      if (null != e2.current) switch (tl.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eO)), eO) {
        case w.rq.ENDED:
          tU(0), tI(w.rq.PLAYING);
          break;
        case w.rq.PLAYING:
          tI(w.rq.PAUSED), e9(S.yE.PAUSE_BUTTON);
          break;
        default:
          tI(w.rq.PLAYING)
      }
    },
    tY = e => {
      tr(e)
    },
    tQ = e => {
      tr(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tG = o.useCallback(() => {
      if (null == e2.current || (tl.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e2.current.textTracks.length)), 0 === e2.current.textTracks.length)) return;
      let e = e2.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, k.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tY(n), n.onexit = () => tQ(n))
        }
    }, [e2, tl]);
  o.useEffect(() => {
    if (null == e3.current) return;
    let e = e3.current;
    return e.addEventListener("load", tG), () => {
      null != e && e.removeEventListener("load", tG)
    }
  }, [e3, tG]);
  let tW = o.useCallback(e => {
      var t;
      tl.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e2.current) ? true : t.currentTime, ", videoAssetId: ").concat(tp, ", connectionSpeed: ").concat(eM)), tD(e)
    }, [eM, tD, e2, tp, tl]),
    tz = e => {
      tl.info("[QV] | handleCanPlay: playerState: ".concat(eO)), null != e2.current && eO === w.rq.PLAYING && (tl.info("[QV] | handleCanPlay: did NOT early return"), eR && (tl.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eR)), eI(false)), eN && (tl.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eN)), ty(null != eK.current ? performance.now() - eK.current : null), eA(false)), tl.info("[QV] | handleCanPlay: updating player state to playing"), tI(w.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eP) return;
    let e = setTimeout(() => {
      eT(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eP]);
  let [{
    controlBarAnimSpring: tK
  }, tX] = (0, m.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: q,
    onStart: () => {
      eY(false)
    },
    onRest: e => {
      1 === e.value && eY(true)
    }
  })), tJ = (0, o.useRef)(null), [{
    captionHeightSpring: t$
  }, t0] = (0, m.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: q
  }));
  o.useEffect(() => {
    var e, t;
    return t0({
      captionHeightSpring: ei && null != tn && null != (t = null == (e = tJ.current) ? true : e.clientHeight) ? t : 0,
      immediate: e1
    }), () => {
      t$.stop()
    }
  }, [ei, t0, e1, tn, t$]), o.useEffect(() => (tX({
    controlBarAnimSpring: tZ || eH ? 1 : 0,
    immediate: e1
  }), () => {
    tK.stop()
  }), [tZ, tX, e1, eH, tK]);
  let t1 = eO === w.rq.ENDED,
    t2 = o.useMemo(() => (0, D.z0)(en, c.X.WATCH_VIDEO, D.n1.VIDEO, D.O.THUMBNAIL), [en]),
    t3 = o.useMemo(() => (0, D.z0)(en, c.X.WATCH_VIDEO, D.n1.VIDEO, D.O.CAPTION), [en]),
    t4 = e8 || eX.maxTimestampSec >= (null != (H = null == (l = e2.current) ? true : l.currentTime) ? H : 0) + 1,
    t8 = o.useMemo(() => null === (0, D.z0)(en, c.X.WATCH_VIDEO, D.n1.VIDEO, D.O.TRANSCRIPT), [en]),
    t7 = eu ? {} : {
      paddingLeft: (0, a.to)([tK.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px")),
      paddingRight: (0, a.to)([tK.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px"))
    };
  return (0, r.jsx)(m.P3F, {
    className: i()(U.videoCont, {
      [U.videoContRoundedCorners]: eu
    }),
    "data-fullscreen": es,
    tabIndex: false,
    onMouseEnter: () => {
      eS(true), tw(false), tM.current = performance.now(), null != tk.current && clearTimeout(tk.current)
    },
    onMouseLeave: () => {
      eS(false), tw(false)
    },
    onMouseMove: tV,
    onKeyDown: tV,
    children: (0, r.jsxs)("div", {
      className: i()(U.videoContInnerRelative, {
        [U.videoContInnerRelativePortrait]: "portrait" === ee,
        [U.videoContInnerRelativeLandscape]: "landscape" === ee
      }),
      children: [t1 && (0, r.jsx)(T.Z, {
        videoRef: e2,
        onExitFullScreen: tF,
        onTrackQuestVideoFullscreenChanged: tj,
        onTrackQuestContentClick: tS
      }), (0, r.jsxs)(v.Z, {
        ref: e => {
          e2.current = e, eg.current = e
        },
        autoPlay: X,
        playsInline: true,
        mediaLayoutType: es ? B.hV.STATIC : B.hV.RESPONSIVE,
        className: i()({
          [U.hidden]: t1,
          [U.videoInner]: true
        }),
        controls: false,
        poster: null == t2 ? true : t2.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e2.current && (e2.current.currentTime >= eV && (tl.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e2.current.currentTime)), eZ(e2.current.currentTime + 6 + 2 * Math.random()), tN(e2.current.currentTime)), e2.current.currentTime >= eF && (eB(e2.current.currentTime + 1), (0, h.qm)(en.id, e_.taskType, e2.current.currentTime), K(e2.current.currentTime)), eJ(en.id, e2.current.currentTime, e2.current.duration), eD(e2.current.currentTime / e2.current.duration * 100))
        },
        onEnded: e => {
          null != e2.current && (tN(e2.current.duration + 1), tl.info("[QV] | handleEnded: sending progress update: ".concat(e2.current.duration + 1)), eJ(en.id, e2.current.duration, e2.current.duration)), tI(w.rq.ENDED), eA(false)
        },
        onLoadedData: e => {
          tl.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eR)), eR && (tE(null != ez.current ? performance.now() - ez.current : null), eI(false), tf())
        },
        onLoadedMetadata: e => {
          null != e2.current && (tl.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tp)), e5(true), tu !== D.n1.VIDEO_HLS && tU(ti), e$ ? e2.current.volume = 0 : e2.current.volume = e0)
        },
        onLoadStart: () => {
          ez.current = performance.now(), tv(eM), tl.info("[QV] | handleLoadStart | loadingStartTime: ".concat(ez.current))
        },
        onPlaying: () => {
          if (!eW.current) return;
          let e = performance.now() - $;
          tl.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tx(e), eW.current = false
        },
        onWaiting: e => {
          eK.current = performance.now(), tl.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eK.current)), tC(), eA(true)
        },
        onProgress: e => {
          if (null == e2.current) return;
          tl.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e2.current.buffered.length));
          let t = [];
          for (let e = 0; e < e2.current.buffered.length; e++) {
            let n = e2.current.buffered.start(e),
              r = e2.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e2.current.duration,
              size: (r - n) / e2.current.duration
            })
          }
          ek(t)
        },
        onCanPlay: tz,
        onCanPlayThrough: tz,
        onSeeked: () => {
          tl.info("[QV] | handleSeeked"), tt(true)
        },
        onAbort: () => tW(w.CY.ABORT),
        onError: () => tW(w.CY.ERROR),
        onEmptied: () => tW(w.CY.EMPTIED),
        onStalled: () => tW(w.CY.STALLED),
        onClick: () => {
          tl.info("[QV] | handleVideoClick"), tq()
        },
        crossOrigin: "anonymous",
        children: [null != t3 && (0, r.jsx)("track", {
          ref: e3,
          src: t3.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != td && tu !== D.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => tW(w.CY.SOURCE_ERROR),
          src: td.url,
          type: td.mimetype
        })]
      }), (eR || eN) && eO === w.rq.PLAYING && (0, r.jsx)(m.$jN, {
        type: m.$jN.Type.WANDERING_CUBES,
        className: U.loadingSpinner
      }), eO === w.rq.PAUSED && e7 === S.yE.LOST_FOCUS && (0, r.jsx)(Y, {}), em && (0, r.jsx)(a.animated.div, {
        className: U.floatingShareButtonContainer,
        style: {
          opacity: (0, a.to)([tK.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(I.Z, {})
      }), eo && eO !== w.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.P3F, {
          onClick: () => {
            eO === w.rq.PAUSED && tI(w.rq.PLAYING), el(false)
          },
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: U.transcriptOverlay
          })
        }), (0, r.jsx)(a.animated.div, {
          className: i()(U.transcriptCont, {
            [U.transcriptContPortrait]: "portrait" === ee
          }),
          style: {
            marginBottom: (0, a.to)([tK, t$], (e, t) => "".concat(e * tc[ta] + t, "px"))
          },
          children: (0, r.jsx)(A.E, {
            quest: en,
            onClose: () => {
              el(false), tS(S.jn.VIDEO_MODAL, b.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(a.animated.div, {
        className: U.videoFooterContGradient,
        style: {
          opacity: (0, a.to)([tK.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(U.playPausePopCont, {
          [U.play]: eO === w.rq.PLAYING,
          [U.pause]: eO === w.rq.PAUSED
        }),
        children: eO === w.rq.PLAYING ? (0, r.jsx)(m.o1U, {
          className: U.playPausePopIcon
        }) : (0, r.jsx)(m.fpf, {
          className: U.playPausePopIcon
        })
      }, eO), ei && null != tn && !t1 && (0, r.jsx)(a.animated.div, {
        className: U.captionContainer,
        ref: tJ,
        style: {
          translateY: (0, a.to)([tK.to({
            range: [0, 1],
            output: [0, -tc[ta]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(m.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: U.captionText,
          children: tn.text
        })
      }), (0, r.jsxs)(a.animated.div, {
        className: U.videoFooterCont,
        style: (G = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, t7), W = W = {
          paddingInline: 16 * !!eu,
          height: (0, a.to)([tK.to({
            range: [0, 1],
            output: [0, tc[ta]]
          })], e => "".concat(e, "px"))
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(W)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(W)).forEach(function(e) {
          Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(W, e))
        }), G),
        children: [(0, r.jsx)(N.Z, {
          percent: null != eQ ? eQ : ex,
          animate: true !== e4.current && !eP,
          interactionEnabled: e8 && eq,
          backgroundColor: tZ ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tZ ? ew : true,
          duration: null != (Q = null == (d = e2.current) ? true : d.duration) ? Q : 1,
          maxSeekableTime: tZ && eq ? to : true,
          onClick: e => {
            tU(e), eO === w.rq.ENDED && tI(w.rq.PLAYING)
          },
          onScrubBack: tB,
          rounded: eu,
          onScrubForward: tH
        }), (0, r.jsx)(a.animated.div, {
          className: U.videoControlsCont,
          style: {
            paddingTop: (0, a.to)([tK.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, a.to)([tK.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, a.to)([tK.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => ey(true),
          onBlur: () => ey(false),
          children: (0, r.jsx)(P.Z, {
            videoRef: e2,
            videoTask: z,
            playerState: eO,
            animSpring: tK,
            visible: tZ,
            seekForwardEnabled: t4,
            hideCaptionBtn: null == t3,
            hideTranscriptBtn: t8,
            size: ta,
            handlePlaybackBtnClick: tq,
            handleTranscriptBtnClick: () => {
              el(!eo), tS(S.jn.VIDEO_MODAL, eo ? b.jZ.TRANSCRIPT_DISABLE : b.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ea(!ei), tS(S.jn.VIDEO_MODAL, ei ? b.jZ.CLOSED_CAPTIONING_DISABLE : b.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !es;
              tl.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, O.fn)(null == (e = e2.current) ? true : e.parentNode, e2.current);
              t && null != n ? ((0, O.Dj)(n), n.addEventListener(O.NO, tF), tj(true), ts(w._H.LG)) : t || null == n || (n.removeEventListener(O.NO, tF), tj(false), (0, O.Pr)(n), ts(w._H.MD)), ec(t)
            },
            handleSeekBackBtnClick: tB,
            handleSeekForwardBtnClick: tH,
            handleControlBarPendingInteraction: eU,
            onVolumeChange: tP
          })
        })]
      })]
    })
  })
}