/** Chunk was on web.js **/
/** chunk id: 418555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk993401 = require("./993401.jsx"),
  Chunk784886 = require("./784886.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183959 = require("./183959.js");

function l(e) {
  let {
    user: t,
    hideMessageInput: n,
    hideExampleButton: l
  } = e;
  return n ? l ? null : (0, r.jsx)("div", {
    className: o.qr,
    children: (0, r.jsx)(i.FD, {
      variant: "primary",
      text: s.intl.string(s.t.hZkfwY),
      onClick: () => {},
      fullWidth: true
    })
  }) : (0, r.jsx)("div", {
    className: o.qr,
    inert: true,
    children: (0, r.jsx)(a.A, {
      user: t
    })
  })
}