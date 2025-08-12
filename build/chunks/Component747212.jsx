/** Chunk was on 86915 **/
/** chunk id: 747212, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk968437 = require("./968437.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk326790 = require("./326790.js");
let o = e => {
  let {
    autoArchiveDuration: t,
    onChange: n,
    isDisabled: o
  } = e, c = (0, r.nt)();
  return (0, i.jsx)(l.hjN, {
    title: s.intl.string(s.t.FGjMZW),
    className: a.formSection,
    children: (0, i.jsx)(l.VcW, {
      isDisabled: o,
      options: c,
      value: t,
      onChange: n,
      optionClassName: a.dropdownOption
    })
  })
}