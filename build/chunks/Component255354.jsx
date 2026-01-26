/** Chunk was on 39048 **/
/** chunk id: 255354, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk938078 = require("./938078.jsx"),
  Chunk57222 = require("./57222.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk877228 = require("./877228.js");

function d(e) {
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

function u(e, t) {
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
let g = Chunk64700.memo(function(e) {
  let {
    rule: t,
    onlyRoles: n = false,
    onChangeRule: i
  } = e, g = (0, r.jsx)(s.A, {
    guildId: t.guildId,
    selectedChannelIds: t.exemptChannels,
    selectedRoleIds: t.exemptRoles,
    onChange: (e, n) => i(u(d({}, t), {
      exemptChannels: e,
      exemptRoles: n
    })),
    disableEveryoneRole: true,
    includeRoleRestrictedPrivateChannels: true
  });
  return n && (g = (0, r.jsx)(a.A, {
    guildId: t.guildId,
    selectedRoleIds: t.exemptRoles,
    onChange: e => i(u(d({}, t), {
      exemptRoles: e
    })),
    placeholder: o.intl.string(o.t.aFO1I6),
    disableEveryoneRole: true
  })), (0, r.jsxs)("div", {
    children: [g, (0, r.jsx)(l.Text, {
      color: "text-default",
      variant: "text-xs/normal",
      className: c.d,
      children: o.intl.string(o.t.GKlYaS)
    })]
  })
})