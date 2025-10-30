/** Chunk was on 10065 **/
/** chunk id: 913338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk993365 = require("./993365.js"),
  Chunk482828 = require("./482828.js");

function C(e) {
  let {
    option: t,
    selected: n,
    onClick: a,
    disabled: C = false
  } = e, c = i.useCallback(e => a(t), [a, t]);
  return (0, r.jsx)(o.P3F, {
    className: l()(d.item, {
      [d.itemSelected]: n,
      [d.disabled]: C
    }),
    "aria-disabled": C,
    onClick: C ? true : c,
    onMouseEnter: t.onMouseEnter,
    onMouseLeave: t.onMouseLeave,
    children: (0, r.jsxs)(s.x, {
      className: d.controlText,
      variant: "text-sm/medium",
      color: "none",
      children: [null != t.icon ? (0, r.jsx)("span", {
        className: d.icon,
        children: t.icon
      }) : null, t.name]
    })
  })
}

function c(e) {
  let {
    options: t,
    value: n,
    onChange: a,
    className: o,
    disabled: s = false
  } = e, c = i.useMemo(() => t.findIndex(e => e.value === n), [t, n]), u = i.useCallback(e => {
    var t;
    let i = n === e.value;
    return (0, r.jsx)(C, {
      selected: i,
      option: e,
      onClick: a,
      disabled: s
    }, null != (t = e.key) ? t : String(e.value))
  }, [n, a, s]);
  return (0, r.jsx)("div", {
    className: l()(d.container, o, {
      [d.disabledContainer]: s,
      [d.trickSelected]: 0 === c,
      [d.treatSelected]: 1 === c
    }),
    children: t.map(u)
  })
}