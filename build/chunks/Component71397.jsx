/** Chunk was on 78888 **/
/** chunk id: 71397, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk268761 = require("./268761.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk338497 = require("./338497.js");
let o = e => {
  let {
    autoArchiveDuration: t,
    onChange: n,
    isDisabled: o,
    helperText: c
  } = e, u = (0, r.Gk)();
  return (0, l.jsx)("div", {
    className: a.gy,
    children: (0, l.jsx)(i.ZiE, {
      selectionMode: "single",
      label: s.intl.string(s.t.FGjMZS),
      helperText: c,
      disabled: o,
      options: u,
      value: t,
      onSelectionChange: n
    })
  })
}