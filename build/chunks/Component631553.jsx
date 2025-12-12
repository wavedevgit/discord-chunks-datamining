/** Chunk was on 63141 **/
/** chunk id: 631553, original params: e,t,n (module,exports,require) **/
"use strict";
let i;
require.d(exports, {
  Z: () => eE
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk921738 = require("./921738.js"),
  c = require.n(Chunk921738),
  Chunk954955 = require("./954955.js"),
  u = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  p = require.n(Chunk498607),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk722363 = require("./722363.js");

function ep(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ep(e, t, n[t])
    })
  }
  return e
}

function eg(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
Chunk442837.ZP.PersistedStore.disableWrites = __OVERLAY__, Chunk442837.ZP.initialize();
let em = null;

function e_(e) {
  e.preventDefault()
}

function ey(e) {
  (0, m.jW)(e, async () => {
    let {
      default: e
    } = await n.e("92780").then(n.bind(n, 930381));
    return t => (0, r.jsx)(e, eg(ef({}, t), {
      version: ec.bv
    }))
  })
}
Chunk358085.isPlatformEmbedded;
let ev = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: s
    } = e, o = s ? g.P3F : "div";
    return (0, r.jsx)(o, {
      className: l()(eh.overlayBackground, {
        [eh.overlayActive]: !s,
        [eh.overlayLocked]: s,
        [eh.previewMode]: !s && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === ed.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: ey,
      children: s ? null : (0, r.jsx)("div", {
        className: eh.closeContainer,
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
      ctrlKey: s
    } = e;
    return {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: r,
      ctrlKey: s
    }
  };
class eO extends Chunk473749.Component {
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
        if (window.addEventListener("contextmenu", e_, false), null != em) {
          let e = Date.now() - em;
          _.Z.track(ed.rMx.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), em = null
        }
        b.Z.disable(), this.activeKeyEventShapes = [], G.default.isPinned(ed.Odu.TEXT) && (b.Z.setLayout(v.Xq), b.Z.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", e_, false), null == em && (em = Date.now(), _.Z.track(ed.rMx.OVERLAY_UNLOCKED)), b.Z.disable(), this.activeKeyEventShapes = [], b.Z.setLayout(v.Sr), b.Z.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, X.d2)(this.props.keybindKeyCodes))
    }
  }
  initialSetup() {
    let e, {
      connectedToVoice: t,
      locked: i,
      canGoLive: s,
      isStreaming: o,
      voiceGuild: l,
      voiceChannelId: a,
      game: c,
      showKeybindNotification: d,
      dismissKeybindNotification: u
    } = this.props;
    Chunk13245.Z.track(Chunk981631.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: exports,
      text_widget_connected: Chunk237997.default.isPinned(Chunk981631.Odu.TEXT),
      overlay_render_method: Chunk837268.gl[Chunk837268.gl.Hook],
      unpinned_widget_types: Chunk355863.Z.getAllUnpinnedPinnedWidgets(Chunk145597.OVERLAY_LAYOUT_ID)
    }), Chunk658785.Z.trackExposure({
      location: "Overlay"
    });
    let h = Chunk473749 && !Chunk120356 && null != c,
      p = exports && null != l && null != Chunk921738,
      f = Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.WelcomeNudge),
      m = Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.GoLiveNudge);
    if (Chunk442837 || (e = {
        type: Chunk987650.nc.WELCOME
      }), Chunk954955 && !Chunk442837 ? e = {
        type: Chunk987650.nc.KEYBIND_INDICATORS,
        markAsDismissed: u
      } : Chunk498607 && p && !Chunk239091 ? e = {
        type: Chunk987650.nc.GO_LIVE_VOICE,
        game: c,
        voiceChannelId: Chunk921738,
        voiceGuild: l
      } : Chunk498607 && !Chunk239091 && (e = {
        type: Chunk987650.nc.GO_LIVE_NON_VOICE,
        game: c
      }), setTimeout(async () => {
        await (0, Chunk378799.s5)(), null != module ? Chunk13245.Z.overlayMounted(module) : Chunk13245.Z.overlayMounted()
      }, 128), window.addEventListener("resize", this.handleWindowResize), i && window.addEventListener("contextmenu", e_, false), Chunk358085.isPlatformEmbedded) {
      let e = (0, Chunk372679.M)();
      if (null == module) return;
      if (true !== module.setPerfInfoCallback) {
        var y;
        module.setPerfInfoCallback(e => {
          _.Z.track(ed.rMx.OVERLAY_PERF_INFO, e)
        }), null == (y = module.broadcastCommand) || Chunk425493.call(module, {
          message: "set_perf_report_interval",
          interval: 15 * Chunk70956.Z.Millis.MINUTE
        })
      }
      Chunk998502.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        G.default.getDisableExternalLinkAlert() || t === L.Z.getLastURL() ? Y.ZP.send("OPEN_EXTERNAL_URL", t) : (0, g.ZDy)(async () => {
          let {
            default: e
          } = await n.e("32493").then(n.bind(n, 939791));
          return n => (0, r.jsx)(e, eg(ef({}, n), {
            url: t
          }))
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, true), window.addEventListener("keyup", this.onKeyUpGlobal, true)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, true), window.removeEventListener("keyup", this.onKeyUpGlobal, true), this.props.locked && window.removeEventListener("contextmenu", e_, false), Chunk377400.Z.terminate(), Chunk185666.Z.terminate(), Chunk329557.Z.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, Chunk54381.jsx)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.CENTER,
      align: Chunk600164.Z.Align.CENTER,
      className: Chunk722363.invalidContainer,
      children: (0, Chunk54381.jsx)("div", {
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
      initialized: s,
      isPreviewingInGame: o,
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
      className: Chunk722363.overlay,
      children: [(0, Chunk54381.jsx)(Chunk708383.Z, {}), Chunk120356 && (0, Chunk54381.jsx)("header", {
        className: Chunk722363.previewingInGameHeader,
        children: Chunk388032.intl.string(Chunk388032.t.iOq96m)
      }), i, (!module || Chunk921738.has(Chunk981631.O0n.TEXT_WIDGET)) && (0, Chunk54381.jsx)(ev, {
        locked: module,
        keybind: exports,
        onClick: module ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: Chunk120356
      }), (0, Chunk145597.validResolution)(c) ? (0, Chunk54381.jsx)(Chunk312178.Z, {
        className: l()({
          [Chunk722363.layoutLocked]: module,
          [Chunk722363.layoutUnlocked]: !module
        })
      }) : module ? null : this.renderInvalidSizeMessage(), (0, Chunk54381.jsx)(Chunk107200.Z, {}), null != Chunk954955 && null != u && (0, Chunk54381.jsx)(Chunk923532.Z, {
        streamerId: Chunk481060,
        guildId: Chunk954955.id,
        channelId: u
      }), (0, Chunk54381.jsx)(Chunk348733.Z, {
        locked: Chunk442837,
        keybind: exports
      }), (0, Chunk54381.jsx)(Chunk681603.Z, {}), (0, Chunk54381.jsx)("div", {
        className: Chunk722363.overlayMountPx
      })]
    })
  }
  constructor(e) {
    super(e), ep(this, "didUpdate", false), ep(this, "debouncedForceUpdate", u()(() => {
      this.forceUpdate()
    }, 500)), ep(this, "handleWindowResize", () => {
      W.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate()
    }), ep(this, "activeKeyEventShapes", []), ep(this, "lockEventShape", (0, X.d2)(this.props.keybindKeyCodes)), ep(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => p()(t, e))), ep(this, "onKeyDownGlobal", e => {
      let t = eb(e),
        n = this.getActiveKeyEventIndex(t) > false,
        i = [16, 17, 18, 91].includes(e.keyCode);
      n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: r,
        activeRegions: s
      } = this.props;
      t.keyCode === c().codes.esc && r && s.has(ed.O0n.TEXT_WIDGET) && _.Z.deactivateAllRegions()
    }), ep(this, "onKeyUpGlobal", e => {
      let t = eb(e),
        n = this.getActiveKeyEventIndex(t);
      n > false && this.activeKeyEventShapes.splice(n, 1)
    });
    let t = e.locked && G.default.isPinned(ed.Odu.TEXT);
    b.Z.setLayout(t ? v.Xq : v.Sr), t && b.Z.enable()
  }
}

