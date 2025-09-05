/** Chunk was on 54052 **/
/** chunk id: 863562, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  } = e, [b, x] = i.useState(false), [j, v] = (0, c.Z)(null, 4e3), _ = () => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("93626"), n.e("64815")]).then(n.bind(n, 136735));
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
    v(null), x(true);
    try {
      await (0, u.Um)(f)
    } catch (e) {
      v(e.body.message), x(false)
    }
  }, y = d.ZP.useUserTag(f.user);
  return (0, r.jsx)(s.ua7, {
    color: s.ua7.Colors.RED,
    forceOpen: null != j,
    text: j,
    children: () => (0, r.jsxs)("div", {
      className: a()(p.wrapper, t, {
        [p.wrapperDisabled]: l
      }),
      children: [(0, r.jsxs)("div", {
        className: a()(p.content, {
          [p.contentRemoving]: b
        }),
        children: [(0, r.jsx)(m.Z, {
          className: p.sticker,
          size: 72,
          sticker: f
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(s.Text, {
            color: "header-primary",
            variant: "text-xs/semibold",
            className: p.stickerName,
            children: f.name
          }), null != f.user && (0, r.jsxs)("div", {
            className: p.user,
            children: [(0, r.jsx)(o.Z, {
              className: p.userAvatar,
              size: s.EFr.SIZE_16,
              user: f.user
            }), (0, r.jsx)(s.Text, {
              color: "header-secondary",
              variant: "text-xs/normal",
              children: y
            })]
          })]
        }), h ? (0, r.jsxs)("div", {
          className: p.actions,
          children: [(0, r.jsx)(s.P3F, {
            className: p.action,
            onClick: _,
            "aria-label": g.intl.string(g.t.bt75u7),
            children: (0, r.jsx)(s.vdY, {
              size: "xs",
              color: "currentColor",
              className: p.icon
            })
          }), (0, r.jsx)(s.P3F, {
            className: a()(p.action, p.actionRemove),
            onClick: O,
            "aria-label": g.intl.string(g.t.N86XcH),
            children: (0, r.jsx)(s.Dio, {
              size: "md",
              color: "currentColor",
              className: p.icon
            })
          })]
        }) : null]
      }), b && (0, r.jsx)(s.$jN, {
        className: p.spinner
      })]
    })
  })
}