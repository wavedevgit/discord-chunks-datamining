/** Chunk was on 27978 **/
/** chunk id: 886806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk970683 = require("./970683.js"),
  Chunk893776 = require("./893776.js"),
  Chunk493773 = require("./493773.js"),
  Chunk129293 = require("./129293.js"),
  Chunk80206 = require("./80206.jsx"),
  Chunk17894 = require("./17894.js"),
  Chunk108427 = require("./108427.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  n.g.location.assign(e)
}

function _(e) {
  let {
    location: t,
    transitionTo: n = m
  } = e, [l, _] = i.useState("submitting"), x = i.useRef(true);
  (0, a.ZP)(() => {
    (0, h.e)("verify_email");
    let e = (0, c.Z)(t);
    if (null == e) return void _("failed");
    (async () => {
      try {
        let t = await s.Z.verify(e);
        _("succeeded"), x.current = t
      } catch (e) {
        _("failed")
      }
    })()
  });
  let v = i.useCallback(() => {
      n(p.Z5c.LOGIN, {
        source: "verify_email"
      })
    }, [n]),
    E = i.useCallback(() => {
      f.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: x.current
      }), (0, d.Z)("verify_email")
    }, []);
  return "failed" === l ? (0, r.jsx)(u.Z, {
    title: g.intl.string(g.t.PCgG39),
    subtitle: g.intl.string(g.t.tQpeAw),
    buttonText: g.intl.string(g.t.dKhVQE),
    onButtonClick: v
  }) : "succeeded" === l ? (0, r.jsx)(u.Z, {
    title: g.intl.string(g.t.dAfGb2),
    buttonText: g.intl.string(g.t.uJWIj4),
    onButtonClick: E,
    image: (0, r.jsx)(o.Om, {
      alt: g.intl.string(g.t.dAfGb2)
    })
  }) : (0, r.jsx)(u.Z, {
    title: g.intl.string(g.t["0c8+5u"]),
    subtitle: g.intl.string(g.t.ULTCBA),
    loading: true
  })
}
Chunk442837.ZP.initialize()