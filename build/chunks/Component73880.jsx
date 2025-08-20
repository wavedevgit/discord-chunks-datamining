/** Chunk was on 36605 **/
/** chunk id: 73880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q8: () => u,
  jn: () => m,
  lX: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624463 = require("./624463.js");

function u(e) {
  let {
    value: t,
    placeholder: n,
    onChange: l,
    disabled: a,
    className: c,
    autofocus: u
  } = e;
  return (0, r.jsx)(s.iS, {
    className: i()(d.paragraphFieldBody, c),
    maxLength: o.RS,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: l,
    disabled: a,
    autoFocus: u,
    autosize: true,
    showRemainingCharacterCount: !a
  })
}

function m(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(a.CA, {
    title: t.label,
    children: (0, r.jsx)(u, {
      className: d.disabledFieldBackground,
      value: t.response,
      disabled: true
    })
  })
}

function f(e) {
  let {
    formField: t,
    autofocus: n,
    onChange: l
  } = e;
  return (0, r.jsx)(a.hK, {
    title: t.label,
    children: (0, r.jsx)(u, {
      value: t.response,
      onChange: l,
      autofocus: n,
      placeholder: c.intl.string(c.t["Sqn+Wl"])
    })
  })
}