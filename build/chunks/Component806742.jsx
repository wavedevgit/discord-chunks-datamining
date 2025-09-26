/** Chunk was on 49236 **/
/** chunk id: 806742, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk734893 = require("./734893.js"),
  Chunk150512 = require("./150512.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk535907 = require("./535907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197530 = require("./197530.js");

function b(e) {
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

function x(e, t) {
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
let j = function(e) {
  let {
    guildId: t
  } = e, l = (0, a.cj)([g.Z], () => {
    var e;
    return null != (e = g.Z.getSettings().welcomeMessage) ? e : p.z
  }), j = i.useCallback(() => (0, o.ZDy)(async () => {
    let {
      default: e
    } = await n.e("36371").then(n.bind(n, 893626));
    return n => (0, r.jsx)(e, x(b({}, n), {
      guildId: t,
      welcomeMessage: l,
      onSave: e => (0, m._N)(e)
    }))
  }), [t, l]), v = (0, a.e7)([u.default], () => u.default.getId());
  return (0, c.pw)(l) ? (0, r.jsx)(o.zxk, {
    variant: "primary",
    size: "sm",
    text: f.intl.string(f.t["9Z+aEB"]),
    onClick: j
  }) : (0, r.jsxs)(o.P3F, {
    className: h.editWelcomeSection,
    onClick: j,
    children: [(0, r.jsx)(d.Z, {
      guildId: t,
      welcomeMessage: {
        authorIds: l.authorIds.length > 0 ? l.authorIds : [v],
        message: l.message
      }
    }), (0, r.jsx)(o.ua7, {
      text: f.intl.string(f.t.bt75u7),
      children: e => (0, r.jsxs)("div", x(b({}, e), {
        className: s()(h.actionItemEditButton, h.editWelcomeButton),
        children: [(0, r.jsx)(o.vdY, {
          size: "md",
          color: "currentColor"
        }), (0, r.jsx)(o.nn4, {
          children: f.intl.string(f.t.bt75u7)
        })]
      }))
    })]
  })
}