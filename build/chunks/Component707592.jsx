/** Chunk was on 95140 **/
/** chunk id: 707592, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Gi: () => s,
  YJ: () => c,
  zY: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    value: n,
    placeholder: t,
    onChange: a,
    disabled: o,
    autofocus: s
  } = e;
  return (0, l.jsx)(i.oil, {
    maxLength: r.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: a,
    disabled: o,
    autoFocus: s
  })
}

function c(e) {
  let {
    formField: n
  } = e;
  return (0, l.jsx)(a.CA, {
    title: n.label,
    children: (0, l.jsx)(i.Kx8, {
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
  return (0, l.jsx)(a.hK, {
    title: n.label,
    children: (0, l.jsx)(s, {
      onChange: i,
      value: n.response,
      autofocus: t,
      placeholder: o.intl.string(o.t["Sqn+Wh"])
    })
  })
}