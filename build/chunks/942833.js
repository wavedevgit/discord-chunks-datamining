/** Chunk was on 66866 **/
/** chunk id: 942833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => a,
  k: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  return r.useMemo(() => {
    if (null == e) return;
    let t = null != e.role_id,
      n = e.attachments_count > 0;
    return t && n ? l.intl.string(l.t.ih4QMT) : t ? l.intl.string(l.t.o9xphY) : n ? l.intl.string(l.t.DWYJub) : true
  }, [e])
}

function o(e) {
  return r.useMemo(() => {
    if ((null == e ? true : e.price) == null) return;
    let {
      amount: t,
      currency: n
    } = e.price;
    return (0, i.T4)(t, n)
  }, [e])
}