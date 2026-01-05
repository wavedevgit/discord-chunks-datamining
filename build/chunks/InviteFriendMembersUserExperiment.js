/** Chunk was on 13873 **/
/** chunk id: 756679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lz: () => g,
  cJ: () => O
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk818083 = require("./818083.js"),
  Chunk141537 = require("./141537.js"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js"),
  Chunk981631 = require("./981631.js");

function s(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let d = (0, Chunk818083.B)({
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
  } = e, c = s(e, ["guild"]), O = (0, r.e7)([o.default], () => o.default.isAuthenticated()), g = (0, r.e7)([u.Z], () => u.Z.getFriendCount() > 0), b = a(i), v = O && g && b, p = (0, l.sD)(d, (t = function(e) {
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
    disable: !v
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
  return v ? p : f
}

function g(e) {
  let {
    guild: t
  } = e, n = s(e, ["guild"]), r = o.default.isAuthenticated(), i = u.Z.getFriendCount() > 0;
  return r && i && a(t) ? (0, l.Z6)(d, n) : f
}