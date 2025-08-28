/** Chunk was on 46746 **/
/** chunk id: 615161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E_: () => C,
  Ti: () => b,
  Yw: () => j
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk751571 = require("./751571.js"),
  Chunk695346 = require("./695346.js"),
  Chunk361291 = require("./361291.js"),
  Chunk131951 = require("./131951.js"),
  Chunk451467 = require("./451467.js"),
  Chunk37113 = require("./37113.js"),
  Chunk761274 = require("./761274.js");

function h(e) {
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

function p(e, t) {
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
    nativeSourceType: ""
  },
  g = Chunk647438.createContext(x),
  _ = Chunk647438.createContext(() => {
    throw Error("Using uninitialized GoLiveModalContextDispatch")
  });

function v(e, t) {
  switch (t.type) {
    case "set_mute_audio":
      return p(h({}, e), {
        muteStreamAudio: t.value
      });
    case "set_notify_friends":
      return p(h({}, e), {
        notifyFriends: t.value
      });
    case "set_has_permission":
      return p(h({}, e), {
        hasPermission: t.value
      });
    case "set_source_candidates":
      return p(h({}, e), {
        screenSources: t.screenSources,
        windowSources: t.windowSources,
        deviceSources: t.deviceSources,
        fetchingSources: false
      });
    case "set_preset":
      return p(h({}, e), {
        preset: t.preset
      });
    case "set_step":
      return p(h({}, e), {
        modalStep: t.step
      });
    case "set_source_type":
      let n = {
        sourceType: t.sourceType,
        selectedSource: true
      };
      return t.sourceType === l.vA.CAMERA && (e.preset === f.tI.PRESET_DOCUMENTS && (n.preset = f.tI.PRESET_VIDEO), e.resolution === f.LY.RESOLUTION_SOURCE && (n.resolution = f.LY.RESOLUTION_720)), h({}, e, n);
    case "set_native_source_type":
      return p(h({}, e), {
        nativeSourceType: t.sourceType
      });
    case "set_resolution":
      return p(h({}, e), {
        resolution: t.resolution
      });
    case "set_fps":
      return p(h({}, e), {
        fps: t.fps
      });
    case "set_hide_preview":
      return p(h({}, e), {
        hidePreview: t.hidePreview
      });
    case "set_selected_source":
      return p(h({}, e), {
        selectedSource: t.source
      });
    case "set_audio_source":
      var r;
      return p(h({}, e), {
        audioSourceId: null != (r = t.audioSourceId) ? r : d.Z.getInputDeviceId()
      });
    case "set_selected_channel":
      return p(h({}, e), {
        selectedChannel: t.channelId
      });
    default:
      return e
  }
}

function j(e) {
  let {
    dispatch: t,
    state: n,
    children: i
  } = e;
  return (0, r.jsx)(_.Provider, {
    value: t,
    children: (0, r.jsx)(g.Provider, {
      value: n,
      children: i
    })
  })
}

function b(e, t, n) {
  var r, l;
  let g = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "source_select",
    {
      preset: _,
      resolution: j,
      fps: b,
      soundshareEnabled: C
    } = (0, s.cj)([c.Z], () => c.Z.getState()),
    S = (0, s.e7)([d.Z], () => d.Z.getInputDeviceId()),
    y = null != (r = a.I0.useSetting()) && r,
    O = null != (l = a.eo.useSetting()) && l;
  (0, u.Z)(f.tI.PRESET_CUSTOM, j, b, t, n) || (j = f.LY.RESOLUTION_720, b = f.ws.FPS_30);
  let [Z, w] = i.useReducer(v, p(h({}, x), {
    muteStreamAudio: !C,
    preset: _,
    resolution: j,
    fps: b,
    hidePreview: y,
    notifyFriends: O,
    selectedSource: e,
    audioSourceId: S,
    modalStep: g
  }));
  return i.useEffect(() => {
    o.Z.hasPermission(m.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(e => w({
      type: "set_has_permission",
      value: e
    }))
  }, []), {
    state: Z,
    dispatch: w
  }
}

function C() {
  return [Chunk647438.useContext(g), Chunk647438.useContext(_)]
}