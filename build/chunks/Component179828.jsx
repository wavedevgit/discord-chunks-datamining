/** Chunk was on 93979 **/
/** chunk id: 179828, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk635042 = require("./635042.js"),
  Chunk705007 = require("./705007.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  var n, t, {
      userId: h,
      guildId: j
    } = e,
    v = function(e, n) {
      if (null == e) return {};
      var t, l, i = function(e, n) {
        if (null == e) return {};
        var t, l, i = {},
          o = Object.keys(e);
        for (l = 0; l < o.length; l++) t = o[l], n.indexOf(t) >= 0 || (i[t] = e[t]);
        return i
      }(e, n);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (l = 0; l < o.length; l++) t = o[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
      }
      return i
    }(e, ["userId", "guildId"]);
  let {
    trackUserProfileAction: b
  } = (0, s.KZ)(), g = (0, i.e7)([a.Z], () => a.Z.getGuild(j)), I = (0, i.e7)([o.ZP], () => o.ZP.getMember(j, h)), y = null == I ? true : I.roles, Z = (0, i.Wu)([r.Z], () => r.Z.getManyRoles(j, null != y ? y : []).sort(d.Z), [y, j]), [O] = (0, i.Wu)([c.Z], () => [c.Z.can(p.Plq.MANAGE_ROLES, g), c.Z.getGuildVersion(j)]);
  if (null == g) return null;
  let N = O && null != I;
  return 0 !== Z.length || N ? (0, l.jsx)(f.Z, (n = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({
    heading: x.intl.string(x.t["LPJmL/"]),
    scrollTargetId: m.Tb.ROLES
  }, v), t = t = {
    children: (0, l.jsx)(u.n, {
      userId: h,
      guild: g,
      roles: Z,
      onAddRole: () => {
        b({
          action: "ADD_ROLE"
        })
      },
      onRemoveRole: () => {
        b({
          action: "REMOVE_ROLE"
        })
      },
      allowEditing: true
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
  }), n)) : null
}