/** Chunk was on 47841 **/
/** chunk id: 285732, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk304072 = require("./304072.js"),
  Chunk427262 = require("./427262.js"),
  Chunk631576 = require("./631576.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk102982 = require("./102982.js");
let b = e => {
  let {
    className: t,
    isDisabled: l,
    sticker: b,
    canManageSticker: h
  } = e, [x, j] = i.useState(false), [_, O] = (0, d.A)(null, 4e3), v = async () => {
    O(null), j(true);
    try {
      await (0, g.sl)(b)
    } catch (e) {
      O(e.body.message), j(false)
    }
  }, y = u.Ay.useUserTag(b.user);
  return (0, r.jsx)(a.m, {
    forceOpen: null != _,
    text: _,
    asContainer: true,
    children: (0, r.jsxs)("div", {
      className: s()(f.iE, t, {
        [f.Ce]: l
      }),
      children: [(0, r.jsxs)("div", {
        className: s()(f.Qs, {
          [f.d4]: x
        }),
        children: [(0, r.jsx)(m.A, {
          className: f.yI,
          size: 72,
          sticker: b
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(o.Text, {
            color: "text-strong",
            variant: "text-xs/semibold",
            className: f.Zl,
            children: b.name
          }), null != b.user && (0, r.jsxs)("div", {
            className: f.kQ,
            children: [(0, r.jsx)(c.A, {
              className: f.dj,
              size: o._3J.SIZE_16,
              user: b.user
            }), (0, r.jsx)(o.Text, {
              color: "text-default",
              variant: "text-xs/normal",
              children: y
            })]
          })]
        }), h ? (0, r.jsxs)("div", {
          className: f.o1,
          children: [(0, r.jsx)(o.DUT, {
            className: f.XI,
            onClick: () => {
              (0, o.mMO)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("29143"), n.e("27382")]).then(n.bind(n, 445002));
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
                  sticker: b,
                  guildId: b.guild_id
                }, t))
              })
            },
            "aria-label": p.intl.string(p.t.bt75uw),
            children: (0, r.jsx)(o.R2l, {
              size: "xs",
              color: "currentColor",
              className: f.Kk
            })
          }), (0, r.jsx)(o.DUT, {
            className: s()(f.XI, f.v_),
            onClick: v,
            "aria-label": p.intl.string(p.t.N86XcP),
            children: (0, r.jsx)(o.PGe, {
              size: "md",
              color: "currentColor",
              className: f.Kk
            })
          })]
        }) : null]
      }), x && (0, r.jsx)(o.y$y, {
        className: f.u1
      })]
    })
  })
}