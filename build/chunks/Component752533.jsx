/** Chunk was on web.js **/
/** chunk id: 752533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bs: () => b,
  MT: () => E,
  U4: () => g,
  XN: () => O,
  YF: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk427262 = require("./427262.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk75717 = require("./75717.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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
let m = e => {
    let {
      user: t,
      isOwnUser: n,
      label: a,
      removeButton: o,
      isFaded: d
    } = e, {
      avatarSrc: _,
      eventHandlers: m
    } = (0, c.A)({
      userId: null == t ? true : t.id,
      size: l._3J.SIZE_24
    }), g = (0, u.$3)(t), [E, y] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: s()(p.kL, {
        [p.RE]: null != o
      }),
      onMouseEnter: () => y(true),
      onMouseLeave: () => y(false),
      children: [(0, r.jsxs)("div", {
        className: s()(p.TT, {
          [p.zj]: d
        }),
        children: [(0, r.jsx)(l.euF, h({
          className: p.my,
          src: _,
          "aria-label": g,
          size: l._3J.SIZE_24
        }, m)), (0, r.jsxs)(l.Text, {
          className: p.Xh,
          variant: "text-sm/medium",
          color: "text-strong",
          children: [g, !!n && " (".concat(f.intl.string(f.t.LuZzxn), ")")]
        }), null != a && (0, r.jsxs)(l.Text, {
          className: p.Pf,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: [(0, r.jsx)("span", {
            className: p.me,
            children: "\xb7"
          }), a]
        })]
      }), null != o && E && (0, r.jsx)("div", {
        className: p.dM,
        children: (0, r.jsx)(l.QWc, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: o.label,
          onClick: o.onRemove
        })
      })]
    })
  },
  g = e => {
    let {
      user: t,
      isOwnUser: n
    } = e;
    return (0, r.jsx)(m, {
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
    return (0, r.jsx)(m, {
      user: t,
      label: f.intl.string(d.default.mnt50A),
      removeButton: {
        onRemove: n,
        label: f.intl.string(f.t.N86XcP)
      }
    })
  },
  y = e => {
    let {
      user: t,
      isOwnUser: n
    } = e;
    return (0, r.jsx)(m, {
      user: t,
      isOwnUser: n,
      label: f.intl.string(d.default.mnt50A)
    })
  },
  b = e => {
    let {
      user: t,
      onRemove: n
    } = e;
    return (0, r.jsx)(m, {
      user: t,
      label: f.intl.string(d.default["1RH5t9"]),
      isFaded: true,
      removeButton: {
        onRemove: n,
        label: f.intl.string(d.default["2blqtw"])
      }
    })
  },
  O = e => {
    let {
      onInvite: t,
      canInvite: n
    } = e, [a, c] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: s()(p.kL, {
        [p.RE]: n
      }),
      onMouseEnter: () => c(true),
      onMouseLeave: () => c(false),
      children: [(0, r.jsxs)("div", {
        className: p.TT,
        children: [(0, r.jsx)("div", {
          className: s()(p.vG, p.my),
          children: (0, r.jsx)(l.nys, {
            size: "xxs",
            color: o.A.colors.ICON_SUBTLE
          })
        }), (0, r.jsx)(l.Text, {
          className: p.Xh,
          variant: "text-sm/medium",
          color: "text-strong",
          children: f.intl.string(d.default["/x7DVG"])
        })]
      }), a && n && (0, r.jsx)("div", {
        className: p.dM,
        children: (0, r.jsx)(l.QWc, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: f.intl.string(d.default.O15JWp),
          onClick: t
        })
      })]
    })
  }