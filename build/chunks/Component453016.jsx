/** Chunk was on 99583 **/
/** chunk id: 453016, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  _V: () => c,
  aS: () => d,
  y4: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk31457 = require("./31457.jsx"),
  Chunk260197 = require("./260197.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    value: t,
    placeholder: l,
    onChange: i,
    disabled: a,
    autofocus: c
  } = e;
  return (0, n.jsx)(r.ksK, {
    maxLength: s.cs,
    value: null != t ? t : "",
    placeholder: l,
    onChange: i,
    disabled: a,
    autoFocus: c
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(i._H, {
    title: t.label,
    children: (0, n.jsx)(r.fs1, {
      value: t.response,
      disabled: true
    })
  })
}

function o(e) {
  let {
    formField: t,
    autofocus: l,
    onChange: r
  } = e;
  return (0, n.jsx)(i.cS, {
    title: t.label,
    children: (0, n.jsx)(c, {
      onChange: r,
      value: t.response,
      autofocus: l,
      placeholder: a.intl.string(a.t["Sqn+Wh"])
    })
  })
}