function eE() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: o
  } = (0, Chunk442837.cj)([Chunk237997.default], () => ({
    locked: Chunk237997.default.isLocked((0, Chunk145597.getPID)()),
    initialized: Chunk237997.default.initialized,
    incompatibleApp: Chunk237997.default.incompatibleApp,
    activeRegions: Chunk237997.default.getActiveRegions(),
    isPreviewingInGame: Chunk237997.default.isPreviewingInGame()
  })), l = (0, Chunk442837.e7)([Chunk451478.Z], () => Chunk451478.Z.windowSize()), a = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getOverlayKeybind()), c = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getVoiceChannelId()), d = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(c)), u = (0, Chunk442837.e7)([Chunk430824.Z], () => null != Chunk954955 ? Chunk430824.Z.getGuild(Chunk954955.guild_id) : null), h = (0, Chunk442837.e7)([Chunk594190.ZP, Chunk449224.Z], () => (0, Chunk989941.Z)(Chunk594190.ZP, Chunk449224.Z)), p = (0, Chunk442837.e7)([Chunk131951.Z], () => (0, Chunk74299.Z)(Chunk131951.Z)), g = (0, Chunk442837.e7)([Chunk199902.Z], () => null != Chunk199902.Z.getCurrentUserActiveStream()), {
    analyticsLocations: m
  } = (0, Chunk906732.ZP)(Chunk100527.Z.OVERLAY), {
    showKeybindIndicators: _,
    dismissKeybindNotification: y
  } = (0, Chunk358446.K)();
  return Chunk473749.useEffect(() => {
    exports && (0, Chunk32300.F3)()
  }, [exports]), (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: Chunk239091,
    children: (0, Chunk54381.jsx)(eO, {
      locked: module,
      initialized: exports,
      incompatibleApp: require,
      activeRegions: i,
      isPreviewingInGame: Chunk120356,
      windowSize: l,
      keybind: null != Chunk921738 ? (0, Chunk13140.BB)(Chunk921738.shortcut, true) : "???",
      keybindKeyCodes: null != Chunk921738 ? Chunk921738.shortcut : [],
      connectedToVoice: null != c,
      voiceChannelId: null != Chunk954955 ? Chunk954955.id : null,
      voiceGuild: u,
      game: Chunk498607,
      canGoLive: p,
      isStreaming: Chunk481060,
      showKeybindNotification: Chunk13245,
      dismissKeybindNotification: Chunk425493
    })
  })
}