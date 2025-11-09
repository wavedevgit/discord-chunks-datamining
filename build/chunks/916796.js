/** Chunk was on 70018 **/
/** chunk id: 916796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V2: () => v,
  pJ: () => b
});
var Chunk188366 = require("./188366.js"),
  Chunk922387 = require("./922387.js"),
  Chunk214101 = require("./214101.js"),
  Chunk580470 = require("./580470.js"),
  Chunk163172 = require("./163172.js"),
  Chunk677061 = require("./677061.js"),
  Chunk735437 = require("./735437.js"),
  Chunk43341 = require("./43341.js"),
  Chunk483022 = require("./483022.js"),
  Chunk647438 = require("./647438.js");
let p = (0, Chunk647438.createContext)(null),
  x = (0, Chunk647438.createContext)(null),
  h = (0, Chunk647438.createContext)(null),
  g = (0, Chunk647438.createContext)(null),
  b = (0, Chunk647438.forwardRef)(function(e, t) {
    [e, t] = (0, r.pE)(e, t, x);
    let n = (0, c.useContext)(p),
      {
        id: l,
        ...b
      } = e,
      v = (0, s.Me)();
    l || (l = v);
    let E = n ? n.expandedKeys.has(l) : e.isExpanded,
      m = (0, a.b)({
        ...e,
        isExpanded: E,
        onExpandedChange(t) {
          var u;
          n && n.toggleKey(l), null == (u = e.onExpandedChange) || u.call(e, t)
        }
      }),
      y = c.useRef(null),
      A = e.isDisabled || (null == n ? true : n.isDisabled) || false,
      {
        buttonProps: C,
        panelProps: P
      } = (0, i.q)({
        ...e,
        isExpanded: E,
        isDisabled: A
      }, m, y),
      {
        isFocusVisible: w,
        focusProps: R
      } = (0, o.F)({
        within: true
      }),
      S = (0, r.aX)({
        ...e,
        id: true,
        defaultClassName: "react-aria-Disclosure",
        values: {
          isExpanded: m.isExpanded,
          isDisabled: A,
          isFocusVisibleWithin: w,
          state: m
        }
      }),
      z = (0, d.z)(b, {
        global: true
      });
    return c.createElement(r.zt, {
      values: [
        [u.b, {
          slots: {
            [r.hO]: {},
            trigger: C
          }
        }],
        [g, {
          panelProps: P,
          panelRef: y
        }],
        [h, m]
      ]
    }, c.createElement("div", {
      ...(0, f.d)(z, S, R),
      ref: t,
      "data-expanded": m.isExpanded || true,
      "data-disabled": A || true,
      "data-focus-visible-within": w || true
    }, S.children))
  }),
  v = (0, Chunk647438.forwardRef)(function(e, t) {
    let {
      role: n = "group"
    } = e, {
      panelProps: i,
      panelRef: a
    } = (0, c.useContext)(g), {
      isFocusVisible: s,
      focusProps: p
    } = (0, o.F)({
      within: true
    }), x = (0, r.aX)({
      ...e,
      defaultClassName: "react-aria-DisclosurePanel",
      values: {
        isFocusVisibleWithin: s
      }
    }), h = (0, d.z)(e, {
      global: true
    });
    return c.createElement("div", {
      ...(0, f.d)(h, x, i, p),
      ref: (0, l.l)(t, a),
      role: n,
      "data-focus-visible-within": s || true
    }, c.createElement(r.zt, {
      values: [
        [u.b, null]
      ]
    }, e.children))
  })