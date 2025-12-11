/** Chunk was on 54844 **/
/** chunk id: 805746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
let p = e => {
  let {
    application: t,
    reportId: n
  } = e, [p, g] = l.useState(false), f = (0, i.e7)([u.default], () => u.default.getNewestTokenForApplication(t.id));
  l.useEffect(() => {
    null != f && g(true)
  }, [f]);
  let h = l.useRef(false);
  l.useEffect(() => {
    h.current || (a.Z.fetch(), h.current = true)
  }, []);
  let x = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
    v = l.useCallback(() => {
      if (g(false), d.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == f) return;
      a.Z.delete(f.id);
      let e = x.get(t.id);
      null != e && o.Z.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, f, x, n]);
  return null == t ? null : (0, r.jsx)(c.JZ, {
    title: b.intl.string(b.t.ygG62M),
    description: b.intl.string(b.t.S51EKg),
    buttonText: p ? b.intl.string(b.t.xXpoGV) : b.intl.string(b.t.JsiUnL),
    buttonDisabled: !p,
    onButtonPress: v,
    buttonVariant: p ? "critical-primary" : "secondary"
  })
}