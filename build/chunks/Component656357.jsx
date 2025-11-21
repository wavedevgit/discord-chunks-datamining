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
  var t, n, l, m, g, I, Z, q, $, ee, et;
  let {
    videoTask: en,
    onOptimisticProgressUpdate: er,
    autoplay: eo,
    parentTransitionState: el,
    performanceClockStartTime: ei,
    orientation: ea
  } = e, {
    sourceQuestContent: es,
    quest: ec,
    videoSessionId: eu,
    onClose: ed
  } = o.useContext(A.VideoQuestModalContext), em = (0, x.km)(e => e.transcriptEnabled), ep = (0, x.km)(e => e.setTranscriptEnabled), ef = (0, x.km)(e => e.captionEnabled), ev = (0, x.km)(e => e.setCaptionEnabled), eE = (0, x.km)(e => e.fullScreenEnabled), eg = (0, x.km)(e => e.setFullScreenEnabled), {
    enabled: eO,
    variant: eh
  } = j.EO.useConfig({
    location: U.dr.VIDEO_MODAL
  }), eb = eh === j.m_.OVERLAY_SHARE_ON_VIDEO, {
    focused: eS,
    focusedChanged: ey
  } = (0, F.xU)(), {
    visible: eC,
    visibleChanged: e_,
    targetRef: ex
  } = (0, F.Yy)(), [ej, eD] = o.useState(true === eo ? M.rq.PLAYING : M.rq.PAUSED), [eP, eT] = o.useState(false), [eR, eI] = o.useState(false), eN = (0, C.il)(ec), [eA, ew] = o.useState(eN.percentComplete), ek = o.useCallback(e => {
    e1(null), ew(e)
  }, []), [eL, eM] = o.useState(false), [eV, eZ] = o.useState(true), [eF, eB] = o.useState(false), [eH, eU] = o.useState([]), [eq, eY] = o.useState(h.Z.getEffectiveConnectionSpeed()), [eG, eQ] = o.useState(0), [eW, ez] = o.useState(0), [eK, eX] = o.useState(false), [eJ, e$] = o.useState(false), [e0, e1] = o.useState(null), e2 = o.useRef(true), e4 = o.useRef(null), e7 = o.useRef(null), e3 = (0, x.km)(e => {
    var t;
    return null != (t = e.videoProgress[ec.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), e9 = (0, x.km)(e => e.setVideoProgress), e8 = (0, x.km)(e => e.muted), e6 = (0, x.km)(e => e.volume), e5 = (0, d.e7)([v.Z], () => v.Z.useReducedMotion), te = (0, o.useRef)(null), tt = (0, o.useRef)(null), tn = o.useRef(true), tr = (null == (t = ec.userStatus) ? true : t.completedAt) != null, [to, tl] = o.useState(null), [ti, ta] = o.useState(false), [ts, tc] = o.useState(false), [tu, td] = o.useState(null), tm = tr ? null != (I = null == (n = te.current) ? true : n.duration) ? I : 0 : Math.max(e3.maxTimestampSec, eN.progressSeconds), tp = o.useMemo(() => (0, P.T)({
    quest: ec,
    location: U.dr.VIDEO_MODAL
  }), [ec]), {
    title: tf,
    subtitle: tv
  } = {
    title: (0, C.B2)(ec.config),
    subtitle: null != ($ = ec.config.ctaConfig.subtitle) ? $ : G.intl.string(G.t.mxaHfx)
  }, tE = tr ? e3.timestampSec >= e3.duration ? 0 : e3.timestampSec : Math.max(e3.timestampSec, eN.progressSeconds), [tg, tO] = o.useState(M._H.MD), th = {
    [M._H.MD]: 50,
    [M._H.LG]: 58
  };
  (0, f.Ng)(() => {
    tn.current && (tn.current = false, eY(h.Z.getEffectiveConnectionSpeed()), tr && e3.timestampSec >= e3.duration && e9(ec.id, 0, e3.duration))
  });
  let {
    videoVariant: tb,
    videoAsset: tS,
    hlsRef: ty
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
  }(ec, te, eq, tE), tC = (0, R.CC)(tb), {
    trackQuestVideoLoadingStarted: t_,
    trackQuestVideoLoadingEnded: tx,
    trackQuestVideoProgressed: tj,
    trackQuestVideoResumed: tD,
    trackQuestVideoPaused: tP,
    trackQuestVideoFocusChange: tT,
    trackQuestContentClick: tR,
    trackQuestVideoBufferingStarted: tI,
    trackQuestVideoBufferingEnded: tN,
    trackWatchTimeAnalytics: tA,
    trackQuestVideoTimeToFirstFrame: tw,
    trackQuestVideoFullscreenChanged: tk,
    trackQuestVideoError: tL,
    trackQuestVideoVolumeChanged: tM
  } = (0, B.Z)({
    quest: ec,
    videoRef: te,
    hlsRef: ty,
    videoSessionId: eu,
    videoAssetId: tC,
    sourceQuestContent: es,
    logger: tp
  }), tV = o.useRef(null), tZ = ec.id, tF = ec.config.messages.gameTitle, tB = null == tS ? true : tS.url, tH = null == (l = ec.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : l.messages.videoTitle;
  o.useEffect(() => {
    var e;
    if (null == tB || null == te.current || tb === R.n1.VIDEO_HLS && null == ty.current || !(0, O.Zx)({
        location: U.dr.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let t = {
      debug: false,
      videoElement: te.current,
      hlsInstance: tb === R.n1.VIDEO_HLS && null != (e = ty.current) ? e : true,
      feature: "quests",
      contentMetadata: {
        contentId: tB,
        videoStreamType: tb === R.n1.VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == te.current.duration || isNaN(te.current.duration) ? 0 : te.current.duration,
        title: tH,
        questId: tZ,
        gameName: tF
      }
    };
    return tV.current = new O.ci(t), tV.current.initialize(), () => {
      null != tV.current && (tV.current.endSession(), tV.current.destroy(), tV.current = null)
    }
  }, [tb, ty, tF, tZ, tB, tH]);
  let tU = o.useCallback(() => {
      var e, t;
      return null != (t = null == (e = te.current) ? true : e.currentTime) ? t : null
    }, []),
    {
      forceSendCurrentSegment: tq
    } = (0, T.Z)({
      getCurrentVideoTime: tU,
      isPlaying: ej === M.rq.PLAYING,
      isMetadataLoaded: ti,
      isInitialSeekComplete: ts,
      onAnalytics: tA,
      emitIntervalMs: 4e3,
      minSegmentDurationMs: 2e3
    }),
    tY = o.useCallback(e => {
      if (tp.info("[QV] | updatePlayerState | playerState: ".concat(e)), eD(e), null != te.current) switch (e) {
        case M.rq.PLAYING:
          te.current.paused && tD(to), tl(null), te.current.play();
          break;
        case M.rq.PAUSED:
          te.current.paused || tq(), te.current.pause(), e2.current = false;
          break;
        case M.rq.ENDED:
          tq(), ep(false)
      }
    }, [tD, to, tq, ep, tp]);
  o.useEffect(() => {
    tP(to)
  }, [to, tP]), o.useEffect(() => {
    ey && tT(eS, ej)
  }, [eS, ey, ej, tT]);
  let tG = o.useCallback(e => {
    var t;
    tr || (null == (t = ec.userStatus) ? true : t.enrolledAt) == null || (tp.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, C.FI)(ec, e)), tj()
  }, [tr, ec, tp, tj]);
  o.useEffect(() => {
    el !== p.Dvm.HIDDEN && el !== p.Dvm.EXITING && el !== p.Dvm.EXITED && (null == el || !e_ || eC || tr) && (!ey || eS || tr) || null == te.current || ej !== M.rq.PLAYING || (tp.info("[QV] | Pausing video | playerState: ".concat(ej, ", parentTransitionState: ").concat(el, ", visible: ").concat(eC, ", focused: ").concat(eS, ", isQuestCompleted: ").concat(tr)), tY(M.rq.PAUSED), tr || tl(_.yE.LOST_FOCUS))
  }, [el, eS, ey, eC, e_, ej, tr, tY, tG, tp]);
  let [tQ, tW] = o.useState(false), tz = o.useRef(null), tK = o.useRef(performance.now()), tX = o.useCallback(() => {
    null != tz.current && clearTimeout(tz.current), ej === M.rq.PLAYING && (tz.current = setTimeout(() => {
      ej === M.rq.PLAYING && tW(true)
    }, Math.max(0, 3e3 - (performance.now() - tK.current))))
  }, [ej]), tJ = () => {
    tW(false), tK.current = performance.now(), tX()
  };
  o.useEffect(() => {
    if (ej !== M.rq.PLAYING) {
      tW(false), null != tz.current && clearTimeout(tz.current);
      return
    }
    return tX(), () => {
      null != tz.current && clearTimeout(tz.current)
    }
  }, [ej, tX]);
  let t$ = !tQ && (eR || eP || ej === M.rq.ENDED),
    t0 = o.useCallback(() => {
      var e;
      tp.info("[QV] | handleFullScreenExit");
      let t = (0, b.fn)(null == (e = te.current) ? true : e.parentNode, te.current);
      null == t || (0, b.rB)(t) || (t.removeEventListener(b.NO, t0), eg(false), tk(false), tO(M._H.MD))
    }, [eg, tp, tk]),
    t1 = () => {
      if (null == te.current) return;
      let e = Math.max(te.current.currentTime - 10, 0);
      tp.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), t4(e), ej === M.rq.ENDED && tY(M.rq.PAUSED), tR(_.jn.VIDEO_MODAL, y.jZ.SEEK_BACKWARD)
    },
    t2 = () => {
      if (null == te.current || !nu) return;
      let e = Math.min(te.current.currentTime + 10, tm);
      tp.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), t4(e), ej !== M.rq.ENDED && e >= te.current.duration && tY(M.rq.ENDED), tR(_.jn.VIDEO_MODAL, y.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = te.current;
    return () => {
      let t = (0, b.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(b.NO, t0)
    }
  }, [t0]);
  let t4 = o.useCallback(e => {
      var t;
      null != te.current && (tp.info("[QV] | seekTimeline | timeSec: ".concat(e)), e1(e / (null != (t = te.current.duration) ? t : 1) * 100), tq(), eM(true), tc(false), te.current.currentTime = e, e9(ec.id, e, te.current.duration))
    }, [te, e9, ec.id, tq, tp]),
    t7 = () => {
      if (null != te.current) switch (tp.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(ej)), ej) {
        case M.rq.ENDED:
          t4(0), tY(M.rq.PLAYING);
          break;
        case M.rq.PLAYING:
          tY(M.rq.PAUSED), tl(_.yE.PAUSE_BUTTON);
          break;
        default:
          tY(M.rq.PLAYING)
      }
    },
    t3 = e => {
      td(e)
    },
    t9 = e => {
      td(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    t8 = o.useCallback(() => {
      if (null == te.current || (tp.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(te.current.textTracks.length)), 0 === te.current.textTracks.length)) return;
      let e = te.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, V.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => t3(n), n.onexit = () => t9(n))
        }
    }, [te, tp]);
  o.useEffect(() => {
    if (null == tt.current) return;
    let e = tt.current;
    return e.addEventListener("load", t8), () => {
      null != e && e.removeEventListener("load", t8)
    }
  }, [tt, t8]);
  let t6 = o.useCallback(e => {
      var t;
      tp.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = te.current) ? true : t.currentTime, ", videoAssetId: ").concat(tC, ", connectionSpeed: ").concat(eq)), tL(e)
    }, [eq, tL, te, tC, tp]),
    t5 = e => {
      tp.info("[QV] | handleCanPlay: playerState: ".concat(ej)), null != te.current && ej === M.rq.PLAYING && (tp.info("[QV] | handleCanPlay: did NOT early return"), eV && (tp.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eV)), eZ(false)), eF && (tp.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eF)), tN(null != e7.current ? performance.now() - e7.current : null), eB(false)), tp.info("[QV] | handleCanPlay: updating player state to playing"), tY(M.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eL) return;
    let e = setTimeout(() => {
      eM(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eL]);
  let [{
    controlBarAnimSpring: ne
  }, nt] = (0, p.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: z,
    onStart: () => {
      e$(false)
    },
    onRest: e => {
      1 === e.value && e$(true)
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
      captionHeightSpring: ef && null != tu && null != (t = null == (e = nn.current) ? true : e.clientHeight) ? t : 0,
      immediate: e5
    }), () => {
      nr.stop()
    }
  }, [ef, no, e5, tu, nr]), o.useEffect(() => (nt({
    controlBarAnimSpring: t$ || eK ? 1 : 0,
    immediate: e5
  }), () => {
    ne.stop()
  }), [t$, nt, e5, eK, ne]);
  let nl = ej === M.rq.ENDED,
    ni = (0, H.e)({
      quest: ec,
      onClose: ed,
      sourceQuestContent: es
    }),
    na = o.useCallback((e, t) => {
      if (eE) {
        var n;
        let e = (0, b.fn)(null == (n = te.current) ? true : n.parentNode, te.current);
        null != e && (e.removeEventListener(b.NO, t0), (0, b.Pr)(e), eg(false), tk(false))
      }
      tR(e, y.jZ.LEARN_MORE), ni(e, t)
    }, [ni, eE, tR, t0, eg, tk]),
    ns = o.useMemo(() => (0, R.z0)(ec, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), [ec]),
    nc = o.useMemo(() => (0, R.z0)(ec, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.CAPTION), [ec]),
    nu = tr || e3.maxTimestampSec >= (null != (Z = null == (m = te.current) ? true : m.currentTime) ? Z : 0) + 1,
    nd = o.useMemo(() => null === (0, R.z0)(ec, u.X.WATCH_VIDEO, R.n1.VIDEO, R.O.TRANSCRIPT), [ec]),
    nm = eO ? {} : {
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
      [Q.videoContRoundedCorners]: eO
    }),
    "data-fullscreen": eE,
    tabIndex: false,
    onMouseEnter: () => {
      eT(true), tW(false), tK.current = performance.now(), null != tz.current && clearTimeout(tz.current)
    },
    onMouseLeave: () => {
      eT(false), tW(false)
    },
    onMouseMove: tJ,
    onKeyDown: tJ,
    children: (0, r.jsxs)("div", {
      className: i()(Q.videoContInnerRelative, {
        [Q.videoContInnerRelativePortrait]: "portrait" === ea,
        [Q.videoContInnerRelativeLandscape]: "landscape" === ea
      }),
      children: [nl && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(X, {
          quest: ec,
          shouldShow: nl,
          sourceQuestContent: es
        }), (0, r.jsx)("div", {
          className: Q.videoContOverlay
        }), (0, r.jsx)(J, {
          title: tf,
          subtitle: tv,
          icon: p.d4D,
          className: Q.endScreenPanelRight,
          onClick: () => na(_.jn.VIDEO_MODAL, y.jZ.OPEN_GAME_LINK)
        })]
      }), (0, r.jsxs)(E.Z, {
        ref: e => {
          te.current = e, ex.current = e
        },
        autoPlay: eo,
        playsInline: true,
        mediaLayoutType: eE ? Y.hV.STATIC : Y.hV.RESPONSIVE,
        className: i()({
          [Q.hidden]: nl,
          [Q.videoInner]: true
        }),
        controls: false,
        poster: null == ns ? true : ns.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != te.current && (te.current.currentTime >= eG && (tp.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(te.current.currentTime)), eQ(te.current.currentTime + 6 + 2 * Math.random()), tG(te.current.currentTime)), te.current.currentTime >= eW && (ez(te.current.currentTime + 1), (0, S.qm)(ec.id, eN.taskType, te.current.currentTime), er(te.current.currentTime)), e9(ec.id, te.current.currentTime, te.current.duration), ek(te.current.currentTime / te.current.duration * 100))
        },
        onEnded: e => {
          null != te.current && (tG(te.current.duration + 1), tp.info("[QV] | handleEnded: sending progress update: ".concat(te.current.duration + 1)), e9(ec.id, te.current.duration, te.current.duration)), tY(M.rq.ENDED), eB(false)
        },
        onLoadedData: e => {
          tp.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eV)), eV && (tx(null != e4.current ? performance.now() - e4.current : null), eZ(false), null != ty.current && (ty.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != te.current && (tp.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tC)), ta(true), tb !== R.n1.VIDEO_HLS && t4(tE), e8 ? te.current.volume = 0 : te.current.volume = e6)
        },
        onLoadStart: () => {
          e4.current = performance.now(), t_(eq), tp.info("[QV] | handleLoadStart | loadingStartTime: ".concat(e4.current))
        },
        onPlaying: () => {
          if (!e2.current) return;
          let e = performance.now() - ei;
          tp.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tw(e), e2.current = false
        },
        onWaiting: e => {
          e7.current = performance.now(), tp.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(e7.current)), tI(), eB(true)
        },
        onProgress: e => {
          if (null == te.current) return;
          tp.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(te.current.buffered.length));
          let t = [];
          for (let e = 0; e < te.current.buffered.length; e++) {
            let n = te.current.buffered.start(e),
              r = te.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / te.current.duration,
              size: (r - n) / te.current.duration
            })
          }
          eU(t)
        },
        onCanPlay: t5,
        onCanPlayThrough: t5,
        onSeeked: () => {
          tp.info("[QV] | handleSeeked"), tc(true)
        },
        onAbort: () => t6(M.CY.ABORT),
        onError: () => t6(M.CY.ERROR),
        onEmptied: () => t6(M.CY.EMPTIED),
        onStalled: () => t6(M.CY.STALLED),
        onClick: () => {
          tp.info("[QV] | handleVideoClick"), t7()
        },
        crossOrigin: "anonymous",
        children: [null != nc && (0, r.jsx)("track", {
          ref: tt,
          src: nc.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tS && tb !== R.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => t6(M.CY.SOURCE_ERROR),
          src: tS.url,
          type: tS.mimetype
        })]
      }), (eV || eF) && ej === M.rq.PLAYING && (0, r.jsx)(p.$jN, {
        type: p.$jN.Type.WANDERING_CUBES,
        className: Q.loadingSpinner
      }), ej === M.rq.PAUSED && to === _.yE.LOST_FOCUS && (0, r.jsx)(K, {}), eb && (0, r.jsx)(s.animated.div, {
        className: Q.floatingShareButtonContainer,
        style: {
          opacity: (0, s.to)([ne.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        },
        children: (0, r.jsx)(w.Z, {})
      }), em && ej !== M.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.P3F, {
          onClick: () => {
            ej === M.rq.PAUSED && tY(M.rq.PLAYING), ep(false)
          },
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: Q.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: i()(Q.transcriptCont, {
            [Q.transcriptContPortrait]: "portrait" === ea
          }),
          style: {
            marginBottom: (0, s.to)([ne, nr], (e, t) => "".concat(e * th[tg] + t, "px"))
          },
          children: (0, r.jsx)(L.E, {
            quest: ec,
            onClose: () => {
              ep(false), tR(_.jn.VIDEO_MODAL, y.jZ.TRANSCRIPT_DISABLE)
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
          [Q.play]: ej === M.rq.PLAYING,
          [Q.pause]: ej === M.rq.PAUSED
        }),
        children: ej === M.rq.PLAYING ? (0, r.jsx)(p.o1U, {
          className: Q.playPausePopIcon
        }) : (0, r.jsx)(p.fpf, {
          className: Q.playPausePopIcon
        })
      }, ej), ef && null != tu && !nl && (0, r.jsx)(s.animated.div, {
        className: Q.captionContainer,
        ref: nn,
        style: {
          translateY: (0, s.to)([ne.to({
            range: [0, 1],
            output: [0, -th[tg]]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(p.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: Q.captionText,
          children: tu.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: Q.videoFooterCont,
        style: (ee = function(e) {
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
        }({}, nm), et = et = {
          paddingInline: 16 * !!eO,
          height: (0, s.to)([ne.to({
            range: [0, 1],
            output: [0, th[tg]]
          })], e => "".concat(e, "px"))
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(et)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(et)).forEach(function(e) {
          Object.defineProperty(ee, e, Object.getOwnPropertyDescriptor(et, e))
        }), ee),
        children: [(0, r.jsx)(k.Z, {
          percent: null != e0 ? e0 : eA,
          animate: true !== tn.current && !eL,
          interactionEnabled: tr && eJ,
          backgroundColor: t$ ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: t$ ? eH : true,
          duration: null != (q = null == (g = te.current) ? true : g.duration) ? q : 1,
          maxSeekableTime: t$ && eJ ? tm : true,
          onClick: e => {
            t4(e), ej === M.rq.ENDED && tY(M.rq.PLAYING)
          },
          onScrubBack: () => {
            t1()
          },
          rounded: eO,
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
          onFocus: () => eI(true),
          onBlur: () => eI(false),
          children: (0, r.jsx)(N.Z, {
            videoRef: te,
            videoTask: en,
            playerState: ej,
            animSpring: ne,
            visible: t$,
            seekForwardEnabled: nu,
            hideCaptionBtn: null == nc,
            hideTranscriptBtn: nd,
            size: tg,
            handlePlaybackBtnClick: t7,
            handleTranscriptBtnClick: () => {
              ep(!em), tR(_.jn.VIDEO_MODAL, em ? y.jZ.TRANSCRIPT_DISABLE : y.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ev(!ef), tR(_.jn.VIDEO_MODAL, ef ? y.jZ.CLOSED_CAPTIONING_DISABLE : y.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !eE;
              tp.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, b.fn)(null == (e = te.current) ? true : e.parentNode, te.current);
              t && null != n ? ((0, b.Dj)(n), n.addEventListener(b.NO, t0), tk(true), tO(M._H.LG)) : t || null == n || (n.removeEventListener(b.NO, t0), tk(false), (0, b.Pr)(n), tO(M._H.MD)), eg(t)
            },
            handleSeekBackBtnClick: t1,
            handleSeekForwardBtnClick: t2,
            handleControlBarPendingInteraction: eX,
            onVolumeChange: tM
          })
        })]
      })]
    })
  })
}