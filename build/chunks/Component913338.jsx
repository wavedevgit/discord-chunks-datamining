/** Chunk was on 54400 **/
/** chunk id: 913338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk993365 = require("./993365.js"),
  Chunk530989 = require("./530989.js");

function c(e) {
  let {
    option: t,
    selected: n,
    onClick: a,
    disabled: c = false
  } = e, u = l.useCallback(e => a(t), [a, t]);
  return (0, r.jsx)(o.P3F, {
    className: i()(d.item, {
      [d.itemSelected]: n,
      [d.disabled]: c
    }),
    "aria-disabled": c,
    onClick: c ? true : u,
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

function u(e) {
  let {
    options: t,
    value: n,
    onChange: a,
    className: o,
    disabled: s = false
  } = e, u = l.useMemo(() => t.findIndex(e => e.value === n), [t, n]), p = l.useCallback(e => {
    var t;
    let l = n === e.value;
    return (0, r.jsx)(c, {
      selected: l,
      option: e,
      onClick: a,
      disabled: s
    }, null != (t = e.key) ? t : String(e.value))
  }, [n, a, s]);
  return (0, r.jsx)("div", {
    className: i()(d.container, o, {
      [d.disabledContainer]: s,
      [d.trickSelected]: 0 === u,
      [d.treatSelected]: 1 === u
    }),
    children: t.map(p)
  })
}