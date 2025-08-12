/** Chunk was on 31649 **/
/** chunk id: 562577, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk19391 = require("./19391.js"),
  Chunk600243 = require("./600243.jsx"),
  Chunk875425 = require("./875425.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk857118 = require("./857118.js");

function f(t) {
  let {
    option: e,
    isSelected: n,
    onClick: a
  } = t, c = (0, s.Z)(e.value);
  return (0, l.jsx)(o.DY3, {
    text: c,
    children: (0, l.jsx)(o.P3F, {
      onClick: a,
      "aria-pressed": n,
      className: r()(m.customStatusLabelSelectorItem, n && m.customStatusLabelSelectorItemSelected),
      "aria-label": n ? d.intl.formatToPlainString(d.t["+KXSFh"], {
        label: c
      }) : d.intl.formatToPlainString(d.t.mDVlTk, {
        label: c
      }),
      children: (0, l.jsx)(u.Z, {
        label: e.value,
        size: "xs",
        color: n ? i.Z.colors.INTERACTIVE_ACTIVE : i.Z.colors.INTERACTIVE_NORMAL,
        className: m.customStatusLabelSelectorItemIcon
      })
    })
  })
}

function p(t) {
  let {
    currentValue: e,
    onChange: n
  } = t;
  return (0, l.jsx)("div", {
    className: m.customStatusLabelSelector,
    children: c.Ub.map(t => (0, l.jsx)(f, {
      option: t,
      isSelected: e === t.value,
      onClick: () => n(t.value)
    }, t.value))
  })
}