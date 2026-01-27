/** Chunk was on web.js **/
/** chunk id: 679492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hl: () => u,
  NR: () => f,
  Pq: () => p,
  fC: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk451988 = require("./451988.js"),
  Chunk8925 = require("./8925.jsx");
let c = Chunk64700.createContext(true);

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
  }, [d]), [_, h] = i.useState(false), [m, g] = i.useState(null), [E] = i.useState(new s.Ep), y = i.useCallback(e => {
    g(e), h(true), null === e ? E.stop() : E.start(l.ME, () => h(false))
  }, [E]);
  return i.useEffect(() => {
    E.stop()
  }, [E]), i.useMemo(() => ({
    interactionType: e,
    interactionSource: n,
    interactionSourceId: a,
    onInteraction: d,
    setInteractionToast: y,
    resetInteraction: p,
    showInteractionToast: _,
    interactionTypeSent: m,
    interactionPopoutTargetRef: c,
    onInteractionPopoutTargetRefChange: f
  }), [d, y, n, a, _, e, m, p, c, f])
}

function f() {
  return i.useContext(c)
}

function p() {
  let e = f();
  return o()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
}