/** Chunk was on web.js **/
/** chunk id: 854378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $v: () => v,
  Ay: () => D,
  CK: () => C,
  F4: () => A,
  KE: () => P,
  ME: () => T,
  R1: () => R,
  _V: () => b,
  eB: () => S,
  eu: () => O,
  hE: () => E,
  pd: () => I,
  tK: () => y,
  xt: () => w
}), require("./228524.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk571694 = require("./571694.js"),
  Chunk902811 = require("./902811.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk53505 = require("./53505.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380172 = require("./380172.js");
let g = Chunk397927.euF;
null == g && (g = () => null);
let E = e => {
    let {
      className: t,
      id: n,
      children: i,
      variant: o = "heading-xl/semibold"
    } = e;
    return (0, r.jsx)(s.Heading, {
      variant: o,
      color: "text-strong",
      className: a()(m.DD, t),
      id: n,
      children: i
    })
  },
  y = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: t,
      children: n
    })
  },
  b = e => {
    let {
      className: t,
      src: n
    } = e;
    return (0, r.jsx)("img", {
      alt: "",
      src: n,
      className: a()(m.Sl, t)
    })
  },
  O = e => {
    let {
      className: t,
      src: n,
      size: i
    } = e;
    return (0, r.jsx)(g, {
      src: n,
      size: i,
      className: a()(m.yt, t),
      "aria-hidden": true
    })
  },
  v = e => {
    let {
      guild: t,
      size: n,
      animate: i = false,
      className: a
    } = e;
    return (0, r.jsx)(d.A, {
      active: true,
      guild: t,
      size: n,
      animate: i,
      className: a
    })
  };
v.Sizes = Chunk263063.A.Sizes;
let A = e => {
  let {
    className: t,
    channel: n,
    size: i
  } = e;
  return (0, r.jsx)(g, {
    src: (0, o.Y)(n),
    size: i,
    className: a()(m.TP, t),
    "aria-hidden": true
  })
};
A.Sizes = Chunk397927._3J;
let I = e => {
    let {
      label: t,
      error: n,
      placeholder: i,
      value: a,
      className: o,
      setRef: l,
      type: c = "text",
      onChange: d,
      autoComplete: f,
      autoFocus: p,
      maxLength: _,
      spellCheck: h,
      name: m,
      description: g,
      required: E,
      onFocus: y,
      onBlur: b
    } = e, O = (0, u.GV)(), v = (0, r.jsx)(s.ksK, {
      name: m,
      type: c,
      value: a,
      inputRef: l,
      placeholder: i,
      "aria-label": t,
      onChange: d,
      autoComplete: f,
      autoFocus: p,
      maxLength: _,
      spellCheck: h,
      id: O,
      onFocus: y,
      onBlur: b,
      label: t,
      error: n,
      required: E,
      description: g
    });
    return null != o ? (0, r.jsx)("div", {
      className: o,
      children: v
    }) : v
  },
  S = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(m.om, t),
      children: n
    })
  },
  T = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      className: a()(m.Sv, t),
      children: n
    })
  },
  C = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)(c.A, {
      direction: c.A.Direction.VERTICAL,
      align: c.A.Align.CENTER,
      className: t,
      children: (0, r.jsx)(l.A, {
        className: m.$$
      })
    })
  },
  N = e => (0, r.jsx)(s.Text, {
    tag: "span",
    className: null == e ? true : e.className,
    variant: "text-sm/normal",
    color: "text-default",
    children: null == e ? true : e.children
  }),
  R = e => {
    let t, {
      online: n,
      total: i,
      className: s,
      flat: o,
      textClassName: l,
      renderText: u = N
    } = e;
    return null == i ? null : (null != n && n > 0 && (t = (0, r.jsxs)("div", {
      className: a()(m.Io, m.L1, o && m.Z6),
      children: [(0, r.jsx)("i", {
        className: m._o
      }), u({
        className: l,
        children: h.intl.format(h.t["LC+S+m"], {
          membersOnline: n
        })
      })]
    })), (0, r.jsxs)(c.A, {
      justify: c.A.Justify.CENTER,
      className: s,
      children: [t, (0, r.jsxs)("div", {
        className: a()(m.Io, o && m.Z6),
        children: [(0, r.jsx)("i", {
          className: m.jk
        }), u({
          className: l,
          children: h.intl.format(h.t.zRl6XR, {
            count: i
          })
        })]
      })]
    }))
  },
  w = e => {
    let {
      user: t
    } = e;
    return null == t ? null : (0, r.jsxs)("div", {
      className: m.l1,
      children: [(0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-default",
        children: h.intl.string(h.t["/8WWvE"])
      }), (0, r.jsx)(O, {
        className: m.yj,
        src: t.getAvatarURL(true, 24),
        size: s._3J.SIZE_24,
        "aria-label": t.username
      }), (0, r.jsx)(s.Text, {
        className: m.pp,
        tag: "span",
        variant: "text-md/semibold",
        color: "text-strong",
        children: t.username
      })]
    })
  },
  P = e => {
    let {
      className: t
    } = e;
    return (0, r.jsxs)(S, {
      className: t,
      children: [(0, r.jsx)(s.Button, {
        text: h.intl.format(h.t.JoS1i3, {
          platform: (0, f.Vf)()
        }),
        variant: "secondary",
        fullWidth: true,
        onClick: () => window.open((0, f.SU)())
      }), (0, r.jsx)(T, {
        className: m.UM,
        children: h.intl.format(h.t.wO1VBk, {
          supportedBrowserURL: p.A.getArticleURL(_.MVz.SUPPORTED_BROWSERS)
        })
      })]
    })
  },
  D = e => {
    let {
      className: t,
      contentClassName: n,
      tag: i = "section",
      onSubmit: o,
      children: l,
      expanded: c = false,
      theme: u = _.NJ8.DARK,
      style: d
    } = e;
    return (0, r.jsx)(s.NPJ, {
      theme: u,
      disableAdaptiveTheme: true,
      children: e => (0, r.jsxs)(i, {
        "data-theme": u,
        onSubmit: o,
        style: d,
        className: a()(c ? m.PR : m.sL, e, t),
        children: [(0, r.jsx)("div", {
          className: m.ie
        }), (0, r.jsx)("div", {
          className: a()(m.f4, n),
          children: l
        })]
      })
    })
  }