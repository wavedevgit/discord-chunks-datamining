/** Chunk was on web.js **/
/** chunk id: 366733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QU: () => O,
  UA: () => E,
  Vl: () => g,
  gk: () => y,
  kg: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk51144 = require("./51144.js"),
  Chunk96011 = require("./96011.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740908 = require("./740908.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = e => {
    let {
      user: t,
      isOwnUser: n,
      label: o,
      onRemove: s,
      isFaded: d
    } = e, {
      avatarSrc: _,
      eventHandlers: h
    } = (0, c.Z)({
      userId: null == t ? true : t.id,
      size: l.EFr.SIZE_24
    }), g = (0, u.XM)(t), [E, b] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: a()(p.container, {
        [p.hoverBackground]: null != s
      }),
      onMouseEnter: () => b(true),
      onMouseLeave: () => b(false),
      children: [(0, r.jsxs)("div", {
        className: a()(p.userInfoContainer, {
          [p.faded]: d
        }),
        children: [(0, r.jsx)(l.qEK, m({
          className: p.avatar,
          src: _,
          "aria-label": g,
          size: l.EFr.SIZE_24
        }, h)), (0, r.jsxs)(l.Text, {
          className: p.username,
          variant: "text-sm/medium",
          color: "text-strong",
          children: [g, !!n && " (".concat(f.intl.string(f.t.LuZzxn), ")")]
        }), null != o && (0, r.jsx)(l.Text, {
          className: p.label,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: o
        })]
      }), null != s && E && (0, r.jsx)("div", {
        className: p.textButtonContainer,
        children: (0, r.jsx)(l.Avr, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: f.intl.string(f.t.N86XcP),
          onClick: s
        })
      })]
    })
  },
  g = e => {
    let {
      user: t,
      isOwnUser: n
    } = e;
    return (0, r.jsx)(h, {
      user: t,
      isOwnUser: n,
      label: f.intl.string(d.default.vc2xys)
    })
  },
  E = e => {
    let {
      user: t,
      onRemove: n
    } = e;
    return (0, r.jsx)(h, {
      user: t,
      label: f.intl.string(d.default.mnt50A),
      onRemove: n
    })
  },
  b = e => {
    let {
      user: t,
      isOwnUser: n
    } = e;
    return (0, r.jsx)(h, {
      user: t,
      isOwnUser: n,
      label: f.intl.string(d.default.mnt50A)
    })
  },
  y = e => {
    let {
      user: t,
      onRemove: n
    } = e;
    return (0, r.jsx)(h, {
      user: t,
      label: f.intl.string(d.default["1RH5t9"]),
      isFaded: true,
      onRemove: n
    })
  },
  O = e => {
    let {
      onInvite: t,
      canInvite: n
    } = e, [o, c] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: a()(p.container, {
        [p.hoverBackground]: n
      }),
      onMouseEnter: () => c(true),
      onMouseLeave: () => c(false),
      children: [(0, r.jsxs)("div", {
        className: p.userInfoContainer,
        children: [(0, r.jsx)("div", {
          className: a()(p.userIconCircle, p.avatar),
          children: (0, r.jsx)(l.tBG, {
            size: "xxs",
            color: s.Z.colors.ICON_SUBTLE
          })
        }), (0, r.jsx)(l.Text, {
          className: p.username,
          variant: "text-sm/medium",
          color: "text-strong",
          children: f.intl.string(d.default["/x7DVG"])
        })]
      }), o && n && (0, r.jsx)("div", {
        className: p.textButtonContainer,
        children: (0, r.jsx)(l.Avr, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: f.intl.string(d.default.O15JWp),
          onClick: t
        })
      })]
    })
  }