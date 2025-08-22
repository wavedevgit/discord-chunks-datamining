/** Chunk was on 32249 **/
/** chunk id: 963123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk10106 = require("./10106.js"),
  Chunk202841 = require("./202841.js"),
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
let z = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]),
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
    sourceQuestContent: l
  } = e, i = o.useMemo(() => (0, I.z0)(t, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [t]);
  return null == i ? null : (0, r.jsx)(k.A, {
    questOrQuests: t,
    questContent: j.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: l,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: i.url,
      alt: "Video thumbnail",
      className: a()(Q.stillFrameImageCard, {
        [Q.stillFrameImageCardHidden]: !n
      })
    })
  })
}

function $(e) {
  let {
    title: t,
    subtitle: n,
    icon: l,
    onClick: i,
    className: s
  } = e, [c, u] = o.useState(false), d = () => {
    u(true)
  }, f = () => {
    u(false)
  };
  return (0, r.jsx)(p.P3F, {
    className: a()(Q.endScreenPanel, Q.accentOnHover, s),
    onMouseEnter: d,
    onMouseLeave: f,
    onFocus: d,
    onBlur: f,
    onClick: i,
    children: (0, r.jsxs)("div", {
      className: Q.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: Q.endScreenPanelTextCont,
        children: [(0, r.jsx)(p.X6q, {
          variant: "heading-md/semibold",
          className: Q.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(p.X6q, {
          variant: "heading-sm/normal",
          className: Q.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(F.Z, {
        color: "#747783"
      }), (0, r.jsx)(l, {
        size: "md",
        color: c ? "#FFFFFF" : "#B5BAC1",
        className: Q.endScreenIcon
      })]
    })
  })
}

function J(e) {
  var t, n, l, m, _, k, F;
  let {
    quest: J,
    videoTask: ee,
    videoSessionId: et,
    onOptimisticProgressUpdate: en,
    autoplay: er,
    parentTransitionState: eo,
    performanceClockStartTime: el,
    onClose: ea,
    sourceQuestContent: ei,
    orientation: es
  } = e, ec = (0, x.km)(e => e.transcriptEnabled), eu = (0, x.km)(e => e.setTranscriptEnabled), ed = (0, x.km)(e => e.captionEnabled), ef = (0, x.km)(e => e.setCaptionEnabled), em = (0, x.km)(e => e.fullScreenEnabled), ep = (0, x.km)(e => e.setFullScreenEnabled), {
    focused: ev,
    focusedChanged: eC
  } = (0, Z.xU)(), {
    visible: eE,
    visibleChanged: e_,
    targetRef: eg
  } = (0, Z.Yy)(), [eS, eO] = o.useState(true === er ? B.rq.PLAYING : B.rq.PAUSED), [eb, eh] = o.useState(false), [ey, ej] = o.useState(false), ex = (0, h.il)(J), [eT, eP] = o.useState(ex.percentComplete), [eD, eR] = o.useState(false), [eI, eN] = o.useState(true), [ek, eA] = o.useState(false), [eL, ew] = o.useState([]), [eM, eB] = o.useState(g.Z.getEffectiveConnectionSpeed()), [eV, eF] = o.useState(0), [eZ, eU] = o.useState(0), [eq, eH] = o.useState(false), [eY, eG] = o.useState(false), eQ = o.useRef(true), ez = o.useRef(null), eK = o.useRef(null), eW = (0, x.km)(e => {
    var t;
    return null != (t = e.videoProgress[J.id]) ? t : {
      timestampSec: 0,
      duration: 10
    }
  }, c.X), eX = (0, x.km)(e => e.setVideoProgress), e$ = (0, x.km)(e => e.muted), eJ = (0, x.km)(e => e.volume), e0 = (0, f.e7)([C.Z], () => C.Z.useReducedMotion), e1 = (0, o.useRef)(null), e2 = (0, o.useRef)(null), e8 = o.useRef(true), e4 = (null == (t = J.userStatus) ? true : t.completedAt) != null, e6 = (0, x.km)(e => e.transcript), [e7, e3] = o.useState(null), [e9, e5] = o.useState(false), [te, tt] = o.useState(false), [tn, tr] = o.useState(null), to = e4 ? null != (_ = null == (n = e1.current) ? true : n.duration) ? _ : 0 : Math.max(eW.maxTimestampSec, ex.progressSeconds), tl = o.useMemo(() => (0, P.T)({
    quest: J,
    location: q.dr.VIDEO_MODAL
  }), [J]), {
    title: ta,
    subtitle: ti
  } = function(e) {
    var t, n, r, o;
    let l = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO],
      a = null != (t = null == l ? true : l.messages.videoEndCtaTitle) ? t : G.intl.string(G.t.iiTtpK),
      i = null != (r = null != (n = null == l ? true : l.messages.videoEndCtaButtonLabel) ? n : null == l ? true : l.messages.videoEndCtaSubtitle) ? r : G.intl.string(G.t.mxaHf3),
      s = (0, h.B2)(e.config),
      c = null != (o = null == l ? true : l.messages.videoEndCtaSubtitle) ? o : G.intl.string(G.t.mxaHf3),
      f = e.config.features.includes(d.S.VIDEO_QUEST_FORCE_END_CARD_CTA_SWAP);
    return {
      title: f ? s : a,
      subtitle: f ? c : i
    }
  }(J), ts = e4 ? eW.timestampSec >= eW.duration ? 0 : eW.timestampSec : Math.max(eW.timestampSec, ex.progressSeconds);
  (0, v.Ng)(() => {
    e8.current && (e8.current = false, eB(g.Z.getEffectiveConnectionSpeed()), e4 && eW.timestampSec >= eW.duration && eX(J.id, 0, eW.duration))
  });
  let {
    videoVariant: tc,
    videoAsset: tu,
    hlsRef: td
  } = function(e, t, n, r) {
    var l;
    let a = o.useRef(false),
      s = o.useRef(null),
      c = (0, T.z)(e, q.dr.VIDEO_MODAL),
      d = null == (l = e.config.taskConfigV2.tasks[u.X.WATCH_VIDEO]) ? true : l.assets,
      f = o.useMemo(() => null != d ? c && i.ZP.isSupported() && null != d.videoHls ? I.n1.VIDEO_HLS : z.has(n) || null == d.videoLowRes ? I.n1.VIDEO : I.n1.VIDEO_LOW_RES : null, [d, n, c]),
      m = o.useMemo(() => null != f ? (0, I.z0)(e, u.X.WATCH_VIDEO, f, I.O.VIDEO) : null, [e, f]),
      p = () => {
        null != s.current && 8e5 !== s.current.config.minAutoBitrate && (s.current.config.minAutoBitrate = 8e5)
      };
    return o.useEffect(() => {
      if (f !== I.n1.VIDEO_HLS || null == m || null == t.current || a.current) return;
      s.current = new i.ZP({
        backBufferLength: 20,
        maxBufferLength: 30,
        startPosition: r,
        startFragPrefetch: true,
        startLevel: false
      }), s.current.on(i.ZP.Events.FRAG_LOADING, p), s.current.loadSource(m.url), s.current.attachMedia(t.current), a.current = true;
      let e = s.current;
      return () => {
        null != e && e.off(i.ZP.Events.FRAG_LOADING, p)
      }
    }, [m, f, t, r]), {
      videoVariant: f,
      videoAsset: m,
      hlsRef: s
    }
  }(J, e1, eM, ts), tf = (0, I.CC)(tc), {
    trackQuestVideoLoadingStarted: tm,
    trackQuestVideoLoadingEnded: tp,
    trackQuestVideoProgressed: tv,
    trackQuestVideoResumed: tC,
    trackQuestVideoPaused: tE,
    trackQuestVideoFocusChange: t_,
    trackQuestContentClick: tg,
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
    logger: tl
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
    if (tl.info("[QV] | updatePlayerState | playerState: ".concat(e)), eO(e), null != e1.current) switch (e) {
      case B.rq.PLAYING:
        e1.current.paused && tC(e7), e3(null), e1.current.play();
        break;
      case B.rq.PAUSED:
        e1.current.paused || tP(), e1.current.pause(), eQ.current = false;
        break;
      case B.rq.ENDED:
        tP(), eu(false)
    }
  }, [tC, e7, tP, eu, tl]);
  o.useEffect(() => {
    tE(e7)
  }, [e7, tE]), o.useEffect(() => {
    eC && t_(ev, eS)
  }, [ev, eC, eS, t_]);
  let tR = o.useCallback(e => {
    var t;
    e4 || (null == (t = J.userStatus) ? true : t.enrolledAt) == null || (tl.info("[QV] sendServerProgressUpdate: ".concat(e)), (0, h.FI)(J, e)), tv()
  }, [e4, J, tl, tv]);
  o.useEffect(() => {
    eo !== p.Dvm.HIDDEN && eo !== p.Dvm.EXITING && eo !== p.Dvm.EXITED && (null == eo || !e_ || eE || e4) && (!eC || ev || e4) || null == e1.current || eS !== B.rq.PLAYING || (tl.info("[QV] | Pausing video | playerState: ".concat(eS, ", parentTransitionState: ").concat(eo, ", visible: ").concat(eE, ", focused: ").concat(ev, ", isQuestCompleted: ").concat(e4)), tD(B.rq.PAUSED), e4 || e3(j.yE.LOST_FOCUS))
  }, [eo, ev, eC, eE, e_, eS, e4, tD, tR, tl]);
  let [tI, tN] = o.useState(false), tk = o.useRef(null), tA = o.useRef(performance.now()), tL = o.useCallback(() => {
    null != tk.current && clearTimeout(tk.current), eS === B.rq.PLAYING && (tk.current = setTimeout(() => {
      eS === B.rq.PLAYING && tN(true)
    }, Math.max(0, 3e3 - (performance.now() - tA.current))))
  }, [eS]), tw = () => {
    tN(false), tA.current = performance.now(), tL()
  };
  o.useEffect(() => {
    if (eS !== B.rq.PLAYING) {
      tN(false), null != tk.current && clearTimeout(tk.current);
      return
    }
    return tL(), () => {
      null != tk.current && clearTimeout(tk.current)
    }
  }, [eS, tL]);
  let tM = !tI && (ey || eb || eS === B.rq.ENDED),
    tB = o.useCallback(() => {
      var e;
      tl.info("[QV] | handleFullScreenExit");
      let t = (0, O.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
      null == t || (0, O.rB)(t) || (t.removeEventListener(O.NO, tB), ep(false), ty(false))
    }, [ep, tl, ty]),
    tV = () => {
      if (null == e1.current) return;
      let e = Math.max(e1.current.currentTime - 10, 0);
      tl.info("[QV] | handleSeekBackIncrement | newTime: ".concat(e)), tZ(e), eS === B.rq.ENDED && tD(B.rq.PAUSED), tg(j.jn.VIDEO_MODAL, b.jZ.SEEK_BACKWARD)
    },
    tF = () => {
      if (null == e1.current || !t8) return;
      let e = Math.min(e1.current.currentTime + 10, to);
      tl.info("[QV] | handleSeekForwardIncrement | newTime: ".concat(e)), tZ(e), eS !== B.rq.ENDED && e >= e1.current.duration && tD(B.rq.ENDED), tg(j.jn.VIDEO_MODAL, b.jZ.SEEK_FORWARD)
    };
  o.useEffect(() => {
    let e = e1.current;
    return () => {
      let t = (0, O.fn)(null == e ? true : e.parentNode, e);
      null != t && t.removeEventListener(O.NO, tB)
    }
  }, [tB]);
  let tZ = o.useCallback(e => {
      null != e1.current && (tl.info("[QV] | seekTimeline | timeSec: ".concat(e)), tP(), eR(true), tt(false), e1.current.currentTime = e, eX(J.id, e, e1.current.duration))
    }, [e1, eX, J.id, tP, tl]),
    tU = () => {
      if (null != e1.current) switch (tl.info("[QV] | handlePlaybackBtnClick | playerState: ".concat(eS)), eS) {
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
    tY = o.useCallback(() => {
      if (null == e1.current || (tl.info("[QV] | handleTracksLoaded: textTracks.length: ".concat(e1.current.textTracks.length)), 0 === e1.current.textTracks.length)) return;
      let e = e1.current.textTracks[0];
      if (e.mode = "hidden", null != e.cues)
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, V.JC)(n) && (n.id = "cue-".concat(t), n.onenter = () => tq(n), n.onexit = () => tH(n))
        }
    }, [e1, tl]);
  o.useEffect(() => {
    if (null == e2.current) return;
    let e = e2.current;
    return e.addEventListener("load", tY), () => {
      null != e && e.removeEventListener("load", tY)
    }
  }, [e2, tY]);
  let tG = o.useCallback(e => {
      var t;
      tl.info("[QV] | logVideoError: errorType: ".concat(e, ", videoProgress: ").concat(null == (t = e1.current) ? true : t.currentTime, ", videoAssetId: ").concat(tf, ", connectionSpeed: ").concat(eM)), tj(e)
    }, [eM, tj, e1, tf, tl]),
    tQ = e => {
      tl.info("[QV] | handleCanPlay: playerState: ".concat(eS)), null != e1.current && eS === B.rq.PLAYING && (tl.info("[QV] | handleCanPlay: did NOT early return"), eI && (tl.info("[QV] | handleCanPlay: loadingFirstChunk: ".concat(eI)), eN(false)), ek && (tl.info("[QV] | handleCanPlay: waitingForChunk: ".concat(ek)), tO(null != eK.current ? performance.now() - eK.current : null), eA(false)), tl.info("[QV] | handleCanPlay: updating player state to playing"), tD(B.rq.PLAYING))
    };
  o.useEffect(() => {
    if (!eD) return;
    let e = setTimeout(() => {
      eR(false)
    }, 1e3);
    return () => clearTimeout(e)
  }, [eD]);
  let [{
    controlBarAnimSpring: tz
  }, tK] = (0, p.q_F)(() => ({
    from: {
      controlBarAnimSpring: 0
    },
    config: K,
    onStart: () => {
      eG(false)
    },
    onRest: e => {
      1 === e.value && eG(true)
    }
  })), tW = (0, o.useRef)(null), [{
    captionHeightSpring: tX
  }, t$] = (0, p.q_F)(() => ({
    from: {
      captionHeightSpring: 0
    },
    config: K
  }));
  o.useEffect(() => {
    var e, t;
    return t$({
      captionHeightSpring: ed && null != tn && null != (t = null == (e = tW.current) ? true : e.clientHeight) ? t : 0,
      immediate: e0
    }), () => {
      tX.stop()
    }
  }, [ed, t$, e0, tn, tX]), o.useEffect(() => (tK({
    controlBarAnimSpring: tM || eq ? 1 : 0,
    immediate: e0
  }), () => {
    tz.stop()
  }), [tM, tK, e0, eq, tz]);
  let tJ = eS === B.rq.ENDED,
    t0 = o.useCallback(async e => {
      if (em) {
        var t;
        let e = (0, O.fn)(null == (t = e1.current) ? true : t.parentNode, e1.current);
        null != e && (e.removeEventListener(O.NO, tB), (0, O.Pr)(e), ep(false), ty(false))
      }
      if (tg(e, b.jZ.LEARN_MORE), J.id === q.V6) return void window.open(S.Z.getArticleURL(H.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      if (null != ea) {
        let e = N.r.build(J.config).application.link;
        await (0, V.qP)(e) && ea()
      }(0, h.nc)(J, {
        content: e,
        ctaContent: b.jZ.OPEN_GAME_LINK,
        sourceQuestContent: ei
      })
    }, [tg, J, ea, em, e1, tB, ep, ty, ei]),
    t1 = o.useMemo(() => (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.THUMBNAIL), [J]),
    t2 = o.useMemo(() => (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.CAPTION), [J]),
    t8 = e4 || eW.maxTimestampSec >= (null != (k = null == (l = e1.current) ? true : l.currentTime) ? k : 0) + 1,
    t4 = o.useMemo(() => null === (0, I.z0)(J, u.X.WATCH_VIDEO, I.n1.VIDEO, I.O.TRANSCRIPT), [J]);
  return (0, r.jsx)(p.P3F, {
    className: Q.videoCont,
    "data-fullscreen": em,
    tabIndex: false,
    onMouseEnter: () => {
      eh(true), tN(false), tA.current = performance.now(), null != tk.current && clearTimeout(tk.current)
    },
    onMouseLeave: () => {
      eh(false), tN(false)
    },
    onMouseMove: tw,
    onKeyDown: tw,
    children: (0, r.jsxs)("div", {
      className: a()(Q.videoContInnerRelative, {
        [Q.videoContInnerRelativePortrait]: "portrait" === es,
        [Q.videoContInnerRelativeLandscape]: "landscape" === es
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
            className: Q.videoContOverlay
          }), (0, r.jsx)($, {
            title: ta,
            subtitle: ti,
            icon: p.d4D,
            className: Q.endScreenPanelRight,
            onClick: () => t0(j.jn.VIDEO_MODAL)
          })]
        });
        {
          var e, t, n;
          let o = J.config.taskConfigV2.tasks[u.X.WATCH_VIDEO];
          return (0, r.jsx)(L.Z, {
            quest: J,
            title: null != (e = null == o ? true : o.messages.videoEndCtaTitle) ? e : G.intl.string(G.t.Ka526u),
            subtitle: null != (t = null == o ? true : o.messages.videoEndCtaSubtitle) ? t : G.intl.string(G.t.tKMcAg),
            ctaBtnLabel: null != (n = null == o ? true : o.messages.videoEndCtaButtonLabel) ? n : G.intl.string(G.t.iiTtpK),
            onCTAClick: () => t0(j.jn.VIDEO_MODAL_END_CARD),
            sourceQuestContent: ei
          })
        }
      })(), (0, r.jsxs)(E.Z, {
        ref: e => {
          e1.current = e, eg.current = e
        },
        autoPlay: er,
        playsInline: true,
        mediaLayoutType: em ? Y.hV.STATIC : Y.hV.RESPONSIVE,
        className: a()({
          [Q.hidden]: tJ,
          [Q.videoInner]: true
        }),
        controls: false,
        poster: null == t1 ? true : t1.url,
        disablePictureInPicture: true,
        onTimeUpdate: e => {
          null != e1.current && (e1.current.currentTime >= eV && (tl.info("[QV] | handleTimeUpdate: capturing server time update: currentTime: ".concat(e1.current.currentTime)), eF(e1.current.currentTime + 6 + 2 * Math.random()), tR(e1.current.currentTime)), e1.current.currentTime >= eZ && (eU(e1.current.currentTime + 1), (0, y.qm)(J.id, ex.taskType, e1.current.currentTime), en(e1.current.currentTime)), eX(J.id, e1.current.currentTime, e1.current.duration), eP(e1.current.currentTime / e1.current.duration * 100))
        },
        onEnded: e => {
          null != e1.current && (tR(e1.current.duration + 1), tl.info("[QV] | handleEnded: sending progress update: ".concat(e1.current.duration + 1)), eX(J.id, e1.current.duration, e1.current.duration)), tD(B.rq.ENDED), eA(false)
        },
        onLoadedData: e => {
          tl.info("[QV] | handleLoadedData: loadingFirstChunk: ".concat(eI)), eI && (tp(null != ez.current ? performance.now() - ez.current : null), eN(false), null != td.current && (td.current.config.minAutoBitrate = 8e5))
        },
        onLoadedMetadata: e => {
          null != e1.current && (tl.info("[QV] | handleLoadedMetadata | videoAssetId: ".concat(tf)), e5(true), tc !== I.n1.VIDEO_HLS && tZ(ts), e$ ? e1.current.volume = 0 : e1.current.volume = eJ)
        },
        onLoadStart: () => {
          ez.current = performance.now(), tm(eM), tl.info("[QV] | handleLoadStart | loadingStartTime: ".concat(ez.current))
        },
        onPlaying: () => {
          if (!eQ.current) return;
          let e = performance.now() - el;
          tl.info("[QV] | ⏰ Video FCP: ".concat(e, "ms")), th(e), eQ.current = false
        },
        onWaiting: e => {
          eK.current = performance.now(), tl.info("[QV] | handleWaitingForData: bufferingStartTime: ".concat(eK.current)), tS(), eA(true)
        },
        onProgress: e => {
          if (null == e1.current) return;
          tl.info("[QV] | handleLoadingHasProgressed: buffered.length: ".concat(e1.current.buffered.length));
          let t = [];
          for (let e = 0; e < e1.current.buffered.length; e++) {
            let n = e1.current.buffered.start(e),
              r = e1.current.buffered.end(e);
            r - n < 1 || t.push({
              start: n / e1.current.duration,
              size: (r - n) / e1.current.duration
            })
          }
          ew(t)
        },
        onCanPlay: tQ,
        onCanPlayThrough: tQ,
        onSeeked: () => {
          tl.info("[QV] | handleSeeked"), tt(true)
        },
        onAbort: () => tG(B.CY.ABORT),
        onError: () => tG(B.CY.ERROR),
        onEmptied: () => tG(B.CY.EMPTIED),
        onStalled: () => tG(B.CY.STALLED),
        onClick: () => {
          tl.info("[QV] | handleVideoClick"), tU()
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
          onError: () => tG(B.CY.SOURCE_ERROR),
          src: tu.url,
          type: tu.mimetype
        })]
      }), (eI || ek) && eS === B.rq.PLAYING && (0, r.jsx)(p.$jN, {
        type: p.$jN.Type.WANDERING_CUBES,
        className: Q.loadingSpinner
      }), eS === B.rq.PAUSED && e7 === j.yE.LOST_FOCUS && (0, r.jsx)(W, {}), ec && eS !== B.rq.ENDED && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.P3F, {
          onClick: () => eu(false),
          tabIndex: false,
          children: (0, r.jsx)("div", {
            className: Q.transcriptOverlay
          })
        }), (0, r.jsx)(s.animated.div, {
          className: a()(Q.transcriptCont, {
            [Q.transcriptContPortrait]: "portrait" === es
          }),
          style: {
            marginBottom: (0, s.to)([tz, tX], (e, t) => "".concat(50 * e + t, "px"))
          },
          children: (0, r.jsx)(M.K, {
            quest: J,
            onClose: () => {
              eu(false), tg(j.jn.VIDEO_MODAL, b.jZ.TRANSCRIPT_DISABLE)
            }
          })
        })]
      }), (0, r.jsx)(s.animated.div, {
        className: Q.videoFooterContGradient,
        style: {
          opacity: (0, s.to)([tz.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(e))
        }
      }), (0, r.jsx)("div", {
        className: a()(Q.playPausePopCont, {
          [Q.play]: eS === B.rq.PLAYING,
          [Q.pause]: eS === B.rq.PAUSED
        }),
        children: eS === B.rq.PLAYING ? (0, r.jsx)(p.o1U, {
          className: Q.playPausePopIcon
        }) : (0, r.jsx)(p.fpf, {
          className: Q.playPausePopIcon
        })
      }, eS), ed && null != tn && (0, r.jsx)(s.animated.div, {
        className: Q.captionContainer,
        ref: tW,
        style: {
          translateY: (0, s.to)([tz.to({
            range: [0, 1],
            output: [0, false]
          })], e => "".concat(e, "px"))
        },
        children: (0, r.jsx)(p.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          className: Q.captionText,
          children: tn.text
        })
      }), (0, r.jsxs)(s.animated.div, {
        className: Q.videoFooterCont,
        style: {
          paddingLeft: (0, s.to)([tz.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          paddingRight: (0, s.to)([tz.to({
            range: [0, 1],
            output: [0, 25]
          })], e => "".concat(e, "px")),
          height: (0, s.to)([tz.to({
            range: [0, 1],
            output: [0, 50]
          })], e => "".concat(e, "px"))
        },
        children: [(0, r.jsx)(w.Z, {
          percent: eT,
          animate: true !== e8.current && !eD,
          interactionEnabled: e4 && eY,
          backgroundColor: tM ? true : "rgba(0, 0, 0, 0.0)",
          preloadedBuffers: tM ? eL : true,
          duration: null != (F = null == (m = e1.current) ? true : m.duration) ? F : 1,
          maxSeekableTime: tM && eY ? to : true,
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
          className: Q.videoControlsCont,
          style: {
            paddingTop: (0, s.to)([tz.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            paddingBottom: (0, s.to)([tz.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(e * e * 12, "px")),
            pointerEvents: (0, s.to)([tz.to({
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
            animSpring: tz,
            visible: tM,
            seekForwardEnabled: t8,
            hideCaptionBtn: null == t2,
            hideTranscriptBtn: t4,
            handlePlaybackBtnClick: tU,
            handleTranscriptBtnClick: () => {
              ec || null != e6 && e6.questId === J.id && e6.fetchStatus !== x.iF.NONE && e6.fetchStatus !== x.iF.FAILURE || (0, y.lL)(J, u.X.WATCH_VIDEO), eu(!ec), tg(j.jn.VIDEO_MODAL, ec ? b.jZ.TRANSCRIPT_DISABLE : b.jZ.TRANSCRIPT_ENABLE)
            },
            handleCaptionBtnClick: () => {
              ef(!ed), tg(j.jn.VIDEO_MODAL, ed ? b.jZ.CLOSED_CAPTIONING_DISABLE : b.jZ.CLOSED_CAPTIONING_ENABLE)
            },
            handleFullScreenBtnClick: () => {
              var e;
              let t = !em;
              tl.info("[QV] | handleFullScreenButtonClick | shouldBeEnabled: ".concat(t));
              let n = (0, O.fn)(null == (e = e1.current) ? true : e.parentNode, e1.current);
              t && null != n ? ((0, O.Dj)(n), n.addEventListener(O.NO, tB), ty(true)) : t || null == n || (n.removeEventListener(O.NO, tB), ty(false), (0, O.Pr)(n)), ep(t)
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