/** Chunk was on 63141 **/
/** chunk id: 631553, original params: e,t,n (module,exports,require) **/
"use strict";
let i;
require.d(exports, {
  Z: () => ex
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
  f = require.n(Chunk498607),
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
  Chunk813653 = require("./813653.js");

function ef(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ep(e) {
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

function eb(e) {
  e.preventDefault()
}

function ey(e) {
  (0, m.jW)(e, async () => {
    let {
      default: e
    } = await n.e("92780").then(n.bind(n, 930381));
    return t => (0, r.jsx)(e, eg(ep({}, t), {
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
  eO = e => {
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
class eE extends Chunk473749.Component {
  handleLock() {
    (0, g.$sL)() || z.Z.isOpen() || b.Z.setInputLocked(true, (0, J.getPID)())
  }
  handleDeactivate() {
    b.Z.deactivateAllRegions()
  }
  componentDidMount() {
    b.Z.startSession(), I.Z.initialize(), E.Z.initialize(), P.Z.initialize()
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
        if (window.addEventListener("contextmenu", eb, false), null != em) {
          let e = Date.now() - em;
          b.Z.track(ed.rMx.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), em = null
        }
        O.Z.disable(), this.activeKeyEventShapes = [], G.default.isPinned(ed.Odu.TEXT) && (O.Z.setLayout(v.Xq), O.Z.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", eb, false), null == em && (em = Date.now(), b.Z.track(ed.rMx.OVERLAY_UNLOCKED)), O.Z.disable(), this.activeKeyEventShapes = [], O.Z.setLayout(v.Sr), O.Z.enable());
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
    b.Z.track(ed.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: t,
      text_widget_connected: G.default.isPinned(ed.Odu.TEXT),
      overlay_render_method: Q.gl[Q.gl.Hook],
      unpinned_widget_types: k.Z.getAllUnpinnedPinnedWidgets(J.OVERLAY_LAYOUT_ID)
    }), q.Z.trackExposure({
      location: "Overlay"
    });
    let h = s && !o && null != c,
      f = t && null != l && null != a,
      p = el.Z.isNotificationDisabled(ea.n0.WelcomeNudge),
      m = el.Z.isNotificationDisabled(ea.n0.GoLiveNudge);
    if (p || (e = {
        type: ea.nc.WELCOME
      }), d && !p ? e = {
        type: ea.nc.KEYBIND_INDICATORS,
        markAsDismissed: u
      } : h && f && !m ? e = {
        type: ea.nc.GO_LIVE_VOICE,
        game: c,
        voiceChannelId: a,
        voiceGuild: l
      } : h && !m && (e = {
        type: ea.nc.GO_LIVE_NON_VOICE,
        game: c
      }), setTimeout(async () => {
        await (0, K.s5)(), null != e ? b.Z.overlayMounted(e) : b.Z.overlayMounted()
      }, 128), window.addEventListener("resize", this.handleWindowResize), i && window.addEventListener("contextmenu", eb, false), F.isPlatformEmbedded) {
      let e = (0, W.M)();
      if (null == e) return;
      if (true !== e.setPerfInfoCallback) {
        var y;
        e.setPerfInfoCallback(e => {
          b.Z.track(ed.rMx.OVERLAY_PERF_INFO, e)
        }), null == (y = e.broadcastCommand) || y.call(e, {
          message: "set_perf_report_interval",
          interval: 15 * H.Z.Millis.MINUTE
        })
      }
      Y.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        G.default.getDisableExternalLinkAlert() || t === L.Z.getLastURL() ? Y.ZP.send("OPEN_EXTERNAL_URL", t) : (0, g.ZDy)(async () => {
          let {
            default: e
          } = await n.e("32493").then(n.bind(n, 939791));
          return n => (0, r.jsx)(e, eg(ep({}, n), {
            url: t
          }))
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, true), window.addEventListener("keyup", this.onKeyUpGlobal, true)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, true), window.removeEventListener("keyup", this.onKeyUpGlobal, true), this.props.locked && window.removeEventListener("contextmenu", eb, false), I.Z.terminate(), E.Z.terminate(), P.Z.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, r.jsx)(Z.Z, {
      justify: Z.Z.Justify.CENTER,
      align: Z.Z.Align.CENTER,
      className: eh.invalidContainer,
      children: (0, r.jsx)("div", {
        className: eh.inactiveContainer,
        children: eu.intl.format(eu.t.ketnW0, J.OVERLAY_MIN_RESOLUTION)
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
      height: f
    } = c;
    if (0 === h || 0 === f || n || !s) return null;
    let p = e || o,
      g = N.default.getId();
    return (0, r.jsxs)("div", {
      className: eh.overlay,
      children: [(0, r.jsx)(er.Z, {}), o && (0, r.jsx)("header", {
        className: eh.previewingInGameHeader,
        children: eu.intl.string(eu.t.iOq96m)
      }), i, (!e || a.has(ed.O0n.TEXT_WIDGET)) && (0, r.jsx)(ev, {
        locked: e,
        keybind: t,
        onClick: e ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: o
      }), (0, J.validResolution)(c) ? (0, r.jsx)(ei.Z, {
        className: l()({
          [eh.layoutLocked]: e,
          [eh.layoutUnlocked]: !e
        })
      }) : e ? null : this.renderInvalidSizeMessage(), (0, r.jsx)(eo.Z, {}), null != d && null != u && (0, r.jsx)(es.Z, {
        streamerId: g,
        guildId: d.id,
        channelId: u
      }), (0, r.jsx)(en.Z, {
        locked: p,
        keybind: t
      }), (0, r.jsx)(ee.Z, {}), (0, r.jsx)("div", {
        className: eh.overlayMountPx
      })]
    })
  }
  constructor(e) {
    super(e), ef(this, "didUpdate", false), ef(this, "debouncedForceUpdate", u()(() => {
      this.forceUpdate()
    }, 500)), ef(this, "handleWindowResize", () => {
      U.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate()
    }), ef(this, "activeKeyEventShapes", []), ef(this, "lockEventShape", (0, X.d2)(this.props.keybindKeyCodes)), ef(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => f()(t, e))), ef(this, "onKeyDownGlobal", e => {
      let t = eO(e),
        n = this.getActiveKeyEventIndex(t) > false,
        i = [16, 17, 18, 91].includes(e.keyCode);
      n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => f()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: r,
        activeRegions: s
      } = this.props;
      t.keyCode === c().codes.esc && r && s.has(ed.O0n.TEXT_WIDGET) && b.Z.deactivateAllRegions()
    }), ef(this, "onKeyUpGlobal", e => {
      let t = eO(e),
        n = this.getActiveKeyEventIndex(t);
      n > false && this.activeKeyEventShapes.splice(n, 1)
    });
    let t = e.locked && G.default.isPinned(ed.Odu.TEXT);
    O.Z.setLayout(t ? v.Xq : v.Sr), t && O.Z.enable()
  }
}

function ex() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: o
  } = (0, p.cj)([G.default], () => ({
    locked: G.default.isLocked((0, J.getPID)()),
    initialized: G.default.initialized,
    incompatibleApp: G.default.incompatibleApp,
    activeRegions: G.default.getActiveRegions(),
    isPreviewingInGame: G.default.isPreviewingInGame()
  })), l = (0, p.e7)([B.Z], () => B.Z.windowSize()), a = (0, p.e7)([V.ZP], () => V.ZP.getOverlayKeybind()), c = (0, p.e7)([A.Z], () => A.Z.getVoiceChannelId()), d = (0, p.e7)([T.Z], () => T.Z.getChannel(c)), u = (0, p.e7)([D.Z], () => null != d ? D.Z.getGuild(d.guild_id) : null), h = (0, p.e7)([j.ZP, M.Z], () => (0, C.Z)(j.ZP, M.Z)), f = (0, p.e7)([R.Z], () => (0, _.Z)(R.Z)), g = (0, p.e7)([w.Z], () => null != w.Z.getCurrentUserActiveStream()), {
    analyticsLocations: m
  } = (0, S.ZP)(x.Z.OVERLAY), {
    showKeybindIndicators: b,
    dismissKeybindNotification: y
  } = (0, et.K)();
  return s.useEffect(() => {
    t && (0, $.F3)()
  }, [t]), (0, r.jsx)(S.Gt, {
    value: m,
    children: (0, r.jsx)(eE, {
      locked: e,
      initialized: t,
      incompatibleApp: n,
      activeRegions: i,
      isPreviewingInGame: o,
      windowSize: l,
      keybind: null != a ? (0, X.BB)(a.shortcut, true) : "???",
      keybindKeyCodes: null != a ? a.shortcut : [],
      connectedToVoice: null != c,
      voiceChannelId: null != d ? d.id : null,
      voiceGuild: u,
      game: h,
      canGoLive: f,
      isStreaming: g,
      showKeybindNotification: b,
      dismissKeybindNotification: y
    })
  })
}