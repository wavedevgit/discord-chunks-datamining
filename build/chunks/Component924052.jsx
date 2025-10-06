/** Chunk was on 75685 **/
/** chunk id: 924052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cu: () => u,
  Ri: () => c
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let s = Chunk647438.createContext(true);

function c(e) {
  let {
    children: t
  } = e, n = l.useRef(o.$x), [c, u] = l.useState(false), d = l.useCallback(e => {
    var t;
    u(null != (t = null == e ? true : e.some(e => {
      var t;
      return e.showNotice() && !(null == (t = e.canCloseEarly) ? true : t.call(e))
    })) && t), n.current = o.$x
  }, []), f = l.useCallback(e => {
    if (c) {
      i.S.dispatch(a.CkL.SHAKE_APP, {
        duration: 300,
        intensity: n.current
      }), n.current = Math.min(n.current + o.d7, o.w6), i.S.dispatch(a.CkL.EMPHASIZE_NOTICE);
      return
    }
    e()
  }, [c]), m = l.useMemo(() => ({
    navigateWithValidation: f,
    showNotice: c,
    handleStoreUpdate: d
  }), [f, c, d]);
  return (0, r.jsx)(s.Provider, {
    value: m,
    children: t
  })
}

function u() {
  let e = Chunk647438.useContext(s);
  if (null == module) throw Error("useNoticeContext must be used within a NoticeProvider");
  return module
}