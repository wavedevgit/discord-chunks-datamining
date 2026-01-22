/** Chunk was on web.js **/
/** chunk id: 535862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => h
});
var Chunk825913 = require("./825913.js"),
  Chunk123375 = require("./123375.js"),
  Chunk912687 = require("./912687.js"),
  Chunk587771 = require("./587771.js"),
  Chunk331250 = require("./331250.js"),
  Chunk498430 = require("./498430.js"),
  Chunk967158 = require("./967158.js"),
  Chunk803082 = require("./803082.js"),
  Chunk290424 = require("./290424.js"),
  Chunk64700 = require("./64700.js"),
  Chunk823807 = require("./823807.js");
let _ = (0, Chunk64700.createContext)({}),
  h = (0, Chunk64700.forwardRef)(function(e, t) {
    [e, t] = (0, r.JT)(e, t, _);
    let n = (0, f.useContext)(a.G0),
      h = (0, p.H)(n && null != e.id ? {
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
      } = n && null != e.id ? (0, s.O)({
        ...e,
        id: e.id
      }, n, t) : (0, o.q)({
        ...e,
        id: null != e.id ? String(e.id) : true
      }, h, t),
      {
        focusProps: y,
        isFocused: O,
        isFocusVisible: A
      } = (0, l.o)(e),
      {
        hoverProps: v,
        isHovered: S
      } = (0, c.M)(e),
      I = (0, r.Sl)({
        ...e,
        id: true,
        values: {
          isHovered: S,
          isPressed: g,
          isFocused: O,
          isSelected: h.isSelected,
          isFocusVisible: A,
          isDisabled: b,
          state: h
        },
        defaultClassName: "react-aria-ToggleButton"
      }),
      T = (0, d.$)(e, {
        global: true
      });
    return delete T.id, delete T.onClick, f.createElement("button", {
      ...(0, u.v)(T, I, m, y, v),
      ref: t,
      slot: e.slot || true,
      "data-focused": O || true,
      "data-disabled": b || true,
      "data-pressed": g || true,
      "data-selected": E || true,
      "data-hovered": S || true,
      "data-focus-visible": A || true
    }, f.createElement(i.r.Provider, {
      value: {
        isSelected: E
      }
    }, I.children))
  })