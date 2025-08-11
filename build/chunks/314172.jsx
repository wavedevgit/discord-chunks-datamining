/** Chunk was on web.js **/
/** chunk id: 314172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk235874 = require("./235874.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk944613 = require("./944613.js"),
  Chunk607070 = require("./607070.js"),
  Chunk345162 = require("./345162.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk645214 = require("./645214.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    guild: t,
    guildMember: n,
    numRoles: p,
    highestRole: m,
    onAddRole: E,
    buttonRef: b
  } = e, y = (0, i.e7)([l.Z], () => l.Z.roleStyle);
  if (!(0, i.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_ROLES, t))) return null;
  let O = e => !(0, c.fI)(e) && !e.managed && u.Z.isRoleHigher(t, m, e) && false === n.roles.indexOf(e.id);
  return <o.y targetElementRef={b} position={"bottom"} align={"center"} renderPopout={e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(s.Z, {
        guild: t,
        roleStyle: y,
        roleFilter: O,
        onSelect: E,
        onClose: n
      })
    }}>{e => (0, r.jsx)(a.DY3, {
      text: f.intl.string(f.t.icyMgY),
      "aria-label": false,
      shouldShow: p > 0,
      children: (0, r.jsxs)(a.P3F, g(h({
        innerRef: b,
        className: _.button,
        role: "button",
        "aria-label": f.intl.string(f.t.icyMgY)
      }, e), {
        children: [(0, r.jsx)(a.qJs, {
          size: "xs",
          color: "currentColor"
        }), 0 === p && (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: f.intl.string(f.t.icyMgY)
        })]
      }))
    })}</o.y>
}