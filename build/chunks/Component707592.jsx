/** Chunk was on 95140 **/
/** chunk id: 707592, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Gi: () => c,
  YJ: () => u,
  zY: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk863296 = require("./863296.js");

function c(e) {
  let {
    value: n,
    placeholder: t,
    onChange: a,
    disabled: r,
    autofocus: s,
    className: c
  } = e;
  return (0, l.jsx)(i.Is, {
    inputClassName: c,
    maxLength: o.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: a,
    disabled: r,
    autoFocus: s
  })
}

function u(e) {
  let {
    formField: n
  } = e;
  return (0, l.jsx)(a.CA, {
    title: n.label,
    children: (0, l.jsx)(i.iS, {
      className: s.disabledFieldBackground,
      value: n.response,
      disabled: true,
      autoFocus: true,
      rows: 2
    })
  })
}

function d(e) {
  let {
    formField: n,
    autofocus: t,
    onChange: i
  } = e;
  return (0, l.jsx)(a.hK, {
    title: n.label,
    children: (0, l.jsx)(c, {
      onChange: i,
      value: n.response,
      autofocus: t,
      placeholder: r.intl.string(r.t["Sqn+Wl"])
    })
  })
}