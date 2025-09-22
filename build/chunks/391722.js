/** Chunk was on web.js **/
/** chunk id: 391722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h
});
var Chunk836515 = require("./836515.js"),
  Chunk872590 = require("./872590.js"),
  Chunk795074 = require("./795074.js"),
  Chunk640196 = require("./640196.js"),
  Chunk436242 = require("./436242.js"),
  Chunk87624 = require("./87624.js"),
  Chunk506364 = require("./506364.js"),
  Chunk998925 = require("./998925.js"),
  Chunk312238 = require("./312238.js"),
  Chunk690696 = require("./690696.js"),
  Chunk909561 = require("./909561.js");

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
  }, t, n);
  delete b.onKeyDownCapture;
  let {
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
      onPress: () => E ? E(new Set([h.key])) : null,
      excludeFromTabOrder: true
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