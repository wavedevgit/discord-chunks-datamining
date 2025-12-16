/** Chunk was on web.js **/
/** chunk id: 890876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk475413 = require("./475413.jsx"),
  Chunk955418 = require("./955418.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk155493 = require("./155493.js");

function l(e) {
  let {
    user: t,
    hideMessageInput: n,
    hideExampleButton: l
  } = e;
  return n ? l ? null : (0, r.jsx)("div", {
    className: s.footer,
    children: (0, r.jsx)(i.i6, {
      variant: "primary",
      text: o.intl.string(o.t.hZkfwY),
      onClick: () => {},
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: s.footer,
    inert: true,
    children: (0, r.jsx)(a.Z, {
      user: t
    })
  })
}