/** Chunk was on 75909 **/
/** chunk id: 656357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
  Chunk55160 = require("./55160.js"),
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
  Chunk475595 = require("./475595.js"),
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

function H(e) {
  var t, n, l, u, v, B, H, Q, G;
  let {
    videoTask: K,
    onOptimisticProgressUpdate: W,
    autoplay: z,
    parentTransitionState: X,
    performanceClockStartTime: J,
    orientation: $
  } = e, {
    sourceQuestContent: ee,
    quest: et,
    videoSessionId: en
  } = o.useContext(R.VideoQuestModalContext), er = (0, S.km)(e => e.transcriptEnabled), eo = (0, S.km)(e => e.setTranscriptEnabled), el = (0, S.km)(e => e.captionEnabled), ei = (0, S.km)(e => e.setCaptionEnabled), ea = (0, S.km)(e => e.fullScreenEnabled), es = (0, S.km)(e => e.setFullScreenEnabled), {
    enabled: ec,
    variant: eu
  } = _.EO.useConfig({
    location: Z.dr.VIDEO_MODAL
  }), ed = eu === _.m_.OVERLAY_SHARE_ON_VIDEO, {
    focused: em,
    focusedChanged: ef
  } = (0, k.xU)(), {
    visible: ep,
    visibleChanged: ev,
    targetRef: eE
  } = (0, k.Yy)(), [eg, eO] = o.useState(true === z ? A.rq.PLAYING : A.rq.PAUSED), [eh, eb] = o.useState(false), [eC, eS] = o.useState(false), e_ = (0, C.il)(et), [ey, ex] = o.useState(e_.percentComplete), ej = o.useCallback(e => {
    eQ(null), ex(e)
  }, []), [eP, eD] = o.useState(false), [eR, eT] = o.useState(true), [eI, eN] = o.useState(false), [eA, ew] = o.useState([]), [ek, eL] = o.useState(E.Z.getEffectiveConnectionSpeed()), [eM, eV] = o.useState(0), [eZ, eF] = o.useState(0), [eB, eU] = o.useState(false), [eq, eY] = o.useState(false), [eH, eQ] = o.useState(null), eG = o.useRef(true), eK = o.useRef(null), eW = o.useRef(null), ez = (0, S.km)(e => {
    var t;
    return null != (t = e.videoProgress[et.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, s.X), eX = (0, S.km)(e => e.setVideoProgress), eJ = (0, S.km)(e => e.muted), e$ = (0, S.km)(e => e.volume), e0 = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), e1 = (0, o.useRef)(null), e2 = (0, o.useRef)(null), e3 = o.useRef(true), e4 = (null == (t = et.userStatus) ? true : t.completedAt) != null, [e8, e7] = o.useState(null), [e9, e6] = o.useState(false), [e5, te] = o.useState(false), [tt, tn] = o.useState(null), tr = e4 ? null != (v = null == (n = e1.current) ? true : n.duration) ? v : 0 : Math.max(ez.maxTimestampSec, e_.progressSeconds), to = o.useMemo(() => (0, y.T)({
    quest: et,
    location: Z.dr.VIDEO_MODAL
  }), [et]), tl = (0, w.$R)(e4, ez, e_), [ti, ta] = o.useState(A._H.MD), ts = {
    [A._H.MD]: 50,
    [A._H.LG]: 58
  };
  (0, m.Ng)(() => {
    e3.current && (e3.current = false, eL(E.Z.getEffectiveConnectionSpeed()), e4 && ez.timestampSec >= ez.duration && eX(et.id, 0, ez.duration))
  });
  let {
    videoAsset: tc,
    videoAssetType: tu,
    hlsRef: td,
    onFirstChunkLoaded: tm
  } = (0, L.Z)(e1, ek, tl), {
    trackQuestVideoLoadingStarted: tf,
    trackQuestVideoLoadingEnded: tp,
    trackQuestVideoProgressed: tv,
    trackQuestVideoResumed: tE,
    trackQuestVideoPaused: tg,
    trackQuestVideoFocusChange: tO,
    trackQuestContentClick: th,
    trackQuestVideoBufferingStarted: tb,
    trackQuestVideoBufferingEnded: tC,
    trackWatchTimeAnalytics: tS,
    trackQuestVideoTimeToFirstFrame: t_,
    trackQuestVideoFullscreenChanged: ty,
    trackQuestVideoError: tx,
    trackQuestVideoVolumeChanged: tj
  } = (0, M.Z)({
    questId: et.id,
    isQuestCompleted: e4,
    videoRef: e1,
    hlsRef: td,
    videoSessionId: en,
    videoAssetId: tu,
    sourceQuestContent: ee,
    logger: to
  });
  (0, V.Z)({
    videoAssetUrl: null == tc ? true : tc.url,
    videoRef: e1,
    hlsRef: td,
    videoAssetType: tu
  });
  let tP = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e1.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tD
    } = (0, x.Z)({
      getCurrentVideoTime: tP,
      isPlaying: eg === A.rq.PLAYING,
      isMetadataLoaded: e9,
      isInitialSeekComplete: e5,
      onAnalytics: tS,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tR = o.useCallback(e => {
      if (to.info("[QV] | updatePlayerState | playerState: ".concat(e)), eO(e), null != e1.current) switch (e) {
        case A.rq.PLAYING:
          e1.current.paused && tE(e8), e7(null), e1.current.play();
          break;
        case A.rq.PAUSED:
          e1.current.paused || tD(), e1.current.pause(), eG.current = false;
          break;
        case A.rq.ENDED:
          tD(), eo(false)
      }
    }, [tE, e8, tD, eo, to]);
  o.useEffect(() => {
    tg(e8)
  }, [e8, tg]), o.useEffect(() => {
    ef && tO(em, eg)
  }, [em, ef, eg, tO]);
  let tT = o.useCallback(e => {
    var t;
    e4 || (null == (t = et.userStatus) ? true : t.enrolledAt) == null || (to.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, C.FI)(et, e)), tv()
  }, [e4, et, to, tv]);
  o.useEffect(() => {
    X !== d.Dvm.HIDDEN && X !== d.Dvm.EXITING && X !== d.Dvm.EXITED && (null == X || !ev || ep || e4) && (!ef || em || e4) || null == e1.current || eg !== A.rq.PLAYING || (to.info("[QV] | Pausing video | playerState: ".concat(eg, ", parentTransitionState: ").concat(X, ", visible: ").concat(ep, ", focused: ").concat(em, ", isQuestCompleted: ").concat(e4)), tR(A.rq.PAUSED), e4 || e7(b.yE.LOST_FOCUS))
  }, [X, em, ef, ep, ev, eg, e4, tR, tT, to]);
  let [tI, tN] = o.useState(false), tA = o.useRef(null), tw = o.useRef(performance.now()), tk = o.useCallback(() => {
    null != tA.current && clearTimeout(tA.current), eg === A.rq.PLAYING && (tA.current = setTimeout(() => {
      eg === A.rq.PLAYING && tN(true)
    }, Math.max(0, 3e3 - (performance.now() - tw.current))))
  }, [eg]), tL = () => {
    tN(false), tw.current = performance.now(), tk()
  };
  o.useEffect(() => {
    if (eg !== A.rq.PLAYING) {
      tN(false), null != tA.current && clearTimeout(tA.current);
      return
    }
    return tk(), () => {
      null != tA.current && clearTimeout(tA.current)
    }
  }, [eg, tk]);
  let tM = !tI && (eC || eh || eg === A.rq.ENDED),
    tV = o.useCallback(() => {
      var e;
      to.info("[QV] | handleFullScreenExit");
      let t = (0, g.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
      null == t || (0, g.rB)(t) || (t.removeEventListener(g.NO, tV), es(false), ty(false), ta(A._H.MD))
    }, [es, to, ty]),
    tZ = () => {
      if (null == e1.current) return;
      let e = Math.max(e1.current.currentTime - 10, 0);
      to.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tB(e), eg === A.rq.ENDED && tR(A.rq.PAUSED), th(b.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD)
    },
    tF = () => {
      if (null == e1.current || !t2) return;
      let e = Math.min(e1.current.currentTime + 10, tr);
      to.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tB(e), eg !== A.rq.ENDED && e >= e1.current.duration && tR(A.rq.ENDED), th(b.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e1.current;
    return () => {
      let t = (0, g.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(g.NO, tV)
    }
  }, [tV]);
  let tB = o.useCallback(e => {
      var t;
      null != e1.current && (to.info("[QV] | seekTimeline | timeSec: ".concat(e)), eQ(e / (null != (t = e1.current.duration) ? t : 1) * 100), tD(), eD(true), te(false), e1.current.currentTime = e, eX(et.id, e, e1.current.duration))
    }, [e1, eX, et.id, tD, to]),
    tU = () => {
      if (null != e1.current) switch (to.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eg)), eg) {
        case A.rq.ENDED:
          tB(0), tR(A.rq.PLAYING);
          break;
        case A.rq.PLAYING:
          tR(A.rq.PAUSED), e7(b.yE.PAUSE_BUTTON);
          break;
        default:
          tR(A.rq.PLAYING)
      }
    },
    tq = e => {
      tn(e)
    },
    tY = e => {
      tn(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tH = o.useCallback(() => {
      if (null == e1.current || (to.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e1.current.textTracks.length)), 0 === e1.current.textTracks.length)) return;
      let e = e1.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, w.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tq(n), n.onexit = () => tY(n))
        }
    }, [e1, to]);
  o.useEffect(() => {
    if (null == e2.current) return;
    let e = e2.current;
    return e.addEventListener("load", tH), () => {
      null != e && e.removeEventListener("load", tH)
    }
  }, [e2, tH]);
  let tQ = o.useCallback(e => {
      var t;
      to.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e1.current) ? true : t.currentTime, ", videoAssetId: ").concat(tu, ", connectionSpeed: ").concat(ek)), tx(e)
    }, [ek, tx, e1, tu, to]),
    tG = e => {
      to.info("[QV] | handleCanPlay: playerState: ".concat(eg)), null != e1.current && eg === A.rq.PLAYING && (to.info("[QV] | handleCanPlay: did NOT early return"), eR && (to.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eR)), eT(false)), eI && (to.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eI)), tC(null != eW.current ? performance.now() - eW.current : null), eN(false)), to.info("[QV] | handleCanPlay: updating player state to playing"), tR(A.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eP) return;
    let e = setTimeout(() => {
      eD(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eP]);
  let [{
    controlBarAnimSpring: tK
  }, tW] = (0, d.q_F)(() => ({
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
  })), tz = (0, o.useRef)(null), [{
    captionHeightSpring: tX
  }, tJ] = (0, d.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: q
  }));
  o.useEffect(() => {
    var e, t;
    return tJ({
      captionHeightSpring: el && null != tt && null != (t = null == (e = tz.current) ? true : e.clientHeight) ? t : 0,
      immediate: e0
    }), () => {
      tX.stop()
    }
  }, [el, tJ, e0, tt, tX]), o.useEffect(() => (tW({
    controlBarAnimSpring: tM || eB ? 1 : 0,
    immediate: e0
  }), () => {
    tK.stop()
  }), [tM, tW, e0, eB, tK]);
  let t$ = eg === A.rq.ENDED,
    t0 = o.useMemo(() => (0, j.fh)(et, j.eC.VIDEO_PLAYER_THUMBNAIL, true, false), [et]),
    t1 = o.useMemo(() => (0, j.fh)(et, j.eC.VIDEO_PLAYER_CAPTION, true, false), [et]),
    t2 = e4 || ez.maxTimestampSec >= (null != (B = null == (l = e1.current) ? true : l.currentTime) ? B : 0) + 1,
    t3 = o.useMemo(() => null === (0, j.fh)(et, j.eC.VIDEO_PLAYER_TRANSCRIPT, true, false), [et]),
    t4 = ec ? {} : {
      paddingLeft: (0, a.to)([tK.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px")),
      paddingRight: (0, a.to)([tK.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px"))
    };
  return (0, r.jsx)(d.P3F, {
    className: i()(U.videoCont, {
      [U.videoContRoundedCorners]: ec
    }),
    "data-fullscreen": ea,
    tabIndex: false,
    onMouseEnter: () => {
      eb(true), tN(false), tw.current = performance.now(), null != tA.current && clearTimeout(tA.current)
    },
    onMouseLeave: () => {
      eb(false), tN(false)
    },
    onMouseMove: tL,
    onKeyDown: tL,
    children: (0, r.jsxs)("div", {
      className: i()(U.videoContInnerRelative, {
        [U.videoContInnerRelativePortrait]: "portrait" === $,
        [U.videoContInnerRelativeLandscape]: "landscape" === $
      }),
      children: [t$ && (0, r.jsx)(D.Z, {
        videoRef: e1,
        onExitFullScreen: tV,
        onTrackQuestVideoFullscreenChanged: ty,
        onTrackQuestContentClick: th
      }), (0, r.jsxs)(p.Z, {
        ref: e => {
          e1.current = e, eE.current = e
        },
        autoPlay: z,
        playsInline: true,
        mediaLayoutType: ea ? F.hV.STATIC : F.hV.RESPONSIVE,
        className: i()({
          [U.hidden]: t$,
          [U.videoInner]: true
        }),
        controls: false,
        poster: null == t0 ? true : t0.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e1.current && (e1.current.currentTime >= eM && (to.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e1.current.currentTime)), eV(e1.current.currentTime + 6 + 2 * Math.random()), tT(e1.current.currentTime)), e1.current.currentTime >= eZ && (eF(e1.current.currentTime + 1), (0, O.qm)(et.id, e_.taskType, e1.current.currentTime), W(e1.current.currentTime)), eX(et.id, e1.current.currentTime, e1.current.duration), ej(e1.current.currentTime / e1.current.duration * 100))
        },
        onEnded: e => {
          null != e1.current && (tT(e1.current.duration + 1), to.info("[QV] | handleEnded: sending progress update: ".concat(e1.current.duration + 1)), eX(et.id, e1.current.duration, e1.current.duration)), tR(A.rq.ENDED), eN(false)
        },
        onLoadedData: e => {
          to.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eR)), eR && (tp(null != eK.current ? performance.now() - eK.current : null), eT(false), tm())
        },
        onLoadedMetadata: e => {
          null != e1.current && (to.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tu)), e6(true), tu !== j.eC.VIDEO_PLAYER_VIDEO_HLS && tB(tl), eJ ? e1.current.volume = 0 : e1.current.volume = e$)
        },
        onLoadStart: () => {
          eK.current = performance.now(), tf(ek), to.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eK.current))
        },
        onPlaying: () => {
          if (!eG.current) return;
          let e = performance.now() - J;
          to.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), t_(e), eG.current = false
        },
        onWaiting: e => {
          eW.current = performance.now(), to.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eW.current)), tb(), eN(true)
        },
        onProgress: e => {
          if (null == e1.current) return;
          to.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e1.current.buffered.length));
          let t = [];
          for (let e = 0; e < e1.current.buffered.length; e++) {
            let n = e1.current.buffered.start(e),
              r = e1.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e1.current.duration,
              size: (r - n) / e1.current.duration
            })
          }
          ew(t)
        },
        onCanPlay: tG,
        onCanPlayThrough: tG,
        onSeeked: () => {
          to.info("[QV] | handleSeeked"), te(true)
        },
        onAbort: () => tQ(A.CY.ABORT),
        onError: () => tQ(A.CY.ERROR),
        onEmptied: () => tQ(A.CY.EMPTIED),
        onStalled: () => tQ(A.CY.STALLED),
        onClick: () => {
          to.info("[QV] | handleVideoClick"), tU()
        },
        crossOrigin: "anonymous",
        children: [null != t1 && (0, r.jsx)("track", {
          ref: e2,
          src: t1.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tc && tu !== j.eC.VIDEO_PLAYER_VIDEO_HLS && null != tc.mimetype && (0, r.jsx)("source", {
          onError: () => tQ(A.CY.SOURCE_ERROR),
          src: tc.url,
          type: tc.mimetype
        })]
      }), (eR || eI) && eg === A.rq.PLAYING && (0, r.jsx)(d.$jN, {
        type: d.$jN.Type.WANDERING_CUBES,
        className: U.loadingSpinner
      }), eg === A.rq.PAUSED && e8 === b.yE.LOST_FOCUS && (0, r.jsx)(Y, {}), ed && (0, r.jsx)(a.animated.div, {
        className: U.floatingShareButtonContainer,
        style: {
          opacity: (0, a.to)([tK.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(T.Z, {})
      }), er && eg !== A.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, {
          onClick: () => {
            eg === A.rq.PAUSED && tR(A.rq.PLAYING), eo(false)
          },
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: U.transcriptOverlay
          })
        }), (0, r.jsx)(a.animated.div, {
          className: i()(U.transcriptCont, {
            [U.transcriptContPortrait]: "portrait" === $
          }),
          style: {
            marginBottom: (0, a.to)([tK, tX], (e, t) => "".concat(e * ts[ti] + t, "px"))
          },
          children: (0, r.jsx)(N.E, {
            quest: et,
            onClose: () => {
              eo(false), th(b.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE)
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
          [U.play]: eg === A.rq.PLAYING,
          [U.pause]: eg === A.rq.PAUSED
        }),
        children: eg === A.rq.PLAYING ? (0, r.jsx)(d.o1U, {
          className: U.playPausePopIcon
        }) : (0, r.jsx)(d.fpf, {
          className: U.playPausePopIcon
        })
      }, eg), el && null != tt && !t$ && (0, r.jsx)(a.animated.div, {
        className: U.captionContainer,
        ref: tz,
        style: {
          translateY: (0, a.to)([tK.to({
            range: [0, 1],
            output: [0, -ts[ti]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(d.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: U.captionText,
          children: tt.text
        })
      }), (0, r.jsxs)(a.animated.div, {
        className: U.videoFooterCont,
        style: (Q = function(e) {
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
        }({}, t4), G = G = {
          paddingInline: 16 * !!ec,
          height: (0, a.to)([tK.to({
            range: [0, 1],
            output: [0, ts[ti]]
          })], e => "".concat(e, "px"))
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(Q, Object.getOwnPropertyDescriptors(G)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(G)).forEach(function(e) {
          Object.defineProperty(Q, e, Object.getOwnPropertyDescriptor(G, e))
        }), Q),
        children: [(0, r.jsx)(I.Z, {
          percent: null != eH ? eH : ey,
          animate: true !== e3.current && !eP,
          interactionEnabled: e4 && eq,
          backgroundColor: tM ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tM ? eA : true,
          duration: null != (H = null == (u = e1.current) ? true : u.duration) ? H : 1,
          maxSeekableTime: tM && eq ? tr : true,
          onClick: e => {
            tB(e), eg === A.rq.ENDED && tR(A.rq.PLAYING)
          },
          onScrubBack: tZ,
          rounded: ec,
          onScrubForward: tF
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
          onFocus: () => eS(true),
          onBlur: () => eS(false),
          children: (0, r.jsx)(P.Z, {
            videoRef: e1,
            videoTask: K,
            playerState: eg,
            animSpring: tK,
            visible: tM,
            seekForwardEnabled: t2,
            hideCaptionBtn: null == t1,
            hideTranscriptBtn: t3,
            size: ti,
            handlePlaybackBtnClick: tU,
            handleTranscriptBtnClick: () => {
              eo(!er), th(b.jn.VIDEO_MODAL, er ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ei(!el), th(b.jn.VIDEO_MODAL, el ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ea;
              to.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, g.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
              t && null != n ? ((0, g.Dj)(n), n.addEventListener(g.NO, tV), ty(true), ta(A._H.LG)) : t || null == n || (n.removeEventListener(g.NO, tV), ty(false), (0, g.Pr)(n), ta(A._H.MD)), es(t)
            },
            handleSeekBackBtnClick: tZ,
            handleSeekForwardBtnClick: tF,
            handleControlBarPendingInteraction: eU,
            onVolumeChange: tj
          })
        })]
      })]
    })
  })
}