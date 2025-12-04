/** Chunk was on 86915 **/
/** chunk id: 747212, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk668339 = require("./668339.jsx"),
  Chunk968437 = require("./968437.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk294861 = require("./294861.js");
let o = e => {
  let {
    autoArchiveDuration: t,
    onChange: n,
    isDisabled: o,
    helperText: c
  } = e, d = (0, r.nt)();
  return (0, i.jsx)("div", {
    className: s.formSection,
    children: (0, i.jsx)(l.d, {
      label: a.intl.string(a.t.FGjMZS),
      helperText: c,
      isDisabled: o,
      options: d,
      value: t,
      onChange: n,
      optionClassName: s.dropdownOption
    })
  })
}