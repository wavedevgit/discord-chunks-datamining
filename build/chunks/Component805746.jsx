/** Chunk was on 65330 **/
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
  } = e, [p, f] = i.useState(false), g = (0, l.e7)([u.Z], () => u.Z.getNewestTokenForApplication(t.id));
  i.useEffect(() => {
    null != g && f(true)
  }, [g]);
  let x = i.useRef(false);
  i.useEffect(() => {
    x.current || (a.Z.fetch(), x.current = true)
  }, []);
  let b = (0, l.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
    h = i.useCallback(() => {
      if (f(false), c.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == g) return;
      a.Z.delete(g.id);
      let e = b.get(t.id);
      null != e && s.Z.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, g, b, n]);
  return null == t ? null : (0, r.jsx)(d.JZ, {
    title: _.intl.string(_.t.ygG62N),
    description: _.intl.string(_.t.S51EKi),
    buttonText: p ? _.intl.string(_.t.xXpoGR) : _.intl.string(_.t.JsiUnJ),
    buttonDisabled: !p,
    onButtonPress: h,
    buttonVariant: p ? "critical-primary" : "secondary"
  })
}