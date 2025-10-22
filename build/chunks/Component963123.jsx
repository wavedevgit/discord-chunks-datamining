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
  } = (0, F.Yy)(), [eC, eS] = l.useState(true === el ? V.rq.PLAYING : V.rq.PAUSED), [e_, ey] = l.useState(false), [ej, ex] = l.useState(false), eT = (0, _.il)(ee), [eD, eP] = l.useState(eT.percentComplete), [eR, eI] = l.useState(false), [eN, ek] = l.useState(true), [ew, eA] = l.useState(false), [eL, eM] = l.useState([]), [eV, eZ] = l.useState(O.Z.getEffectiveConnectionSpeed()), [eB, eF] = l.useState(0), [eU, eq] = l.useState(0), [eH, eY] = l.useState(false), [eQ, eG] = l.useState(false), eW = l.useRef(true), ez = l.useRef(null), eK = l.useRef(null), eX = (0, x.km)(e => {
    var t;
    return null != (t = e.videoProgress[ee.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), eJ = (0, x.km)(e => e.setVideoProgress), e$ = (0, x.km)(e => e.muted), e0 = (0, x.km)(e => e.volume), e1 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion), e2 = (0, l.useRef)(null), e8 = (0, l.useRef)(null), e4 = l.useRef(true), e6 = (null == (t = ee.userStatus) ? true : t.completedAt) != null, [e7, e9] = l.useState(null), [e3, e5] = l.useState(false), [te, tt] = l.useState(false), [tn, tr] = l.useState(null), tl = e6 ? null != (k = null == (n = e2.current) ? true : n.duration) ? k : 0 : Math.max(eX.maxTimestampSec, eT.progressSeconds), to = l.useMemo(() => (0, D.T)({
    quest: ee,
    location: q.dr.VIDEO_MODAL
  }), [ee]), {
    title: ti,
    subtitle: ta
  } = function(e) {
    var t, n, r;
    let l = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
    return {
      title: (0, _.B2)(e.config),
      subtitle: null != (r = null != (n = null == (t = e.config.ctaConfig) ? true : t.subtitle) ? n : null == l ? true : l.messages.videoEndCtaSubtitle) ? r : Q.intl.string(Q.t.mxaHfx)
    }
  }(ee), ts = e6 ? eX.timestampSec >= eX.duration ? 0 : eX.timestampSec : Math.max(eX.timestampSec, eT.progressSeconds);
  (0, p.Ng)(() => {
    e4.current && (e4.current = false, eZ(O.Z.getEffectiveConnectionSpeed()), e6 && eX.timestampSec >= eX.duration && eJ(ee.id, 0, eX.duration))
  });
  let {
    videoVariant: tc,
    videoAsset: tu,
    hlsRef: td
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
  }(ee, e2, eV, ts), tm = (0, I.CC)(tc), {
    trackQuestVideoLoadingStarted: tf,
    trackQuestVideoLoadingEnded: tp,
    trackQuestVideoProgressed: tv,
    trackQuestVideoResumed: tg,
    trackQuestVideoPaused: tE,
    trackQuestVideoFocusChange: tb,
    trackQuestContentClick: tO,
    trackQuestVideoBufferingStarted: th,
    trackQuestVideoBufferingEnded: tC,
    trackWatchTimeAnalytics: tS,
    trackQuestVideoTimeToFirstFrame: t_,
    trackQuestVideoFullscreenChanged: ty,
    trackQuestVideoError: tj,
    trackQuestVideoVolumeChanged: tx
  } = (0, U.Z)({
    quest: ee,
    videoRef: e2,
    hlsRef: td,
    videoSessionId: en,
    videoAssetId: tm,
    sourceQuestContent: es,
    logger: to
  }), tT = l.useRef(null), tD = ee.id, tP = ee.config.application.id, tR = ee.config.application.name, tI = null == tu ? true : tu.url, tN = null == (o = ee.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : o.messages.videoTitle;
  l.useEffect(() => {
    var e;
    if (null == tI || null == e2.current || tc === I.n1.VIDEO_HLS && null == td.current || !(0, b.Zx)({
        location: q.dr.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let t = {
      debug: false,
      videoElement: e2.current,
      hlsInstance: tc === I.n1.VIDEO_HLS && null != (e = td.current) ? e : true,
      feature: "quests",
      contentMetadata: {
        contentId: tI,
        videoStreamType: tc === I.n1.VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == e2.current.duration || isNaN(e2.current.duration) ? 0 : e2.current.duration,
        title: tN,
        questId: tD,
        gameId: tP,
        gameName: tR
      }
    };
    return tT.current = new b.ci(t), tT.current.initialize(), () => {
      null != tT.current && (tT.current.endSession(), tT.current.destroy(), tT.current = null)
    }
  }, [tc, td, tP, tR, tD, tI, tN]);
  let tk = l.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e2.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tw
    } = (0, R.Z)({
      getCurrentVideoTime: tk,
      isPlaying: eC === V.rq.PLAYING,
      isMetadataLoaded: e3,
      isInitialSeekComplete: te,
      onAnalytics: tS,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tA = l.useCallback(e => {
      if (to.info("[QV] | updatePlayerState | playerState: ".concat(e)), eS(e), null != e2.current) switch (e) {
        case V.rq.PLAYING:
          e2.current.paused && tg(e7), e9(null), e2.current.play();
          break;
        case V.rq.PAUSED:
          e2.current.paused || tw(), e2.current.pause(), eW.current = false;
          break;
        case V.rq.ENDED:
          tw(), ed(false)
      }
    }, [tg, e7, tw, ed, to]);
  l.useEffect(() => {
    tE(e7)
  }, [e7, tE]), l.useEffect(() => {
    eE && tb(eg, eC)
  }, [eg, eE, eC, tb]);
  let tL = l.useCallback(e => {
    var t;
    e6 || (null == (t = ee.userStatus) ? true : t.enrolledAt) == null || (to.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, _.FI)(ee, e)), tv()
  }, [e6, ee, to, tv]);
  l.useEffect(() => {
    eo !== f.Dvm.HIDDEN && eo !== f.Dvm.EXITING && eo !== f.Dvm.EXITED && (null == eo || !eO || eb || e6) && (!eE || eg || e6) || null == e2.current || eC !== V.rq.PLAYING || (to.info("[QV] | Pausing video | playerState: ".concat(eC, ", parentTransitionState: ").concat(eo, ", visible: ").concat(eb, ", focused: ").concat(eg, ", isQuestCompleted: ").concat(e6)), tA(V.rq.PAUSED), e6 || e9(j.yE.LOST_FOCUS))
  }, [eo, eg, eE, eb, eO, eC, e6, tA, tL, to]);
  let [tM, tV] = l.useState(false), tZ = l.useRef(null), tB = l.useRef(performance.now()), tF = l.useCallback(() => {
    null != tZ.current && clearTimeout(tZ.current), eC === V.rq.PLAYING && (tZ.current = setTimeout(() => {
      eC === V.rq.PLAYING && tV(true)
    }, Math.max(0, 3e3 - (performance.now() - tB.current))))
  }, [eC]), tU = () => {
    tV(false), tB.current = performance.now(), tF()
  };
  l.useEffect(() => {
    if (eC !== V.rq.PLAYING) {
      tV(false), null != tZ.current && clearTimeout(tZ.current);
      return
    }
    return tF(), () => {
      null != tZ.current && clearTimeout(tZ.current)
    }
  }, [eC, tF]);
  let tq = !tM && (ej || e_ || eC === V.rq.ENDED),
    tH = l.useCallback(() => {
      var e;
      to.info("[QV] | handleFullScreenExit");
      let t = (0, C.fn)(null == (e = e2.current) ? true : e.parentNode, e2.current);
      null == t || (0, C.rB)(t) || (t.removeEventListener(C.NO, tH), ev(false), ty(false))
    }, [ev, to, ty]),
    tY = () => {
      if (null == e2.current) return;
      let e = Math.max(e2.current.currentTime - 10, 0);
      to.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tG(e), eC === V.rq.ENDED && tA(V.rq.PAUSED), tO(j.jn.VIDEO_MODAL, S.jZ.SEEK_BACKWARD)
    },
    tQ = () => {
      if (null == e2.current || !t5) return;
      let e = Math.min(e2.current.currentTime + 10, tl);
      to.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tG(e), eC !== V.rq.ENDED && e >= e2.current.duration && tA(V.rq.ENDED), tO(j.jn.VIDEO_MODAL, S.jZ.SEEK_FORWARD)
    };
  l.useEffect(() => {
    let e = e2.current;
    return () => {
      let t = (0, C.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(C.NO, tH)
    }
  }, [tH]);
  let tG = l.useCallback(e => {
      null != e2.current && (to.info("[QV] | seekTimeline | timeSec: ".concat(e)), tw(), eI(true), tt(false), e2.current.currentTime = e, eJ(ee.id, e, e2.current.duration))
    }, [e2, eJ, ee.id, tw, to]),
    tW = () => {
      if (null != e2.current) switch (to.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eC)), eC) {
        case V.rq.ENDED:
          tG(0), tA(V.rq.PLAYING);
          break;
        case V.rq.PLAYING:
          tA(V.rq.PAUSED), e9(j.yE.PAUSE_BUTTON);
          break;
        default:
          tA(V.rq.PLAYING)
      }
    },
    tz = e => {
      tr(e)
    },
    tK = e => {
      tr(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tX = l.useCallback(() => {
      if (null == e2.current || (to.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e2.current.textTracks.length)), 0 === e2.current.textTracks.length)) return;
      let e = e2.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, Z.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tz(n), n.onexit = () => tK(n))
        }
    }, [e2, to]);
  l.useEffect(() => {
    if (null == e8.current) return;
    let e = e8.current;
    return e.addEventListener("load", tX), () => {
      null != e && e.removeEventListener("load", tX)
    }
  }, [e8, tX]);
  let tJ = l.useCallback(e => {
      var t;
      to.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e2.current) ? true : t.currentTime, ", videoAssetId: ").concat(tm, ", connectionSpeed: ").concat(eV)), tj(e)
    }, [eV, tj, e2, tm, to]),
    t$ = e => {
      to.info("[QV] | handleCanPlay: playerState: ".concat(eC)), null != e2.current && eC === V.rq.PLAYING && (to.info("[QV] | handleCanPlay: did NOT early return"), eN && (to.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eN)), ek(false)), ew && (to.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ew)), tC(null != eK.current ? performance.now() - eK.current : null), eA(false)), to.info("[QV] | handleCanPlay: updating player state to playing"), tA(V.rq.PLAYING))
    };
  l.useEffect(() => {
    if (!eR) return;
    let e = setTimeout(() => {
      eI(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eR]);
  let [{
    controlBarAnimSpring: t0
  }, t1] = (0, f.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: z,
    onStart: () => {
      eG(false)
    },
    onRest: e => {
      1 === e.value && eG(true)
    }
  })), t2 = (0, l.useRef)(null), [{
    captionHeightSpring: t8
  }, t4] = (0, f.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: z
  }));
  l.useEffect(() => {
    var e, t;
    return t4({
      captionHeightSpring: em && null != tn && null != (t = null == (e = t2.current) ? true : e.clientHeight) ? t : 0,
      immediate: e1
    }), () => {
      t8.stop()
    }
  }, [em, t4, e1, tn, t8]), l.useEffect(() => (t1({
    controlBarAnimSpring: tq || eH ? 1 : 0,
    immediate: e1
  }), () => {
    t0.stop()
  }), [tq, t1, e1, eH, t0]);
  let t6 = eC === V.rq.ENDED,
    t7 = l.useCallback(async e => {
      if (ep) {
        var t;
        let e = (0, C.fn)(null == (t = e2.current) ? true : t.parentNode, e2.current);
        null != e && (e.removeEventListener(C.NO, tH), (0, C.Pr)(e), ev(false), ty(false))
      }
      if (tO(e, S.jZ.LEARN_MORE), ee.id === q.V6) return void window.open(h.Z.getArticleURL(H.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      if (null != ea) {
        let e = N.r.build(ee.config).ctaLink;
        await (0, Z.PW)(e) && ea()
      }(0, _.nc)(ee, {
        content: e,
        ctaContent: S.jZ.OPEN_GAME_LINK,
        sourceQuestContent: es
      })
    }, [tO, ee, ea, ep, e2, tH, ev, ty, es]),
    t9 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [ee]),
    t3 = l.useMemo(() => (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [ee]),
    t5 = e6 || eX.maxTimestampSec >= (null != (B = null == (m = e2.current) ? true : m.currentTime) ? B : 0) + 1,
    ne = l.useMemo(() => null === (0, I.z0)(ee, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.TRANSCRIPT), [ee]);
  return (0, r.jsx)(f.P3F, {
    className: G.videoCont,
    "data-fullscreen": ep,
    tabIndex: false,
    onMouseEnter: () => {
      ey(true), tV(false), tB.current = performance.now(), null != tZ.current && clearTimeout(tZ.current)
    },
    onMouseLeave: () => {
      ey(false), tV(false)
    },
    onMouseMove: tU,
    onKeyDown: tU,
    children: (0, r.jsxs)("div", {
      className: i()(G.videoContInnerRelative, {
        [G.videoContInnerRelativePortrait]: "portrait" === ec,
        [G.videoContInnerRelativeLandscape]: "landscape" === ec
      }),
      children: [t6 && (() => {
        if (!(0, P.e)({
            location: q.dr.VIDEO_MODAL
          })) return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(X, {
            quest: ee,
            shouldShow: t6,
            sourceQuestContent: es
          }), (0, r.jsx)("div", {
            className: G.videoContOverlay
          }), (0, r.jsx)(J, {
            title: ti,
            subtitle: ta,
            icon: f.d4D,
            className: G.endScreenPanelRight,
            onClick: () => t7(j.jn.VIDEO_MODAL)
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
            onCTAClick: () => t7(j.jn.VIDEO_MODAL_END_CARD),
            sourceQuestContent: es
          })
        }
      })(), (0, r.jsxs)(g.Z, {
        ref: e => {
          e2.current = e, eh.current = e
        },
        autoPlay: el,
        playsInline: true,
        mediaLayoutType: ep ? Y.hV.STATIC : Y.hV.RESPONSIVE,
        className: i()({
          [G.hidden]: t6,
          [G.videoInner]: true
        }),
        controls: false,
        poster: null == t9 ? true : t9.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e2.current && (e2.current.currentTime >= eB && (to.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e2.current.currentTime)), eF(e2.current.currentTime + 6 + 2 * Math.random()), tL(e2.current.currentTime)), e2.current.currentTime >= eU && (eq(e2.current.currentTime + 1), (0, y.qm)(ee.id, eT.taskType, e2.current.currentTime), er(e2.current.currentTime)), eJ(ee.id, e2.current.currentTime, e2.current.duration), eP(e2.current.currentTime / e2.current.duration * 100))
        },
        onEnded: e => {
          null != e2.current && (tL(e2.current.duration + 1), to.info("[QV] | handleEnded: sending progress update: ".concat(e2.current.duration + 1)), eJ(ee.id, e2.current.duration, e2.current.duration)), tA(V.rq.ENDED), eA(false)
        },
        onLoadedData: e => {
          to.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eN)), eN && (tp(null != ez.current ? performance.now() - ez.current : null), ek(false), null != td.current && (td.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e2.current && (to.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tm)), e5(true), tc !== I.n1.VIDEO_HLS && tG(ts), e$ ? e2.current.volume = 0 : e2.current.volume = e0)
        },
        onLoadStart: () => {
          ez.current = performance.now(), tf(eV), to.info("[QV] | handleLoadStart | loadingStartTime: ".concat(ez.current))
        },
        onPlaying: () => {
          if (!eW.current) return;
          let e = performance.now() - ei;
          to.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), t_(e), eW.current = false
        },
        onWaiting: e => {
          eK.current = performance.now(), to.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eK.current)), th(), eA(true)
        },
        onProgress: e => {
          if (null == e2.current) return;
          to.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e2.current.buffered.length));
          let t = [];
          for (let e = 0; e < e2.current.buffered.length; e++) {
            let n = e2.current.buffered.start(e),
              r = e2.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e2.current.duration,
              size: (r - n) / e2.current.duration
            })
          }
          eM(t)
        },
        onCanPlay: t$,
        onCanPlayThrough: t$,
        onSeeked: () => {
          to.info("[QV] | handleSeeked"), tt(true)
        },
        onAbort: () => tJ(V.CY.ABORT),
        onError: () => tJ(V.CY.ERROR),
        onEmptied: () => tJ(V.CY.EMPTIED),
        onStalled: () => tJ(V.CY.STALLED),
        onClick: () => {
          to.info("[QV] | handleVideoClick"), tW()
        },
        crossOrigin: "anonymous",
        children: [null != t3 && (0, r.jsx)("track", {
          ref: e8,
          src: t3.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tu && tc !== I.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => tJ(V.CY.SOURCE_ERROR),
          src: tu.url,
          type: tu.mimetype
        })]
      }), (eN || ew) && eC === V.rq.PLAYING && (0, r.jsx)(f.$jN, {
        type: f.$jN.Type.WANDERING_CUBES,
        className: G.loadingSpinner
      }), eC === V.rq.PAUSED && e7 === j.yE.LOST_FOCUS && (0, r.jsx)(K, {}), eu && eC !== V.rq.ENDED && (0, r.jsxs)(r.Fragment, {
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
            marginBottom: (0, s.to)([t0, t8], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(M.K, {
            quest: ee,
            onClose: () => {
              ed(false), tO(j.jn.VIDEO_MODAL, S.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: G.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([t0.to({
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
      }, eC), em && null != tn && (0, r.jsx)(s.animated.div, {
        className: G.captionContainer,
        ref: t2,
        style: {
          translateY: (0, s.to)([t0.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(f.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: G.captionText,
          children: tn.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: G.videoFooterCont,
        style: {
          paddingLeft: (0, s.to)([t0.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          paddingRight: (0, s.to)([t0.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          height: (0, s.to)([t0.to({
            range: [0, 1],
            output: [0, 50]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(L.Z, {
          percent: eD,
          animate: true !== e4.current && !eR,
          interactionEnabled: e6 && eQ,
          backgroundColor: tq ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tq ? eL : true,
          duration: null != ($ = null == (E = e2.current) ? true : E.duration) ? $ : 1,
          maxSeekableTime: tq && eQ ? tl : true,
          onClick: e => {
            tG(e), eC === V.rq.ENDED && tA(V.rq.PLAYING)
          },
          onScrubBack: () => {
            tY()
          },
          onScrubForward: () => {
            tQ()
          }
        }), (0, r.jsx)(s.animated.div, {
          className: G.videoControlsCont,
          style: {
            paddingTop: (0, s.to)([t0.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([t0.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([t0.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => ex(true),
          onBlur: () => ex(false),
          children: (0, r.jsx)(w.Z, {
            videoRef: e2,
            videoTask: et,
            playerState: eC,
            animSpring: t0,
            visible: tq,
            seekForwardEnabled: t5,
            hideCaptionBtn: null == t3,
            hideTranscriptBtn: ne,
            handlePlaybackBtnClick: tW,
            handleTranscriptBtnClick: () => {
              ed(!eu), tO(j.jn.VIDEO_MODAL, eu ? S.jZ.TRANSCRIPT_DISABLE : S.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ef(!em), tO(j.jn.VIDEO_MODAL, em ? S.jZ.CLOSED_CAPTIONING_DISABLE : S.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ep;
              to.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, C.fn)(null == (e = e2.current) ? true : e.parentNode, e2.current);
              t && null != n ? ((0, C.Dj)(n), n.addEventListener(C.NO, tH), ty(true)) : t || null == n || (n.removeEventListener(C.NO, tH), ty(false), (0, C.Pr)(n)), ev(t)
            },
            handleSeekBackBtnClick: tY,
            handleSeekForwardBtnClick: tQ,
            handleControlBarPendingInteraction: eY,
            onVolumeChange: tx
          })
        })]
      })]
    })
  })
}