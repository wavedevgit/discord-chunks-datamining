/** Chunk was on 75909 **/
/** chunk id: 656357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => $
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk713447 = require("./713447.js"),
  Chunk790519 = require("./790519.js"),
  Chunk55160 = require("./55160.js"),
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
  Chunk550235 = require("./550235.js"),
  Chunk720293 = require("./720293.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk922826 = require("./922826.jsx"),
  Chunk215113 = require("./215113.jsx"),
  Chunk449788 = require("./449788.jsx"),
  Chunk508067 = require("./508067.jsx"),
  Chunk890193 = require("./890193.jsx"),
  Chunk325916 = require("./325916.js"),
  Chunk939389 = require("./939389.js"),
  Chunk874010 = require("./874010.jsx"),
  Chunk267322 = require("./267322.js"),
  Chunk934703 = require("./934703.js"),
  Chunk684245 = require("./684245.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk273339 = require("./273339.js");
let W = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]),
  z = {
    tension: 250,
    friction: 5,
    clamp: true
  };

function K() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.getState().theme);
  return (0, Chunk54381.jsx)("div", {
    className: Chunk273339.pauseText,
    style: {
      background: (0, Chunk780384.wj)(module) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
    },
    children: (0, Chunk54381.jsx)(Chunk481060.Text, {
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
      className: i()(Q.stillFrameImageCard, {
        [Q.stillFrameImageCardHidden]: !n
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
    className: i()(Q.endScreenPanel, Q.accentOnHover, s),
    onMouseEnter: d,
    onMouseLeave: m,
    onFocus: d,
    onBlur: m,
    onClick: a,
    children: (0, r.jsxs)("div", {
      className: Q.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: Q.endScreenPanelTextCont,
        children: [(0, r.jsx)(p.Heading, {
          variant: "heading-md/semibold",
          className: Q.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(p.Heading, {
          variant: "heading-sm/normal",
          className: Q.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(Z.Z, {
        color: "#747783"
      }), (0, r.jsx)(l, {
        size: "md",
        color: c ? "#FFFFFF" : "#B5BAC1",
        className: Q.endScreenIcon
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
  } = o.useContext(A.VideoQuestModalContext), ed = (0, x.km)(e => e.transcriptEnabled), em = (0, x.km)(e => e.setTranscriptEnabled), ep = (0, x.km)(e => e.captionEnabled), ef = (0, x.km)(e => e.setCaptionEnabled), ev = (0, x.km)(e => e.fullScreenEnabled), eE = (0, x.km)(e => e.setFullScreenEnabled), {
    enabled: eg,
    variant: eO
  } = j.EO.useConfig({
    location: U.dr.VIDEO_MODAL
  }), eh = eO === j.m_.OVERLAY_SHARE_ON_VIDEO, {
    focused: eb,
    focusedChanged: eS
  } = (0, F.xU)(), {
    visible: eC,
    visibleChanged: ey,
    targetRef: e_
  } = (0, F.Yy)(), [ex, ej] = o.useState(true === er ? L.rq.PLAYING : L.rq.PAUSED), [eD, eP] = o.useState(false), [eT, eR] = o.useState(false), eI = (0, y.il)(es), [eN, eA] = o.useState(eI.percentComplete), ew = o.useCallback(e => {
    e0(null), eA(e)
  }, []), [ek, eM] = o.useState(false), [eL, eV] = o.useState(true), [eZ, eF] = o.useState(false), [eB, eH] = o.useState([]), [eU, eq] = o.useState(h.Z.getEffectiveConnectionSpeed()), [eY, eG] = o.useState(0), [eQ, eW] = o.useState(0), [ez, eK] = o.useState(false), [eX, eJ] = o.useState(false), [e$, e0] = o.useState(null), e1 = o.useRef(true), e2 = o.useRef(null), e4 = o.useRef(null), e3 = (0, x.km)(e => {
    var t;
    return null != (t = e.videoProgress[es.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), e7 = (0, x.km)(e => e.setVideoProgress), e9 = (0, x.km)(e => e.muted), e8 = (0, x.km)(e => e.volume), e6 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion), e5 = (0, o.useRef)(null), te = (0, o.useRef)(null), tt = o.useRef(true), tn = (null == (t = es.userStatus) ? true : t.completedAt) != null, [tr, to] = o.useState(null), [tl, ti] = o.useState(false), [ta, ts] = o.useState(false), [tc, tu] = o.useState(null), td = tn ? null != (I = null == (n = e5.current) ? true : n.duration) ? I : 0 : Math.max(e3.maxTimestampSec, eI.progressSeconds), tm = o.useMemo(() => (0, P.T)({
    quest: es,
    location: U.dr.VIDEO_MODAL
  }), [es]), {
    title: tp,
    subtitle: tf
  } = function(e) {
    var t, n, r;
    let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
    return {
      title: (0, y.B2)(e.config),
      subtitle: null != (r = null != (n = null == (t = e.config.ctaConfig) ? true : t.subtitle) ? n : null == o ? true : o.messages.videoEndCtaSubtitle) ? r : G.intl.string(G.t.mxaHfx)
    }
  }(es), tv = tn ? e3.timestampSec >= e3.duration ? 0 : e3.timestampSec : Math.max(e3.timestampSec, eI.progressSeconds), [tE, tg] = o.useState(L._H.MD), tO = {
    [L._H.MD]: 50,
    [L._H.LG]: 58
  };
  (0, f.Ng)(() => {
    tt.current && (tt.current = false, eq(h.Z.getEffectiveConnectionSpeed()), tn && e3.timestampSec >= e3.duration && e7(es.id, 0, e3.duration))
  });
  let {
    videoVariant: th,
    videoAsset: tb,
    hlsRef: tS
  } = function(e, t, n, r) {
    var l;
    let i = o.useRef(false),
      s = o.useRef(null),
      c = (0, D.z)(e, U.dr.VIDEO_MODAL),
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
  }(es, e5, eU, tv), tC = (0, R.CC)(th), {
    trackQuestVideoLoadingStarted: ty,
    trackQuestVideoLoadingEnded: t_,
    trackQuestVideoProgressed: tx,
    trackQuestVideoResumed: tj,
    trackQuestVideoPaused: tD,
    trackQuestVideoFocusChange: tP,
    trackQuestContentClick: tT,
    trackQuestVideoBufferingStarted: tR,
    trackQuestVideoBufferingEnded: tI,
    trackWatchTimeAnalytics: tN,
    trackQuestVideoTimeToFirstFrame: tA,
    trackQuestVideoFullscreenChanged: tw,
    trackQuestVideoError: tk,
    trackQuestVideoVolumeChanged: tM
  } = (0, B.Z)({
    quest: es,
    videoRef: e5,
    hlsRef: tS,
    videoSessionId: ec,
    videoAssetId: tC,
    sourceQuestContent: ea,
    logger: tm
  }), tL = o.useRef(null), tV = es.id, tZ = es.config.application.id, tF = es.config.messages.gameTitle, tB = null == tb ? true : tb.url, tH = null == (l = es.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : l.messages.videoTitle;
  o.useEffect(() => {
    var e;
    if (null == tB || null == e5.current || th === R.n1.VIDEO_HLS && null == tS.current || !(0, O.Zx)({
        location: U.dr.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let t = {
      debug: false,
      videoElement: e5.current,
      hlsInstance: th === R.n1.VIDEO_HLS && null != (e = tS.current) ? e : true,
      feature: "quests",
      contentMetadata: {
        contentId: tB,
        videoStreamType: th === R.n1.VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == e5.current.duration || isNaN(e5.current.duration) ? 0 : e5.current.duration,
        title: tH,
        questId: tV,
        gameId: tZ,
        gameName: tF
      }
    };
    return tL.current = new O.ci(t), tL.current.initialize(), () => {
      null != tL.current && (tL.current.endSession(), tL.current.destroy(), tL.current = null)
    }
  }, [th, tS, tZ, tF, tV, tB, tH]);
  let tU = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = e5.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tq
    } = (0, T.Z)({
      getCurrentVideoTime: tU,
      isPlaying: ex === L.rq.PLAYING,
      isMetadataLoaded: tl,
      isInitialSeekComplete: ta,
      onAnalytics: tN,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tY = o.useCallback(e => {
      if (tm.info("[QV] | updatePlayerState | playerState: ".concat(e)), ej(e), null != e5.current) switch (e) {
        case L.rq.PLAYING:
          e5.current.paused && tj(tr), to(null), e5.current.play();
          break;
        case L.rq.PAUSED:
          e5.current.paused || tq(), e5.current.pause(), e1.current = false;
          break;
        case L.rq.ENDED:
          tq(), em(false)
      }
    }, [tj, tr, tq, em, tm]);
  o.useEffect(() => {
    tD(tr)
  }, [tr, tD]), o.useEffect(() => {
    eS && tP(eb, ex)
  }, [eb, eS, ex, tP]);
  let tG = o.useCallback(e => {
    var t;
    tn || (null == (t = es.userStatus) ? true : t.enrolledAt) == null || (tm.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, y.FI)(es, e)), tx()
  }, [tn, es, tm, tx]);
  o.useEffect(() => {
    eo !== p.Dvm.HIDDEN && eo !== p.Dvm.EXITING && eo !== p.Dvm.EXITED && (null == eo || !ey || eC || tn) && (!eS || eb || tn) || null == e5.current || ex !== L.rq.PLAYING || (tm.info("[QV] | Pausing video | playerState: ".concat(ex, ", parentTransitionState: ").concat(eo, ", visible: ").concat(eC, ", focused: ").concat(eb, ", isQuestCompleted: ").concat(tn)), tY(L.rq.PAUSED), tn || to(_.yE.LOST_FOCUS))
  }, [eo, eb, eS, eC, ey, ex, tn, tY, tG, tm]);
  let [tQ, tW] = o.useState(false), tz = o.useRef(null), tK = o.useRef(performance.now()), tX = o.useCallback(() => {
    null != tz.current && clearTimeout(tz.current), ex === L.rq.PLAYING && (tz.current = setTimeout(() => {
      ex === L.rq.PLAYING && tW(true)
    }, Math.max(0, 3e3 - (performance.now() - tK.current))))
  }, [ex]), tJ = () => {
    tW(false), tK.current = performance.now(), tX()
  };
  o.useEffect(() => {
    if (ex !== L.rq.PLAYING) {
      tW(false), null != tz.current && clearTimeout(tz.current);
      return
    }
    return tX(), () => {
      null != tz.current && clearTimeout(tz.current)
    }
  }, [ex, tX]);
  let t$ = !tQ && (eT || eD || ex === L.rq.ENDED),
    t0 = o.useCallback(() => {
      var e;
      tm.info("[QV] | handleFullScreenExit");
      let t = (0, b.fn)(null == (e = e5.current) ? true : e.parentNode, e5.current);
      null == t || (0, b.rB)(t) || (t.removeEventListener(b.NO, t0), eE(false), tw(false), tg(L._H.MD))
    }, [eE, tm, tw]),
    t1 = () => {
      if (null == e5.current) return;
      let e = Math.max(e5.current.currentTime - 10, 0);
      tm.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), t4(e), ex === L.rq.ENDED && tY(L.rq.PAUSED), tT(_.jn.VIDEO_MODAL, C.jZ.SEEK_BACKWARD)
    },
    t2 = () => {
      if (null == e5.current || !nu) return;
      let e = Math.min(e5.current.currentTime + 10, td);
      tm.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), t4(e), ex !== L.rq.ENDED && e >= e5.current.duration && tY(L.rq.ENDED), tT(_.jn.VIDEO_MODAL, C.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e5.current;
    return () => {
      let t = (0, b.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(b.NO, t0)
    }
  }, [t0]);
  let t4 = o.useCallback(e => {
      var t;
      null != e5.current && (tm.info("[QV] | seekTimeline | timeSec: ".concat(e)), e0(e / (null != (t = e5.current.duration) ? t : 1) * 100), tq(), eM(true), ts(false), e5.current.currentTime = e, e7(es.id, e, e5.current.duration))
    }, [e5, e7, es.id, tq, tm]),
    t3 = () => {
      if (null != e5.current) switch (tm.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(ex)), ex) {
        case L.rq.ENDED:
          t4(0), tY(L.rq.PLAYING);
          break;
        case L.rq.PLAYING:
          tY(L.rq.PAUSED), to(_.yE.PAUSE_BUTTON);
          break;
        default:
          tY(L.rq.PLAYING)
      }
    },
    t7 = e => {
      tu(e)
    },
    t9 = e => {
      tu(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    t8 = o.useCallback(() => {
      if (null == e5.current || (tm.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e5.current.textTracks.length)), 0 === e5.current.textTracks.length)) return;
      let e = e5.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, V.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => t7(n), n.onexit = () => t9(n))
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
      tm.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e5.current) ? true : t.currentTime, ", videoAssetId: ").concat(tC, ", connectionSpeed: ").concat(eU)), tk(e)
    }, [eU, tk, e5, tC, tm]),
    t5 = e => {
      tm.info("[QV] | handleCanPlay: playerState: ".concat(ex)), null != e5.current && ex === L.rq.PLAYING && (tm.info("[QV] | handleCanPlay: did NOT early return"), eL && (tm.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eL)), eV(false)), eZ && (tm.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eZ)), tI(null != e4.current ? performance.now() - e4.current : null), eF(false)), tm.info("[QV] | handleCanPlay: updating player state to playing"), tY(L.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!ek) return;
    let e = setTimeout(() => {
      eM(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [ek]);
  let [{
    controlBarAnimSpring: ne
  }, nt] = (0, p.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: z,
    onStart: () => {
      eJ(false)
    },
    onRest: e => {
      1 === e.value && eJ(true)
    }
  })), nn = (0, o.useRef)(null), [{
    captionHeightSpring: nr
  }, no] = (0, p.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: z
  }));
  o.useEffect(() => {
    var e, t;
    return no({
      captionHeightSpring: ep && null != tc && null != (t = null == (e = nn.current) ? true : e.clientHeight) ? t : 0,
      immediate: e6
    }), () => {
      nr.stop()
    }
  }, [ep, no, e6, tc, nr]), o.useEffect(() => (nt({
    controlBarAnimSpring: t$ || ez ? 1 : 0,
    immediate: e6
  }), () => {
    ne.stop()
  }), [t$, nt, e6, ez, ne]);
  let nl = ex === L.rq.ENDED,
    ni = (0, H.e)({
      quest: es,
      onClose: eu,
      sourceQuestContent: ea
    }),
    na = o.useCallback((e, t) => {
      if (ev) {
        var n;
        let e = (0, b.fn)(null == (n = e5.current) ? true : n.parentNode, e5.current);
        null != e && (e.removeEventListener(b.NO, t0), (0, b.Pr)(e), eE(false), tw(false))
      }
      tT(e, C.jZ.LEARN_MORE), ni(e, t)
    }, [ni, ev, tT, t0, eE, tw]),
    ns = o.useMemo(() => (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [es]),
    nc = o.useMemo(() => (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.CAPTION), [es]),
    nu = tn || e3.maxTimestampSec >= (null != (Z = null == (m = e5.current) ? true : m.currentTime) ? Z : 0) + 1,
    nd = o.useMemo(() => null === (0, R.z0)(es, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.TRANSCRIPT), [es]),
    nm = eg ? {} : {
      paddingLeft: (0, s.to)([ne.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px")),
      paddingRight: (0, s.to)([ne.to({
        range: [0, 1],
        output: [0, 25]
      })], e => "".concat(e, "px"))
    };
  return (0, r.jsx)(p.P3F, {
    className: i()(Q.videoCont, {
      [Q.videoContRoundedCorners]: eg
    }),
    "data-fullscreen": ev,
    tabIndex: false,
    onMouseEnter: () => {
      eP(true), tW(false), tK.current = performance.now(), null != tz.current && clearTimeout(tz.current)
    },
    onMouseLeave: () => {
      eP(false), tW(false)
    },
    onMouseMove: tJ,
    onKeyDown: tJ,
    children: (0, r.jsxs)("div", {
      className: i()(Q.videoContInnerRelative, {
        [Q.videoContInnerRelativePortrait]: "portrait" === ei,
        [Q.videoContInnerRelativeLandscape]: "landscape" === ei
      }),
      children: [nl && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(X, {
          quest: es,
          shouldShow: nl,
          sourceQuestContent: ea
        }), (0, r.jsx)("div", {
          className: Q.videoContOverlay
        }), (0, r.jsx)(J, {
          title: tp,
          subtitle: tf,
          icon: p.d4D,
          className: Q.endScreenPanelRight,
          onClick: () => na(_.jn.VIDEO_MODAL, C.jZ.OPEN_GAME_LINK)
        })]
      }), (0, r.jsxs)(E.Z, {
        ref: e => {
          e5.current = e, e_.current = e
        },
        autoPlay: er,
        playsInline: true,
        mediaLayoutType: ev ? Y.hV.STATIC : Y.hV.RESPONSIVE,
        className: i()({
          [Q.hidden]: nl,
          [Q.videoInner]: true
        }),
        controls: false,
        poster: null == ns ? true : ns.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e5.current && (e5.current.currentTime >= eY && (tm.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e5.current.currentTime)), eG(e5.current.currentTime + 6 + 2 * Math.random()), tG(e5.current.currentTime)), e5.current.currentTime >= eQ && (eW(e5.current.currentTime + 1), (0, S.qm)(es.id, eI.taskType, e5.current.currentTime), en(e5.current.currentTime)), e7(es.id, e5.current.currentTime, e5.current.duration), ew(e5.current.currentTime / e5.current.duration * 100))
        },
        onEnded: e => {
          null != e5.current && (tG(e5.current.duration + 1), tm.info("[QV] | handleEnded: sending progress update: ".concat(e5.current.duration + 1)), e7(es.id, e5.current.duration, e5.current.duration)), tY(L.rq.ENDED), eF(false)
        },
        onLoadedData: e => {
          tm.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eL)), eL && (t_(null != e2.current ? performance.now() - e2.current : null), eV(false), null != tS.current && (tS.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e5.current && (tm.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tC)), ti(true), th !== R.n1.VIDEO_HLS && t4(tv), e9 ? e5.current.volume = 0 : e5.current.volume = e8)
        },
        onLoadStart: () => {
          e2.current = performance.now(), ty(eU), tm.info("[QV] | handleLoadStart | loadingStartTime: ".concat(e2.current))
        },
        onPlaying: () => {
          if (!e1.current) return;
          let e = performance.now() - el;
          tm.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tA(e), e1.current = false
        },
        onWaiting: e => {
          e4.current = performance.now(), tm.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(e4.current)), tR(), eF(true)
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
          eH(t)
        },
        onCanPlay: t5,
        onCanPlayThrough: t5,
        onSeeked: () => {
          tm.info("[QV] | handleSeeked"), ts(true)
        },
        onAbort: () => t6(L.CY.ABORT),
        onError: () => t6(L.CY.ERROR),
        onEmptied: () => t6(L.CY.EMPTIED),
        onStalled: () => t6(L.CY.STALLED),
        onClick: () => {
          tm.info("[QV] | handleVideoClick"), t3()
        },
        crossOrigin: "anonymous",
        children: [null != nc && (0, r.jsx)("track", {
          ref: te,
          src: nc.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tb && th !== R.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => t6(L.CY.SOURCE_ERROR),
          src: tb.url,
          type: tb.mimetype
        })]
      }), (eL || eZ) && ex === L.rq.PLAYING && (0, r.jsx)(p.$jN, {
        type: p.$jN.Type.WANDERING_CUBES,
        className: Q.loadingSpinner
      }), ex === L.rq.PAUSED && tr === _.yE.LOST_FOCUS && (0, r.jsx)(K, {}), eh && (0, r.jsx)(s.animated.div, {
        className: Q.floatingShareButtonContainer,
        style: {
          opacity: (0, s.to)([ne.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(w.Z, {})
      }), ed && ex !== L.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.P3F, {
          onClick: () => {
            ex === L.rq.PAUSED && tY(L.rq.PLAYING), em(false)
          },
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: Q.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: i()(Q.transcriptCont, {
            [Q.transcriptContPortrait]: "portrait" === ei
          }),
          style: {
            marginBottom: (0, s.to)([ne, nr], (e, t) => "".concat(e * tO[tE] + t, "px"))
          },
          children: (0, r.jsx)(M.E, {
            quest: es,
            onClose: () => {
              em(false), tT(_.jn.VIDEO_MODAL, C.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: Q.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([ne.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(Q.playPausePopCont, {
          [Q.play]: ex === L.rq.PLAYING,
          [Q.pause]: ex === L.rq.PAUSED
        }),
        children: ex === L.rq.PLAYING ? (0, r.jsx)(p.o1U, {
          className: Q.playPausePopIcon
        }) : (0, r.jsx)(p.fpf, {
          className: Q.playPausePopIcon
        })
      }, ex), ep && null != tc && !nl && (0, r.jsx)(s.animated.div, {
        className: Q.captionContainer,
        ref: nn,
        style: {
          translateY: (0, s.to)([ne.to({
            range: [0, 1],
            output: [0, -tO[tE]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(p.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: Q.captionText,
          children: tc.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: Q.videoFooterCont,
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
        }({}, nm), ee = ee = {
          paddingInline: 16 * !!eg,
          height: (0, s.to)([ne.to({
            range: [0, 1],
            output: [0, tO[tE]]
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
          backgroundColor: t$ ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: t$ ? eB : true,
          duration: null != (q = null == (g = e5.current) ? true : g.duration) ? q : 1,
          maxSeekableTime: t$ && eX ? td : true,
          onClick: e => {
            t4(e), ex === L.rq.ENDED && tY(L.rq.PLAYING)
          },
          onScrubBack: () => {
            t1()
          },
          rounded: eg,
          onScrubForward: () => {
            t2()
          }
        }), (0, r.jsx)(s.animated.div, {
          className: Q.videoControlsCont,
          style: {
            paddingTop: (0, s.to)([ne.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([ne.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([ne.to({
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
            animSpring: ne,
            visible: t$,
            seekForwardEnabled: nu,
            hideCaptionBtn: null == nc,
            hideTranscriptBtn: nd,
            size: tE,
            handlePlaybackBtnClick: t3,
            handleTranscriptBtnClick: () => {
              em(!ed), tT(_.jn.VIDEO_MODAL, ed ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ef(!ep), tT(_.jn.VIDEO_MODAL, ep ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ev;
              tm.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, b.fn)(null == (e = e5.current) ? true : e.parentNode, e5.current);
              t && null != n ? ((0, b.Dj)(n), n.addEventListener(b.NO, t0), tw(true), tg(L._H.LG)) : t || null == n || (n.removeEventListener(b.NO, t0), tw(false), (0, b.Pr)(n), tg(L._H.MD)), eE(t)
            },
            handleSeekBackBtnClick: t1,
            handleSeekForwardBtnClick: t2,
            handleControlBarPendingInteraction: eK,
            onVolumeChange: tM
          })
        })]
      })]
    })
  })
}