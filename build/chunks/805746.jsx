/** Chunk was on 54844 **/
/** chunk id: 805746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk384275 = require("./384275.js"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk881998 = require("./881998.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let x = e => {
  let {
    application: t,
    reportId: n
  } = e, [x, _] = l.useState(false), b = (0, i.e7)([m.Z], () => m.Z.getNewestTokenForApplication(t.id));
  l.useEffect(() => {
    null != b && _(true)
  }, [b]);
  let h = l.useRef(false);
  l.useEffect(() => {
    h.current || (s.Z.fetch(), h.current = true)
  }, []);
  let f = (0, i.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
    v = l.useCallback(() => {
      if (_(false), d.ZP.trackWithMetadata(p.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
          application_id: t.id,
          report_id: n
        }), null == b) return;
      s.Z.delete(b.id);
      let e = f.get(t.id);
      null != e && c.Z.leaveActivity({
        location: e.location,
        applicationId: t.id,
        showFeedback: false
      })
    }, [t.id, b, f, n]);
  return null == t ? null : <u.ZP title={g.intl.string(g.t.ygG62N)} description={g.intl.string(g.t.S51EKi)} buttonText={x ? g.intl.string(g.t.xXpoGR) : g.intl.string(g.t.JsiUnJ)} buttonDisabled={!x} buttonColor={x ? a.zx.Colors.RED : a.zx.Colors.WHITE} buttonLook={x ? a.zx.Looks.FILLED : a.zx.Looks.LINK} onButtonPress={v} />
}