/** Chunk was on 12236 **/
/** chunk id: 80718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let b = e => {
  let {
    application: t,
    reportId: n
  } = e, [b, _] = r.useState(false), g = (0, i.bG)([u.default], () => u.default.getNewestTokenForApplication(t.id));
  r.useEffect(() => {
    null != g && _(true)
  }, [g]);
  let x = r.useRef(false);
  r.useEffect(() => {
    x.current || (a.A.fetch(), x.current = true)
  }, []);
  let h = (0, i.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
    v = r.useCallback(() => {
      if (_(false), d.Ay.trackWithMetadata(m.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == g) return;
      a.A.delete(g.id);
      let e = h.get(t.id);
      null != e && o.A.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, g, h, n]);
  return null == t ? null : (0, l.jsx)(c.PQ, {
    title: p.intl.string(p.t.ygG62M),
    description: p.intl.string(p.t.S51EKg),
    buttonText: b ? p.intl.string(p.t.xXpoGV) : p.intl.string(p.t.JsiUnL),
    buttonDisabled: !b,
    onButtonPress: v,
    buttonVariant: b ? "critical-primary" : "secondary"
  })
}