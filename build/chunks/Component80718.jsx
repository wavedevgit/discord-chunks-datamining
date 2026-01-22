/** Chunk was on 58652 **/
/** chunk id: 80718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk824552 = require("./824552.js"),
  Chunk933958 = require("./933958.js"),
  Chunk869003 = require("./869003.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk546183 = require("./546183.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let p = e => {
  let {
    application: t,
    reportId: n
  } = e, [p, x] = r.useState(false), g = (0, a.bG)([u.default], () => u.default.getNewestTokenForApplication(t.id));
  r.useEffect(() => {
    null != g && x(true)
  }, [g]);
  let f = r.useRef(false);
  r.useEffect(() => {
    f.current || (i.A.fetch(), f.current = true)
  }, []);
  let v = (0, a.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
    h = r.useCallback(() => {
      if (x(false), c.Ay.trackWithMetadata(m.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == g) return;
      i.A.delete(g.id);
      let e = v.get(t.id);
      null != e && o.A.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, g, v, n]);
  return null == t ? null : (0, l.jsx)(d.PQ, {
    title: b.intl.string(b.t.ygG62M),
    description: b.intl.string(b.t.S51EKg),
    buttonText: p ? b.intl.string(b.t.xXpoGV) : b.intl.string(b.t.JsiUnL),
    buttonDisabled: !p,
    onButtonPress: h,
    buttonVariant: p ? "critical-primary" : "secondary"
  })
}