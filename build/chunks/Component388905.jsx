/** Chunk was on web.js **/
/** chunk id: 388905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DK: () => T,
  Dx: () => I,
  EJ: () => L,
  Ee: () => S,
  Hh: () => x,
  II: () => P,
  MC: () => R,
  Vj: () => N,
  ZP: () => M,
  gO: () => w,
  i_: () => D,
  jQ: () => j,
  qE: () => C,
  v6: () => k,
  zx: () => A
}), require("./953529.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk905656 = require("./905656.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk361207 = require("./361207.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28731 = require("./28731.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = Chunk481060.qEK;
null == v && (v = () => null);
let I = e => {
    let {
      className: t,
      id: n,
      children: i,
      variant: a = "heading-xl/semibold"
    } = e;
    return (0, r.jsx)(s.X6q, {
      variant: a,
      color: "header-primary",
      className: o()(g.title, t),
      id: n,
      children: i
    })
  },
  T = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: t,
      children: n
    })
  },
  S = e => {
    let {
      className: t,
      src: n
    } = e;
    return (0, r.jsx)("img", {
      alt: "",
      src: n,
      className: o()(g.image, t)
    })
  },
  A = e => {
    var {
      className: t
    } = e, n = y(e, ["className"]);
    let i = n.look === a.zx.Looks.LINK;
    return (0, r.jsx)(a.zx, b({
      size: i ? a.zx.Sizes.MIN : a.zx.Sizes.LARGE,
      fullWidth: !i,
      className: o()(t, {
        [g.button]: !i,
        [g.linkButton]: i
      })
    }, n))
  };
A.Looks = Chunk755721.zx.Looks, A.Colors = Chunk755721.zx.Colors, A.Sizes = Chunk755721.zx.Sizes;
let C = e => {
    let {
      className: t,
      src: n,
      size: i
    } = e;
    return (0, r.jsx)(v, {
      src: n,
      size: i,
      className: o()(g.inviteLargeIcon, t),
      "aria-hidden": true
    })
  },
  N = e => {
    let {
      guild: t,
      size: n,
      animate: i = false,
      className: o
    } = e;
    return (0, r.jsx)(f.Z, {
      active: true,
      guild: t,
      size: n,
      animate: i,
      className: o
    })
  };
N.Sizes = Chunk565138.Z.Sizes;
let R = e => {
  let {
    className: t,
    channel: n,
    size: i
  } = e;
  return (0, r.jsx)(v, {
    src: (0, l.x)(n),
    size: i,
    className: o()(g.inviteIcon, t),
    "aria-hidden": true
  })
};
R.Sizes = Chunk481060.EFr;
let P = e => {
    let {
      label: t,
      error: n,
      placeholder: i,
      value: o,
      className: a,
      setRef: l,
      type: c = "text",
      onChange: u,
      autoComplete: f,
      autoFocus: _,
      maxLength: p,
      spellCheck: h,
      name: m,
      description: E,
      required: b,
      onFocus: y,
      onBlur: O
    } = e, v = (0, d.Dt)();
    return (0, r.jsxs)(s.xJW, {
      title: t,
      error: n,
      className: a,
      required: b,
      tag: "label",
      htmlFor: v,
      children: [(0, r.jsx)(s.oil, {
        name: m,
        type: c,
        value: o,
        inputRef: l,
        placeholder: i,
        "aria-label": t,
        onChange: u,
        autoComplete: f,
        autoFocus: _,
        maxLength: p,
        spellCheck: h,
        id: v,
        onFocus: y,
        onBlur: O
      }), null != E ? (0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        className: g.description,
        children: E
      }) : null]
    })
  },
  w = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)("div", {
      className: o()(g.block, t),
      children: n
    })
  },
  D = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      className: o()(g.subText, t),
      children: n
    })
  },
  x = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)(u.Z, {
      direction: u.Z.Direction.VERTICAL,
      align: u.Z.Align.CENTER,
      className: t,
      children: (0, r.jsx)(c.Z, {
        className: g.spinnerVideo
      })
    })
  },
  L = e => {
    let t, {
      online: n,
      total: i,
      className: a,
      flat: l,
      textClassName: c
    } = e;
    return null == i ? null : (null != n && n > 0 && (t = (0, r.jsxs)("div", {
      className: o()(g.pill, g.pillOnline, l && g.pillFlat),
      children: [(0, r.jsx)("i", {
        className: g.pillIconOnline
      }), (0, r.jsx)(s.Text, {
        tag: "span",
        className: c,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.intl.format(m.t["LC+S+v"], {
          membersOnline: n
        })
      })]
    })), (0, r.jsxs)(u.Z, {
      justify: u.Z.Justify.CENTER,
      className: a,
      children: [t, (0, r.jsxs)("div", {
        className: o()(g.pill, l && g.pillFlat),
        children: [(0, r.jsx)("i", {
          className: g.pillIconTotal
        }), (0, r.jsx)(s.Text, {
          tag: "span",
          className: c,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: m.intl.format(m.t.zRl6XV, {
            count: i
          })
        })]
      })]
    }))
  },
  j = e => {
    let {
      user: t
    } = e;
    return null == t ? null : (0, r.jsxs)("div", {
      className: g.joiningAs,
      children: [(0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "header-secondary",
        children: m.intl.string(m.t["/8WWvL"])
      }), (0, r.jsx)(C, {
        className: g.joiningAsAvatar,
        src: t.getAvatarURL(true, 24),
        size: s.EFr.SIZE_24,
        "aria-label": t.username
      }), (0, r.jsx)(s.Text, {
        className: g.joiningAsUsername,
        tag: "span",
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.username
      })]
    })
  },
  k = e => {
    let {
      className: t
    } = e;
    return (0, r.jsxs)(w, {
      className: t,
      children: [(0, r.jsx)(a.zx, {
        onClick: () => window.open((0, _.t3)()),
        children: m.intl.format(m.t.JoS1i4, {
          platform: (0, _.DW)()
        })
      }), (0, r.jsx)(D, {
        className: g.downloadButtonSubtext,
        children: m.intl.format(m.t.wO1VBg, {
          supportedBrowserURL: p.Z.getArticleURL(h.BhN.SUPPORTED_BROWSERS)
        })
      })]
    })
  },
  M = e => {
    let {
      className: t,
      contentClassName: n,
      tag: i = "section",
      onSubmit: a,
      children: l,
      expanded: c = false,
      theme: u = h.BRd.DARK,
      style: d
    } = e;
    return (0, r.jsx)(s.f6W, {
      theme: u,
      disableAdaptiveTheme: true,
      children: e => (0, r.jsxs)(i, {
        "data-theme": u,
        onSubmit: a,
        style: d,
        className: o()(c ? g.authBoxExpanded : g.authBox, e, t),
        children: [(0, r.jsx)("div", {
          className: g.discordLogo
        }), (0, r.jsx)("div", {
          className: o()(g.centeringWrapper, n),
          children: l
        })]
      })
    })
  }