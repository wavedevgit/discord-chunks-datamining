/** Chunk was on 69634 **/
/** chunk id: 979425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk400872 = require("./400872.js");

function d(e) {
  let {
    stream: t,
    isSmall: n,
    selected: l,
    isSelfStream: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      className: i()(c.absoluteFill, c.streamPreviewOpacity),
      stream: t,
      noText: true
    }), !l && (0, r.jsxs)("div", {
      className: i()(c.content, c.streamUnavailable, {
        [c.small]: n
      }),
      children: [(0, r.jsx)(o.Text, {
        className: c.streamUnavailableText,
        color: "always-white",
        variant: n ? "text-sm/semibold" : "text-md/semibold",
        children: d ? s.intl.string(s.t.UeEwj4) : s.intl.string(s.t["1i3tSU"])
      }), (0, r.jsx)(a.u, {
        asContainer: true,
        text: d ? s.intl.string(s.t["ro/HNz"]) : s.intl.string(s.t.UPf6ZG),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(o.o8v, {
            size: "md",
            color: "currentColor",
            className: c.stopStreamIcon,
            colorClass: c.stopStreamForeground
          })
        })
      })]
    })]
  })
}