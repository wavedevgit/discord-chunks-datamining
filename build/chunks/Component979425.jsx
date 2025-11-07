/** Chunk was on 86642 **/
/** chunk id: 979425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");

function d(e) {
  let {
    stream: t,
    isSmall: n,
    selected: r,
    isSelfStream: d
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.Z, {
      className: l()(u.absoluteFill, u.streamPreviewOpacity),
      stream: t,
      noText: true
    }), !r && (0, i.jsxs)("div", {
      className: l()(u.content, u.streamUnavailable, {
        [u.small]: n
      }),
      children: [(0, i.jsx)(o.Text, {
        className: u.streamUnavailableText,
        color: "always-white",
        variant: n ? "text-sm/semibold" : "text-md/semibold",
        children: d ? c.intl.string(c.t.UeEwjy) : c.intl.string(c.t["1i3tSY"])
      }), (0, i.jsx)(a.u, {
        asContainer: true,
        text: d ? c.intl.string(c.t["ro/HN8"]) : c.intl.string(c.t.UPf6ZM),
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(o.o8v, {
            size: "md",
            color: "currentColor",
            className: u.stopStreamIcon,
            colorClass: u.stopStreamForeground
          })
        })
      })]
    })]
  })
}