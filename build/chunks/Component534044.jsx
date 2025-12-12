/** Chunk was on 65652 **/
/** chunk id: 534044, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk548647 = require("./548647.js"),
  Chunk696375 = require("./696375.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk691196 = require("./691196.js"),
  Chunk186425 = require("./186425.js"),
  Chunk160557 = require("./160557.js");

function p(n) {
  let {
    className: t,
    onNext: e,
    onClose: a
  } = n, p = (0, o.n)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: r.Z.Direction.VERTICAL,
      className: g.header,
      separator: false,
      children: [(0, i.jsx)("div", {
        className: m.iconContainer,
        children: (0, i.jsx)("img", {
          src: u,
          alt: "",
          className: m.icon
        })
      }), (0, i.jsx)(l.Heading, {
        className: g.title,
        variant: "heading-xl/semibold",
        children: x.intl.string(x.t.QMbTSu)
      }), (0, i.jsx)(l.Heading, {
        className: g.subtitle,
        color: "text-default",
        variant: "text-md/normal",
        children: x.intl.string(x.t.Qdx8AP)
      }), null != a && (0, i.jsx)(l.olH, {
        "data-migration-pending": true,
        className: g.closeButton,
        onClick: a
      })]
    }), (0, i.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: s()(m.modalContent, t),
      paddingFix: false,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-md/bold",
        color: "text-strong",
        className: m.actionsHeader,
        children: x.intl.string(x.t["9BRc1N"])
      }), (0, i.jsx)(c.Z, {
        text: x.intl.string(x.t.PxL38B),
        url: d.sQ.COMMUNITY_GUIDELINES,
        onClick: () => p(d.n0.ClickCommunityGuidelinesLink)
      }), (0, i.jsx)(c.Z, {
        text: x.intl.string(x.t.qC3XKa),
        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
        onClick: () => p(d.n0.ClickWarningSystemHelpcenterLink)
      })]
    }), (0, i.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsx)(l.Button, {
        variant: "primary",
        text: x.intl.string(x.t.i4jeWR),
        onClick: e
      })
    })]
  })
}