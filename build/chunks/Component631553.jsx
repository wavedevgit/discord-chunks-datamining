/** Chunk was on 63141 **/
/** chunk id: 631553, original params: e,t,n (module,exports,require) **/
let i;
require.d(exports, {
  Z: () => eO
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk921738 = require("./921738.js"),
  c = require.n(Chunk921738),
  Chunk954955 = require("./954955.js"),
  u = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  p = require.n(Chunk498607),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk239091 = require("./239091.js"),
  Chunk13245 = require("./13245.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk951483 = require("./951483.js"),
  Chunk714338 = require("./714338.js"),
  Chunk185666 = require("./185666.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk600164 = require("./600164.jsx");
require("./70097.jsx");
var Chunk594190 = require("./594190.js"),
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
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk681603 = require("./681603.js"),
  Chunk358446 = require("./358446.jsx"),
  Chunk348733 = require("./348733.jsx"),
  Chunk312178 = require("./312178.jsx"),
  Chunk708383 = require("./708383.jsx"),
  Chunk923532 = require("./923532.jsx"),
  Chunk107200 = require("./107200.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk987650 = require("./987650.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk735831 = require("./735831.js");

function ef(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.PersistedStore.disableWrites = __OVERLAY__, Chunk442837.ZP.initialize();
let eg = null;

function em(e) {
  e.preventDefault()
}

function ey(e) {
  (0, y.jW)(e, async () => {
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
            ef(e, t, n[t])
          })
        }
        return e
      }({}, t), i = i = {
        version: ed.bv
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
let eb = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: o
    } = e, l = o ? g.P3F : "div";
    return (0, r.jsx)(l, {
      className: s()(ep.overlayBackground, {
        [ep.overlayActive]: !o,
        [ep.overlayLocked]: o,
        [ep.previewMode]: !o && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === eu.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: ey,
      children: o ? null : (0, r.jsx)("div", {
        className: ep.closeContainer,
        children: (0, r.jsx)(_.Z, {
          variant: _.Z.Variants.BOLD,
          keybind: t,
          closeAction: n
        })
      })
    })
  },
  e_ = e => {
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
class ev extends Chunk473749.Component {
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
        if (window.addEventListener("contextmenu", em, false), null != eg) {
          let e = Date.now() - eg;
          b.Z.track(eu.rMx.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), eg = null
        }
        O.Z.disable(), this.activeKeyEventShapes = [], B.default.isPinned(eu.Odu.TEXT) && (O.Z.setLayout(v.Xq), O.Z.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", em, false), null == eg && (eg = Date.now(), b.Z.track(eu.rMx.OVERLAY_UNLOCKED)), O.Z.disable(), this.activeKeyEventShapes = [], O.Z.setLayout(v.Sr), O.Z.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, q.d2)(this.props.keybindKeyCodes))
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
    let d = i && !Chunk54381 && null != s,
      u = exports && null != Chunk473749 && null != Chunk120356,
      h = Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.WelcomeNudge),
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
        voiceGuild: Chunk473749
      } : Chunk954955 && !p && (e = {
        type: Chunk987650.nc.GO_LIVE_NON_VOICE,
        game: s
      }), setTimeout(async () => {
        await (0, Chunk378799.s5)(), null != module ? Chunk13245.Z.overlayMounted(module) : Chunk13245.Z.overlayMounted()
      }, 128), window.addEventListener("resize", this.handleWindowResize), require && window.addEventListener("contextmenu", em, false), Chunk358085.isPlatformEmbedded) {
      let e = (0, Chunk372679.M)();
      if (null == module) return;
      if (true !== module.setPerfInfoCallback) {
        var f;
        module.setPerfInfoCallback(e => {
          b.Z.track(eu.rMx.OVERLAY_PERF_INFO, e)
        }), null == (f = module.broadcastCommand) || Chunk442837.call(module, {
          message: "set_perf_report_interval",
          interval: 15 * Chunk70956.Z.Millis.MINUTE
        })
      }
      Chunk998502.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        B.default.getDisableExternalLinkAlert() || t === M.Z.getLastURL() ? K.ZP.send("OPEN_EXTERNAL_URL", t) : m.Z.show({
          title: eh.intl.string(eh.t.WLx4F6),
          body: eh.intl.string(eh.t.H8O1TK),
          secondaryConfirmText: eh.intl.string(eh.t.IwqGhU),
          confirmText: eh.intl.string(eh.t["3PatSz"]),
          cancelText: eh.intl.string(eh.t["ETE/oC"]),
          onConfirmSecondary: () => {
            b.Z.disableExternalLinkAlert()
          },
          onConfirm: () => K.ZP.send("OPEN_EXTERNAL_URL", t)
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, true), window.addEventListener("keyup", this.onKeyUpGlobal, true)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, true), window.removeEventListener("keyup", this.onKeyUpGlobal, true), this.props.locked && window.removeEventListener("contextmenu", em, false), Chunk377400.Z.terminate(), Chunk185666.Z.terminate(), Chunk329557.Z.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, Chunk54381.jsx)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.CENTER,
      align: Chunk600164.Z.Align.CENTER,
      className: Chunk735831.invalidContainer,
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk735831.inactiveContainer,
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
      voiceChannelId: u
    } = this.props, {
      width: h,
      height: p
    } = c;
    if (0 === Chunk498607 || 0 === p || require || !Chunk473749) return null;
    let f = module || Chunk120356,
      g = Chunk314897.default.getId();
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk735831.overlay,
      children: [(0, Chunk54381.jsx)(Chunk708383.Z, {}), Chunk120356 && (0, Chunk54381.jsx)("header", {
        className: Chunk735831.previewingInGameHeader,
        children: Chunk388032.intl.string(Chunk388032.t.iOq96m)
      }), i, (!module || Chunk921738.has(Chunk981631.O0n.TEXT_WIDGET)) && (0, Chunk54381.jsx)(eb, {
        locked: module,
        keybind: exports,
        onClick: module ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: Chunk120356
      }), (0, Chunk145597.validResolution)(c) ? (0, Chunk54381.jsx)(Chunk312178.Z, {
        className: s()({
          [Chunk735831.layoutLocked]: module,
          [Chunk735831.layoutUnlocked]: !module
        })
      }) : module ? null : this.renderInvalidSizeMessage(), (0, Chunk54381.jsx)(Chunk107200.Z, {}), null != Chunk954955 && null != u && (0, Chunk54381.jsx)(Chunk923532.Z, {
        streamerId: Chunk481060,
        guildId: Chunk954955.id,
        channelId: u
      }), (0, Chunk54381.jsx)(Chunk348733.Z, {
        locked: Chunk442837,
        keybind: exports
      }), (0, Chunk54381.jsx)(Chunk681603.Z, {}), (0, Chunk54381.jsx)("div", {
        className: Chunk735831.overlayMountPx
      })]
    })
  }
  constructor(e) {
    super(e), ef(this, "didUpdate", false), ef(this, "debouncedForceUpdate", u()(() => {
      this.forceUpdate()
    }, 500)), ef(this, "handleWindowResize", () => {
      U.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate()
    }), ef(this, "activeKeyEventShapes", []), ef(this, "lockEventShape", (0, q.d2)(this.props.keybindKeyCodes)), ef(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => p()(t, e))), ef(this, "onKeyDownGlobal", e => {
      let t = e_(e),
        n = this.getActiveKeyEventIndex(t) > false,
        i = [16, 17, 18, 91].includes(e.keyCode);
      n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: r,
        activeRegions: o
      } = this.props;
      t.keyCode === c().codes.esc && r && o.has(eu.O0n.TEXT_WIDGET) && b.Z.deactivateAllRegions()
    }), ef(this, "onKeyUpGlobal", e => {
      let t = e_(e),
        n = this.getActiveKeyEventIndex(t);
      n > false && this.activeKeyEventShapes.splice(n, 1)
    });
    let t = e.locked && B.default.isPinned(eu.Odu.TEXT);
    O.Z.setLayout(t ? v.Xq : v.Sr), t && O.Z.enable()
  }
}

