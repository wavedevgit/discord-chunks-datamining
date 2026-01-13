/** Chunk was on 27978 **/
/** chunk id: 455502, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function p(e) {
  n.g.location.assign(e)
}

function x(e) {
  let {
    location: t,
    transitionTo: n = p
  } = e, [s, x] = i.useState("submitting"), _ = i.useRef(true);
  (0, o.ZP)(() => {
    (0, h.e)("verify_email");
    let e = (0, c.Z)(t);
    if (null == e) return void x("failed");
    (async () => {
      try {
        let t = await l.Z.verify(e);
        x("succeeded"), _.current = t
      } catch (e) {
        x("failed")
      }
    })()
  });
  let E = i.useCallback(() => {
      n(g.Z5c.LOGIN, {
        source: "verify_email"
      })
    }, [n]),
    v = i.useCallback(() => {
      f.default.track(g.rMx.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: _.current
      }), (0, d.Z)("verify_email")
    }, []);
  return "failed" === s ? (0, r.jsx)(u.Z, {
    title: m.intl.string(m.t["PCgG3+"]),
    subtitle: m.intl.string(m.t.tQpeA3),
    buttonText: m.intl.string(m.t.dKhVQN),
    onButtonClick: E
  }) : "succeeded" === s ? (0, r.jsx)(u.Z, {
    title: m.intl.string(m.t["dAfGb+"]),
    buttonText: m.intl.string(m.t["uJWIj/"]),
    onButtonClick: v,
    image: (0, r.jsx)(a.dQ$, {
      alt: m.intl.string(m.t["dAfGb+"])
    })
  }) : (0, r.jsx)(u.Z, {
    title: m.intl.string(m.t["0c8+5n"]),
    subtitle: m.intl.string(m.t.ULTCBE),
    loading: true
  })
}
Chunk442837.ZP.initialize()