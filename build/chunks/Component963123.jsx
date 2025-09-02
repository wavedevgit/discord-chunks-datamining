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
  return null == i ? null : (0, r.jsx)(N.A, {
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
  var t, n, a, p, _, N, F;
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
  } = e, ec = (0, x.km)(e => e.transcriptEnabled), eu = (0, x.km)(e => e.setTranscriptEnabled), ed = (0, x.km)(e => e.captionEnabled), ef = (0, x.km)(e => e.setCaptionEnabled), ep = (0, x.km)(e => e.fullScreenEnabled), em = (0, x.km)(e => e.setFullScreenEnabled), {
    focused: ev,
    focusedChanged: eC
  } = (0, Z.xU)(), {
    visible: eg,
    visibleChanged: e_,
    targetRef: eE
  } = (0, Z.Yy)(), [eS, eO] = o.useState(true === er ? B.rq.PLAYING : B.rq.PAUSED), [eb, eh] = o.useState(false), [ey, ej] = o.useState(false), ex = (0, h.il)(J), [eT, eP] = o.useState(ex.percentComplete), [eD, eR] = o.useState(false), [eI, ek] = o.useState(true), [eN, ew] = o.useState(false), [eA, eL] = o.useState([]), [eM, eB] = o.useState(E.Z.getEffectiveConnectionSpeed()), [eV, eF] = o.useState(0), [eZ, eU] = o.useState(0), [eq, eH] = o.useState(false), [eG, eQ] = o.useState(false), eY = o.useRef(true), eW = o.useRef(null), ez = o.useRef(null), eK = (0, x.km)(e => {
    var t;
    return null != (t = e.videoProgress[J.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), eX = (0, x.km)(e => e.setVideoProgress), e$ = (0, x.km)(e => e.muted), eJ = (0, x.km)(e => e.volume), e0 = (0, f.e7)([C.Z], () => C.Z.useReducedMotion), e1 = (0, o.useRef)(null), e2 = (0, o.useRef)(null), e8 = o.useRef(true), e4 = (null == (t = J.userStatus) ? true : t.completedAt) != null, e6 = (0, x.km)(e => e.transcript), [e7, e3] = o.useState(null), [e9, e5] = o.useState(false), [te, tt] = o.useState(false), [tn, tr] = o.useState(null), to = e4 ? null != (_ = null == (n = e1.current) ? true : n.duration) ? _ : 0 : Math.max(eK.maxTimestampSec, ex.progressSeconds), ta = o.useMemo(() => (0, P.T)({
    quest: J,
    location: q.dr.VIDEO_MODAL
  }), [J]), {
    title: tl,
    subtitle: ti
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
  }(J), ts = e4 ? eK.timestampSec >= eK.duration ? 0 : eK.timestampSec : Math.max(eK.timestampSec, ex.progressSeconds);
  (0, v.Ng)(() => {
    e8.current && (e8.current = false, eB(E.Z.getEffectiveConnectionSpeed()), e4 && eK.timestampSec >= eK.duration && eX(J.id, 0, eK.duration))
  });
  let {
    videoVariant: tc,
    videoAsset: tu,
    hlsRef: td
  } = function(e, t, n, r) {
    var a;
    let l = o.useRef(false),
      s = o.useRef(null),
      c = (0, T.z)(e, q.dr.VIDEO_MODAL),
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
  }(J, e1, eM, ts), tf = (0, I.CC)(tc), {
    trackQuestVideoLoadingStarted: tp,
    trackQuestVideoLoadingEnded: tm,
    trackQuestVideoProgressed: tv,
    trackQuestVideoResumed: tC,
    trackQuestVideoPaused: tg,
    trackQuestVideoFocusChange: t_,
    trackQuestContentClick: tE,
    trackQuestVideoBufferingStarted: tS,
    trackQuestVideoBufferingEnded: tO,
    trackWatchTimeAnalytics: tb,
    trackQuestVideoTimeToFirstFrame: th,
    trackQuestVideoFullscreenChanged: ty,
    trackQuestVideoError: tj,
    trackQuestVideoVolumeChanged: tx
  } = (0, U.Z)({
    quest: J,
    videoRef: e1,
    hlsRef: td,
    videoSessionId: et,
    videoAssetId: tf,
    sourceQuestContent: ei,
    logger: ta
  }), tT = o.useCallback(() => {
    var e, t;
    return null != (t = null == (e = e1.current) ? true : e.currentTime) ? t : null
  }, []), {
    forceSendCurrentSegment: tP
  } = (0, R.Z)({
    getCurrentVideoTime: tT,
    isPlaying: eS === B.rq.PLAYING,
    isMetadataLoaded: e9,
    isInitialSeekComplete: te,
    onAnalytics: tb,
    emitIntervalMs: 4e3,
    minSegmentDurationMs: 2e3
  }), tD = o.useCallback(e => {
    if (ta.info("[QV] | updatePlayerState | playerState: ".concat(e)), eO(e), null != e1.current) switch (e) {
      case B.rq.PLAYING:
        e1.current.paused && tC(e7), e3(null), e1.current.play();
        break;
      case B.rq.PAUSED:
        e1.current.paused || tP(), e1.current.pause(), eY.current = false;
        break;
      case B.rq.ENDED:
        tP(), eu(false)
    }
  }, [tC, e7, tP, eu, ta]);
  o.useEffect(() => {
    tg(e7)
  }, [e7, tg]), o.useEffect(() => {
    eC && t_(ev, eS)
  }, [ev, eC, eS, t_]);
  let tR = o.useCallback(e => {
    var t;
    e4 || (null == (t = J.userStatus) ? true : t.enrolledAt) == null || (ta.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, h.FI)(J, e)), tv()
  }, [e4, J, ta, tv]);
  o.useEffect(() => {
    eo !== m.Dvm.HIDDEN && eo !== m.Dvm.EXITING && eo !== m.Dvm.EXITED && (null == eo || !e_ || eg || e4) && (!eC || ev || e4) || null == e1.current || eS !== B.rq.PLAYING || (ta.info("[QV] | Pausing video | playerState: ".concat(eS, ", parentTransitionState: ").concat(eo, ", visible: ").concat(eg, ", focused: ").concat(ev, ", isQuestCompleted: ").concat(e4)), tD(B.rq.PAUSED), e4 || e3(j.yE.LOST_FOCUS))
  }, [eo, ev, eC, eg, e_, eS, e4, tD, tR, ta]);
  let [tI, tk] = o.useState(false), tN = o.useRef(null), tw = o.useRef(performance.now()), tA = o.useCallback(() => {
    null != tN.current && clearTimeout(tN.current), eS === B.rq.PLAYING && (tN.current = setTimeout(() => {
      eS === B.rq.PLAYING && tk(true)
    }, Math.max(0, 3e3 - (performance.now() - tw.current))))
  }, [eS]), tL = () => {
    tk(false), tw.current = performance.now(), tA()
  };
  o.useEffect(() => {
    if (eS !== B.rq.PLAYING) {
      tk(false), null != tN.current && clearTimeout(tN.current);
      return
    }
    return tA(), () => {
      null != tN.current && clearTimeout(tN.current)
    }
  }, [eS, tA]);
  let tM = !tI && (ey || eb || eS === B.rq.ENDED),
    tB = o.useCallback(() => {
      var e;
      ta.info("[QV] | handleFullScreenExit");
      let t = (0, O.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
      null == t || (0, O.rB)(t) || (t.removeEventListener(O.NO, tB), em(false), ty(false))
    }, [em, ta, ty]),
    tV = () => {
      if (null == e1.current) return;
      let e = Math.max(e1.current.currentTime - 10, 0);
      ta.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tZ(e), eS === B.rq.ENDED && tD(B.rq.PAUSED), tE(j.jn.VIDEO_MODAL, b.jZ.SEEK_BACKWARD)
    },
    tF = () => {
      if (null == e1.current || !t8) return;
      let e = Math.min(e1.current.currentTime + 10, to);
      ta.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tZ(e), eS !== B.rq.ENDED && e >= e1.current.duration && tD(B.rq.ENDED), tE(j.jn.VIDEO_MODAL, b.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e1.current;
    return () => {
      let t = (0, O.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(O.NO, tB)
    }
  }, [tB]);
  let tZ = o.useCallback(e => {
      null != e1.current && (ta.info("[QV] | seekTimeline | timeSec: ".concat(e)), tP(), eR(true), tt(false), e1.current.currentTime = e, eX(J.id, e, e1.current.duration))
    }, [e1, eX, J.id, tP, ta]),
    tU = () => {
      if (null != e1.current) switch (ta.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eS)), eS) {
        case B.rq.ENDED:
          tZ(0), tD(B.rq.PLAYING);
          break;
        case B.rq.PLAYING:
          tD(B.rq.PAUSED), e3(j.yE.PAUSE_BUTTON);
          break;
        default:
          tD(B.rq.PLAYING)
      }
    },
    tq = e => {
      tr(e)
    },
    tH = e => {
      tr(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tG = o.useCallback(() => {
      if (null == e1.current || (ta.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e1.current.textTracks.length)), 0 === e1.current.textTracks.length)) return;
      let e = e1.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, V.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tq(n), n.onexit = () => tH(n))
        }
    }, [e1, ta]);
  o.useEffect(() => {
    if (null == e2.current) return;
    let e = e2.current;
    return e.addEventListener("load", tG), () => {
      null != e && e.removeEventListener("load", tG)
    }
  }, [e2, tG]);
  let tQ = o.useCallback(e => {
      var t;
      ta.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e1.current) ? true : t.currentTime, ", videoAssetId: ").concat(tf, ", connectionSpeed: ").concat(eM)), tj(e)
    }, [eM, tj, e1, tf, ta]),
    tY = e => {
      ta.info("[QV] | handleCanPlay: playerState: ".concat(eS)), null != e1.current && eS === B.rq.PLAYING && (ta.info("[QV] | handleCanPlay: did NOT early return"), eI && (ta.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eI)), ek(false)), eN && (ta.info("[QV] | handleCanPlay: waitingForChunk: ".concat(eN)), tO(null != ez.current ? performance.now() - ez.current : null), ew(false)), ta.info("[QV] | handleCanPlay: updating player state to playing"), tD(B.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eD) return;
    let e = setTimeout(() => {
      eR(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eD]);
  let [{
    controlBarAnimSpring: tW
  }, tz] = (0, m.q_F)(() => ({
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
  })), tK = (0, o.useRef)(null), [{
    captionHeightSpring: tX
  }, t$] = (0, m.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: z
  }));
  o.useEffect(() => {
    var e, t;
    return t$({
      captionHeightSpring: ed && null != tn && null != (t = null == (e = tK.current) ? true : e.clientHeight) ? t : 0,
      immediate: e0
    }), () => {
      tX.stop()
    }
  }, [ed, t$, e0, tn, tX]), o.useEffect(() => (tz({
    controlBarAnimSpring: tM || eq ? 1 : 0,
    immediate: e0
  }), () => {
    tW.stop()
  }), [tM, tz, e0, eq, tW]);
  let tJ = eS === B.rq.ENDED,
    t0 = o.useCallback(async e => {
      if (ep) {
        var t;
        let e = (0, O.fn)(null == (t = e1.current) ? true : t.parentNode, e1.current);
        null != e && (e.removeEventListener(O.NO, tB), (0, O.Pr)(e), em(false), ty(false))
      }
      if (tE(e, b.jZ.LEARN_MORE), J.id === q.V6) return void window.open(S.Z.getArticleURL(H.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      if (null != el) {
        let e = k.r.build(J.config).application.link;
        await (0, V.qP)(e) && el()
      }(0, h.nc)(J, {
        content: e,
        ctaContent: b.jZ.OPEN_GAME_LINK,
        sourceQuestContent: ei
      })
    }, [tE, J, el, ep, e1, tB, em, ty, ei]),
    t1 = o.useMemo(() => (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [J]),
    t2 = o.useMemo(() => (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [J]),
    t8 = e4 || eK.maxTimestampSec >= (null != (N = null == (a = e1.current) ? true : a.currentTime) ? N : 0) + 1,
    t4 = o.useMemo(() => null === (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.TRANSCRIPT), [J]);
  return (0, r.jsx)(m.P3F, {
    className: Y.videoCont,
    "data-fullscreen": ep,
    tabIndex: false,
    onMouseEnter: () => {
      eh(true), tk(false), tw.current = performance.now(), null != tN.current && clearTimeout(tN.current)
    },
    onMouseLeave: () => {
      eh(false), tk(false)
    },
    onMouseMove: tL,
    onKeyDown: tL,
    children: (0, r.jsxs)("div", {
      className: l()(Y.videoContInnerRelative, {
        [Y.videoContInnerRelativePortrait]: "portrait" === es,
        [Y.videoContInnerRelativeLandscape]: "landscape" === es
      }),
      children: [tJ && (() => {
        if (!(0, D.e)({
            location: q.dr.VIDEO_MODAL
          })) return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(X, {
            quest: J,
            shouldShow: tJ,
            sourceQuestContent: ei
          }), (0, r.jsx)("div", {
            className: Y.videoContOverlay
          }), (0, r.jsx)($, {
            title: tl,
            subtitle: ti,
            icon: m.d4D,
            className: Y.endScreenPanelRight,
            onClick: () => t0(j.jn.VIDEO_MODAL)
          })]
        });
        {
          var e, t, n;
          let o = J.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
          return (0, r.jsx)(A.Z, {
            quest: J,
            title: null != (e = null == o ? true : o.messages.videoEndCtaTitle) ? e : Q.intl.string(Q.t.Ka526u),
            subtitle: null != (t = null == o ? true : o.messages.videoEndCtaSubtitle) ? t : Q.intl.string(Q.t.tKMcAg),
            ctaBtnLabel: null != (n = null == o ? true : o.messages.videoEndCtaButtonLabel) ? n : Q.intl.string(Q.t.iiTtpK),
            onCTAClick: () => t0(j.jn.VIDEO_MODAL_END_CARD),
            sourceQuestContent: ei
          })
        }
      })(), (0, r.jsxs)(g.Z, {
        ref: e => {
          e1.current = e, eE.current = e
        },
        autoPlay: er,
        playsInline: true,
        mediaLayoutType: ep ? G.hV.STATIC : G.hV.RESPONSIVE,
        className: l()({
          [Y.hidden]: tJ,
          [Y.videoInner]: true
        }),
        controls: false,
        poster: null == t1 ? true : t1.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e1.current && (e1.current.currentTime >= eV && (ta.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e1.current.currentTime)), eF(e1.current.currentTime + 6 + 2 * Math.random()), tR(e1.current.currentTime)), e1.current.currentTime >= eZ && (eU(e1.current.currentTime + 1), (0, y.qm)(J.id, ex.taskType, e1.current.currentTime), en(e1.current.currentTime)), eX(J.id, e1.current.currentTime, e1.current.duration), eP(e1.current.currentTime / e1.current.duration * 100))
        },
        onEnded: e => {
          null != e1.current && (tR(e1.current.duration + 1), ta.info("[QV] | handleEnded: sending progress update: ".concat(e1.current.duration + 1)), eX(J.id, e1.current.duration, e1.current.duration)), tD(B.rq.ENDED), ew(false)
        },
        onLoadedData: e => {
          ta.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eI)), eI && (tm(null != eW.current ? performance.now() - eW.current : null), ek(false), null != td.current && (td.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e1.current && (ta.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tf)), e5(true), tc !== I.n1.VIDEO_HLS && tZ(ts), e$ ? e1.current.volume = 0 : e1.current.volume = eJ)
        },
        onLoadStart: () => {
          eW.current = performance.now(), tp(eM), ta.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eW.current))
        },
        onPlaying: () => {
          if (!eY.current) return;
          let e = performance.now() - ea;
          ta.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), th(e), eY.current = false
        },
        onWaiting: e => {
          ez.current = performance.now(), ta.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(ez.current)), tS(), ew(true)
        },
        onProgress: e => {
          if (null == e1.current) return;
          ta.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e1.current.buffered.length));
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
        onCanPlay: tY,
        onCanPlayThrough: tY,
        onSeeked: () => {
          ta.info("[QV] | handleSeeked"), tt(true)
        },
        onAbort: () => tQ(B.CY.ABORT),
        onError: () => tQ(B.CY.ERROR),
        onEmptied: () => tQ(B.CY.EMPTIED),
        onStalled: () => tQ(B.CY.STALLED),
        onClick: () => {
          ta.info("[QV] | handleVideoClick"), tU()
        },
        crossOrigin: "anonymous",
        children: [null != t2 && (0, r.jsx)("track", {
          ref: e2,
          src: t2.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tu && tc !== I.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => tQ(B.CY.SOURCE_ERROR),
          src: tu.url,
          type: tu.mimetype
        })]
      }), (eI || eN) && eS === B.rq.PLAYING && (0, r.jsx)(m.$jN, {
        type: m.$jN.Type.WANDERING_CUBES,
        className: Y.loadingSpinner
      }), eS === B.rq.PAUSED && e7 === j.yE.LOST_FOCUS && (0, r.jsx)(K, {}), ec && eS !== B.rq.ENDED && (0, r.jsxs)(r.Fragment, {
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
            marginBottom: (0, s.to)([tW, tX], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(M.K, {
            quest: J,
            onClose: () => {
              eu(false), tE(j.jn.VIDEO_MODAL, b.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: Y.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([tW.to({
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
      }, eS), ed && null != tn && (0, r.jsx)(s.animated.div, {
        className: Y.captionContainer,
        ref: tK,
        style: {
          translateY: (0, s.to)([tW.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(m.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: Y.captionText,
          children: tn.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: Y.videoFooterCont,
        style: {
          paddingLeft: (0, s.to)([tW.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          paddingRight: (0, s.to)([tW.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          height: (0, s.to)([tW.to({
            range: [0, 1],
            output: [0, 50]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(L.Z, {
          percent: eT,
          animate: true !== e8.current && !eD,
          interactionEnabled: e4 && eG,
          backgroundColor: tM ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tM ? eA : true,
          duration: null != (F = null == (p = e1.current) ? true : p.duration) ? F : 1,
          maxSeekableTime: tM && eG ? to : true,
          onClick: e => {
            tZ(e), eS === B.rq.ENDED && tD(B.rq.PLAYING)
          },
          onScrubBack: () => {
            tV()
          },
          onScrubForward: () => {
            tF()
          }
        }), (0, r.jsx)(s.animated.div, {
          className: Y.videoControlsCont,
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
          onFocus: () => ej(true),
          onBlur: () => ej(false),
          children: (0, r.jsx)(w.Z, {
            videoRef: e1,
            videoTask: ee,
            playerState: eS,
            animSpring: tW,
            visible: tM,
            seekForwardEnabled: t8,
            hideCaptionBtn: null == t2,
            hideTranscriptBtn: t4,
            handlePlaybackBtnClick: tU,
            handleTranscriptBtnClick: () => {
              ec || null != e6 && e6.questId === J.id && e6.fetchStatus !== x.iF.NONE && e6.fetchStatus !== x.iF.FAILURE || (0, y.lL)(J, u.X.WATCH_VIDEO), eu(!ec), tE(j.jn.VIDEO_MODAL, ec ? b.jZ.TRANSCRIPT_DISABLE : b.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ef(!ed), tE(j.jn.VIDEO_MODAL, ed ? b.jZ.CLOSED_CAPTIONING_DISABLE : b.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ep;
              ta.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, O.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
              t && null != n ? ((0, O.Dj)(n), n.addEventListener(O.NO, tB), ty(true)) : t || null == n || (n.removeEventListener(O.NO, tB), ty(false), (0, O.Pr)(n)), em(t)
            },
            handleSeekBackBtnClick: tV,
            handleSeekForwardBtnClick: tF,
            handleControlBarPendingInteraction: eH,
            onVolumeChange: tx
          })
        })]
      })]
    })
  })
}