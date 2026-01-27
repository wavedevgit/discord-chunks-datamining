/** Chunk was on 86142 **/
/** chunk id: 527567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk830215 = require("./830215.js"),
  Chunk396681 = require("./396681.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk210714 = require("./210714.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function u(e) {
  let {
    location: t
  } = e, [u, h] = i.useState("submitting");
  return (i.useEffect(() => {
    (0, o.d)("authorize_payment");
    let e = (0, l.A)(t);
    null == e ? h("failed") : (async () => {
      try {
        await s.A.authorizePayment(e), h("succeeded")
      } catch (e) {
        h("failed")
      }
    })()
  }, [t]), "failed" === u) ? (0, r.jsxs)(a.Ay, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(678985),
      className: d.SX
    }), (0, r.jsx)(a.hE, {
      className: d.QB,
      children: c.intl.string(c.t.GHRpue)
    }), (0, r.jsx)(a.tK, {
      className: d.C2,
      children: c.intl.string(c.t["1nO55v"])
    })]
  }) : "succeeded" === u ? (0, r.jsxs)(a.Ay, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(586430),
      className: d.SX
    }), (0, r.jsx)(a.hE, {
      className: d.QB,
      children: c.intl.string(c.t.ihHX53)
    }), (0, r.jsx)(a.tK, {
      className: d.C2,
      children: c.intl.string(c.t["pGPCv+"])
    })]
  }) : (0, r.jsxs)(a.Ay, {
    children: [(0, r.jsx)(a.CK, {}), (0, r.jsx)(a.hE, {
      children: c.intl.string(c.t.T3vC7n)
    })]
  })
}