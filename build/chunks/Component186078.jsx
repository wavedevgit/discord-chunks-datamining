/** Chunk was on 36605 **/
/** chunk id: 186078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BO: () => d,
  QH: () => m,
  sp: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk707592 = require("./707592.jsx"),
  Chunk624463 = require("./624463.js");

function d(e) {
  let {
    disabled: t,
    field: n,
    value: l,
    radioItemClassName: a,
    radioItemIconClassName: c,
    onChange: d
  } = e, {
    choices: m
  } = n, f = i.useMemo(() => m.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: s()(u.multipleChoiceIcon, c),
    radioBarClassName: u.multipleChoiceItem
  })), [m, c]);
  return (0, r.jsx)(o.FXm, {
    radioPosition: "right",
    disabled: t,
    options: f,
    value: l,
    onChange: d,
    radioItemClassName: a,
    itemTitleClassName: u.multipleChoiceTitle
  })
}

function m(e) {
  let {
    formField: t
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, r.jsx)(a.CA, {
    title: t.label,
    children: (0, r.jsx)(c.Gi, {
      className: u.disabledFieldBackground,
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
  return (0, r.jsx)(a.hK, {
    title: t.label,
    children: (0, r.jsx)(d, {
      field: t,
      value: t.response,
      onChange: n
    })
  })
}