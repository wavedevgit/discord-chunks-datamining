/** Chunk was on 46529 **/
/** chunk id: 633400, original params: t,s,e (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608461 = require("./608461.js"),
  Chunk493540 = require("./493540.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk100670 = require("./100670.js"),
  Chunk485885 = require("./485885.js");

function x(t) {
  let {
    header: s,
    body: e
  } = t;
  return (0, r.jsxs)("div", {
    className: o.yf,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: o.mT,
      src: d
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(n.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: s
      }), (0, r.jsx)(n.hKd, {
        size: 4
      }), (0, r.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: e
      })]
    })]
  })
}

function m(t) {
  let {
    guildId: s,
    demonetized: e,
    transitionState: o,
    onClose: d
  } = t, [m, {
    loading: h,
    error: u
  }] = (0, a.A)(e ? l.Y7 : l.KW), p = async () => {
    try {
      let t = await m(s);
      null != t && (null == d || d())
    } catch (t) {}
  };
  return (0, r.jsx)(i.Modal, {
    size: "md",
    transitionState: o,
    actions: [{
      variant: "secondary",
      onClick: d,
      text: c.intl.string(c.t.Jj8nUC)
    }, {
      variant: "primary",
      loading: h,
      onClick: p,
      text: c.intl.string(c.t["pC/ozD"])
    }],
    title: c.intl.string(c.t.TP4GSt),
    onClose: d,
    preview: (0, r.jsxs)(r.Fragment, {
      children: [null == u ? null : (0, r.jsxs)(n.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: ["Error: ", u.message]
      }), (0, r.jsx)(n.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: c.intl.format(c.t["+oNl6x"], {
          termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
        })
      })]
    }),
    subtitle: c.intl.format(c.t.c0IsON, {
      termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
    }),
    children: (0, r.jsxs)(n.BJc, {
      gap: 16,
      children: [(0, r.jsx)(x, {
        header: c.intl.string(c.t.UzDaWD),
        body: c.intl.string(c.t.IDk8Fz)
      }), (0, r.jsx)(x, {
        header: c.intl.string(c.t["36/RiT"]),
        body: c.intl.string(c.t.CBzNtr)
      })]
    })
  })
}