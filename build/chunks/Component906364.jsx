/** Chunk was on web.js **/
/** chunk id: 906364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx");
let s = 40;

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

  function _(e) {
    l(e === d ? true : e)
  }
  return (0, r.jsx)(a.Z, {
    title: t,
    errors: n,
    disabled: f,
    children: (0, r.jsx)(i.oil, {
      placeholder: null != u ? u : o.intl.string(o.t.NPEUUu),
      maxLength: s,
      value: null != c ? c : d,
      onChange: _,
      disabled: f
    })
  })
}