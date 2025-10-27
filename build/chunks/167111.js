/** Chunk was on web.js **/
/** chunk id: 167111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wr: () => y,
  bd: () => g,
  kE: () => I
});
var Chunk922387 = require("./922387.js"),
  Chunk276820 = require("./276820.js"),
  Chunk71825 = require("./71825.js"),
  Chunk594886 = require("./594886.js"),
  Chunk933926 = require("./933926.js"),
  Chunk322612 = require("./322612.js"),
  Chunk580470 = require("./580470.js"),
  Chunk437525 = require("./437525.js"),
  Chunk43341 = require("./43341.js"),
  Chunk86151 = require("./86151.js"),
  Chunk490802 = require("./490802.js"),
  Chunk593277 = require("./593277.js"),
  Chunk735437 = require("./735437.js"),
  Chunk647438 = require("./647438.js");
let g = (0, Chunk647438.createContext)(null),
  E = (0, Chunk647438.createContext)(null),
  b = (0, Chunk647438.createContext)(null),
  y = (0, Chunk647438.forwardRef)(function(e, t) {
    let n = (0, m.useContext)(E),
      r = (0, m.useContext)(b);
    return n || r ? m.createElement(v, {
      ...e,
      ref: t
    }) : m.createElement(O, {
      ...e,
      ref: t
    })
  }),
  O = (0, Chunk647438.forwardRef)((e, t) => {
    let [n, l] = (0, r.pE)({
      slot: e.slot
    }, t, g), {
      locale: c
    } = (0, o.j)(), u = (0, _.R)({
      ...n,
      locale: c,
      createCalendar: f.Y
    }), d = (0, m.useRef)(null), {
      fieldProps: p,
      inputProps: h
    } = (0, s.IZ)({
      ...n,
      inputRef: d
    }, u, l);
    return m.createElement(r.zt, {
      values: [
        [E, u],
        [a.r, {
          ...h,
          ref: d
        }],
        [i.E, {
          ...p,
          ref: l,
          isInvalid: u.isInvalid,
          isDisabled: u.isDisabled
        }]
      ]
    }, m.createElement(v, e))
  }),
  v = (0, Chunk647438.forwardRef)((e, t) => {
    let {
      className: n,
      children: r
    } = e, o = (0, m.useContext)(E), s = (0, m.useContext)(b), l = null != o ? o : s;
    return m.createElement(m.Fragment, null, m.createElement(i.Z, {
      ...e,
      ref: t,
      slot: e.slot || true,
      className: null != n ? n : "react-aria-DateInput",
      isReadOnly: l.isReadOnly,
      isInvalid: l.isInvalid,
      isDisabled: l.isDisabled
    }, l.segments.map((e, t) => (0, m.cloneElement)(r(e), {
      key: t
    }))), m.createElement(a.I, null))
  }),
  I = (0, Chunk647438.forwardRef)(function({
    segment: e,
    ...t
  }, n) {
    let i = (0, m.useContext)(E),
      a = (0, m.useContext)(b),
      o = null != i ? i : a,
      s = (0, p.B)(n),
      {
        segmentProps: f
      } = (0, l.O)(e, o, s),
      {
        focusProps: _,
        isFocused: g,
        isFocusVisible: y
      } = (0, c.F)(),
      {
        hoverProps: O,
        isHovered: v
      } = (0, u.X)({
        ...t,
        isDisabled: o.isDisabled || "literal" === e.type
      }),
      I = (0, r.aX)({
        ...t,
        values: {
          ...e,
          isReadOnly: o.isReadOnly,
          isInvalid: o.isInvalid,
          isDisabled: o.isDisabled,
          isHovered: v,
          isFocused: g,
          isFocusVisible: y
        },
        defaultChildren: e.text,
        defaultClassName: "react-aria-DateSegment"
      });
    return m.createElement("span", {
      ...(0, d.d)((0, h.z)(t, {
        global: true
      }), f, _, O),
      ...I,
      style: f.style,
      ref: s,
      "data-placeholder": e.isPlaceholder || true,
      "data-invalid": o.isInvalid || true,
      "data-readonly": o.isReadOnly || true,
      "data-disabled": o.isDisabled || true,
      "data-type": e.type,
      "data-hovered": v || true,
      "data-focused": g || true,
      "data-focus-visible": y || true
    })
  })