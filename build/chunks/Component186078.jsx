/** Chunk was on 36605 **/
/** chunk id: 186078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BO: () => u,
  QH: () => m,
  sp: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk707592 = require("./707592.jsx"),
  Chunk624463 = require("./624463.js");

function u(e) {
  let {
    disabled: t,
    field: n,
    value: i,
    radioItemClassName: o,
    radioItemIconClassName: c,
    onChange: u
  } = e, {
    choices: m
  } = n, f = l.useMemo(() => m.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: s()(d.multipleChoiceIcon, c),
    radioBarClassName: d.multipleChoiceItem
  })), [m, c]);
  return (0, r.jsx)(a.FXm, {
    radioPosition: "right",
    disabled: t,
    options: f,
    value: i,
    onChange: u,
    radioItemClassName: o,
    itemTitleClassName: d.multipleChoiceTitle
  })
}

function m(e) {
  let {
    formField: t
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, r.jsx)(o.CA, {
    title: t.label,
    children: (0, r.jsx)(c.Gi, {
      value: n,
      disabled: true
    })
  })
}

function f(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, r.jsx)(o.hK, {
    title: t.label,
    children: (0, r.jsx)(u, {
      field: t,
      value: t.response,
      onChange: n
    })
  })
}