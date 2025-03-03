/** Chunk was on 46746 **/
n.d(t, {
  E_: () => C,
  Ti: () => b,
  Yw: () => j
}), n(411104), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(268146),
  s = n(442837),
  o = n(846519),
  a = n(751571),
  c = n(695346),
  d = n(361291),
  u = n(59468),
  f = n(37113),
  h = n(761274);

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
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
    hasPermission: !1,
    muteStreamAudio: !1,
    notifyFriends: !1,
    hidePreview: !1,
    preset: f.tI.PRESET_CUSTOM,
    resolution: f.LY.RESOLUTION_720,
    fps: f.ws.FPS_30,
    sourceType: i.vA.WINDOW,
    fetchingSources: !0,
    sourceApplication: void 0
  },
  g = l.createContext(x),
  _ = l.createContext(() => {
    throw Error("Using uninitialized GoLiveModalContextDispatch")
  });

function v(e, t) {
  switch (t.type) {
    case "set_mute_audio":
      return p(m({}, e), {
        muteStreamAudio: t.value
      });
    case "set_notify_friends":
      return p(m({}, e), {
        notifyFriends: t.value
      });
    case "set_has_permission":
      return p(m({}, e), {
        hasPermission: t.value
      });
    case "set_source_candidates":
      return p(m({}, e), {
        screenSources: t.screenSources,
        windowSources: t.windowSources,
        deviceSources: t.deviceSources,
        fetchingSources: !1
      });
    case "set_preset":
      return p(m({}, e), {
        preset: t.preset
      });
    case "set_source_type":
      if (t.sourceType === i.vA.CAMERA && e.preset === f.tI.PRESET_DOCUMENTS) return p(m({}, e), {
        preset: f.tI.PRESET_VIDEO,
        sourceType: t.sourceType
      });
      return p(m({}, e), {
        sourceType: t.sourceType
      });
    case "set_resolution":
      return p(m({}, e), {
        resolution: t.resolution
      });
    case "set_fps":
      return p(m({}, e), {
        fps: t.fps
      });
    case "set_hide_preview":
      return p(m({}, e), {
        hidePreview: t.hidePreview
      });
    default:
      return e
  }
}

function j(e) {
  let {
    dispatch: t,
    state: n,
    children: l
  } = e;
  return (0, r.jsx)(_.Provider, {
    value: t,
    children: (0, r.jsx)(g.Provider, {
      value: n,
      children: l
    })
  })
}

function b(e) {
  var t;
  let {
    preset: n,
    resolution: r,
    fps: i,
    soundshareEnabled: f
  } = (0, s.cj)([d.Z], () => d.Z.getState()), g = null !== (t = c.I0.useSetting()) && void 0 !== t && t, [_, j] = l.useReducer(v, p(m({}, x), {
    muteStreamAudio: !f,
    preset: n,
    resolution: r,
    fps: i,
    hidePreview: g,
    sourceApplication: e
  })), b = l.useRef(new o.Xp);
  return l.useEffect(() => {
    a.Z.hasPermission(h.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    }).then(e => j({
      type: "set_has_permission",
      value: e
    }))
  }, []), l.useEffect(() => {
    let e = b.current;
    return (0, u.t)({
      width: 376,
      height: 212
    }).then(e => {
      let {
        screenSources: t,
        windowSources: n,
        cameraSources: r
      } = e;
      j({
        type: "set_source_candidates",
        screenSources: t,
        windowSources: n,
        deviceSources: r
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
      j({
        type: "set_source_candidates",
        screenSources: e,
        windowSources: t,
        deviceSources: n
      })
    }), () => {
      e.stop()
    }
  }, []), {
    state: _,
    dispatch: j
  }
}

function C() {
  return [l.useContext(g), l.useContext(_)]
}