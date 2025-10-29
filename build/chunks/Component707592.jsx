/** Chunk was on 98206 **/
/** chunk id: 707592, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Gi: () => l,
  YJ: () => s,
  zY: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    value: n,
    placeholder: t,
    onChange: a,
    disabled: c,
    autofocus: l
  } = e;
  return (0, r.jsx)(i.oil, {
    maxLength: o.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: a,
    disabled: c,
    autoFocus: l
  })
}

function s(e) {
  let {
    formField: n
  } = e;
  return (0, r.jsx)(a.CA, {
    title: n.label,
    children: (0, r.jsx)(i.Kx8, {
      value: n.response,
      disabled: true
    })
  })
}

function u(e) {
  let {
    formField: n,
    autofocus: t,
    onChange: i
  } = e;
  return (0, r.jsx)(a.hK, {
    title: n.label,
    children: (0, r.jsx)(l, {
      onChange: i,
      value: n.response,
      autofocus: t,
      placeholder: c.intl.string(c.t["Sqn+Wh"])
    })
  })
}