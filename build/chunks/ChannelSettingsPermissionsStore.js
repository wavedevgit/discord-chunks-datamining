/** Chunk was on 1272 **/
/** chunk id: 277053, original params: e,t,n (module,exports,require) **/
let r, i;
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var l, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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

function _(e, t) {
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
let E = new Set,
  O = Chunk981631.QZA.CLOSED,
  v = false,
  y = null,
  I = null,
  C = null,
  S = null,
  T = null,
  N = null,
  j = Chunk433517.K.get(Chunk71080.kf) || false;

function P(e) {
  let t = e.getGuildId(),
    n = b({}, e.permissionOverwrites);
  return null != t && null == n[t] && (n[t] = d.we(t)), n
}

function x() {
  if (C = Chunk388610.Z.getChannel(), S = Chunk388610.Z.getCategory(), null == C) returnfalse;
  let e = C.getGuildId();
  I = y = P(C), null == y[T] && (T = module), i = null != S, r = Chunk700785.o4(C, S), N = null, v = false, O = Chunk981631.QZA.CLOSED, E.clear()
}
class A extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk388610.Z, Chunk592125.Z)
  }
  hasChanges() {
    return v
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == y ? true : y[e]
  }
  get editedPermissionIds() {
    return Array.from(E)
  }
  get permissionOverwrites() {
    return y
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
    x()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: i
    } = e, l = null == y ? true : y[t];
    if (null == l || null == C) returnfalse;
    l = _(b({}, l), {
      allow: n,
      deny: i
    }), y = _(b({}, y), {
      [t]: l
    }), E.add(t), O = g.QZA.OPEN, v = !s().isEqual(y, I), r = d.o4(C, S)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != y && null != y[t]) T = t;
    else {
      if (null == C) returnfalse;
      N = t
    }
  },
  CHANNEL_SETTINGS_INIT: function() {
    Chunk388610.Z.getSection() === Chunk981631.CoT.PERMISSIONS && x()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    O = Chunk981631.QZA.CLOSED, y = null, I = null, C = null, S = null, v = false, E.clear(), T = null, N = null
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
      I = P(C);
      let n = {};
      return E.forEach(e => {
        null != y && (n[e] = y[e])
      }), null == n[t] && null == C.permissionOverwrites[t] && (n[t] = d.we(t)), null == (y = b({}, C.permissionOverwrites, n))[T] ? T = t : null != N && null != y[N] && (T = N, N = null), r = d.o4(C, S), true
    }(e.id) && (n = true);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    O = Chunk981631.QZA.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? O = g.QZA.OPEN : (O = g.QZA.CLOSED, x())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    j = t, c.K.set(h.kf, t)
  }
})