/** Chunk was on 75909 **/
/** chunk id: 656357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk782425 = require("./782425.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk866960 = require("./866960.js"),
  Chunk228488 = require("./228488.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk535584 = require("./535584.js"),
  Chunk550235 = require("./550235.js"),
  Chunk475595 = require("./475595.js"),
  Chunk254579 = require("./254579.js"),
  Chunk542347 = require("./542347.js"),
  Chunk922826 = require("./922826.jsx"),
  Chunk104800 = require("./104800.jsx"),
  Chunk215113 = require("./215113.jsx"),
  Chunk449788 = require("./449788.jsx"),
  Chunk508067 = require("./508067.jsx"),
  Chunk890193 = require("./890193.jsx"),
  Chunk325916 = require("./325916.js"),
  Chunk939389 = require("./939389.js"),
  Chunk267322 = require("./267322.js"),
  Chunk767067 = require("./767067.jsx"),
  Chunk70417 = require("./70417.js"),
  Chunk934703 = require("./934703.js"),
  Chunk981786 = require("./981786.js"),
  Chunk324805 = require("./324805.js"),
  Chunk217702 = require("./217702.js"),
  Chunk209668 = require("./209668.js");
let B = {
  tension: 250,
  friction: 5,
  clamp: true
};

function q(e) {
  var t, n, l, q, U, Y, Q;
  let {
    videoTask: H,
    onOptimisticProgressUpdate: G,
    autoplay: z,
    parentTransitionState: W,
    performanceClockStartTime: K,
    orientation: X
  } = e, {
    sourceQuestContent: $,
    quest: J,
    videoSessionId: ee
  } = o.useContext(P.VideoQuestModalContext), et = (0, C.km)(e => e.transcriptEnabled), en = (0, C.km)(e => e.setTranscriptEnabled), er = (0, C.km)(e => e.captionEnabled), eo = (0, C.km)(e => e.setCaptionEnabled), el = (0, C.km)(e => e.fullScreenEnabled), ei = (0, C.km)(e => e.setFullScreenEnabled), {
    focused: ea,
    focusedChanged: es
  } = (0, k.xU)(), {
    visible: ec,
    visibleChanged: eu,
    targetRef: ed
  } = (0, k.Yy)(), [em, ef] = o.useState(true === z ? N.rq.PLAYING : N.rq.PAUSED), [ep, ev] = o.useState(false), [eg, eE] = o.useState(false), eh = (0, _.il)(J), [eC, eb] = o.useState(eh.percentComplete), eS = o.useCallback(e => {
    eB(null), eb(e)
  }, []), [eO, e_] = o.useState(false), [ex, ey] = o.useState(true), [ej, eP] = o.useState(false), [eD, eT] = o.useState([]), [eI, eN] = o.useState(p.Z.getEffectiveConnectionSpeed()), [ew, ek] = o.useState(0), [eA, eM] = o.useState(0), [eR, eL] = o.useState(false), [eV, eZ] = o.useState(false), [eF, eB] = o.useState(null), eq = o.useRef(true), eU = o.useRef(null), eY = o.useRef(null), eQ = (0, C.km)(e => {
    var t;
    return null != (t = e.videoProgress[J.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, s.X), eH = (0, C.km)(e => e.setVideoProgress), eG = (0, C.km)(e => e.muted), ez = (0, C.km)(e => e.volume), eW = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), eK = (0, o.useRef)(null), eX = (0, o.useRef)(null), e$ = o.useRef(true), eJ = (null == (t = J.userStatus) ? true : t.completedAt) != null, e0 = o.useMemo(() => J.config.features.includes(V.S7.FULL_EPISODE_VIDEO_QUEST), [J.config.features]), e1 = o.useRef(false), [e2, e4] = o.useState(null), [e8, e3] = o.useState(false), [e6, e9] = o.useState(false), [e7, e5] = o.useState(null), te = eJ ? null != (U = null == (n = eK.current) ? true : n.duration) ? U : 0 : Math.max(eQ.maxTimestampSec, eh.progressSeconds), tt = o.useMemo(() => (0, b.T)({
    quest: J,
    location: V.dr.VIDEO_MODAL
  }), [J]), tn = (0, w.$R)(eJ, eQ, eh), [tr, to] = o.useState(N._H.MD), tl = {
    [N._H.MD]: 50,
    [N._H.LG]: 58
  };
  (0, d.Ng)(() => {
    e$.current && (e$.current = false, eN(p.Z.getEffectiveConnectionSpeed()), eJ && eQ.timestampSec >= eQ.duration && eH(J.id, 0, eQ.duration))
  });
  let {
    videoAsset: ti,
    videoAssetType: ta,
    hlsRef: ts,
    onFirstChunkLoaded: tc
  } = (0, M.Z)(eK, eI, tn), {
    trackQuestVideoLoadingStarted: tu,
    trackQuestVideoLoadingEnded: td,
    trackQuestVideoProgressed: tm,
    trackQuestVideoResumed: tf,
    trackQuestVideoPaused: tp,
    trackQuestVideoFocusChange: tv,
    trackQuestContentClick: tg,
    trackQuestVideoBufferingStarted: tE,
    trackQuestVideoBufferingEnded: th,
    trackWatchTimeAnalytics: tC,
    trackQuestVideoTimeToFirstFrame: tb,
    trackQuestVideoFullscreenChanged: tS,
    trackQuestVideoError: tO,
    trackQuestVideoVolumeChanged: t_
  } = (0, R.Z)({
    questId: J.id,
    isQuestCompleted: eJ,
    videoRef: eK,
    hlsRef: ts,
    videoSessionId: ee,
    videoAssetId: ta,
    sourceQuestContent: $,
    logger: tt,
    isFullEpisodeVideoQuest: e0
  });
  (0, L.Z)({
    videoAssetUrl: null == ti ? true : ti.url,
    videoRef: eK,
    hlsRef: ts,
    videoAssetType: ta
  });
  let tx = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = eK.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: ty
    } = (0, S.Z)({
      getCurrentVideoTime: tx,
      isPlaying: em === N.rq.PLAYING,
      isMetadataLoaded: e8,
      isInitialSeekComplete: e6,
      onAnalytics: tC,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tj = o.useCallback(e => {
      if (tt.info("[QV] | updatePlayerState | playerState: ".concat(e)), ef(e), null != eK.current) switch (e) {
        case N.rq.PLAYING:
          eK.current.paused && tf(e2), e4(null), eK.current.play();
          break;
        case N.rq.PAUSED:
          eK.current.paused || ty(), eK.current.pause(), eq.current = false;
          break;
        case N.rq.ENDED:
          ty(), en(false)
      }
    }, [tf, e2, ty, en, tt]);
  o.useEffect(() => {
    tp(e2)
  }, [e2, tp]), o.useEffect(() => {
    es && tv(ea, em)
  }, [ea, es, em, tv]);
  let tP = o.useCallback(e => {
    var t;
    eJ || (null == (t = J.userStatus) ? true : t.enrolledAt) == null || (tt.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, x.FI)(J, e)), tm()
  }, [eJ, J, tt, tm]);
  o.useEffect(() => {
    W !== u.Dvm.HIDDEN && W !== u.Dvm.EXITING && W !== u.Dvm.EXITED && (null == W || !eu || ec || eJ) && (!es || ea || eJ) || null == eK.current || em !== N.rq.PLAYING || (tt.info("[QV] | Pausing video | playerState: ".concat(em, ", parentTransitionState: ").concat(W, ", visible: ").concat(ec, ", focused: ").concat(ea, ", isQuestCompleted: ").concat(eJ)), tj(N.rq.PAUSED), eJ || e4(h.yE.LOST_FOCUS))
  }, [W, ea, es, ec, eu, em, eJ, tj, tP, tt]);
  let [tD, tT] = o.useState(false), tI = o.useRef(null), tN = o.useRef(performance.now()), tw = o.useCallback(() => {
    null != tI.current && clearTimeout(tI.current), em === N.rq.PLAYING && (tI.current = setTimeout(() => {
      em === N.rq.PLAYING && tT(true)
    }, Math.max(0, 3e3 - (performance.now() - tN.current))))
  }, [em]), tk = () => {
    tT(false), tN.current = performance.now(), tw()
  };
  o.useEffect(() => {
    if (em !== N.rq.PLAYING) {
      tT(false), null != tI.current && clearTimeout(tI.current);
      return
    }
    return tw(), () => {
      null != tI.current && clearTimeout(tI.current)
    }
  }, [em, tw]);
  let tA = !tD && (eg || ep || em === N.rq.ENDED),
    tM = o.useCallback(() => {
      var e;
      tt.info("[QV] | handleFullScreenExit");
      let t = (0, v.fn)(null == (e = eK.current) ? true : e.parentNode, eK.current);
      null == t || (0, v.rB)(t) || (t.removeEventListener(v.NO, tM), ei(false), tS(false), to(N._H.MD))
    }, [ei, tt, tS]),
    tR = () => {
      if (null == eK.current) return;
      let e = Math.max(eK.current.currentTime - 10, 0);
      tt.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tV(e), em === N.rq.ENDED && tj(N.rq.PAUSED), tg(h.jn.VIDEO_MODAL, E.jZ.SEEK_BACKWARD)
    },
    tL = () => {
      if (null == eK.current || !t0) return;
      let e = Math.min(eK.current.currentTime + 10, te);
      tt.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tV(e), em !== N.rq.ENDED && e >= eK.current.duration && tj(N.rq.ENDED), tg(h.jn.VIDEO_MODAL, E.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = eK.current;
    return () => {
      let t = (0, v.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(v.NO, tM)
    }
  }, [tM]);
  let tV = o.useCallback(e => {
      var t;
      null != eK.current && (tt.info("[QV] | seekTimeline | timeSec: ".concat(e)), eB(e / (null != (t = eK.current.duration) ? t : 1) * 100), ty(), e_(true), e9(false), eK.current.currentTime = e, eH(J.id, e, eK.current.duration))
    }, [eK, eH, J.id, ty, tt]),
    tZ = () => {
      if (null != eK.current) switch (tt.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(em)), em) {
        case N.rq.ENDED:
          tV(0), tj(N.rq.PLAYING);
          break;
        case N.rq.PLAYING:
          tj(N.rq.PAUSED), e4(h.yE.PAUSE_BUTTON);
          break;
        default:
          tj(N.rq.PLAYING)
      }
    },
    tF = e => {
      e5(e)
    },
    tB = e => {
      e5(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tq = o.useCallback(() => {
      if (null == eK.current || (tt.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(eK.current.textTracks.length)), 0 === eK.current.textTracks.length)) return;
      let e = eK.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, w.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tF(n), n.onexit = () => tB(n))
        }
    }, [eK, tt]);
  o.useEffect(() => {
    if (null == eX.current) return;
    let e = eX.current;
    return e.addEventListener("load", tq), () => {
      null != e && e.removeEventListener("load", tq)
    }
  }, [eX, tq]);
  let tU = o.useCallback(e => {
      var t;
      tt.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = eK.current) ? true : t.currentTime, ", videoAssetId: ").concat(ta, ", connectionSpeed: ").concat(eI)), tO(e)
    }, [eI, tO, eK, ta, tt]),
    tY = o.useRef(false);
  o.useEffect(() => {
    null != ti || tY.current || (tY.current = true, tO(N.CY.NO_VALID_SOURCE))
  }, [ti, tO, tY]);
  let tQ = e => {
    tt.info("[QV] | handleCanPlay: playerState: ".concat(em)), null != eK.current && em === N.rq.PLAYING && (tt.info("[QV] | handleCanPlay: did NOT early return"), ex && (tt.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ex)), ey(false)), ej && (tt.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ej)), th(null != eY.current ? performance.now() - eY.current : null), eP(false)), tt.info("[QV] | handleCanPlay: updating player state to playing"), tj(N.rq.PLAYING))
  };
  o.useEffect(() => {
    if (!eO) return;
    let e = setTimeout(() => {
      e_(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eO]);
  let [{
    controlBarAnimSpring: tH
  }, tG] = (0, u.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: B,
    onStart: () => {
      eZ(false)
    },
    onRest: e => {
      1 === e.value && eZ(true)
    }
  })), tz = (0, o.useRef)(null), [{
    captionHeightSpring: tW
  }, tK] = (0, u.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: B
  }));
  o.useEffect(() => {
    var e, t;
    return tK({
      captionHeightSpring: er && null != e7 && null != (t = null == (e = tz.current) ? true : e.clientHeight) ? t : 0,
      immediate: eW
    }), () => {
      tW.stop()
    }
  }, [er, tK, eW, e7, tW]), o.useEffect(() => (tG({
    controlBarAnimSpring: tA || eR ? 1 : 0,
    immediate: eW
  }), () => {
    tH.stop()
  }), [tA, tG, eW, eR, tH]);
  let tX = em === N.rq.ENDED,
    t$ = o.useMemo(() => (0, O.fh)(J, O.eC.VIDEO_PLAYER_THUMBNAIL, true, false), [J]),
    tJ = o.useMemo(() => (0, O.fh)(J, O.eC.VIDEO_PLAYER_CAPTION, true, false), [J]),
    t0 = eJ || eQ.maxTimestampSec >= (null != (Y = null == (l = eK.current) ? true : l.currentTime) ? Y : 0) + 1,
    t1 = o.useMemo(() => null === (0, O.fh)(J, O.eC.VIDEO_PLAYER_TRANSCRIPT, true, false), [J]);
  return (0, r.jsx)(u.P3F, {
    className: F.videoCont,
    "data-fullscreen": el,
    tabIndex: false,
    onMouseEnter: () => {
      ev(true), tT(false), tN.current = performance.now(), null != tI.current && clearTimeout(tI.current)
    },
    onMouseLeave: () => {
      ev(false), tT(false)
    },
    onMouseMove: tk,
    onKeyDown: tk,
    children: (0, r.jsxs)("div", {
      className: i()(F.videoContInnerRelative, {
        [F.videoContInnerRelativePortrait]: "portrait" === X,
        [F.videoContInnerRelativeLandscape]: "landscape" === X
      }),
      children: [tX && (0, r.jsx)(j.Z, {
        videoRef: eK,
        onExitFullScreen: tM,
        onTrackQuestVideoFullscreenChanged: tS,
        onTrackQuestContentClick: tg,
        orientation: X
      }), (0, r.jsxs)(f.Z, {
        ref: e => {
          eK.current = e, ed.current = e
        },
        autoPlay: z,
        playsInline: true,
        mediaLayoutType: el ? Z.hV.STATIC : Z.hV.RESPONSIVE,
        className: i()({
          [F.hidden]: tX,
          [F.videoInner]: true
        }),
        controls: false,
        poster: null == t$ ? true : t$.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          if (null == eK.current) return;
          let t = eK.current.currentTime >= H.target && !e1.current && e0;
          if (eK.current.currentTime >= ew || t) {
            var n;
            tt.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(eK.current.currentTime)), (n = eK.current.currentTime) >= H.target && (e1.current = true), ek(n + 6 + 2 * Math.random()), tP(n)
          }
          eK.current.currentTime >= eA && (eM(eK.current.currentTime + 1), (0, g.qm)(J.id, eh.taskType, eK.current.currentTime), G(eK.current.currentTime)), eH(J.id, eK.current.currentTime, eK.current.duration), eS(eK.current.currentTime / eK.current.duration * 100)
        },
        onEnded: e => {
          null != eK.current && (tP(eK.current.duration + 1), tt.info("[QV] | handleEnded: sending progress update: ".concat(eK.current.duration + 1)), eH(J.id, eK.current.duration, eK.current.duration)), tj(N.rq.ENDED), eP(false)
        },
        onLoadedData: e => {
          tt.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ex)), ex && (td(null != eU.current ? performance.now() - eU.current : null), ey(false), tc())
        },
        onLoadedMetadata: e => {
          null != eK.current && (tt.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(ta)), e3(true), ta !== O.eC.VIDEO_PLAYER_VIDEO_HLS && tV(tn), eG ? eK.current.volume = 0 : eK.current.volume = ez)
        },
        onLoadStart: () => {
          eU.current = performance.now(), tu(eI), tt.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eU.current))
        },
        onPlaying: () => {
          if (!eq.current) return;
          let e = performance.now() - K;
          tt.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tb(e), eq.current = false
        },
        onWaiting: e => {
          eY.current = performance.now(), tt.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eY.current)), tE(), eP(true)
        },
        onProgress: e => {
          if (null == eK.current) return;
          tt.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(eK.current.buffered.length));
          let t = [];
          for (let e = 0; e < eK.current.buffered.length; e++) {
            let n = eK.current.buffered.start(e),
              r = eK.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / eK.current.duration,
              size: (r - n) / eK.current.duration
            })
          }
          eT(t)
        },
        onCanPlay: tQ,
        onCanPlayThrough: tQ,
        onSeeked: () => {
          tt.info("[QV] | handleSeeked"), e9(true)
        },
        onAbort: () => tU(N.CY.ABORT),
        onError: () => tU(N.CY.ERROR),
        onEmptied: () => tU(N.CY.EMPTIED),
        onStalled: () => tU(N.CY.STALLED),
        onClick: () => {
          tt.info("[QV] | handleVideoClick"), tZ()
        },
        crossOrigin: "anonymous",
        children: [null != tJ && (0, r.jsx)("track", {
          ref: eX,
          src: tJ.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != ti && ta !== O.eC.VIDEO_PLAYER_VIDEO_HLS && null != ti.mimetype && (0, r.jsx)("source", {
          onError: () => tU(N.CY.SOURCE_ERROR),
          src: ti.url,
          type: ti.mimetype
        })]
      }), (ex || ej) && em === N.rq.PLAYING && null != ti && (0, r.jsx)(u.$jN, {
        type: u.$jN.Type.WANDERING_CUBES,
        className: F.loadingSpinner
      }), (0, r.jsx)(A.Z, {
        hasVideoAsset: null != ti,
        playerState: em,
        pauseReason: e2
      }), (0, r.jsx)(a.animated.div, {
        className: F.floatingShareButtonContainer,
        style: {
          opacity: (0, a.to)([tH.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(D.Z, {})
      }), et && em !== N.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.P3F, {
          onClick: () => {
            em === N.rq.PAUSED && tj(N.rq.PLAYING), en(false)
          },
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: F.transcriptOverlay
          })
        }), (0, r.jsx)(a.animated.div, {
          className: i()(F.transcriptCont, {
            [F.transcriptContPortrait]: "portrait" === X
          }),
          style: {
            marginBottom: (0, a.to)([tH, tW], (e, t) => "".concat(e * tl[tr] + t, "px"))
          },
          children: (0, r.jsx)(I.E, {
            quest: J,
            onClose: () => {
              en(false), tg(h.jn.VIDEO_MODAL, E.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(a.animated.div, {
        className: F.videoFooterContGradient,
        style: {
          opacity: (0, a.to)([tH.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(F.playPausePopCont, {
          [F.play]: em === N.rq.PLAYING,
          [F.pause]: em === N.rq.PAUSED
        }),
        children: em === N.rq.PLAYING ? (0, r.jsx)(u.o1U, {
          className: F.playPausePopIcon
        }) : (0, r.jsx)(u.fpf, {
          className: F.playPausePopIcon
        })
      }, em), er && null != e7 && !tX && (0, r.jsx)(a.animated.div, {
        className: F.captionContainer,
        ref: tz,
        style: {
          translateY: (0, a.to)([tH.to({
            range: [0, 1],
            output: [0, -tl[tr]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(u.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: F.captionText,
          children: e7.text
        })
      }), (0, r.jsxs)(a.animated.div, {
        className: F.videoFooterCont,
        style: {
          height: (0, a.to)([tH.to({
            range: [0, 1],
            output: [0, tl[tr]]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(T.Z, {
          percent: null != eF ? eF : eC,
          animate: true !== e$.current && !eO,
          interactionEnabled: eJ && eV,
          backgroundColor: tA ? true : "rgba(0, 0, 0, 0.0)",
          playerState: em,
          preloadedBuffers: tA ? eD : true,
          duration: null != (Q = null == (q = eK.current) ? true : q.duration) ? Q : 1,
          isFullyVisible: tA && eV,
          maxSeekableTime: tA && eV ? te : true,
          onClick: e => {
            tV(e), em === N.rq.ENDED && tj(N.rq.PLAYING)
          },
          onScrubBack: tR,
          onScrubForward: tL
        }), (0, r.jsx)(a.animated.div, {
          className: F.videoControlsCont,
          style: {
            paddingTop: (0, a.to)([tH.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, a.to)([tH.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, a.to)([tH.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => eE(true),
          onBlur: () => eE(false),
          children: (0, r.jsx)(y.Z, {
            videoRef: eK,
            videoTask: H,
            playerState: em,
            animSpring: tH,
            visible: tA,
            seekForwardEnabled: t0,
            hideCaptionBtn: null == tJ,
            hideTranscriptBtn: t1,
            size: tr,
            handlePlaybackBtnClick: tZ,
            handleTranscriptBtnClick: () => {
              en(!et), tg(h.jn.VIDEO_MODAL, et ? E.jZ.TRANSCRIPT_DISABLE : E.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              eo(!er), tg(h.jn.VIDEO_MODAL, er ? E.jZ.CLOSED_CAPTIONING_DISABLE : E.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !el;
              tt.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, v.fn)(null == (e = eK.current) ? true : e.parentNode, eK.current);
              t && null != n ? ((0, v.Dj)(n), n.addEventListener(v.NO, tM), tS(true), to(N._H.LG)) : t || null == n || (n.removeEventListener(v.NO, tM), tS(false), (0, v.Pr)(n), to(N._H.MD)), ei(t)
            },
            handleSeekBackBtnClick: tR,
            handleSeekForwardBtnClick: tL,
            handleControlBarPendingInteraction: eL,
            onVolumeChange: t_
          })
        })]
      })]
    })
  })
}