/** Chunk was on 11324 **/
/** chunk id: 73880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q8: () => o,
  jn: () => c,
  lX: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    value: t,
    placeholder: n,
    onChange: i,
    disabled: a,
    autofocus: o
  } = e;
  return (0, r.jsx)(l.Kx8, {
    maxLength: s.RS,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: i,
    disabled: a,
    autoFocus: o,
    autosize: true,
    showRemainingCharacterCount: !a
  })
}

function c(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(i.CA, {
    title: t.label,
    children: (0, r.jsx)(o, {
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
  return (0, r.jsx)(i.hK, {
    title: t.label,
    children: (0, r.jsx)(o, {
      value: t.response,
      onChange: l,
      autofocus: n,
      placeholder: a.intl.string(a.t["Sqn+Wh"])
    })
  })
}