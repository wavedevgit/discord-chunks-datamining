/** Chunk was on 17869 **/
/** chunk id: 914662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk135716 = require("./135716.js");

function s(e) {
  let {
    onClose: t,
    guildName: n
  } = e;
  return (0, l.jsxs)("div", {
    className: a.kL,
    children: [(0, l.jsx)("div", {
      className: a.zc,
      children: (0, l.jsx)(r.gQi, {
        size: "custom",
        color: "currentColor",
        className: a.Kk,
        width: 20,
        height: 20
      })
    }), (0, l.jsxs)("div", {
      className: a.wx,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        className: a.TK,
        children: i.intl.string(i.t.LIIyeE)
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: i.intl.format(i.t["4/6vQh"], {
          guildName: n
        })
      }), (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: a.x6,
        children: (0, l.jsx)(r.Button, {
          variant: "primary",
          text: i.intl.string(i.t.BddRzS),
          onClick: t
        })
      })]
    })]
  })
}