/** Chunk was on 27978 **/
/** chunk id: 264873, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk525654 = require("./525654.js"),
  l = require.n(Chunk525654),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk493773 = require("./493773.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function x(e) {
  let {
    location: t,
    transitionTo: s = g.uL
  } = e, [a, x] = i.useState("submitting");

  function E() {
    return "Android" === l().os.family || "iOS" === l().os.family ? null : (0, r.jsx)(o.Button, {
      text: f.intl.string(f.t.dKhVQN),
      fullWidth: true,
      onClick: () => s(p.Z5c.LOGIN, {
        source: "authorizeIPAdress"
      })
    })
  }
  return ((0, u.ZP)(() => {
    (0, m.e)("authorize_ip");
    let e = (0, d.Z)(t);
    if (null == e) return void x("failed");
    (async () => {
      try {
        await c.Z.authorizeIPAddress(e), x("succeeded")
      } catch (e) {
        x("failed")
      }
    })()
  }), "failed" === a) ? (0, r.jsxs)(h.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(262467),
      className: _.marginBottom20
    }), (0, r.jsx)(h.Dx, {
      className: _.marginBottom8,
      children: f.intl.string(f.t["f/54az"])
    }), (0, r.jsx)(h.DK, {
      className: _.marginBottom40,
      children: f.intl.string(f.t.i3ehMr)
    }), E()]
  }) : "succeeded" === a ? (0, r.jsxs)(h.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(640356),
      className: _.marginBottom20
    }), (0, r.jsx)(h.Dx, {
      className: _.marginBottom8,
      children: f.intl.string(f.t.iG0SlK)
    }), (0, r.jsx)(h.DK, {
      className: _.marginBottom40,
      children: f.intl.string(f.t["Elv+qt"])
    }), E()]
  }) : (0, r.jsxs)(h.ZP, {
    children: [(0, r.jsx)(h.Hh, {}), (0, r.jsx)(h.Dx, {
      children: f.intl.string(f.t["9exy+V"])
    })]
  })
}
Chunk442837.ZP.initialize()