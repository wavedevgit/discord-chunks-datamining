/** Chunk was on 79477 **/
n.d(t, {
  E_: () => S,
  Ti: () => j,
  Yw: () => f
}), n(411104), n(47120);
var l = n(200651),
  r = n(192379),
  s = n(268146),
  i = n(442837),
  a = n(846519),
  o = n(751571),
  c = n(361291),
  u = n(59468),
  d = n(37113),
  m = n(761274);

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = r.createContext({
    screenSources: [],
    windowSources: [],
    deviceSources: [],
    hasPermission: !1,
    muteStreamAudio: !1,
    notifyFriends: !1,
    preset: d.tI.PRESET_CUSTOM,
    resolution: d.LY.RESOLUTION_720,
    fps: d.ws.FPS_30,
    sourceType: s.vA.WINDOW,
    fetchingSources: !1
  }),
  p = r.createContext(() => {
    throw Error("Using uninitialized GoLiveModalContextDispatch")
  });

function v(e, t) {
  switch (t.type) {
    case "set_mute_audio":
      return h(g({}, e), {
        muteStreamAudio: t.value
      });
    case "set_notify_friends":
      return h(g({}, e), {
        notifyFriends: t.value
      });
    case "set_has_permission":
      return h(g({}, e), {
        hasPermission: t.value
      });
    case "set_source_candidates":
      return h(g({}, e), {
        screenSources: t.screenSources,
        windowSources: t.windowSources,
        deviceSources: t.deviceSources,
        fetchingSources: !1
      });
    case "set_preset":
      return h(g({}, e), {
        preset: t.preset
      });
    case "set_source_type":
      if (t.sourceType === s.vA.CAMERA && e.preset === d.tI.PRESET_DOCUMENTS) return h(g({}, e), {
        preset: d.tI.PRESET_VIDEO,
        sourceType: t.sourceType
      });
      return h(g({}, e), {
        sourceType: t.sourceType
      });
    case "set_resolution":
      return h(g({}, e), {
        resolution: t.resolution
      });
    case "set_fps":
      return h(g({}, e), {
        fps: t.fps
      });
    case "set_source":
      return h(g({}, e), {
        source: t.source
      });
    default:
      return e
  }
}

function f(e) {
  let {
    dispatch: t,
    state: n,
    children: r
  } = e;
  return (0, l.jsx)(p.Provider, {
    value: t,
    children: (0, l.jsx)(x.Provider, {
      value: n,
      children: r
    })
  })
}

function j() {
  let {
    preset: e,
    resolution: t,
    fps: n,
    soundshareEnabled: l
  } = (0, i.cj)([c.Z], () => c.Z.getState()), [d, g] = r.useReducer(v, {
    screenSources: [],
    windowSources: [],
    deviceSources: [],
    hasPermission: !1,
    muteStreamAudio: !l,
    notifyFriends: !1,
    preset: e,
    resolution: t,
    fps: n,
    sourceType: s.vA.WINDOW,
    fetchingSources: !0
  }), h = r.useRef(new a.Xp);
  return r.useEffect(() => {
    o.Z.hasPermission(m.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    }).then(e => g({
      type: "set_has_permission",
      value: e
    }))
  }, []), r.useEffect(() => {
    let e = h.current;
    return (0, u.t)({
      width: 376,
      height: 212
    }).then(e => {
      let {
        screenSources: t,
        windowSources: n,
        cameraSources: l
      } = e;
      g({
        type: "set_source_candidates",
        screenSources: t,
        windowSources: n,
        deviceSources: l
      })
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: n
      } = await (0, u.t)({
        width: 376,
        height: 212
      });
      g({
        type: "set_source_candidates",
        screenSources: e,
        windowSources: t,
        deviceSources: n
      })
    }), () => {
      e.stop()
    }
  }, []), {
    state: d,
    dispatch: g
  }
}

function S() {
  return [r.useContext(x), r.useContext(p)]
}