/** Chunk was on web.js **/
/** chunk id: 816529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk930295 = require("./930295.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk772425 = require("./772425.js");
let u = Chunk231338.Vq;

function d(e) {
  let {
    children: t,
    height: n,
    width: l,
    targetElementRef: d,
    isOpen: f,
    onRequestClose: _,
    dialog: p = true
  } = e, h = i.useRef(null);

  function m() {
    let e = (0, r.jsx)("div", {
      ref: h,
      className: c.dropdownContainer,
      style: {
        width: l,
        height: n
      },
      children: (0, r.jsx)("div", {
        className: c.dropdown,
        children: (0, r.jsx)(a.w0Z, {
          className: c.scroller,
          children: t
        })
      })
    });
    return p ? (0, r.jsx)(o.V, {
      children: e
    }) : e
  }
  return (0, r.jsx)(s.H, {
    targetElementRef: d,
    shouldShow: f,
    position: "bottom",
    align: "left",
    autoInvert: true,
    scrollBehavior: "close",
    renderPopout: m,
    onRequestClose: _,
    children: u
  })
}