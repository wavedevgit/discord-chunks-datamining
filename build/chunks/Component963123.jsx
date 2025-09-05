/** Chunk was on 32249 **/
/** chunk id: 963123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk10106 = require("./10106.js"),
  Chunk261616 = require("./261616.js"),
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
      children: Chunk388032.intl.string(Chunk388032.t.U7Xrb2)
    })
  })
}

function X(e) {
  let {
    quest: t,
    shouldShow: n,
    sourceQuestContent: a
  } = e, i = o.useMemo(() => (0, I.z0)(t, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [t]);
  return null == i ? null : (0, r.jsx)(k.A, {
    questOrQuests: t,
    questContent: j.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: a,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: i.url,
      alt: "Video thumbnail",
      className: l()(Y.stillFrameImageCard, {
        [Y.stillFrameImageCardHidden]: !n
      })
    })
  })
}

function $(e) {
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
    className: l()(Y.endScreenPanel, Y.accentOnHover, s),
    onMouseEnter: d,
    onMouseLeave: f,
    onFocus: d,
    onBlur: f,
    onClick: i,
    children: (0, r.jsxs)("div", {
      className: Y.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: Y.endScreenPanelTextCont,
        children: [(0, r.jsx)(m.X6q, {
          variant: "heading-md/semibold",
          className: Y.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(m.X6q, {
          variant: "heading-sm/normal",
          className: Y.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(F.Z, {
        color: "#747783"
      }), (0, r.jsx)(a, {
        size: "md",
        color: c ? "#FFFFFF" : "#B5BAC1",
        className: Y.endScreenIcon
      })]
    })
  })
}

function J(e) {
  var t, n, a, p, _, k, F;
  let {
    quest: J,
    videoTask: ee,
    videoSessionId: et,
    onOptimisticProgressUpdate: en,
    autoplay: er,
    parentTransitionState: eo,
    performanceClockStartTime: ea,
    onClose: el,
    sourceQuestContent: ei,
    orientation: es
  } = e, ec = (0, T.km)(e => e.transcriptEnabled), eu = (0, T.km)(e => e.setTranscriptEnabled), ed = (0, T.km)(e => e.captionEnabled), ef = (0, T.km)(e => e.setCaptionEnabled), ep = (0, T.km)(e => e.fullScreenEnabled), em = (0, T.km)(e => e.setFullScreenEnabled), {
    focused: ev,
    focusedChanged: eC
  } = (0, Z.xU)(), {
    visible: eE,
    visibleChanged: e_,
    targetRef: eg
  } = (0, Z.Yy)(), [eS, eO] = o.useState(true === er ? B.rq.PLAYING : B.rq.PAUSED), [eb, eh] = o.useState(false), [ey, ej] = o.useState(false), eT = (0, h.il)(J), [ex, eP] = o.useState(eT.percentComplete), [eD, eR] = o.useState(false), [eI, eN] = o.useState(true), [ek, eA] = o.useState(false), [ew, eL] = o.useState([]), [eM, eB] = o.useState(g.Z.getEffectiveConnectionSpeed()), [eV, eF] = o.useState(0), [eZ, eU] = o.useState(0), [eq, eH] = o.useState(false), [eG, eQ] = o.useState(false), eY = o.useRef(true), eW = o.useRef(null), ez = o.useRef(null), eK = (0, T.km)(e => {
    var t;
    return null != (t = e.videoProgress[J.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), eX = (0, T.km)(e => e.setVideoProgress), e$ = (0, T.km)(e => e.muted), eJ = (0, T.km)(e => e.volume), e0 = (0, f.e7)([C.Z], () => C.Z.useReducedMotion), e1 = (0, o.useRef)(null), e2 = (0, o.useRef)(null), e8 = o.useRef(true), e4 = (null == (t = J.userStatus) ? true : t.completedAt) != null, [e6, e7] = o.useState(null), [e3, e9] = o.useState(false), [e5, te] = o.useState(false), [tt, tn] = o.useState(null), tr = e4 ? null != (_ = null == (n = e1.current) ? true : n.duration) ? _ : 0 : Math.max(eK.maxTimestampSec, eT.progressSeconds), to = o.useMemo(() => (0, P.T)({
    quest: J,
    location: q.dr.VIDEO_MODAL
  }), [J]), {
    title: ta,
    subtitle: tl
  } = function(e) {
    var t, n, r, o;
    let a = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
      l = null != (t = null == a ? true : a.messages.videoEndCtaTitle) ? t : Q.intl.string(Q.t.iiTtpK),
      i = null != (r = null != (n = null == a ? true : a.messages.videoEndCtaButtonLabel) ? n : null == a ? true : a.messages.videoEndCtaSubtitle) ? r : Q.intl.string(Q.t.mxaHf3),
      s = (0, h.B2)(e.config),
      c = null != (o = null == a ? true : a.messages.videoEndCtaSubtitle) ? o : Q.intl.string(Q.t.mxaHf3),
      f = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
    return {
      title: f ? s : l,
      subtitle: f ? c : i
    }
  }(J), ti = e4 ? eK.timestampSec >= eK.duration ? 0 : eK.timestampSec : Math.max(eK.timestampSec, eT.progressSeconds);
  (0, v.Ng)(() => {
    e8.current && (e8.current = false, eB(g.Z.getEffectiveConnectionSpeed()), e4 && eK.timestampSec >= eK.duration && eX(J.id, 0, eK.duration))
  });
  let {
    videoVariant: ts,
    videoAsset: tc,
    hlsRef: tu
  } = function(e, t, n, r) {
    var a;
    let l = o.useRef(false),
      s = o.useRef(null),
      c = (0, x.z)(e, q.dr.VIDEO_MODAL),
      d = null == (a = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : a.assets,
      f = o.useMemo(() => null != d ? c && i.ZP.isSupported() && null != d.videoHls ? I.n1.VIDEO_HLS : W.has(n) || null == d.videoLowRes ? I.n1.VIDEO : I.n1.VIDEO_LOW_RES : null, [d, n, c]),
      p = o.useMemo(() => null != f ? (0, I.z0)(e, u.X.WATCH_VIDEO, f, I.O.VIDEO) : null, [e, f]),
      m = () => {
        null != s.current && 8e5 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 8e5)
      };
    return o.useEffect(() => {
      if (f !== I.n1.VIDEO_HLS || null == p || null == t.current || l.current) return;
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
  }(J, e1, eM, ti), td = (0, I.CC)(ts), {
    trackQuestVideoLoadingStarted: tf,
    trackQuestVideoLoadingEnded: tp,
    trackQuestVideoProgressed: tm,
    trackQuestVideoResumed: tv,
    trackQuestVideoPaused: tC,
    trackQuestVideoFocusChange: tE,
    trackQuestContentClick: t_,
    trackQuestVideoBufferingStarted: tg,
    trackQuestVideoBufferingEnded: tS,
    trackWatchTimeAnalytics: tO,
    trackQuestVideoTimeToFirstFrame: tb,
    trackQuestVideoFullscreenChanged: th,
    trackQuestVideoError: ty,
    trackQuestVideoVolumeChanged: tj
  } = (0, U.Z)({
    quest: J,
    videoRef: e1,
    hlsRef: tu,
    videoSessionId: et,
    videoAssetId: td,
    sourceQuestContent: ei,
    logger: to
  }), tT = o.useCallback(() => {
    var e, t;
    return null != (t = null == (e = e1.current) ? true : e.currentTime) ? t : null
  }, []), {
    forceSendCurrentSegment: tx
  } = (0, R.Z)({
    getCurrentVideoTime: tT,
    isPlaying: eS === B.rq.PLAYING,
    isMetadataLoaded: e3,
    isInitialSeekComplete: e5,
    onAnalytics: tO,
    emitIntervalMs: 4e3,
    minSegmentDurationMs: 2e3
  }), tP = o.useCallback(e => {
    if (to.info("[QV] | updatePlayerState | playerState: ".concat(e)), eO(e), null != e1.current) switch (e) {
      case B.rq.PLAYING:
        e1.current.paused && tv(e6), e7(null), e1.current.play();
        break;
      case B.rq.PAUSED:
        e1.current.paused || tx(), e1.current.pause(), eY.current = false;
        break;
      case B.rq.ENDED:
        tx(), eu(false)
    }
  }, [tv, e6, tx, eu, to]);
  o.useEffect(() => {
    tC(e6)
  }, [e6, tC]), o.useEffect(() => {
    eC && tE(ev, eS)
  }, [ev, eC, eS, tE]);
  let tD = o.useCallback(e => {
    var t;
    e4 || (null == (t = J.userStatus) ? true : t.enrolledAt) == null || (to.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, h.FI)(J, e)), tm()
  }, [e4, J, to, tm]);
  o.useEffect(() => {
    eo !== m.Dvm.HIDDEN && eo !== m.Dvm.EXITING && eo !== m.Dvm.EXITED && (null == eo || !e_ || eE || e4) && (!eC || ev || e4) || null == e1.current || eS !== B.rq.PLAYING || (to.info("[QV] | Pausing video | playerState: ".concat(eS, ", parentTransitionState: ").concat(eo, ", visible: ").concat(eE, ", focused: ").concat(ev, ", isQuestCompleted: ").concat(e4)), tP(B.rq.PAUSED), e4 || e7(j.yE.LOST_FOCUS))
  }, [eo, ev, eC, eE, e_, eS, e4, tP, tD, to]);
  let [tR, tI] = o.useState(false), tN = o.useRef(null), tk = o.useRef(performance.now()), tA = o.useCallback(() => {
    null != tN.current && clearTimeout(tN.current), eS === B.rq.PLAYING && (tN.current = setTimeout(() => {
      eS === B.rq.PLAYING && tI(true)
    }, Math.max(0, 3e3 - (performance.now() - tk.current))))
  }, [eS]), tw = () => {
    tI(false), tk.current = performance.now(), tA()
  };
  o.useEffect(() => {
    if (eS !== B.rq.PLAYING) {
      tI(false), null != tN.current && clearTimeout(tN.current);
      return
    }
    return tA(), () => {
      null != tN.current && clearTimeout(tN.current)
    }
  }, [eS, tA]);
  let tL = !tR && (ey || eb || eS === B.rq.ENDED),
    tM = o.useCallback(() => {
      var e;
      to.info("[QV] | handleFullScreenExit");
      let t = (0, O.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
      null == t || (0, O.rB)(t) || (t.removeEventListener(O.NO, tM), em(false), th(false))
    }, [em, to, th]),
    tB = () => {
      if (null == e1.current) return;
      let e = Math.max(e1.current.currentTime - 10, 0);
      to.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tF(e), eS === B.rq.ENDED && tP(B.rq.PAUSED), t_(j.jn.VIDEO_MODAL, b.jZ.SEEK_BACKWARD)
    },
    tV = () => {
      if (null == e1.current || !t2) return;
      let e = Math.min(e1.current.currentTime + 10, tr);
      to.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tF(e), eS !== B.rq.ENDED && e >= e1.current.duration && tP(B.rq.ENDED), t_(j.jn.VIDEO_MODAL, b.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e1.current;
    return () => {
      let t = (0, O.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(O.NO, tM)
    }
  }, [tM]);
  let tF = o.useCallback(e => {
      null != e1.current && (to.info("[QV] | seekTimeline | timeSec: ".concat(e)), tx(), eR(true), te(false), e1.current.currentTime = e, eX(J.id, e, e1.current.duration))
    }, [e1, eX, J.id, tx, to]),
    tZ = () => {
      if (null != e1.current) switch (to.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eS)), eS) {
        case B.rq.ENDED:
          tF(0), tP(B.rq.PLAYING);
          break;
        case B.rq.PLAYING:
          tP(B.rq.PAUSED), e7(j.yE.PAUSE_BUTTON);
          break;
        default:
          tP(B.rq.PLAYING)
      }
    },
    tU = e => {
      tn(e)
    },
    tq = e => {
      tn(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tH = o.useCallback(() => {
      if (null == e1.current || (to.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e1.current.textTracks.length)), 0 === e1.current.textTracks.length)) return;
      let e = e1.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, V.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tU(n), n.onexit = () => tq(n))
        }
    }, [e1, to]);
  o.useEffect(() => {
    if (null == e2.current) return;
    let e = e2.current;
    return e.addEventListener("load", tH), () => {
      null != e && e.removeEventListener("load", tH)
    }
  }, [e2, tH]);
  let tG = o.useCallback(e => {
      var t;
      to.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e1.current) ? true : t.currentTime, ", videoAssetId: ").concat(td, ", connectionSpeed: ").concat(eM)), ty(e)
    }, [eM, ty, e1, td, to]),
    tQ = e => {
      to.info("[QV] | handleCanPlay: playerState: ".concat(eS)), null != e1.current && eS === B.rq.PLAYING && (to.info("[QV] | handleCanPlay: did NOT early return"), eI && (to.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eI)), eN(false)), ek && (to.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ek)), tS(null != ez.current ? performance.now() - ez.current : null), eA(false)), to.info("[QV] | handleCanPlay: updating player state to playing"), tP(B.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eD) return;
    let e = setTimeout(() => {
      eR(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eD]);
  let [{
    controlBarAnimSpring: tY
  }, tW] = (0, m.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: z,
    onStart: () => {
      eQ(false)
    },
    onRest: e => {
      1 === e.value && eQ(true)
    }
  })), tz = (0, o.useRef)(null), [{
    captionHeightSpring: tK
  }, tX] = (0, m.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: z
  }));
  o.useEffect(() => {
    var e, t;
    return tX({
      captionHeightSpring: ed && null != tt && null != (t = null == (e = tz.current) ? true : e.clientHeight) ? t : 0,
      immediate: e0
    }), () => {
      tK.stop()
    }
  }, [ed, tX, e0, tt, tK]), o.useEffect(() => (tW({
    controlBarAnimSpring: tL || eq ? 1 : 0,
    immediate: e0
  }), () => {
    tY.stop()
  }), [tL, tW, e0, eq, tY]);
  let t$ = eS === B.rq.ENDED,
    tJ = o.useCallback(async e => {
      if (ep) {
        var t;
        let e = (0, O.fn)(null == (t = e1.current) ? true : t.parentNode, e1.current);
        null != e && (e.removeEventListener(O.NO, tM), (0, O.Pr)(e), em(false), th(false))
      }
      if (t_(e, b.jZ.LEARN_MORE), J.id === q.V6) return void window.open(S.Z.getArticleURL(H.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      if (null != el) {
        let e = N.r.build(J.config).application.link;
        await (0, V.qP)(e) && el()
      }(0, h.nc)(J, {
        content: e,
        ctaContent: b.jZ.OPEN_GAME_LINK,
        sourceQuestContent: ei
      })
    }, [t_, J, el, ep, e1, tM, em, th, ei]),
    t0 = o.useMemo(() => (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [J]),
    t1 = o.useMemo(() => (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [J]),
    t2 = e4 || eK.maxTimestampSec >= (null != (k = null == (a = e1.current) ? true : a.currentTime) ? k : 0) + 1,
    t8 = o.useMemo(() => null === (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.TRANSCRIPT), [J]);
  return (0, r.jsx)(m.P3F, {
    className: Y.videoCont,
    "data-fullscreen": ep,
    tabIndex: false,
    onMouseEnter: () => {
      eh(true), tI(false), tk.current = performance.now(), null != tN.current && clearTimeout(tN.current)
    },
    onMouseLeave: () => {
      eh(false), tI(false)
    },
    onMouseMove: tw,
    onKeyDown: tw,
    children: (0, r.jsxs)("div", {
      className: l()(Y.videoContInnerRelative, {
        [Y.videoContInnerRelativePortrait]: "portrait" === es,
        [Y.videoContInnerRelativeLandscape]: "landscape" === es
      }),
      children: [t$ && (() => {
        if (!(0, D.e)({
            location: q.dr.VIDEO_MODAL
          })) return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(X, {
            quest: J,
            shouldShow: t$,
            sourceQuestContent: ei
          }), (0, r.jsx)("div", {
            className: Y.videoContOverlay
          }), (0, r.jsx)($, {
            title: ta,
            subtitle: tl,
            icon: m.d4D,
            className: Y.endScreenPanelRight,
            onClick: () => tJ(j.jn.VIDEO_MODAL)
          })]
        });
        {
          var e, t, n;
          let o = J.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
          return (0, r.jsx)(w.Z, {
            quest: J,
            title: null != (e = null == o ? true : o.messages.videoEndCtaTitle) ? e : Q.intl.string(Q.t.Ka526u),
            subtitle: null != (t = null == o ? true : o.messages.videoEndCtaSubtitle) ? t : Q.intl.string(Q.t.tKMcAg),
            ctaBtnLabel: null != (n = null == o ? true : o.messages.videoEndCtaButtonLabel) ? n : Q.intl.string(Q.t.iiTtpK),
            onCTAClick: () => tJ(j.jn.VIDEO_MODAL_END_CARD),
            sourceQuestContent: ei
          })
        }
      })(), (0, r.jsxs)(E.Z, {
        ref: e => {
          e1.current = e, eg.current = e
        },
        autoPlay: er,
        playsInline: true,
        mediaLayoutType: ep ? G.hV.STATIC : G.hV.RESPONSIVE,
        className: l()({
          [Y.hidden]: t$,
          [Y.videoInner]: true
        }),
        controls: false,
        poster: null == t0 ? true : t0.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e1.current && (e1.current.currentTime >= eV && (to.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e1.current.currentTime)), eF(e1.current.currentTime + 6 + 2 * Math.random()), tD(e1.current.currentTime)), e1.current.currentTime >= eZ && (eU(e1.current.currentTime + 1), (0, y.qm)(J.id, eT.taskType, e1.current.currentTime), en(e1.current.currentTime)), eX(J.id, e1.current.currentTime, e1.current.duration), eP(e1.current.currentTime / e1.current.duration * 100))
        },
        onEnded: e => {
          null != e1.current && (tD(e1.current.duration + 1), to.info("[QV] | handleEnded: sending progress update: ".concat(e1.current.duration + 1)), eX(J.id, e1.current.duration, e1.current.duration)), tP(B.rq.ENDED), eA(false)
        },
        onLoadedData: e => {
          to.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eI)), eI && (tp(null != eW.current ? performance.now() - eW.current : null), eN(false), null != tu.current && (tu.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e1.current && (to.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(td)), e9(true), ts !== I.n1.VIDEO_HLS && tF(ti), e$ ? e1.current.volume = 0 : e1.current.volume = eJ)
        },
        onLoadStart: () => {
          eW.current = performance.now(), tf(eM), to.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eW.current))
        },
        onPlaying: () => {
          if (!eY.current) return;
          let e = performance.now() - ea;
          to.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), tb(e), eY.current = false
        },
        onWaiting: e => {
          ez.current = performance.now(), to.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(ez.current)), tg(), eA(true)
        },
        onProgress: e => {
          if (null == e1.current) return;
          to.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e1.current.buffered.length));
          let t = [];
          for (let e = 0; e < e1.current.buffered.length; e++) {
            let n = e1.current.buffered.start(e),
              r = e1.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e1.current.duration,
              size: (r - n) / e1.current.duration
            })
          }
          eL(t)
        },
        onCanPlay: tQ,
        onCanPlayThrough: tQ,
        onSeeked: () => {
          to.info("[QV] | handleSeeked"), te(true)
        },
        onAbort: () => tG(B.CY.ABORT),
        onError: () => tG(B.CY.ERROR),
        onEmptied: () => tG(B.CY.EMPTIED),
        onStalled: () => tG(B.CY.STALLED),
        onClick: () => {
          to.info("[QV] | handleVideoClick"), tZ()
        },
        crossOrigin: "anonymous",
        children: [null != t1 && (0, r.jsx)("track", {
          ref: e2,
          src: t1.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tc && ts !== I.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => tG(B.CY.SOURCE_ERROR),
          src: tc.url,
          type: tc.mimetype
        })]
      }), (eI || ek) && eS === B.rq.PLAYING && (0, r.jsx)(m.$jN, {
        type: m.$jN.Type.WANDERING_CUBES,
        className: Y.loadingSpinner
      }), eS === B.rq.PAUSED && e6 === j.yE.LOST_FOCUS && (0, r.jsx)(K, {}), ec && eS !== B.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.P3F, {
          onClick: () => eu(false),
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: Y.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: l()(Y.transcriptCont, {
            [Y.transcriptContPortrait]: "portrait" === es
          }),
          style: {
            marginBottom: (0, s.to)([tY, tK], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(M.K, {
            quest: J,
            onClose: () => {
              eu(false), t_(j.jn.VIDEO_MODAL, b.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: Y.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([tY.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: l()(Y.playPausePopCont, {
          [Y.play]: eS === B.rq.PLAYING,
          [Y.pause]: eS === B.rq.PAUSED
        }),
        children: eS === B.rq.PLAYING ? (0, r.jsx)(m.o1U, {
          className: Y.playPausePopIcon
        }) : (0, r.jsx)(m.fpf, {
          className: Y.playPausePopIcon
        })
      }, eS), ed && null != tt && (0, r.jsx)(s.animated.div, {
        className: Y.captionContainer,
        ref: tz,
        style: {
          translateY: (0, s.to)([tY.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(m.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: Y.captionText,
          children: tt.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: Y.videoFooterCont,
        style: {
          paddingLeft: (0, s.to)([tY.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          paddingRight: (0, s.to)([tY.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          height: (0, s.to)([tY.to({
            range: [0, 1],
            output: [0, 50]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(L.Z, {
          percent: ex,
          animate: true !== e8.current && !eD,
          interactionEnabled: e4 && eG,
          backgroundColor: tL ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tL ? ew : true,
          duration: null != (F = null == (p = e1.current) ? true : p.duration) ? F : 1,
          maxSeekableTime: tL && eG ? tr : true,
          onClick: e => {
            tF(e), eS === B.rq.ENDED && tP(B.rq.PLAYING)
          },
          onScrubBack: () => {
            tB()
          },
          onScrubForward: () => {
            tV()
          }
        }), (0, r.jsx)(s.animated.div, {
          className: Y.videoControlsCont,
          style: {
            paddingTop: (0, s.to)([tY.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([tY.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([tY.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => ej(true),
          onBlur: () => ej(false),
          children: (0, r.jsx)(A.Z, {
            videoRef: e1,
            videoTask: ee,
            playerState: eS,
            animSpring: tY,
            visible: tL,
            seekForwardEnabled: t2,
            hideCaptionBtn: null == t1,
            hideTranscriptBtn: t8,
            handlePlaybackBtnClick: tZ,
            handleTranscriptBtnClick: () => {
              eu(!ec), t_(j.jn.VIDEO_MODAL, ec ? b.jZ.TRANSCRIPT_DISABLE : b.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ef(!ed), t_(j.jn.VIDEO_MODAL, ed ? b.jZ.CLOSED_CAPTIONING_DISABLE : b.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ep;
              to.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, O.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
              t && null != n ? ((0, O.Dj)(n), n.addEventListener(O.NO, tM), th(true)) : t || null == n || (n.removeEventListener(O.NO, tM), th(false), (0, O.Pr)(n)), em(t)
            },
            handleSeekBackBtnClick: tB,
            handleSeekForwardBtnClick: tV,
            handleControlBarPendingInteraction: eH,
            onVolumeChange: tj
          })
        })]
      })]
    })
  })
}