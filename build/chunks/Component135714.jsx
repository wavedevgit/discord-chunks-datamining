/** Chunk was on web.js **/
/** chunk id: 135714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk35368 = require("./35368.js");
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
    return (0, r.jsx)(o.vN3, {
      children: (0, r.jsx)("button", {
        type: "button",
        className: a()(s.A, l),
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
      className: a()(s.O, i),
      children: t.map((e, t) => (0, r.jsx)(l, {
        data: e,
        disabled: n
      }, t))
    })
  }