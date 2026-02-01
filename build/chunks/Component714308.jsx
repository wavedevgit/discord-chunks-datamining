/** Chunk was on 9207 **/
/** chunk id: 714308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk327479 = require("./327479.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk869678 = require("./869678.js"),
  Chunk595654 = require("./595654.js"),
  Chunk193921 = require("./193921.js");

function _(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-md/bold",
      children: o.intl.string(o.t["48ywCu"])
    }), (0, r.jsx)(s.hKd, {
      size: 4
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      className: c.yV,
      children: o.intl.string(o.t.VWxmSo)
    }), (0, r.jsx)(s.hKd, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: l()(d.Qn, c.Nr),
      children: [(0, r.jsx)("img", {
        src: u,
        alt: "",
        className: c._e
      }), (0, r.jsxs)("div", {
        className: c.FS,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          className: c.wx,
          children: o.intl.string(o.t["48ywCu"])
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          className: c.h_,
          children: o.intl.format(o.t["/esXLj"], {
            numSubscriptions: n
          })
        })]
      }), (0, r.jsx)(a.A, {
        onClick: t,
        text: o.intl.string(o.t["z5YcJ+"])
      })]
    })]
  })
}