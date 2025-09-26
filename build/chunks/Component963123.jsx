/** Chunk was on 32249 **/
/** chunk id: 963123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk713447 = require("./713447.js"),
  Chunk488290 = require("./488290.js"),
  Chunk524825 = require("./524825.js"),
  Chunk754700 = require("./754700.js"),
  Chunk670081 = require("./670081.js"),
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
let z = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]),
  K = {
    tension: 250,
    friction: 5,
    clamp: true
  };

function X() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.getState().theme);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk430799.pauseText,
    style: {
      background: (0, Chunk780384.wj)(module) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
    },
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: Chunk388032.intl.string(Chunk388032.t.U7Xrb2)
    })
  })
}

function $(e) {
  let {
    quest: t,
    shouldShow: n,
    sourceQuestContent: a
  } = e, i = o.useMemo(() => (0, k.z0)(t, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.THUMBNAIL), [t]);
  return null == i ? null : (0, r.jsx)(A.A, {
    questOrQuests: t,
    questContent: x.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: a,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: i.url,
      alt: "Video thumbnail",
      className: l()(W.stillFrameImageCard, {
        [W.stillFrameImageCardHidden]: !n
      })
    })
  })
}

function J(e) {
  let {
    title: t,
    subtitle: n,
    icon: a,
    onClick: i,
    className: s
  } = e, [c, u] = o.useState(false), d = () => {
    u(true)
  }, f = () => {
    u(false)
  };
  return (0, r.jsx)(m.P3F, {
    className: l()(W.endScreenPanel, W.accentOnHover, s),
    onMouseEnter: d,
    onMouseLeave: f,
    onFocus: d,
    onBlur: f,
    onClick: i,
    children: (0, r.jsxs)("div", {
      className: W.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: W.endScreenPanelTextCont,
        children: [(0, r.jsx)(m.X6q, {
          variant: "heading-md/semibold",
          className: W.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(m.X6q, {
          variant: "heading-sm/normal",
          className: W.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(Z.Z, {
        color: "#747783"
      }), (0, r.jsx)(a, {
        size: "md",
        color: c ? "#FFFFFF" : "#B5BAC1",
        className: W.endScreenIcon
      })]
    })
  })
}

function ee(e) {
  var t, n, a, p, C, A, Z, ee;
  let {
    quest: et,
    videoTask: en,
    videoSessionId: er,
    onOptimisticProgressUpdate: eo,
    autoplay: ea,
    parentTransitionState: el,
    performanceClockStartTime: ei,
    onClose: es,
    sourceQuestContent: ec,
    orientation: eu
  } = e, ed = (0, T.km)(e => e.transcriptEnabled), ef = (0, T.km)(e => e.setTranscriptEnabled), ep = (0, T.km)(e => e.captionEnabled), em = (0, T.km)(e => e.setCaptionEnabled), ev = (0, T.km)(e => e.fullScreenEnabled), eg = (0, T.km)(e => e.setFullScreenEnabled), {
    focused: e_,
    focusedChanged: eC
  } = (0, q.xU)(), {
    visible: eE,
    visibleChanged: eS,
    targetRef: eb
  } = (0, q.Yy)(), [eO, eh] = o.useState(true === ea ? V.rq.PLAYING : V.rq.PAUSED), [ey, ej] = o.useState(false), [ex, eT] = o.useState(false), eD = (0, y.il)(et), [eP, eI] = o.useState(eD.percentComplete), [eR, ek] = o.useState(false), [eN, eA] = o.useState(true), [ew, eL] = o.useState(false), [eM, eB] = o.useState([]), [eV, eF] = o.useState(S.Z.getEffectiveConnectionSpeed()), [eZ, eq] = o.useState(0), [eU, eH] = o.useState(0), [eG, eQ] = o.useState(false), [eY, eW] = o.useState(false), ez = o.useRef(true), eK = o.useRef(null), eX = o.useRef(null), e$ = (0, T.km)(e => {
    var t;
    return null != (t = e.videoProgress[et.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), eJ = (0, T.km)(e => e.setVideoProgress), e0 = (0, T.km)(e => e.muted), e1 = (0, T.km)(e => e.volume), e2 = (0, f.e7)([g.Z], () => g.Z.useReducedMotion), e8 = (0, o.useRef)(null), e4 = (0, o.useRef)(null), e7 = o.useRef(true), e6 = (null == (t = et.userStatus) ? true : t.completedAt) != null, [e3, e9] = o.useState(null), [e5, te] = o.useState(false), [tt, tn] = o.useState(false), [tr, to] = o.useState(null), ta = e6 ? null != (A = null == (n = e8.current) ? true : n.duration) ? A : 0 : Math.max(e$.maxTimestampSec, eD.progressSeconds), tl = o.useMemo(() => (0, P.T)({
    quest: et,
    location: H.dr.VIDEO_MODAL
  }), [et]), {
    title: ti,
    subtitle: ts
  } = function(e) {
    var t, n, r, o;
    let a = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
      l = null != (t = null == a ? true : a.messages.videoEndCtaTitle) ? t : Y.intl.string(Y.t.iiTtpK),
      i = null != (r = null != (n = null == a ? true : a.messages.videoEndCtaButtonLabel) ? n : null == a ? true : a.messages.videoEndCtaSubtitle) ? r : Y.intl.string(Y.t.mxaHf3),
      s = (0, y.B2)(e.config),
      c = null != (o = null == a ? true : a.messages.videoEndCtaSubtitle) ? o : Y.intl.string(Y.t.mxaHf3),
      f = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
    return {
      title: f ? s : l,
      subtitle: f ? c : i
    }
  }(et), tc = e6 ? e$.timestampSec >= e$.duration ? 0 : e$.timestampSec : Math.max(e$.timestampSec, eD.progressSeconds);
  (0, v.Ng)(() => {
    e7.current && (e7.current = false, eF(S.Z.getEffectiveConnectionSpeed()), e6 && e$.timestampSec >= e$.duration && eJ(et.id, 0, e$.duration))
  });
  let {
    videoVariant: tu,
    videoAsset: td,
    hlsRef: tf
  } = function(e, t, n, r) {
    var a;
    let l = o.useRef(false),
      s = o.useRef(null),
      c = (0, D.z)(e, H.dr.VIDEO_MODAL),
      d = null == (a = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : a.assets,
      f = o.useMemo(() => null != d ? c && i.ZP.isSupported() && null != d.videoHls ? k.n1.VIDEO_HLS : z.has(n) || null == d.videoLowRes ? k.n1.VIDEO : k.n1.VIDEO_LOW_RES : null, [d, n, c]),
      p = o.useMemo(() => null != f ? (0, k.z0)(e, u.X.WATCH_VIDEO, f, k.O.VIDEO) : null, [e, f]),
      m = () => {
        null != s.current && 8e5 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 8e5)
      };
    return o.useEffect(() => {
      if (f !== k.n1.VIDEO_HLS || null == p || null == t.current || l.current) return;
      s.current = new i.ZP({
        backBufferLength: 20,
        maxBufferLength: 30,
        startPosition: r,
        startFragPrefetch: true,
        startLevel: false
      }), s.current.on(i.ZP.Events.FRAG_LOADING, m), s.current.loadSource(p.url), s.current.attachMedia(t.current), l.current = true;
      let e = s.current;
      return () => {
        null != e && e.off(i.ZP.Events.FRAG_LOADING, m)
      }
    }, [p, f, t, r]), {
      videoVariant: f,
      videoAsset: p,
      hlsRef: s
    }
  }(et, e8, eV, tc), tp = (0, k.CC)(tu), {
    trackQuestVideoLoadingStarted: tm,
    trackQuestVideoLoadingEnded: tv,
    trackQuestVideoProgressed: tg,
    trackQuestVideoResumed: t_,
    trackQuestVideoPaused: tC,
    trackQuestVideoFocusChange: tE,
    trackQuestContentClick: tS,
    trackQuestVideoBufferingStarted: tb,
    trackQuestVideoBufferingEnded: tO,
    trackWatchTimeAnalytics: th,
    trackQuestVideoTimeToFirstFrame: ty,
    trackQuestVideoFullscreenChanged: tj,
    trackQuestVideoError: tx,
    trackQuestVideoVolumeChanged: tT
  } = (0, U.Z)({
    quest: et,
    videoRef: e8,
    hlsRef: tf,
    videoSessionId: er,
    videoAssetId: tp,
    sourceQuestContent: ec,
    logger: tl
  }), tD = o.useRef(null), tP = et.id, tI = et.config.application.id, tR = et.config.application.name, tk = null == td ? true : td.url, tN = null == (a = et.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : a.messages.videoTitle;
  o.useEffect(() => {
    var e;
    if (null == tk || null == e8.current || tu === k.n1.VIDEO_HLS && null == tf.current || !(0, E.Zx)({
        location: H.dr.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let t = {
      debug: false,
      videoElement: e8.current,
      hlsInstance: tu === k.n1.VIDEO_HLS && null != (e = tf.current) ? e : true,
      feature: "quests",
      contentMetadata: {
        contentId: tk,
        videoStreamType: tu === k.n1.VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == e8.current.duration || isNaN(e8.current.duration) ? 0 : e8.current.duration,
        title: tN,
        questId: tP,
        gameId: tI,
        gameName: tR
      }
    };
    return tD.current = new E.ci(t), tD.current.initialize(), () => {
      null != tD.current && (tD.current.endSession(), tD.current.destroy(), tD.current = null)
    }
  }, [tu, tf, tI, tR, tP, tk, tN]);
  let tA = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e8.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tw
    } = (0, R.Z)({
      getCurrentVideoTime: tA,
      isPlaying: eO === V.rq.PLAYING,
      isMetadataLoaded: e5,
      isInitialSeekComplete: tt,
      onAnalytics: th,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tL = o.useCallback(e => {
      if (tl.info("[QV] | updatePlayerState | playerState: ".concat(e)), eh(e), null != e8.current) switch (e) {
        case V.rq.PLAYING:
          e8.current.paused && t_(e3), e9(null), e8.current.play();
          break;
        case V.rq.PAUSED:
          e8.current.paused || tw(), e8.current.pause(), ez.current = false;
          break;
        case V.rq.ENDED:
          tw(), ef(false)
      }
    }, [t_, e3, tw, ef, tl]);
  o.useEffect(() => {
    tC(e3)
  }, [e3, tC]), o.useEffect(() => {
    eC && tE(e_, eO)
  }, [e_, eC, eO, tE]);
  let tM = o.useCallback(e => {
    var t;
    e6 || (null == (t = et.userStatus) ? true : t.enrolledAt) == null || (tl.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, y.FI)(et, e)), tg()
  }, [e6, et, tl, tg]);
  o.useEffect(() => {
    el !== m.Dvm.HIDDEN && el !== m.Dvm.EXITING && el !== m.Dvm.EXITED && (null == el || !eS || eE || e6) && (!eC || e_ || e6) || null == e8.current || eO !== V.rq.PLAYING || (tl.info("[QV] | Pausing video | playerState: ".concat(eO, ", parentTransitionState: ").concat(el, ", visible: ").concat(eE, ", focused: ").concat(e_, ", isQuestCompleted: ").concat(e6)), tL(V.rq.PAUSED), e6 || e9(x.yE.LOST_FOCUS))
  }, [el, e_, eC, eE, eS, eO, e6, tL, tM, tl]);
  let [tB, tV] = o.useState(false), tF = o.useRef(null), tZ = o.useRef(performance.now()), tq = o.useCallback(() => {
    null != tF.current && clearTimeout(tF.current), eO === V.rq.PLAYING && (tF.current = setTimeout(() => {
      eO === V.rq.PLAYING && tV(true)
    }, Math.max(0, 3e3 - (performance.now() - tZ.current))))
  }, [eO]), tU = () => {
    tV(false), tZ.current = performance.now(), tq()
  };
  o.useEffect(() => {
    if (eO !== V.rq.PLAYING) {
      tV(false), null != tF.current && clearTimeout(tF.current);
      return
    }
    return tq(), () => {
      null != tF.current && clearTimeout(tF.current)
    }
  }, [eO, tq]);
  let tH = !tB && (ex || ey || eO === V.rq.ENDED),
    tG = o.useCallback(() => {
      var e;
      tl.info("[QV] | handleFullScreenExit");
      let t = (0, O.fn)(null == (e = e8.current) ? true : e.parentNode, e8.current);
      null == t || (0, O.rB)(t) || (t.removeEventListener(O.NO, tG), eg(false), tj(false))
    }, [eg, tl, tj]),
    tQ = () => {
      if (null == e8.current) return;
      let e = Math.max(e8.current.currentTime - 10, 0);
      tl.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tW(e), eO === V.rq.ENDED && tL(V.rq.PAUSED), tS(x.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD)
    },
    tY = () => {
      if (null == e8.current || !ne) return;
      let e = Math.min(e8.current.currentTime + 10, ta);
      tl.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tW(e), eO !== V.rq.ENDED && e >= e8.current.duration && tL(V.rq.ENDED), tS(x.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e8.current;
    return () => {
      let t = (0, O.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(O.NO, tG)
    }
  }, [tG]);
  let tW = o.useCallback(e => {
      null != e8.current && (tl.info("[QV] | seekTimeline | timeSec: ".concat(e)), tw(), ek(true), tn(false), e8.current.currentTime = e, eJ(et.id, e, e8.current.duration))
    }, [e8, eJ, et.id, tw, tl]),
    tz = () => {
      if (null != e8.current) switch (tl.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eO)), eO) {
        case V.rq.ENDED:
          tW(0), tL(V.rq.PLAYING);
          break;
        case V.rq.PLAYING:
          tL(V.rq.PAUSED), e9(x.yE.PAUSE_BUTTON);
          break;
        default:
          tL(V.rq.PLAYING)
      }
    },
    tK = e => {
      to(e)
    },
    tX = e => {
      to(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    t$ = o.useCallback(() => {
      if (null == e8.current || (tl.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e8.current.textTracks.length)), 0 === e8.current.textTracks.length)) return;
      let e = e8.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, F.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tK(n), n.onexit = () => tX(n))
        }
    }, [e8, tl]);
  o.useEffect(() => {
    if (null == e4.current) return;
    let e = e4.current;
    return e.addEventListener("load", t$), () => {
      null != e && e.removeEventListener("load", t$)
    }
  }, [e4, t$]);
  let tJ = o.useCallback(e => {
      var t;
      tl.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e8.current) ? true : t.currentTime, ", videoAssetId: ").concat(tp, ", connectionSpeed: ").concat(eV)), tx(e)
    }, [eV, tx, e8, tp, tl]),
    t0 = e => {
      tl.info("[QV] | handleCanPlay: playerState: ".concat(eO)), null != e8.current && eO === V.rq.PLAYING && (tl.info("[QV] | handleCanPlay: did NOT early return"), eN && (tl.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eN)), eA(false)), ew && (tl.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ew)), tO(null != eX.current ? performance.now() - eX.current : null), eL(false)), tl.info("[QV] | handleCanPlay: updating player state to playing"), tL(V.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eR) return;
    let e = setTimeout(() => {
      ek(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eR]);
  let [{
    controlBarAnimSpring: t1
  }, t2] = (0, m.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: K,
    onStart: () => {
      eW(false)
    },
    onRest: e => {
      1 === e.value && eW(true)
    }
  })), t8 = (0, o.useRef)(null), [{
    captionHeightSpring: t4
  }, t7] = (0, m.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: K
  }));
  o.useEffect(() => {
    var e, t;
    return t7({
      captionHeightSpring: ep && null != tr && null != (t = null == (e = t8.current) ? true : e.clientHeight) ? t : 0,
      immediate: e2
    }), () => {
      t4.stop()
    }
  }, [ep, t7, e2, tr, t4]), o.useEffect(() => (t2({
    controlBarAnimSpring: tH || eG ? 1 : 0,
    immediate: e2
  }), () => {
    t1.stop()
  }), [tH, t2, e2, eG, t1]);
  let t6 = eO === V.rq.ENDED,
    t3 = o.useCallback(async e => {
      if (ev) {
        var t;
        let e = (0, O.fn)(null == (t = e8.current) ? true : t.parentNode, e8.current);
        null != e && (e.removeEventListener(O.NO, tG), (0, O.Pr)(e), eg(false), tj(false))
      }
      if (tS(e, h.jZ.LEARN_MORE), et.id === H.V6) return void window.open(b.Z.getArticleURL(G.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      if (null != es) {
        let e = N.r.build(et.config).application.link;
        await (0, F.qP)(e) && es()
      }(0, y.nc)(et, {
        content: e,
        ctaContent: h.jZ.OPEN_GAME_LINK,
        sourceQuestContent: ec
      })
    }, [tS, et, es, ev, e8, tG, eg, tj, ec]),
    t9 = o.useMemo(() => (0, k.z0)(et, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.THUMBNAIL), [et]),
    t5 = o.useMemo(() => (0, k.z0)(et, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.CAPTION), [et]),
    ne = e6 || e$.maxTimestampSec >= (null != (Z = null == (p = e8.current) ? true : p.currentTime) ? Z : 0) + 1,
    nt = o.useMemo(() => null === (0, k.z0)(et, u.X.WATCH_VIDEO, k.n1.VIDEO, k.O.TRANSCRIPT), [et]);
  return (0, r.jsx)(m.P3F, {
    className: W.videoCont,
    "data-fullscreen": ev,
    tabIndex: false,
    onMouseEnter: () => {
      ej(true), tV(false), tZ.current = performance.now(), null != tF.current && clearTimeout(tF.current)
    },
    onMouseLeave: () => {
      ej(false), tV(false)
    },
    onMouseMove: tU,
    onKeyDown: tU,
    children: (0, r.jsxs)("div", {
      className: l()(W.videoContInnerRelative, {
        [W.videoContInnerRelativePortrait]: "portrait" === eu,
        [W.videoContInnerRelativeLandscape]: "landscape" === eu
      }),
      children: [t6 && (() => {
        if (!(0, I.e)({
            location: H.dr.VIDEO_MODAL
          })) return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)($, {
            quest: et,
            shouldShow: t6,
            sourceQuestContent: ec
          }), (0, r.jsx)("div", {
            className: W.videoContOverlay
          }), (0, r.jsx)(J, {
            title: ti,
            subtitle: ts,
            icon: m.d4D,
            className: W.endScreenPanelRight,
            onClick: () => t3(x.jn.VIDEO_MODAL)
          })]
        });
        {
          var e, t, n;
          let o = et.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
          return (0, r.jsx)(L.Z, {
            quest: et,
            title: null != (e = null == o ? true : o.messages.videoEndCtaTitle) ? e : Y.intl.string(Y.t.Ka526u),
            subtitle: null != (t = null == o ? true : o.messages.videoEndCtaSubtitle) ? t : Y.intl.string(Y.t.tKMcAg),
            ctaBtnLabel: null != (n = null == o ? true : o.messages.videoEndCtaButtonLabel) ? n : Y.intl.string(Y.t.iiTtpK),
            onCTAClick: () => t3(x.jn.VIDEO_MODAL_END_CARD),
            sourceQuestContent: ec
          })
        }
      })(), (0, r.jsxs)(_.Z, {
        ref: e => {
          e8.current = e, eb.current = e
        },
        autoPlay: ea,
        playsInline: true,
        mediaLayoutType: ev ? Q.hV.STATIC : Q.hV.RESPONSIVE,
        className: l()({
          [W.hidden]: t6,
          [W.videoInner]: true
        }),
        controls: false,
        poster: null == t9 ? true : t9.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e8.current && (e8.current.currentTime >= eZ && (tl.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e8.current.currentTime)), eq(e8.current.currentTime + 6 + 2 * Math.random()), tM(e8.current.currentTime)), e8.current.currentTime >= eU && (eH(e8.current.currentTime + 1), (0, j.qm)(et.id, eD.taskType, e8.current.currentTime), eo(e8.current.currentTime)), eJ(et.id, e8.current.currentTime, e8.current.duration), eI(e8.current.currentTime / e8.current.duration * 100))
        },
        onEnded: e => {
          null != e8.current && (tM(e8.current.duration + 1), tl.info("[QV] | handleEnded: sending progress update: ".concat(e8.current.duration + 1)), eJ(et.id, e8.current.duration, e8.current.duration)), tL(V.rq.ENDED), eL(false)
        },
        onLoadedData: e => {
          tl.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eN)), eN && (tv(null != eK.current ? performance.now() - eK.current : null), eA(false), null != tf.current && (tf.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e8.current && (tl.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tp)), te(true), tu !== k.n1.VIDEO_HLS && tW(tc), e0 ? e8.current.volume = 0 : e8.current.volume = e1)
        },
        onLoadStart: () => {
          eK.current = performance.now(), tm(eV), tl.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eK.current))
        },
        onPlaying: () => {
          if (!ez.current) return;
          let e = performance.now() - ei;
          tl.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), ty(e), ez.current = false
        },
        onWaiting: e => {
          eX.current = performance.now(), tl.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eX.current)), tb(), eL(true)
        },
        onProgress: e => {
          if (null == e8.current) return;
          tl.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e8.current.buffered.length));
          let t = [];
          for (let e = 0; e < e8.current.buffered.length; e++) {
            let n = e8.current.buffered.start(e),
              r = e8.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e8.current.duration,
              size: (r - n) / e8.current.duration
            })
          }
          eB(t)
        },
        onCanPlay: t0,
        onCanPlayThrough: t0,
        onSeeked: () => {
          tl.info("[QV] | handleSeeked"), tn(true)
        },
        onAbort: () => tJ(V.CY.ABORT),
        onError: () => tJ(V.CY.ERROR),
        onEmptied: () => tJ(V.CY.EMPTIED),
        onStalled: () => tJ(V.CY.STALLED),
        onClick: () => {
          tl.info("[QV] | handleVideoClick"), tz()
        },
        crossOrigin: "anonymous",
        children: [null != t5 && (0, r.jsx)("track", {
          ref: e4,
          src: t5.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != td && tu !== k.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => tJ(V.CY.SOURCE_ERROR),
          src: td.url,
          type: td.mimetype
        })]
      }), (eN || ew) && eO === V.rq.PLAYING && (0, r.jsx)(m.$jN, {
        type: m.$jN.Type.WANDERING_CUBES,
        className: W.loadingSpinner
      }), eO === V.rq.PAUSED && e3 === x.yE.LOST_FOCUS && (0, r.jsx)(X, {}), ed && eO !== V.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.P3F, {
          onClick: () => ef(false),
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: W.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: l()(W.transcriptCont, {
            [W.transcriptContPortrait]: "portrait" === eu
          }),
          style: {
            marginBottom: (0, s.to)([t1, t4], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(B.K, {
            quest: et,
            onClose: () => {
              ef(false), tS(x.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: W.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([t1.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: l()(W.playPausePopCont, {
          [W.play]: eO === V.rq.PLAYING,
          [W.pause]: eO === V.rq.PAUSED
        }),
        children: eO === V.rq.PLAYING ? (0, r.jsx)(m.o1U, {
          className: W.playPausePopIcon
        }) : (0, r.jsx)(m.fpf, {
          className: W.playPausePopIcon
        })
      }, eO), ep && null != tr && (0, r.jsx)(s.animated.div, {
        className: W.captionContainer,
        ref: t8,
        style: {
          translateY: (0, s.to)([t1.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(m.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: W.captionText,
          children: tr.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: W.videoFooterCont,
        style: {
          paddingLeft: (0, s.to)([t1.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          paddingRight: (0, s.to)([t1.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          height: (0, s.to)([t1.to({
            range: [0, 1],
            output: [0, 50]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(M.Z, {
          percent: eP,
          animate: true !== e7.current && !eR,
          interactionEnabled: e6 && eY,
          backgroundColor: tH ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tH ? eM : true,
          duration: null != (ee = null == (C = e8.current) ? true : C.duration) ? ee : 1,
          maxSeekableTime: tH && eY ? ta : true,
          onClick: e => {
            tW(e), eO === V.rq.ENDED && tL(V.rq.PLAYING)
          },
          onScrubBack: () => {
            tQ()
          },
          onScrubForward: () => {
            tY()
          }
        }), (0, r.jsx)(s.animated.div, {
          className: W.videoControlsCont,
          style: {
            paddingTop: (0, s.to)([t1.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([t1.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([t1.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => eT(true),
          onBlur: () => eT(false),
          children: (0, r.jsx)(w.Z, {
            videoRef: e8,
            videoTask: en,
            playerState: eO,
            animSpring: t1,
            visible: tH,
            seekForwardEnabled: ne,
            hideCaptionBtn: null == t5,
            hideTranscriptBtn: nt,
            handlePlaybackBtnClick: tz,
            handleTranscriptBtnClick: () => {
              ef(!ed), tS(x.jn.VIDEO_MODAL, ed ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              em(!ep), tS(x.jn.VIDEO_MODAL, ep ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ev;
              tl.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, O.fn)(null == (e = e8.current) ? true : e.parentNode, e8.current);
              t && null != n ? ((0, O.Dj)(n), n.addEventListener(O.NO, tG), tj(true)) : t || null == n || (n.removeEventListener(O.NO, tG), tj(false), (0, O.Pr)(n)), eg(t)
            },
            handleSeekBackBtnClick: tQ,
            handleSeekForwardBtnClick: tY,
            handleControlBarPendingInteraction: eQ,
            onVolumeChange: tT
          })
        })]
      })]
    })
  })
}