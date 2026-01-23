/** Chunk was on 46529 **/
/** chunk id: 633400, original params: t,e,s (module,exports,require) **/
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
    header: e,
    body: s
  } = t;
  return (0, r.jsxs)("div", {
    className: o.yf,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: o.mT,
      src: d
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: e
      }), (0, r.jsx)(l.hKd, {
        size: 4
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: s
      })]
    })]
  })
}

function m(t) {
  let {
    guildId: e,
    demonetized: s,
    transitionState: o,
    onClose: d
  } = t, [m, {
    loading: u,
    error: h
  }] = (0, n.A)(s ? a.Y7 : a.KW), p = async () => {
    try {
      let t = await m(e);
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
      loading: u,
      onClick: p,
      text: c.intl.string(c.t["pC/ozD"])
    }],
    title: c.intl.string(c.t.TP4GSt),
    onClose: d,
    preview: (0, r.jsxs)(r.Fragment, {
      children: [null == h ? null : (0, r.jsxs)(l.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: ["Error: ", h.message]
      }), (0, r.jsx)(l.Text, {
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
    children: (0, r.jsxs)(l.BJc, {
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