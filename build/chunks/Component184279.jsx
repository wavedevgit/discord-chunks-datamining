/** Chunk was on 13873 **/
/** chunk id: 184279, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk534091 = require("./534091.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk727707 = require("./727707.js"),
  Chunk191986 = require("./191986.js");
let f = () => (0, Chunk951288.jsx)("svg", {
  width: "46",
  height: "34",
  viewBox: "0 0 46 34",
  className: Chunk727707.chatBubbleLip,
  xmlns: "http://www.w3.org/2000/svg",
  children: (0, Chunk951288.jsx)("path", {
    d: "M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z"
  })
});

function h(e) {
  var t;
  let {
    channel: n
  } = e, h = null != (t = (0, a.ZP)(n)) ? t : "";
  return (0, r.jsxs)("div", {
    id: (0, s.p)(n.id, n.id),
    className: d.headerContainer,
    children: [(0, r.jsx)("img", {
      src: p,
      className: d.wumpusImage,
      alt: ""
    }), (0, r.jsxs)("div", {
      className: d.chatBubbleContainer,
      children: [(0, r.jsx)(f, {}), (0, r.jsxs)("div", {
        className: d.chatBubble,
        children: [(0, r.jsx)(i.qEK, {
          "aria-label": h,
          size: i.EFr.SIZE_80,
          src: (0, l.x)(n, 80, false)
        }), (0, r.jsxs)(c.Ot, {
          className: d.emptyMessageHeader,
          children: [h, (0, r.jsx)(o.Z, {
            className: d.flowerStar,
            size: 24,
            children: (0, r.jsx)(i.kmB, {
              size: "md",
              color: "currentColor",
              className: d.verified
            })
          })]
        }), (0, r.jsx)(c.jz, {
          children: u.intl.string(u.t.Rzvnig)
        })]
      })]
    })]
  })
}