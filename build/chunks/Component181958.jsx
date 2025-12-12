/** Chunk was on web.js **/
/** chunk id: 181958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk23372 = require("./23372.js");
let l = e => {
    let {
      data: t,
      disabled: n
    } = e, {
      content: i,
      className: l,
      onClick: c,
      disabled: u
    } = t;
    return (0, r.jsx)(o.tEY, {
      children: (0, r.jsx)("button", {
        type: "button",
        className: a()(s.item, l),
        onClick: c,
        disabled: n || u,
        children: i
      })
    })
  },
  c = e => {
    let {
      buttons: t,
      disabled: n,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      role: "group",
      className: a()(s.group, i),
      children: t.map((e, t) => (0, r.jsx)(l, {
        data: e,
        disabled: n
      }, t))
    })
  }