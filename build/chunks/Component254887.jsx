/** Chunk was on web.js **/
/** chunk id: 254887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk412899 = require("./412899.jsx"),
  Chunk635042 = require("./635042.js"),
  Chunk485386 = require("./485386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk65448 = require("./65448.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e) {
  let {
    invite: t
  } = e, n = i.useMemo(() => "invite-roles-".concat((0, a.Z)()), []), h = (0, o.ZP)({
    id: n,
    isEnabled: true,
    scrollToStart: p.Cyb,
    scrollToEnd: p.Cyb,
    wrap: true
  }), E = (0, l.e7)([f.Z], () => null == t.guild || null == t.roles || 0 === t.roles.length ? [] : t.roles.map(e => f.Z.getRole(t.guild.id, e.id)).filter(e => null != e).sort(d.Z), [t]);
  if (0 === E.length) return null;
  let O = E.length,
    v = _.intl.formatToPlainString(_.t.PCs0oo, {
      numRoles: O
    });
  return (0, r.jsx)(s.bG, {
    navigator: h,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: n
        } = e, i = y(e, ["ref"]);
        return (0, r.jsxs)("div", {
          className: m.root,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            className: m.rolesHeading,
            children: _.intl.string(_.t.stcSfI)
          }), (0, r.jsx)("div", b(g({
            className: m.rolesList,
            "aria-label": v,
            ref: n
          }, i), {
            children: E.map(e => (0, r.jsx)(u.UB, {
              role: e,
              canRemove: false,
              onRemove: () => {},
              guildId: t.guild.id,
              disableBorderColor: false
            }, e.id))
          }))]
        })
      }
    })
  })
}