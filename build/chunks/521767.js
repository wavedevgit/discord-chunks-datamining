/** Chunk was on web.js **/
/** chunk id: 521767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => c,
  t: () => l
});
var Chunk825913 = require("./825913.js"),
  Chunk967158 = require("./967158.js"),
  Chunk498430 = require("./498430.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js");
let l = (0, Chunk64700.createContext)({}),
  c = (0, Chunk64700.forwardRef)(function(e, t) {
    var n, c;
    [e, t] = (0, r.JT)(e, t, l);
    let {
      isDisabled: u,
      isInvalid: d,
      isReadOnly: f,
      onHoverStart: p,
      onHoverChange: _,
      onHoverEnd: h,
      ...m
    } = e, {
      hoverProps: g,
      isHovered: E
    } = (0, i.M)({
      onHoverStart: p,
      onHoverChange: _,
      onHoverEnd: h,
      isDisabled: u
    }), {
      isFocused: y,
      isFocusVisible: b,
      focusProps: O
    } = (0, a.o)({
      within: true
    });
    null != u || (u = !!e["aria-disabled"] && "false" !== e["aria-disabled"]), null != d || (d = !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
    let v = (0, r.Sl)({
      ...e,
      values: {
        isHovered: E,
        isFocusWithin: y,
        isFocusVisible: b,
        isDisabled: u,
        isInvalid: d
      },
      defaultClassName: "react-aria-Group"
    });
    return o.createElement("div", {
      ...(0, s.v)(m, O, g),
      ...v,
      ref: t,
      role: null != (n = e.role) ? n : "group",
      slot: null != (c = e.slot) ? c : true,
      "data-focus-within": y || true,
      "data-hovered": E || true,
      "data-focus-visible": b || true,
      "data-disabled": u || true,
      "data-invalid": d || true,
      "data-readonly": f || true
    }, v.children)
  })