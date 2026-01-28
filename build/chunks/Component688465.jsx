/** Chunk was on 96811 **/
/** chunk id: 688465, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  KL: () => O,
  tS: () => C,
  yB: () => w
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk72978 = require("./72978.js"),
  Chunk141931 = require("./141931.js"),
  Chunk311907 = require("./311907.js"),
  Chunk77729 = require("./77729.js"),
  Chunk674966 = require("./674966.js"),
  Chunk253932 = require("./253932.js"),
  Chunk929921 = require("./929921.js"),
  Chunk430452 = require("./430452.js"),
  Chunk258585 = require("./258585.js"),
  Chunk874124 = require("./874124.js"),
  Chunk753070 = require("./753070.js"),
  Chunk765682 = require("./765682.js");

function _(e) {
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

function v(e, t) {
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
    preset: Chunk753070.jQ.PRESET_CUSTOM,
    resolution: Chunk753070.on.RESOLUTION_720,
    fps: Chunk753070.kn.FPS_30,
    sourceType: Chunk141931.fS.WINDOW,
    fetchingSources: true,
    selectedSource: true,
    audioSourceId: true,
    selectedChannel: true,
    nativeSourceType: "",
    discordSourceId: ""
  },
  y = Chunk64700.createContext(b),
  S = Chunk64700.createContext(() => {
    throw Error("Using uninitialized GoLiveModalContextDispatch")
  });

function A(e, t) {
  var r, n, i;
  switch (t.type) {
    case "set_mute_audio":
      return v(_({}, e), {
        muteStreamAudio: t.value
      });
    case "set_notify_friends":
      return v(_({}, e), {
        notifyFriends: t.value
      });
    case "set_has_permission":
      return v(_({}, e), {
        hasPermission: t.value
      });
    case "set_source_candidates":
      return v(_({}, e), {
        screenSources: t.screenSources,
        windowSources: t.windowSources,
        deviceSources: t.deviceSources,
        fetchingSources: false
      });
    case "set_preset":
      return v(_({}, e), {
        preset: t.preset
      });
    case "set_source_type":
      let l = {
        sourceType: t.sourceType,
        selectedSource: true
      };
      return t.sourceType === o.fS.CAMERA ? ((e.preset === j.jQ.PRESET_DOCUMENTS || e.preset === j.jQ.PRESET_AUTO) && (l.preset = j.jQ.PRESET_VIDEO), e.resolution === j.on.RESOLUTION_SOURCE && (l.resolution = j.on.RESOLUTION_720)) : l.selectedSource = null, _({}, e, l);
    case "set_native_source_type":
      return v(_({}, e), {
        nativeSourceType: t.sourceType
      });
    case "set_resolution":
      return v(_({}, e), {
        resolution: t.resolution
      });
    case "set_fps":
      return v(_({}, e), {
        fps: t.fps
      });
    case "set_hide_preview":
      return v(_({}, e), {
        hidePreview: t.hidePreview
      });
    case "set_selected_source": {
      let i = t.source,
        l = v(_({}, e), {
          selectedSource: i
        }),
        c = null == i ? true : i.name;
      if (null != i && (null == (r = i.id) ? true : r.startsWith(o.fS.CAMERA)) && null != c) {
        let e = s().maxBy(Object.values(p.A.getInputDevices()), e => (0, a.default)(c, e.name));
        l.audioSourceId = null != (n = null == e ? true : e.id) ? n : p.A.getInputDeviceId()
      }
      return l
    }
    case "set_audio_source":
      return v(_({}, e), {
        audioSourceId: null != (i = t.audioSourceId) ? i : p.A.getInputDeviceId()
      });
    case "set_selected_channel":
      return v(_({}, e), {
        selectedChannel: t.channelId
      });
    case "set_discord_source_id":
      return v(_({}, e), {
        discordSourceId: t.sourceId
      });
    default:
      return e
  }
}

function O(e) {
  let {
    dispatch: t,
    state: r,
    children: i
  } = e;
  return (0, n.jsx)(S.Provider, {
    value: t,
    children: (0, n.jsx)(y.Provider, {
      value: r,
      children: i
    })
  })
}

function w(e, t, r) {
  var n, l;
  let {
    defaultAutoQuality: s,
    allowAutoQuality: a
  } = (0, x.X5)({
    location: "useCreateGoLiveModalState"
  }), {
    preset: o,
    resolution: y,
    fps: S,
    soundshareEnabled: O
  } = (0, c.cf)([h.A], () => h.A.getState());
  s && (o = j.jQ.PRESET_AUTO);
  let w = (0, c.bG)([p.A], () => p.A.getInputDeviceId()),
    C = null != (n = f.uh.useSetting()) && n,
    E = null != (l = f.wv.useSetting()) && l;
  o in j.jQ && (o !== j.jQ.PRESET_AUTO || a) || (o = j.jQ.PRESET_VIDEO), (0, m.A)(j.jQ.PRESET_CUSTOM, y, S, t, r) || (y = j.on.RESOLUTION_720, S = j.kn.FPS_30);
  let [I, N] = i.useReducer(A, v(_({}, b), {
    muteStreamAudio: !O,
    preset: o,
    resolution: y,
    fps: S,
    hidePreview: C,
    notifyFriends: E,
    selectedSource: e,
    nativeSourceType: p.A.getUseGamescopeCapture() ? "gamescope" : "",
    audioSourceId: w
  }));
  return i.useEffect(() => {
    var e, t;
    u.A.hasPermission(g.iL.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(e => N({
      type: "set_has_permission",
      value: e
    })), null == (e = (t = d.A.window).getMediaSourceId) || e.call(t).then(e => {
      N({
        type: "set_discord_source_id",
        sourceId: null != e ? e : ""
      })
    })
  }, []), {
    state: I,
    dispatch: N
  }
}

function C() {
  return [i.useContext(y), i.useContext(S)]
}