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
  Chunk13941 = require("./13941.js"),
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
  Chunk63063 = require("./63063.js"),
  Chunk228488 = require("./228488.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk497505 = require("./497505.js"),
  Chunk184299 = require("./184299.js"),
  Chunk347382 = require("./347382.js"),
  Chunk5881 = require("./5881.js"),
  Chunk208109 = require("./208109.js"),
  Chunk117242 = require("./117242.js"),
  Chunk720293 = require("./720293.js"),
  Chunk566078 = require("./566078.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk881773 = require("./881773.jsx"),
  Chunk350312 = require("./350312.jsx"),
  Chunk355243 = require("./355243.jsx"),
  Chunk106743 = require("./106743.jsx"),
  Chunk223418 = require("./223418.js"),
  Chunk604162 = require("./604162.js"),
  Chunk747717 = require("./747717.jsx"),
  Chunk281055 = require("./281055.js"),
  Chunk435585 = require("./435585.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430799 = require("./430799.js");
let W = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]),
  z = {
    tension: 250,
    friction: 5,
    clamp: true
  };

function K() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.getState().theme);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk430799.pauseText,
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
    sourceQuestContent: o
  } = e, a = l.useMemo(() => (0, I.z0)(t, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [t]);
  return null == a ? null : (0, r.jsx)(k.A, {
    questOrQuests: t,
    questContent: j.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: o,
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
    icon: o,
    onClick: a,
    className: s
  } = e, [c, u] = l.useState(false), d = () => {
    u(true)
  }, m = () => {
    u(false)
  };
  return (0, r.jsx)(f.P3F, {
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
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-md/semibold",
          className: G.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(f.Heading, {
          variant: "heading-sm/normal",
          className: G.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(B.Z, {
        color: "#747783"
      }), (0, r.jsx)(o, {
        size: "md",
        color: c ? "#FFFFFF" : "#B5BAC1",
        className: G.endScreenIcon
      })]
    })
  })
}

