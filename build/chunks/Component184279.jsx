/** Chunk was on web.js **/
/** chunk id: 184279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk534091 = require("./534091.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk253622 = require("./253622.js"),
  Chunk191986 = require("./191986.js");
let _ = () => (0, Chunk255367.jsx)("svg", {
  width: "46",
  height: "34",
  viewBox: "0 0 46 34",
  className: Chunk253622.chatBubbleLip,
  xmlns: "http://www.w3.org/2000/svg",
  children: (0, Chunk255367.jsx)("path", {
    d: "M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z"
  })
});

function p(e) {
  var t;
  let {
    channel: n
  } = e, p = null != (t = (0, a.ZP)(n)) ? t : "";
  return (0, r.jsxs)("div", {
    id: (0, l.p)(n.id, n.id),
    className: d.headerContainer,
    children: [(0, r.jsx)("img", {
      src: f,
      className: d.wumpusImage,
      alt: ""
    }), (0, r.jsxs)("div", {
      className: d.chatBubbleContainer,
      children: [(0, r.jsx)(_, {}), (0, r.jsxs)("div", {
        className: d.chatBubble,
        children: [(0, r.jsx)(i.qEK, {
          "aria-label": p,
          size: i.EFr.SIZE_80,
          src: (0, o.x)(n, 80, false)
        }), (0, r.jsxs)(c.Ot, {
          className: d.emptyMessageHeader,
          children: [p, (0, r.jsx)(s.Z, {
            className: d.flowerStar,
            size: 24,
            children: (0, r.jsx)(i.kmB, {
              size: "md",
              color: "currentColor",
              className: d.verified
            })
          })]
        }), (0, r.jsx)(c.jz, {
          children: u.intl.string(u.t.Rzvnio)
        })]
      })]
    })]
  })
}