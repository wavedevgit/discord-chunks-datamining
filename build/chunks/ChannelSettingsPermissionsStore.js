/** Chunk was on 1272 **/
/** chunk id: 277053, original params: e,t,n (module,exports,require) **/
let r, i;
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var l, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk700785 = require("./700785.js"),
  Chunk388610 = require("./388610.js"),
  Chunk592125 = require("./592125.js"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
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
  O = Chunk981631.QZA.CLOSED,
  I = false,
  v = null,
  y = null,
  C = null,
  S = null,
  T = null,
  N = null,
  j = Chunk433517.K.get(Chunk71080.kf) || false;

function x(e) {
  let t = e.getGuildId(),
    n = b({}, e.permissionOverwrites);
  return null != t && null == n[t] && (n[t] = d.we(t)), n
}

function P() {
  if (C = p.Z.getChannel(), S = p.Z.getCategory(), null == C) returnfalse;
  let e = C.getGuildId();
  y = v = x(C), null == v[T] && (T = e), i = null != S, r = d.o4(C, S), N = null, I = false, O = g.QZA.CLOSED, _.clear()
}
class A extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(p.Z, f.Z)
  }
  hasChanges() {
    return I
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == v ? true : v[e]
  }
  get editedPermissionIds() {
    return Array.from(_)
  }
  get permissionOverwrites() {
    return v
  }
  get selectedOverwriteId() {
    return T
  }
  get formState() {
    return O
  }
  get isLockable() {
    return i
  }
  get locked() {
    return r
  }
  get channel() {
    return C
  }
  get category() {
    return S
  }
  get advancedMode() {
    return j
  }
}
m(A, "displayName", "ChannelSettingsPermissionsStore");
let Z = new A(Chunk570140.Z, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != C || t !== g.CoT.PERMISSIONS) returnfalse;
    P()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: P,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: i
    } = e, l = null == v ? true : v[t];
    if (null == l || null == C) returnfalse;
    l = E(b({}, l), {
      allow: n,
      deny: i
    }), v = E(b({}, v), {
      [t]: l
    }), _.add(t), O = g.QZA.OPEN, I = !o().isEqual(v, y), r = d.o4(C, S)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != v && null != v[t]) T = t;
    else {
      if (null == C) returnfalse;
      N = t
    }
  },
  CHANNEL_SETTINGS_INIT: function() {
    p.Z.getSection() === g.CoT.PERMISSIONS && P()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    O = g.QZA.CLOSED, v = null, y = null, C = null, S = null, I = false, _.clear(), T = null, N = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == C) returnfalse;
    let n = false;
    for (let e of t) false !== function(e) {
      if (null == C || C.id !== e || null == (C = f.Z.getChannel(e))) returnfalse;
      S = p.Z.getCategory();
      let t = C.getGuildId();
      if (null == t) returnfalse;
      y = x(C);
      let n = {};
      return _.forEach(e => {
        null != v && (n[e] = v[e])
      }), null == n[t] && null == C.permissionOverwrites[t] && (n[t] = d.we(t)), null == (v = b({}, C.permissionOverwrites, n))[T] ? T = t : null != N && null != v[N] && (T = N, N = null), r = d.o4(C, S), true
    }(e.id) && (n = true);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    O = g.QZA.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? O = g.QZA.OPEN : (O = g.QZA.CLOSED, P())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    j = t, c.K.set(h.kf, t)
  }
})