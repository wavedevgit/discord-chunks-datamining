/** Chunk was on 95140 **/
/** chunk id: 707592, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Gi: () => o,
  YJ: () => a,
  zY: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    value: n,
    placeholder: t,
    onChange: r,
    disabled: u,
    autofocus: o
  } = e;
  return (0, l.jsx)(i.oil, {
    maxLength: s.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: r,
    disabled: u,
    autoFocus: o
  })
}

function a(e) {
  let {
    formField: n
  } = e;
  return (0, l.jsx)(r.CA, {
    title: n.label,
    children: (0, l.jsx)(i.Kx8, {
      value: n.response,
      disabled: true
    })
  })
}

function c(e) {
  let {
    formField: n,
    autofocus: t,
    onChange: i
  } = e;
  return (0, l.jsx)(r.hK, {
    title: n.label,
    children: (0, l.jsx)(o, {
      onChange: i,
      value: n.response,
      autofocus: t,
      placeholder: u.intl.string(u.t["Sqn+Wh"])
    })
  })
}