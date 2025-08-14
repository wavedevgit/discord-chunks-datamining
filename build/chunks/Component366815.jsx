/** Chunk was on 61 **/
/** chunk id: 366815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk142497 = require("./142497.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk785281 = require("./785281.js"),
  Chunk137707 = require("./137707.js");
let d = () => (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
  children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: Chunk785281.inlineText,
    children: Chunk388032.intl.string(Chunk388032.t.GcZzp6)
  }), (0, Chunk255367.jsx)(Chunk481060.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: Chunk785281.inlineText,
    children: Chunk388032.intl.string(Chunk388032.t["/NEGrK"])
  }), (0, Chunk255367.jsx)(Chunk481060.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: Chunk785281.inlineText,
    children: Chunk388032.intl.string(Chunk388032.t.eUbuHB)
  }), (0, Chunk255367.jsx)(Chunk481060.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: Chunk785281.inlineText,
    children: Chunk388032.intl.string(Chunk388032.t.sCAZeH)
  })]
});

function m(e) {
  let {
    onClick: t
  } = e;
  return (0, l.e7)([a.qc], () => !a.qc.hasHotspot(a.v6.STAGE_CHANNEL_UPSELL)) ? null : (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsxs)("div", {
      className: c.content,
      children: [(0, r.jsxs)("div", {
        className: c.textContainer,
        children: [(0, r.jsx)(i.X6q, {
          variant: "heading-md/semibold",
          children: o.intl.string(o.t.Sx8Ezs)
        }), (0, r.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: c.descriptionText,
          children: o.intl.string(o.t.JUzPho)
        }), (0, r.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: o.intl.format(o.t.Vh7rPz, {
            suggestionsHook: d
          })
        })]
      }), (0, r.jsx)("div", {
        className: c.image,
        children: (0, r.jsx)("img", {
          src: u,
          alt: o.intl.string(o.t["uIm/n5"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: c.footer,
      children: (0, r.jsxs)(i.hE2, {
        direction: "horizontal",
        size: "sm",
        children: [(0, r.jsx)(i.zxk, {
          onClick: t,
          variant: "secondary",
          text: o.intl.string(o.t["X/3SyM"])
        }), (0, r.jsx)("div", {
          className: c.textButtonWrapper,
          children: (0, r.jsx)(i.Avr, {
            onClick: () => {
              s.Kw(a.v6.STAGE_CHANNEL_UPSELL)
            },
            variant: "secondary",
            textVariant: "text-sm/medium",
            text: o.intl.string(o.t["5E9SBw"])
          })
        })]
      })
    })]
  })
}