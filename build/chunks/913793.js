/** Chunk was on web.js **/
/** chunk id: 913793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V2: () => E,
  pJ: () => g
});
var Chunk23893 = require("./23893.js"),
  Chunk595707 = require("./595707.js"),
  Chunk484944 = require("./484944.js"),
  Chunk984940 = require("./984940.js"),
  Chunk882069 = require("./882069.js"),
  Chunk752689 = require("./752689.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk401522 = require("./401522.js"),
  Chunk473749 = require("./473749.js");
let p = (0, Chunk473749.createContext)(null),
  _ = (0, Chunk473749.createContext)(null),
  m = (0, Chunk473749.createContext)(null),
  h = (0, Chunk473749.createContext)(null),
  g = (0, Chunk473749.forwardRef)(function(e, t) {
    [e, t] = (0, i.pE)(e, t, _);
    let n = (0, f.useContext)(p),
      {
        id: d,
        ...g
      } = e,
      E = (0, l.Me)();
    d || (d = E);
    let b = n ? n.expandedKeys.has(d) : e.isExpanded,
      y = (0, s.b)({
        ...e,
        isExpanded: b,
        onExpandedChange(t) {
          var r;
          n && n.toggleKey(d), null == (r = e.onExpandedChange) || r.call(e, t)
        }
      }),
      O = f.useRef(null),
      v = e.isDisabled || (null == n ? true : n.isDisabled) || false,
      {
        buttonProps: S,
        panelProps: I
      } = (0, o.q)({
        ...e,
        isExpanded: b,
        isDisabled: v
      }, y, O),
      {
        isFocusVisible: T,
        focusProps: C
      } = (0, a.F)({
        within: true
      }),
      A = (0, i.aX)({
        ...e,
        id: true,
        defaultClassName: "react-aria-Disclosure",
        values: {
          isExpanded: y.isExpanded,
          isDisabled: v,
          isFocusVisibleWithin: T,
          state: y
        }
      }),
      N = (0, c.z)(g, {
        global: true
      });
    return f.createElement(i.zt, {
      values: [
        [r.b, {
          slots: {
            [i.hO]: {},
            trigger: S
          }
        }],
        [h, {
          panelProps: I,
          panelRef: O
        }],
        [m, y]
      ]
    }, f.createElement("div", {
      ...(0, u.d)(N, A, C),
      ref: t,
      "data-expanded": y.isExpanded || true,
      "data-disabled": v || true,
      "data-focus-visible-within": T || true
    }, A.children))
  }),
  E = (0, Chunk473749.forwardRef)(function(e, t) {
    let {
      role: n = "group"
    } = e, {
      panelProps: o,
      panelRef: s
    } = (0, f.useContext)(h), {
      isFocusVisible: l,
      focusProps: p
    } = (0, a.F)({
      within: true
    }), _ = (0, i.aX)({
      ...e,
      defaultClassName: "react-aria-DisclosurePanel",
      values: {
        isFocusVisibleWithin: l
      }
    }), m = (0, c.z)(e, {
      global: true
    });
    return f.createElement("div", {
      ...(0, u.d)(m, _, o, p),
      ref: (0, d.l)(t, s),
      role: n,
      "data-focus-visible-within": l || true
    }, f.createElement(i.zt, {
      values: [
        [r.b, null]
      ]
    }, e.children))
  })