/** Chunk was on web.js **/
/** chunk id: 475158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk579995 = require("./579995.js"),
  Chunk658346 = require("./658346.js"),
  Chunk222957 = require("./222957.js"),
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
    p = true === f ? c : f,
    _ = e.referenceElement,
    m = e.onFirstUpdate,
    h = e.innerRef,
    g = e.children,
    E = r.useContext(i.C8),
    b = r.useState(null),
    y = b[0],
    O = b[1],
    v = r.useState(null),
    S = v[0],
    I = v[1];
  r.useEffect(function() {
    (0, a.k$)(h, y)
  }, [h, y]);
  var T = r.useMemo(function() {
      return {
        placement: n,
        strategy: d,
        onFirstUpdate: m,
        modifiers: [].concat(p, [{
          name: "arrow",
          enabled: null != S,
          options: {
            element: S
          }
        }])
      }
    }, [n, d, m, p, S]),
    A = (0, o.D)(_ || E, y, T),
    C = A.state,
    N = A.styles,
    P = A.forceUpdate,
    R = A.update,
    w = r.useMemo(function() {
      return {
        ref: O,
        style: N.popper,
        placement: C ? C.placement : n,
        hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
        isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
        arrowProps: {
          style: N.arrow,
          ref: I
        },
        forceUpdate: P || s,
        update: R || l
      }
    }, [O, I, n, C, N, R, P]);
  return (0, a.$p)(g)(w)
}