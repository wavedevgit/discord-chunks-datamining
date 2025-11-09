/** Chunk was on 29679 **/
/** chunk id: 979664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk655544 = require("./655544.js");

function g(e) {
  let {
    profile: t,
    handleIconChange: l,
    canManageGuild: o
  } = e, g = i.useCallback(() => {
    l(null)
  }, [l]), m = i.useCallback((e, t) => {
    (0, a.ZDy)(async () => {
      let {
        default: i
      } = await Promise.all([n.e("91689"), n.e("59732"), n.e("63188")]).then(n.bind(n, 712451));
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
    children: [(0, r.jsx)(a.tEY, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: u.iconInput,
        children: [(0, r.jsx)(a.Button, {
          tabIndex: false,
          size: "sm",
          variant: "primary",
          disabled: !o,
          text: d.intl.string(d.t.r3JdsT)
        }), (0, r.jsx)(s.ZP, {
          tabIndex: 0,
          onChange: m,
          disabled: !o
        })]
      })
    }), null != t.icon ? (0, r.jsx)(a.Button, {
      variant: "critical-secondary",
      size: "sm",
      text: d.intl.string(d.t.x8AlTm),
      onClick: g,
      disabled: !o
    }) : null]
  })
}

function m(e) {
  let {
    profile: t,
    canManageGuild: n,
    onIconChange: i
  } = e, s = (0, l.e7)([o.Z], () => o.Z.getError("icon"));
  return (0, r.jsx)("section", {
    className: u.container,
    children: (0, r.jsx)(a.gNt, {
      label: d.intl.string(d.t.FkQnxJ),
      description: d.intl.string(d.t.KjkA0W),
      errorMessage: s,
      children: (0, r.jsx)(g, {
        profile: t,
        canManageGuild: n,
        handleIconChange: i
      })
    })
  })
}