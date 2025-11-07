/** Chunk was on web.js **/
/** chunk id: 987960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h
});
var Chunk387509 = require("./387509.js"),
  Chunk614157 = require("./614157.js"),
  Chunk677061 = require("./677061.js"),
  Chunk682308 = require("./682308.js"),
  Chunk735437 = require("./735437.js"),
  Chunk900197 = require("./900197.js"),
  Chunk43341 = require("./43341.js"),
  Chunk521707 = require("./521707.js"),
  Chunk752321 = require("./752321.js"),
  Chunk226138 = require("./226138.js"),
  Chunk970185 = require("./970185.js");

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
  } = O, S = t.disabledKeys.has(h.key) || h.props.isDisabled, T = e => {
    ("Delete" === e.key || "Backspace" === e.key) && (S || (e.preventDefault(), t.selectionManager.isSelected(h.key) ? null == E || E(new Set(t.selectionManager.selectedKeys)) : null == E || E(new Set([h.key]))))
  }, A = (0, u.Kf)();
  "virtual" === A && "undefined" != typeof window && "ontouchstart" in window && (A = "pointer");
  let C = E && ("keyboard" === A || "virtual" === A) ? m.format("removeDescription") : "",
    N = (0, o.P)(C),
    R = h.key === t.selectionManager.focusedKey,
    P = null != t.selectionManager.focusedKey,
    w = false;
  S || !R && P || (w = 0);
  let D = (0, s.z)(h.props),
    x = (0, l.fU)(h.props),
    {
      focusableProps: L
    } = (0, d.kc)({
      isDisabled: S
    }, n);
  return {
    removeButtonProps: {
      "aria-label": m.format("removeButtonLabel"),
      "aria-labelledby": `${g} ${b.id}`,
      isDisabled: S,
      id: g,
      onPress: () => E ? E(new Set([h.key])) : null
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
    ...I,
    allowsRemoving: !!E
  }
}