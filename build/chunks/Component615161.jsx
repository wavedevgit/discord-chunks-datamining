/** Chunk was on 46746 **/
/** chunk id: 615161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E_: () => y,
  Ti: () => S,
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
  Chunk451467 = require("./451467.js"),
  Chunk37113 = require("./37113.js"),
  Chunk761274 = require("./761274.js");

function p(e) {
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

function x(e, t) {
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
let g = {
    screenSources: [],
    windowSources: [],
    deviceSources: [],
    hasPermission: false,
    muteStreamAudio: false,
    notifyFriends: false,
    hidePreview: false,
    preset: Chunk37113.tI.PRESET_CUSTOM,
    resolution: Chunk37113.LY.RESOLUTION_720,
    fps: Chunk37113.ws.FPS_30,
    sourceType: Chunk268146.vA.WINDOW,
    fetchingSources: true,
    selectedSource: true,
    audioSourceId: true,
    modalStep: "source_select",
    selectedChannel: true,
    nativeSourceType: "",
    discordSourceId: ""
  },
  _ = Chunk647438.createContext(g),
  v = Chunk647438.createContext(() => {
    throw Error("Using uninitialized GoLiveModalContextDispatch")
  });

function j(e, t) {
  switch (t.type) {
    case "set_mute_audio":
      return x(p({}, e), {
        muteStreamAudio: t.value
      });
    case "set_notify_friends":
      return x(p({}, e), {
        notifyFriends: t.value
      });
    case "set_has_permission":
      return x(p({}, e), {
        hasPermission: t.value
      });
    case "set_source_candidates":
      return x(p({}, e), {
        screenSources: t.screenSources,
        windowSources: t.windowSources,
        deviceSources: t.deviceSources,
        fetchingSources: false
      });
    case "set_preset":
      return x(p({}, e), {
        preset: t.preset
      });
    case "set_step":
      return x(p({}, e), {
        modalStep: t.step
      });
    case "set_source_type":
      let n = {
        sourceType: t.sourceType,
        selectedSource: true
      };
      return t.sourceType === l.vA.CAMERA && (e.preset === m.tI.PRESET_DOCUMENTS && (n.preset = m.tI.PRESET_VIDEO), e.resolution === m.LY.RESOLUTION_SOURCE && (n.resolution = m.LY.RESOLUTION_720)), p({}, e, n);
    case "set_native_source_type":
      return x(p({}, e), {
        nativeSourceType: t.sourceType
      });
    case "set_resolution":
      return x(p({}, e), {
        resolution: t.resolution
      });
    case "set_fps":
      return x(p({}, e), {
        fps: t.fps
      });
    case "set_hide_preview":
      return x(p({}, e), {
        hidePreview: t.hidePreview
      });
    case "set_selected_source":
      return x(p({}, e), {
        selectedSource: t.source
      });
    case "set_audio_source":
      var r;
      return x(p({}, e), {
        audioSourceId: null != (r = t.audioSourceId) ? r : u.Z.getInputDeviceId()
      });
    case "set_selected_channel":
      return x(p({}, e), {
        selectedChannel: t.channelId
      });
    case "set_discord_source_id":
      return x(p({}, e), {
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
  return (0, r.jsx)(v.Provider, {
    value: t,
    children: (0, r.jsx)(_.Provider, {
      value: n,
      children: i
    })
  })
}

function S(e, t, n) {
  var r, l;
  let _ = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "source_select",
    {
      preset: v,
      resolution: b,
      fps: S,
      soundshareEnabled: y
    } = (0, s.cj)([d.Z], () => d.Z.getState()),
    C = (0, s.e7)([u.Z], () => u.Z.getInputDeviceId()),
    O = null != (r = c.I0.useSetting()) && r,
    w = null != (l = c.eo.useSetting()) && l;
  v in m.tI || (v = m.tI.PRESET_VIDEO), (0, f.Z)(m.tI.PRESET_CUSTOM, b, S, t, n) || (b = m.LY.RESOLUTION_720, S = m.ws.FPS_30);
  let [Z, I] = i.useReducer(j, x(p({}, g), {
    muteStreamAudio: !y,
    preset: v,
    resolution: b,
    fps: S,
    hidePreview: O,
    notifyFriends: w,
    selectedSource: e,
    audioSourceId: C,
    modalStep: _
  }));
  return i.useEffect(() => {
    var e, t;
    a.Z.hasPermission(h.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(e => I({
      type: "set_has_permission",
      value: e
    })), null == (e = (t = o.Z.window).getMediaSourceId) || e.call(t).then(e => {
      I({
        type: "set_discord_source_id",
        sourceId: null != e ? e : ""
      })
    })
  }, []), {
    state: Z,
    dispatch: I
  }
}

function y() {
  return [Chunk647438.useContext(_), Chunk647438.useContext(v)]
}