/** Chunk was on web.js **/
/** chunk id: 48950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk689730 = require("./689730.js");
let d = Chunk473749.forwardRef(function(e, t) {
  let {
    className: n,
    src: i,
    unicodeEmoji: o,
    name: d,
    size: f = 20,
    enableTooltip: p = true,
    enableHeight: _ = true,
    onClick: m
  } = e;
  if (null == i && null == o) return null;
  let h = () => {
    let e = (0, r.jsx)("img", {
      ref: t,
      alt: "",
      "aria-label": c.intl.formatToPlainString(c.t["9+YWrE"], {
        name: d
      }),
      className: a()(u.roleIcon, n, {
        [u.clickable]: null != m
      }),
      height: _ ? f : true,
      src: i,
      width: f
    });
    return (null != o && (e = (0, r.jsx)("img", {
      ref: t,
      alt: "",
      "aria-label": o.allNamesString,
      className: a()(u.roleIcon, n, {
        [u.clickable]: null != m
      }),
      height: _ ? f : true,
      src: o.url,
      width: f
    })), null == m) ? (0, r.jsx)(l.tEY, {
      offset: {
        left: 5
      },
      children: e
    }) : (0, r.jsx)(l.P3F, {
      onClick: m,
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
    shouldShow: p,
    tag: "span",
    children: h()
  })
})