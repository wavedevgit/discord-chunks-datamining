/** Chunk was on 75909 **/
/** chunk id: 656357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk782425 = require("./782425.js"),
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
  Chunk70417 = require("./70417.js"),
  Chunk934703 = require("./934703.js"),
  Chunk981786 = require("./981786.js"),
  Chunk324805 = require("./324805.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209668 = require("./209668.js");
let q = {
  tension: 250,
  friction: 5,
  clamp: true
};

function Y() {
  let e = (0, c.e7)([v.Z], () => v.Z.getState().theme);
  return (0, r.jsx)("div", {
    className: U.pauseText,
    style: {
      background: (0, u.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
    },
    children: (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: B.intl.string(B.t["U7Xrb+"])
    })
  })
}

function H(e) {
  var t, n, l, u, v, B, H;
  let {
    videoTask: Q,
    onOptimisticProgressUpdate: G,
    autoplay: K,
    parentTransitionState: W,
    performanceClockStartTime: z,
    orientation: X
  } = e, {
    sourceQuestContent: $,
    quest: J,
    videoSessionId: ee
  } = o.useContext(T.VideoQuestModalContext), et = (0, b.km)(e => e.transcriptEnabled), en = (0, b.km)(e => e.setTranscriptEnabled), er = (0, b.km)(e => e.captionEnabled), eo = (0, b.km)(e => e.setCaptionEnabled), el = (0, b.km)(e => e.fullScreenEnabled), ei = (0, b.km)(e => e.setFullScreenEnabled), {
    focused: ea,
    focusedChanged: es
  } = (0, L.xU)(), {
    visible: ec,
    visibleChanged: eu,
    targetRef: ed
  } = (0, L.Yy)(), [em, ef] = o.useState(true === K ? A.rq.PLAYING : A.rq.PAUSED), [ep, ev] = o.useState(false), [eE, eg] = o.useState(false), eh = (0, y.il)(J), [eC, eS] = o.useState(eh.percentComplete), eb = o.useCallback(e => {
    eB(null), eS(e)
  }, []), [eO, e_] = o.useState(false), [ex, ey] = o.useState(true), [ej, eP] = o.useState(false), [eD, eT] = o.useState([]), [eR, eN] = o.useState(E.Z.getEffectiveConnectionSpeed()), [eI, eA] = o.useState(0), [ew, eL] = o.useState(0), [ek, eM] = o.useState(false), [eV, eZ] = o.useState(false), [eF, eB] = o.useState(null), eU = o.useRef(true), eq = o.useRef(null), eY = o.useRef(null), eH = (0, b.km)(e => {
    var t;
    return null != (t = e.videoProgress[J.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, s.X), eQ = (0, b.km)(e => e.setVideoProgress), eG = (0, b.km)(e => e.muted), eK = (0, b.km)(e => e.volume), eW = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), ez = (0, o.useRef)(null), eX = (0, o.useRef)(null), e$ = o.useRef(true), eJ = (null == (t = J.userStatus) ? true : t.completedAt) != null, e0 = o.useMemo(() => J.config.features.includes(Z.S7.FULL_EPISODE_VIDEO_QUEST), [J.config.features]), e1 = o.useRef(false), [e2, e4] = o.useState(null), [e8, e3] = o.useState(false), [e6, e9] = o.useState(false), [e7, e5] = o.useState(null), te = eJ ? null != (v = null == (n = ez.current) ? true : n.duration) ? v : 0 : Math.max(eH.maxTimestampSec, eh.progressSeconds), tt = o.useMemo(() => (0, O.T)({
    quest: J,
    location: Z.dr.VIDEO_MODAL
  }), [J]), tn = (0, w.$R)(eJ, eH, eh), [tr, to] = o.useState(A._H.MD), tl = {
    [A._H.MD]: 50,
    [A._H.LG]: 58
  };
  (0, m.Ng)(() => {
    e$.current && (e$.current = false, eN(E.Z.getEffectiveConnectionSpeed()), eJ && eH.timestampSec >= eH.duration && eQ(J.id, 0, eH.duration))
  });
  let {
    videoAsset: ti,
    videoAssetType: ta,
    hlsRef: ts,
    onFirstChunkLoaded: tc
  } = (0, k.Z)(ez, eR, tn), {
    trackQuestVideoLoadingStarted: tu,
    trackQuestVideoLoadingEnded: td,
    trackQuestVideoProgressed: tm,
    trackQuestVideoResumed: tf,
    trackQuestVideoPaused: tp,
    trackQuestVideoFocusChange: tv,
    trackQuestContentClick: tE,
    trackQuestVideoBufferingStarted: tg,
    trackQuestVideoBufferingEnded: th,
    trackWatchTimeAnalytics: tC,
    trackQuestVideoTimeToFirstFrame: tS,
    trackQuestVideoFullscreenChanged: tb,
    trackQuestVideoError: tO,
    trackQuestVideoVolumeChanged: t_
  } = (0, M.Z)({
    questId: J.id,
    isQuestCompleted: eJ,
    videoRef: ez,
    hlsRef: ts,
    videoSessionId: ee,
    videoAssetId: ta,
    sourceQuestContent: $,
    logger: tt
  });
  (0, V.Z)({
    videoAssetUrl: null == ti ? true : ti.url,
    videoRef: ez,
    hlsRef: ts,
    videoAssetType: ta
  });
  let tx = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = ez.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: ty
    } = (0, _.Z)({
      getCurrentVideoTime: tx,
      isPlaying: em === A.rq.PLAYING,
      isMetadataLoaded: e8,
      isInitialSeekComplete: e6,
      onAnalytics: tC,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tj = o.useCallback(e => {
      if (tt.info("[QV] | updatePlayerState | playerState: ".concat(e)), ef(e), null != ez.current) switch (e) {
        case A.rq.PLAYING:
          ez.current.paused && tf(e2), e4(null), ez.current.play();
          break;
        case A.rq.PAUSED:
          ez.current.paused || ty(), ez.current.pause(), eU.current = false;
          break;
        case A.rq.ENDED:
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
    eJ || (null == (t = J.userStatus) ? true : t.enrolledAt) == null || (tt.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, j.FI)(J, e)), tm()
  }, [eJ, J, tt, tm]);
  o.useEffect(() => {
    W !== d.Dvm.HIDDEN && W !== d.Dvm.EXITING && W !== d.Dvm.EXITED && (null == W || !eu || ec || eJ) && (!es || ea || eJ) || null == ez.current || em !== A.rq.PLAYING || (tt.info("[QV] | Pausing video | playerState: ".concat(em, ", parentTransitionState: ").concat(W, ", visible: ").concat(ec, ", focused: ").concat(ea, ", isQuestCompleted: ").concat(eJ)), tj(A.rq.PAUSED), eJ || e4(S.yE.LOST_FOCUS))
  }, [W, ea, es, ec, eu, em, eJ, tj, tP, tt]);
  let [tD, tT] = o.useState(false), tR = o.useRef(null), tN = o.useRef(performance.now()), tI = o.useCallback(() => {
    null != tR.current && clearTimeout(tR.current), em === A.rq.PLAYING && (tR.current = setTimeout(() => {
      em === A.rq.PLAYING && tT(true)
    }, Math.max(0, 3e3 - (performance.now() - tN.current))))
  }, [em]), tA = () => {
    tT(false), tN.current = performance.now(), tI()
  };
  o.useEffect(() => {
    if (em !== A.rq.PLAYING) {
      tT(false), null != tR.current && clearTimeout(tR.current);
      return
    }
    return tI(), () => {
      null != tR.current && clearTimeout(tR.current)
    }
  }, [em, tI]);
  let tw = !tD && (eE || ep || em === A.rq.ENDED),
    tL = o.useCallback(() => {
      var e;
      tt.info("[QV] | handleFullScreenExit");
      let t = (0, g.fn)(null == (e = ez.current) ? true : e.parentNode, ez.current);
      null == t || (0, g.rB)(t) || (t.removeEventListener(g.NO, tL), ei(false), tb(false), to(A._H.MD))
    }, [ei, tt, tb]),
    tk = () => {
      if (null == ez.current) return;
      let e = Math.max(ez.current.currentTime - 10, 0);
      tt.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tV(e), em === A.rq.ENDED && tj(A.rq.PAUSED), tE(S.jn.VIDEO_MODAL, C.jZ.SEEK_BACKWARD)
    },
    tM = () => {
      if (null == ez.current || !tJ) return;
      let e = Math.min(ez.current.currentTime + 10, te);
      tt.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tV(e), em !== A.rq.ENDED && e >= ez.current.duration && tj(A.rq.ENDED), tE(S.jn.VIDEO_MODAL, C.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = ez.current;
    return () => {
      let t = (0, g.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(g.NO, tL)
    }
  }, [tL]);
  let tV = o.useCallback(e => {
      var t;
      null != ez.current && (tt.info("[QV] | seekTimeline | timeSec: ".concat(e)), eB(e / (null != (t = ez.current.duration) ? t : 1) * 100), ty(), e_(true), e9(false), ez.current.currentTime = e, eQ(J.id, e, ez.current.duration))
    }, [ez, eQ, J.id, ty, tt]),
    tZ = () => {
      if (null != ez.current) switch (tt.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(em)), em) {
        case A.rq.ENDED:
          tV(0), tj(A.rq.PLAYING);
          break;
        case A.rq.PLAYING:
          tj(A.rq.PAUSED), e4(S.yE.PAUSE_BUTTON);
          break;
        default:
          tj(A.rq.PLAYING)
      }
    },
    tF = e => {
      e5(e)
    },
    tB = e => {
      e5(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tU = o.useCallback(() => {
      if (null == ez.current || (tt.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(ez.current.textTracks.length)), 0 === ez.current.textTracks.length)) return;
      let e = ez.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, w.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tF(n), n.onexit = () => tB(n))
        }
    }, [ez, tt]);
  o.useEffect(() => {
    if (null == eX.current) return;
    let e = eX.current;
    return e.addEventListener("load", tU), () => {
      null != e && e.removeEventListener("load", tU)
    }
  }, [eX, tU]);
  let tq = o.useCallback(e => {
      var t;
      tt.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = ez.current) ? true : t.currentTime, ", videoAssetId: ").concat(ta, ", connectionSpeed: ").concat(eR)), tO(e)
    }, [eR, tO, ez, ta, tt]),
    tY = e => {
      tt.info("[QV] | handleCanPlay: playerState: ".concat(em)), null != ez.current && em === A.rq.PLAYING && (tt.info("[QV] | handleCanPlay: did NOT early return"), ex && (tt.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ex)), ey(false)), ej && (tt.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ej)), th(null != eY.current ? performance.now() - eY.current : null), eP(false)), tt.info("[QV] | handleCanPlay: updating player state to playing"), tj(A.rq.PLAYING))
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
  }, tQ] = (0, d.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: q,
    onStart: () => {
      eZ(false)
    },
    onRest: e => {
      1 === e.value && eZ(true)
    }
  })), tG = (0, o.useRef)(null), [{
    captionHeightSpring: tK
  }, tW] = (0, d.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: q
  }));
  o.useEffect(() => {
    var e, t;
    return tW({
      captionHeightSpring: er && null != e7 && null != (t = null == (e = tG.current) ? true : e.clientHeight) ? t : 0,
      immediate: eW
    }), () => {
      tK.stop()
    }
  }, [er, tW, eW, e7, tK]), o.useEffect(() => (tQ({
    controlBarAnimSpring: tw || ek ? 1 : 0,
    immediate: eW
  }), () => {
    tH.stop()
  }), [tw, tQ, eW, ek, tH]);
  let tz = em === A.rq.ENDED,
    tX = o.useMemo(() => (0, x.fh)(J, x.eC.VIDEO_PLAYER_THUMBNAIL, true, false), [J]),
    t$ = o.useMemo(() => (0, x.fh)(J, x.eC.VIDEO_PLAYER_CAPTION, true, false), [J]),
    tJ = eJ || eH.maxTimestampSec >= (null != (B = null == (l = ez.current) ? true : l.currentTime) ? B : 0) + 1,
    t0 = o.useMemo(() => null === (0, x.fh)(J, x.eC.VIDEO_PLAYER_TRANSCRIPT, true, false), [J]);
  return (0, r.jsx)(d.P3F, {
    className: U.videoCont,
    "data-fullscreen": el,
    tabIndex: false,
    onMouseEnter: () => {
      ev(true), tT(false), tN.current = performance.now(), null != tR.current && clearTimeout(tR.current)
    },
    onMouseLeave: () => {
      ev(false), tT(false)
    },
    onMouseMove: tA,
    onKeyDown: tA,
    children: (0, r.jsxs)("div", {
      className: i()(U.videoContInnerRelative, {
        [U.videoContInnerRelativePortrait]: "portrait" === X,
        [U.videoContInnerRelativeLandscape]: "landscape" === X
      }),
      children: [tz && (0, r.jsx)(D.Z, {
        videoRef: ez,
        onExitFullScreen: tL,
        onTrackQuestVideoFullscreenChanged: tb,
        onTrackQuestContentClick: tE,
        orientation: X
      }), (0, r.jsxs)(p.Z, {
        ref: e => {
          ez.current = e, ed.current = e
        },
        autoPlay: K,
        playsInline: true,
        mediaLayoutType: el ? F.hV.STATIC : F.hV.RESPONSIVE,
        className: i()({
          [U.hidden]: tz,
          [U.videoInner]: true
        }),
        controls: false,
        poster: null == tX ? true : tX.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          if (null == ez.current) return;
          let t = ez.current.currentTime >= Q.target && !e1.current && e0;
          if (ez.current.currentTime >= eI || t) {
            var n;
            tt.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(ez.current.currentTime)), (n = ez.current.currentTime) >= Q.target && (e1.current = true), eA(n + 6 + 2 * Math.random()), tP(n)
          }
          ez.current.currentTime >= ew && (eL(ez.current.currentTime + 1), (0, h.qm)(J.id, eh.taskType, ez.current.currentTime), G(ez.current.currentTime)), eQ(J.id, ez.current.currentTime, ez.current.duration), eb(ez.current.currentTime / ez.current.duration * 100)
        },
        onEnded: e => {
          null != ez.current && (tP(ez.current.duration + 1), tt.info("[QV] | handleEnded: sending progress update: ".concat(ez.current.duration + 1)), eQ(J.id, ez.current.duration, ez.current.duration)), tj(A.rq.ENDED), eP(false)
        },
        onLoadedData: e => {
          tt.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ex)), ex && (td(null != eq.current ? performance.now() - eq.current : null), ey(false), tc())
        },
        onLoadedMetadata: e => {
          null != ez.current && (tt.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(ta)), e3(true), ta !== x.eC.VIDEO_PLAYER_VIDEO_HLS && tV(tn), eG ? ez.current.volume = 0 : ez.current.volume = eK)
        },
        onLoadStart: () => {
          eq.current = performance.now(), tu(eR), tt.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eq.current))
        },
        onPlaying: () => {
          if (!eU.current) return;
          let e = performance.now() - z;
          tt.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tS(e), eU.current = false
        },
        onWaiting: e => {
          eY.current = performance.now(), tt.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eY.current)), tg(), eP(true)
        },
        onProgress: e => {
          if (null == ez.current) return;
          tt.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(ez.current.buffered.length));
          let t = [];
          for (let e = 0; e < ez.current.buffered.length; e++) {
            let n = ez.current.buffered.start(e),
              r = ez.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / ez.current.duration,
              size: (r - n) / ez.current.duration
            })
          }
          eT(t)
        },
        onCanPlay: tY,
        onCanPlayThrough: tY,
        onSeeked: () => {
          tt.info("[QV] | handleSeeked"), e9(true)
        },
        onAbort: () => tq(A.CY.ABORT),
        onError: () => tq(A.CY.ERROR),
        onEmptied: () => tq(A.CY.EMPTIED),
        onStalled: () => tq(A.CY.STALLED),
        onClick: () => {
          tt.info("[QV] | handleVideoClick"), tZ()
        },
        crossOrigin: "anonymous",
        children: [null != t$ && (0, r.jsx)("track", {
          ref: eX,
          src: t$.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != ti && ta !== x.eC.VIDEO_PLAYER_VIDEO_HLS && null != ti.mimetype && (0, r.jsx)("source", {
          onError: () => tq(A.CY.SOURCE_ERROR),
          src: ti.url,
          type: ti.mimetype
        })]
      }), (ex || ej) && em === A.rq.PLAYING && (0, r.jsx)(d.$jN, {
        type: d.$jN.Type.WANDERING_CUBES,
        className: U.loadingSpinner
      }), em === A.rq.PAUSED && e2 === S.yE.LOST_FOCUS && (0, r.jsx)(Y, {}), (0, r.jsx)(a.animated.div, {
        className: U.floatingShareButtonContainer,
        style: {
          opacity: (0, a.to)([tH.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(R.Z, {})
      }), et && em !== A.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, {
          onClick: () => {
            em === A.rq.PAUSED && tj(A.rq.PLAYING), en(false)
          },
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: U.transcriptOverlay
          })
        }), (0, r.jsx)(a.animated.div, {
          className: i()(U.transcriptCont, {
            [U.transcriptContPortrait]: "portrait" === X
          }),
          style: {
            marginBottom: (0, a.to)([tH, tK], (e, t) => "".concat(e * tl[tr] + t, "px"))
          },
          children: (0, r.jsx)(I.E, {
            quest: J,
            onClose: () => {
              en(false), tE(S.jn.VIDEO_MODAL, C.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(a.animated.div, {
        className: U.videoFooterContGradient,
        style: {
          opacity: (0, a.to)([tH.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(U.playPausePopCont, {
          [U.play]: em === A.rq.PLAYING,
          [U.pause]: em === A.rq.PAUSED
        }),
        children: em === A.rq.PLAYING ? (0, r.jsx)(d.o1U, {
          className: U.playPausePopIcon
        }) : (0, r.jsx)(d.fpf, {
          className: U.playPausePopIcon
        })
      }, em), er && null != e7 && !tz && (0, r.jsx)(a.animated.div, {
        className: U.captionContainer,
        ref: tG,
        style: {
          translateY: (0, a.to)([tH.to({
            range: [0, 1],
            output: [0, -tl[tr]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(d.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: U.captionText,
          children: e7.text
        })
      }), (0, r.jsxs)(a.animated.div, {
        className: U.videoFooterCont,
        style: {
          height: (0, a.to)([tH.to({
            range: [0, 1],
            output: [0, tl[tr]]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(N.Z, {
          percent: null != eF ? eF : eC,
          animate: true !== e$.current && !eO,
          interactionEnabled: eJ && eV,
          backgroundColor: tw ? true : "rgba(0, 0, 0, 0.0)",
          playerState: em,
          preloadedBuffers: tw ? eD : true,
          duration: null != (H = null == (u = ez.current) ? true : u.duration) ? H : 1,
          isFullyVisible: tw && eV,
          maxSeekableTime: tw && eV ? te : true,
          onClick: e => {
            tV(e), em === A.rq.ENDED && tj(A.rq.PLAYING)
          },
          onScrubBack: tk,
          onScrubForward: tM
        }), (0, r.jsx)(a.animated.div, {
          className: U.videoControlsCont,
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
          onFocus: () => eg(true),
          onBlur: () => eg(false),
          children: (0, r.jsx)(P.Z, {
            videoRef: ez,
            videoTask: Q,
            playerState: em,
            animSpring: tH,
            visible: tw,
            seekForwardEnabled: tJ,
            hideCaptionBtn: null == t$,
            hideTranscriptBtn: t0,
            size: tr,
            handlePlaybackBtnClick: tZ,
            handleTranscriptBtnClick: () => {
              en(!et), tE(S.jn.VIDEO_MODAL, et ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              eo(!er), tE(S.jn.VIDEO_MODAL, er ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !el;
              tt.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, g.fn)(null == (e = ez.current) ? true : e.parentNode, ez.current);
              t && null != n ? ((0, g.Dj)(n), n.addEventListener(g.NO, tL), tb(true), to(A._H.LG)) : t || null == n || (n.removeEventListener(g.NO, tL), tb(false), (0, g.Pr)(n), to(A._H.MD)), ei(t)
            },
            handleSeekBackBtnClick: tk,
            handleSeekForwardBtnClick: tM,
            handleControlBarPendingInteraction: eM,
            onVolumeChange: t_
          })
        })]
      })]
    })
  })
}