/** Chunk was on 60667 **/
/** chunk id: 723588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk109878 = require("./109878.js"),
  Chunk595654 = require("./595654.js"),
  Chunk713052 = require("./713052.js");

function _(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-md/bold",
      children: o.intl.string(o.t["KzCF/6"])
    }), (0, r.jsx)(a.hKd, {
      size: 4
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      className: c.yV,
      children: o.intl.string(o.t["3D7qCu"])
    }), (0, r.jsx)(a.hKd, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: l()(d.Qn, c.Nr),
      children: [(0, r.jsx)("img", {
        src: u,
        alt: "",
        className: c.RI
      }), (0, r.jsxs)("div", {
        className: c.FS,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          className: c.wx,
          children: o.intl.string(o.t["KzCF/6"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          className: c.h_,
          children: o.intl.format(o.t["m+pcOO"], {
            numSubscriptions: n
          })
        })]
      }), (0, r.jsx)(s.$nd, {
        size: "sm",
        variant: "overlay-primary",
        text: o.intl.string(o.t["3a8Xxj"]),
        onClick: t
      })]
    })]
  })
}