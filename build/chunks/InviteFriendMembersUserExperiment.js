/** Chunk was on 79023 **/
/** chunk id: 430914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Zs: () => b,
  uS: () => O
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk600975 = require("./600975.js"),
  Chunk428835 = require("./428835.js"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js"),
  Chunk652215 = require("./652215.js");

function d(e, t) {
  if (null == e) return {};
  var n, r, i, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.getOwnPropertyNames(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
  return l
}
let s = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-11_invite_friend_members",
  label: "Show Friends in Server on Invite Modal",
  defaultConfig: {
    showFriendsInServer: false,
    showInviter: false
  },
  treatments: [{
    id: 1,
    label: "Show Friends in Server",
    config: {
      showFriendsInServer: true,
      showInviter: false
    }
  }, {
    id: 2,
    label: "Show Friends in Server and Inviter",
    config: {
      showFriendsInServer: true,
      showInviter: true
    }
  }]
});

function a(e) {
  if (null == e) returnfalse;
  let t = e.features;
  return Array.isArray(t) ? !t.includes(c.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) : !(t instanceof Set) || !t.has(c.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
}
let f = {
  showFriendsInServer: false,
  showInviter: false
};

function O(e) {
  var t, n;
  let {
    guild: i
  } = e, c = d(e, ["guild"]), O = (0, r.bG)([o.default], () => o.default.isAuthenticated()), b = (0, r.bG)([u.A], () => u.A.getFriendCount() > 0), g = a(i), p = O && b && g, y = (0, l.Dr)(s, (t = function(e) {
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
  }({}, c), n = n = {
    disable: !p
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t));
  return p ? y : f
}

function b(e) {
  let {
    guild: t
  } = e, n = d(e, ["guild"]), r = o.default.isAuthenticated(), i = u.A.getFriendCount() > 0;
  return r && i && a(t) ? (0, l.Kd)(s, n) : f
}