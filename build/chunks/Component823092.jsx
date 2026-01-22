/** Chunk was on web.js **/
/** chunk id: 823092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L_: () => d,
  gl: () => c,
  ms: () => u
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk83257 = require("./83257.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk115063 = require("./115063.js"),
  Chunk652215 = require("./652215.js");
let c = Chunk64700.createContext(true);

function u(e) {
  let {
    children: t
  } = e, n = i.useRef(a.n3), [u, d] = i.useState(false), f = i.useCallback(e => {
    var t;
    d(null != (t = null == e ? true : e.some(e => {
      var t;
      return e.showNotice() && !(null == (t = e.canCloseEarly) ? true : t.call(e))
    })) && t), n.current = a.n3
  }, []), p = i.useCallback(e => {
    if (u) {
      (0, o.fO)({
        duration: 300,
        intensity: n.current
      }), n.current = Math.min(n.current + a.pe, a.OZ), s._.dispatch(l.jej.EMPHASIZE_NOTICE);
      return
    }
    e()
  }, [u]), _ = i.useMemo(() => ({
    navigateWithValidation: p,
    showNotice: u,
    handleStoreUpdate: f
  }), [p, u, f]);
  return (0, r.jsx)(c.Provider, {
    value: _,
    children: t
  })
}

function d() {
  let e = i.useContext(c);
  if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
  return e
}