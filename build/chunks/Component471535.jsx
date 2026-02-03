/** Chunk was on 23628 **/
/** chunk id: 471535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => K
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk942381 = require("./942381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk544180 = require("./544180.js"),
  Chunk475815 = require("./475815.js"),
  Chunk829219 = require("./829219.js"),
  Chunk341915 = require("./341915.js"),
  Chunk405670 = require("./405670.js"),
  Chunk943849 = require("./943849.js"),
  Chunk991484 = require("./991484.js"),
  Chunk579473 = require("./579473.js"),
  Chunk590202 = require("./590202.js"),
  Chunk792620 = require("./792620.js"),
  Chunk753386 = require("./753386.js"),
  Chunk880080 = require("./880080.jsx"),
  Chunk818049 = require("./818049.jsx"),
  Chunk717415 = require("./717415.jsx"),
  Chunk661417 = require("./661417.jsx"),
  Chunk882291 = require("./882291.jsx"),
  Chunk224284 = require("./224284.jsx"),
  Chunk261331 = require("./261331.js"),
  Chunk457775 = require("./457775.js"),
  Chunk154395 = require("./154395.js"),
  Chunk602871 = require("./602871.jsx"),
  Chunk246465 = require("./246465.js"),
  Chunk660171 = require("./660171.js"),
  Chunk853738 = require("./853738.js"),
  Chunk219129 = require("./219129.js"),
  Chunk654487 = require("./654487.js"),
  Chunk838541 = require("./838541.js"),
  Chunk438655 = require("./438655.js");
let B = {
  tension: 250,
  friction: 5,
  clamp: true
};

function K(e) {
  var t, n, o, K, G, H, Y;
  let {
    videoTask: W,
    onOptimisticProgressUpdate: q,
    autoplay: z,
    parentTransitionState: X,
    performanceClockStartTime: Z,
    orientation: J
  } = e, {
    sourceQuestContent: $,
    quest: ee,
    videoSessionId: et
  } = l.useContext(j.VideoQuestModalContext), en = (0, g.Kr)(e => e.transcriptEnabled), er = (0, g.Kr)(e => e.setTranscriptEnabled), el = (0, g.Kr)(e => e.captionEnabled), eo = (0, g.Kr)(e => e.setCaptionEnabled), ei = (0, g.Kr)(e => e.fullScreenEnabled), es = (0, g.Kr)(e => e.setFullScreenEnabled), {
    focused: ea,
    focusedChanged: ec
  } = (0, I.A7)(), {
    visible: eu,
    visibleChanged: ed,
    targetRef: ep
  } = (0, I.O7)(), [ef, em] = l.useState(true === z ? N.Q6.PLAYING : N.Q6.PAUSED), [ev, eb] = l.useState(false), [eE, eg] = l.useState(false), eh = (0, _.Yh)(ee), [ey, eO] = l.useState(eh.percentComplete), eS = l.useCallback(e => {
    eB(null), eO(e)
  }, []), [e_, eC] = l.useState(false), [ex, eA] = l.useState(true), [ej, eT] = l.useState(false), [eD, ew] = l.useState([]), [eN, eP] = l.useState(m.A.getEffectiveConnectionSpeed()), [eI, eL] = l.useState(0), [eR, ek] = l.useState(0), [eM, eV] = l.useState(false), [eQ, eU] = l.useState(false), [eF, eB] = l.useState(null), eK = l.useRef(true), eG = l.useRef(null), eH = l.useRef(null), eY = (0, g.Kr)(e => {
    var t;
    return null != (t = e.videoProgress[ee.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, a.x), eW = (0, g.Kr)(e => e.setVideoProgress), eq = (0, g.Kr)(e => e.muted), ez = (0, g.Kr)(e => e.volume), eX = (0, c.bG)([p.A], () => p.A.useReducedMotion), eZ = (0, l.useRef)(null), eJ = (0, l.useRef)(null), e$ = l.useRef(true), e0 = (null == (K = ee.userStatus) ? true : K.completedAt) != null, e1 = l.useMemo(() => ee.config.features.includes(Q.Li.FULL_EPISODE_VIDEO_QUEST), [ee.config.features]), e6 = l.useRef(false), [e2, e4] = l.useState(null), [e7, e9] = l.useState(false), [e8, e3] = l.useState(false), [e5, te] = l.useState(null), tt = e0 ? null != (t = null == (G = eZ.current) ? true : G.duration) ? t : 0 : Math.max(eY.maxTimestampSec, eh.progressSeconds), tn = l.useMemo(() => (0, h.L)({
    quest: ee,
    location: Q.rE.VIDEO_MODAL
  }), [ee]), tr = (0, V.g)(e0, eY, eh), [tl, to] = l.useState(N.oA.MD), ti = {
    [N.oA.MD]: 50,
    [N.oA.LG]: 58
  };
  (0, d.u5)(() => {
    e$.current && (e$.current = false, eP(m.A.getEffectiveConnectionSpeed()), e0 && eY.timestampSec >= eY.duration && eW(ee.id, 0, eY.duration))
  });
  let {
    videoAsset: ts,
    videoAssetType: ta,
    hlsRef: tc,
    onFirstChunkLoaded: tu
  } = (0, R.A)(eZ, eN, tr), {
    trackQuestVideoLoadingStarted: td,
    trackQuestVideoLoadingEnded: tp,
    trackQuestVideoProgressed: tf,
    trackQuestVideoResumed: tm,
    trackQuestVideoPaused: tv,
    trackQuestVideoFocusChange: tb,
    trackQuestContentClick: tE,
    trackQuestVideoBufferingStarted: tg,
    trackQuestVideoBufferingEnded: th,
    trackWatchTimeAnalytics: ty,
    trackQuestVideoTimeToFirstFrame: tO,
    trackQuestVideoFullscreenChanged: tS,
    trackQuestVideoError: t_,
    trackQuestVideoVolumeChanged: tC
  } = (0, k.A)({
    questId: ee.id,
    isQuestCompleted: e0,
    videoRef: eZ,
    hlsRef: tc,
    videoSessionId: et,
    videoAssetId: ta,
    sourceQuestContent: $,
    logger: tn,
    isFullEpisodeVideoQuest: e1
  });
  (0, M.A)({
    videoAssetUrl: null == ts ? true : ts.url,
    videoRef: eZ,
    hlsRef: tc,
    videoAssetType: ta
  });
  let tx = l.useCallback(() => {
      var e, t;
      return null != (e = null == (t = eZ.current) ? true : t.currentTime) ? e : null
    }, []),
    {
      forceSendCurrentSegment: tA
    } = (0, y.A)({
      getCurrentVideoTime: tx,
      isPlaying: ef === N.Q6.PLAYING,
      isMetadataLoaded: e7,
      isInitialSeekComplete: e8,
      onAnalytics: ty,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tj = l.useCallback(e => {
      if (tn.info("[QV] | updatePlayerState | playerState: ".concat(e)), em(e), null != eZ.current) switch (e) {
        case N.Q6.PLAYING:
          eZ.current.paused && tm(e2), e4(null), eZ.current.play();
          break;
        case N.Q6.PAUSED:
          eZ.current.paused || tA(), eZ.current.pause(), eK.current = false;
          break;
        case N.Q6.ENDED:
          tA(), er(false)
      }
    }, [tm, e2, tA, er, tn]);
  l.useEffect(() => {
    tv(e2)
  }, [e2, tv]), l.useEffect(() => {
    ec && tb(ea, ef)
  }, [ea, ec, ef, tb]);
  let tT = l.useCallback(e => {
    var t;
    e0 || (null == (t = ee.userStatus) ? true : t.enrolledAt) == null || (tn.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, C.zv)(ee, e)), tf()
  }, [e0, ee, tn, tf]);
  l.useEffect(() => {
    X !== u.ip4.HIDDEN && X !== u.ip4.EXITING && X !== u.ip4.EXITED && (null == X || !ed || eu || e0) && (!ec || ea || e0) || null == eZ.current || ef !== N.Q6.PLAYING || (tn.info("[QV] | Pausing video | playerState: ".concat(ef, ", parentTransitionState: ").concat(X, ", visible: ").concat(eu, ", focused: ").concat(ea, ", isQuestCompleted: ").concat(e0)), tj(N.Q6.PAUSED), e0 || e4(E.Yg.LOST_FOCUS))
  }, [X, ea, ec, eu, ed, ef, e0, tj, tT, tn]);
  let [tD, tw] = l.useState(false), tN = l.useRef(null), tP = l.useRef(performance.now()), tI = l.useCallback(() => {
    null != tN.current && clearTimeout(tN.current), ef !== N.Q6.PLAYING || (tN.current = setTimeout(() => {
      ef === N.Q6.PLAYING && tw(true)
    }, Math.max(0, 3e3 - (performance.now() - tP.current))))
  }, [ef]), tL = () => {
    tw(false), tP.current = performance.now(), tI()
  };
  l.useEffect(() => {
    if (ef !== N.Q6.PLAYING) {
      tw(false), null != tN.current && clearTimeout(tN.current);
      return
    }
    return tI(), () => {
      null != tN.current && clearTimeout(tN.current)
    }
  }, [ef, tI]);
  let tR = !tD && (eE || ev || ef === N.Q6.ENDED),
    tk = l.useCallback(() => {
      var e;
      tn.info("[QV] | handleFullScreenExit");
      let t = (0, v.qf)(null == (e = eZ.current) ? true : e.parentNode, eZ.current);
      null == t || (0, v._U)(t) || (t.removeEventListener(v.Wb, tk), es(false), tS(false), to(N.oA.MD))
    }, [es, tn, tS]),
    tM = () => {
      if (null == eZ.current) return;
      let e = Math.max(eZ.current.currentTime - 10, 0);
      tn.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tQ(e), ef === N.Q6.ENDED && tj(N.Q6.PAUSED), tE(E.uF.VIDEO_MODAL, S.Cy.SEEK_BACKWARD)
    },
    tV = () => {
      if (null == eZ.current || !t1) return;
      let e = Math.min(eZ.current.currentTime + 10, tt);
      tn.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tQ(e), ef !== N.Q6.ENDED && e >= eZ.current.duration && tj(N.Q6.ENDED), tE(E.uF.VIDEO_MODAL, S.Cy.SEEK_FORWARD)
    };
  l.useEffect(() => {
    let e = eZ.current;
    return () => {
      let t = (0, v.qf)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(v.Wb, tk)
    }
  }, [tk]);
  let tQ = l.useCallback(e => {
      var t;
      null != eZ.current && (tn.info("[QV] | seekTimeline | timeSec: ".concat(e)), eB(e / (null != (t = eZ.current.duration) ? t : 1) * 100), tA(), eC(true), e3(false), eZ.current.currentTime = e, eW(ee.id, e, eZ.current.duration))
    }, [eZ, eW, ee.id, tA, tn]),
    tU = () => {
      if (null != eZ.current) switch (tn.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(ef)), ef) {
        case N.Q6.ENDED:
          tQ(0), tj(N.Q6.PLAYING);
          break;
        case N.Q6.PLAYING:
          tj(N.Q6.PAUSED), e4(E.Yg.PAUSE_BUTTON);
          break;
        default:
          tj(N.Q6.PLAYING)
      }
    },
    tF = e => {
      te(e)
    },
    tB = e => {
      te(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tK = l.useCallback(() => {
      if (null == eZ.current || (tn.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(eZ.current.textTracks.length)), 0 === eZ.current.textTracks.length)) return;
      let e = eZ.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, P.Ce)(n) && (n.id = "cue-".concat(t), n.onenter = () => tF(n), n.onexit = () => tB(n))
        }
    }, [eZ, tn]);
  l.useEffect(() => {
    if (null == eJ.current) return;
    let e = eJ.current;
    return e.addEventListener("load", tK), () => {
      null != e && e.removeEventListener("load", tK)
    }
  }, [eJ, tK]);
  let tG = l.useCallback(e => {
      var t;
      tn.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = eZ.current) ? true : t.currentTime, ", videoAssetId: ").concat(ta, ", connectionSpeed: ").concat(eN)), t_(e)
    }, [eN, t_, eZ, ta, tn]),
    tH = l.useRef(false);
  l.useEffect(() => {
    null != ts || tH.current || (tH.current = true, t_(N.SB.NO_VALID_SOURCE))
  }, [ts, t_, tH]);
  let tY = e => {
    tn.info("[QV] | handleCanPlay: playerState: ".concat(ef)), null != eZ.current && ef === N.Q6.PLAYING && (tn.info("[QV] | handleCanPlay: did NOT early return"), ex && (tn.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ex)), eA(false)), ej && (tn.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ej)), th(null != eH.current ? performance.now() - eH.current : null), eT(false)), tn.info("[QV] | handleCanPlay: updating player state to playing"), tj(N.Q6.PLAYING))
  };
  l.useEffect(() => {
    if (!e_) return;
    let e = setTimeout(() => {
      eC(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [e_]);
  let [{
    controlBarAnimSpring: tW
  }, tq] = (0, u.zhh)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: B,
    onStart: () => {
      eU(false)
    },
    onRest: e => {
      1 === e.value && eU(true)
    }
  })), tz = (0, l.useRef)(null), [{
    captionHeightSpring: tX
  }, tZ] = (0, u.zhh)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: B
  }));
  l.useEffect(() => {
    var e, t;
    return tZ({
      captionHeightSpring: el && null != e5 && null != (e = null == (t = tz.current) ? true : t.clientHeight) ? e : 0,
      immediate: eX
    }), () => {
      tX.stop()
    }
  }, [el, tZ, eX, e5, tX]), l.useEffect(() => (tq({
    controlBarAnimSpring: tR || eM ? 1 : 0,
    immediate: eX
  }), () => {
    tW.stop()
  }), [tR, tq, eX, eM, tW]);
  let tJ = ef === N.Q6.ENDED,
    t$ = l.useMemo(() => (0, O.tW)(ee, O.fY.VIDEO_PLAYER_THUMBNAIL, true, false), [ee]),
    t0 = l.useMemo(() => (0, O.tW)(ee, O.fY.VIDEO_PLAYER_CAPTION, true, false), [ee]),
    t1 = e0 || eY.maxTimestampSec >= (null != (n = null == (H = eZ.current) ? true : H.currentTime) ? n : 0) + 1,
    t6 = l.useMemo(() => null === (0, O.tW)(ee, O.fY.VIDEO_PLAYER_TRANSCRIPT, true, false), [ee]);
  return (0, r.jsx)(u.DUT, {
    className: F.W6,
    "data-fullscreen": ei,
    "data-testid": "discord-web-video-player-container",
    tabIndex: false,
    onMouseEnter: () => {
      eb(true), tw(false), tP.current = performance.now(), null != tN.current && clearTimeout(tN.current)
    },
    onMouseLeave: () => {
      eb(false), tw(false)
    },
    onMouseMove: tL,
    onKeyDown: tL,
    children: (0, r.jsxs)("div", {
      className: i()(F.NS, {
        [F.DO]: "portrait" === J,
        [F.r7]: "landscape" === J
      }),
      children: [tJ && (0, r.jsx)(A.A, {
        videoRef: eZ,
        onExitFullScreen: tk,
        onTrackQuestVideoFullscreenChanged: tS,
        onTrackQuestContentClick: tE,
        orientation: J
      }), (0, r.jsxs)(f.A, {
        ref: e => {
          eZ.current = e, ep.current = e
        },
        autoPlay: z,
        playsInline: true,
        mediaLayoutType: ei ? U.dG.STATIC : U.dG.RESPONSIVE,
        className: i()({
          [F.R]: tJ,
          [F.IR]: true
        }),
        controls: false,
        poster: null == t$ ? true : t$.url,
        disablePictureInPicture: true,
        "data-testid": "discord-web-video-player-video",
        onTimeUpdate: e => {
          if (null == eZ.current) return;
          let t = eZ.current.currentTime >= W.target && !e6.current && e1;
          if (eZ.current.currentTime >= eI || t) {
            var n;
            tn.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(eZ.current.currentTime)), (n = eZ.current.currentTime) >= W.target && (e6.current = true), eL(n + 6 + 2 * Math.random()), tT(n)
          }
          eZ.current.currentTime >= eR && (ek(eZ.current.currentTime + 1), (0, b.Gn)(ee.id, eh.taskType, eZ.current.currentTime), q(eZ.current.currentTime)), eW(ee.id, eZ.current.currentTime, eZ.current.duration), eS(eZ.current.currentTime / eZ.current.duration * 100)
        },
        onEnded: e => {
          null != eZ.current && (tT(eZ.current.duration + 1), tn.info("[QV] | handleEnded: sending progress update: ".concat(eZ.current.duration + 1)), eW(ee.id, eZ.current.duration, eZ.current.duration)), tj(N.Q6.ENDED), eT(false)
        },
        onLoadedData: e => {
          tn.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ex)), ex && (tp(null != eG.current ? performance.now() - eG.current : null), eA(false), tu())
        },
        onLoadedMetadata: e => {
          null != eZ.current && (tn.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(ta)), e9(true), ta !== O.fY.VIDEO_PLAYER_VIDEO_HLS && tQ(tr), eq ? eZ.current.volume = 0 : eZ.current.volume = ez)
        },
        onLoadStart: () => {
          eG.current = performance.now(), td(eN), tn.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eG.current))
        },
        onPlaying: () => {
          if (!eK.current) return;
          let e = performance.now() - Z;
          tn.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tO(e), eK.current = false
        },
        onWaiting: e => {
          eH.current = performance.now(), tn.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eH.current)), tg(), eT(true)
        },
        onProgress: e => {
          if (null == eZ.current) return;
          tn.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(eZ.current.buffered.length));
          let t = [];
          for (let e = 0; e < eZ.current.buffered.length; e++) {
            let n = eZ.current.buffered.start(e),
              r = eZ.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / eZ.current.duration,
              size: (r - n) / eZ.current.duration
            })
          }
          ew(t)
        },
        onCanPlay: tY,
        onCanPlayThrough: tY,
        onSeeked: () => {
          tn.info("[QV] | handleSeeked"), e3(true)
        },
        onAbort: () => tG(N.SB.ABORT),
        onError: () => tG(N.SB.ERROR),
        onEmptied: () => tG(N.SB.EMPTIED),
        onStalled: () => tG(N.SB.STALLED),
        onClick: () => {
          tn.info("[QV] | handleVideoClick"), tU()
        },
        crossOrigin: "anonymous",
        children: [null != t0 && (0, r.jsx)("track", {
          ref: eJ,
          src: t0.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != ts && ta !== O.fY.VIDEO_PLAYER_VIDEO_HLS && null != ts.mimetype && (0, r.jsx)("source", {
          onError: () => tG(N.SB.SOURCE_ERROR),
          src: ts.url,
          type: ts.mimetype
        })]
      }), (ex || ej) && ef === N.Q6.PLAYING && null != ts && (0, r.jsx)(u.y$y, {
        type: u.y$y.Type.WANDERING_CUBES,
        className: F.S
      }), (0, r.jsx)(L.A, {
        hasVideoAsset: null != ts,
        playerState: ef,
        pauseReason: e2
      }), (0, r.jsx)(s.animated.div, {
        className: F.R4,
        "data-testid": "discord-web-video-player-share-btn",
        style: {
          opacity: (0, s.to)([tW.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(T.A, {})
      }), en && ef !== N.Q6.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.DUT, {
          onClick: () => {
            ef === N.Q6.PAUSED && tj(N.Q6.PLAYING), er(false)
          },
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: F.BG
          })
        }), (0, r.jsx)(s.animated.div, {
          className: i()(F.xr, {
            [F.MZ]: "portrait" === J
          }),
          "data-testid": "discord-web-video-player-transcript",
          style: {
            marginBottom: (0, s.to)([tW, tX], (e, t) => "".concat(e * ti[tl] + t, "px"))
          },
          children: (0, r.jsx)(w.y, {
            quest: ee,
            onClose: () => {
              er(false), tE(E.uF.VIDEO_MODAL, S.Cy.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: F.Jp,
        style: {
          opacity: (0, s.to)([tW.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(F.yf, {
          [F.ZH]: ef === N.Q6.PLAYING,
          [F.v7]: ef === N.Q6.PAUSED
        }),
        children: ef === N.Q6.PLAYING ? (0, r.jsx)(u.udU, {
          className: F.PK
        }) : (0, r.jsx)(u.E$n, {
          className: F.PK
        })
      }, ef), el && null != e5 && !tJ && (0, r.jsx)(s.animated.div, {
        className: F.o$,
        ref: tz,
        "data-testid": "discord-web-video-player-captions",
        style: {
          translateY: (0, s.to)([tW.to({
            range: [0, 1],
            output: [0, -ti[tl]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(u.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: F.qh,
          children: e5.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: F.r8,
        style: {
          height: (0, s.to)([tW.to({
            range: [0, 1],
            output: [0, ti[tl]]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(D.A, {
          percent: null != eF ? eF : ey,
          animate: true !== e$.current && !e_,
          interactionEnabled: e0 && eQ,
          backgroundColor: tR ? true : "rgba(0, 0, 0, 0.0)",
          playerState: ef,
          preloadedBuffers: tR ? eD : true,
          duration: null != (o = null == (Y = eZ.current) ? true : Y.duration) ? o : 1,
          isFullyVisible: tR && eQ,
          maxSeekableTime: tR && eQ ? tt : true,
          onClick: e => {
            tQ(e), ef === N.Q6.ENDED && tj(N.Q6.PLAYING)
          },
          onScrubBack: tM,
          onScrubForward: tV,
          "data-testid": "discord-web-video-player-timeline"
        }), (0, r.jsx)(s.animated.div, {
          className: F.uN,
          "data-testid": "discord-web-video-player-controls",
          style: {
            paddingTop: (0, s.to)([tW.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([tW.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([tW.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => eg(true),
          onBlur: () => eg(false),
          children: (0, r.jsx)(x.A, {
            videoRef: eZ,
            videoTask: W,
            playerState: ef,
            animSpring: tW,
            visible: tR,
            seekForwardEnabled: t1,
            hideCaptionBtn: null == t0,
            hideTranscriptBtn: t6,
            size: tl,
            handlePlaybackBtnClick: tU,
            handleTranscriptBtnClick: () => {
              er(!en), tE(E.uF.VIDEO_MODAL, en ? S.Cy.TRANSCRIPT_DISABLE : S.Cy.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              eo(!el), tE(E.uF.VIDEO_MODAL, el ? S.Cy.CLOSED_CAPTIONING_DISABLE : S.Cy.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ei;
              tn.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, v.qf)(null == (e = eZ.current) ? true : e.parentNode, eZ.current);
              t && null != n ? ((0, v.tl)(n), n.addEventListener(v.Wb, tk), tS(true), to(N.oA.LG)) : t || null == n || (n.removeEventListener(v.Wb, tk), tS(false), (0, v.sP)(n), to(N.oA.MD)), es(t)
            },
            handleSeekBackBtnClick: tM,
            handleSeekForwardBtnClick: tV,
            handleControlBarPendingInteraction: eV,
            onVolumeChange: tC
          })
        })]
      })]
    })
  })
}