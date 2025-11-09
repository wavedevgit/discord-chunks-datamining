/** Chunk was on web.js **/
/** chunk id: 890876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk732380 = require("./732380.jsx"),
  Chunk955418 = require("./955418.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk593540 = require("./593540.js");

function l(e) {
  let {
    user: t,
    hideMessageInput: n,
    hideExampleButton: l
  } = e;
  return n ? l ? null : (0, r.jsx)("div", {
    className: s.footer,
    children: (0, r.jsx)(i.O1, {
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