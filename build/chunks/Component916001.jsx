/** Chunk was on 66866 **/
/** chunk id: 916001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk229928 = require("./229928.js");

function s(e) {
  let {
    locked: t,
    role: n,
    textVariant: s = "text-xs/medium"
  } = e, c = (0, l.dQu)(l.TVs.colors.INTERACTIVE_NORMAL).hex();
  return (0, r.jsx)("div", {
    className: o.roleTagContainer,
    children: (0, r.jsxs)("div", {
      className: o.roleTag,
      children: [(0, r.jsx)("div", {
        className: o.roleColor,
        style: {
          backgroundColor: (0, i.Rf)(n.color)
        }
      }), (0, r.jsx)(l.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsxs)(l.Text, {
        variant: s,
        color: "text-default",
        children: [(0, r.jsx)(l.nn4, {
          children: a.intl.string(a.t.RnyseH)
        }), n.name]
      }), true === t && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.LZC, {
          size: 8,
          horizontal: true
        }), (0, r.jsx)(l.mBM, {
          size: "md",
          color: c
        })]
      })]
    })
  })
}