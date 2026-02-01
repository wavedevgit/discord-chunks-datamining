/** Chunk was on 9207 **/
/** chunk id: 823092, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L_: () => u,
  gl: () => c,
  ms: () => d
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk83257 = require("./83257.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk115063 = require("./115063.js"),
  Chunk652215 = require("./652215.js");
let c = Chunk64700.createContext(true);

function d(e) {
  let {
    children: t
  } = e, n = i.useRef(l.n3), [d, u] = i.useState(false), _ = i.useCallback(e => {
    var t;
    u(null != (t = null == e ? true : e.some(e => {
      var t;
      return e.showNotice() && !(null == (t = e.canCloseEarly) ? true : t.call(e))
    })) && t), n.current = l.n3
  }, []), p = i.useCallback(e => {
    if (d) {
      (0, a.fO)({
        duration: 300,
        intensity: n.current
      }), n.current = Math.min(n.current + l.pe, l.OZ), s._.dispatch(o.jej.EMPHASIZE_NOTICE);
      return
    }
    e()
  }, [d]), m = i.useMemo(() => ({
    navigateWithValidation: p,
    showNotice: d,
    handleStoreUpdate: _
  }), [p, d, _]);
  return (0, r.jsx)(c.Provider, {
    value: m,
    children: t
  })
}

function u() {
  let e = i.useContext(c);
  if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
  return e
}