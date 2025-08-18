/** Chunk was on 95140 **/
/** chunk id: 707592, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Gi: () => u,
  YJ: () => d,
  zY: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624463 = require("./624463.js");

function u(e) {
  let {
    value: n,
    placeholder: t,
    onChange: i,
    disabled: o,
    autofocus: s
  } = e;
  return (0, l.jsx)(a.oil, {
    maxLength: r.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: i,
    disabled: o,
    autoFocus: s
  })
}

function d(e) {
  let {
    formField: n
  } = e;
  return (0, l.jsx)(o.CA, {
    title: n.label,
    children: (0, l.jsx)(i.iS, {
      className: c.disabledFieldBackground,
      value: n.response,
      disabled: true,
      autoFocus: true,
      rows: 2
    })
  })
}

function p(e) {
  let {
    formField: n,
    autofocus: t,
    onChange: i
  } = e;
  return (0, l.jsx)(o.hK, {
    title: n.label,
    children: (0, l.jsx)(u, {
      onChange: i,
      value: n.response,
      autofocus: t,
      placeholder: s.intl.string(s.t["Sqn+Wl"])
    })
  })
}