function eO() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: l
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    locked: Chunk237997.default.isLocked((0, Chunk145597.getPID)()),
    initialized: Chunk237997.default.initialized,
    incompatibleApp: Chunk237997.default.incompatibleApp,
    activeRegions: Chunk237997.default.getActiveRegions(),
    isPreviewingInGame: Chunk237997.default.isPreviewingInGame()
  })), s = (0, Chunk442837.e7)([Chunk451478.Z], () => Chunk451478.Z.windowSize()), a = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()), c = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getVoiceChannelId()), d = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(c)), u = (0, Chunk442837.e7)([Chunk430824.Z], () => null != Chunk954955 ? Chunk430824.Z.getGuild(Chunk954955.guild_id) : null), h = (0, Chunk442837.e7)([Chunk594190.ZP, Chunk449224.Z], () => (0, Chunk989941.Z)(Chunk594190.ZP, Chunk449224.Z)), p = (0, Chunk442837.e7)([Chunk131951.Z], () => (0, Chunk74299.Z)(Chunk131951.Z)), g = (0, Chunk442837.e7)([Chunk199902.Z], () => null != Chunk199902.Z.getCurrentUserActiveStream()), {
    analyticsLocations: m
  } = (0, Chunk906732.ZP)(Chunk100527.Z.OVERLAY), {
    showKeybindIndicators: y,
    dismissKeybindNotification: b
  } = (0, Chunk358446.K)();
  return Chunk473749.useEffect(() => {
    exports && (0, Chunk32300.F3)()
  }, [exports]), (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: Chunk668781,
    children: (0, Chunk54381.jsx)(ev, {
      locked: module,
      initialized: exports,
      incompatibleApp: require,
      activeRegions: i,
      isPreviewingInGame: Chunk120356,
      windowSize: s,
      keybind: null != Chunk921738 ? (0, Chunk13140.BB)(Chunk921738.shortcut, true) : "???",
      keybindKeyCodes: null != Chunk921738 ? Chunk921738.shortcut : [],
      connectedToVoice: null != c,
      voiceChannelId: null != Chunk954955 ? Chunk954955.id : null,
      voiceGuild: u,
      game: Chunk498607,
      canGoLive: p,
      isStreaming: Chunk481060,
      showKeybindNotification: Chunk239091,
      dismissKeybindNotification: Chunk13245
    })
  })
}