/** Chunk was on 30243 **/
/** chunk id: 732586, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk293979 = require("./293979.js"),
  Chunk59718 = require("./59718.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function p(e) {
  let t, {
      type: r,
      style: p,
      label: f,
      placeholder: b,
      minLength: m,
      maxLength: O,
      required: y,
      value: j
    } = e,
    [g, h] = l.useState(null != j ? j : ""),
    {
      state: v,
      executeStateUpdate: P,
      error: x
    } = (0, c.Ee)(e, null != j ? {
      type: r,
      value: j
    } : true),
    S = (0, s.hz)(e.id);
  l.useEffect(() => {
    (null == v ? true : v.type) === r && h(v.value)
  }, [r, v]);
  let w = {
    value: g,
    placeholder: b,
    minLength: m,
    maxLength: O,
    required: y,
    onChange: e => {
      h(e), P({
        type: r,
        value: e
      })
    },
    autoFocus: S
  };
  switch (p) {
    case a.PT.SMALL:
      t = (0, n.jsx)(o.oil, d({}, w));
      break;
    case a.PT.PARAGRAPH:
      t = (0, n.jsx)(i.iS, d({
        autosize: true
      }, w))
  }
  return null != f ? (0, n.jsx)(o.xJW, {
    title: f,
    required: y,
    error: x,
    className: u.formItem,
    titleClassName: u.title,
    children: t
  }) : t
}