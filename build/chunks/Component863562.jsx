/** Chunk was on 9536 **/
/** chunk id: 863562, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk330726 = require("./330726.js"),
  Chunk51144 = require("./51144.js"),
  Chunk268350 = require("./268350.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk596288 = require("./596288.js");
let p = e => {
  let {
    className: t,
    isDisabled: l,
    sticker: p,
    canManageSticker: h
  } = e, [x, j] = i.useState(false), [v, O] = (0, d.Z)(null, 4e3), y = async () => {
    O(null), j(true);
    try {
      await (0, g.Um)(p)
    } catch (e) {
      O(e.body.message), j(false)
    }
  }, C = u.ZP.useUserTag(p.user);
  return (0, r.jsx)(s.u, {
    forceOpen: null != v,
    text: v,
    asContainer: true,
    children: (0, r.jsxs)("div", {
      className: a()(b.wrapper, t, {
        [b.wrapperDisabled]: l
      }),
      children: [(0, r.jsxs)("div", {
        className: a()(b.content, {
          [b.contentRemoving]: x
        }),
        children: [(0, r.jsx)(m.Z, {
          className: b.sticker,
          size: 72,
          sticker: p
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(o.Text, {
            color: "text-strong",
            variant: "text-xs/semibold",
            className: b.stickerName,
            children: p.name
          }), null != p.user && (0, r.jsxs)("div", {
            className: b.user,
            children: [(0, r.jsx)(c.Z, {
              className: b.userAvatar,
              size: o.EFr.SIZE_16,
              user: p.user
            }), (0, r.jsx)(o.Text, {
              color: "text-default",
              variant: "text-xs/normal",
              children: C
            })]
          })]
        }), h ? (0, r.jsxs)("div", {
          className: b.actions,
          children: [(0, r.jsx)(o.P3F, {
            className: b.action,
            onClick: () => {
              (0, o.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("93626"), n.e("52719")]).then(n.bind(n, 136735));
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
                  sticker: p,
                  guildId: p.guild_id
                }, t))
              })
            },
            "aria-label": f.intl.string(f.t.bt75uw),
            children: (0, r.jsx)(o.vdY, {
              size: "xs",
              color: "currentColor",
              className: b.icon
            })
          }), (0, r.jsx)(o.P3F, {
            className: a()(b.action, b.actionRemove),
            onClick: y,
            "aria-label": f.intl.string(f.t.N86XcP),
            children: (0, r.jsx)(o.Dio, {
              size: "md",
              color: "currentColor",
              className: b.icon
            })
          })]
        }) : null]
      }), x && (0, r.jsx)(o.$jN, {
        className: b.spinner
      })]
    })
  })
}