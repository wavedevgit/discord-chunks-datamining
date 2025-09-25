/** Chunk was on 60611 **/
/** chunk id: 863562, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk330726 = require("./330726.js"),
  Chunk51144 = require("./51144.js"),
  Chunk268350 = require("./268350.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk783248 = require("./783248.js");
let f = e => {
  let {
    className: t,
    isDisabled: l,
    sticker: f,
    canManageSticker: h
  } = e, [x, b] = i.useState(false), [j, v] = (0, c.Z)(null, 4e3), _ = () => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("93626"), n.e("72997")]).then(n.bind(n, 136735));
      return t => (0, r.jsx)(e, function(e) {
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
        sticker: f,
        guildId: f.guild_id
      }, t))
    })
  }, O = async () => {
    v(null), b(true);
    try {
      await (0, u.Um)(f)
    } catch (e) {
      v(e.body.message), b(false)
    }
  }, y = d.ZP.useUserTag(f.user);
  return (0, r.jsx)(a.ua7, {
    color: a.ua7.Colors.RED,
    forceOpen: null != j,
    text: j,
    children: () => (0, r.jsxs)("div", {
      className: s()(p.wrapper, t, {
        [p.wrapperDisabled]: l
      }),
      children: [(0, r.jsxs)("div", {
        className: s()(p.content, {
          [p.contentRemoving]: x
        }),
        children: [(0, r.jsx)(m.Z, {
          className: p.sticker,
          size: 72,
          sticker: f
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.Text, {
            color: "header-primary",
            variant: "text-xs/semibold",
            className: p.stickerName,
            children: f.name
          }), null != f.user && (0, r.jsxs)("div", {
            className: p.user,
            children: [(0, r.jsx)(o.Z, {
              className: p.userAvatar,
              size: a.EFr.SIZE_16,
              user: f.user
            }), (0, r.jsx)(a.Text, {
              color: "header-secondary",
              variant: "text-xs/normal",
              children: y
            })]
          })]
        }), h ? (0, r.jsxs)("div", {
          className: p.actions,
          children: [(0, r.jsx)(a.P3F, {
            className: p.action,
            onClick: _,
            "aria-label": g.intl.string(g.t.bt75u7),
            children: (0, r.jsx)(a.vdY, {
              size: "xs",
              color: "currentColor",
              className: p.icon
            })
          }), (0, r.jsx)(a.P3F, {
            className: s()(p.action, p.actionRemove),
            onClick: O,
            "aria-label": g.intl.string(g.t.N86XcH),
            children: (0, r.jsx)(a.Dio, {
              size: "md",
              color: "currentColor",
              className: p.icon
            })
          })]
        }) : null]
      }), x && (0, r.jsx)(a.$jN, {
        className: p.spinner
      })]
    })
  })
}