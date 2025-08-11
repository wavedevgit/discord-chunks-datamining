/** Chunk was on 22988 **/
/** chunk id: 756066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk587431 = require("./587431.jsx"),
  Chunk539290 = require("./539290.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t, {
    resubmittingEnableRequest: n,
    resubmissionError: s,
    createEnableRequest: o,
    requestRejectedNoticeText: c,
    reapplyNoticeText: d,
    isApplicationPending: u
  } = e;
  if (null != s) return <i.Z>{s.getAnyErrorMessage()}</i.Z>;
  let m = null;
  return u ? m = a.intl.string(a.t.OrkTBg) : null != c ? m = c : null != d && (m = d, t = a.intl.string(a.t["YKw/NT"])), null != m ? <l.Z notice={m} ctaLabel={t} ctaLoading={n} onClick={o} /> : null
}