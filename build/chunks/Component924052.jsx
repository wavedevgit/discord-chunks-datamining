/** Chunk was on 76210 **/
/** chunk id: 924052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cu: () => c,
  Ri: () => a
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let u = Chunk647438.createContext(true);

function a(e) {
  let {
    children: t
  } = e, n = i.useRef(r.$x), [a, c] = i.useState(false), d = i.useCallback(e => {
    var t;
    c(null != (t = null == e ? true : e.some(e => {
      var t;
      return e.showNotice() && !(null == (t = e.canCloseEarly) ? true : t.call(e))
    })) && t), n.current = r.$x
  }, []), f = i.useCallback(e => {
    if (a) {
      s.S.dispatch(o.CkL.SHAKE_APP, {
        duration: 300,
        intensity: n.current
      }), n.current = Math.min(n.current + r.d7, r.w6), s.S.dispatch(o.CkL.EMPHASIZE_NOTICE);
      return
    }
    e()
  }, [a]), g = i.useMemo(() => ({
    navigateWithValidation: f,
    showNotice: a,
    handleStoreUpdate: d
  }), [f, a, d]);
  return (0, l.jsx)(u.Provider, {
    value: g,
    children: t
  })
}

function c() {
  let e = Chunk647438.useContext(u);
  if (null == module) throw Error("useNoticeContext must be used within a NoticeProvider");
  return module
}