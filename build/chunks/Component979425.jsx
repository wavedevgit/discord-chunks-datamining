/** Chunk was on 24255 **/
/** chunk id: 979425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");

function c(e) {
  let {
    stream: t,
    isSmall: n,
    selected: l,
    isSelfStream: c
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Z, {
      className: i()(s.absoluteFill, s.streamPreviewOpacity),
      stream: t,
      noText: true
    }), !l && (0, r.jsxs)("div", {
      className: i()(s.content, s.streamUnavailable, {
        [s.small]: n
      }),
      children: [(0, r.jsx)(a.Text, {
        className: s.streamUnavailableText,
        color: "always-white",
        variant: n ? "text-sm/semibold" : "text-md/semibold",
        children: c ? u.intl.string(u.t.UeEwj4) : u.intl.string(u.t["1i3tSU"])
      }), (0, r.jsx)(a.DY3, {
        text: c ? u.intl.string(u.t["ro/HNz"]) : u.intl.string(u.t.UPf6ZG),
        className: s.darkCircle,
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(a.o8v, {
            size: "md",
            color: "currentColor",
            className: s.stopStreamIcon,
            colorClass: s.stopStreamForeground
          })
        })
      })]
    })]
  })
}