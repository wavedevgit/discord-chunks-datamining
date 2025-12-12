/** Chunk was on web.js **/
/** chunk id: 540387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => l,
  Z: () => c
});
var Chunk595707 = require("./595707.js"),
  Chunk69771 = require("./69771.js"),
  Chunk984940 = require("./984940.js"),
  Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js");
let l = (0, Chunk473749.createContext)({}),
  c = (0, Chunk473749.forwardRef)(function(e, t) {
    var n, c;
    [e, t] = (0, r.pE)(e, t, l);
    let {
      isDisabled: u,
      isInvalid: d,
      isReadOnly: f,
      onHoverStart: p,
      onHoverChange: _,
      onHoverEnd: m,
      ...h
    } = e, {
      hoverProps: g,
      isHovered: E
    } = (0, i.X)({
      onHoverStart: p,
      onHoverChange: _,
      onHoverEnd: m,
      isDisabled: u
    }), {
      isFocused: b,
      isFocusVisible: y,
      focusProps: O
    } = (0, o.F)({
      within: true
    });
    null != u || (u = !!e["aria-disabled"] && "false" !== e["aria-disabled"]), null != d || (d = !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
    let v = (0, r.aX)({
      ...e,
      values: {
        isHovered: E,
        isFocusWithin: b,
        isFocusVisible: y,
        isDisabled: u,
        isInvalid: d
      },
      defaultClassName: "react-aria-Group"
    });
    return s.createElement("div", {
      ...(0, a.d)(h, O, g),
      ...v,
      ref: t,
      role: null != (n = e.role) ? n : "group",
      slot: null != (c = e.slot) ? c : true,
      "data-focus-within": b || true,
      "data-hovered": E || true,
      "data-focus-visible": y || true,
      "data-disabled": u || true,
      "data-invalid": d || true,
      "data-readonly": f || true
    }, v.children)
  })