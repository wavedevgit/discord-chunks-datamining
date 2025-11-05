/** Chunk was on 27978 **/
/** chunk id: 455502, original params: e,t,n (module,exports,require) **/
"use strict";
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

function f(e) {
  n.g.location.assign(e)
}

function _(e) {
  let {
    location: t,
    transitionTo: n = f
  } = e, [s, _] = i.useState("submitting"), x = i.useRef(true);
  (0, o.ZP)(() => {
    (0, h.e)("verify_email");
    let e = (0, c.Z)(t);
    if (null == e) return void _("failed");
    (async () => {
      try {
        let t = await a.Z.verify(e);
        _("succeeded"), x.current = t
      } catch (e) {
        _("failed")
      }
    })()
  });
  let E = i.useCallback(() => {
      n(m.Z5c.LOGIN, {
        source: "verify_email"
      })
    }, [n]),
    v = i.useCallback(() => {
      g.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: x.current
      }), (0, d.Z)("verify_email")
    }, []);
  return "failed" === s ? (0, r.jsx)(u.Z, {
    title: p.intl.string(p.t["PCgG3+"]),
    subtitle: p.intl.string(p.t.tQpeA3),
    buttonText: p.intl.string(p.t.dKhVQN),
    onButtonClick: E
  }) : "succeeded" === s ? (0, r.jsx)(u.Z, {
    title: p.intl.string(p.t["dAfGb+"]),
    buttonText: p.intl.string(p.t["uJWIj/"]),
    onButtonClick: v,
    image: (0, r.jsx)(l.Om, {
      alt: p.intl.string(p.t["dAfGb+"])
    })
  }) : (0, r.jsx)(u.Z, {
    title: p.intl.string(p.t["0c8+5n"]),
    subtitle: p.intl.string(p.t.ULTCBE),
    loading: true
  })
}
Chunk442837.ZP.initialize()