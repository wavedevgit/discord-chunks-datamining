/** Chunk was on web.js **/
/** chunk id: 314172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk235874 = require("./235874.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk345162 = require("./345162.js"),
  Chunk496675 = require("./496675.js"),
  Chunk608798 = require("./608798.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk880033 = require("./880033.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    guild: t,
    guildMember: n,
    numRoles: m,
    highestRole: g,
    onAddRole: b,
    buttonRef: y
  } = e, O = (0, i.e7)([l.Z], () => l.Z.roleStyle);
  if (!(0, i.e7)([u.Z], () => u.Z.can(f.Plq.MANAGE_ROLES, t))) return null;
  let v = e => !(0, c.fI)(e) && !e.managed && u.Z.isRoleHigher(t, g, e) && false === n.roles.indexOf(e.id);
  return (0, r.jsx)(a.y, {
    targetElementRef: y,
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(d.Z, {
        guild: t,
        roleStyle: O,
        roleFilter: v,
        onSelect: b,
        onClose: n
      })
    },
    children: e => (0, r.jsx)(o.u, {
      asContainer: true,
      text: p.intl.string(p.t.icyMgc),
      "aria-label": false,
      shouldShow: m > 0,
      children: (0, r.jsxs)(s.P3F, E(h({
        innerRef: y,
        className: _.button,
        role: "button",
        "aria-label": p.intl.string(p.t.icyMgc)
      }, e), {
        children: [(0, r.jsx)(s.qJs, {
          size: "xs",
          color: "currentColor"
        }), 0 === m && (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: p.intl.string(p.t.icyMgc)
        })]
      }))
    })
  })
}