/** Chunk was on 17869 **/
/** chunk id: 552227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk270920 = require("./270920.js");
let s = e => {
  let {
    guild: t,
    onClose: s
  } = e;
  return (0, l.jsxs)("div", {
    className: a.kL,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: a.Sl,
      src: n(960416)
    }), (0, l.jsxs)("div", {
      className: a.Qs,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: i.intl.format(i.t.THgVCC, {
          guild: t.name
        })
      }), (0, l.jsx)(r.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: i.intl.string(i.t["1yq3nO"])
      }), (0, l.jsx)("div", {
        className: a.UD,
        children: (0, l.jsx)(r.Button, {
          variant: "primary",
          text: i.intl.string(i.t.hLw0wc),
          onClick: s
        })
      })]
    })]
  })
}