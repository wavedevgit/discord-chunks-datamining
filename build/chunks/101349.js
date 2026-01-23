/** Chunk was on web.js **/
/** chunk id: 101349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk554352 = require("./554352.js"),
  Chunk418034 = require("./418034.js"),
  Chunk542362 = require("./542362.js"),
  o = function() {},
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
    h = e.onFirstUpdate,
    m = e.innerRef,
    g = e.children,
    E = r.useContext(i.kr),
    y = r.useState(null),
    b = y[0],
    O = y[1],
    v = r.useState(null),
    A = v[0],
    I = v[1];
  r.useEffect(function() {
    (0, a.cZ)(m, b)
  }, [m, b]);
  var S = r.useMemo(function() {
      return {
        placement: n,
        strategy: d,
        onFirstUpdate: h,
        modifiers: [].concat(p, [{
          name: "arrow",
          enabled: null != A,
          options: {
            element: A
          }
        }])
      }
    }, [n, d, h, p, A]),
    T = (0, s.E)(_ || E, b, S),
    C = T.state,
    N = T.styles,
    w = T.forceUpdate,
    R = T.update,
    P = r.useMemo(function() {
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
        forceUpdate: w || o,
        update: R || l
      }
    }, [O, I, n, C, N, R, w]);
  return (0, a.vq)(g)(P)
}