/** Chunk was on web.js **/
/** chunk id: 510659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $m: () => d,
  NJ: () => u,
  Xo: () => p,
  yi: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk846519 = require("./846519.js"),
  Chunk810097 = require("./810097.jsx");
let c = Chunk473749.createContext(true);

function u(e) {
  let {
    value: t,
    children: n
  } = e;
  return (0, r.jsx)(c.Provider, {
    value: t,
    children: n
  })
}

function d() {
  let [e, t] = Chunk473749.useState(null), [n, r] = Chunk473749.useState(null), [o, a] = Chunk473749.useState(null), [c, u] = Chunk473749.useState(Chunk473749.createRef()), d = Chunk473749.useCallback(e => {
    t(e.interactionType), r(e.interactionSource), a(e.interactionSourceId)
  }, []), f = Chunk473749.useCallback(e => {
    u(e)
  }, []), p = Chunk473749.useCallback(() => {
    d({
      interactionType: null,
      interactionSource: null,
      interactionSourceId: null
    })
  }, [d]), [_, m] = Chunk473749.useState(false), [h, g] = Chunk473749.useState(null), [E] = Chunk473749.useState(new Chunk846519.V7), b = Chunk473749.useCallback(e => {
    g(e), m(true), null === e ? E.stop() : E.start(l._1, () => m(false))
  }, [E]);
  return Chunk473749.useEffect(() => {
    E.stop()
  }, [E]), Chunk473749.useMemo(() => ({
    interactionType: module,
    interactionSource: require,
    interactionSourceId: Chunk512722,
    onInteraction: d,
    setInteractionToast: b,
    resetInteraction: p,
    showInteractionToast: _,
    interactionTypeSent: h,
    interactionPopoutTargetRef: c,
    onInteractionPopoutTargetRefChange: f
  }), [d, b, require, Chunk512722, _, module, h, p, c, f])
}

function f() {
  return Chunk473749.useContext(c)
}

function p() {
  let e = f();
  return a()(null != module, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), module
}