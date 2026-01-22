/** Chunk was on 21738 **/
/** chunk id: 176360, original params: e,t,n (module,exports,require) **/
let r, i;
require.d(exports, {
  A: () => w
}), require("./896048.js");
var l, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk488926 = require("./488926.js"),
  Chunk863036 = require("./863036.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk737045 = require("./737045.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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
}

function b(e, t) {
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
let _ = new Set,
  E = Chunk652215.XlH.CLOSED,
  O = false,
  y = null,
  I = null,
  v = null,
  S = null,
  C = null,
  N = null,
  T = Chunk506774.w.get(Chunk737045.t0) || false;

function j(e) {
  let t = e.getGuildId(),
    n = m({}, e.permissionOverwrites);
  return null != t && null == n[t] && (n[t] = d.xT(t)), n
}

function x() {
  if (v = p.A.getChannel(), S = p.A.getCategory(), null == v) returnfalse;
  let e = v.getGuildId();
  I = y = j(v), null == y[C] && (C = e), i = null != S, r = d.r(v, S), N = null, O = false, E = h.XlH.CLOSED, _.clear()
}
class P extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.A, f.A)
  }
  hasChanges() {
    return O
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == y ? true : y[e]
  }
  get editedPermissionIds() {
    return Array.from(_)
  }
  get permissionOverwrites() {
    return y
  }
  get selectedOverwriteId() {
    return C
  }
  get formState() {
    return E
  }
  get isLockable() {
    return i
  }
  get locked() {
    return r
  }
  get channel() {
    return v
  }
  get category() {
    return S
  }
  get advancedMode() {
    return T
  }
}
g(P, "displayName", "ChannelSettingsPermissionsStore");
let w = new P(Chunk73153.h, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != v || t !== h.p_A.PERMISSIONS) returnfalse;
    x()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: i
    } = e, l = null == y ? true : y[t];
    if (null == l || null == v) returnfalse;
    l = b(m({}, l), {
      allow: n,
      deny: i
    }), y = b(m({}, y), {
      [t]: l
    }), _.add(t), E = h.XlH.OPEN, O = !s().isEqual(y, I), r = d.r(v, S)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != y && null != y[t]) C = t;
    else {
      if (null == v) returnfalse;
      N = t
    }
  },
  CHANNEL_SETTINGS_INIT: function() {
    p.A.getSection() === h.p_A.PERMISSIONS && x()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    E = h.XlH.CLOSED, y = null, I = null, v = null, S = null, O = false, _.clear(), C = null, N = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == v) returnfalse;
    let n = false;
    for (let e of t) false !== function(e) {
      if (null == v || v.id !== e || null == (v = f.A.getChannel(e))) returnfalse;
      S = p.A.getCategory();
      let t = v.getGuildId();
      if (null == t) returnfalse;
      I = j(v);
      let n = {};
      return _.forEach(e => {
        null != y && (n[e] = y[e])
      }), null == n[t] && null == v.permissionOverwrites[t] && (n[t] = d.xT(t)), null == (y = m({}, v.permissionOverwrites, n))[C] ? C = t : null != N && null != y[N] && (C = N, N = null), r = d.r(v, S), true
    }(e.id) && (n = true);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    E = h.XlH.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? E = h.XlH.OPEN : (E = h.XlH.CLOSED, x())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    T = t, c.w.set(A.t0, t)
  }
})