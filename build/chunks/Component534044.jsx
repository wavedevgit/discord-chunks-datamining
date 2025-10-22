/** Chunk was on 65652 **/
/** chunk id: 534044, original params: n,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk548647 = require("./548647.js"),
  Chunk696375 = require("./696375.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk234139 = require("./234139.js"),
  Chunk428687 = require("./428687.js"),
  Chunk160557 = require("./160557.js");

function u(n) {
  let {
    className: e,
    onNext: i,
    onClose: a
  } = n, u = (0, o.n)();
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: r.Z.Direction.VERTICAL,
      className: g.header,
      separator: false,
      children: [(0, t.jsx)("div", {
        className: m.iconContainer,
        children: (0, t.jsx)("img", {
          src: p,
          alt: "",
          className: m.icon
        })
      }), (0, t.jsx)(l.Heading, {
        className: g.title,
        variant: "heading-xl/semibold",
        children: x.intl.string(x.t.QMbTSu)
      }), (0, t.jsx)(l.Heading, {
        className: g.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: x.intl.string(x.t.Qdx8AP)
      }), null != a && (0, t.jsx)(l.olH, {
        "data-migration-pending": true,
        className: g.closeButton,
        onClick: a
      })]
    }), (0, t.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: s()(m.modalContent, e),
      paddingFix: false,
      children: [(0, t.jsx)(l.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        className: m.actionsHeader,
        children: x.intl.string(x.t["9BRc1N"])
      }), (0, t.jsx)(c.Z, {
        text: x.intl.string(x.t.PxL38B),
        url: d.sQ.COMMUNITY_GUIDELINES,
        onClick: () => u(d.n0.ClickCommunityGuidelinesLink)
      }), (0, t.jsx)(c.Z, {
        text: x.intl.string(x.t.qC3XKa),
        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
        onClick: () => u(d.n0.ClickWarningSystemHelpcenterLink)
      })]
    }), (0, t.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: (0, t.jsx)(l.Button, {
        variant: "primary",
        text: x.intl.string(x.t.i4jeWR),
        onClick: i
      })
    })]
  })
}