/** Chunk was on 35894 **/
/** chunk id: 414626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CI: () => c,
  MZ: () => u,
  mR: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk31457 = require("./31457.jsx"),
  Chunk453016 = require("./453016.jsx");

function s(e) {
  let {
    disabled: t,
    field: n,
    value: o,
    onChange: a
  } = e, {
    choices: s
  } = n, c = l.useMemo(() => s.map((e, t) => ({
    name: e,
    value: t
  })), [s]);
  return (0, r.jsx)(i.z6M, {
    options: c,
    value: o,
    onChange: e => null == a ? true : a({
      value: e
    }),
    disabled: t
  })
}

function c(e) {
  let {
    formField: t
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, r.jsx)(o._H, {
    title: t.label,
    children: (0, r.jsx)(a._V, {
      value: n,
      disabled: true
    })
  })
}

function u(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, r.jsx)(o.cS, {
    title: t.label,
    children: (0, r.jsx)(s, {
      field: t,
      value: t.response,
      onChange: n
    })
  })
}