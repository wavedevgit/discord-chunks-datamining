/** Chunk was on 49559 **/
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
  } = t.useComponentState(e), p = r.useMemo(() => (null == l ? true : l.type) === i.I5.FILE_UPLOAD ? l.uploadIds : [], [l]), m = s.A.getUploads(n, o.C.InteractionModal), f = r.useMemo(() => p.map(e => m.find(t => t.id === e)).filter(e => null != e), [p, m]), O = r.useCallback(e => u({
    type: i.I5.FILE_UPLOAD,
    uploadIds: e
  }), [u]);
  return r.useEffect(() => {
    p.length > f.length && O(p.filter(e => f.some(t => t.id === e)))
  }, [p, f, O]), {
    uploadIds: p,
    setUploadIds: O,
    currentUploads: f,
    error: d
  }
}