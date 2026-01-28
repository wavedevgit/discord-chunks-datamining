/** Chunk was on 5606 **/
/** chunk id: 752533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bs: () => h,
  MT: () => f,
  U4: () => g,
  XN: () => A,
  YF: () => b
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
let m = e => {
    let {
      user: t,
      isOwnUser: n,
      label: l,
      removeButton: a,
      isFaded: u
    } = e, {
      avatarSrc: m,
      eventHandlers: g
    } = (0, c.A)({
      userId: null == t ? true : t.id,
      size: o._3J.SIZE_24
    }), f = (0, d.$3)(t), [b, h] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: s()(_.kL, {
        [_.RE]: null != a
      }),
      onMouseEnter: () => h(true),
      onMouseLeave: () => h(false),
      children: [(0, r.jsxs)("div", {
        className: s()(_.TT, {
          [_.zj]: u
        }),
        children: [(0, r.jsx)(o.euF, function(e) {
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
          className: _.my,
          src: m,
          "aria-label": f,
          size: o._3J.SIZE_24
        }, g)), (0, r.jsxs)(o.Text, {
          className: _.Xh,
          variant: "text-sm/medium",
          color: "text-strong",
          children: [f, !!n && " (".concat(p.intl.string(p.t.LuZzxn), ")")]
        }), null != l && (0, r.jsxs)(o.Text, {
          className: _.Pf,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: [(0, r.jsx)("span", {
            className: _.me,
            children: "\xb7"
          }), l]
        })]
      }), null != a && b && (0, r.jsx)("div", {
        className: _.dM,
        children: (0, r.jsx)(o.QWc, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: a.label,
          onClick: a.onRemove
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
      label: p.intl.string(u.default.vc2xys)
    })
  },
  f = e => {
    let {
      user: t,
      onRemove: n
    } = e;
    return (0, r.jsx)(m, {
      user: t,
      label: p.intl.string(u.default.mnt50A),
      removeButton: {
        onRemove: n,
        label: p.intl.string(p.t.N86XcP)
      }
    })
  },
  b = e => {
    let {
      user: t,
      isOwnUser: n
    } = e;
    return (0, r.jsx)(m, {
      user: t,
      isOwnUser: n,
      label: p.intl.string(u.default.mnt50A)
    })
  },
  h = e => {
    let {
      user: t,
      onRemove: n
    } = e;
    return (0, r.jsx)(m, {
      user: t,
      label: p.intl.string(u.default["1RH5t9"]),
      isFaded: true,
      removeButton: {
        onRemove: n,
        label: p.intl.string(u.default["2blqtw"])
      }
    })
  },
  A = e => {
    let {
      onInvite: t,
      canInvite: n
    } = e, [l, c] = i.useState(false);
    return (0, r.jsxs)("div", {
      className: s()(_.kL, {
        [_.RE]: n
      }),
      onMouseEnter: () => c(true),
      onMouseLeave: () => c(false),
      children: [(0, r.jsxs)("div", {
        className: _.TT,
        children: [(0, r.jsx)("div", {
          className: s()(_.vG, _.my),
          children: (0, r.jsx)(o.nys, {
            size: "xxs",
            color: a.A.colors.ICON_SUBTLE
          })
        }), (0, r.jsx)(o.Text, {
          className: _.Xh,
          variant: "text-sm/medium",
          color: "text-strong",
          children: p.intl.string(u.default["/x7DVG"])
        })]
      }), l && n && (0, r.jsx)("div", {
        className: _.dM,
        children: (0, r.jsx)(o.QWc, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: p.intl.string(u.default.O15JWp),
          onClick: t
        })
      })]
    })
  }