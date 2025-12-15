/** Chunk was on 23242 **/
/** chunk id: 913338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk993365 = require("./993365.js"),
  Chunk37155 = require("./37155.js");

function c(e) {
  let {
    option: t,
    selected: n,
    onClick: i,
    disabled: c = false
  } = e, d = l.useCallback(e => i(t), [i, t]);
  return (0, r.jsx)(o.P3F, {
    className: a()(u.item, {
      [u.itemSelected]: n,
      [u.disabled]: c
    }),
    "aria-disabled": c,
    onClick: c ? true : d,
    onMouseEnter: t.onMouseEnter,
    onMouseLeave: t.onMouseLeave,
    children: (0, r.jsxs)(s.x, {
      className: u.controlText,
      variant: "text-sm/medium",
      color: "none",
      children: [null != t.icon ? (0, r.jsx)("span", {
        className: u.icon,
        children: t.icon
      }) : null, t.name]
    })
  })
}

function d(e) {
  let {
    options: t,
    value: n,
    onChange: i,
    className: o,
    disabled: s = false
  } = e, d = l.useMemo(() => t.findIndex(e => e.value === n), [t, n]), p = l.useCallback(e => {
    var t;
    let l = n === e.value;
    return (0, r.jsx)(c, {
      selected: l,
      option: e,
      onClick: i,
      disabled: s
    }, null != (t = e.key) ? t : String(e.value))
  }, [n, i, s]);
  return (0, r.jsx)("div", {
    className: a()(u.container, o, {
      [u.disabledContainer]: s,
      [u.trickSelected]: 0 === d,
      [u.treatSelected]: 1 === d
    }),
    children: t.map(p)
  })
}