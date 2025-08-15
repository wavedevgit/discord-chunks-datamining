/** Chunk was on 32249 **/
/** chunk id: 963123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk10106 = require("./10106.js"),
  Chunk815061 = require("./815061.js"),
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
let G = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]),
  K = {
    tension: 250,
    friction: 5,
    clamp: true
  };

function W() {
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
    sourceQuestContent: o
  } = e, a = l.useMemo(() => (0, N.z0)(t, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [t]);
  return null == a ? null : (0, r.jsx)(k.A, {
    questOrQuests: t,
    questContent: y.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: o,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: a.url,
      alt: "Video thumbnail",
      className: i()(z.stillFrameImageCard, {
        [z.stillFrameImageCardHidden]: !n
      })
    })
  })
}

function $(e) {
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
    className: i()(z.endScreenPanel, z.accentOnHover, s),
    onMouseEnter: d,
    onMouseLeave: m,
    onFocus: d,
    onBlur: m,
    onClick: a,
    children: (0, r.jsxs)("div", {
      className: z.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: z.endScreenPanelTextCont,
        children: [(0, r.jsx)(f.X6q, {
          variant: "heading-md/semibold",
          className: z.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(f.X6q, {
          variant: "heading-sm/normal",
          className: z.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(Z.Z, {
        color: "#747783"
      }), (0, r.jsx)(o, {
        size: "md",
        color: c ? "#FFFFFF" : "#B5BAC1",
        className: z.endScreenIcon
      })]
    })
  })
}

function J(e) {
  var t, n, o, p, O, k, Z;
  let {
    quest: J,
    videoTask: ee,
    videoSessionId: et,
    onOptimisticProgressUpdate: en,
    autoplay: er,
    parentTransitionState: el,
    performanceClockStartTime: eo,
    onClose: ei,
    sourceQuestContent: ea,
    orientation: es
  } = e, ec = (0, x.km)(e => e.transcriptEnabled), eu = (0, x.km)(e => e.setTranscriptEnabled), ed = (0, x.km)(e => e.captionEnabled), em = (0, x.km)(e => e.setCaptionEnabled), ep = (0, x.km)(e => e.fullScreenEnabled), ef = (0, x.km)(e => e.setFullScreenEnabled), {
    focused: ev,
    focusedChanged: eE
  } = (0, F.xU)(), {
    visible: eg,
    visibleChanged: eO,
    targetRef: eb
  } = (0, F.Yy)(), [eC, eS] = l.useState(true === er ? V.rq.PLAYING : V.rq.PAUSED), [eh, e_] = l.useState(false), [ej, ey] = l.useState(false), ex = (0, _.il)(J), [eT, eD] = l.useState(ex.percentComplete), [eR, eP] = l.useState(false), [eN, eI] = l.useState(true), [ek, eA] = l.useState(false), [ew, eL] = l.useState([]), [eM, eV] = l.useState(b.Z.getEffectiveConnectionSpeed()), [eB, eZ] = l.useState(0), [eF, eU] = l.useState(0), [eq, eY] = l.useState(false), [eH, eQ] = l.useState(false), ez = l.useRef(true), eG = l.useRef(null), eK = l.useRef(null), eW = (0, x.km)(e => {
    var t;
    return null != (t = e.videoProgress[J.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), eX = (0, x.km)(e => e.setVideoProgress), e$ = (0, x.km)(e => e.muted), eJ = (0, x.km)(e => e.volume), e0 = (0, m.e7)([E.Z], () => E.Z.useReducedMotion), e1 = (0, l.useRef)(null), e2 = (0, l.useRef)(null), e8 = l.useRef(true), e4 = (null == (t = J.userStatus) ? true : t.completedAt) != null, e6 = (0, x.km)(e => e.transcript), [e7, e3] = l.useState(null), [e9, e5] = l.useState(false), [te, tt] = l.useState(false), [tn, tr] = l.useState(null), tl = e4 ? null != (O = null == (n = e1.current) ? true : n.duration) ? O : 0 : Math.max(eW.maxTimestampSec, ex.progressSeconds), to = l.useMemo(() => (0, D.T)({
    quest: J,
    location: q.dr.VIDEO_MODAL
  }), [J]), {
    title: ti,
    subtitle: ta
  } = function(e) {
    var t, n, r, l;
    let o = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
      i = null != (t = null == o ? true : o.messages.videoEndCtaTitle) ? t : Q.intl.string(Q.t.iiTtpK),
      a = null != (r = null != (n = null == o ? true : o.messages.videoEndCtaButtonLabel) ? n : null == o ? true : o.messages.videoEndCtaSubtitle) ? r : Q.intl.string(Q.t.mxaHf3),
      s = (0, _.B2)(e.config),
      c = null != (l = null == o ? true : o.messages.videoEndCtaSubtitle) ? l : Q.intl.string(Q.t.mxaHf3),
      m = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
    return {
      title: m ? s : i,
      subtitle: m ? c : a
    }
  }(J), ts = e4 ? eW.timestampSec >= eW.duration ? 0 : eW.timestampSec : Math.max(eW.timestampSec, ex.progressSeconds);
  (0, v.Ng)(() => {
    e8.current && (e8.current = false, eV(b.Z.getEffectiveConnectionSpeed()), e4 && eW.timestampSec >= eW.duration && eX(J.id, 0, eW.duration))
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
      m = l.useMemo(() => null != d ? c && a.ZP.isSupported() && null != d.videoHls ? N.n1.VIDEO_HLS : G.has(n) || null == d.videoLowRes ? N.n1.VIDEO : N.n1.VIDEO_LOW_RES : null, [d, n, c]),
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
  }(J, e1, eM, ts), tm = (0, N.CC)(tc), {
    trackQuestVideoLoadingStarted: tp,
    trackQuestVideoLoadingEnded: tf,
    trackQuestVideoProgressed: tv,
    trackQuestVideoResumed: tE,
    trackQuestVideoPaused: tg,
    trackQuestVideoFocusChange: tO,
    trackQuestContentClick: tb,
    trackQuestVideoBufferingStarted: tC,
    trackQuestVideoBufferingEnded: tS,
    trackWatchTimeAnalytics: th,
    trackQuestVideoTimeToFirstFrame: t_,
    trackQuestVideoFullscreenChanged: tj,
    trackQuestVideoError: ty,
    trackQuestVideoVolumeChanged: tx
  } = (0, U.Z)({
    quest: J,
    videoRef: e1,
    hlsRef: td,
    videoSessionId: et,
    videoAssetId: tm,
    sourceQuestContent: ea,
    logger: to
  }), tT = l.useCallback(() => {
    var e, t;
    return null != (t = null == (e = e1.current) ? true : e.currentTime) ? t : null
  }, []), {
    forceSendCurrentSegment: tD
  } = (0, P.Z)({
    getCurrentVideoTime: tT,
    isPlaying: eC === V.rq.PLAYING,
    isMetadataLoaded: e9,
    isInitialSeekComplete: te,
    onAnalytics: th,
    emitIntervalMs: 4e3,
    minSegmentDurationMs: 2e3
  }), tR = l.useCallback(e => {
    if (to.info("[QV] | updatePlayerState | playerState: ".concat(e)), eS(e), null != e1.current) switch (e) {
      case V.rq.PLAYING:
        e1.current.paused && tE(e7), e3(null), e1.current.play();
        break;
      case V.rq.PAUSED:
        e1.current.paused || tD(), e1.current.pause(), ez.current = false;
        break;
      case V.rq.ENDED:
        tD(), eu(false)
    }
  }, [tE, e7, tD, eu, to]);
  l.useEffect(() => {
    tg(e7)
  }, [e7, tg]), l.useEffect(() => {
    eE && tO(ev, eC)
  }, [ev, eE, eC, tO]);
  let tP = l.useCallback(e => {
    var t;
    e4 || (null == (t = J.userStatus) ? true : t.enrolledAt) == null || (to.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, _.FI)(J, e)), tv()
  }, [e4, J, to, tv]);
  l.useEffect(() => {
    el !== f.Dvm.HIDDEN && el !== f.Dvm.EXITING && el !== f.Dvm.EXITED && (null == el || !eO || eg || e4) && (!eE || ev || e4) || null == e1.current || eC !== V.rq.PLAYING || (to.info("[QV] | Pausing video | playerState: ".concat(eC, ", parentTransitionState: ").concat(el, ", visible: ").concat(eg, ", focused: ").concat(ev, ", isQuestCompleted: ").concat(e4)), tR(V.rq.PAUSED), e4 || e3(y.yE.LOST_FOCUS))
  }, [el, ev, eE, eg, eO, eC, e4, tR, tP, to]);
  let [tN, tI] = l.useState(false), tk = l.useRef(null), tA = l.useRef(performance.now()), tw = l.useCallback(() => {
    null != tk.current && clearTimeout(tk.current), eC === V.rq.PLAYING && (tk.current = setTimeout(() => {
      eC === V.rq.PLAYING && tI(true)
    }, Math.max(0, 3e3 - (performance.now() - tA.current))))
  }, [eC]), tL = () => {
    tI(false), tA.current = performance.now(), tw()
  };
  l.useEffect(() => {
    if (eC !== V.rq.PLAYING) {
      tI(false), null != tk.current && clearTimeout(tk.current);
      return
    }
    return tw(), () => {
      null != tk.current && clearTimeout(tk.current)
    }
  }, [eC, tw]);
  let tM = !tN && (ej || eh || eC === V.rq.ENDED),
    tV = l.useCallback(() => {
      var e;
      to.info("[QV] | handleFullScreenExit");
      let t = (0, S.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
      null == t || (0, S.rB)(t) || (t.removeEventListener(S.NO, tV), ef(false), tj(false))
    }, [ef, to, tj]),
    tB = () => {
      if (null == e1.current) return;
      let e = Math.max(e1.current.currentTime - 10, 0);
      to.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tF(e), eC === V.rq.ENDED && tR(V.rq.PAUSED), tb(y.jn.VIDEO_MODAL, h.jZ.SEEK_BACKWARD)
    },
    tZ = () => {
      if (null == e1.current || !t8) return;
      let e = Math.min(e1.current.currentTime + 10, tl);
      to.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tF(e), eC !== V.rq.ENDED && e >= e1.current.duration && tR(V.rq.ENDED), tb(y.jn.VIDEO_MODAL, h.jZ.SEEK_FORWARD)
    };
  l.useEffect(() => {
    let e = e1.current;
    return () => {
      let t = (0, S.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(S.NO, tV)
    }
  }, [tV]);
  let tF = l.useCallback(e => {
      null != e1.current && (to.info("[QV] | seekTimeline | timeSec: ".concat(e)), tD(), eP(true), tt(false), e1.current.currentTime = e, eX(J.id, e, e1.current.duration))
    }, [e1, eX, J.id, tD, to]),
    tU = () => {
      if (null != e1.current) switch (to.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eC)), eC) {
        case V.rq.ENDED:
          tF(0), tR(V.rq.PLAYING);
          break;
        case V.rq.PLAYING:
          tR(V.rq.PAUSED), e3(y.yE.PAUSE_BUTTON);
          break;
        default:
          tR(V.rq.PLAYING)
      }
    },
    tq = e => {
      tr(e)
    },
    tY = e => {
      tr(t => (null == t ? true : t.id) === e.id ? null : t)
    },
    tH = l.useCallback(() => {
      if (null == e1.current || (to.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e1.current.textTracks.length)), 0 === e1.current.textTracks.length)) return;
      let e = e1.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, B.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tq(n), n.onexit = () => tY(n))
        }
    }, [e1, to]);
  l.useEffect(() => {
    if (null == e2.current) return;
    let e = e2.current;
    return e.addEventListener("load", tH), () => {
      null != e && e.removeEventListener("load", tH)
    }
  }, [e2, tH]);
  let tQ = l.useCallback(e => {
      var t;
      to.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e1.current) ? true : t.currentTime, ", videoAssetId: ").concat(tm, ", connectionSpeed: ").concat(eM)), ty(e)
    }, [eM, ty, e1, tm, to]),
    tz = e => {
      to.info("[QV] | handleCanPlay: playerState: ".concat(eC)), null != e1.current && eC === V.rq.PLAYING && (to.info("[QV] | handleCanPlay: did NOT early return"), eN && (to.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eN)), eI(false)), ek && (to.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ek)), tS(null != eK.current ? performance.now() - eK.current : null), eA(false)), to.info("[QV] | handleCanPlay: updating player state to playing"), tR(V.rq.PLAYING))
    };
  l.useEffect(() => {
    if (!eR) return;
    let e = setTimeout(() => {
      eP(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eR]);
  let [{
    controlBarAnimSpring: tG
  }, tK] = (0, f.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: K,
    onStart: () => {
      eQ(false)
    },
    onRest: e => {
      1 === e.value && eQ(true)
    }
  })), tW = (0, l.useRef)(null), [{
    captionHeightSpring: tX
  }, t$] = (0, f.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: K
  }));
  l.useEffect(() => {
    var e, t;
    return t$({
      captionHeightSpring: ed && null != tn && null != (t = null == (e = tW.current) ? true : e.clientHeight) ? t : 0,
      immediate: e0
    }), () => {
      tX.stop()
    }
  }, [ed, t$, e0, tn, tX]), l.useEffect(() => (tK({
    controlBarAnimSpring: tM || eq ? 1 : 0,
    immediate: e0
  }), () => {
    tG.stop()
  }), [tM, tK, e0, eq, tG]);
  let tJ = eC === V.rq.ENDED,
    t0 = l.useCallback(async e => {
      if (ep) {
        var t;
        let e = (0, S.fn)(null == (t = e1.current) ? true : t.parentNode, e1.current);
        null != e && (e.removeEventListener(S.NO, tV), (0, S.Pr)(e), ef(false), tj(false))
      }
      if (tb(e, h.jZ.LEARN_MORE), J.id === q.V6) return void window.open(C.Z.getArticleURL(Y.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      if (null != ei) {
        let e = I.r.build(J.config).application.link;
        await (0, B.qP)(e) && ei()
      }(0, _.nc)(J, {
        content: e,
        ctaContent: h.jZ.OPEN_GAME_LINK,
        sourceQuestContent: ea
      })
    }, [tb, J, ei, ep, e1, tV, ef, tj, ea]),
    t1 = l.useMemo(() => (0, N.z0)(J, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.THUMBNAIL), [J]),
    t2 = l.useMemo(() => (0, N.z0)(J, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.CAPTION), [J]),
    t8 = e4 || eW.maxTimestampSec >= (null != (k = null == (o = e1.current) ? true : o.currentTime) ? k : 0) + 1,
    t4 = l.useMemo(() => null === (0, N.z0)(J, u.X.WATCH_VIDEO, N.n1.VIDEO, N.O.TRANSCRIPT), [J]);
  return (0, r.jsx)(f.P3F, {
    className: z.videoCont,
    "data-fullscreen": ep,
    tabIndex: false,
    onMouseEnter: () => {
      e_(true), tI(false), tA.current = performance.now(), null != tk.current && clearTimeout(tk.current)
    },
    onMouseLeave: () => {
      e_(false), tI(false)
    },
    onMouseMove: tL,
    onKeyDown: tL,
    children: (0, r.jsxs)("div", {
      className: i()(z.videoContInnerRelative, {
        [z.videoContInnerRelativePortrait]: "portrait" === es,
        [z.videoContInnerRelativeLandscape]: "landscape" === es
      }),
      children: [tJ && (() => {
        if (!(0, R.e)({
            location: q.dr.VIDEO_MODAL
          })) return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(X, {
            quest: J,
            shouldShow: tJ,
            sourceQuestContent: ea
          }), (0, r.jsx)("div", {
            className: z.videoContOverlay
          }), (0, r.jsx)($, {
            title: ti,
            subtitle: ta,
            icon: f.d4D,
            className: z.endScreenPanelRight,
            onClick: () => t0(y.jn.VIDEO_MODAL)
          })]
        });
        {
          var e, t, n;
          let l = J.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
          return (0, r.jsx)(w.Z, {
            quest: J,
            title: null != (e = null == l ? true : l.messages.videoEndCtaTitle) ? e : Q.intl.string(Q.t.Ka526u),
            subtitle: null != (t = null == l ? true : l.messages.videoEndCtaSubtitle) ? t : Q.intl.string(Q.t.tKMcAg),
            ctaBtnLabel: null != (n = null == l ? true : l.messages.videoEndCtaButtonLabel) ? n : Q.intl.string(Q.t.iiTtpK),
            onCTAClick: () => t0(y.jn.VIDEO_MODAL_END_CARD),
            sourceQuestContent: ea
          })
        }
      })(), (0, r.jsxs)(g.Z, {
        ref: e => {
          e1.current = e, eb.current = e
        },
        autoPlay: er,
        playsInline: true,
        mediaLayoutType: ep ? H.hV.STATIC : H.hV.RESPONSIVE,
        className: i()({
          [z.hidden]: tJ,
          [z.videoInner]: true
        }),
        controls: false,
        poster: null == t1 ? true : t1.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e1.current && (e1.current.currentTime >= eB && (to.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e1.current.currentTime)), eZ(e1.current.currentTime + 6 + 2 * Math.random()), tP(e1.current.currentTime)), e1.current.currentTime >= eF && (eU(e1.current.currentTime + 1), (0, j.qm)(J.id, ex.taskType, e1.current.currentTime), en(e1.current.currentTime)), eX(J.id, e1.current.currentTime, e1.current.duration), eD(e1.current.currentTime / e1.current.duration * 100))
        },
        onEnded: e => {
          null != e1.current && (tP(e1.current.duration + 1), to.info("[QV] | handleEnded: sending progress update: ".concat(e1.current.duration + 1)), eX(J.id, e1.current.duration, e1.current.duration)), tR(V.rq.ENDED), eA(false)
        },
        onLoadedData: e => {
          to.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eN)), eN && (tf(null != eG.current ? performance.now() - eG.current : null), eI(false), null != td.current && (td.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e1.current && (to.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tm)), e5(true), tc !== N.n1.VIDEO_HLS && tF(ts), e$ ? e1.current.volume = 0 : e1.current.volume = eJ)
        },
        onLoadStart: () => {
          eG.current = performance.now(), tp(eM), to.info("[QV] | handleLoadStart | loadingStartTime: ".concat(eG.current))
        },
        onPlaying: () => {
          if (!ez.current) return;
          let e = performance.now() - eo;
          to.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), t_(e), ez.current = false
        },
        onWaiting: e => {
          eK.current = performance.now(), to.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eK.current)), tC(), eA(true)
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
        onCanPlay: tz,
        onCanPlayThrough: tz,
        onSeeked: () => {
          to.info("[QV] | handleSeeked"), tt(true)
        },
        onAbort: () => tQ(V.CY.ABORT),
        onError: () => tQ(V.CY.ERROR),
        onEmptied: () => tQ(V.CY.EMPTIED),
        onStalled: () => tQ(V.CY.STALLED),
        onClick: () => {
          to.info("[QV] | handleVideoClick"), tU()
        },
        crossOrigin: "anonymous",
        children: [null != t2 && (0, r.jsx)("track", {
          ref: e2,
          src: t2.url,
          label: "English",
          kind: "captions",
          srcLang: "en",
          default: true
        }), null != tu && tc !== N.n1.VIDEO_HLS && (0, r.jsx)("source", {
          onError: () => tQ(V.CY.SOURCE_ERROR),
          src: tu.url,
          type: tu.mimetype
        })]
      }), (eN || ek) && eC === V.rq.PLAYING && (0, r.jsx)(f.$jN, {
        type: f.$jN.Type.WANDERING_CUBES,
        className: z.loadingSpinner
      }), eC === V.rq.PAUSED && e7 === y.yE.LOST_FOCUS && (0, r.jsx)(W, {}), ec && eC !== V.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.P3F, {
          onClick: () => eu(false),
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: z.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: i()(z.transcriptCont, {
            [z.transcriptContPortrait]: "portrait" === es
          }),
          style: {
            marginBottom: (0, s.to)([tG, tX], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(M.K, {
            quest: J,
            onClose: () => {
              eu(false), tb(y.jn.VIDEO_MODAL, h.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: z.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([tG.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: i()(z.playPausePopCont, {
          [z.play]: eC === V.rq.PLAYING,
          [z.pause]: eC === V.rq.PAUSED
        }),
        children: eC === V.rq.PLAYING ? (0, r.jsx)(f.o1U, {
          className: z.playPausePopIcon
        }) : (0, r.jsx)(f.fpf, {
          className: z.playPausePopIcon
        })
      }, eC), ed && null != tn && (0, r.jsx)(s.animated.div, {
        className: z.captionContainer,
        ref: tW,
        style: {
          translateY: (0, s.to)([tG.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(f.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: z.captionText,
          children: tn.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: z.videoFooterCont,
        style: {
          paddingLeft: (0, s.to)([tG.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          paddingRight: (0, s.to)([tG.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          height: (0, s.to)([tG.to({
            range: [0, 1],
            output: [0, 50]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(L.Z, {
          percent: eT,
          animate: true !== e8.current && !eR,
          interactionEnabled: e4 && eH,
          backgroundColor: tM ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tM ? ew : true,
          duration: null != (Z = null == (p = e1.current) ? true : p.duration) ? Z : 1,
          maxSeekableTime: tM && eH ? tl : true,
          onClick: e => {
            tF(e), eC === V.rq.ENDED && tR(V.rq.PLAYING)
          },
          onScrubBack: () => {
            tB()
          },
          onScrubForward: () => {
            tZ()
          }
        }), (0, r.jsx)(s.animated.div, {
          className: z.videoControlsCont,
          style: {
            paddingTop: (0, s.to)([tG.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([tG.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([tG.to({
              range: [0, 1],
              output: [0, 1]
            })], e => e < .3 ? "none" : "auto")
          },
          onFocus: () => ey(true),
          onBlur: () => ey(false),
          children: (0, r.jsx)(A.Z, {
            videoRef: e1,
            videoTask: ee,
            playerState: eC,
            animSpring: tG,
            visible: tM,
            seekForwardEnabled: t8,
            hideCaptionBtn: null == t2,
            hideTranscriptBtn: t4,
            handlePlaybackBtnClick: tU,
            handleTranscriptBtnClick: () => {
              ec || null != e6 && e6.questId === J.id && e6.fetchStatus !== x.iF.NONE && e6.fetchStatus !== x.iF.FAILURE || (0, j.lL)(J, u.X.WATCH_VIDEO), eu(!ec), tb(y.jn.VIDEO_MODAL, ec ? h.jZ.TRANSCRIPT_DISABLE : h.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              em(!ed), tb(y.jn.VIDEO_MODAL, ed ? h.jZ.CLOSED_CAPTIONING_DISABLE : h.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !ep;
              to.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, S.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
              t && null != n ? ((0, S.Dj)(n), n.addEventListener(S.NO, tV), tj(true)) : t || null == n || (n.removeEventListener(S.NO, tV), tj(false), (0, S.Pr)(n)), ef(t)
            },
            handleSeekBackBtnClick: tB,
            handleSeekForwardBtnClick: tZ,
            handleControlBarPendingInteraction: eY,
            onVolumeChange: tx
          })
        })]
      })]
    })
  })
}