/** Chunk was on web.js **/
/** chunk id: 400235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk166842 = require("./166842.js"),
  Chunk50039 = require("./50039.js"),
  Chunk46112 = require("./46112.js"),
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
    T = v[1];
  r.useEffect(function() {
    (0, a.k$)(m, y)
  }, [m, y]);
  var S = r.useMemo(function() {
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
    A = (0, o.D)(p || E, y, S),
    N = A.state,
    C = A.styles,
    R = A.forceUpdate,
    P = A.update,
    w = r.useMemo(function() {
      return {
        ref: O,
        style: C.popper,
        placement: N ? N.placement : n,
        hasPopperEscaped: N && N.modifiersData.hide ? N.modifiersData.hide.hasPopperEscaped : null,
        isReferenceHidden: N && N.modifiersData.hide ? N.modifiersData.hide.isReferenceHidden : null,
        arrowProps: {
          style: C.arrow,
          ref: T
        },
        forceUpdate: R || s,
        update: P || l
      }
    }, [O, T, n, N, C, P, R]);
  return (0, a.$p)(g)(w)
}