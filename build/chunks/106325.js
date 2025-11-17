/** Chunk was on web.js **/
/** chunk id: 106325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h
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

function p(e) {
  return e && e.__esModule ? e.default : e
}

function h(e, t, n) {
  let {
    item: h
  } = e, m = (0, _.q)(p(i.Z), "@react-aria/tag"), g = (0, a.Me)(), {
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
    N = (0, o.P)(C),
    R = h.key === t.selectionManager.focusedKey,
    P = null != t.selectionManager.focusedKey,
    D = false;
  T || !R && P || (D = 0);
  let w = (0, s.z)(h.props),
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
    rowProps: (0, c.d)(L, b, w, x, {
      tabIndex: D,
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