/** Chunk was on 32249 **/
/** chunk id: 963123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk713447 = require("./713447.js"),
  Chunk137317 = require("./137317.js"),
  Chunk574583 = require("./574583.js"),
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
    sourceQuestContent: o
  } = e, a = l.useMemo(() => (0, N.z0)(t, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [t]);
  return null == a ? null : (0, r.jsx)(w.A, {
    questOrQuests: t,
    questContent: x.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: o,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: a.url,
      alt: "Video thumbnail",
      className: i()(W.stillFrameImageCard, {
        [W.stillFrameImageCardHidden]: !n
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
    className: i()(W.endScreenPanel, W.accentOnHover, s),
    onMouseEnter: d,
    onMouseLeave: m,
    onFocus: d,
    onBlur: m,
    onClick: a,
    children: (0, r.jsxs)("div", {
      className: W.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: W.endScreenPanelTextCont,
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-md/semibold",
          className: W.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(f.Heading, {
          variant: "heading-sm/normal",
          className: W.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(F.Z, {
        color: "#747783"
      }), (0, r.jsx)(o, {
        size: "md",
        color: c ? "#FFFFFF" : "#B5BAC1",
        className: W.endScreenIcon
      })]
    })
  })
}

function ee(e) {
  var t, n, o, p, O, w, F, ee;
  let {
    quest: et,
    videoTask: en,
    videoSessionId: er,
    onOptimisticProgressUpdate: el,
    autoplay: eo,
    parentTransitionState: ei,
    performanceClockStartTime: ea,
    onClose: es,
    sourceQuestContent: ec,
    orientation: eu
  } = e, ed = (0, T.km)(e => e.transcriptEnabled), em = (0, T.km)(e => e.setTranscriptEnabled), ep = (0, T.km)(e => e.captionEnabled), ef = (0, T.km)(e => e.setCaptionEnabled), ev = (0, T.km)(e => e.fullScreenEnabled), eE = (0, T.km)(e => e.setFullScreenEnabled), {
    focused: eg,
    focusedChanged: eO
  } = (0, U.xU)(), {
    visible: eb,
    visibleChanged: eh,
    targetRef: eS
  } = (0, U.Yy)(), [eC, e_] = l.useState(true === eo ? Z.rq.PLAYING : Z.rq.PAUSED), [ey, ej] = l.useState(false), [ex, eT] = l.useState(false), eD = (0, y.il)(et), [eR, eP] = l.useState(eD.percentComplete), [eI, eN] = l.useState(false), [ek, ew] = l.useState(true), [eA, eL] = l.useState(false), [eM, eV] = l.useState([]), [eZ, eB] = l.useState(h.Z.getEffectiveConnectionSpeed()), [eF, eU] = l.useState(0), [eq, eH] = l.useState(0), [eY, eQ] = l.useState(false), [eG, eW] = l.useState(false), ez = l.useRef(true), eK = l.useRef(null), eX = l.useRef(null), e$ = (0, T.km)(e => {
    var t;
    return null != (t = e.videoProgress[et.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), eJ = (0, T.km)(e => e.setVideoProgress), e0 = (0, T.km)(e => e.muted), e1 = (0, T.km)(e => e.volume), e2 = (0, m.e7)([E.Z], () => E.Z.useReducedMotion), e8 = (0, l.useRef)(null), e4 = (0, l.useRef)(null), e7 = l.useRef(true), e6 = (null == (t = et.userStatus) ? true : t.completedAt) != null, [e3, e9] = l.useState(null), [e5, te] = l.useState(false), [tt, tn] = l.useState(false), [tr, tl] = l.useState(null), to = e6 ? null != (w = null == (n = e8.current) ? true : n.duration) ? w : 0 : Math.max(e$.maxTimestampSec, eD.progressSeconds), ti = l.useMemo(() => (0, R.T)({
    quest: et,
    location: H.dr.VIDEO_MODAL
  }), [et]), {
    title: ta,
    subtitle: ts
  } = function(e) {
    var t, n, r, l;
    let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
      i = null != (t = null == o ? true : o.messages.videoEndCtaTitle) ? t : G.intl.string(G.t.iiTtpK),
      a = null != (r = null != (n = null == o ? true : o.messages.videoEndCtaButtonLabel) ? n : null == o ? true : o.messages.videoEndCtaSubtitle) ? r : G.intl.string(G.t.mxaHf3),
      s = (0, y.B2)(e.config),
      c = null != (l = null == o ? true : o.messages.videoEndCtaSubtitle) ? l : G.intl.string(G.t.mxaHf3),
      m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
    return {
      title: m ? s : i,
      subtitle: m ? c : a
    }
  }(et), tc = e6 ? e$.timestampSec >= e$.duration ? 0 : e$.timestampSec : Math.max(e$.timestampSec, eD.progressSeconds);
  (0, v.Ng)(() => {
    e7.current && (e7.current = false, eB(h.Z.getEffectiveConnectionSpeed()), e6 && e$.timestampSec >= e$.duration && eJ(et.id, 0, e$.duration))
  });
  let {
    videoVariant: tu,
    videoAsset: td,
    hlsRef: tm
  } = function(e, t, n, r) {
    var o;
    let i = l.useRef(false),
      s = l.useRef(null),
      c = (0, D.z)(e, H.dr.VIDEO_MODAL),
      d = null == (o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : o.assets,
      m = l.useMemo(() => null != d ? c && a.ZP.isSupported() && null != d.videoHls ? N.n1.VIDEO_HLS : z.has(n) || null == d.videoLowRes ? N.n1.VIDEO : N.n1.VIDEO_LOW_RES : null, [d, n, c]),
      p = l.useMemo(() => null != m ? (0, N.z0)(e, u.X.WATCH_VIDEO, m, N.O.VIDEO) : null, [e, m]),
      f = () => {
        null != s.current && 8e5 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 8e5)
      };
    return l.useEffect(() => {
      if (m !== N.n1.VIDEO_HLS || null == p || null == t.current || i.current) return;
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
  }(et, e8, eZ, tc), tp = (0, N.CC)(tu), {
    trackQuestVideoLoadingStarted: tf,
    trackQuestVideoLoadingEnded: tv,
    trackQuestVideoProgressed: tE,
    trackQuestVideoResumed: tg,
    trackQuestVideoPaused: tO,
    trackQuestVideoFocusChange: tb,
    trackQuestContentClick: th,
    trackQuestVideoBufferingStarted: tS,
    trackQuestVideoBufferingEnded: tC,
    trackWatchTimeAnalytics: t_,
    trackQuestVideoTimeToFirstFrame: ty,
    trackQuestVideoFullscreenChanged: tj,
    trackQuestVideoError: tx,
    trackQuestVideoVolumeChanged: tT
  } = (0, q.Z)({
    quest: et,
    videoRef: e8,
    hlsRef: tm,
    videoSessionId: er,
    videoAssetId: tp,
    sourceQuestContent: ec,
    logger: ti
  }), tD = l.useRef(null), tR = et.id, tP = et.config.application.id, tI = et.config.application.name, tN = null == td ? true : td.url, tk = null == (o = et.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : o.messages.videoTitle;
  l.useEffect(() => {
    var e;
    if (null == tN || null == e8.current || tu === N.n1.VIDEO_HLS && null == tm.current || !(0, b.Zx)({
        location: H.dr.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let t = {
      debug: false,
      videoElement: e8.current,
      hlsInstance: tu === N.n1.VIDEO_HLS && null != (e = tm.current) ? e : true,
      feature: "quests",
      contentMetadata: {
        contentId: tN,
        videoStreamType: tu === N.n1.VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == e8.current.duration || isNaN(e8.current.duration) ? 0 : e8.current.duration,
        title: tk,
        questId: tR,
        gameId: tP,
        gameName: tI
      }
    };
    return tD.current = new b.ci(t), tD.current.initialize(), () => {
      null != tD.current && (tD.current.endSession(), tD.current.destroy(), tD.current = null)
    }
  }, [tu, tm, tP, tI, tR, tN, tk]);
  let tw = l.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e8.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tA
    } = (0, I.Z)({
      getCurrentVideoTime: tw,
      isPlaying: eC === Z.rq.PLAYING,
      isMetadataLoaded: e5,
      isInitialSeekComplete: tt,
      onAnalytics: t_,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tL = l.useCallback(e => {
      if (ti.info("[QV] | updatePlayerState | playerState: ".concat(e)), e_(e), null != e8.current) switch (e) {
        case Z.rq.PLAYING:
          e8.current.paused && tg(e3), e9(null), e8.current.play();
          break;
        case Z.rq.PAUSED:
          e8.current.paused || tA(), e8.current.pause(), ez.current = false;
          break;
        case Z.rq.ENDED:
          tA(), em(false)
      }
    }, [tg, e3, tA, em, ti]);
  l.useEffect(() => {
    tO(e3)
  }, [e3, tO]), l.useEffect(() => {
    eO && tb(eg, eC)
  }, [eg, eO, eC, tb]);
  let tM = l.useCallback(e => {
    var t;
    e6 || (null == (t = et.userStatus) ? true : t.enrolledAt) == null || (ti.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, y.FI)(et, e)), tE()
  }, [e6, et, ti, tE]);
  l.useEffect(() => {
    ei !== f.Dvm.HIDDEN && ei !== f.Dvm.EXITING && ei !== f.Dvm.EXITED && (null == ei || !eh || eb || e6) && (!eO || eg || e6) || null == e8.current || eC !== Z.rq.PLAYING || (ti.info("[QV] | Pausing video | playerState: ".concat(eC, ", parentTransitionState: ").concat(ei, ", visible: ").concat(eb, ", focused: ").concat(eg, ", isQuestCompleted: ").concat(e6)), tL(Z.rq.PAUSED), e6 || e9(x.yE.LOST_FOCUS))
  }, [ei, eg, eO, eb, eh, eC, e6, tL, tM, ti]);
  let [tV, tZ] = l.useState(false), tB = l.useRef(null), tF = l.useRef(performance.now()), tU = l.useCallback(() => {
    null != tB.current && clearTimeout(tB.current), eC === Z.rq.PLAYING && (tB.current = setTimeout(() => {
      eC === Z.rq.PLAYING && tZ(true)
    }, Math.max(0, 3e3 - (performance.now() - tF.current))))
  }, [eC]), tq = () => {
    tZ(false), tF.current = performance.now(), tU()
  };
  l.useEffect(() => {
    if (eC !== Z.rq.PLAYING) {
      tZ(false), null != tB.current && clearTimeout(tB.current);
      return
    }
    return tU(), () => {
      null != tB.current && clearTimeout(tB.current)
    }
  }, [eC, tU]);
  let tH = !tV && (ex || ey || eC === Z.rq.ENDED),
    tY = l.useCallback(() => {
      var e;
      ti.info("[QV] | handleFullScreenExit");
      let t = (0, C.fn)(null == (e = e8.current) ? true : e.parentNode, e8.current);
      null == t || (0, C.rB)(t) || (t.removeEventListener(C.NO, tY), eE(false), tj(false))
    }, [eE, ti, tj]),
    tQ = () => {
      if (null == e8.current) return;
      let e = Math.max(e8.current.currentTime - 10, 0);
      ti.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tW(e), eC === Z.rq.ENDED && tL(Z.rq.PAUSED), th(x.jn.VIDEO_MODAL, _.jZ.SEEK_BACKWARD)
    },
    tG = () => {
      if (null == e8.current || !ne) return;
      let e = Math.min(e8.current.currentTime + 10, to);
      ti.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tW(e), eC !== Z.rq.ENDED && e >= e8.current.duration && tL(Z.rq.ENDED), th(x.jn.VIDEO_MODAL, _.jZ.SEEK_FORWARD)
    };
  l.useEffect(() => {
    let e = e8.current;
    return () => {
      let t = (0, C.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(C.NO, tY)
    }
  }, [tY]);
  let tW = l.useCallback(e => {
      null != e8.current && (ti.info("[QV] | seekTimeline | timeSec: ".concat(e)), tA(), eN(true), tn(false), e8.current.currentTime = e, eJ(et.id, e, e8.current.duration))
    }, [e8, eJ, et.id, tA, ti]),
    tz = () => {
      if (null != e8.current) switch (ti.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eC)), eC) {
        case Z.rq.ENDED:
          tW(0), tL(Z.rq.PLAYING);
          break;
        case Z.rq.PLAYING:
          tL(Z.rq.PAUSED), e9(x.yE.PAUSE_BUTTON);
          break;
        default:
          tL(Z.rq.PLAYING)
      }
    },
    tK = e => {
      tl(e)
    },
    tX = e => {
      tl(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    t$ = l.useCallback(() => {
      if (null == e8.current || (ti.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e8.current.textTracks.length)), 0 === e8.current.textTracks.length)) return;
      let e = e8.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, B.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tK(n), n.onexit = () => tX(n))
        }
    }, [e8, ti]);
  l.useEffect(() => {
    if (null == e4.current) return;
    let e = e4.current;
    return e.addEventListener("load", t$), () => {
      null != e && e.removeEventListener("load", t$)
    }
  }, [e4, t$]);
  let tJ = l.useCallback(e => {
      var t;
      ti.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e8.current) ? true : t.currentTime, ", videoAssetId: ").concat(tp, ", connectionSpeed: ").concat(eZ)), tx(e)
    }, [eZ, tx, e8, tp, ti]),
    t0 = e => {
      ti.info("[QV] | handleCanPlay: playerState: ".concat(eC)), null != e8.current && eC === Z.rq.PLAYING && (ti.info("[QV] | handleCanPlay: did NOT early return"), ek && (ti.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(ek)), ew(false)), eA && (ti.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eA)), tC(null != eX.current ? performance.now() - eX.current : null), eL(false)), ti.info("[QV] | handleCanPlay: updating player state to playing"), tL(Z.rq.PLAYING))
    };
  l.useEffect(() => {
    if (!eI) return;
    let e = setTimeout(() => {
      eN(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eI]);
  let [{
    controlBarAnimSpring: t1
  }, t2] = (0, f.q_F)(() => ({
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
  })), t8 = (0, l.useRef)(null), [{
    captionHeightSpring: t4
  }, t7] = (0, f.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: K
  }));
  l.useEffect(() => {
    var e, t;
    return t7({
      captionHeightSpring: ep && null != tr && null != (t = null == (e = t8.current) ? true : e.clientHeight) ? t : 0,
      immediate: e2
    }), () => {
      t4.stop()
    }
  }, [ep, t7, e2, tr, t4]), l.useEffect(() => (t2({
    controlBarAnimSpring: tH || eY ? 1 : 0,
    immediate: e2
  }), () => {
    t1.stop()
  }), [tH, t2, e2, eY, t1]);
  let t6 = eC === Z.rq.ENDED,
    t3 = l.useCallback(async e => {
      if (ev) {
        var t;
        let e = (0, C.fn)(null == (t = e8.current) ? true : t.parentNode, e8.current);
        null != e && (e.removeEventListener(C.NO, tY), (0, C.Pr)(e), eE(false), tj(false))
      }
      if (th(e, _.jZ.LEARN_MORE), et.id === H.V6) return void window.open(S.Z.getArticleURL(Y.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      if (null != es) {
        let e = k.r.build(et.config).application.link;
        await (0, B.qP)(e) && es()
      }(0, y.nc)(et, {
        content: e,
        ctaContent: _.jZ.OPEN_GAME_LINK,
        sourceQuestContent: ec
      })
    }, [th, et, es, ev, e8, tY, eE, tj, ec]),
    t9 = l.useMemo(() => (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [et]),
    t5 = l.useMemo(() => (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.CAPTION), [et]),
    ne = e6 || e$.maxTimestampSec >= (null != (F = null == (p = e8.current) ? true : p.currentTime) ? F : 0) + 1,
    nt = l.useMemo(() => null === (0, N.z0)(et, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.TRANSCRIPT), [et]);
  return (0, r.jsx)(f.P3F, {
    className: W.videoCont,
    "data-fullscreen": ev,
    tabIndex: false,
    onMouseEnter: () => {
      ej(true), tZ(false), tF.current = performance.now(), null != tB.current && clearTimeout(tB.current)
    },
    onMouseLeave: () => {
      ej(false), tZ(false)
    },
    onMouseMove: tq,
    onKeyDown: tq,
    children: (0, r.jsxs)("div", {
      className: i()(W.videoContInnerRelative, {
        [W.videoContInnerRelativePortrait]: "portrait" === eu,
        [W.videoContInnerRelativeLandscape]: "landscape" === eu
      }),
      children: [t6 && (() => {
        if (!(0, P.e)({
            location: H.dr.VIDEO_MODAL
          })) return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)($, {
            quest: et,
            shouldShow: t6,
            sourceQuestContent: ec
          }), (0, r.jsx)("div", {
            className: W.videoContOverlay
          }), (0, r.jsx)(J, {
            title: ta,
            subtitle: ts,
            icon: f.d4D,
            className: W.endScreenPanelRight,
            onClick: () => t3(x.jn.VIDEO_MODAL)
          })]
        });
        {
          var e, t, n;
          let l = et.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
          return (0, r.jsx)(L.Z, {
            quest: et,
            title: null != (e = null == l ? true : l.messages.videoEndCtaTitle) ? e : G.intl.string(G.t.Ka526u),
            subtitle: null != (t = null == l ? true : l.messages.videoEndCtaSubtitle) ? t : G.intl.string(G.t.tKMcAg),
            ctaBtnLabel: null != (n = null == l ? true : l.messages.videoEndCtaButtonLabel) ? n : G.intl.string(G.t.iiTtpK),
            onCTAClick: () => t3(x.jn.VIDEO_MODAL_END_CARD),
            sourceQuestContent: ec
          })
        }
      })(), (0, r.jsxs)(g.Z, {
        ref: e => {
          e8.current = e, eS.current = e
        },
        autoPlay: eo,
        playsInline: true,
        mediaLayoutType: ev ? Q.hV.STATIC : Q.hV.RESPONSIVE,
        className: i()({
          [W.hidden]: t6,
          [W.videoInner]: true
        }),
        controls: false,
        poster: null == t9 ? true : t9.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e8.current && (e8.current.currentTime >= eF && (ti.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e8.current.currentTime)), eU(e8.current.currentTime + 6 + 2 * Math.random()), tM(e8.current.currentTime)), e8.current.currentTime >= eq && (eH(e8.current.currentTime + 1), (0, j.qm)(et.id, eD.taskType, e8.current.currentTime), el(e8.current.currentTime)), eJ(et.id, e8.current.currentTime, e8.current.duration), eP(e8.current.currentTime / e8.current.duration * 100))
        },
        onEnded: e => {
          null != e8.current && (tM(e8.current.duration + 1), ti.info("[QV] | handleEnded: sending progress update: ".concat(e8.current.duration + 1)), eJ(et.id, e8.current.duration, e8.current.duration)), tL(Z.rq.ENDED), eL(false)
        },
        onLoadedData: e => {
          ti.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(ek)), ek && (tv(null != eK.current ? performance.now() - eK.current : null), ew(false), null != tm.current && (tm.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e8.current && (ti.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tp)), te(true), tu !== N.n1.VIDEO_HLS && tW(tc), e0 ? e8.current.volume = 0 : e8.current.volume = e1)
        },
        onLoadStart: () => {
          eK.current = performance.now(), tf(eZ), ti.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eK.current))
        },
        onPlaying: () => {
          if (!ez.current) return;
          let e = performance.now() - ea;
          ti.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), ty(e), ez.current = false
        },
        onWaiting: e => {
          eX.current = performance.now(), ti.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eX.current)), tS(), eL(true)
        },
        onProgress: e => {
          if (null == e8.current) return;
          ti.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e8.current.buffered.length));
          let t = [];
          for (let e = 0; e < e8.current.buffered.length; e++) {
            let n = e8.current.buffered.start(e),
              r = e8.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e8.current.duration,
              size: (r - n) / e8.current.duration
            })
          }
          eV(t)
        },
        onCanPlay: t0,
        onCanPlayThrough: t0,
        onSeeked: () => {
          ti.info("[QV] | handleSeeked"), tn(true)
        },
        onAbort: () => tJ(Z.CY.ABORT),
        onError: () => tJ(Z.CY.ERROR),
        onEmptied: () => tJ(Z.CY.EMPTIED),
        onStalled: () => tJ(Z.CY.STALLED),
        onClick: () => {
          ti.info("[QV] | handleVideoClick"), tz()
        },
        crossOrigin: "anonymous",
        children: [null != t5 && (0, r.jsx)("track", {
          ref: e4,
          src: t5.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != td && tu !== N.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => tJ(Z.CY.SOURCE_ERROR),
          src: td.url,
          type: td.mimetype
        })]
      }), (ek || eA) && eC === Z.rq.PLAYING && (0, r.jsx)(f.$jN, {
        type: f.$jN.Type.WANDERING_CUBES,
        className: W.loadingSpinner
      }), eC === Z.rq.PAUSED && e3 === x.yE.LOST_FOCUS && (0, r.jsx)(X, {}), ed && eC !== Z.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.P3F, {
          onClick: () => em(false),
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: W.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: i()(W.transcriptCont, {
            [W.transcriptContPortrait]: "portrait" === eu
          }),
          style: {
            marginBottom: (0, s.to)([t1, t4], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(V.K, {
            quest: et,
            onClose: () => {
              em(false), th(x.jn.VIDEO_MODAL, _.jZ.TRANSCRIPT_DISABLE)
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
        className: i()(W.playPausePopCont, {
          [W.play]: eC === Z.rq.PLAYING,
          [W.pause]: eC === Z.rq.PAUSED
        }),
        children: eC === Z.rq.PLAYING ? (0, r.jsx)(f.o1U, {
          className: W.playPausePopIcon
        }) : (0, r.jsx)(f.fpf, {
          className: W.playPausePopIcon
        })
      }, eC), ep && null != tr && (0, r.jsx)(s.animated.div, {
        className: W.captionContainer,
        ref: t8,
        style: {
          translateY: (0, s.to)([t1.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(f.Text, {
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
          percent: eR,
          animate: true !== e7.current && !eI,
          interactionEnabled: e6 && eG,
          backgroundColor: tH ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tH ? eM : true,
          duration: null != (ee = null == (O = e8.current) ? true : O.duration) ? ee : 1,
          maxSeekableTime: tH && eG ? to : true,
          onClick: e => {
            tW(e), eC === Z.rq.ENDED && tL(Z.rq.PLAYING)
          },
          onScrubBack: () => {
            tQ()
          },
          onScrubForward: () => {
            tG()
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
          children: (0, r.jsx)(A.Z, {
            videoRef: e8,
            videoTask: en,
            playerState: eC,
            animSpring: t1,
            visible: tH,
            seekForwardEnabled: ne,
            hideCaptionBtn: null == t5,
            hideTranscriptBtn: nt,
            handlePlaybackBtnClick: tz,
            handleTranscriptBtnClick: () => {
              em(!ed), th(x.jn.VIDEO_MODAL, ed ? _.jZ.TRANSCRIPT_DISABLE : _.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ef(!ep), th(x.jn.VIDEO_MODAL, ep ? _.jZ.CLOSED_CAPTIONING_DISABLE : _.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ev;
              ti.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, C.fn)(null == (e = e8.current) ? true : e.parentNode, e8.current);
              t && null != n ? ((0, C.Dj)(n), n.addEventListener(C.NO, tY), tj(true)) : t || null == n || (n.removeEventListener(C.NO, tY), tj(false), (0, C.Pr)(n)), eE(t)
            },
            handleSeekBackBtnClick: tQ,
            handleSeekForwardBtnClick: tG,
            handleControlBarPendingInteraction: eQ,
            onVolumeChange: tT
          })
        })]
      })]
    })
  })
}