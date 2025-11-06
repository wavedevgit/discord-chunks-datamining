/** Chunk was on 63141 **/
/** chunk id: 631553, original params: e,t,n (module,exports,require) **/
let i;
require.d(exports, {
  Z: () => ej
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk921738 = require("./921738.js"),
  c = require.n(Chunk921738),
  Chunk954955 = require("./954955.js"),
  u = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  p = require.n(Chunk498607),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk239091 = require("./239091.js"),
  Chunk13245 = require("./13245.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk593472 = require("./593472.js"),
  Chunk951483 = require("./951483.js"),
  Chunk714338 = require("./714338.js"),
  Chunk185666 = require("./185666.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk600164 = require("./600164.jsx");
require("./70097.jsx");
var Chunk266454 = require("./266454.js"),
  Chunk594190 = require("./594190.js"),
  Chunk74299 = require("./74299.js"),
  Chunk989941 = require("./989941.js"),
  Chunk377400 = require("./377400.jsx"),
  Chunk329557 = require("./329557.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk355863 = require("./355863.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk618541 = require("./618541.js"),
  Chunk449224 = require("./449224.js"),
  Chunk574254 = require("./574254.js"),
  Chunk556296 = require("./556296.js"),
  Chunk808506 = require("./808506.js"),
  Chunk372679 = require("./372679.js"),
  Chunk237997 = require("./237997.js"),
  Chunk451478 = require("./451478.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk378799 = require("./378799.js"),
  Chunk13140 = require("./13140.js"),
  Chunk145597 = require("./145597.js"),
  Chunk658785 = require("./658785.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk681603 = require("./681603.js"),
  Chunk358446 = require("./358446.jsx"),
  Chunk348733 = require("./348733.jsx"),
  Chunk312178 = require("./312178.jsx"),
  Chunk708383 = require("./708383.jsx"),
  Chunk923532 = require("./923532.jsx"),
  Chunk107200 = require("./107200.jsx"),
  Chunk983660 = require("./983660.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk987650 = require("./987650.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk722363 = require("./722363.js");

function e_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.PersistedStore.disableWrites = __OVERLAY__, Chunk442837.ZP.initialize();
let ev = null;

function eb(e) {
  e.preventDefault()
}

function eE(e) {
  (0, O.jW)(e, async () => {
    let {
      default: e
    } = await n.e("92780").then(n.bind(n, 930381));
    return t => {
      var n, i;
      return (0, r.jsx)(e, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            e_(e, t, n[t])
          })
        }
        return e
      }({}, t), i = i = {
        version: eg.bv
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}
Chunk358085.isPlatformEmbedded;
let eS = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: o
    } = e, l = o ? m.P3F : "div";
    return (0, r.jsx)(l, {
      className: s()(eO.overlayBackground, {
        [eO.overlayActive]: !o,
        [eO.overlayLocked]: o,
        [eO.previewMode]: !o && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === em.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: eE,
      children: o ? null : (0, r.jsx)("div", {
        className: eO.closeContainer,
        children: (0, r.jsx)(v.Z, {
          variant: v.Z.Variants.BOLD,
          keybind: t,
          closeAction: n
        })
      })
    })
  },
  ex = e => {
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
class eZ extends Chunk647438.Component {
  handleLock() {
    (0, Chunk481060.$sL)() || Chunk574254.Z.isOpen() || Chunk13245.Z.setInputLocked(true, (0, Chunk145597.getPID)())
  }
  handleDeactivate() {
    Chunk13245.Z.deactivateAllRegions()
  }
  componentDidMount() {
    Chunk13245.Z.startSession(), Chunk377400.Z.initialize(), Chunk185666.Z.initialize(), Chunk329557.Z.initialize()
  }
  componentDidUpdate(e) {
    let {
      initialized: t
    } = this.props;
    if (t) {
      if (t && !this.didUpdate) {
        this.didUpdate = true, this.initialSetup();
        return
      }
      if (!e.locked && this.props.locked) {
        if (window.addEventListener("contextmenu", eb, false), null != ev) {
          let e = Date.now() - ev;
          _.Z.track(em.rMx.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), ev = null
        }
        S.Z.disable(), this.activeKeyEventShapes = [], Y.default.isPinned(em.Odu.TEXT) && (S.Z.setLayout(E.Xq), S.Z.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", eb, false), null == ev && (ev = Date.now(), _.Z.track(em.rMx.OVERLAY_UNLOCKED)), S.Z.disable(), this.activeKeyEventShapes = [], S.Z.setLayout(E.Sr), S.Z.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, $.d2)(this.props.keybindKeyCodes))
    }
  }
  initialSetup() {
    let e, {
      connectedToVoice: t,
      locked: n,
      canGoLive: i,
      isStreaming: r,
      voiceGuild: o,
      voiceChannelId: l,
      game: s,
      showKeybindNotification: a,
      dismissKeybindNotification: c
    } = this.props;
    Chunk13245.Z.track(Chunk981631.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: exports,
      text_widget_connected: Chunk237997.default.isPinned(Chunk981631.Odu.TEXT),
      overlay_render_method: Chunk837268.gl[Chunk837268.gl.Hook],
      unpinned_widget_types: Chunk355863.Z.getAllUnpinnedPinnedWidgets(Chunk145597.OVERLAY_LAYOUT_ID)
    }), Chunk658785.Z.trackExposure({
      location: "Overlay"
    });
    let d = i && !Chunk951288 && null != s,
      u = exports && null != Chunk647438 && null != Chunk120356;
    (0, Chunk266454.zu)(Chunk704215.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) || (0, Chunk266454.Q3)(Chunk704215.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX);
    let h = Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.WelcomeNudge),
      p = Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.GoLiveNudge);
    if (Chunk498607 || (e = {
        type: Chunk987650.nc.WELCOME
      }), Chunk921738 && !Chunk498607 ? e = {
        type: Chunk987650.nc.KEYBIND_INDICATORS,
        markAsDismissed: c
      } : Chunk954955 && u && !p ? e = {
        type: Chunk987650.nc.GO_LIVE_VOICE,
        game: s,
        voiceChannelId: Chunk120356,
        voiceGuild: Chunk647438
      } : Chunk954955 && !p && (e = {
        type: Chunk987650.nc.GO_LIVE_NON_VOICE,
        game: s
      }), setTimeout(async () => {
        await (0, Chunk378799.s5)(), null != module ? Chunk13245.Z.overlayMounted(module) : Chunk13245.Z.overlayMounted()
      }, 128), window.addEventListener("resize", this.handleWindowResize), require && window.addEventListener("contextmenu", eb, false), Chunk358085.isPlatformEmbedded) {
      let e = (0, Chunk372679.M)();
      if (null == module) return;
      if (true !== module.setPerfInfoCallback) {
        var f;
        module.setPerfInfoCallback(e => {
          _.Z.track(em.rMx.OVERLAY_PERF_INFO, e)
        }), null == (f = module.broadcastCommand) || Chunk442837.call(module, {
          message: "set_perf_report_interval",
          interval: 15 * Chunk70956.Z.Millis.MINUTE
        })
      }
      Chunk998502.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        Y.default.getDisableExternalLinkAlert() || t === W.Z.getLastURL() ? J.ZP.send("OPEN_EXTERNAL_URL", t) : y.Z.show({
          title: ey.intl.string(ey.t.WLx4F6),
          body: ey.intl.string(ey.t.H8O1TK),
          secondaryConfirmText: ey.intl.string(ey.t.IwqGhU),
          confirmText: ey.intl.string(ey.t["3PatSz"]),
          cancelText: ey.intl.string(ey.t["ETE/oC"]),
          onConfirmSecondary: () => {
            _.Z.disableExternalLinkAlert()
          },
          onConfirm: () => J.ZP.send("OPEN_EXTERNAL_URL", t)
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, true), window.addEventListener("keyup", this.onKeyUpGlobal, true)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, true), window.removeEventListener("keyup", this.onKeyUpGlobal, true), this.props.locked && window.removeEventListener("contextmenu", eb, false), Chunk377400.Z.terminate(), Chunk185666.Z.terminate(), Chunk329557.Z.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, Chunk951288.jsx)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.CENTER,
      align: Chunk600164.Z.Align.CENTER,
      className: Chunk722363.invalidContainer,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk722363.inactiveContainer,
        children: Chunk388032.intl.format(Chunk388032.t.ketnW0, Chunk145597.OVERLAY_MIN_RESOLUTION)
      })
    })
  }
  render() {
    let {
      locked: e,
      keybind: t,
      incompatibleApp: n,
      initialized: o,
      isPreviewingInGame: l,
      activeRegions: a,
      windowSize: c,
      voiceGuild: d,
      voiceChannelId: u,
      isOOPOverlayAvailable: h
    } = this.props, {
      width: p,
      height: f
    } = c;
    if (0 === p || 0 === Chunk442837 || require || !Chunk647438) return null;
    let g = module || Chunk120356,
      m = Chunk314897.default.getId();
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk722363.overlay,
      children: [(0, Chunk951288.jsx)(Chunk708383.Z, {}), Chunk120356 && (0, Chunk951288.jsx)("header", {
        className: Chunk722363.previewingInGameHeader,
        children: Chunk388032.intl.string(Chunk388032.t.iOq96m)
      }), i, (!module || Chunk921738.has(Chunk981631.O0n.TEXT_WIDGET)) && (0, Chunk951288.jsx)(eS, {
        locked: module,
        keybind: exports,
        onClick: module ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: Chunk120356
      }), (0, Chunk145597.validResolution)(c) ? (0, Chunk951288.jsx)(Chunk312178.Z, {
        className: s()({
          [Chunk722363.layoutLocked]: module,
          [Chunk722363.layoutUnlocked]: !module
        })
      }) : module ? null : this.renderInvalidSizeMessage(), (0, Chunk951288.jsx)(Chunk107200.Z, {}), null != Chunk954955 && null != u && (0, Chunk951288.jsx)(Chunk923532.Z, {
        streamerId: Chunk481060,
        guildId: Chunk954955.id,
        channelId: u
      }), Chunk498607 && (0, Chunk951288.jsx)(Chunk983660.Z, {
        locked: module
      }), (0, Chunk951288.jsx)(Chunk348733.Z, {
        locked: Chunk704215,
        keybind: exports
      }), (0, Chunk951288.jsx)(Chunk681603.Z, {}), (0, Chunk951288.jsx)("div", {
        className: Chunk722363.overlayMountPx
      })]
    })
  }
  constructor(e) {
    super(e), e_(this, "didUpdate", false), e_(this, "debouncedForceUpdate", u()(() => {
      this.forceUpdate()
    }, 500)), e_(this, "handleWindowResize", () => {
      F.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate()
    }), e_(this, "activeKeyEventShapes", []), e_(this, "lockEventShape", (0, $.d2)(this.props.keybindKeyCodes)), e_(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => p()(t, e))), e_(this, "onKeyDownGlobal", e => {
      let t = ex(e),
        n = this.getActiveKeyEventIndex(t) > false,
        i = [16, 17, 18, 91].includes(e.keyCode);
      n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: r,
        activeRegions: o
      } = this.props;
      t.keyCode === c().codes.esc && r && o.has(em.O0n.TEXT_WIDGET) && _.Z.deactivateAllRegions()
    }), e_(this, "onKeyUpGlobal", e => {
      let t = ex(e),
        n = this.getActiveKeyEventIndex(t);
      n > false && this.activeKeyEventShapes.splice(n, 1)
    });
    let t = e.locked && Y.default.isPinned(em.Odu.TEXT);
    S.Z.setLayout(t ? E.Xq : E.Sr), t && S.Z.enable()
  }
}

function ej() {
  var e, t;
  let {
    locked: n,
    initialized: i,
    incompatibleApp: l,
    activeRegions: s,
    isPreviewingInGame: a,
    trackedGame: c
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    locked: Chunk237997.default.isLocked((0, Chunk145597.getPID)()),
    initialized: Chunk237997.default.initialized,
    incompatibleApp: Chunk237997.default.incompatibleApp,
    activeRegions: Chunk237997.default.getActiveRegions(),
    isPreviewingInGame: Chunk237997.default.isPreviewingInGame(),
    trackedGame: Chunk237997.default.getTrackedGame((0, Chunk145597.getPID)())
  })), d = (0, Chunk442837.e7)([Chunk451478.Z], () => Chunk451478.Z.windowSize()), u = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()), h = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getVoiceChannelId()), p = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(Chunk498607)), g = (0, Chunk442837.e7)([Chunk430824.Z], () => null != p ? Chunk430824.Z.getGuild(p.guild_id) : null), m = (0, Chunk442837.e7)([Chunk594190.ZP, Chunk449224.Z], () => (0, Chunk989941.Z)(Chunk594190.ZP, Chunk449224.Z)), y = (0, Chunk442837.e7)([Chunk131951.Z], () => (0, Chunk74299.Z)(Chunk131951.Z)), O = (0, Chunk442837.e7)([Chunk199902.Z], () => null != Chunk199902.Z.getCurrentUserActiveStream()), {
    analyticsLocations: _
  } = (0, Chunk906732.ZP)(Chunk100527.Z.OVERLAY), {
    showKeybindIndicators: v,
    dismissKeybindNotification: E
  } = (0, Chunk358446.K)(), S = (null == c ? true : c.fullscreenType) === Chunk593472.Jx.FULLSCREEN, x = null != (e = null == c ? true : c.oopEnabled) && module, C = Chunk454991.v.oopEnabled, I = null != (t = null == c ? true : c.hasChangedRenderMode) && exports, {
    useContextualNudge: T,
    disableNudge: D
  } = (0, Chunk32300.J0)("OverlaySetup");
  return Chunk647438.useEffect(() => {
    i && (0, Chunk32300.F3)()
  }, [i]), (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: Chunk13245,
    children: (0, Chunk951288.jsx)(eZ, {
      locked: require,
      initialized: i,
      incompatibleApp: Chunk120356,
      activeRegions: s,
      isPreviewingInGame: Chunk921738,
      windowSize: Chunk954955,
      keybind: null != u ? (0, Chunk13140.BB)(u.shortcut, true) : "???",
      keybindKeyCodes: null != u ? u.shortcut : [],
      connectedToVoice: null != Chunk498607,
      voiceChannelId: null != p ? p.id : null,
      voiceGuild: Chunk704215,
      game: Chunk481060,
      canGoLive: Chunk668781,
      isStreaming: Chunk239091,
      showKeybindNotification: Chunk425493,
      dismissKeybindNotification: Chunk951483,
      isOOPOverlayAvailable: (!Chunk377400 || Chunk600164 && Chunk185666 && Chunk714338 && !Chunk266454) && !Chunk329557
    })
  })
}