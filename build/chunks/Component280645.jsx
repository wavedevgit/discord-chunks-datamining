/** Chunk was on 63974 **/
/** chunk id: 280645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk1659 = require("./1659.js"),
  Chunk166005 = require("./166005.jsx"),
  Chunk900179 = require("./900179.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
  var t, n;
  let {
    userId: x,
    guildId: g
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, l, i, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var n, l, i = {},
          r = Object.getOwnPropertyNames(e);
        for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
    return r
  }(e, ["userId", "guildId"]), {
    trackUserProfileAction: h
  } = (0, d.NJ)(), b = (0, i.bG)([o.A], () => o.A.getGuild(g)), v = (0, i.bG)([r.Ay], () => r.Ay.getMember(g, x)), I = null == v ? true : v.roles, y = (0, i.yK)([s.A], () => s.A.getManyRoles(g, null != I ? I : []).sort(c.m), [I, g]), [_] = (0, i.yK)([a.A], () => [a.A.can(m.xBc.MANAGE_ROLES, b), a.A.getGuildVersion(g)]);
  if (null == b) return null;
  let O = _ && null != v;
  return 0 !== y.length || O ? (0, l.jsx)(p.A, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({
    heading: A.intl.string(A.t["LPJmL/"]),
    scrollTargetId: f.bk.ROLES
  }, j), n = n = {
    children: (0, l.jsx)(u.Y, {
      userId: x,
      guild: b,
      roles: y,
      onAddRole: () => {
        h({
          action: "ADD_ROLE"
        })
      },
      onRemoveRole: () => {
        h({
          action: "REMOVE_ROLE"
        })
      },
      allowEditing: true
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t)) : null
}