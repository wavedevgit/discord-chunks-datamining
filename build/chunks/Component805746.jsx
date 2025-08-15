/** Chunk was on 59727 **/
/** chunk id: 805746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk881998 = require("./881998.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = e => {
  let {
    application: t,
    reportId: n
  } = e, [_, g] = a.useState(false), b = (0, i.e7)([u.Z], () => u.Z.getNewestTokenForApplication(t.id));
  a.useEffect(() => {
    null != b && g(true)
  }, [b]);
  let h = a.useRef(false);
  a.useEffect(() => {
    h.current || (l.Z.fetch(), h.current = true)
  }, []);
  let x = (0, i.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
    f = a.useCallback(() => {
      if (g(false), c.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == b) return;
      l.Z.delete(b.id);
      let e = x.get(t.id);
      null != e && s.Z.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, b, x, n]);
  return null == t ? null : (0, r.jsx)(d.JZ, {
    title: p.intl.string(p.t.ygG62N),
    description: p.intl.string(p.t.S51EKi),
    buttonText: _ ? p.intl.string(p.t.xXpoGR) : p.intl.string(p.t.JsiUnJ),
    buttonDisabled: !_,
    onButtonPress: f,
    buttonVariant: _ ? "critical-primary" : "secondary"
  })
}