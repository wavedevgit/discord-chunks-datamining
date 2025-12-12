/** Chunk was on web.js **/
/** chunk id: 890876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk732380 = require("./732380.jsx"),
  Chunk955418 = require("./955418.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116649 = require("./116649.js");

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
      text: a.intl.string(a.t.hZkfwY),
      onClick: () => {},
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: s.footer,
    inert: true,
    children: (0, r.jsx)(o.Z, {
      user: t
    })
  })
}