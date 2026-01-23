/** Chunk was on web.js **/
/** chunk id: 27270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => h
});
var Chunk567359 = require("./567359.js"),
  Chunk301982 = require("./301982.js"),
  Chunk723906 = require("./723906.js"),
  Chunk807177 = require("./807177.js"),
  Chunk290424 = require("./290424.js"),
  Chunk132716 = require("./132716.js"),
  Chunk803082 = require("./803082.js"),
  Chunk885714 = require("./885714.js"),
  Chunk946020 = require("./946020.js"),
  Chunk795122 = require("./795122.js"),
  Chunk47276 = require("./47276.js");

function _(e) {
  return e && e.__esModule ? e.default : e
}

function h(e, t, n) {
  let {
    item: h
  } = e, m = (0, p.o)(_(i.A), "@react-aria/tag"), g = (0, a.Bi)(), {
    onRemove: E
  } = r.O.get(t) || {}, {
    rowProps: y,
    gridCellProps: b,
    ...O
  } = (0, f.n)({
    node: h
  }, t, n), {
    descriptionProps: v,
    ...A
  } = O, I = t.disabledKeys.has(h.key) || h.props.isDisabled, S = e => {
    ("Delete" === e.key || "Backspace" === e.key) && (I || (e.preventDefault(), t.selectionManager.isSelected(h.key) ? null == E || E(new Set(t.selectionManager.selectedKeys)) : null == E || E(new Set([h.key]))))
  }, T = (0, u.lb)();
  "virtual" === T && "u" > typeof window && "ontouchstart" in window && (T = "pointer");
  let C = E && ("keyboard" === T || "virtual" === T) ? m.format("removeDescription") : "",
    N = (0, s.I)(C),
    R = h.key === t.selectionManager.focusedKey,
    w = null != t.selectionManager.focusedKey,
    P = false;
  I || !R && w || (P = 0);
  let D = (0, o.$)(h.props),
    x = (0, l.HI)(h.props),
    {
      focusableProps: L
    } = (0, d.Wc)({
      isDisabled: I
    }, n);
  return {
    removeButtonProps: {
      "aria-label": m.format("removeButtonLabel"),
      "aria-labelledby": `${g} ${y.id}`,
      isDisabled: I,
      id: g,
      onPress: () => E ? E(new Set([h.key])) : null
    },
    rowProps: (0, c.v)(L, y, D, x, {
      tabIndex: P,
      onKeyDown: E ? S : true,
      "aria-describedby": N["aria-describedby"]
    }),
    gridCellProps: (0, c.v)(b, {
      "aria-errormessage": e["aria-errormessage"],
      "aria-label": e["aria-label"]
    }),
    ...A,
    allowsRemoving: !!E
  }
}