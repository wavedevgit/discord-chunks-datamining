/** Chunk was on 64228 **/
/** chunk id: 280645, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  var l, t;
  let {
    userId: A,
    guildId: j
  } = e, h = function(e, l) {
    if (null == e) return {};
    var t, n, i, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, t = Reflect.ownKeys(e); i < t.length; i++) n = t[i], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }
    if (r = function(e, l) {
        if (null == e) return {};
        var t, n, i = {},
          r = Object.getOwnPropertyNames(e);
        for (n = 0; n < r.length; n++) t = r[n], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
        return i
      }(e, l), Object.getOwnPropertySymbols)
      for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) n = t[i], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    return r
  }(e, ["userId", "guildId"]), {
    trackUserProfileAction: g
  } = (0, d.NJ)(), v = (0, i.bG)([a.A], () => a.A.getGuild(j)), b = (0, i.bG)([r.Ay], () => r.Ay.getMember(j, A)), I = null == b ? true : b.roles, y = (0, i.yK)([s.A], () => s.A.getManyRoles(j, null != I ? I : []).sort(c.m), [I, j]), [O] = (0, i.yK)([o.A], () => [o.A.can(m.xBc.MANAGE_ROLES, v), o.A.getGuildVersion(j)]);
  if (null == v) return null;
  let N = O && null != b;
  return 0 !== y.length || N ? (0, n.jsx)(f.A, (l = function(e) {
    for (var l = 1; l < arguments.length; l++) {
      var t = null != arguments[l] ? arguments[l] : {},
        n = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.forEach(function(l) {
        var n;
        n = t[l], l in e ? Object.defineProperty(e, l, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[l] = n
      })
    }
    return e
  }({
    heading: x.intl.string(x.t["LPJmL/"]),
    scrollTargetId: p.bk.ROLES
  }, h), t = t = {
    children: (0, n.jsx)(u.Y, {
      userId: A,
      guild: v,
      roles: y,
      onAddRole: () => {
        g({
          action: "ADD_ROLE"
        })
      },
      onRemoveRole: () => {
        g({
          action: "REMOVE_ROLE"
        })
      },
      allowEditing: true
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(t)) : (function(e, l) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(t, e))
  }), l)) : null
}