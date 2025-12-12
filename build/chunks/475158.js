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
    (0, o.k$)(h, y)
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
    C = (0, a.D)(_ || E, y, T),
    A = C.state,
    N = C.styles,
    P = C.forceUpdate,
    R = C.update,
    w = r.useMemo(function() {
      return {
        ref: O,
        style: N.popper,
        placement: A ? A.placement : n,
        hasPopperEscaped: A && A.modifiersData.hide ? A.modifiersData.hide.hasPopperEscaped : null,
        isReferenceHidden: A && A.modifiersData.hide ? A.modifiersData.hide.isReferenceHidden : null,
        arrowProps: {
          style: N.arrow,
          ref: I
        },
        forceUpdate: P || s,
        update: R || l
      }
    }, [O, I, n, A, N, R, P]);
  return (0, o.$p)(g)(w)
}