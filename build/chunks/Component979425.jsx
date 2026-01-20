/** Chunk was on 11010 **/
/** chunk id: 979425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858329 = require("./858329.js");

function d(e) {
  let {
    stream: t,
    isSmall: n,
    selected: i,
    isSelfStream: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      className: l()(u.absoluteFill, u.streamPreviewOpacity),
      stream: t,
      noText: true
    }), !i && (0, r.jsxs)("div", {
      className: l()(u.content, u.streamUnavailable, {
        [u.small]: n
      }),
      children: [(0, r.jsx)(o.Text, {
        className: u.streamUnavailableText,
        color: "always-white",
        variant: n ? "text-sm/semibold" : "text-md/semibold",
        children: d ? s.intl.string(s.t.UeEwjy) : s.intl.string(s.t["1i3tSY"])
      }), (0, r.jsx)(a.u, {
        asContainer: true,
        text: d ? s.intl.string(s.t["ro/HN8"]) : s.intl.string(s.t.UPf6ZM),
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(o.o8v, {
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