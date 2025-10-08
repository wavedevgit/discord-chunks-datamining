/** Chunk was on 75685 **/
/** chunk id: 924052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cu: () => d,
  Ri: () => u
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk88658 = require("./88658.js"),
  Chunk981631 = require("./981631.js");
let c = Chunk647438.createContext(true);

function u(e) {
  let {
    children: t
  } = e, n = l.useRef(o.$x), [u, d] = l.useState(false), f = l.useCallback(e => {
    var t;
    d(null != (t = null == e ? true : e.some(e => {
      var t;
      return e.showNotice() && !(null == (t = e.canCloseEarly) ? true : t.call(e))
    })) && t), n.current = o.$x
  }, []), m = l.useCallback(e => {
    if (u) {
      (0, a.Aj)({
        duration: 300,
        intensity: n.current
      }), n.current = Math.min(n.current + o.d7, o.w6), i.S.dispatch(s.CkL.EMPHASIZE_NOTICE);
      return
    }
    e()
  }, [u]), b = l.useMemo(() => ({
    navigateWithValidation: m,
    showNotice: u,
    handleStoreUpdate: f
  }), [m, u, f]);
  return (0, r.jsx)(c.Provider, {
    value: b,
    children: t
  })
}

function d() {
  let e = Chunk647438.useContext(c);
  if (null == module) throw Error("useNoticeContext must be used within a NoticeProvider");
  return module
}