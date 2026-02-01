/** Chunk was on 21738 **/
/** chunk id: 868162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N,
  x: () => v
}), require("./747238.js");
var r, Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk827343 = require("./827343.js"),
  Chunk617617 = require("./617617.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk792205 = require("./792205.js"),
  Chunk731854 = require("./731854.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {
    ignoredDevices: {}
  },
  f = m,
  A = false,
  _ = {},
  b = {},
  E = {},
  O = {
    id: null,
    justChanged: false
  },
  y = {
    id: null,
    justChanged: false
  },
  I = /\(([^)]+)\)/;

function v(e) {
  if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
    let t = e.name.match(I);
    if (null != t) return t[1]
  }
  return e.name
}

function S(e, t, n) {
  return null == e || e.displayName !== t ? {
    displayName: t,
    type: n
  } : e.type === p.E.INPUT && n === p.E.OUTPUT || e.type === p.E.OUTPUT && n === p.E.INPUT ? {
    displayName: t,
    type: p.E.INPUT_AND_OUTPUT
  } : e
}
class C extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(u.A, c.A), f = null != e ? e : m
  }
  getUserAgnosticState() {
    return f
  }
  get initialized() {
    return A
  }
  get lastDeviceConnected() {
    return E
  }
  get inputDevices() {
    return _
  }
  get lastInputSystemDevice() {
    return O
  }
  get outputDevices() {
    return b
  }
  get lastOutputSystemDevice() {
    return y
  }
}
g(C, "displayName", "ConnectedDeviceStore"), g(C, "persistKey", "ConnectedDeviceStore"), g(C, "migrations", [e => {
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
let N = new C(Chunk73153.h, {
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n
    } = e, r = {};
    O.justChanged = false, t.forEach(e => {
      if (r[v(e)] = e.id, e.id === h.dx) {
        var t;
        let n = null != (t = e.originalId) ? t : e.originalName;
        n !== O.id && (O.justChanged = true), O.id = n
      }
    });
    let i = {};
    if (y.justChanged = false, n.forEach(e => {
        if (i[v(e)] = e.id, e.id === h.dx) {
          var t;
          let n = null != (t = e.originalId) ? t : e.originalName;
          n !== y.id && (y.justChanged = true), y.id = n
        }
      }), !A) {
      _ = r, b = i, A = true;
      return
    }
    let a = Object.keys(_),
      s = Object.keys(r),
      o = Object.keys(b),
      c = Object.keys(i),
      u = l().difference(a, s),
      d = l().difference(o, c);
    return u.length > 0 || d.length > 0 ? E = {} : (l().difference(s, a).forEach(e => {
      E[e] = S(E[e], e, p.E.INPUT)
    }), l().difference(c, o).forEach(e => {
      E[e] = S(E[e], e, p.E.OUTPUT)
    })), !(l().isEqual(a, s) && l().isEqual(o, c)) && (_ = r, b = i, true)
  },
  CONNECTED_DEVICE_SWITCH: function(e) {
    let {
      displayName: t,
      connectedDevicePreference: n,
      location: r
    } = e;
    if (n === p.f.INPUT || n === p.f.INPUT_AND_OUTPUT) {
      let e = _[t];
      null != e && s.h.wait(() => o.A.setInputDevice(e, {
        location: r
      }))
    }
    if (n === p.f.OUTPUT || n === p.f.INPUT_AND_OUTPUT) {
      let e = b[t];
      s.h.wait(() => o.A.setOutputDevice(e, {
        location: r
      }))
    }
    delete E[t]
  },
  CONNECTED_DEVICE_DONT_SWITCH: function(e) {
    let {
      displayName: t
    } = e;
    delete E[t]
  },
  CONNECTED_DEVICE_IGNORE: function(e) {
    let {
      displayName: t
    } = e;
    f.ignoredDevices[t] = true, delete E[t]
  },
  CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
    E = {}, f.neverShowModal = true
  }
})