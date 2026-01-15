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
  o = require.n(Chunk512722),
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
  let [e, t] = i.useState(null), [n, r] = i.useState(null), [a, o] = i.useState(null), [c, u] = i.useState(i.createRef()), d = i.useCallback(e => {
    t(e.interactionType), r(e.interactionSource), o(e.interactionSourceId)
  }, []), f = i.useCallback(e => {
    u(e)
  }, []), p = i.useCallback(() => {
    d({
      interactionType: null,
      interactionSource: null,
      interactionSourceId: null
    })
  }, [d]), [_, h] = i.useState(false), [m, g] = i.useState(null), [E] = i.useState(new s.V7), b = i.useCallback(e => {
    g(e), h(true), null === e ? E.stop() : E.start(l._1, () => h(false))
  }, [E]);
  return i.useEffect(() => {
    E.stop()
  }, [E]), i.useMemo(() => ({
    interactionType: e,
    interactionSource: n,
    interactionSourceId: a,
    onInteraction: d,
    setInteractionToast: b,
    resetInteraction: p,
    showInteractionToast: _,
    interactionTypeSent: m,
    interactionPopoutTargetRef: c,
    onInteractionPopoutTargetRefChange: f
  }), [d, b, n, a, _, e, m, p, c, f])
}

function f() {
  return i.useContext(c)
}

function p() {
  let e = f();
  return o()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
}