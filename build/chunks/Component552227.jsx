/** Chunk was on 17534 **/
/** chunk id: 552227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk270920 = require("./270920.js");
let a = e => {
  let {
    guild: t,
    onClose: a
  } = e;
  return (0, r.jsxs)("div", {
    className: s.kL,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: s.Sl,
      src: n(960416)
    }), (0, r.jsxs)("div", {
      className: s.Qs,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: i.intl.format(i.t.THgVCC, {
          guild: t.name
        })
      }), (0, r.jsx)(l.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: i.intl.string(i.t["1yq3nO"])
      }), (0, r.jsx)("div", {
        className: s.UD,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          text: i.intl.string(i.t.hLw0wc),
          onClick: a
        })
      })]
    })]
  })
}