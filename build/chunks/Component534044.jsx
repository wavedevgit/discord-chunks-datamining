/** Chunk was on 65652 **/
/** chunk id: 534044, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    className: n,
    onNext: t,
    onClose: a
  } = e, g = (0, o.n)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: r.Z.Direction.VERTICAL,
      className: p.header,
      separator: false,
      children: [(0, i.jsx)("div", {
        className: m.iconContainer,
        children: (0, i.jsx)("img", {
          src: u,
          alt: "",
          className: m.icon
        })
      }), (0, i.jsx)(l.X6q, {
        className: p.title,
        variant: "heading-xl/semibold",
        children: x.intl.string(x.t.QMbTSk)
      }), (0, i.jsx)(l.X6q, {
        className: p.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: x.intl.string(x.t.Qdx8AA)
      }), null != a && (0, i.jsx)(l.olH, {
        "data-migration-pending": true,
        className: p.closeButton,
        onClick: a
      })]
    }), (0, i.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: s()(m.modalContent, n),
      paddingFix: false,
      children: [(0, i.jsx)(l.X6q, {
        variant: "heading-md/bold",
        color: "header-primary",
        className: m.actionsHeader,
        children: x.intl.string(x.t["9BRc1N"])
      }), (0, i.jsx)(d.Z, {
        text: x.intl.string(x.t.PxL38P),
        url: c.sQ.COMMUNITY_GUIDELINES,
        onClick: () => g(c.n0.ClickCommunityGuidelinesLink)
      }), (0, i.jsx)(d.Z, {
        text: x.intl.string(x.t.qC3XKS),
        url: c.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
        onClick: () => g(c.n0.ClickWarningSystemHelpcenterLink)
      })]
    }), (0, i.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsx)(l.zxk, {
        variant: "primary",
        text: x.intl.string(x.t.i4jeWV),
        onClick: t
      })
    })]
  })
}