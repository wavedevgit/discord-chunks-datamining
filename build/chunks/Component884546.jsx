/** Chunk was on 5606 **/
/** chunk id: 884546, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk38824 = require("./38824.js");

function c(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Heading, {
      variant: "text-md/medium",
      className: o.Vf,
      children: t
    }), n]
  })
}

function d(e) {
  let {
    children: t,
    className: n,
    layoutClassName: i,
    profilePreview: s,
    profilePreviewTitle: d,
    nameplatePreview: u
  } = e;
  return (0, r.jsx)("div", {
    className: l()(o.UA, n),
    children: (0, r.jsxs)("div", {
      className: l()(o.yt, i),
      children: [(0, r.jsx)("div", {
        className: o.Fp,
        children: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c, {
            title: null != d ? d : a.intl.string(a.t.Zb06yP),
            children: s
          }), null != u ? (0, r.jsx)(c, {
            title: a.intl.string(a.t["7KRt6R"]),
            children: u
          }) : null]
        })
      }), (0, r.jsx)("div", {
        className: o.oB,
        children: t
      })]
    })
  })
}