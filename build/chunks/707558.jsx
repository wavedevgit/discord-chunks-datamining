/** Chunk was on 75708 **/
/** chunk id: 707558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk841111 = require("./841111.js"),
  Chunk20493 = require("./20493.js");

function c(e) {
  let {
    features: t
  } = e;
  return <i.Fragment>{t.map((e, t) => (0, i.jsxs)(a.Z, {
      align: a.Z.Align.CENTER,
      className: s()(o.marginTop20, l.feature, {
        [l.featureBorder]: 0 !== t
      }),
      children: [null != e.icon ? (0, i.jsx)("div", {
        className: s()(l.icon, e.icon)
      }) : null, (0, i.jsxs)("div", {
        children: [null != e.title ? (0, i.jsx)("div", {
          className: s()(o.marginBottom8, l.title),
          children: e.title
        }) : null, (0, i.jsx)("div", {
          className: l.description,
          children: e.description
        })]
      })]
    }, t))}</i.Fragment>
}