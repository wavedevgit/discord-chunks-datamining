/** Chunk was on 384 **/
/** chunk id: 55889, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk941524 = require("./941524.jsx"),
  Chunk563115 = require("./563115.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk482908 = require("./482908.js");

function u(e) {
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
}

function d(e, t) {
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
let g = Chunk473749.memo(function(e) {
  let {
    rule: t,
    onlyRoles: n = false,
    onChangeRule: i
  } = e, g = (0, r.jsx)(a.Z, {
    guildId: t.guildId,
    selectedChannelIds: t.exemptChannels,
    selectedRoleIds: t.exemptRoles,
    onChange: (e, n) => i(d(u({}, t), {
      exemptChannels: e,
      exemptRoles: n
    })),
    disableEveryoneRole: true,
    includeRoleRestrictedPrivateChannels: true
  });
  return n && (g = (0, r.jsx)(s.Z, {
    guildId: t.guildId,
    selectedRoleIds: t.exemptRoles,
    onChange: e => i(d(u({}, t), {
      exemptRoles: e
    })),
    placeholder: o.intl.string(o.t.aFO1I6),
    disableEveryoneRole: true
  })), (0, r.jsxs)("div", {
    children: [g, (0, r.jsx)(l.Text, {
      color: "text-default",
      variant: "text-xs/normal",
      className: c.exemptionHint,
      children: o.intl.string(o.t.GKlYaS)
    })]
  })
})