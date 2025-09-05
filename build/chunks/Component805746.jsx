/** Chunk was on 55777 **/
/** chunk id: 805746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, [p, f] = i.useState(false), g = (0, a.e7)([u.Z], () => u.Z.getNewestTokenForApplication(t.id));
  i.useEffect(() => {
    null != g && f(true)
  }, [g]);
  let b = i.useRef(false);
  i.useEffect(() => {
    b.current || (l.Z.fetch(), b.current = true)
  }, []);
  let x = (0, a.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
    h = i.useCallback(() => {
      if (f(false), c.ZP.trackWithMetadata(_.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == g) return;
      l.Z.delete(g.id);
      let e = x.get(t.id);
      null != e && s.Z.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, g, x, n]);
  return null == t ? null : (0, r.jsx)(d.JZ, {
    title: m.intl.string(m.t.ygG62N),
    description: m.intl.string(m.t.S51EKi),
    buttonText: p ? m.intl.string(m.t.xXpoGR) : m.intl.string(m.t.JsiUnJ),
    buttonDisabled: !p,
    onButtonPress: h,
    buttonVariant: p ? "critical-primary" : "secondary"
  })
}