/** Chunk was on 46746 **/
/** chunk id: 443762, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E_: () => I,
  Ti: () => S,
  Yw: () => C
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
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

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let b = {
    screenSources: [],
    windowSources: [],
    deviceSources: [],
    hasPermission: true,
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
    selectedChannel: true,
    nativeSourceType: "",
    discordSourceId: ""
  },
  y = Chunk473749.createContext(b),
  w = Chunk473749.createContext(() => {
    throw Error("Using uninitialized GoLiveModalContextDispatch")
  });

function O(e, t) {
  var r, n, i;
  switch (t.type) {
    case "set_mute_audio":
      return _(j({}, e), {
        muteStreamAudio: t.value
      });
    case "set_notify_friends":
      return _(j({}, e), {
        notifyFriends: t.value
      });
    case "set_has_permission":
      return _(j({}, e), {
        hasPermission: t.value
      });
    case "set_source_candidates":
      return _(j({}, e), {
        screenSources: t.screenSources,
        windowSources: t.windowSources,
        deviceSources: t.deviceSources,
        fetchingSources: false
      });
    case "set_preset":
      return _(j({}, e), {
        preset: t.preset
      });
    case "set_source_type":
      let s = {
        sourceType: t.sourceType,
        selectedSource: true
      };
      return t.sourceType === c.vA.CAMERA ? ((e.preset === g.tI.PRESET_DOCUMENTS || e.preset === g.tI.PRESET_AUTO) && (s.preset = g.tI.PRESET_VIDEO), e.resolution === g.LY.RESOLUTION_SOURCE && (s.resolution = g.LY.RESOLUTION_720)) : s.selectedSource = null, j({}, e, s);
    case "set_native_source_type":
      return _(j({}, e), {
        nativeSourceType: t.sourceType
      });
    case "set_resolution":
      return _(j({}, e), {
        resolution: t.resolution
      });
    case "set_fps":
      return _(j({}, e), {
        fps: t.fps
      });
    case "set_hide_preview":
      return _(j({}, e), {
        hidePreview: t.hidePreview
      });
    case "set_selected_source": {
      let i = t.source,
        s = _(j({}, e), {
          selectedSource: i
        }),
        a = null == i ? true : i.name;
      if (null != i && (null == (r = i.id) ? true : r.startsWith(c.vA.CAMERA)) && null != a) {
        let e = l().maxBy(Object.values(p.Z.getInputDevices()), e => (0, o.default)(a, e.name));
        s.audioSourceId = null != (n = null == e ? true : e.id) ? n : p.Z.getInputDeviceId()
      }
      return s
    }
    case "set_audio_source":
      return _(j({}, e), {
        audioSourceId: null != (i = t.audioSourceId) ? i : p.Z.getInputDeviceId()
      });
    case "set_selected_channel":
      return _(j({}, e), {
        selectedChannel: t.channelId
      });
    case "set_discord_source_id":
      return _(j({}, e), {
        discordSourceId: t.sourceId
      });
    default:
      return e
  }
}

function C(e) {
  let {
    dispatch: t,
    state: r,
    children: i
  } = e;
  return (0, n.jsx)(w.Provider, {
    value: t,
    children: (0, n.jsx)(y.Provider, {
      value: r,
      children: i
    })
  })
}

function S(e, t, r) {
  var n, s;
  let {
    defaultAutoQuality: l,
    allowAutoQuality: o
  } = (0, x._I)({
    location: "useCreateGoLiveModalState"
  }), {
    preset: c,
    resolution: y,
    fps: w,
    soundshareEnabled: C
  } = (0, a.cj)([h.Z], () => h.Z.getState());
  l && (c = g.tI.PRESET_AUTO);
  let S = (0, a.e7)([p.Z], () => p.Z.getInputDeviceId()),
    I = null != (n = f.I0.useSetting()) && n,
    Z = null != (s = f.eo.useSetting()) && s;
  c in g.tI && (c !== g.tI.PRESET_AUTO || o) || (c = g.tI.PRESET_VIDEO), (0, m.Z)(g.tI.PRESET_CUSTOM, y, w, t, r) || (y = g.LY.RESOLUTION_720, w = g.ws.FPS_30);
  let [E, P] = i.useReducer(O, _(j({}, b), {
    muteStreamAudio: !C,
    preset: c,
    resolution: y,
    fps: w,
    hidePreview: I,
    notifyFriends: Z,
    selectedSource: e,
    nativeSourceType: p.Z.getUseGamescopeCapture() ? "gamescope" : "",
    audioSourceId: S
  }));
  return i.useEffect(() => {
    var e, t;
    u.Z.hasPermission(v.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(e => P({
      type: "set_has_permission",
      value: e
    })), null == (e = (t = d.Z.window).getMediaSourceId) || e.call(t).then(e => {
      P({
        type: "set_discord_source_id",
        sourceId: null != e ? e : ""
      })
    })
  }, []), {
    state: E,
    dispatch: P
  }
}

function I() {
  return [i.useContext(y), i.useContext(w)]
}