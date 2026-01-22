/** Chunk was on web.js **/
/** chunk id: 546849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk985018 = require("./985018.jsx");
let o = 40;

function l(e) {
  let {
    sectionTitle: t,
    errors: n,
    onPronounsChange: l,
    pendingPronouns: c,
    placeholder: u,
    currentPronouns: d,
    disabled: f = false
  } = e;

  function p(e) {
    l(e === d ? true : e)
  }
  return (0, r.jsx)(a.A, {
    title: t,
    errors: n,
    disabled: f,
    children: (0, r.jsx)(i.ksK, {
      placeholder: null != u ? u : s.intl.string(s.t.NPEUUu),
      maxLength: o,
      value: null != c ? c : d,
      onChange: p,
      disabled: f
    })
  })
}