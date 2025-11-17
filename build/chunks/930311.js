/** Chunk was on 61342 **/
/** chunk id: 930311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => a
}), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk894694 = require("./894694.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  return l.useMemo(() => {
    var t, n, l, a;
    if (null != e.name && "" !== e.name) return "";
    if ((null == (t = e.decision) ? true : t.signal) != null) {
      let t = null == (n = e.decision) ? true : n.signal;
      switch (t.type) {
        case r.Bs.GAME_EVENT:
          return null != (a = null != (l = t.description) ? l : t.title) ? a : i.intl.string(i.t.Cyxddp);
        case r.Bs.PHRASE:
          return '"'.concat(t.text, '"')
      }
    }
    return i.intl.string(i.t.Cyxddp)
  }, [e.name, e.decision])
}