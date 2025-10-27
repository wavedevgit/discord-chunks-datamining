/** Chunk was on web.js **/
/** chunk id: 48950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk689730 = require("./689730.js");
let d = Chunk647438.forwardRef(function(e, t) {
  let {
    className: n,
    src: i,
    unicodeEmoji: a,
    name: d,
    size: f = 20,
    enableTooltip: _ = true,
    enableHeight: p = true,
    onClick: h
  } = e;
  if (null == i && null == a) return null;
  let m = () => {
    let e = (0, r.jsx)("img", {
      ref: t,
      alt: "",
      "aria-label": c.intl.formatToPlainString(c.t["9+YWrE"], {
        name: d
      }),
      className: o()(u.roleIcon, n, {
        [u.clickable]: null != h
      }),
      height: p ? f : true,
      src: i,
      width: f
    });
    return (null != a && (e = (0, r.jsx)("img", {
      ref: t,
      alt: "",
      "aria-label": a.allNamesString,
      className: o()(u.roleIcon, n, {
        [u.clickable]: null != h
      }),
      height: p ? f : true,
      src: a.url,
      width: f
    })), null == h) ? (0, r.jsx)(l.tEY, {
      offset: {
        left: 5
      },
      children: e
    }) : (0, r.jsx)(l.P3F, {
      onClick: h,
      tag: "span",
      focusProps: {
        offset: {
          left: 5
        }
      },
      children: e
    })
  };
  return (0, r.jsx)(s.u, {
    asContainer: true,
    text: d,
    "aria-label": false,
    shouldShow: _,
    tag: "span",
    children: m()
  })
})