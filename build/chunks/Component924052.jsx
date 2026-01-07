/** Chunk was on web.js **/
/** chunk id: 924052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cu: () => d,
  Ri: () => u,
  Tx: () => c
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk88658 = require("./88658.js"),
  Chunk981631 = require("./981631.js");
let c = Chunk473749.createContext(true);

function u(e) {
  let {
    children: t
  } = e, n = i.useRef(a.$x), [u, d] = i.useState(false), f = i.useCallback(e => {
    var t;
    d(null != (t = null == e ? true : e.some(e => {
      var t;
      return e.showNotice() && !(null == (t = e.canCloseEarly) ? true : t.call(e))
    })) && t), n.current = a.$x
  }, []), p = i.useCallback(e => {
    if (u) {
      (0, s.Aj)({
        duration: 300,
        intensity: n.current
      }), n.current = Math.min(n.current + a.d7, a.w6), o.S.dispatch(l.CkL.EMPHASIZE_NOTICE);
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