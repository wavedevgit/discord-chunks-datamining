/** Chunk was on 27978 **/
/** chunk id: 264873, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk525654 = require("./525654.js"),
  s = require.n(Chunk525654),
  Chunk442837 = require("./442837.js"),
  Chunk893776 = require("./893776.js"),
  Chunk493773 = require("./493773.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function _(e) {
  let {
    location: t,
    transitionTo: l = h.uL
  } = e, [o, _] = i.useState("submitting");

  function x() {
    return "Android" === s().os.family || "iOS" === s().os.family ? null : (0, r.jsx)(d.zx, {
      onClick: () => l(p.Z5c.LOGIN, {
        source: "authorizeIPAdress"
      }),
      children: m.intl.string(m.t.dKhVQE)
    })
  }
  return ((0, c.ZP)(() => {
    (0, g.e)("authorize_ip");
    let e = (0, u.Z)(t);
    if (null == e) return void _("failed");
    (async () => {
      try {
        await a.Z.authorizeIPAddress(e), _("succeeded")
      } catch (e) {
        _("failed")
      }
    })()
  }), "failed" === o) ? (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(262467),
      className: f.marginBottom20
    }), (0, r.jsx)(d.Dx, {
      className: f.marginBottom8,
      children: m.intl.string(m.t["f/54a2"])
    }), (0, r.jsx)(d.DK, {
      className: f.marginBottom40,
      children: m.intl.string(m.t.i3ehMj)
    }), x()]
  }) : "succeeded" === o ? (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(640356),
      className: f.marginBottom20
    }), (0, r.jsx)(d.Dx, {
      className: f.marginBottom8,
      children: m.intl.string(m.t.iG0SlJ)
    }), (0, r.jsx)(d.DK, {
      className: f.marginBottom40,
      children: m.intl.string(m.t["Elv+qq"])
    }), x()]
  }) : (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, {
      children: m.intl.string(m.t["9exy+f"])
    })]
  })
}
Chunk442837.ZP.initialize()