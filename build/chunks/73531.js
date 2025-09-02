/** Chunk was on web.js **/
/** chunk id: 73531, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk525938 = require("./525938.js"),
  Chunk755976 = require("./755976.js"),
  Chunk472590 = require("./472590.js"),
  s = function() {},
  l = function() {
    return Promise.resolve(null)
  },
  c = [];

function u(e) {
  var t = e.placement,
    n = true === t ? "bottom" : t,
    u = e.strategy,
    d = true === u ? "absolute" : u,
    f = e.modifiers,
    _ = true === f ? c : f,
    p = e.referenceElement,
    h = e.onFirstUpdate,
    m = e.innerRef,
    g = e.children,
    E = r.useContext(i.C8),
    b = r.useState(null),
    y = b[0],
    O = b[1],
    v = r.useState(null),
    I = v[0],
    S = v[1];
  r.useEffect(function() {
    (0, a.k$)(m, y)
  }, [m, y]);
  var T = r.useMemo(function() {
      return {
        placement: n,
        strategy: d,
        onFirstUpdate: h,
        modifiers: [].concat(_, [{
          name: "arrow",
          enabled: null != I,
          options: {
            element: I
          }
        }])
      }
    }, [n, d, h, _, I]),
    A = (0, o.D)(p || E, y, T),
    C = A.state,
    N = A.styles,
    R = A.forceUpdate,
    P = A.update,
    w = r.useMemo(function() {
      return {
        ref: O,
        style: N.popper,
        placement: C ? C.placement : n,
        hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
        isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
        arrowProps: {
          style: N.arrow,
          ref: S
        },
        forceUpdate: R || s,
        update: P || l
      }
    }, [O, S, n, C, N, P, R]);
  return (0, a.$p)(g)(w)
}