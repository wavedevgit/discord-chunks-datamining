/** Chunk was on 27978 **/
/** chunk id: 264873, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk525654 = require("./525654.js"),
  a = require.n(Chunk525654),
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
  Chunk478411 = require("./478411.js");

function _(e) {
  let {
    location: t,
    transitionTo: s = f.uL
  } = e, [l, _] = i.useState("submitting");

  function E() {
    return "Android" === a().os.family || "iOS" === a().os.family ? null : (0, r.jsx)(o.Button, {
      text: p.intl.string(p.t.dKhVQN),
      fullWidth: true,
      onClick: () => s(m.Z5c.LOGIN, {
        source: "authorizeIPAdress"
      })
    })
  }
  return ((0, u.ZP)(() => {
    (0, g.e)("authorize_ip");
    let e = (0, d.Z)(t);
    if (null == e) return void _("failed");
    (async () => {
      try {
        await c.Z.authorizeIPAddress(e), _("succeeded")
      } catch (e) {
        _("failed")
      }
    })()
  }), "failed" === l) ? (0, r.jsxs)(h.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(262467),
      className: x.marginBottom20
    }), (0, r.jsx)(h.Dx, {
      className: x.marginBottom8,
      children: p.intl.string(p.t["f/54az"])
    }), (0, r.jsx)(h.DK, {
      className: x.marginBottom40,
      children: p.intl.string(p.t.i3ehMr)
    }), E()]
  }) : "succeeded" === l ? (0, r.jsxs)(h.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(640356),
      className: x.marginBottom20
    }), (0, r.jsx)(h.Dx, {
      className: x.marginBottom8,
      children: p.intl.string(p.t.iG0SlK)
    }), (0, r.jsx)(h.DK, {
      className: x.marginBottom40,
      children: p.intl.string(p.t["Elv+qt"])
    }), E()]
  }) : (0, r.jsxs)(h.ZP, {
    children: [(0, r.jsx)(h.Hh, {}), (0, r.jsx)(h.Dx, {
      children: p.intl.string(p.t["9exy+V"])
    })]
  })
}
Chunk442837.ZP.initialize()