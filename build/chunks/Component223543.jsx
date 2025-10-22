/** Chunk was on 27978 **/
/** chunk id: 223543, original params: e,t,n (module,exports,require) **/
"use strict";
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
  Chunk10198 = require("./10198.js");

function d(e) {
  let {
    location: t
  } = e, [d, h] = i.useState("submitting");
  return (i.useEffect(() => {
    (0, o.e)("authorize_payment");
    let e = (0, l.Z)(t);
    if (null == e) return void h("failed");
    (async () => {
      try {
        await s.Z.authorizePayment(e), h("succeeded")
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
      children: c.intl.string(c.t.GHRpue)
    }), (0, r.jsx)(a.DK, {
      className: u.marginBottom40,
      children: c.intl.string(c.t["1nO55v"])
    })]
  }) : "succeeded" === d ? (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(73962),
      className: u.marginBottom20
    }), (0, r.jsx)(a.Dx, {
      className: u.marginBottom8,
      children: c.intl.string(c.t.ihHX53)
    }), (0, r.jsx)(a.DK, {
      className: u.marginBottom40,
      children: c.intl.string(c.t["pGPCv+"])
    })]
  }) : (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)(a.Hh, {}), (0, r.jsx)(a.Dx, {
      children: c.intl.string(c.t.T3vC7n)
    })]
  })
}