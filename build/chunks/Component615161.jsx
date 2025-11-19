/** Chunk was on 47863 **/
/** chunk id: 615161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E_: () => P,
  Ti: () => w,
  Yw: () => O
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk856901 = require("./856901.js"),
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

function v(e) {
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

function j(e, t) {
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
let S = {
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
  b = Chunk473749.createContext(S),
  y = Chunk473749.createContext(() => {
    throw Error("Using uninitialized GoLiveModalContextDispatch")
  });

function C(e, t) {
  var n, r, i;
  switch (t.type) {
    case "set_mute_audio":
      return j(v({}, e), {
        muteStreamAudio: t.value
      });
    case "set_notify_friends":
      return j(v({}, e), {
        notifyFriends: t.value
      });
    case "set_has_permission":
      return j(v({}, e), {
        hasPermission: t.value
      });
    case "set_source_candidates":
      return j(v({}, e), {
        screenSources: t.screenSources,
        windowSources: t.windowSources,
        deviceSources: t.deviceSources,
        fetchingSources: false
      });
    case "set_preset":
      return j(v({}, e), {
        preset: t.preset
      });
    case "set_source_type":
      let l = {
        sourceType: t.sourceType,
        selectedSource: true
      };
      return t.sourceType === a.vA.CAMERA ? ((e.preset === g.ApplicationStreamPresets.PRESET_DOCUMENTS || e.preset === g.ApplicationStreamPresets.PRESET_AUTO) && (l.preset = g.ApplicationStreamPresets.PRESET_VIDEO), e.resolution === g.ApplicationStreamResolutions.RESOLUTION_SOURCE && (l.resolution = g.ApplicationStreamResolutions.RESOLUTION_720)) : l.selectedSource = null, v({}, e, l);
    case "set_native_source_type":
      return j(v({}, e), {
        nativeSourceType: t.sourceType
      });
    case "set_resolution":
      return j(v({}, e), {
        resolution: t.resolution
      });
    case "set_fps":
      return j(v({}, e), {
        fps: t.fps
      });
    case "set_hide_preview":
      return j(v({}, e), {
        hidePreview: t.hidePreview
      });
    case "set_selected_source": {
      let i = t.source,
        l = j(v({}, e), {
          selectedSource: i
        }),
        c = null == i ? true : i.name;
      if (null != i && (null == (n = i.id) ? true : n.startsWith(a.vA.CAMERA)) && null != c) {
        let e = s().maxBy(Object.values(h.Z.getInputDevices()), e => (0, o.default)(c, e.name));
        l.audioSourceId = null != (r = null == e ? true : e.id) ? r : h.Z.getInputDeviceId()
      }
      return l
    }
    case "set_audio_source":
      return j(v({}, e), {
        audioSourceId: null != (i = t.audioSourceId) ? i : h.Z.getInputDeviceId()
      });
    case "set_selected_channel":
      return j(v({}, e), {
        selectedChannel: t.channelId
      });
    case "set_discord_source_id":
      return j(v({}, e), {
        discordSourceId: t.sourceId
      });
    default:
      return e
  }
}

function O(e) {
  let {
    dispatch: t,
    state: n,
    children: i
  } = e;
  return (0, r.jsx)(y.Provider, {
    value: t,
    children: (0, r.jsx)(b.Provider, {
      value: n,
      children: i
    })
  })
}

function w(e, t, n) {
  var r, l;
  let {
    defaultAutoQuality: s,
    allowAutoQuality: o
  } = (0, m._I)({
    location: "useCreateGoLiveModalState"
  }), {
    preset: a,
    resolution: b,
    fps: y,
    soundshareEnabled: O
  } = (0, c.cj)([p.Z], () => p.Z.getState());
  s && (a = g.ApplicationStreamPresets.PRESET_AUTO);
  let w = (0, c.e7)([h.Z], () => h.Z.getInputDeviceId()),
    P = null != (r = f.I0.useSetting()) && r,
    Z = null != (l = f.eo.useSetting()) && l;
  a in g.ApplicationStreamPresets && (a !== g.ApplicationStreamPresets.PRESET_AUTO || o) || (a = g.ApplicationStreamPresets.PRESET_VIDEO), (0, _.Z)(g.ApplicationStreamPresets.PRESET_CUSTOM, b, y, t, n) || (b = g.ApplicationStreamResolutions.RESOLUTION_720, y = g.ApplicationStreamFPS.FPS_30);
  let [I, E] = i.useReducer(C, j(v({}, S), {
    muteStreamAudio: !O,
    preset: a,
    resolution: b,
    fps: y,
    hidePreview: P,
    notifyFriends: Z,
    selectedSource: e,
    audioSourceId: w
  }));
  return i.useEffect(() => {
    var e, t;
    u.Z.hasPermission(x.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(e => E({
      type: "set_has_permission",
      value: e
    })), null == (e = (t = d.Z.window).getMediaSourceId) || e.call(t).then(e => {
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

function P() {
  return [Chunk473749.useContext(b), Chunk473749.useContext(y)]
}