function $(e) {
  var t, n, o, m, E, k, B, $;
  let {
    quest: ee,
    videoTask: et,
    videoSessionId: en,
    onOptimisticProgressUpdate: er,
    autoplay: el,
    parentTransitionState: eo,
    performanceClockStartTime: ei,
    onClose: ea,
    sourceQuestContent: es,
    orientation: ec
  } = e, eu = (0, x.km)(e => e.transcriptEnabled), ed = (0, x.km)(e => e.setTranscriptEnabled), em = (0, x.km)(e => e.captionEnabled), ef = (0, x.km)(e => e.setCaptionEnabled), ep = (0, x.km)(e => e.fullScreenEnabled), ev = (0, x.km)(e => e.setFullScreenEnabled), {
    focused: eg,
    focusedChanged: eE
  } = (0, F.xU)(), {
    visible: eb,
    visibleChanged: eO,
    targetRef: eh
  } = (0, F.Yy)(), [eC, eS] = l.useState(true === el ? V.rq.PLAYING : V.rq.PAUSED), [e_, ey] = l.useState(false), [ej, ex] = l.useState(false), eT = (0, _.il)(ee), [eD, eP] = l.useState(eT.percentComplete), eR = l.useCallback(e => {
    eK(null), eP(e)
  }, []), [eI, eN] = l.useState(false), [ek, ew] = l.useState(true), [eA, eL] = l.useState(false), [eM, eV] = l.useState([]), [eZ, eB] = l.useState(O.Z.getEffectiveConnectionSpeed()), [eF, eU] = l.useState(0), [eq, eH] = l.useState(0), [eY, eQ] = l.useState(false), [eG, eW] = l.useState(false), [ez, eK] = l.useState(null), eX = l.useRef(true), eJ = l.useRef(null), e$ = l.useRef(null), e0 = (0, x.km)(e => {
    var t;
    return null != (t = e.videoProgress[ee.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), e1 = (0, x.km)(e => e.setVideoProgress), e2 = (0, x.km)(e => e.muted), e8 = (0, x.km)(e => e.volume), e4 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion), e7 = (0, l.useRef)(null), e6 = (0, l.useRef)(null), e9 = l.useRef(true), e3 = (null == (t = ee.userStatus) ? true : t.completedAt) != null, [e5, te] = l.useState(null), [tt, tn] = l.useState(false), [tr, tl] = l.useState(false), [to, ti] = l.useState(null), ta = e3 ? null != (k = null == (n = e7.current) ? true : n.duration) ? k : 0 : Math.max(e0.maxTimestampSec, eT.progressSeconds), ts = l.useMemo(() => (0, D.T)({
    quest: ee,
    location: q.dr.VIDEO_MODAL
  }), [ee]), {
    title: tc,
    subtitle: tu
  } = function(e) {
    var t, n, r;
    let l = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
    return {
      title: (0, _.B2)(e.config),
      subtitle: null != (r = null != (n = null == (t = e.config.ctaConfig) ? true : t.subtitle) ? n : null == l ? true : l.messages.videoEndCtaSubtitle) ? r : Q.intl.string(Q.t.mxaHfx)
    }
  }(ee), td = e3 ? e0.timestampSec >= e0.duration ? 0 : e0.timestampSec : Math.max(e0.timestampSec, eT.progressSeconds);
  (0, p.Ng)(() => {
    e9.current && (e9.current = false, eB(O.Z.getEffectiveConnectionSpeed()), e3 && e0.timestampSec >= e0.duration && e1(ee.id, 0, e0.duration))
  });
  let {
    videoVariant: tm,
    videoAsset: tf,
    hlsRef: tp
  } = function(e, t, n, r) {
    var o;
    let i = l.useRef(false),
      s = l.useRef(null),
      c = (0, T.z)(e, q.dr.VIDEO_MODAL),
      d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : o.assets,
      m = l.useMemo(() => null != d ? c && a.ZP.isSupported() && null != d.videoHls ? I.n1.VIDEO_HLS : W.has(n) || null == d.videoLowRes ? I.n1.VIDEO : I.n1.VIDEO_LOW_RES : null, [d, n, c]),
      f = l.useMemo(() => null != m ? (0, I.z0)(e, u.X.WATCH_VIDEO, m, I.O.VIDEO) : null, [e, m]),
      p = () => {
        null != s.current && 8e5 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 8e5)
      };
    return l.useEffect(() => {
      if (m !== I.n1.VIDEO_HLS || null == f || null == t.current || i.current) return;
      s.current = new a.ZP({
        backBufferLength: 20,
        maxBufferLength: 30,
        startPosition: r,
        startFragPrefetch: true,
        startLevel: false
      }), s.current.on(a.ZP.Events.FRAG_LOADING, p), s.current.loadSource(f.url), s.current.attachMedia(t.current), i.current = true;
      let e = s.current;
      return () => {
        null != e && e.off(a.ZP.Events.FRAG_LOADING, p)
      }
    }, [f, m, t, r]), {
      videoVariant: m,
      videoAsset: f,
      hlsRef: s
    }
  }(ee, e7, eZ, td), tv = (0, I.CC)(tm), {
    trackQuestVideoLoadingStarted: tg,
    trackQuestVideoLoadingEnded: tE,
    trackQuestVideoProgressed: tb,
    trackQuestVideoResumed: tO,
    trackQuestVideoPaused: th,
    trackQuestVideoFocusChange: tC,
    trackQuestContentClick: tS,
    trackQuestVideoBufferingStarted: t_,
    trackQuestVideoBufferingEnded: ty,
    trackWatchTimeAnalytics: tj,
    trackQuestVideoTimeToFirstFrame: tx,
    trackQuestVideoFullscreenChanged: tT,
    trackQuestVideoError: tD,
    trackQuestVideoVolumeChanged: tP
  } = (0, U.Z)({
    quest: ee,
    videoRef: e7,
    hlsRef: tp,
    videoSessionId: en,
    videoAssetId: tv,
    sourceQuestContent: es,
    logger: ts
  }), tR = l.useRef(null), tI = ee.id, tN = ee.config.application.id, tk = ee.config.application.name, tw = null == tf ? true : tf.url, tA = null == (o = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : o.messages.videoTitle;
  l.useEffect(() => {
    var e;
    if (null == tw || null == e7.current || tm === I.n1.VIDEO_HLS && null == tp.current || !(0, b.Zx)({
        location: q.dr.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let t = {
      debug: false,
      videoElement: e7.current,
      hlsInstance: tm === I.n1.VIDEO_HLS && null != (e = tp.current) ? e : true,
      feature: "quests",
      contentMetadata: {
        contentId: tw,
        videoStreamType: tm === I.n1.VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == e7.current.duration || isNaN(e7.current.duration) ? 0 : e7.current.duration,
        title: tA,
        questId: tI,
        gameId: tN,
        gameName: tk
      }
    };
    return tR.current = new b.ci(t), tR.current.initialize(), () => {
      null != tR.current && (tR.current.endSession(), tR.current.destroy(), tR.current = null)
    }
  }, [tm, tp, tN, tk, tI, tw, tA]);
  let tL = l.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e7.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tM
    } = (0, R.Z)({
      getCurrentVideoTime: tL,
      isPlaying: eC === V.rq.PLAYING,
      isMetadataLoaded: tt,
      isInitialSeekComplete: tr,
      onAnalytics: tj,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tV = l.useCallback(e => {
      if (ts.info("[QV] | updatePlayerState | playerState: ".concat(e)), eS(e), null != e7.current) switch (e) {
        case V.rq.PLAYING:
          e7.current.paused && tO(e5), te(null), e7.current.play();
          break;
        case V.rq.PAUSED:
          e7.current.paused || tM(), e7.current.pause(), eX.current = false;
          break;
        case V.rq.ENDED:
          tM(), ed(false)
      }
    }, [tO, e5, tM, ed, ts]);
  l.useEffect(() => {
    th(e5)
  }, [e5, th]), l.useEffect(() => {
    eE && tC(eg, eC)
  }, [eg, eE, eC, tC]);
  let tZ = l.useCallback(e => {
    var t;
    e3 || (null == (t = ee.userStatus) ? true : t.enrolledAt) == null || (ts.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, _.FI)(ee, e)), tb()
  }, [e3, ee, ts, tb]);
  l.useEffect(() => {
    eo !== f.Dvm.HIDDEN && eo !== f.Dvm.EXITING && eo !== f.Dvm.EXITED && (null == eo || !eO || eb || e3) && (!eE || eg || e3) || null == e7.current || eC !== V.rq.PLAYING || (ts.info("[QV] | Pausing video | playerState: ".concat(eC, ", parentTransitionState: ").concat(eo, ", visible: ").concat(eb, ", focused: ").concat(eg, ", isQuestCompleted: ").concat(e3)), tV(V.rq.PAUSED), e3 || te(j.yE.LOST_FOCUS))
  }, [eo, eg, eE, eb, eO, eC, e3, tV, tZ, ts]);
  let [tB, tF] = l.useState(false), tU = l.useRef(null), tq = l.useRef(performance.now()), tH = l.useCallback(() => {
    null != tU.current && clearTimeout(tU.current), eC === V.rq.PLAYING && (tU.current = setTimeout(() => {
      eC === V.rq.PLAYING && tF(true)
    }, Math.max(0, 3e3 - (performance.now() - tq.current))))
  }, [eC]), tY = () => {
    tF(false), tq.current = performance.now(), tH()
  };
  l.useEffect(() => {
    if (eC !== V.rq.PLAYING) {
      tF(false), null != tU.current && clearTimeout(tU.current);
      return
    }
    return tH(), () => {
      null != tU.current && clearTimeout(tU.current)
    }
  }, [eC, tH]);
  let tQ = !tB && (ej || e_ || eC === V.rq.ENDED),
    tG = l.useCallback(() => {
      var e;
      ts.info("[QV] | handleFullScreenExit");
      let t = (0, C.fn)(null == (e = e7.current) ? true : e.parentNode, e7.current);
      null == t || (0, C.rB)(t) || (t.removeEventListener(C.NO, tG), ev(false), tT(false))
    }, [ev, ts, tT]),
    tW = () => {
      if (null == e7.current) return;
      let e = Math.max(e7.current.currentTime - 10, 0);
      ts.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tK(e), eC === V.rq.ENDED && tV(V.rq.PAUSED), tS(j.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD)
    },
    tz = () => {
      if (null == e7.current || !nn) return;
      let e = Math.min(e7.current.currentTime + 10, ta);
      ts.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tK(e), eC !== V.rq.ENDED && e >= e7.current.duration && tV(V.rq.ENDED), tS(j.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD)
    };
  l.useEffect(() => {
    let e = e7.current;
    return () => {
      let t = (0, C.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(C.NO, tG)
    }
  }, [tG]);
  let tK = l.useCallback(e => {
      var t;
      null != e7.current && (ts.info("[QV] | seekTimeline | timeSec: ".concat(e)), eK(e / (null != (t = e7.current.duration) ? t : 1) * 100), tM(), eN(true), tl(false), e7.current.currentTime = e, e1(ee.id, e, e7.current.duration))
    }, [e7, e1, ee.id, tM, ts]),
    tX = () => {
      if (null != e7.current) switch (ts.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eC)), eC) {
        case V.rq.ENDED:
          tK(0), tV(V.rq.PLAYING);
          break;
        case V.rq.PLAYING:
          tV(V.rq.PAUSED), te(j.yE.PAUSE_BUTTON);
          break;
        default:
          tV(V.rq.PLAYING)
      }
    },
    tJ = e => {
      ti(e)
    },
    t$ = e => {
      ti(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    t0 = l.useCallback(() => {
      if (null == e7.current || (ts.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e7.current.textTracks.length)), 0 === e7.current.textTracks.length)) return;
      let e = e7.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, Z.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tJ(n), n.onexit = () => t$(n))
        }
    }, [e7, ts]);
  l.useEffect(() => {
    if (null == e6.current) return;
    let e = e6.current;
    return e.addEventListener("load", t0), () => {
      null != e && e.removeEventListener("load", t0)
    }
  }, [e6, t0]);
  let t1 = l.useCallback(e => {
      var t;
      ts.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e7.current) ? true : t.currentTime, ", videoAssetId: ").concat(tv, ", connectionSpeed: ").concat(eZ)), tD(e)
    }, [eZ, tD, e7, tv, ts]),
    t2 = e => {
      ts.info("[QV] | handleCanPlay: playerState: ".concat(eC)), null != e7.current && eC === V.rq.PLAYING && (ts.info("[QV] | handleCanPlay: did NOT early return"), ek && (ts.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ek)), ew(false)), eA && (ts.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eA)), ty(null != e$.current ? performance.now() - e$.current : null), eL(false)), ts.info("[QV] | handleCanPlay: updating player state to playing"), tV(V.rq.PLAYING))
    };
  l.useEffect(() => {
    if (!eI) return;
    let e = setTimeout(() => {
      eN(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eI]);
  let [{
    controlBarAnimSpring: t8
  }, t4] = (0, f.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: z,
    onStart: () => {
      eW(false)
    },
    onRest: e => {
      1 === e.value && eW(true)
    }
  })), t7 = (0, l.useRef)(null), [{
    captionHeightSpring: t6
  }, t9] = (0, f.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: z
  }));
  l.useEffect(() => {
    var e, t;
    return t9({
      captionHeightSpring: em && null != to && null != (t = null == (e = t7.current) ? true : e.clientHeight) ? t : 0,
      immediate: e4
    }), () => {
      t6.stop()
    }
  }, [em, t9, e4, to, t6]), l.useEffect(() => (t4({
    controlBarAnimSpring: tQ || eY ? 1 : 0,
    immediate: e4
  }), () => {
    t8.stop()
  }), [tQ, t4, e4, eY, t8]);
  let t3 = eC === V.rq.ENDED,
    t5 = l.useCallback(async e => {
      if (ep) {
        var t;
        let e = (0, C.fn)(null == (t = e7.current) ? true : t.parentNode, e7.current);
        null != e && (e.removeEventListener(C.NO, tG), (0, C.Pr)(e), ev(false), tT(false))
      }
      if (tS(e, S.jZ.LEARN_MORE), ee.id === q.V6) return void window.open(h.Z.getArticleURL(H.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      if (null != ea) {
        let e = N.r.build(ee.config).ctaLink;
        await (0, Z.PW)(e) && ea()
      }(0, _.nc)(ee, {
        content: e,
        ctaContent: S.jZ.OPEN_GAME_LINK,
        sourceQuestContent: es
      })
    }, [tS, ee, ea, ep, e7, tG, ev, tT, es]),
    ne = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
    nt = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
    nn = e3 || e0.maxTimestampSec >= (null != (B = null == (m = e7.current) ? true : m.currentTime) ? B : 0) + 1,
    nr = l.useMemo(() => null === (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.TRANSCRIPT), [ee]);
  return (0, r.jsx)(f.P3F, {
    className: G.videoCont,
    "data-fullscreen": ep,
    tabIndex: false,
    onMouseEnter: () => {
      ey(true), tF(false), tq.current = performance.now(), null != tU.current && clearTimeout(tU.current)
    },
    onMouseLeave: () => {
      ey(false), tF(false)
    },
    onMouseMove: tY,
    onKeyDown: tY,
    children: (0, r.jsxs)("div", {
      className: i()(G.videoContInnerRelative, {
        [G.videoContInnerRelativePortrait]: "portrait" === ec,
        [G.videoContInnerRelativeLandscape]: "landscape" === ec
      }),
      children: [t3 && (() => {
        if (!(0, P.e)({
            location: q.dr.VIDEO_MODAL
          })) return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(X, {
            quest: ee,
            shouldShow: t3,
            sourceQuestContent: es
          }), (0, r.jsx)("div", {
            className: G.videoContOverlay
          }), (0, r.jsx)(J, {
            title: tc,
            subtitle: tu,
            icon: f.d4D,
            className: G.endScreenPanelRight,
            onClick: () => t5(j.jn.VIDEO_MODAL)
          })]
        });
        {
          var e, t, n, l, o, i, a;
          let s = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
          return (0, r.jsx)(A.Z, {
            quest: ee,
            title: null != (n = null == s ? true : s.messages.videoEndCtaTitle) ? n : Q.intl.string(Q.t.Ka526o),
            subtitle: null != (o = null != (l = null == (e = ee.config.ctaConfig) ? true : e.subtitle) ? l : null == s ? true : s.messages.videoEndCtaSubtitle) ? o : Q.intl.string(Q.t.tKMcAv),
            ctaBtnLabel: null != (a = null != (i = null == (t = ee.config.ctaConfig) ? true : t.buttonLabel) ? i : null == s ? true : s.messages.videoEndCtaButtonLabel) ? a : Q.intl.string(Q.t.iiTtpJ),
            onCTAClick: () => t5(j.jn.VIDEO_MODAL_END_CARD),
            sourceQuestContent: es
          })
        }
      })(), (0, r.jsxs)(g.Z, {
        ref: e => {
          e7.current = e, eh.current = e
        },
        autoPlay: el,
        playsInline: true,
        mediaLayoutType: ep ? Y.hV.STATIC : Y.hV.RESPONSIVE,
        className: i()({
          [G.hidden]: t3,
          [G.videoInner]: true
        }),
        controls: false,
        poster: null == ne ? true : ne.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e7.current && (e7.current.currentTime >= eF && (ts.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e7.current.currentTime)), eU(e7.current.currentTime + 6 + 2 * Math.random()), tZ(e7.current.currentTime)), e7.current.currentTime >= eq && (eH(e7.current.currentTime + 1), (0, y.qm)(ee.id, eT.taskType, e7.current.currentTime), er(e7.current.currentTime)), e1(ee.id, e7.current.currentTime, e7.current.duration), eR(e7.current.currentTime / e7.current.duration * 100))
        },
        onEnded: e => {
          null != e7.current && (tZ(e7.current.duration + 1), ts.info("[QV] | handleEnded: sending progress update: ".concat(e7.current.duration + 1)), e1(ee.id, e7.current.duration, e7.current.duration)), tV(V.rq.ENDED), eL(false)
        },
        onLoadedData: e => {
          ts.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ek)), ek && (tE(null != eJ.current ? performance.now() - eJ.current : null), ew(false), null != tp.current && (tp.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e7.current && (ts.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tv)), tn(true), tm !== I.n1.VIDEO_HLS && tK(td), e2 ? e7.current.volume = 0 : e7.current.volume = e8)
        },
        onLoadStart: () => {
          eJ.current = performance.now(), tg(eZ), ts.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eJ.current))
        },
        onPlaying: () => {
          if (!eX.current) return;
          let e = performance.now() - ei;
          ts.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tx(e), eX.current = false
        },
        onWaiting: e => {
          e$.current = performance.now(), ts.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(e$.current)), t_(), eL(true)
        },
        onProgress: e => {
          if (null == e7.current) return;
          ts.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e7.current.buffered.length));
          let t = [];
          for (let e = 0; e < e7.current.buffered.length; e++) {
            let n = e7.current.buffered.start(e),
              r = e7.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e7.current.duration,
              size: (r - n) / e7.current.duration
            })
          }
          eV(t)
        },
        onCanPlay: t2,
        onCanPlayThrough: t2,
        onSeeked: () => {
          ts.info("[QV] | handleSeeked"), tl(true)
        },
        onAbort: () => t1(V.CY.ABORT),
        onError: () => t1(V.CY.ERROR),
        onEmptied: () => t1(V.CY.EMPTIED),
        onStalled: () => t1(V.CY.STALLED),
        onClick: () => {
          ts.info("[QV] | handleVideoClick"), tX()
        },
        crossOrigin: "anonymous",
        children: [null != nt && (0, r.jsx)("track", {
          ref: e6,
          src: nt.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tf && tm !== I.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => t1(V.CY.SOURCE_ERROR),
          src: tf.url,
          type: tf.mimetype
        })]
      }), (ek || eA) && eC === V.rq.PLAYING && (0, r.jsx)(f.$jN, {
        type: f.$jN.Type.WANDERING_CUBES,
        className: G.loadingSpinner
      }), eC === V.rq.PAUSED && e5 === j.yE.LOST_FOCUS && (0, r.jsx)(K, {}), eu && eC !== V.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.P3F, {
          onClick: () => ed(false),
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: G.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: i()(G.transcriptCont, {
            [G.transcriptContPortrait]: "portrait" === ec
          }),
          style: {
            marginBottom: (0, s.to)([t8, t6], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(M.K, {
            quest: ee,
            onClose: () => {
              ed(false), tS(j.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: G.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([t8.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(G.playPausePopCont, {
          [G.play]: eC === V.rq.PLAYING,
          [G.pause]: eC === V.rq.PAUSED
        }),
        children: eC === V.rq.PLAYING ? (0, r.jsx)(f.o1U, {
          className: G.playPausePopIcon
        }) : (0, r.jsx)(f.fpf, {
          className: G.playPausePopIcon
        })
      }, eC), em && null != to && (0, r.jsx)(s.animated.div, {
        className: G.captionContainer,
        ref: t7,
        style: {
          translateY: (0, s.to)([t8.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(f.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: G.captionText,
          children: to.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: G.videoFooterCont,
        style: {
          paddingLeft: (0, s.to)([t8.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          paddingRight: (0, s.to)([t8.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          height: (0, s.to)([t8.to({
            range: [0, 1],
            output: [0, 50]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(L.Z, {
          percent: null != ez ? ez : eD,
          animate: true !== e9.current && !eI,
          interactionEnabled: e3 && eG,
          backgroundColor: tQ ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tQ ? eM : true,
          duration: null != ($ = null == (E = e7.current) ? true : E.duration) ? $ : 1,
          maxSeekableTime: tQ && eG ? ta : true,
          onClick: e => {
            tK(e), eC === V.rq.ENDED && tV(V.rq.PLAYING)
          },
          onScrubBack: () => {
            tW()
          },
          onScrubForward: () => {
            tz()
          }
        }), (0, r.jsx)(s.animated.div, {
          className: G.videoControlsCont,
          style: {
            paddingTop: (0, s.to)([t8.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([t8.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([t8.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => ex(true),
          onBlur: () => ex(false),
          children: (0, r.jsx)(w.Z, {
            videoRef: e7,
            videoTask: et,
            playerState: eC,
            animSpring: t8,
            visible: tQ,
            seekForwardEnabled: nn,
            hideCaptionBtn: null == nt,
            hideTranscriptBtn: nr,
            handlePlaybackBtnClick: tX,
            handleTranscriptBtnClick: () => {
              ed(!eu), tS(j.jn.VIDEO_MODAL, eu ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ef(!em), tS(j.jn.VIDEO_MODAL, em ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ep;
              ts.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, C.fn)(null == (e = e7.current) ? true : e.parentNode, e7.current);
              t && null != n ? ((0, C.Dj)(n), n.addEventListener(C.NO, tG), tT(true)) : t || null == n || (n.removeEventListener(C.NO, tG), tT(false), (0, C.Pr)(n)), ev(t)
            },
            handleSeekBackBtnClick: tW,
            handleSeekForwardBtnClick: tz,
            handleControlBarPendingInteraction: eQ,
            onVolumeChange: tP
          })
        })]
      })]
    })
  })
}