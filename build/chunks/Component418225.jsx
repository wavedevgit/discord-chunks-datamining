/** Chunk was on 90220 **/
/** chunk id: 418225, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk53365 = require("./53365.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk69901 = require("./69901.js"),
  Chunk490962 = require("./490962.js");

function x(t) {
  let {
    header: e,
    body: s
  } = t;
  return (0, r.jsxs)("div", {
    className: o.bulletItem,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: o.bulletImage,
      src: d
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: e
      }), (0, r.jsx)(l.LZC, {
        size: 4
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: s
      })]
    })]
  })
}

function u(t) {
  let {
    guildId: e,
    demonetized: s,
    transitionState: o,
    onClose: d
  } = t, [u, {
    loading: m,
    error: h
  }] = (0, n.Z)(s ? a.$J : a.hY), p = async () => {
    try {
      let t = await u(e);
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
      loading: m,
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
    children: (0, r.jsxs)(l.Kqy, {
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