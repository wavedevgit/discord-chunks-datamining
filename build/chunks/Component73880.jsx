/** Chunk was on 36605 **/
/** chunk id: 73880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q8: () => d,
  jn: () => m,
  lX: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624463 = require("./624463.js");

function d(e) {
  let {
    value: t,
    placeholder: n,
    onChange: i,
    disabled: o,
    className: c,
    autofocus: d
  } = e;
  return (0, r.jsx)(s.iS, {
    className: l()(u.paragraphFieldBody, c),
    maxLength: a.RS,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: i,
    disabled: o,
    autoFocus: d,
    autosize: true,
    showRemainingCharacterCount: !o
  })
}

function m(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(o.CA, {
    title: t.label,
    children: (0, r.jsx)(d, {
      className: u.disabledFieldBackground,
      value: t.response,
      disabled: true
    })
  })
}

function f(e) {
  let {
    formField: t,
    autofocus: n,
    onChange: i
  } = e;
  return (0, r.jsx)(o.hK, {
    title: t.label,
    children: (0, r.jsx)(d, {
      value: t.response,
      onChange: i,
      autofocus: n,
      placeholder: c.intl.string(c.t["Sqn+Wl"])
    })
  })
}