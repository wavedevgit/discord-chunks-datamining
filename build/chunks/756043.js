/** Chunk was on web.js **/
/** chunk id: 756043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk911969 = require("./911969.js"),
  Chunk703558 = require("./703558.js"),
  Chunk117530 = require("./117530.js"),
  Chunk970184 = require("./970184.jsx");

function u(e) {
  let t = (0, c.CJ)();
  a()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
  let n = t.channelId;
  a()(null != n, "useFileUploadComponentState must be used inside a channel");
  let {
    state: i,
    executeStateUpdate: u,
    error: d
  } = t.useComponentState(e), f = r.useMemo(() => (null == i ? true : i.type) === o.re.FILE_UPLOAD ? i.uploadIds : [], [i]), _ = l.Z.getUploads(n, s.d.InteractionModal), p = r.useMemo(() => f.map(e => _.find(t => t.id === e)).filter(e => null != e), [f, _]), h = r.useCallback(e => u({
    type: o.re.FILE_UPLOAD,
    uploadIds: e
  }), [u]);
  return r.useEffect(() => {
    f.length > p.length && h(f.filter(e => p.some(t => t.id === e)))
  }, [f, p, h]), {
    uploadIds: f,
    setUploadIds: h,
    currentUploads: p,
    error: d
  }
}