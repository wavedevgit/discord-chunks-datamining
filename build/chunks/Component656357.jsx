/** Chunk was on 75909 **/
/** chunk id: 656357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk554916 = require("./554916.js"),
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
  Chunk937797 = require("./937797.js"),
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
let H = {
  tension: 250,
  friction: 5,
  clamp: true
};

function Y() {
  let e = (0, c.e7)([v.Z], () => v.Z.getState().theme);
  return (0, r.jsx)("div", {
    className: q.pauseText,
    style: {
      background: (0, u.wj)(e) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
    },
    children: (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: U.intl.string(U.t["U7Xrb+"])
    })
  })
}

function Q(e) {
  var t, n, l, u, v, U, Q, G, K;
  let {
    videoTask: W,
    onOptimisticProgressUpdate: z,
    autoplay: X,
    parentTransitionState: $,
    performanceClockStartTime: J,
    orientation: ee
  } = e, {
    sourceQuestContent: et,
    quest: en,
    videoSessionId: er
  } = o.useContext(R.VideoQuestModalContext), eo = (0, b.km)(e => e.transcriptEnabled), el = (0, b.km)(e => e.setTranscriptEnabled), ei = (0, b.km)(e => e.captionEnabled), ea = (0, b.km)(e => e.setCaptionEnabled), es = (0, b.km)(e => e.fullScreenEnabled), ec = (0, b.km)(e => e.setFullScreenEnabled), {
    enabled: eu,
    variant: ed
  } = S.EO.useConfig({
    location: F.dr.VIDEO_MODAL
  }), em = ed === S.m_.OVERLAY_SHARE_ON_VIDEO, {
    focused: ef,
    focusedChanged: ep
  } = (0, k.xU)(), {
    visible: ev,
    visibleChanged: eE,
    targetRef: eg
  } = (0, k.Yy)(), [eO, eh] = o.useState(true === X ? L.rq.PLAYING : L.rq.PAUSED), [eC, eb] = o.useState(false), [eS, e_] = o.useState(false), ey = (0, j.il)(en), [ex, ej] = o.useState(ey.percentComplete), eD = o.useCallback(e => {
    eG(null), ej(e)
  }, []), [eP, eT] = o.useState(false), [eR, eN] = o.useState(true), [eI, eA] = o.useState(false), [eL, ew] = o.useState([]), [ek, eM] = o.useState(E.Z.getEffectiveConnectionSpeed()), [eV, eZ] = o.useState(0), [eF, eB] = o.useState(0), [eU, eq] = o.useState(false), [eH, eY] = o.useState(false), [eQ, eG] = o.useState(null), eK = o.useRef(true), eW = o.useRef(null), ez = o.useRef(null), eX = (0, b.km)(e => {
    var t;
    return null != (t = e.videoProgress[en.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, s.X), e$ = (0, b.km)(e => e.setVideoProgress), eJ = (0, b.km)(e => e.muted), e0 = (0, b.km)(e => e.volume), e1 = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), e2 = (0, o.useRef)(null), e4 = (0, o.useRef)(null), e8 = o.useRef(true), e3 = (null == (t = en.userStatus) ? true : t.completedAt) != null, [e9, e7] = o.useState(null), [e6, e5] = o.useState(false), [te, tt] = o.useState(false), [tn, tr] = o.useState(null), to = e3 ? null != (v = null == (n = e2.current) ? true : n.duration) ? v : 0 : Math.max(eX.maxTimestampSec, ey.progressSeconds), tl = o.useMemo(() => (0, _.T)({
    quest: en,
    location: F.dr.VIDEO_MODAL
  }), [en]), ti = (0, w.$R)(e3, eX, ey), [ta, ts] = o.useState(L._H.MD), tc = {
    [L._H.MD]: 50,
    [L._H.LG]: 58
  };
  (0, m.Ng)(() => {
    e8.current && (e8.current = false, eM(E.Z.getEffectiveConnectionSpeed()), e3 && eX.timestampSec >= eX.duration && e$(en.id, 0, eX.duration))
  });
  let {
    videoAsset: tu,
    videoAssetType: td,
    hlsRef: tm,
    onFirstChunkLoaded: tf
  } = (0, M.Z)(e2, ek, ti), {
    trackQuestVideoLoadingStarted: tp,
    trackQuestVideoLoadingEnded: tv,
    trackQuestVideoProgressed: tE,
    trackQuestVideoResumed: tg,
    trackQuestVideoPaused: tO,
    trackQuestVideoFocusChange: th,
    trackQuestContentClick: tC,
    trackQuestVideoBufferingStarted: tb,
    trackQuestVideoBufferingEnded: tS,
    trackWatchTimeAnalytics: t_,
    trackQuestVideoTimeToFirstFrame: ty,
    trackQuestVideoFullscreenChanged: tx,
    trackQuestVideoError: tj,
    trackQuestVideoVolumeChanged: tD
  } = (0, V.Z)({
    questId: en.id,
    isQuestCompleted: e3,
    videoRef: e2,
    hlsRef: tm,
    videoSessionId: er,
    videoAssetId: td,
    sourceQuestContent: et,
    logger: tl
  });
  (0, Z.Z)({
    videoAssetUrl: null == tu ? true : tu.url,
    videoRef: e2,
    hlsRef: tm,
    videoAssetType: td
  });
  let tP = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e2.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tT
    } = (0, y.Z)({
      getCurrentVideoTime: tP,
      isPlaying: eO === L.rq.PLAYING,
      isMetadataLoaded: e6,
      isInitialSeekComplete: te,
      onAnalytics: t_,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tR = o.useCallback(e => {
      if (tl.info("[QV] | updatePlayerState | playerState: ".concat(e)), eh(e), null != e2.current) switch (e) {
        case L.rq.PLAYING:
          e2.current.paused && tg(e9), e7(null), e2.current.play();
          break;
        case L.rq.PAUSED:
          e2.current.paused || tT(), e2.current.pause(), eK.current = false;
          break;
        case L.rq.ENDED:
          tT(), el(false)
      }
    }, [tg, e9, tT, el, tl]);
  o.useEffect(() => {
    tO(e9)
  }, [e9, tO]), o.useEffect(() => {
    ep && th(ef, eO)
  }, [ef, ep, eO, th]);
  let tN = o.useCallback(e => {
    var t;
    e3 || (null == (t = en.userStatus) ? true : t.enrolledAt) == null || (tl.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, D.FI)(en, e)), tE()
  }, [e3, en, tl, tE]);
  o.useEffect(() => {
    $ !== d.Dvm.HIDDEN && $ !== d.Dvm.EXITING && $ !== d.Dvm.EXITED && (null == $ || !eE || ev || e3) && (!ep || ef || e3) || null == e2.current || eO !== L.rq.PLAYING || (tl.info("[QV] | Pausing video | playerState: ".concat(eO, ", parentTransitionState: ").concat($, ", visible: ").concat(ev, ", focused: ").concat(ef, ", isQuestCompleted: ").concat(e3)), tR(L.rq.PAUSED), e3 || e7(C.yE.LOST_FOCUS))
  }, [$, ef, ep, ev, eE, eO, e3, tR, tN, tl]);
  let [tI, tA] = o.useState(false), tL = o.useRef(null), tw = o.useRef(performance.now()), tk = o.useCallback(() => {
    null != tL.current && clearTimeout(tL.current), eO === L.rq.PLAYING && (tL.current = setTimeout(() => {
      eO === L.rq.PLAYING && tA(true)
    }, Math.max(0, 3e3 - (performance.now() - tw.current))))
  }, [eO]), tM = () => {
    tA(false), tw.current = performance.now(), tk()
  };
  o.useEffect(() => {
    if (eO !== L.rq.PLAYING) {
      tA(false), null != tL.current && clearTimeout(tL.current);
      return
    }
    return tk(), () => {
      null != tL.current && clearTimeout(tL.current)
    }
  }, [eO, tk]);
  let tV = !tI && (eS || eC || eO === L.rq.ENDED),
    tZ = o.useCallback(() => {
      var e;
      tl.info("[QV] | handleFullScreenExit");
      let t = (0, g.fn)(null == (e = e2.current) ? true : e.parentNode, e2.current);
      null == t || (0, g.rB)(t) || (t.removeEventListener(g.NO, tZ), ec(false), tx(false), ts(L._H.MD))
    }, [ec, tl, tx]),
    tF = () => {
      if (null == e2.current) return;
      let e = Math.max(e2.current.currentTime - 10, 0);
      tl.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tU(e), eO === L.rq.ENDED && tR(L.rq.PAUSED), tC(C.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD)
    },
    tB = () => {
      if (null == e2.current || !t4) return;
      let e = Math.min(e2.current.currentTime + 10, to);
      tl.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tU(e), eO !== L.rq.ENDED && e >= e2.current.duration && tR(L.rq.ENDED), tC(C.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e2.current;
    return () => {
      let t = (0, g.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(g.NO, tZ)
    }
  }, [tZ]);
  let tU = o.useCallback(e => {
      var t;
      null != e2.current && (tl.info("[QV] | seekTimeline | timeSec: ".concat(e)), eG(e / (null != (t = e2.current.duration) ? t : 1) * 100), tT(), eT(true), tt(false), e2.current.currentTime = e, e$(en.id, e, e2.current.duration))
    }, [e2, e$, en.id, tT, tl]),
    tq = () => {
      if (null != e2.current) switch (tl.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eO)), eO) {
        case L.rq.ENDED:
          tU(0), tR(L.rq.PLAYING);
          break;
        case L.rq.PLAYING:
          tR(L.rq.PAUSED), e7(C.yE.PAUSE_BUTTON);
          break;
        default:
          tR(L.rq.PLAYING)
      }
    },
    tH = e => {
      tr(e)
    },
    tY = e => {
      tr(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tQ = o.useCallback(() => {
      if (null == e2.current || (tl.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e2.current.textTracks.length)), 0 === e2.current.textTracks.length)) return;
      let e = e2.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, w.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tH(n), n.onexit = () => tY(n))
        }
    }, [e2, tl]);
  o.useEffect(() => {
    if (null == e4.current) return;
    let e = e4.current;
    return e.addEventListener("load", tQ), () => {
      null != e && e.removeEventListener("load", tQ)
    }
  }, [e4, tQ]);
  let tG = o.useCallback(e => {
      var t;
      tl.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e2.current) ? true : t.currentTime, ", videoAssetId: ").concat(td, ", connectionSpeed: ").concat(ek)), tj(e)
    }, [ek, tj, e2, td, tl]),
    tK = e => {
      tl.info("[QV] | handleCanPlay: playerState: ".concat(eO)), null != e2.current && eO === L.rq.PLAYING && (tl.info("[QV] | handleCanPlay: did NOT early return"), eR && (tl.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eR)), eN(false)), eI && (tl.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eI)), tS(null != ez.current ? performance.now() - ez.current : null), eA(false)), tl.info("[QV] | handleCanPlay: updating player state to playing"), tR(L.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eP) return;
    let e = setTimeout(() => {
      eT(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eP]);
  let [{
    controlBarAnimSpring: tW
  }, tz] = (0, d.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: H,
    onStart: () => {
      eY(false)
    },
    onRest: e => {
      1 === e.value && eY(true)
    }
  })), tX = (0, o.useRef)(null), [{
    captionHeightSpring: t$
  }, tJ] = (0, d.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: H
  }));
  o.useEffect(() => {
    var e, t;
    return tJ({
      captionHeightSpring: ei && null != tn && null != (t = null == (e = tX.current) ? true : e.clientHeight) ? t : 0,
      immediate: e1
    }), () => {
      t$.stop()
    }
  }, [ei, tJ, e1, tn, t$]), o.useEffect(() => (tz({
    controlBarAnimSpring: tV || eU ? 1 : 0,
    immediate: e1
  }), () => {
    tW.stop()
  }), [tV, tz, e1, eU, tW]);
  let t0 = eO === L.rq.ENDED,
    t1 = o.useMemo(() => (0, x.fh)(en, x.eC.VIDEO_PLAYER_THUMBNAIL, true, false), [en]),
    t2 = o.useMemo(() => (0, x.fh)(en, x.eC.VIDEO_PLAYER_CAPTION, true, false), [en]),
    t4 = e3 || eX.maxTimestampSec >= (null != (U = null == (l = e2.current) ? true : l.currentTime) ? U : 0) + 1,
    t8 = o.useMemo(() => null === (0, x.fh)(en, x.eC.VIDEO_PLAYER_TRANSCRIPT, true, false), [en]),
    t3 = eu ? {} : {
      paddingLeft: (0, a.to)([tW.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px")),
      paddingRight: (0, a.to)([tW.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px"))
    };
  return (0, r.jsx)(d.P3F, {
    className: i()(q.videoCont, {
      [q.videoContRoundedCorners]: eu
    }),
    "data-fullscreen": es,
    tabIndex: false,
    onMouseEnter: () => {
      eb(true), tA(false), tw.current = performance.now(), null != tL.current && clearTimeout(tL.current)
    },
    onMouseLeave: () => {
      eb(false), tA(false)
    },
    onMouseMove: tM,
    onKeyDown: tM,
    children: (0, r.jsxs)("div", {
      className: i()(q.videoContInnerRelative, {
        [q.videoContInnerRelativePortrait]: "portrait" === ee,
        [q.videoContInnerRelativeLandscape]: "landscape" === ee
      }),
      children: [t0 && (0, r.jsx)(T.Z, {
        videoRef: e2,
        onExitFullScreen: tZ,
        onTrackQuestVideoFullscreenChanged: tx,
        onTrackQuestContentClick: tC,
        orientation: ee
      }), (0, r.jsxs)(p.Z, {
        ref: e => {
          e2.current = e, eg.current = e
        },
        autoPlay: X,
        playsInline: true,
        mediaLayoutType: es ? B.hV.STATIC : B.hV.RESPONSIVE,
        className: i()({
          [q.hidden]: t0,
          [q.videoInner]: true
        }),
        controls: false,
        poster: null == t1 ? true : t1.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e2.current && (e2.current.currentTime >= eV && (tl.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e2.current.currentTime)), eZ(e2.current.currentTime + 6 + 2 * Math.random()), tN(e2.current.currentTime)), e2.current.currentTime >= eF && (eB(e2.current.currentTime + 1), (0, O.qm)(en.id, ey.taskType, e2.current.currentTime), z(e2.current.currentTime)), e$(en.id, e2.current.currentTime, e2.current.duration), eD(e2.current.currentTime / e2.current.duration * 100))
        },
        onEnded: e => {
          null != e2.current && (tN(e2.current.duration + 1), tl.info("[QV] | handleEnded: sending progress update: ".concat(e2.current.duration + 1)), e$(en.id, e2.current.duration, e2.current.duration)), tR(L.rq.ENDED), eA(false)
        },
        onLoadedData: e => {
          tl.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eR)), eR && (tv(null != eW.current ? performance.now() - eW.current : null), eN(false), tf())
        },
        onLoadedMetadata: e => {
          null != e2.current && (tl.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(td)), e5(true), td !== x.eC.VIDEO_PLAYER_VIDEO_HLS && tU(ti), eJ ? e2.current.volume = 0 : e2.current.volume = e0)
        },
        onLoadStart: () => {
          eW.current = performance.now(), tp(ek), tl.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eW.current))
        },
        onPlaying: () => {
          if (!eK.current) return;
          let e = performance.now() - J;
          tl.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), ty(e), eK.current = false
        },
        onWaiting: e => {
          ez.current = performance.now(), tl.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(ez.current)), tb(), eA(true)
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
          ew(t)
        },
        onCanPlay: tK,
        onCanPlayThrough: tK,
        onSeeked: () => {
          tl.info("[QV] | handleSeeked"), tt(true)
        },
        onAbort: () => tG(L.CY.ABORT),
        onError: () => tG(L.CY.ERROR),
        onEmptied: () => tG(L.CY.EMPTIED),
        onStalled: () => tG(L.CY.STALLED),
        onClick: () => {
          tl.info("[QV] | handleVideoClick"), tq()
        },
        crossOrigin: "anonymous",
        children: [null != t2 && (0, r.jsx)("track", {
          ref: e4,
          src: t2.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tu && td !== x.eC.VIDEO_PLAYER_VIDEO_HLS && null != tu.mimetype && (0, r.jsx)("source", {
          onError: () => tG(L.CY.SOURCE_ERROR),
          src: tu.url,
          type: tu.mimetype
        })]
      }), (eR || eI) && eO === L.rq.PLAYING && (0, r.jsx)(d.$jN, {
        type: d.$jN.Type.WANDERING_CUBES,
        className: q.loadingSpinner
      }), eO === L.rq.PAUSED && e9 === C.yE.LOST_FOCUS && (0, r.jsx)(Y, {}), em && (0, r.jsx)(a.animated.div, {
        className: q.floatingShareButtonContainer,
        style: {
          opacity: (0, a.to)([tW.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(N.Z, {})
      }), eo && eO !== L.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, {
          onClick: () => {
            eO === L.rq.PAUSED && tR(L.rq.PLAYING), el(false)
          },
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: q.transcriptOverlay
          })
        }), (0, r.jsx)(a.animated.div, {
          className: i()(q.transcriptCont, {
            [q.transcriptContPortrait]: "portrait" === ee
          }),
          style: {
            marginBottom: (0, a.to)([tW, t$], (e, t) => "".concat(e * tc[ta] + t, "px"))
          },
          children: (0, r.jsx)(A.E, {
            quest: en,
            onClose: () => {
              el(false), tC(C.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(a.animated.div, {
        className: q.videoFooterContGradient,
        style: {
          opacity: (0, a.to)([tW.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(q.playPausePopCont, {
          [q.play]: eO === L.rq.PLAYING,
          [q.pause]: eO === L.rq.PAUSED
        }),
        children: eO === L.rq.PLAYING ? (0, r.jsx)(d.o1U, {
          className: q.playPausePopIcon
        }) : (0, r.jsx)(d.fpf, {
          className: q.playPausePopIcon
        })
      }, eO), ei && null != tn && !t0 && (0, r.jsx)(a.animated.div, {
        className: q.captionContainer,
        ref: tX,
        style: {
          translateY: (0, a.to)([tW.to({
            range: [0, 1],
            output: [0, -tc[ta]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(d.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: q.captionText,
          children: tn.text
        })
      }), (0, r.jsxs)(a.animated.div, {
        className: q.videoFooterCont,
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
        }({}, t3), K = K = {
          paddingInline: 16 * !!eu,
          height: (0, a.to)([tW.to({
            range: [0, 1],
            output: [0, tc[ta]]
          })], e => "".concat(e, "px"))
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(K)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(K)).forEach(function(e) {
          Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(K, e))
        }), G),
        children: [(0, r.jsx)(I.Z, {
          percent: null != eQ ? eQ : ex,
          animate: true !== e8.current && !eP,
          interactionEnabled: e3 && eH,
          backgroundColor: tV ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tV ? eL : true,
          duration: null != (Q = null == (u = e2.current) ? true : u.duration) ? Q : 1,
          isFullyVisible: tV && eH,
          maxSeekableTime: tV && eH ? to : true,
          onClick: e => {
            tU(e), eO === L.rq.ENDED && tR(L.rq.PLAYING)
          },
          onScrubBack: tF,
          rounded: eu,
          onScrubForward: tB
        }), (0, r.jsx)(a.animated.div, {
          className: q.videoControlsCont,
          style: {
            paddingTop: (0, a.to)([tW.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, a.to)([tW.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, a.to)([tW.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => e_(true),
          onBlur: () => e_(false),
          children: (0, r.jsx)(P.Z, {
            videoRef: e2,
            videoTask: W,
            playerState: eO,
            animSpring: tW,
            visible: tV,
            seekForwardEnabled: t4,
            hideCaptionBtn: null == t2,
            hideTranscriptBtn: t8,
            size: ta,
            handlePlaybackBtnClick: tq,
            handleTranscriptBtnClick: () => {
              el(!eo), tC(C.jn.VIDEO_MODAL, eo ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ea(!ei), tC(C.jn.VIDEO_MODAL, ei ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !es;
              tl.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, g.fn)(null == (e = e2.current) ? true : e.parentNode, e2.current);
              t && null != n ? ((0, g.Dj)(n), n.addEventListener(g.NO, tZ), tx(true), ts(L._H.LG)) : t || null == n || (n.removeEventListener(g.NO, tZ), tx(false), (0, g.Pr)(n), ts(L._H.MD)), ec(t)
            },
            handleSeekBackBtnClick: tF,
            handleSeekForwardBtnClick: tB,
            handleControlBarPendingInteraction: eq,
            onVolumeChange: tD
          })
        })]
      })]
    })
  })
}