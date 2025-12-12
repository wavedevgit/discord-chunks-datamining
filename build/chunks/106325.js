/** Chunk was on web.js **/
/** chunk id: 106325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => m
});
var Chunk523902 = require("./523902.js"),
  Chunk383928 = require("./383928.js"),
  Chunk752689 = require("./752689.js"),
  Chunk645537 = require("./645537.js"),
  Chunk880016 = require("./880016.js"),
  Chunk601339 = require("./601339.js"),
  Chunk158821 = require("./158821.js"),
  Chunk981166 = require("./981166.js"),
  Chunk497448 = require("./497448.js"),
  Chunk74114 = require("./74114.js"),
  Chunk218769 = require("./218769.js");

function _(e) {
  return e && e.__esModule ? e.default : e
}

function m(e, t, n) {
  let {
    item: m
  } = e, h = (0, p.q)(_(i.Z), "@react-aria/tag"), g = (0, a.Me)(), {
    onRemove: E
  } = r.L.get(t) || {}, {
    rowProps: b,
    gridCellProps: y,
    ...O
  } = (0, f.F)({
    node: m
  }, t, n), {
    descriptionProps: v,
    ...S
  } = O, I = t.disabledKeys.has(m.key) || m.props.isDisabled, T = e => {
    ("Delete" === e.key || "Backspace" === e.key) && (I || (e.preventDefault(), t.selectionManager.isSelected(m.key) ? null == E || E(new Set(t.selectionManager.selectedKeys)) : null == E || E(new Set([m.key]))))
  }, C = (0, u.Kf)();
  "virtual" === C && "undefined" != typeof window && "ontouchstart" in window && (C = "pointer");
  let A = E && ("keyboard" === C || "virtual" === C) ? h.format("removeDescription") : "",
    N = (0, o.P)(A),
    P = m.key === t.selectionManager.focusedKey,
    R = null != t.selectionManager.focusedKey,
    w = false;
  I || !P && R || (w = 0);
  let D = (0, s.z)(m.props),
    x = (0, l.fU)(m.props),
    {
      focusableProps: L
    } = (0, d.kc)({
      isDisabled: I
    }, n);
  return {
    removeButtonProps: {
      "aria-label": h.format("removeButtonLabel"),
      "aria-labelledby": `${g} ${b.id}`,
      isDisabled: I,
      id: g,
      onPress: () => E ? E(new Set([m.key])) : null
    },
    rowProps: (0, c.d)(L, b, D, x, {
      tabIndex: w,
      onKeyDown: E ? T : true,
      "aria-describedby": N["aria-describedby"]
    }),
    gridCellProps: (0, c.d)(y, {
      "aria-errormessage": e["aria-errormessage"],
      "aria-label": e["aria-label"]
    }),
    ...S,
    allowsRemoving: !!E
  }
}