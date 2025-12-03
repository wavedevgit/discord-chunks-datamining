/** Chunk was on 54844 **/
/** chunk id: 805746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
let g = e => {
  let {
    application: t,
    reportId: n
  } = e, [g, _] = i.useState(false), h = (0, l.e7)([u.default], () => u.default.getNewestTokenForApplication(t.id));
  i.useEffect(() => {
    null != h && _(true)
  }, [h]);
  let x = i.useRef(false);
  i.useEffect(() => {
    x.current || (a.Z.fetch(), x.current = true)
  }, []);
  let b = (0, l.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
    f = i.useCallback(() => {
      if (_(false), d.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == h) return;
      a.Z.delete(h.id);
      let e = b.get(t.id);
      null != e && o.Z.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, h, b, n]);
  return null == t ? null : (0, r.jsx)(c.JZ, {
    title: p.intl.string(p.t.ygG62M),
    description: p.intl.string(p.t.S51EKg),
    buttonText: g ? p.intl.string(p.t.xXpoGV) : p.intl.string(p.t.JsiUnL),
    buttonDisabled: !g,
    onButtonPress: f,
    buttonVariant: g ? "critical-primary" : "secondary"
  })
}