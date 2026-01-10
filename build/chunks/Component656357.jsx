/** Chunk was on 75909 **/
/** chunk id: 656357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
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
  } = (0, k.xU)(), {
    visible: ec,
    visibleChanged: eu,
    targetRef: ed
  } = (0, k.Yy)(), [em, ef] = o.useState(true === K ? A.rq.PLAYING : A.rq.PAUSED), [ep, ev] = o.useState(false), [eE, eg] = o.useState(false), eh = (0, y.il)(J), [eC, eS] = o.useState(eh.percentComplete), eb = o.useCallback(e => {
    eB(null), eS(e)
  }, []), [eO, e_] = o.useState(false), [ex, ey] = o.useState(true), [ej, eP] = o.useState(false), [eD, eT] = o.useState([]), [eR, eN] = o.useState(E.Z.getEffectiveConnectionSpeed()), [eI, eA] = o.useState(0), [ew, ek] = o.useState(0), [eL, eM] = o.useState(false), [eV, eZ] = o.useState(false), [eF, eB] = o.useState(null), eU = o.useRef(true), eq = o.useRef(null), eY = o.useRef(null), eH = (0, b.km)(e => {
    var t;
    return null != (t = e.videoProgress[J.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, s.X), eQ = (0, b.km)(e => e.setVideoProgress), eG = (0, b.km)(e => e.muted), eK = (0, b.km)(e => e.volume), eW = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), ez = (0, o.useRef)(null), eX = (0, o.useRef)(null), e$ = o.useRef(true), eJ = (null == (t = J.userStatus) ? true : t.completedAt) != null, [e0, e1] = o.useState(null), [e2, e4] = o.useState(false), [e8, e3] = o.useState(false), [e6, e9] = o.useState(null), e7 = eJ ? null != (v = null == (n = ez.current) ? true : n.duration) ? v : 0 : Math.max(eH.maxTimestampSec, eh.progressSeconds), e5 = o.useMemo(() => (0, O.T)({
    quest: J,
    location: Z.dr.VIDEO_MODAL
  }), [J]), te = (0, w.$R)(eJ, eH, eh), [tt, tn] = o.useState(A._H.MD), tr = {
    [A._H.MD]: 50,
    [A._H.LG]: 58
  };
  (0, m.Ng)(() => {
    e$.current && (e$.current = false, eN(E.Z.getEffectiveConnectionSpeed()), eJ && eH.timestampSec >= eH.duration && eQ(J.id, 0, eH.duration))
  });
  let {
    videoAsset: to,
    videoAssetType: tl,
    hlsRef: ti,
    onFirstChunkLoaded: ta
  } = (0, L.Z)(ez, eR, te), {
    trackQuestVideoLoadingStarted: ts,
    trackQuestVideoLoadingEnded: tc,
    trackQuestVideoProgressed: tu,
    trackQuestVideoResumed: td,
    trackQuestVideoPaused: tm,
    trackQuestVideoFocusChange: tf,
    trackQuestContentClick: tp,
    trackQuestVideoBufferingStarted: tv,
    trackQuestVideoBufferingEnded: tE,
    trackWatchTimeAnalytics: tg,
    trackQuestVideoTimeToFirstFrame: th,
    trackQuestVideoFullscreenChanged: tC,
    trackQuestVideoError: tS,
    trackQuestVideoVolumeChanged: tb
  } = (0, M.Z)({
    questId: J.id,
    isQuestCompleted: eJ,
    videoRef: ez,
    hlsRef: ti,
    videoSessionId: ee,
    videoAssetId: tl,
    sourceQuestContent: $,
    logger: e5
  });
  (0, V.Z)({
    videoAssetUrl: null == to ? true : to.url,
    videoRef: ez,
    hlsRef: ti,
    videoAssetType: tl
  });
  let tO = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = ez.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: t_
    } = (0, _.Z)({
      getCurrentVideoTime: tO,
      isPlaying: em === A.rq.PLAYING,
      isMetadataLoaded: e2,
      isInitialSeekComplete: e8,
      onAnalytics: tg,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tx = o.useCallback(e => {
      if (e5.info("[QV] | updatePlayerState | playerState: ".concat(e)), ef(e), null != ez.current) switch (e) {
        case A.rq.PLAYING:
          ez.current.paused && td(e0), e1(null), ez.current.play();
          break;
        case A.rq.PAUSED:
          ez.current.paused || t_(), ez.current.pause(), eU.current = false;
          break;
        case A.rq.ENDED:
          t_(), en(false)
      }
    }, [td, e0, t_, en, e5]);
  o.useEffect(() => {
    tm(e0)
  }, [e0, tm]), o.useEffect(() => {
    es && tf(ea, em)
  }, [ea, es, em, tf]);
  let ty = o.useCallback(e => {
    var t;
    eJ || (null == (t = J.userStatus) ? true : t.enrolledAt) == null || (e5.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, j.FI)(J, e)), tu()
  }, [eJ, J, e5, tu]);
  o.useEffect(() => {
    W !== d.Dvm.HIDDEN && W !== d.Dvm.EXITING && W !== d.Dvm.EXITED && (null == W || !eu || ec || eJ) && (!es || ea || eJ) || null == ez.current || em !== A.rq.PLAYING || (e5.info("[QV] | Pausing video | playerState: ".concat(em, ", parentTransitionState: ").concat(W, ", visible: ").concat(ec, ", focused: ").concat(ea, ", isQuestCompleted: ").concat(eJ)), tx(A.rq.PAUSED), eJ || e1(S.yE.LOST_FOCUS))
  }, [W, ea, es, ec, eu, em, eJ, tx, ty, e5]);
  let [tj, tP] = o.useState(false), tD = o.useRef(null), tT = o.useRef(performance.now()), tR = o.useCallback(() => {
    null != tD.current && clearTimeout(tD.current), em === A.rq.PLAYING && (tD.current = setTimeout(() => {
      em === A.rq.PLAYING && tP(true)
    }, Math.max(0, 3e3 - (performance.now() - tT.current))))
  }, [em]), tN = () => {
    tP(false), tT.current = performance.now(), tR()
  };
  o.useEffect(() => {
    if (em !== A.rq.PLAYING) {
      tP(false), null != tD.current && clearTimeout(tD.current);
      return
    }
    return tR(), () => {
      null != tD.current && clearTimeout(tD.current)
    }
  }, [em, tR]);
  let tI = !tj && (eE || ep || em === A.rq.ENDED),
    tA = o.useCallback(() => {
      var e;
      e5.info("[QV] | handleFullScreenExit");
      let t = (0, g.fn)(null == (e = ez.current) ? true : e.parentNode, ez.current);
      null == t || (0, g.rB)(t) || (t.removeEventListener(g.NO, tA), ei(false), tC(false), tn(A._H.MD))
    }, [ei, e5, tC]),
    tw = () => {
      if (null == ez.current) return;
      let e = Math.max(ez.current.currentTime - 10, 0);
      e5.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tL(e), em === A.rq.ENDED && tx(A.rq.PAUSED), tp(S.jn.VIDEO_MODAL, C.jZ.SEEK_BACKWARD)
    },
    tk = () => {
      if (null == ez.current || !tX) return;
      let e = Math.min(ez.current.currentTime + 10, e7);
      e5.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tL(e), em !== A.rq.ENDED && e >= ez.current.duration && tx(A.rq.ENDED), tp(S.jn.VIDEO_MODAL, C.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = ez.current;
    return () => {
      let t = (0, g.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(g.NO, tA)
    }
  }, [tA]);
  let tL = o.useCallback(e => {
      var t;
      null != ez.current && (e5.info("[QV] | seekTimeline | timeSec: ".concat(e)), eB(e / (null != (t = ez.current.duration) ? t : 1) * 100), t_(), e_(true), e3(false), ez.current.currentTime = e, eQ(J.id, e, ez.current.duration))
    }, [ez, eQ, J.id, t_, e5]),
    tM = () => {
      if (null != ez.current) switch (e5.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(em)), em) {
        case A.rq.ENDED:
          tL(0), tx(A.rq.PLAYING);
          break;
        case A.rq.PLAYING:
          tx(A.rq.PAUSED), e1(S.yE.PAUSE_BUTTON);
          break;
        default:
          tx(A.rq.PLAYING)
      }
    },
    tV = e => {
      e9(e)
    },
    tZ = e => {
      e9(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tF = o.useCallback(() => {
      if (null == ez.current || (e5.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(ez.current.textTracks.length)), 0 === ez.current.textTracks.length)) return;
      let e = ez.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, w.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tV(n), n.onexit = () => tZ(n))
        }
    }, [ez, e5]);
  o.useEffect(() => {
    if (null == eX.current) return;
    let e = eX.current;
    return e.addEventListener("load", tF), () => {
      null != e && e.removeEventListener("load", tF)
    }
  }, [eX, tF]);
  let tB = o.useCallback(e => {
      var t;
      e5.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = ez.current) ? true : t.currentTime, ", videoAssetId: ").concat(tl, ", connectionSpeed: ").concat(eR)), tS(e)
    }, [eR, tS, ez, tl, e5]),
    tU = e => {
      e5.info("[QV] | handleCanPlay: playerState: ".concat(em)), null != ez.current && em === A.rq.PLAYING && (e5.info("[QV] | handleCanPlay: did NOT early return"), ex && (e5.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ex)), ey(false)), ej && (e5.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ej)), tE(null != eY.current ? performance.now() - eY.current : null), eP(false)), e5.info("[QV] | handleCanPlay: updating player state to playing"), tx(A.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eO) return;
    let e = setTimeout(() => {
      e_(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eO]);
  let [{
    controlBarAnimSpring: tq
  }, tY] = (0, d.q_F)(() => ({
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
  })), tH = (0, o.useRef)(null), [{
    captionHeightSpring: tQ
  }, tG] = (0, d.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: q
  }));
  o.useEffect(() => {
    var e, t;
    return tG({
      captionHeightSpring: er && null != e6 && null != (t = null == (e = tH.current) ? true : e.clientHeight) ? t : 0,
      immediate: eW
    }), () => {
      tQ.stop()
    }
  }, [er, tG, eW, e6, tQ]), o.useEffect(() => (tY({
    controlBarAnimSpring: tI || eL ? 1 : 0,
    immediate: eW
  }), () => {
    tq.stop()
  }), [tI, tY, eW, eL, tq]);
  let tK = em === A.rq.ENDED,
    tW = o.useMemo(() => (0, x.fh)(J, x.eC.VIDEO_PLAYER_THUMBNAIL, true, false), [J]),
    tz = o.useMemo(() => (0, x.fh)(J, x.eC.VIDEO_PLAYER_CAPTION, true, false), [J]),
    tX = eJ || eH.maxTimestampSec >= (null != (B = null == (l = ez.current) ? true : l.currentTime) ? B : 0) + 1,
    t$ = o.useMemo(() => null === (0, x.fh)(J, x.eC.VIDEO_PLAYER_TRANSCRIPT, true, false), [J]);
  return (0, r.jsx)(d.P3F, {
    className: U.videoCont,
    "data-fullscreen": el,
    tabIndex: false,
    onMouseEnter: () => {
      ev(true), tP(false), tT.current = performance.now(), null != tD.current && clearTimeout(tD.current)
    },
    onMouseLeave: () => {
      ev(false), tP(false)
    },
    onMouseMove: tN,
    onKeyDown: tN,
    children: (0, r.jsxs)("div", {
      className: i()(U.videoContInnerRelative, {
        [U.videoContInnerRelativePortrait]: "portrait" === X,
        [U.videoContInnerRelativeLandscape]: "landscape" === X
      }),
      children: [tK && (0, r.jsx)(D.Z, {
        videoRef: ez,
        onExitFullScreen: tA,
        onTrackQuestVideoFullscreenChanged: tC,
        onTrackQuestContentClick: tp,
        orientation: X
      }), (0, r.jsxs)(p.Z, {
        ref: e => {
          ez.current = e, ed.current = e
        },
        autoPlay: K,
        playsInline: true,
        mediaLayoutType: el ? F.hV.STATIC : F.hV.RESPONSIVE,
        className: i()({
          [U.hidden]: tK,
          [U.videoInner]: true
        }),
        controls: false,
        poster: null == tW ? true : tW.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != ez.current && (ez.current.currentTime >= eI && (e5.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(ez.current.currentTime)), eA(ez.current.currentTime + 6 + 2 * Math.random()), ty(ez.current.currentTime)), ez.current.currentTime >= ew && (ek(ez.current.currentTime + 1), (0, h.qm)(J.id, eh.taskType, ez.current.currentTime), G(ez.current.currentTime)), eQ(J.id, ez.current.currentTime, ez.current.duration), eb(ez.current.currentTime / ez.current.duration * 100))
        },
        onEnded: e => {
          null != ez.current && (ty(ez.current.duration + 1), e5.info("[QV] | handleEnded: sending progress update: ".concat(ez.current.duration + 1)), eQ(J.id, ez.current.duration, ez.current.duration)), tx(A.rq.ENDED), eP(false)
        },
        onLoadedData: e => {
          e5.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ex)), ex && (tc(null != eq.current ? performance.now() - eq.current : null), ey(false), ta())
        },
        onLoadedMetadata: e => {
          null != ez.current && (e5.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tl)), e4(true), tl !== x.eC.VIDEO_PLAYER_VIDEO_HLS && tL(te), eG ? ez.current.volume = 0 : ez.current.volume = eK)
        },
        onLoadStart: () => {
          eq.current = performance.now(), ts(eR), e5.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eq.current))
        },
        onPlaying: () => {
          if (!eU.current) return;
          let e = performance.now() - z;
          e5.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), th(e), eU.current = false
        },
        onWaiting: e => {
          eY.current = performance.now(), e5.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eY.current)), tv(), eP(true)
        },
        onProgress: e => {
          if (null == ez.current) return;
          e5.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(ez.current.buffered.length));
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
        onCanPlay: tU,
        onCanPlayThrough: tU,
        onSeeked: () => {
          e5.info("[QV] | handleSeeked"), e3(true)
        },
        onAbort: () => tB(A.CY.ABORT),
        onError: () => tB(A.CY.ERROR),
        onEmptied: () => tB(A.CY.EMPTIED),
        onStalled: () => tB(A.CY.STALLED),
        onClick: () => {
          e5.info("[QV] | handleVideoClick"), tM()
        },
        crossOrigin: "anonymous",
        children: [null != tz && (0, r.jsx)("track", {
          ref: eX,
          src: tz.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != to && tl !== x.eC.VIDEO_PLAYER_VIDEO_HLS && null != to.mimetype && (0, r.jsx)("source", {
          onError: () => tB(A.CY.SOURCE_ERROR),
          src: to.url,
          type: to.mimetype
        })]
      }), (ex || ej) && em === A.rq.PLAYING && (0, r.jsx)(d.$jN, {
        type: d.$jN.Type.WANDERING_CUBES,
        className: U.loadingSpinner
      }), em === A.rq.PAUSED && e0 === S.yE.LOST_FOCUS && (0, r.jsx)(Y, {}), (0, r.jsx)(a.animated.div, {
        className: U.floatingShareButtonContainer,
        style: {
          opacity: (0, a.to)([tq.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(R.Z, {})
      }), et && em !== A.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, {
          onClick: () => {
            em === A.rq.PAUSED && tx(A.rq.PLAYING), en(false)
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
            marginBottom: (0, a.to)([tq, tQ], (e, t) => "".concat(e * tr[tt] + t, "px"))
          },
          children: (0, r.jsx)(I.E, {
            quest: J,
            onClose: () => {
              en(false), tp(S.jn.VIDEO_MODAL, C.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(a.animated.div, {
        className: U.videoFooterContGradient,
        style: {
          opacity: (0, a.to)([tq.to({
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
      }, em), er && null != e6 && !tK && (0, r.jsx)(a.animated.div, {
        className: U.captionContainer,
        ref: tH,
        style: {
          translateY: (0, a.to)([tq.to({
            range: [0, 1],
            output: [0, -tr[tt]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(d.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: U.captionText,
          children: e6.text
        })
      }), (0, r.jsxs)(a.animated.div, {
        className: U.videoFooterCont,
        style: {
          height: (0, a.to)([tq.to({
            range: [0, 1],
            output: [0, tr[tt]]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(N.Z, {
          percent: null != eF ? eF : eC,
          animate: true !== e$.current && !eO,
          interactionEnabled: eJ && eV,
          backgroundColor: tI ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tI ? eD : true,
          duration: null != (H = null == (u = ez.current) ? true : u.duration) ? H : 1,
          isFullyVisible: tI && eV,
          maxSeekableTime: tI && eV ? e7 : true,
          onClick: e => {
            tL(e), em === A.rq.ENDED && tx(A.rq.PLAYING)
          },
          onScrubBack: tw,
          onScrubForward: tk
        }), (0, r.jsx)(a.animated.div, {
          className: U.videoControlsCont,
          style: {
            paddingTop: (0, a.to)([tq.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, a.to)([tq.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, a.to)([tq.to({
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
            animSpring: tq,
            visible: tI,
            seekForwardEnabled: tX,
            hideCaptionBtn: null == tz,
            hideTranscriptBtn: t$,
            size: tt,
            handlePlaybackBtnClick: tM,
            handleTranscriptBtnClick: () => {
              en(!et), tp(S.jn.VIDEO_MODAL, et ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              eo(!er), tp(S.jn.VIDEO_MODAL, er ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !el;
              e5.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, g.fn)(null == (e = ez.current) ? true : e.parentNode, ez.current);
              t && null != n ? ((0, g.Dj)(n), n.addEventListener(g.NO, tA), tC(true), tn(A._H.LG)) : t || null == n || (n.removeEventListener(g.NO, tA), tC(false), (0, g.Pr)(n), tn(A._H.MD)), ei(t)
            },
            handleSeekBackBtnClick: tw,
            handleSeekForwardBtnClick: tk,
            handleControlBarPendingInteraction: eM,
            onVolumeChange: tb
          })
        })]
      })]
    })
  })
}