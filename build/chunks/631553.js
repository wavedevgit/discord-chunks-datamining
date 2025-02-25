/** Chunk was on 63141 **/
"use strict";
let i;
n.d(t, {
  Z: () => eN
}), n(653041);
var r = n(200651),
  o = n(192379),
  a = n(120356),
  s = n.n(a),
  l = n(921738),
  c = n.n(l),
  d = n(954955),
  u = n.n(d),
  f = n(498607),
  p = n.n(f),
  h = n(442837),
  v = n(704215),
  E = n(481060),
  m = n(668781),
  x = n(239091),
  O = n(13245),
  y = n(425493),
  g = n(615287),
  Z = n(951483),
  _ = n(714338),
  b = n(185666),
  C = n(100527),
  N = n(906732),
  P = n(146282),
  j = n(600164);
n(70097);
var I = n(605236),
  L = n(594190),
  A = n(567409),
  k = n(74299),
  w = n(989941),
  T = n(377400),
  R = n(329557),
  S = n(93127),
  D = n(199902),
  U = n(314897),
  W = n(592125),
  M = n(480294),
  G = n(430824),
  K = n(355863),
  V = n(131951),
  z = n(944486),
  Y = n(618541),
  F = n(449224),
  H = n(574254),
  B = n(556296),
  X = n(808506),
  q = n(372679),
  Q = n(237997),
  J = n(451478),
  $ = n(70956),
  ee = n(358085),
  et = n(998502),
  en = n(13140),
  ei = n(145597),
  er = n(658785),
  eo = n(32300),
  ea = n(681603),
  es = n(358446),
  el = n(348733),
  ec = n(312178),
  ed = n(708383),
  eu = n(923532),
  ef = n(107200),
  ep = n(983660),
  eh = n(987650),
  ev = n(981631),
  eE = n(206583),
  em = n(388032),
  ex = n(470568);

