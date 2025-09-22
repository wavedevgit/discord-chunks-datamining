/** Chunk was on 47129 **/
/** chunk id: 924052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cu: () => c,
  Ri: () => u
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let a = Chunk647438.createContext(true);

function u(e) {
  let {
    children: t
  } = e, n = i.useRef(l.$x), [u, c] = i.useState(false), d = i.useCallback(e => {
    var t;
    c(null != (t = null == e ? true : e.some(e => {
      var t;
      return e.showNotice() && !(null == (t = e.canCloseEarly) ? true : t.call(e))
    })) && t), n.current = l.$x
  }, []), f = i.useCallback(e => {
    if (u) {
      o.S.dispatch(s.CkL.SHAKE_APP, {
        duration: 300,
        intensity: n.current
      }), n.current = Math.min(n.current + l.d7, l.w6), o.S.dispatch(s.CkL.EMPHASIZE_NOTICE);
      return
    }
    e()
  }, [u]), g = i.useMemo(() => ({
    navigateWithValidation: f,
    showNotice: u,
    handleStoreUpdate: d
  }), [f, u, d]);
  return (0, r.jsx)(a.Provider, {
    value: g,
    children: t
  })
}

function c() {
  let e = Chunk647438.useContext(a);
  if (null == module) throw Error("useNoticeContext must be used within a NoticeProvider");
  return module
}