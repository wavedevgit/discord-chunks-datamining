/** Chunk was on web.js **/
/** chunk id: 492938, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => h
});
var Chunk595707 = require("./595707.js"),
  Chunk913074 = require("./913074.js"),
  Chunk17925 = require("./17925.js"),
  Chunk190974 = require("./190974.js"),
  Chunk354161 = require("./354161.js"),
  Chunk984940 = require("./984940.js"),
  Chunk69771 = require("./69771.js"),
  Chunk158821 = require("./158821.js"),
  Chunk880016 = require("./880016.js"),
  Chunk473749 = require("./473749.js"),
  Chunk698369 = require("./698369.js");
let _ = (0, Chunk473749.createContext)({}),
  h = (0, Chunk473749.forwardRef)(function(e, t) {
    [e, t] = (0, r.pE)(e, t, _);
    let n = (0, f.useContext)(a.K4),
      h = (0, p.l)(n && null != e.id ? {
        isSelected: n.selectedKeys.has(e.id),
        onChange(t) {
          n.setSelected(e.id, t)
        }
      } : e),
      {
        buttonProps: m,
        isPressed: g,
        isSelected: E,
        isDisabled: b
      } = n && null != e.id ? (0, o.U)({
        ...e,
        id: e.id
      }, n, t) : (0, s.k)({
        ...e,
        id: null != e.id ? String(e.id) : true
      }, h, t),
      {
        focusProps: y,
        isFocused: O,
        isFocusVisible: v
      } = (0, l.F)(e),
      {
        hoverProps: S,
        isHovered: I
      } = (0, c.X)(e),
      T = (0, r.aX)({
        ...e,
        id: true,
        values: {
          isHovered: I,
          isPressed: g,
          isFocused: O,
          isSelected: h.isSelected,
          isFocusVisible: v,
          isDisabled: b,
          state: h
        },
        defaultClassName: "react-aria-ToggleButton"
      }),
      C = (0, d.z)(e, {
        global: true
      });
    return delete C.id, delete C.onClick, f.createElement("button", {
      ...(0, u.d)(C, T, m, y, S),
      ref: t,
      slot: e.slot || true,
      "data-focused": O || true,
      "data-disabled": b || true,
      "data-pressed": g || true,
      "data-selected": E || true,
      "data-hovered": I || true,
      "data-focus-visible": v || true
    }, f.createElement(i.p.Provider, {
      value: {
        isSelected: E
      }
    }, T.children))
  })