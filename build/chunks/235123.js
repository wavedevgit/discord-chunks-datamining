/** Chunk was on web.js **/
/** chunk id: 235123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h
});
var Chunk525187 = require("./525187.js"),
  Chunk765780 = require("./765780.js"),
  Chunk39807 = require("./39807.js"),
  Chunk24645 = require("./24645.js"),
  Chunk436773 = require("./436773.js"),
  Chunk132979 = require("./132979.js"),
  Chunk933492 = require("./933492.js"),
  Chunk938264 = require("./938264.js"),
  Chunk600711 = require("./600711.js"),
  Chunk385094 = require("./385094.js"),
  Chunk792160 = require("./792160.js");

function p(e) {
  return e && e.__esModule ? e.default : e
}

function h(e, t, n) {
  let {
    item: h
  } = e, m = (0, _.q)(p(i.Z), "@react-aria/tag"), g = (0, o.Me)(), {
    onRemove: E
  } = r.L.get(t) || {}, {
    rowProps: b,
    gridCellProps: y,
    ...O
  } = (0, f.F)({
    node: h
  }, t, n), {
    descriptionProps: v,
    ...I
  } = O, T = t.disabledKeys.has(h.key) || h.props.isDisabled, S = e => {
    ("Delete" === e.key || "Backspace" === e.key) && (T || (e.preventDefault(), t.selectionManager.isSelected(h.key) ? null == E || E(new Set(t.selectionManager.selectedKeys)) : null == E || E(new Set([h.key]))))
  }, A = (0, u.Kf)();
  "virtual" === A && "undefined" != typeof window && "ontouchstart" in window && (A = "pointer");
  let C = E && ("keyboard" === A || "virtual" === A) ? m.format("removeDescription") : "",
    N = (0, a.P)(C),
    R = h.key === t.selectionManager.focusedKey,
    P = null != t.selectionManager.focusedKey,
    w = false;
  T || !R && P || (w = 0);
  let D = (0, s.z)(h.props),
    x = (0, l.fU)(h.props),
    {
      focusableProps: L
    } = (0, d.kc)({
      isDisabled: T
    }, n);
  return {
    removeButtonProps: {
      "aria-label": m.format("removeButtonLabel"),
      "aria-labelledby": `${g} ${b.id}`,
      isDisabled: T,
      id: g,
      onPress: () => E ? E(new Set([h.key])) : null
    },
    rowProps: (0, c.d)(L, b, D, x, {
      tabIndex: w,
      onKeyDown: E ? S : true,
      "aria-describedby": N["aria-describedby"]
    }),
    gridCellProps: (0, c.d)(y, {
      "aria-errormessage": e["aria-errormessage"],
      "aria-label": e["aria-label"]
    }),
    ...I,
    allowsRemoving: !!E
  }
}