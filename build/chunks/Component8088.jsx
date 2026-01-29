/** Chunk was on 84018 **/
/** chunk id: 8088, original params: e,t,n (module,exports,require) **/
"use strict";
let i;
require.d(exports, {
  A: () => eO
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk695497 = require("./695497.js"),
  c = require.n(Chunk695497),
  Chunk111956 = require("./111956.js"),
  u = require.n(Chunk111956),
  Chunk33851 = require("./33851.js"),
  h = require.n(Chunk33851),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk684013 = require("./684013.js"),
  Chunk684136 = require("./684136.jsx"),
  Chunk34968 = require("./34968.js"),
  Chunk775121 = require("./775121.js"),
  Chunk836753 = require("./836753.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk235986 = require("./235986.jsx");
require("./607470.jsx");
var Chunk15285 = require("./15285.js"),
  Chunk880144 = require("./880144.js"),
  Chunk905552 = require("./905552.js"),
  Chunk768841 = require("./768841.jsx"),
  Chunk265367 = require("./265367.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk555528 = require("./555528.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk70142 = require("./70142.js"),
  Chunk157257 = require("./157257.js"),
  Chunk712687 = require("./712687.js"),
  Chunk532624 = require("./532624.js"),
  Chunk242286 = require("./242286.js"),
  Chunk899699 = require("./899699.js"),
  Chunk256415 = require("./256415.js"),
  Chunk531685 = require("./531685.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk316501 = require("./316501.js"),
  Chunk350535 = require("./350535.js"),
  Chunk9302 = require("./9302.js"),
  Chunk641376 = require("./641376.js"),
  Chunk41984 = require("./41984.js"),
  Chunk589051 = require("./589051.js"),
  Chunk223251 = require("./223251.js"),
  Chunk764559 = require("./764559.jsx"),
  Chunk227308 = require("./227308.jsx"),
  Chunk409110 = require("./409110.jsx"),
  Chunk160162 = require("./160162.jsx"),
  Chunk395809 = require("./395809.jsx"),
  Chunk755029 = require("./755029.jsx"),
  Chunk592598 = require("./592598.js"),
  Chunk672396 = require("./672396.js");
require("./644434.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk675490 = require("./675490.js");

function ep(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eh(e) {
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

function ef(e, t) {
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
Chunk311907.Ay.PersistedStore.disableWrites = __OVERLAY__, Chunk311907.Ay.initialize();
let eg = null;

function ey(e) {
  e.preventDefault()
}

function em(e) {
  (0, y.L3)(e, async () => {
    let {
      default: e
    } = await n.e("92843").then(n.bind(n, 254790));
    return t => (0, r.jsx)(e, ef(eh({}, t), {
      version: 0
    }))
  })
}
Chunk723702.isPlatformEmbedded;
let e_ = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: s
    } = e, l = s ? g.DUT : "div";
    return (0, r.jsx)(l, {
      className: o()(eu.LK, {
        [eu.Zo]: !s,
        [eu.vZ]: s,
        [eu.Az]: !s && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === ec.hE4.PRIMARY && t === i && n()
      },
      onContextMenu: em,
      children: s ? null : (0, r.jsx)("div", {
        className: eu.G3,
        children: (0, r.jsx)(_.A, {
          variant: _.A.Variants.BOLD,
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
class eA extends Chunk64700.Component {
  handleLock() {
    (0, g.ueM)() || U.A.isOpen() || m.A.setInputLocked(true, (0, J.getPID)())
  }
  handleDeactivate() {
    m.A.deactivateAllRegions()
  }
  componentDidMount() {
    m.A.startSession(), I.A.initialize(), O.A.initialize(), w.A.initialize()
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
        if (window.addEventListener("contextmenu", ey, false), null != eg) {
          let e = Date.now() - eg;
          m.A.track(ec.HAw.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), eg = null
        }
        A.A.disable(), this.activeKeyEventShapes = [], W.default.isPinned(ec.uss.TEXT) && (A.A.setLayout(b.dY), A.A.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", ey, false), null == eg && (eg = Date.now(), m.A.track(ec.HAw.OVERLAY_UNLOCKED)), A.A.disable(), this.activeKeyEventShapes = [], A.A.setLayout(b.CJ), A.A.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, X.pi)(this.props.keybindKeyCodes))
    }
  }
  initialSetup() {
    let e, {
      connectedToVoice: t,
      locked: i,
      canGoLive: s,
      isStreaming: l,
      voiceGuild: o,
      voiceChannelId: a,
      game: c,
      showKeybindNotification: d,
      dismissKeybindNotification: u
    } = this.props;
    m.A.track(ec.HAw.OVERLAY_INITIALIZED, {
      voice_widget_connected: t,
      text_widget_connected: W.default.isPinned(ec.uss.TEXT),
      overlay_render_method: q.Ue[q.Ue.Hook],
      unpinned_widget_types: R.A.getAllUnpinnedPinnedWidgets(J.OVERLAY_LAYOUT_ID)
    }), Q.A.trackExposure({
      location: "Overlay"
    });
    let p = s && !l && null != c,
      h = t && null != o && null != a,
      f = eo.A.isNotificationDisabled(ea.KS.WelcomeNudge),
      y = eo.A.isNotificationDisabled(ea.KS.GoLiveNudge);
    if (f || (e = {
        type: ea.Jr.WELCOME
      }), d && !f ? e = {
        type: ea.Jr.KEYBIND_INDICATORS,
        markAsDismissed: u
      } : p && h && !y ? e = {
        type: ea.Jr.GO_LIVE_VOICE,
        game: c,
        voiceChannelId: a,
        voiceGuild: o
      } : p && !y && (e = {
        type: ea.Jr.GO_LIVE_NON_VOICE,
        game: c
      }), setTimeout(async () => {
        await (0, Z.pF)(), null != e ? m.A.overlayMounted(e) : m.A.overlayMounted()
      }, 128), window.addEventListener("resize", this.handleWindowResize), i && window.addEventListener("contextmenu", ey, false), F.isPlatformEmbedded) {
      let e = (0, H.m)();
      if (null == e) return;
      if (true !== e.setPerfInfoCallback) {
        var _;
        e.setPerfInfoCallback(e => {
          m.A.track(ec.HAw.OVERLAY_PERF_INFO, e)
        }), null == (_ = e.broadcastCommand) || _.call(e, {
          message: "set_perf_report_interval",
          interval: 15 * B.A.Millis.MINUTE
        })
      }
      Y.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        W.default.getDisableExternalLinkAlert() || t === M.A.getLastURL() ? Y.Ay.send("OPEN_EXTERNAL_URL", t) : (0, g.mMO)(async () => {
          let {
            default: e
          } = await n.e("30582").then(n.bind(n, 613429));
          return n => (0, r.jsx)(e, ef(eh({}, n), {
            url: t
          }))
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, true), window.addEventListener("keyup", this.onKeyUpGlobal, true)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, true), window.removeEventListener("keyup", this.onKeyUpGlobal, true), this.props.locked && window.removeEventListener("contextmenu", ey, false), I.A.terminate(), O.A.terminate(), w.A.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, r.jsx)(x.A, {
      justify: x.A.Justify.CENTER,
      align: x.A.Align.CENTER,
      className: eu.rU,
      children: (0, r.jsx)("div", {
        className: eu.JV,
        children: ed.intl.format(ed.t.ketnW0, J.OVERLAY_MIN_RESOLUTION)
      })
    })
  }
  render() {
    let {
      locked: e,
      keybind: t,
      incompatibleApp: n,
      initialized: s,
      isPreviewingInGame: l,
      activeRegions: a,
      windowSize: c,
      voiceGuild: d,
      voiceChannelId: u
    } = this.props, {
      width: p,
      height: h
    } = c;
    if (0 === p || 0 === h || n || !s) return null;
    let f = e || l,
      g = T.default.getId();
    return (0, r.jsxs)("div", {
      className: eu.Lw,
      children: [(0, r.jsx)(er.A, {}), l && (0, r.jsx)("header", {
        className: eu.tk,
        children: ed.intl.string(ed.t.iOq96m)
      }), i, (!e || a.has(ec.ajI.TEXT_WIDGET)) && (0, r.jsx)(e_, {
        locked: e,
        keybind: t,
        onClick: e ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: l
      }), (0, J.validResolution)(c) ? (0, r.jsx)(ei.A, {
        className: o()({
          [eu.ZK]: e,
          [eu.al]: !e
        })
      }) : e ? null : this.renderInvalidSizeMessage(), (0, r.jsx)(el.A, {}), null != d && null != u && (0, r.jsx)(es.A, {
        streamerId: g,
        guildId: d.id,
        channelId: u
      }), (0, r.jsx)(en.A, {
        locked: f,
        keybind: t
      }), (0, r.jsx)(ee.A, {}), (0, r.jsx)("div", {
        className: eu._C
      })]
    })
  }
  constructor(e) {
    super(e), ep(this, "didUpdate", false), ep(this, "debouncedForceUpdate", u()(() => {
      this.forceUpdate()
    }, 500)), ep(this, "handleWindowResize", () => {
      z.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate()
    }), ep(this, "activeKeyEventShapes", []), ep(this, "lockEventShape", (0, X.pi)(this.props.keybindKeyCodes)), ep(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => h()(t, e))), ep(this, "onKeyDownGlobal", e => {
      let t = eb(e),
        n = this.getActiveKeyEventIndex(t) > false,
        i = [16, 17, 18, 91].includes(e.keyCode);
      n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => h()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: r,
        activeRegions: s
      } = this.props;
      t.keyCode === c().codes.esc && r && s.has(ec.ajI.TEXT_WIDGET) && m.A.deactivateAllRegions()
    }), ep(this, "onKeyUpGlobal", e => {
      let t = eb(e),
        n = this.getActiveKeyEventIndex(t);
      n > false && this.activeKeyEventShapes.splice(n, 1)
    });
    const t = e.locked && W.default.isPinned(ec.uss.TEXT);
    A.A.setLayout(t ? b.dY : b.CJ), t && A.A.enable()
  }
}

function eO() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: l
  } = (0, f.cf)([W.default], () => ({
    locked: W.default.isLocked((0, J.getPID)()),
    initialized: W.default.initialized,
    incompatibleApp: W.default.incompatibleApp,
    activeRegions: W.default.getActiveRegions(),
    isPreviewingInGame: W.default.isPreviewingInGame()
  })), o = (0, f.bG)([K.A], () => K.A.windowSize()), a = (0, f.bG)([V.Ay], () => V.Ay.getOverlayKeybind()), c = (0, f.bG)([L.A], () => L.A.getVoiceChannelId()), d = (0, f.bG)([P.A], () => P.A.getChannel(c)), u = (0, f.bG)([D.A], () => null != d ? D.A.getGuild(d.guild_id) : null), p = (0, f.bG)([S.Ay, G.A], () => (0, C.A)(S.Ay, G.A)), h = (0, f.bG)([k.A], () => (0, j.A)(k.A)), g = (0, f.bG)([N.A], () => null != N.A.getCurrentUserActiveStream()), {
    analyticsLocations: y
  } = (0, E.Ay)(v.A.OVERLAY), {
    showKeybindIndicators: m,
    dismissKeybindNotification: _
  } = (0, et.B)();
  return s.useEffect(() => {
    t && (0, $.E)()
  }, [t]), (0, r.jsx)(E.f5, {
    value: y,
    children: (0, r.jsx)(eA, {
      locked: e,
      initialized: t,
      incompatibleApp: n,
      activeRegions: i,
      isPreviewingInGame: l,
      windowSize: o,
      keybind: null != a ? (0, X.dI)(a.shortcut, true) : "???",
      keybindKeyCodes: null != a ? a.shortcut : [],
      connectedToVoice: null != c,
      voiceChannelId: null != d ? d.id : null,
      voiceGuild: u,
      game: p,
      canGoLive: h,
      isStreaming: g,
      showKeybindNotification: m,
      dismissKeybindNotification: _
    })
  })
}