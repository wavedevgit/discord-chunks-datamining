/** Chunk was on web.js **/
/** chunk id: 388905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DK: () => b,
  Dx: () => E,
  EJ: () => N,
  Ee: () => y,
  Hh: () => C,
  II: () => S,
  MC: () => I,
  Vj: () => v,
  ZP: () => w,
  gO: () => T,
  i_: () => A,
  jQ: () => R,
  qE: () => O,
  v6: () => P
}), require("./953529.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let g = Chunk481060.qEK;
null == g && (g = () => null);
let E = e => {
    let {
      className: t,
      id: n,
      children: i,
      variant: s = "heading-xl/semibold"
    } = e;
    return (0, r.jsx)(o.Heading, {
      variant: s,
      color: "header-primary",
      className: a()(m.title, t),
      id: n,
      children: i
    })
  },
  b = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: t,
      children: n
    })
  },
  y = e => {
    let {
      className: t,
      src: n
    } = e;
    return (0, r.jsx)("img", {
      alt: "",
      src: n,
      className: a()(m.image, t)
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
      className: a()(m.inviteLargeIcon, t),
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
    return (0, r.jsx)(d.Z, {
      active: true,
      guild: t,
      size: n,
      animate: i,
      className: a
    })
  };
v.Sizes = Chunk565138.Z.Sizes;
let I = e => {
  let {
    className: t,
    channel: n,
    size: i
  } = e;
  return (0, r.jsx)(g, {
    src: (0, s.x)(n),
    size: i,
    className: a()(m.inviteIcon, t),
    "aria-hidden": true
  })
};
I.Sizes = Chunk481060.EFr;
let S = e => {
    let {
      label: t,
      error: n,
      placeholder: i,
      value: a,
      className: s,
      setRef: l,
      type: c = "text",
      onChange: d,
      autoComplete: f,
      autoFocus: _,
      maxLength: p,
      spellCheck: h,
      name: m,
      description: g,
      required: E,
      onFocus: b,
      onBlur: y
    } = e, O = (0, u.Dt)(), v = (0, r.jsx)(o.oil, {
      name: m,
      type: c,
      value: a,
      inputRef: l,
      placeholder: i,
      "aria-label": t,
      onChange: d,
      autoComplete: f,
      autoFocus: _,
      maxLength: p,
      spellCheck: h,
      id: O,
      onFocus: b,
      onBlur: y,
      label: t,
      error: n,
      required: E,
      description: g
    });
    return null != s ? (0, r.jsx)("div", {
      className: s,
      children: v
    }) : v
  },
  T = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(m.block, t),
      children: n
    })
  },
  A = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: a()(m.subText, t),
      children: n
    })
  },
  C = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)(c.Z, {
      direction: c.Z.Direction.VERTICAL,
      align: c.Z.Align.CENTER,
      className: t,
      children: (0, r.jsx)(l.Z, {
        className: m.spinnerVideo
      })
    })
  },
  N = e => {
    let t, {
      online: n,
      total: i,
      className: s,
      flat: l,
      textClassName: u
    } = e;
    return null == i ? null : (null != n && n > 0 && (t = (0, r.jsxs)("div", {
      className: a()(m.pill, m.pillOnline, l && m.pillFlat),
      children: [(0, r.jsx)("i", {
        className: m.pillIconOnline
      }), (0, r.jsx)(o.Text, {
        tag: "span",
        className: u,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: h.intl.format(h.t["LC+S+m"], {
          membersOnline: n
        })
      })]
    })), (0, r.jsxs)(c.Z, {
      justify: c.Z.Justify.CENTER,
      className: s,
      children: [t, (0, r.jsxs)("div", {
        className: a()(m.pill, l && m.pillFlat),
        children: [(0, r.jsx)("i", {
          className: m.pillIconTotal
        }), (0, r.jsx)(o.Text, {
          tag: "span",
          className: u,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: h.intl.format(h.t.zRl6XR, {
            count: i
          })
        })]
      })]
    }))
  },
  R = e => {
    let {
      user: t
    } = e;
    return null == t ? null : (0, r.jsxs)("div", {
      className: m.joiningAs,
      children: [(0, r.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "header-secondary",
        children: h.intl.string(h.t["/8WWvE"])
      }), (0, r.jsx)(O, {
        className: m.joiningAsAvatar,
        src: t.getAvatarURL(true, 24),
        size: o.EFr.SIZE_24,
        "aria-label": t.username
      }), (0, r.jsx)(o.Text, {
        className: m.joiningAsUsername,
        tag: "span",
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.username
      })]
    })
  },
  P = e => {
    let {
      className: t
    } = e;
    return (0, r.jsxs)(T, {
      className: t,
      children: [(0, r.jsx)(o.Button, {
        text: h.intl.format(h.t.JoS1i3, {
          platform: (0, f.DW)()
        }),
        variant: "secondary",
        fullWidth: true,
        onClick: () => window.open((0, f.t3)())
      }), (0, r.jsx)(A, {
        className: m.downloadButtonSubtext,
        children: h.intl.format(h.t.wO1VBk, {
          supportedBrowserURL: _.Z.getArticleURL(p.BhN.SUPPORTED_BROWSERS)
        })
      })]
    })
  },
  w = e => {
    let {
      className: t,
      contentClassName: n,
      tag: i = "section",
      onSubmit: s,
      children: l,
      expanded: c = false,
      theme: u = p.BRd.DARK,
      style: d
    } = e;
    return (0, r.jsx)(o.f6W, {
      theme: u,
      disableAdaptiveTheme: true,
      children: e => (0, r.jsxs)(i, {
        "data-theme": u,
        onSubmit: s,
        style: d,
        className: a()(c ? m.authBoxExpanded : m.authBox, e, t),
        children: [(0, r.jsx)("div", {
          className: m.discordLogo
        }), (0, r.jsx)("div", {
          className: a()(m.centeringWrapper, n),
          children: l
        })]
      })
    })
  }