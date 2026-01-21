/** Chunk was on 1272 **/
/** chunk id: 34828, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => C,
  Z: () => N
}), require("./35282.js");
var r, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk846027 = require("./846027.js"),
  Chunk581883 = require("./581883.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk533583 = require("./533583.js"),
  Chunk65154 = require("./65154.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = {
    ignoredDevices: {}
  },
  m = h,
  b = false,
  E = {},
  _ = {},
  O = {},
  I = {
    id: null,
    justChanged: false
  },
  v = {
    id: null,
    justChanged: false
  },
  y = /\(([^)]+)\)/;

function C(e) {
  if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
    let t = e.name.match(y);
    if (null != t) return t[1]
  }
  return e.name
}

function S(e, t, n) {
  return null == e || e.displayName !== t ? {
    displayName: t,
    type: n
  } : e.type === p.Q.INPUT && n === p.Q.OUTPUT || e.type === p.Q.OUTPUT && n === p.Q.INPUT ? {
    displayName: t,
    type: p.Q.INPUT_AND_OUTPUT
  } : e
}
class T extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(u.Z, c.Z), m = null != e ? e : h
  }
  getUserAgnosticState() {
    return m
  }
  get initialized() {
    return b
  }
  get lastDeviceConnected() {
    return O
  }
  get inputDevices() {
    return E
  }
  get lastInputSystemDevice() {
    return I
  }
  get outputDevices() {
    return _
  }
  get lastOutputSystemDevice() {
    return v
  }
}
g(T, "displayName", "ConnectedDeviceStore"), g(T, "persistKey", "ConnectedDeviceStore"), g(T, "migrations", [e => {
  if (null == e.ignoredDevices) {
    var t, n;
    return t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          g(e, t, n[t])
        })
      }
      return e
    }({}, e), n = n = {
      ignoredDevices: {}
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  }
  return e
}]);
let N = new T(Chunk570140.Z, {
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n
    } = e, r = {};
    I.justChanged = false, t.forEach(e => {
      if (r[C(e)] = e.id, e.id === f.w5) {
        var t;
        let n = null != (t = e.originalId) ? t : e.originalName;
        n !== I.id && (I.justChanged = true), I.id = n
      }
    });
    let i = {};
    if (v.justChanged = false, n.forEach(e => {
        if (i[C(e)] = e.id, e.id === f.w5) {
          var t;
          let n = null != (t = e.originalId) ? t : e.originalName;
          n !== v.id && (v.justChanged = true), v.id = n
        }
      }), !b) {
      E = r, _ = i, b = true;
      return
    }
    let a = Object.keys(E),
      o = Object.keys(r),
      s = Object.keys(_),
      c = Object.keys(i),
      u = l().difference(a, o),
      d = l().difference(s, c);
    return u.length > 0 || d.length > 0 ? O = {} : (l().difference(o, a).forEach(e => {
      O[e] = S(O[e], e, p.Q.INPUT)
    }), l().difference(c, s).forEach(e => {
      O[e] = S(O[e], e, p.Q.OUTPUT)
    })), !(l().isEqual(a, o) && l().isEqual(s, c)) && (E = r, _ = i, true)
  },
  CONNECTED_DEVICE_SWITCH: function(e) {
    let {
      displayName: t,
      connectedDevicePreference: n,
      location: r
    } = e;
    if (n === p.a.INPUT || n === p.a.INPUT_AND_OUTPUT) {
      let e = E[t];
      null != e && o.Z.wait(() => s.Z.setInputDevice(e, {
        location: r
      }))
    }
    if (n === p.a.OUTPUT || n === p.a.INPUT_AND_OUTPUT) {
      let e = _[t];
      o.Z.wait(() => s.Z.setOutputDevice(e, {
        location: r
      }))
    }
    delete O[t]
  },
  CONNECTED_DEVICE_DONT_SWITCH: function(e) {
    let {
      displayName: t
    } = e;
    delete O[t]
  },
  CONNECTED_DEVICE_IGNORE: function(e) {
    let {
      displayName: t
    } = e;
    m.ignoredDevices[t] = true, delete O[t]
  },
  CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
    O = {}, m.neverShowModal = true
  }
})