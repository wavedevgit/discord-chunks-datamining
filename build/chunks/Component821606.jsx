/** Chunk was on 2435 **/
/** chunk id: 821606, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk988158 = require("./988158.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk251997 = require("./251997.js");

function d(t) {
  let {
    url: a,
    onClose: d,
    transitionState: u
  } = t, x = (0, r.Dt)(), {
    protocol: h,
    hostname: m,
    theRestOfTheUrl: b
  } = (0, s.h)(a);
  return (0, n.jsxs)(l.Y0X, {
    transitionState: u,
    "aria-labelledby": x,
    parentComponent: "BlockedDomainModal",
    children: [(0, n.jsx)("img", {
      className: c.art,
      src: e(902623),
      alt: ""
    }), (0, n.jsx)(l.hzk, {
      children: (0, n.jsxs)(i.Z, {
        direction: i.Z.Direction.VERTICAL,
        justify: i.Z.Justify.CENTER,
        children: [(0, n.jsx)(l.X6q, {
          id: x,
          variant: "heading-lg/semibold",
          className: c.title,
          children: o.intl.string(o.t["2B3wj4"])
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          className: c.body,
          children: o.intl.format(o.t.jnHyYW, {})
        }), (0, n.jsxs)(l.Ttm, {
          className: c.linkCalloutContainer,
          children: [(0, n.jsxs)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: [h, "//"]
          }), (0, n.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/semibold",
            color: "text-default",
            children: m
          }), (0, n.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: b
          })]
        })]
      })
    }), (0, n.jsx)(l.mzw, {
      children: (0, n.jsx)(l.zxk, {
        variant: "primary",
        text: o.intl.string(o.t["/g10LC"]),
        type: "button",
        onClick: d
      })
    })]
  })
}