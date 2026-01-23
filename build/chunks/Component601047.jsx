/** Chunk was on 35894 **/
/** chunk id: 601047, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P1: () => c,
  PC: () => s,
  zD: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk31457 = require("./31457.jsx"),
  Chunk260197 = require("./260197.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    value: t,
    placeholder: n,
    onChange: i,
    disabled: a,
    autofocus: s
  } = e;
  return (0, r.jsx)(l.fs1, {
    maxLength: o.nQ,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: i,
    disabled: a,
    autoFocus: s,
    autosize: true,
    showRemainingCharacterCount: !a
  })
}

function c(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(i._H, {
    title: t.label,
    children: (0, r.jsx)(s, {
      value: t.response,
      disabled: true
    })
  })
}

function u(e) {
  let {
    formField: t,
    autofocus: n,
    onChange: l
  } = e;
  return (0, r.jsx)(i.cS, {
    title: t.label,
    children: (0, r.jsx)(s, {
      value: t.response,
      onChange: l,
      autofocus: n,
      placeholder: a.intl.string(a.t["Sqn+Wh"])
    })
  })
}