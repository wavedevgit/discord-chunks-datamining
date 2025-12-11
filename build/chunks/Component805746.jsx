/** Chunk was on 54844 **/
/** chunk id: 805746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk881998 = require("./881998.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let b = e => {
  let {
    application: t,
    reportId: n
  } = e, [b, g] = l.useState(false), f = (0, i.e7)([u.default], () => u.default.getNewestTokenForApplication(t.id));
  l.useEffect(() => {
    null != f && g(true)
  }, [f]);
  let x = l.useRef(false);
  l.useEffect(() => {
    x.current || (a.Z.fetch(), x.current = true)
  }, []);
  let h = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
    v = l.useCallback(() => {
      if (g(false), d.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == f) return;
      a.Z.delete(f.id);
      let e = h.get(t.id);
      null != e && o.Z.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, f, h, n]);
  return null == t ? null : (0, r.jsx)(c.JZ, {
    title: p.intl.string(p.t.ygG62M),
    description: p.intl.string(p.t.S51EKg),
    buttonText: b ? p.intl.string(p.t.xXpoGV) : p.intl.string(p.t.JsiUnL),
    buttonDisabled: !b,
    onButtonPress: v,
    buttonVariant: b ? "critical-primary" : "secondary"
  })
}