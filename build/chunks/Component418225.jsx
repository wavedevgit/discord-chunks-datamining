/** Chunk was on 90220 **/
/** chunk id: 418225, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk53365 = require("./53365.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk207568 = require("./207568.js"),
  Chunk490962 = require("./490962.js");

function u(t) {
  let {
    header: e,
    body: s
  } = t;
  return (0, r.jsxs)("div", {
    className: c.bulletItem,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: c.bulletImage,
      src: d
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(n.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: e
      }), (0, r.jsx)(n.LZC, {
        size: 4
      }), (0, r.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: s
      })]
    })]
  })
}

function x(t) {
  let {
    guildId: e,
    demonetized: s,
    transitionState: c,
    onClose: d
  } = t, [x, {
    loading: m,
    error: h
  }] = (0, i.Z)(s ? a.$J : a.hY), p = async () => {
    try {
      let t = await x(e);
      null != t && (null == d || d())
    } catch (t) {}
  };
  return (0, r.jsx)(l.Modal, {
    size: "md",
    transitionState: c,
    actions: [{
      variant: "secondary",
      onClick: d,
      text: o.intl.string(o.t.Jj8nUC)
    }, {
      variant: "primary",
      loading: m,
      onClick: p,
      text: o.intl.string(o.t["pC/ozD"])
    }],
    title: o.intl.string(o.t.TP4GSt),
    onClose: d,
    preview: (0, r.jsxs)(r.Fragment, {
      children: [null == h ? null : (0, r.jsxs)(n.Text, {
        variant: "text-xs/normal",
        color: "status-danger",
        children: ["Error: ", h.message]
      }), (0, r.jsx)(n.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: o.intl.format(o.t["+oNl6x"], {
          termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
        })
      })]
    }),
    subtitle: o.intl.format(o.t.c0IsON, {
      termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
    }),
    children: (0, r.jsxs)(n.Kqy, {
      gap: 16,
      children: [(0, r.jsx)(u, {
        header: o.intl.string(o.t.UzDaWD),
        body: o.intl.string(o.t.IDk8Fz)
      }), (0, r.jsx)(u, {
        header: o.intl.string(o.t["36/RiT"]),
        body: o.intl.string(o.t.CBzNtr)
      })]
    })
  })
}