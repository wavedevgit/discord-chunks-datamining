/** Chunk was on web.js **/
/** chunk id: 657048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk915534 = require("./915534.js");
let d = Chunk64700.forwardRef(function(e, t) {
  let {
    className: n,
    src: i,
    unicodeEmoji: a,
    name: d,
    size: f = 20,
    enableTooltip: p = true,
    enableHeight: _ = true,
    onClick: h
  } = e;
  if (null == i && null == a) return null;
  let m = () => {
    let e = (0, r.jsx)("img", {
      ref: t,
      alt: c.intl.formatToPlainString(c.t["9+YWrE"], {
        name: d
      }),
      className: o()(u.U, n, {
        [u.v]: null != h
      }),
      height: _ ? f : true,
      src: i,
      width: f
    });
    return (null != a && (e = (0, r.jsx)("img", {
      ref: t,
      alt: a.allNamesString,
      className: o()(u.U, n, {
        [u.v]: null != h
      }),
      height: _ ? f : true,
      src: a.url,
      width: f
    })), null == h) ? (0, r.jsx)(l.vN3, {
      offset: {
        left: 5
      },
      children: e
    }) : (0, r.jsx)(l.DUT, {
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
  return (0, r.jsx)(s.m_, {
    asContainer: true,
    text: d,
    "aria-label": false,
    shouldShow: p,
    tag: "span",
    children: m()
  })
})