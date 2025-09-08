/** Chunk was on 27978 **/
/** chunk id: 223543, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk893776 = require("./893776.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk108427 = require("./108427.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function d(e) {
  let {
    location: t
  } = e, [d, h] = i.useState("submitting");
  return (i.useEffect(() => {
    (0, o.e)("authorize_payment");
    let e = (0, s.Z)(t);
    if (null == e) return void h("failed");
    (async () => {
      try {
        await l.Z.authorizePayment(e), h("succeeded")
      } catch (e) {
        h("failed")
      }
    })()
  }, [t]), "failed" === d) ? (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(375673),
      className: u.marginBottom20
    }), (0, r.jsx)(a.Dx, {
      className: u.marginBottom8,
      children: c.intl.string(c.t.GHRpub)
    }), (0, r.jsx)(a.DK, {
      className: u.marginBottom40,
      children: c.intl.string(c.t["1nO55u"])
    })]
  }) : "succeeded" === d ? (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(73962),
      className: u.marginBottom20
    }), (0, r.jsx)(a.Dx, {
      className: u.marginBottom8,
      children: c.intl.string(c.t["ihHX5+"])
    }), (0, r.jsx)(a.DK, {
      className: u.marginBottom40,
      children: c.intl.string(c.t.pGPCv7)
    })]
  }) : (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)(a.Hh, {}), (0, r.jsx)(a.Dx, {
      children: c.intl.string(c.t.T3vC7u)
    })]
  })
}