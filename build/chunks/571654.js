/** Chunk was on 64935 **/
/** chunk id: 571654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => s,
  z: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk580630 = require("./580630.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  return r.useMemo(() => {
    if (null == e) return;
    let t = null != e.role_id,
      n = e.attachments_count > 0;
    return t && n ? l.intl.string(l.t.ih4QMU) : t ? l.intl.string(l.t.o9xphc) : n ? l.intl.string(l.t.DWYJua) : true
  }, [e])
}

function s(e) {
  return r.useMemo(() => {
    if ((null == e ? true : e.price) == null) return;
    let {
      amount: t,
      currency: n
    } = e.price;
    return (0, i.$g)(t, n)
  }, [e])
}