/** Chunk was on 64982 **/
/** chunk id: 979664, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk713611 = require("./713611.js"),
  Chunk270856 = require("./270856.js");

function m(e) {
  let {
    profile: t,
    handleIconChange: l,
    canManageGuild: o
  } = e, g = i.useCallback(() => {
    l(null)
  }, [l]), m = i.useCallback((e, t) => {
    (0, s.ZDy)(async () => {
      let {
        default: i
      } = await Promise.all([n.e("91689"), n.e("59732"), n.e("7016")]).then(n.bind(n, 712451));
      return n => (0, r.jsx)(i, function(e) {
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
      }({
        uploadType: c.pC.GUILD_ICON,
        imageUri: e,
        file: t,
        onCrop: e => {
          let {
            imageUri: t
          } = e;
          return l(t)
        }
      }, n))
    }, {})
  }, [l]);
  return (0, r.jsxs)("div", {
    className: u.buttons,
    children: [(0, r.jsx)(s.tEY, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: u.iconInput,
        children: [(0, r.jsx)(s.zxk, {
          tabIndex: false,
          size: "sm",
          variant: "primary",
          disabled: !o,
          text: d.intl.string(d.t.r3Jdsb)
        }), (0, r.jsx)(a.ZP, {
          tabIndex: 0,
          onChange: m,
          disabled: !o
        })]
      })
    }), null != t.icon ? (0, r.jsx)(s.zxk, {
      variant: "critical-secondary",
      size: "sm",
      text: d.intl.string(d.t.x8AlTk),
      onClick: g,
      disabled: !o
    }) : null]
  })
}

function p(e) {
  let {
    profile: t,
    canManageGuild: n,
    onIconChange: i
  } = e, a = (0, l.e7)([o.Z], () => o.Z.getError("icon"));
  return (0, r.jsxs)("section", {
    className: u.container,
    children: [(0, r.jsxs)(s.hjN, {
      className: g.section,
      children: [(0, r.jsxs)("div", {
        className: g.sectionHeader,
        children: [(0, r.jsx)(s.vwX, {
          children: d.intl.string(d.t.FkQnxM)
        }), (0, r.jsx)(s.R94, {
          type: "description",
          children: d.intl.string(d.t.KjkA0d)
        })]
      }), (0, r.jsx)(m, {
        profile: t,
        canManageGuild: n,
        handleIconChange: i
      })]
    }), null != a ? (0, r.jsx)("div", {
      className: u.iconError,
      children: a
    }) : null]
  })
}