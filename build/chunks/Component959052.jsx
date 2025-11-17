/** Chunk was on web.js **/
/** chunk id: 959052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jy: () => d,
  OJ: () => f,
  eJ: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk761388 = require("./761388.js");
let d = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(s.Heading, {
      variant: "heading-sm/medium",
      color: "header-primary",
      className: u.noticeText,
      children: t
    })
  },
  f = e => {
    let {
      text: t,
      onClick: n
    } = e;
    return (0, r.jsx)(o.zxk, {
      onClick: n,
      text: t,
      size: "sm",
      icon: s.SrA,
      variant: "secondary"
    })
  };

function _(e) {
  let {
    className: t,
    ref: n,
    children: i,
    onClick: o
  } = e;
  return (0, r.jsx)(s.f6W, {
    theme: l.BR.DARKER,
    children: e => (0, r.jsxs)("div", {
      ref: n,
      className: a()(u.notice, e, t),
      children: [(0, r.jsx)("div", {
        className: u.noticeContent,
        children: i
      }), (0, r.jsx)(s.P3F, {
        focusProps: {
          offset: 6
        },
        className: u.closeButton,
        onClick: o,
        "aria-label": c.intl.string(c.t.WAI6xu),
        children: (0, r.jsx)(s.Dio, {
          size: "sm"
        })
      })]
    })
  })
}