function eO(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
h.ZP.PersistedStore.disableWrites = __OVERLAY__, h.ZP.initialize();
let ey = null;

function eg(e) {
  e.preventDefault()
}

function eZ(e) {
  (0, x.jW)(e, async () => {
    let {
      default: e
    } = await n.e("92780").then(n.bind(n, 930381));
    return t => (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          eO(e, t, n[t])
        })
      }
      return e
    }({}, t))
  })
}
ee.isPlatformEmbedded;
let e_ = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: o
    } = e, a = o ? E.P3F : "div";
    return (0, r.jsx)(a, {
      className: s()(ex.overlayBackground, {
        [ex.overlayActive]: !o,
        [ex.overlayLocked]: o,
        [ex.previewMode]: !o && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === ev.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: eZ,
      children: o ? null : (0, r.jsx)("div", {
        className: ex.closeContainer,
        children: (0, r.jsx)(y.Z, {
          variant: y.Z.Variants.BOLD,
          keybind: t,
          closeAction: n
        })
      })
    })
  },
  eb = e => {
    let {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: r,
      ctrlKey: o
    } = e;
    return {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: r,
      ctrlKey: o
    }
  };
class eC extends o.Component {
  handleLock() {
    (0, E.$sL)() || H.Z.isOpen() || O.Z.setInputLocked(!0, (0, ei.QF)())
  }
  handleDeactivate() {
    O.Z.deactivateAllRegions()
  }
  componentDidMount() {
    O.Z.startSession(), T.Z.initialize(), b.Z.initialize(), R.Z.initialize()
  }
  componentDidUpdate(e) {
    let {
      initialized: t
    } = this.props;
    if (t) {
      if (t && !e.initialized) {
        this.initialSetup();
        return
      }
      if (!e.locked && this.props.locked) {
        if (window.addEventListener("contextmenu", eg, !1), null != ey) {
          let e = Date.now() - ey;
          O.Z.track(ev.rMx.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), ey = null
        }
        _.Z.disable(), this.activeKeyEventShapes = [], Q.Z.isPinned(ev.Odu.TEXT) && (_.Z.setLayout(Z.Xq), _.Z.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", eg, !1), null == ey && (ey = Date.now(), O.Z.track(ev.rMx.OVERLAY_UNLOCKED)), _.Z.disable(), this.activeKeyEventShapes = [], _.Z.setLayout(Z.Sr), _.Z.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, en.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && O.Z.notifyContentInventoryReady(this.props.contentInventoryEntries)
    }
  }
  initialSetup() {
    let {
      connectedToVoice: e,
      locked: t,
      canGoLive: n,
      isStreaming: i,
      voiceGuild: r,
      voiceChannelId: o,
      game: a,
      showKeybindNotification: s,
      dismissKeybindNotification: l
    } = this.props;
    O.Z.track(ev.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: e,
      text_widget_connected: Q.Z.isPinned(ev.Odu.TEXT),
      overlay_render_method: g.gl[g.gl.Hook],
      unpinned_widget_types: K.Z.getAllUnpinnedPinnedWidgets(ei.qU)
    }), er.Z.trackExposure({
      location: "Overlay"
    });
    let c = n && !i && null != a,
      d = e && null != r && null != o,
      u = (0, I.un)(v.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
      f = this.props.hasOverlayV3UI,
      p = {
        type: eh.nc.WELCOME
      };
    if (f ? p = {
        type: eh.nc.OOP_WELCOME,
        game: null != a ? a : void 0,
        isFirstTimeNux: !u
      } : s ? p = {
        type: eh.nc.KEYBIND_INDICATORS,
        markAsDismissed: l
      } : c && d ? p = {
        type: eh.nc.GO_LIVE_VOICE,
        game: a,
        voiceChannelId: o,
        voiceGuild: r
      } : c && (p = {
        type: eh.nc.GO_LIVE_NON_VOICE,
        game: a
      }), O.Z.overlayMounted(p), window.addEventListener("resize", this.handleWindowResize), t && window.addEventListener("contextmenu", eg, !1), ee.isPlatformEmbedded) {
      let e = (0, q.M)();
      if (null == e) return;
      if (void 0 !== e.setPerfInfoCallback) {
        var h;
        e.setPerfInfoCallback(e => {
          O.Z.track(ev.rMx.OVERLAY_PERF_INFO, e)
        }), null === (h = e.broadcastCommand) || void 0 === h || h.call(e, {
          message: "set_perf_report_interval",
          interval: 15 * $.Z.Millis.MINUTE
        })
      }
      et.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        Q.Z.getDisableExternalLinkAlert() || t === Y.Z.getLastURL() ? et.ZP.send("OPEN_EXTERNAL_URL", t) : m.Z.show({
          title: em.NW.string(em.t.WLx4Fx),
          body: em.NW.string(em.t.H8O1TE),
          secondaryConfirmText: em.NW.string(em.t.IwqGhY),
          confirmText: em.NW.string(em.t["3PatS0"]),
          cancelText: em.NW.string(em.t["ETE/oK"]),
          onConfirmSecondary: () => {
            O.Z.disableExternalLinkAlert(), et.ZP.send("OPEN_EXTERNAL_URL", t)
          },
          onConfirm: () => et.ZP.send("OPEN_EXTERNAL_URL", t)
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", eg, !1), T.Z.terminate(), b.Z.terminate(), R.Z.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, r.jsx)(j.Z, {
      justify: j.Z.Justify.CENTER,
      align: j.Z.Align.CENTER,
      className: ex.invalidContainer,
      children: (0, r.jsx)("div", {
        className: ex.inactiveContainer,
        children: em.NW.format(em.t.ketnW1, ei.FW)
      })
    })
  }
  render() {
    let {
      locked: e,
      keybind: t,
      incompatibleApp: n,
      initialized: o,
      isPreviewingInGame: a,
      activeRegions: l,
      windowSize: c,
      voiceGuild: d,
      voiceChannelId: u,
      hasOverlayV3UI: f
    } = this.props, {
      width: p,
      height: h
    } = c;
    if (0 === p || 0 === h || n || !o) return null;
    let v = e || a,
      E = U.default.getId();
    return (0, r.jsxs)("div", {
      className: ex.overlay,
      children: [(0, r.jsx)(ed.Z, {}), a && (0, r.jsx)("header", {
        className: ex.previewingInGameHeader,
        children: em.NW.string(em.t.iOq96u)
      }), i, (!e || l.has(ev.O0n.TEXT_WIDGET)) && (0, r.jsx)(e_, {
        locked: e,
        keybind: t,
        onClick: e ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: a
      }), (0, ei.Te)(c) ? (0, r.jsx)(ec.Z, {
        className: s()({
          [ex.layoutLocked]: e,
          [ex.layoutUnlocked]: !e
        })
      }) : e ? null : this.renderInvalidSizeMessage(), (0, r.jsx)(ef.Z, {}), null != d && null != u && (0, r.jsx)(eu.Z, {
        streamerId: E,
        guildId: d.id,
        channelId: u
      }), f && (0, r.jsx)(ep.Z, {
        locked: e
      }), (0, r.jsx)(el.Z, {
        locked: v,
        keybind: t
      }), (0, r.jsx)(ea.Z, {})]
    })
  }
  constructor(e) {
    super(e), eO(this, "handleWindowResize", () => {
      X.ZP.isFocusedPidOutOfProcess() ? this.forceUpdate() : u()(() => {
        this.forceUpdate()
      }, 500)
    }), eO(this, "activeKeyEventShapes", []), eO(this, "lockEventShape", (0, en.d2)(this.props.keybindKeyCodes)), eO(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => p()(t, e))), eO(this, "onKeyDownGlobal", e => {
      let t = eb(e),
        n = this.getActiveKeyEventIndex(t) > -1,
        i = [16, 17, 18, 91].includes(e.keyCode);
      n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: r,
        activeRegions: o
      } = this.props;
      t.keyCode === c().codes.esc && r && o.has(ev.O0n.TEXT_WIDGET) && O.Z.deactivateAllRegions()
    }), eO(this, "onKeyUpGlobal", e => {
      let t = eb(e),
        n = this.getActiveKeyEventIndex(t);
      n > -1 && this.activeKeyEventShapes.splice(n, 1)
    });
    let t = e.locked && Q.Z.isPinned(ev.Odu.TEXT);
    _.Z.setLayout(t ? Z.Xq : Z.Sr), t && _.Z.enable()
  }
}

function eN() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: a
  } = (0, h.cj)([Q.Z], () => ({
    locked: Q.Z.isLocked((0, ei.QF)()),
    initialized: Q.Z.initialized,
    incompatibleApp: Q.Z.incompatibleApp,
    activeRegions: Q.Z.getActiveRegions(),
    isPreviewingInGame: Q.Z.isPreviewingInGame()
  })), s = (0, h.e7)([J.Z], () => J.Z.windowSize()), l = (0, h.e7)([B.ZP], () => B.ZP.getOverlayKeybind()), c = (0, h.e7)([z.Z], () => z.Z.getVoiceChannelId()), d = (0, h.e7)([W.Z], () => W.Z.getChannel(c)), u = (0, h.e7)([G.Z], () => null != d ? G.Z.getGuild(d.guild_id) : null), f = (0, h.e7)([L.ZP, F.Z], () => (0, w.Z)(L.ZP, F.Z)), p = (0, A.Ns)(null == f ? void 0 : f.id), v = (0, h.e7)([P.Z], () => null != P.Z.getLastFeedFetchDate(eE.YN.GAME_PROFILE_FEED)), m = (0, h.e7)([V.Z], () => (0, k.Z)(V.Z)), x = (0, h.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()), {
    analyticsLocations: O
  } = (0, N.ZP)(C.Z.OVERLAY), {
    showKeybindIndicators: y,
    dismissKeybindNotification: g
  } = (0, es.K)(), Z = (0, h.e7)([M.Z], () => M.Z.fetchedConsents);
  o.useEffect(() => {
    Z && (0, S._)()
  }, [Z]);
  let _ = (0, eo.o4)("ipOverlay").overlayV3UI;
  return (0, r.jsx)(N.Gt, {
    value: O,
    children: (0, r.jsx)(E.vWI, {
      children: (0, r.jsx)(eC, {
        locked: e,
        initialized: t,
        incompatibleApp: n,
        activeRegions: i,
        isPreviewingInGame: a,
        windowSize: s,
        keybind: null != l ? (0, en.BB)(l.shortcut, !0) : "???",
        keybindKeyCodes: null != l ? l.shortcut : [],
        connectedToVoice: null != c,
        voiceChannelId: null != d ? d.id : null,
        voiceGuild: u,
        game: f,
        canGoLive: m,
        isStreaming: x,
        showKeybindNotification: y,
        dismissKeybindNotification: g,
        contentInventoryEntries: p,
        hasFetchedContentInventory: v,
        hasOverlayV3UI: _
      })
    })
  })
}