/** Chunk was on web.js **/
/** chunk id: 723588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk109878 = require("./109878.js"),
  Chunk595654 = require("./595654.js"),
  Chunk713052 = require("./713052.js");

function f(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-md/bold",
      children: l.intl.string(l.t["KzCF/6"])
    }), (0, r.jsx)(o.hKd, {
      size: 4
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      className: c.yV,
      children: l.intl.string(l.t["3D7qCu"])
    }), (0, r.jsx)(o.hKd, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: a()(u.Qn, c.Nr),
      children: [(0, r.jsx)("img", {
        src: d,
        alt: "",
        className: c.RI
      }), (0, r.jsxs)("div", {
        className: c.FS,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: c.wx,
          children: l.intl.string(l.t["KzCF/6"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          className: c.h_,
          children: l.intl.format(l.t["m+pcOO"], {
            numSubscriptions: n
          })
        })]
      }), (0, r.jsx)(s.$nd, {
        size: "sm",
        variant: "overlay-primary",
        text: l.intl.string(l.t["3a8Xxj"]),
        onClick: t
      })]
    })]
  })
}