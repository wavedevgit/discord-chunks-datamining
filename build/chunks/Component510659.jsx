/** Chunk was on web.js **/
/** chunk id: 510659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $m: () => d,
  NJ: () => u,
  Xo: () => _,
  yi: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk846519 = require("./846519.js"),
  Chunk810097 = require("./810097.jsx");
let c = Chunk73800.createContext(true);

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
  let [e, t] = Chunk73800.useState(null), [n, r] = Chunk73800.useState(null), [a, o] = Chunk73800.useState(null), [c, u] = Chunk73800.useState(Chunk73800.createRef()), d = Chunk73800.useCallback(e => {
    t(e.interactionType), r(e.interactionSource), o(e.interactionSourceId)
  }, []), f = Chunk73800.useCallback(e => {
    u(e)
  }, []), _ = Chunk73800.useCallback(() => {
    d({
      interactionType: null,
      interactionSource: null,
      interactionSourceId: null
    })
  }, [d]), [p, h] = Chunk73800.useState(false), [m, g] = Chunk73800.useState(null), [E] = Chunk73800.useState(new Chunk846519.V7), b = Chunk73800.useCallback(e => {
    g(e), h(true), null === e ? E.stop() : E.start(l._1, () => h(false))
  }, [E]);
  return Chunk73800.useEffect(() => {
    E.stop()
  }, [E]), Chunk73800.useMemo(() => ({
    interactionType: module,
    interactionSource: require,
    interactionSourceId: Chunk512722,
    onInteraction: d,
    setInteractionToast: b,
    resetInteraction: _,
    showInteractionToast: p,
    interactionTypeSent: m,
    interactionPopoutTargetRef: c,
    onInteractionPopoutTargetRefChange: f
  }), [d, b, require, Chunk512722, p, module, m, _, c, f])
}

function f() {
  return Chunk73800.useContext(c)
}

function _() {
  let e = f();
  return o()(null != module, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), module
}