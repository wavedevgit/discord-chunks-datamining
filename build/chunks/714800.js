/** Chunk was on web.js **/
/** chunk id: 714800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h
});
var Chunk286310 = require("./286310.js"),
  Chunk267202 = require("./267202.js"),
  Chunk743994 = require("./743994.js"),
  Chunk745097 = require("./745097.js"),
  Chunk753125 = require("./753125.js"),
  Chunk520297 = require("./520297.js"),
  Chunk506523 = require("./506523.js"),
  Chunk775282 = require("./775282.js"),
  Chunk357161 = require("./357161.js"),
  Chunk759102 = require("./759102.js"),
  Chunk180887 = require("./180887.js");

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