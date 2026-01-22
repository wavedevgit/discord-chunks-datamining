/** Chunk was on 4918 **/
/** chunk id: 718812, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  h: () => a
}), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk372684 = require("./372684.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  return n.useMemo(() => {
    var t, l, n, a;
    if (null != e.name && "" !== e.name) return "";
    if ((null == (t = e.decision) ? true : t.signal) != null) {
      let t = null == (l = e.decision) ? true : l.signal;
      switch (t.type) {
        case r.Gy.GAME_EVENT:
          return null != (n = null != (a = t.description) ? a : t.title) ? n : i.intl.string(i.t.Cyxddp);
        case r.Gy.PHRASE:
          return '"'.concat(t.text, '"')
      }
    }
    return i.intl.string(i.t.Cyxddp)
  }, [e.name, e.decision])
}