/** Chunk was on 61 **/
/** chunk id: 366815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk142497 = require("./142497.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk402793 = require("./402793.js"),
  Chunk137707 = require("./137707.js");
let d = () => (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
  children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: Chunk402793.inlineText,
    children: Chunk388032.intl.string(Chunk388032.t.GcZzp6)
  }), (0, Chunk951288.jsx)(Chunk481060.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: Chunk402793.inlineText,
    children: Chunk388032.intl.string(Chunk388032.t["/NEGrK"])
  }), (0, Chunk951288.jsx)(Chunk481060.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: Chunk402793.inlineText,
    children: Chunk388032.intl.string(Chunk388032.t.eUbuHB)
  }), (0, Chunk951288.jsx)(Chunk481060.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: Chunk402793.inlineText,
    children: Chunk388032.intl.string(Chunk388032.t.sCAZeH)
  })]
});

function x(e) {
  let {
    onClick: t
  } = e;
  return (0, r.e7)([a.qc], () => !a.qc.hasHotspot(a.v6.STAGE_CHANNEL_UPSELL)) ? null : (0, l.jsxs)("div", {
    className: c.container,
    children: [(0, l.jsxs)("div", {
      className: c.content,
      children: [(0, l.jsxs)("div", {
        className: c.textContainer,
        children: [(0, l.jsx)(i.X6q, {
          variant: "heading-md/semibold",
          children: o.intl.string(o.t.Sx8Ezs)
        }), (0, l.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: c.descriptionText,
          children: o.intl.string(o.t.JUzPho)
        }), (0, l.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: o.intl.format(o.t.Vh7rPz, {
            suggestionsHook: d
          })
        })]
      }), (0, l.jsx)("div", {
        className: c.image,
        children: (0, l.jsx)("img", {
          src: u,
          alt: o.intl.string(o.t["uIm/n5"])
        })
      })]
    }), (0, l.jsx)("div", {
      className: c.footer,
      children: (0, l.jsxs)(i.hE2, {
        direction: "horizontal",
        size: "sm",
        children: [(0, l.jsx)(i.zxk, {
          onClick: t,
          variant: "secondary",
          text: o.intl.string(o.t["X/3SyM"])
        }), (0, l.jsx)("div", {
          className: c.textButtonWrapper,
          children: (0, l.jsx)(i.Avr, {
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