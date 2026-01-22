/** Chunk was on web.js **/
/** chunk id: 414062, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    state: i,
    executeStateUpdate: u,
    error: d
  } = t.useComponentState(e), f = r.useMemo(() => (null == i ? true : i.type) === s.I5.FILE_UPLOAD ? i.uploadIds : [], [i]), p = l.A.getUploads(n, o.C.InteractionModal), _ = r.useMemo(() => f.map(e => p.find(t => t.id === e)).filter(e => null != e), [f, p]), h = r.useCallback(e => u({
    type: s.I5.FILE_UPLOAD,
    uploadIds: e
  }), [u]);
  return r.useEffect(() => {
    f.length > _.length && h(f.filter(e => _.some(t => t.id === e)))
  }, [f, _, h]), {
    uploadIds: f,
    setUploadIds: h,
    currentUploads: _,
    error: d
  }
}