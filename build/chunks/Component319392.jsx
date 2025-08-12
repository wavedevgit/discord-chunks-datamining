/** Chunk was on 61366 **/
/** chunk id: 319392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk376340 = require("./376340.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452800 = require("./452800.js"),
  Chunk629582 = require("./629582.js");

function b() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk452800.getXboxApp,
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk452800.getXboxAppBody,
      children: [(0, Chunk255367.jsxs)(Chunk481060.X6q, {
        className: Chunk452800.getXboxAppHeading,
        variant: "text-lg/semibold",
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk452800.xboxLogoBox,
          children: (0, Chunk255367.jsx)("img", {
            src: Chunk726542.Z.get(Chunk981631.ABu.XBOX).icon.whiteSVG,
            alt: ""
          })
        }), Chunk388032.intl.string(Chunk388032.t["12Kx2t"])]
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.M5yEcX)
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: (0, Chunk255367.jsx)(Chunk481060.eee, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.XBOX_CONNECTION),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAQ)
        })
      })]
    }), (0, Chunk255367.jsx)(Chunk198993.ZP, {
      className: Chunk452800.getXboxAppQR,
      text: Chunk927923.X3,
      size: 90
    })]
  })
}

function x(e) {
  let {
    onClose: t
  } = e;
  return (0, o.jsx)(l.L, {
    img: (0, o.jsx)("img", {
      src: f.Z,
      width: "124",
      height: "160",
      alt: ""
    }),
    title: u.intl.string(u.t["7QsHmp"]),
    body: u.intl.string(u.t.byYNPT),
    content: (0, o.jsx)(b, {}),
    onClose: t
  })
}