/** Chunk was on 32249 **/
/** chunk id: 963123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => $
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk713447 = require("./713447.js"),
  Chunk509442 = require("./509442.js"),
  Chunk574583 = require("./574583.js"),
  Chunk754700 = require("./754700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk707903 = require("./707903.js"),
  Chunk866960 = require("./866960.js"),
  Chunk228488 = require("./228488.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk184299 = require("./184299.js"),
  Chunk937797 = require("./937797.js"),
  Chunk347382 = require("./347382.js"),
  Chunk5881 = require("./5881.js"),
  Chunk117242 = require("./117242.js"),
  Chunk720293 = require("./720293.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk881773 = require("./881773.jsx"),
  Chunk536687 = require("./536687.jsx"),
  Chunk985559 = require("./985559.jsx"),
  Chunk355243 = require("./355243.jsx"),
  Chunk106743 = require("./106743.jsx"),
  Chunk223418 = require("./223418.js"),
  Chunk604162 = require("./604162.js"),
  Chunk747717 = require("./747717.jsx"),
  Chunk281055 = require("./281055.js"),
  Chunk431130 = require("./431130.js"),
  Chunk435585 = require("./435585.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946232 = require("./946232.js");
let W = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]),
  K = {
    tension: 250,
    friction: 5,
    clamp: true
  };

function z() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.getState().theme);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk946232.pauseText,
    style: {
      background: (0, Chunk780384.wj)(module) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
    },
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: Chunk388032.intl.string(Chunk388032.t["U7Xrb+"])
    })
  })
}

function X(e) {
  let {
    quest: t,
    shouldShow: n,
    sourceQuestContent: l
  } = e, a = o.useMemo(() => (0, R.z0)(t, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [t]);
  return null == a ? null : (0, r.jsx)(I.A, {
    questOrQuests: t,
    questContent: _.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: l,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: a.url,
      alt: "Video thumbnail",
      className: i()(G.stillFrameImageCard, {
        [G.stillFrameImageCardHidden]: !n
      })
    })
  })
}

function J(e) {
  let {
    title: t,
    subtitle: n,
    icon: l,
    onClick: a,
    className: s
  } = e, [c, u] = o.useState(false), d = () => {
    u(true)
  }, m = () => {
    u(false)
  };
  return (0, r.jsx)(p.P3F, {
    className: i()(G.endScreenPanel, G.accentOnHover, s),
    onMouseEnter: d,
    onMouseLeave: m,
    onFocus: d,
    onBlur: m,
    onClick: a,
    children: (0, r.jsxs)("div", {
      className: G.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: G.endScreenPanelTextCont,
        children: [(0, r.jsx)(p.Heading, {
          variant: "heading-md/semibold",
          className: G.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(p.Heading, {
          variant: "heading-sm/normal",
          className: G.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(Z.Z, {
        color: "#747783"
      }), (0, r.jsx)(l, {
        size: "md",
        color: c ? "#FFFFFF" : "#B5BAC1",
        className: G.endScreenIcon
      })]
    })
  })
}

function $(e) {
  var t, n, l, m, g, I, Z, q, $, ee;
  let {
    videoTask: et,
    onOptimisticProgressUpdate: en,
    autoplay: er,
    parentTransitionState: eo,
    performanceClockStartTime: el,
    orientation: ei
  } = e, {
    sourceQuestContent: ea,
    quest: es,
    videoSessionId: ec,
    onClose: eu
  } = o.useContext(w.VideoQuestModalContext), ed = (0, x.km)(e => e.transcriptEnabled), em = (0, x.km)(e => e.setTranscriptEnabled), ep = (0, x.km)(e => e.captionEnabled), ef = (0, x.km)(e => e.setCaptionEnabled), ev = (0, x.km)(e => e.fullScreenEnabled), eE = (0, x.km)(e => e.setFullScreenEnabled), {
    enabled: eg,
    variant: eO
  } = j.EO.useConfig({
    location: H.dr.VIDEO_MODAL
  }), eh = eO === j.m_.OVERLAY_SHARE_ON_VIDEO, {
    focused: eb,
    focusedChanged: eS
  } = (0, F.xU)(), {
    visible: ey,
    visibleChanged: eC,
    targetRef: e_
  } = (0, F.Yy)(), [ex, ej] = o.useState(true === er ? M.rq.PLAYING : M.rq.PAUSED), [eT, eD] = o.useState(false), [eP, eR] = o.useState(false), eI = (0, C.il)(es), [eN, ew] = o.useState(eI.percentComplete), eA = o.useCallback(e => {
    e0(null), ew(e)
  }, []), [ek, eL] = o.useState(false), [eM, eV] = o.useState(true), [eZ, eF] = o.useState(false), [eB, eU] = o.useState([]), [eH, eq] = o.useState(h.Z.getEffectiveConnectionSpeed()), [eY, eQ] = o.useState(0), [eG, eW] = o.useState(0), [eK, ez] = o.useState(false), [eX, eJ] = o.useState(false), [e$, e0] = o.useState(null), e1 = o.useRef(true), e2 = o.useRef(null), e4 = o.useRef(null), e8 = (0, x.km)(e => {
    var t;
    return null != (t = e.videoProgress[es.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), e6 = (0, x.km)(e => e.setVideoProgress), e7 = (0, x.km)(e => e.muted), e9 = (0, x.km)(e => e.volume), e3 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion), e5 = (0, o.useRef)(null), te = (0, o.useRef)(null), tt = o.useRef(true), tn = (null == (t = es.userStatus) ? true : t.completedAt) != null, [tr, to] = o.useState(null), [tl, ti] = o.useState(false), [ta, ts] = o.useState(false), [tc, tu] = o.useState(null), td = tn ? null != (I = null == (n = e5.current) ? true : n.duration) ? I : 0 : Math.max(e8.maxTimestampSec, eI.progressSeconds), tm = o.useMemo(() => (0, D.T)({
    quest: es,
    location: H.dr.VIDEO_MODAL
  }), [es]), {
    title: tp,
    subtitle: tf
  } = function(e) {
    var t, n, r;
    let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
    return {
      title: (0, C.B2)(e.config),
      subtitle: null != (r = null != (n = null == (t = e.config.ctaConfig) ? true : t.subtitle) ? n : null == o ? true : o.messages.videoEndCtaSubtitle) ? r : Q.intl.string(Q.t.mxaHfx)
    }
  }(es), tv = tn ? e8.timestampSec >= e8.duration ? 0 : e8.timestampSec : Math.max(e8.timestampSec, eI.progressSeconds);
  (0, f.Ng)(() => {
    tt.current && (tt.current = false, eq(h.Z.getEffectiveConnectionSpeed()), tn && e8.timestampSec >= e8.duration && e6(es.id, 0, e8.duration))
  });
  let {
    videoVariant: tE,
    videoAsset: tg,
    hlsRef: tO
  } = function(e, t, n, r) {
    var l;
    let i = o.useRef(false),
      s = o.useRef(null),
      c = (0, T.z)(e, H.dr.VIDEO_MODAL),
      d = null == (l = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : l.assets,
      m = o.useMemo(() => null != d ? c && a.ZP.isSupported() && null != d.videoHls ? R.n1.VIDEO_HLS : W.has(n) || null == d.videoLowRes ? R.n1.VIDEO : R.n1.VIDEO_LOW_RES : null, [d, n, c]),
      p = o.useMemo(() => null != m ? (0, R.z0)(e, u.X.WATCH_VIDEO, m, R.O.VIDEO) : null, [e, m]),
      f = () => {
        null != s.current && 8e5 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 8e5)
      };
    return o.useEffect(() => {
      if (m !== R.n1.VIDEO_HLS || null == p || null == t.current || i.current) return;
      s.current = new a.ZP({
        backBufferLength: 20,
        maxBufferLength: 30,
        startPosition: r,
        startFragPrefetch: true,
        startLevel: false
      }), s.current.on(a.ZP.Events.FRAG_LOADING, f), s.current.loadSource(p.url), s.current.attachMedia(t.current), i.current = true;
      let e = s.current;
      return () => {
        null != e && e.off(a.ZP.Events.FRAG_LOADING, f)
      }
    }, [p, m, t, r]), {
      videoVariant: m,
      videoAsset: p,
      hlsRef: s
    }
  }(es, e5, eH, tv), th = (0, R.CC)(tE), {
    trackQuestVideoLoadingStarted: tb,
    trackQuestVideoLoadingEnded: tS,
    trackQuestVideoProgressed: ty,
    trackQuestVideoResumed: tC,
    trackQuestVideoPaused: t_,
    trackQuestVideoFocusChange: tx,
    trackQuestContentClick: tj,
    trackQuestVideoBufferingStarted: tT,
    trackQuestVideoBufferingEnded: tD,
    trackWatchTimeAnalytics: tP,
    trackQuestVideoTimeToFirstFrame: tR,
    trackQuestVideoFullscreenChanged: tI,
    trackQuestVideoError: tN,
    trackQuestVideoVolumeChanged: tw
  } = (0, U.Z)({
    quest: es,
    videoRef: e5,
    hlsRef: tO,
    videoSessionId: ec,
    videoAssetId: th,
    sourceQuestContent: ea,
    logger: tm
  }), tA = o.useRef(null), tk = es.id, tL = es.config.application.id, tM = es.config.messages.gameTitle, tV = null == tg ? true : tg.url, tZ = null == (l = es.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : l.messages.videoTitle;
  o.useEffect(() => {
    var e;
    if (null == tV || null == e5.current || tE === R.n1.VIDEO_HLS && null == tO.current || !(0, O.Zx)({
        location: H.dr.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let t = {
      debug: false,
      videoElement: e5.current,
      hlsInstance: tE === R.n1.VIDEO_HLS && null != (e = tO.current) ? e : true,
      feature: "quests",
      contentMetadata: {
        contentId: tV,
        videoStreamType: tE === R.n1.VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == e5.current.duration || isNaN(e5.current.duration) ? 0 : e5.current.duration,
        title: tZ,
        questId: tk,
        gameId: tL,
        gameName: tM
      }
    };
    return tA.current = new O.ci(t), tA.current.initialize(), () => {
      null != tA.current && (tA.current.endSession(), tA.current.destroy(), tA.current = null)
    }
  }, [tE, tO, tL, tM, tk, tV, tZ]);
  let tF = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e5.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tB
    } = (0, P.Z)({
      getCurrentVideoTime: tF,
      isPlaying: ex === M.rq.PLAYING,
      isMetadataLoaded: tl,
      isInitialSeekComplete: ta,
      onAnalytics: tP,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tU = o.useCallback(e => {
      if (tm.info("[QV] | updatePlayerState | playerState: ".concat(e)), ej(e), null != e5.current) switch (e) {
        case M.rq.PLAYING:
          e5.current.paused && tC(tr), to(null), e5.current.play();
          break;
        case M.rq.PAUSED:
          e5.current.paused || tB(), e5.current.pause(), e1.current = false;
          break;
        case M.rq.ENDED:
          tB(), em(false)
      }
    }, [tC, tr, tB, em, tm]);
  o.useEffect(() => {
    t_(tr)
  }, [tr, t_]), o.useEffect(() => {
    eS && tx(eb, ex)
  }, [eb, eS, ex, tx]);
  let tH = o.useCallback(e => {
    var t;
    tn || (null == (t = es.userStatus) ? true : t.enrolledAt) == null || (tm.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, C.FI)(es, e)), ty()
  }, [tn, es, tm, ty]);
  o.useEffect(() => {
    eo !== p.Dvm.HIDDEN && eo !== p.Dvm.EXITING && eo !== p.Dvm.EXITED && (null == eo || !eC || ey || tn) && (!eS || eb || tn) || null == e5.current || ex !== M.rq.PLAYING || (tm.info("[QV] | Pausing video | playerState: ".concat(ex, ", parentTransitionState: ").concat(eo, ", visible: ").concat(ey, ", focused: ").concat(eb, ", isQuestCompleted: ").concat(tn)), tU(M.rq.PAUSED), tn || to(_.yE.LOST_FOCUS))
  }, [eo, eb, eS, ey, eC, ex, tn, tU, tH, tm]);
  let [tq, tY] = o.useState(false), tQ = o.useRef(null), tG = o.useRef(performance.now()), tW = o.useCallback(() => {
    null != tQ.current && clearTimeout(tQ.current), ex === M.rq.PLAYING && (tQ.current = setTimeout(() => {
      ex === M.rq.PLAYING && tY(true)
    }, Math.max(0, 3e3 - (performance.now() - tG.current))))
  }, [ex]), tK = () => {
    tY(false), tG.current = performance.now(), tW()
  };
  o.useEffect(() => {
    if (ex !== M.rq.PLAYING) {
      tY(false), null != tQ.current && clearTimeout(tQ.current);
      return
    }
    return tW(), () => {
      null != tQ.current && clearTimeout(tQ.current)
    }
  }, [ex, tW]);
  let tz = !tq && (eP || eT || ex === M.rq.ENDED),
    tX = o.useCallback(() => {
      var e;
      tm.info("[QV] | handleFullScreenExit");
      let t = (0, b.fn)(null == (e = e5.current) ? true : e.parentNode, e5.current);
      null == t || (0, b.rB)(t) || (t.removeEventListener(b.NO, tX), eE(false), tI(false))
    }, [eE, tm, tI]),
    tJ = () => {
      if (null == e5.current) return;
      let e = Math.max(e5.current.currentTime - 10, 0);
      tm.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), t0(e), ex === M.rq.ENDED && tU(M.rq.PAUSED), tj(_.jn.VIDEO_MODAL, y.jZ.SEEK_BACKWARD)
    },
    t$ = () => {
      if (null == e5.current || !na) return;
      let e = Math.min(e5.current.currentTime + 10, td);
      tm.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), t0(e), ex !== M.rq.ENDED && e >= e5.current.duration && tU(M.rq.ENDED), tj(_.jn.VIDEO_MODAL, y.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e5.current;
    return () => {
      let t = (0, b.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(b.NO, tX)
    }
  }, [tX]);
  let t0 = o.useCallback(e => {
      var t;
      null != e5.current && (tm.info("[QV] | seekTimeline | timeSec: ".concat(e)), e0(e / (null != (t = e5.current.duration) ? t : 1) * 100), tB(), eL(true), ts(false), e5.current.currentTime = e, e6(es.id, e, e5.current.duration))
    }, [e5, e6, es.id, tB, tm]),
    t1 = () => {
      if (null != e5.current) switch (tm.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(ex)), ex) {
        case M.rq.ENDED:
          t0(0), tU(M.rq.PLAYING);
          break;
        case M.rq.PLAYING:
          tU(M.rq.PAUSED), to(_.yE.PAUSE_BUTTON);
          break;
        default:
          tU(M.rq.PLAYING)
      }
    },
    t2 = e => {
      tu(e)
    },
    t4 = e => {
      tu(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    t8 = o.useCallback(() => {
      if (null == e5.current || (tm.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e5.current.textTracks.length)), 0 === e5.current.textTracks.length)) return;
      let e = e5.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, V.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => t2(n), n.onexit = () => t4(n))
        }
    }, [e5, tm]);
  o.useEffect(() => {
    if (null == te.current) return;
    let e = te.current;
    return e.addEventListener("load", t8), () => {
      null != e && e.removeEventListener("load", t8)
    }
  }, [te, t8]);
  let t6 = o.useCallback(e => {
      var t;
      tm.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e5.current) ? true : t.currentTime, ", videoAssetId: ").concat(th, ", connectionSpeed: ").concat(eH)), tN(e)
    }, [eH, tN, e5, th, tm]),
    t7 = e => {
      tm.info("[QV] | handleCanPlay: playerState: ".concat(ex)), null != e5.current && ex === M.rq.PLAYING && (tm.info("[QV] | handleCanPlay: did NOT early return"), eM && (tm.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eM)), eV(false)), eZ && (tm.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eZ)), tD(null != e4.current ? performance.now() - e4.current : null), eF(false)), tm.info("[QV] | handleCanPlay: updating player state to playing"), tU(M.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!ek) return;
    let e = setTimeout(() => {
      eL(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [ek]);
  let [{
    controlBarAnimSpring: t9
  }, t3] = (0, p.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: K,
    onStart: () => {
      eJ(false)
    },
    onRest: e => {
      1 === e.value && eJ(true)
    }
  })), t5 = (0, o.useRef)(null), [{
    captionHeightSpring: ne
  }, nt] = (0, p.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: K
  }));
  o.useEffect(() => {
    var e, t;
    return nt({
      captionHeightSpring: ep && null != tc && null != (t = null == (e = t5.current) ? true : e.clientHeight) ? t : 0,
      immediate: e3
    }), () => {
      ne.stop()
    }
  }, [ep, nt, e3, tc, ne]), o.useEffect(() => (t3({
    controlBarAnimSpring: tz || eK ? 1 : 0,
    immediate: e3
  }), () => {
    t9.stop()
  }), [tz, t3, e3, eK, t9]);
  let nn = ex === M.rq.ENDED,
    nr = (0, B.p)({
      quest: es,
      onClose: eu,
      sourceQuestContent: ea
    }),
    no = o.useCallback((e, t) => {
      if (ev) {
        var n;
        let e = (0, b.fn)(null == (n = e5.current) ? true : n.parentNode, e5.current);
        null != e && (e.removeEventListener(b.NO, tX), (0, b.Pr)(e), eE(false), tI(false))
      }
      tj(e, y.jZ.LEARN_MORE), nr(e, t)
    }, [nr, ev, tj, tX, eE, tI]),
    nl = o.useMemo(() => (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [es]),
    ni = o.useMemo(() => (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.CAPTION), [es]),
    na = tn || e8.maxTimestampSec >= (null != (Z = null == (m = e5.current) ? true : m.currentTime) ? Z : 0) + 1,
    ns = o.useMemo(() => null === (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.TRANSCRIPT), [es]),
    nc = eg ? {} : {
      paddingLeft: (0, s.to)([t9.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px")),
      paddingRight: (0, s.to)([t9.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px"))
    };
  return (0, r.jsx)(p.P3F, {
    className: i()(G.videoCont, {
      [G.videoContRoundedCorners]: eg
    }),
    "data-fullscreen": ev,
    tabIndex: false,
    onMouseEnter: () => {
      eD(true), tY(false), tG.current = performance.now(), null != tQ.current && clearTimeout(tQ.current)
    },
    onMouseLeave: () => {
      eD(false), tY(false)
    },
    onMouseMove: tK,
    onKeyDown: tK,
    children: (0, r.jsxs)("div", {
      className: i()(G.videoContInnerRelative, {
        [G.videoContInnerRelativePortrait]: "portrait" === ei,
        [G.videoContInnerRelativeLandscape]: "landscape" === ei
      }),
      children: [nn && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(X, {
          quest: es,
          shouldShow: nn,
          sourceQuestContent: ea
        }), (0, r.jsx)("div", {
          className: G.videoContOverlay
        }), (0, r.jsx)(J, {
          title: tp,
          subtitle: tf,
          icon: p.d4D,
          className: G.endScreenPanelRight,
          onClick: () => no(_.jn.VIDEO_MODAL, y.jZ.OPEN_GAME_LINK)
        })]
      }), (0, r.jsxs)(E.Z, {
        ref: e => {
          e5.current = e, e_.current = e
        },
        autoPlay: er,
        playsInline: true,
        mediaLayoutType: ev ? Y.hV.STATIC : Y.hV.RESPONSIVE,
        className: i()({
          [G.hidden]: nn,
          [G.videoInner]: true
        }),
        controls: false,
        poster: null == nl ? true : nl.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e5.current && (e5.current.currentTime >= eY && (tm.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e5.current.currentTime)), eQ(e5.current.currentTime + 6 + 2 * Math.random()), tH(e5.current.currentTime)), e5.current.currentTime >= eG && (eW(e5.current.currentTime + 1), (0, S.qm)(es.id, eI.taskType, e5.current.currentTime), en(e5.current.currentTime)), e6(es.id, e5.current.currentTime, e5.current.duration), eA(e5.current.currentTime / e5.current.duration * 100))
        },
        onEnded: e => {
          null != e5.current && (tH(e5.current.duration + 1), tm.info("[QV] | handleEnded: sending progress update: ".concat(e5.current.duration + 1)), e6(es.id, e5.current.duration, e5.current.duration)), tU(M.rq.ENDED), eF(false)
        },
        onLoadedData: e => {
          tm.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eM)), eM && (tS(null != e2.current ? performance.now() - e2.current : null), eV(false), null != tO.current && (tO.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e5.current && (tm.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(th)), ti(true), tE !== R.n1.VIDEO_HLS && t0(tv), e7 ? e5.current.volume = 0 : e5.current.volume = e9)
        },
        onLoadStart: () => {
          e2.current = performance.now(), tb(eH), tm.info("[QV] | handleLoadStart | loadingStartTime: ".concat(e2.current))
        },
        onPlaying: () => {
          if (!e1.current) return;
          let e = performance.now() - el;
          tm.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tR(e), e1.current = false
        },
        onWaiting: e => {
          e4.current = performance.now(), tm.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(e4.current)), tT(), eF(true)
        },
        onProgress: e => {
          if (null == e5.current) return;
          tm.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e5.current.buffered.length));
          let t = [];
          for (let e = 0; e < e5.current.buffered.length; e++) {
            let n = e5.current.buffered.start(e),
              r = e5.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e5.current.duration,
              size: (r - n) / e5.current.duration
            })
          }
          eU(t)
        },
        onCanPlay: t7,
        onCanPlayThrough: t7,
        onSeeked: () => {
          tm.info("[QV] | handleSeeked"), ts(true)
        },
        onAbort: () => t6(M.CY.ABORT),
        onError: () => t6(M.CY.ERROR),
        onEmptied: () => t6(M.CY.EMPTIED),
        onStalled: () => t6(M.CY.STALLED),
        onClick: () => {
          tm.info("[QV] | handleVideoClick"), t1()
        },
        crossOrigin: "anonymous",
        children: [null != ni && (0, r.jsx)("track", {
          ref: te,
          src: ni.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tg && tE !== R.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => t6(M.CY.SOURCE_ERROR),
          src: tg.url,
          type: tg.mimetype
        })]
      }), (eM || eZ) && ex === M.rq.PLAYING && (0, r.jsx)(p.$jN, {
        type: p.$jN.Type.WANDERING_CUBES,
        className: G.loadingSpinner
      }), ex === M.rq.PAUSED && tr === _.yE.LOST_FOCUS && (0, r.jsx)(z, {}), eh && (0, r.jsx)(s.animated.div, {
        className: G.floatingShareButtonContainer,
        style: {
          opacity: (0, s.to)([t9.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(A.Z, {})
      }), ed && ex !== M.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.P3F, {
          onClick: () => em(false),
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: G.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: i()(G.transcriptCont, {
            [G.transcriptContPortrait]: "portrait" === ei
          }),
          style: {
            marginBottom: (0, s.to)([t9, ne], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(L.K, {
            quest: es,
            onClose: () => {
              em(false), tj(_.jn.VIDEO_MODAL, y.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: G.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([t9.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(G.playPausePopCont, {
          [G.play]: ex === M.rq.PLAYING,
          [G.pause]: ex === M.rq.PAUSED
        }),
        children: ex === M.rq.PLAYING ? (0, r.jsx)(p.o1U, {
          className: G.playPausePopIcon
        }) : (0, r.jsx)(p.fpf, {
          className: G.playPausePopIcon
        })
      }, ex), ep && null != tc && !nn && (0, r.jsx)(s.animated.div, {
        className: G.captionContainer,
        ref: t5,
        style: {
          translateY: (0, s.to)([t9.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(p.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: G.captionText,
          children: tc.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: G.videoFooterCont,
        style: ($ = function(e) {
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
        }({}, nc), ee = ee = {
          paddingInline: 16 * !!eg,
          height: (0, s.to)([t9.to({
            range: [0, 1],
            output: [0, 50]
          })], e => "".concat(e, "px"))
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties($, Object.getOwnPropertyDescriptors(ee)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(ee)).forEach(function(e) {
          Object.defineProperty($, e, Object.getOwnPropertyDescriptor(ee, e))
        }), $),
        children: [(0, r.jsx)(k.Z, {
          percent: null != e$ ? e$ : eN,
          animate: true !== tt.current && !ek,
          interactionEnabled: tn && eX,
          backgroundColor: tz ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tz ? eB : true,
          duration: null != (q = null == (g = e5.current) ? true : g.duration) ? q : 1,
          maxSeekableTime: tz && eX ? td : true,
          onClick: e => {
            t0(e), ex === M.rq.ENDED && tU(M.rq.PLAYING)
          },
          onScrubBack: () => {
            tJ()
          },
          rounded: eg,
          onScrubForward: () => {
            t$()
          }
        }), (0, r.jsx)(s.animated.div, {
          className: G.videoControlsCont,
          style: {
            paddingTop: (0, s.to)([t9.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([t9.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([t9.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => eR(true),
          onBlur: () => eR(false),
          children: (0, r.jsx)(N.Z, {
            videoRef: e5,
            videoTask: et,
            playerState: ex,
            animSpring: t9,
            visible: tz,
            seekForwardEnabled: na,
            hideCaptionBtn: null == ni,
            hideTranscriptBtn: ns,
            handlePlaybackBtnClick: t1,
            handleTranscriptBtnClick: () => {
              em(!ed), tj(_.jn.VIDEO_MODAL, ed ? y.jZ.TRANSCRIPT_DISABLE : y.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ef(!ep), tj(_.jn.VIDEO_MODAL, ep ? y.jZ.CLOSED_CAPTIONING_DISABLE : y.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ev;
              tm.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, b.fn)(null == (e = e5.current) ? true : e.parentNode, e5.current);
              t && null != n ? ((0, b.Dj)(n), n.addEventListener(b.NO, tX), tI(true)) : t || null == n || (n.removeEventListener(b.NO, tX), tI(false), (0, b.Pr)(n)), eE(t)
            },
            handleSeekBackBtnClick: tJ,
            handleSeekForwardBtnClick: t$,
            handleControlBarPendingInteraction: ez,
            onVolumeChange: tw
          })
        })]
      })]
    })
  })
}