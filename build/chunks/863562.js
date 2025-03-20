/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(700582),
  A = n(330726),
  c = n(51144),
  d = n(268350),
  u = n(419922),
  g = n(388032),
  f = n(662815);
let m = e => {
  let {
    className: t,
    isDisabled: s,
    sticker: m,
    canManageSticker: p
  } = e, [h, C] = i.useState(!1), [b, v] = (0, A.Z)(null, 4e3), x = () => {
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("93626"), n.e("58665")]).then(n.bind(n, 136735));
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
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({
        sticker: m,
        guildId: m.guild_id
      }, t))
    })
  }, N = async () => {
    v(null), C(!0);
    try {
      await (0, d.Um)(m)
    } catch (e) {
      v(e.body.message), C(!1)
    }
  }, j = c.ZP.useUserTag(m.user);
  return (0, r.jsx)(l.ua7, {
    color: l.ua7.Colors.RED,
    forceOpen: null != b,
    text: b,
    children: () => (0, r.jsxs)("div", {
      className: a()(f.wrapper, t, {
        [f.wrapperDisabled]: s
      }),
      children: [(0, r.jsxs)("div", {
        className: a()(f.content, {
          [f.contentRemoving]: h
        }),
        children: [(0, r.jsx)(u.ZP, {
          className: f.sticker,
          size: 72,
          sticker: m
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(l.Text, {
            color: "header-primary",
            variant: "text-xs/semibold",
            className: f.stickerName,
            children: m.name
          }), null != m.user && (0, r.jsxs)("div", {
            className: f.user,
            children: [(0, r.jsx)(o.Z, {
              className: f.userAvatar,
              size: l.EFr.SIZE_16,
              user: m.user
            }), (0, r.jsx)(l.Text, {
              color: "header-secondary",
              variant: "text-xs/normal",
              children: j
            })]
          })]
        }), p ? (0, r.jsxs)("div", {
          className: f.actions,
          children: [(0, r.jsx)(l.P3F, {
            className: f.action,
            onClick: x,
            "aria-label": g.NW.string(g.t.bt75u7),
            children: (0, r.jsx)(l.vdY, {
              size: "xs",
              color: "currentColor",
              className: f.icon
            })
          }), (0, r.jsx)(l.P3F, {
            className: a()(f.action, f.actionRemove),
            onClick: N,
            "aria-label": g.NW.string(g.t.N86XcH),
            children: (0, r.jsx)(l.Dio, {
              size: "md",
              color: "currentColor",
              className: f.icon
            })
          })]
        }) : null]
      }), h && (0, r.jsx)(l.$jN, {
        className: f.spinner
      })]
    })
  })
}