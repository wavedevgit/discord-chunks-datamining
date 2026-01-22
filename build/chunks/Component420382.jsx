/** Chunk was on 86142 **/
/** chunk id: 420382, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk481613 = require("./481613.js"),
  l = require.n(Chunk481613),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk964486 = require("./964486.js"),
  Chunk396681 = require("./396681.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk210714 = require("./210714.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function x(e) {
  let {
    location: t,
    transitionTo: s = f.pX
  } = e, [a, x] = i.useState("submitting");

  function _() {
    return "Android" === l().os.family || "iOS" === l().os.family ? null : (0, r.jsx)(o.Button, {
      text: m.intl.string(m.t.dKhVQN),
      fullWidth: true,
      onClick: () => s(g.BVt.LOGIN, {
        source: "authorizeIPAdress"
      })
    })
  }
  return ((0, u.Ay)(() => {
    (0, p.d)("authorize_ip");
    let e = (0, d.A)(t);
    null == e ? x("failed") : (async () => {
      try {
        await c.A.authorizeIPAddress(e), x("succeeded")
      } catch (e) {
        x("failed")
      }
    })()
  }), "failed" === a) ? (0, r.jsxs)(h.Ay, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(792009),
      className: A.SX
    }), (0, r.jsx)(h.hE, {
      className: A.QB,
      children: m.intl.string(m.t["f/54az"])
    }), (0, r.jsx)(h.tK, {
      className: A.C2,
      children: m.intl.string(m.t.i3ehMr)
    }), _()]
  }) : "succeeded" === a ? (0, r.jsxs)(h.Ay, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(841406),
      className: A.SX
    }), (0, r.jsx)(h.hE, {
      className: A.QB,
      children: m.intl.string(m.t.iG0SlK)
    }), (0, r.jsx)(h.tK, {
      className: A.C2,
      children: m.intl.string(m.t["Elv+qt"])
    }), _()]
  }) : (0, r.jsxs)(h.Ay, {
    children: [(0, r.jsx)(h.CK, {}), (0, r.jsx)(h.hE, {
      children: m.intl.string(m.t["9exy+V"])
    })]
  })
}
Chunk311907.Ay.initialize()