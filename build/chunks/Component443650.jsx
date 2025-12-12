/** Chunk was on 88806 **/
/** chunk id: 443650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk809086 = require("./809086.jsx"),
  Chunk312886 = require("./312886.js");

function a(e) {
  let {
    className: t,
    onClose: n
  } = e;
  return (0, r.jsx)(l.P3F, {
    className: c()(u.closeButtonContainer, t),
    onClick: n,
    children: (0, r.jsx)(l.Dio, {
      size: "xs",
      color: "currentColor",
      className: u.closeButtonIcon
    })
  })
}

function s(e) {
  let {
    guildProductListing: t,
    onClose: n,
    className: o
  } = e;
  return (0, r.jsxs)(l.xBx, {
    className: c()(u.header, o),
    separator: false,
    "data-migration-pending": true,
    children: [(0, r.jsx)(i.Z, {
      className: u.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, r.jsx)(a, {
      className: u.closeButton,
      onClose: n
    })]
  })
}