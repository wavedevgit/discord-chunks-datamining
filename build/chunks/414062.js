/** Chunk was on 20941 **/
/** chunk id: 414062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk155718 = require("./155718.js"),
  Chunk31717 = require("./31717.js"),
  Chunk522602 = require("./522602.js"),
  Chunk207963 = require("./207963.jsx");

function u(e) {
  let t = (0, c.jc)();
  a()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
  let n = t.channelId;
  a()(null != n, "useFileUploadComponentState must be used inside a channel");
  let {
    state: l,
    executeStateUpdate: u,
    error: d
  } = t.useComponentState(e), m = r.useMemo(() => (null == l ? true : l.type) === i.I5.FILE_UPLOAD ? l.uploadIds : [], [l]), f = o.A.getUploads(n, s.C.InteractionModal), p = r.useMemo(() => m.map(e => f.find(t => t.id === e)).filter(e => null != e), [m, f]), h = r.useCallback(e => u({
    type: i.I5.FILE_UPLOAD,
    uploadIds: e
  }), [u]);
  return r.useEffect(() => {
    m.length > p.length && h(m.filter(e => p.some(t => t.id === e)))
  }, [m, p, h]), {
    uploadIds: m,
    setUploadIds: h,
    currentUploads: p,
    error: d
  }
}