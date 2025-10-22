/** Chunk was on 33840 **/
/** chunk id: 615161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E_: () => C,
  Ti: () => y,
  Yw: () => b
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk579806 = require("./579806.js"),
  Chunk751571 = require("./751571.js"),
  Chunk695346 = require("./695346.js"),
  Chunk361291 = require("./361291.js"),
  Chunk131951 = require("./131951.js"),
  Chunk580991 = require("./580991.js"),
  Chunk451467 = require("./451467.js"),
  Chunk37113 = require("./37113.js"),
  Chunk761274 = require("./761274.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = {
    screenSources: [],
    windowSources: [],
    deviceSources: [],
    hasPermission: true,
    muteStreamAudio: false,
    notifyFriends: false,
    hidePreview: false,
    preset: Chunk37113.ApplicationStreamPresets.PRESET_CUSTOM,
    resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_720,
    fps: Chunk37113.ApplicationStreamFPS.FPS_30,
    sourceType: Chunk268146.vA.WINDOW,
    fetchingSources: true,
    selectedSource: true,
    audioSourceId: true,
    selectedChannel: true,
    nativeSourceType: "",
    discordSourceId: ""
  },
  v = Chunk647438.createContext(x),
  j = Chunk647438.createContext(() => {
    throw Error("Using uninitialized GoLiveModalContextDispatch")
  });

function S(e, t) {
  switch (t.type) {
    case "set_mute_audio":
      return g(_({}, e), {
        muteStreamAudio: t.value
      });
    case "set_notify_friends":
      return g(_({}, e), {
        notifyFriends: t.value
      });
    case "set_has_permission":
      return g(_({}, e), {
        hasPermission: t.value
      });
    case "set_source_candidates":
      return g(_({}, e), {
        screenSources: t.screenSources,
        windowSources: t.windowSources,
        deviceSources: t.deviceSources,
        fetchingSources: false
      });
    case "set_preset":
      return g(_({}, e), {
        preset: t.preset
      });
    case "set_source_type":
      let n = {
        sourceType: t.sourceType,
        selectedSource: true
      };
      return t.sourceType === l.vA.CAMERA && ((e.preset === h.ApplicationStreamPresets.PRESET_DOCUMENTS || e.preset === h.ApplicationStreamPresets.PRESET_AUTO) && (n.preset = h.ApplicationStreamPresets.PRESET_VIDEO), e.resolution === h.ApplicationStreamResolutions.RESOLUTION_SOURCE && (n.resolution = h.ApplicationStreamResolutions.RESOLUTION_720)), _({}, e, n);
    case "set_native_source_type":
      return g(_({}, e), {
        nativeSourceType: t.sourceType
      });
    case "set_resolution":
      return g(_({}, e), {
        resolution: t.resolution
      });
    case "set_fps":
      return g(_({}, e), {
        fps: t.fps
      });
    case "set_hide_preview":
      return g(_({}, e), {
        hidePreview: t.hidePreview
      });
    case "set_selected_source":
      return g(_({}, e), {
        selectedSource: t.source
      });
    case "set_audio_source":
      var r;
      return g(_({}, e), {
        audioSourceId: null != (r = t.audioSourceId) ? r : u.Z.getInputDeviceId()
      });
    case "set_selected_channel":
      return g(_({}, e), {
        selectedChannel: t.channelId
      });
    case "set_discord_source_id":
      return g(_({}, e), {
        discordSourceId: t.sourceId
      });
    default:
      return e
  }
}

function b(e) {
  let {
    dispatch: t,
    state: n,
    children: i
  } = e;
  return (0, r.jsx)(j.Provider, {
    value: t,
    children: (0, r.jsx)(v.Provider, {
      value: n,
      children: i
    })
  })
}

function y(e, t, n) {
  var r, l;
  let {
    defaultAutoQuality: v,
    allowAutoQuality: j
  } = (0, f._I)({
    location: "useCreateGoLiveModalState"
  }), {
    preset: b,
    resolution: y,
    fps: C,
    soundshareEnabled: O
  } = (0, s.cj)([d.Z], () => d.Z.getState());
  v && (b = h.ApplicationStreamPresets.PRESET_AUTO);
  let w = (0, s.e7)([u.Z], () => u.Z.getInputDeviceId()),
    P = null != (r = c.I0.useSetting()) && r,
    Z = null != (l = c.eo.useSetting()) && l;
  b in h.ApplicationStreamPresets && (b !== h.ApplicationStreamPresets.PRESET_AUTO || j) || (b = h.ApplicationStreamPresets.PRESET_VIDEO), (0, p.Z)(h.ApplicationStreamPresets.PRESET_CUSTOM, y, C, t, n) || (y = h.ApplicationStreamResolutions.RESOLUTION_720, C = h.ApplicationStreamFPS.FPS_30);
  let [I, E] = i.useReducer(S, g(_({}, x), {
    muteStreamAudio: !O,
    preset: b,
    resolution: y,
    fps: C,
    hidePreview: P,
    notifyFriends: Z,
    selectedSource: e,
    audioSourceId: w
  }));
  return i.useEffect(() => {
    var e, t;
    a.Z.hasPermission(m.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(e => E({
      type: "set_has_permission",
      value: e
    })), null == (e = (t = o.Z.window).getMediaSourceId) || e.call(t).then(e => {
      E({
        type: "set_discord_source_id",
        sourceId: null != e ? e : ""
      })
    })
  }, []), {
    state: I,
    dispatch: E
  }
}

function C() {
  return [Chunk647438.useContext(v), Chunk647438.useContext(j)]
}