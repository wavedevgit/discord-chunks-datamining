/** Chunk was on 86142 **/
/** chunk id: 420382, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    location: t,
    transitionTo: s = p.pX
  } = e, [a, A] = i.useState("submitting");

  function x() {
    return "Android" === l().os.family || "iOS" === l().os.family ? null : (0, r.jsx)(o.Button, {
      text: f.intl.string(f.t.dKhVQN),
      fullWidth: true,
      onClick: () => s(m.BVt.LOGIN, {
        source: "authorizeIPAdress"
      })
    })
  }
  return ((0, u.Ay)(() => {
    (0, g.d)("authorize_ip");
    let e = (0, d.A)(t);
    null == e ? A("failed") : (async () => {
      try {
        await c.A.authorizeIPAddress(e), A("succeeded")
      } catch (e) {
        A("failed")
      }
    })()
  }), "failed" === a) ? (0, r.jsxs)(h.Ay, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(792009),
      className: _.SX
    }), (0, r.jsx)(h.hE, {
      className: _.QB,
      children: f.intl.string(f.t["f/54az"])
    }), (0, r.jsx)(h.tK, {
      className: _.C2,
      children: f.intl.string(f.t.i3ehMr)
    }), x()]
  }) : "succeeded" === a ? (0, r.jsxs)(h.Ay, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(841406),
      className: _.SX
    }), (0, r.jsx)(h.hE, {
      className: _.QB,
      children: f.intl.string(f.t.iG0SlK)
    }), (0, r.jsx)(h.tK, {
      className: _.C2,
      children: f.intl.string(f.t["Elv+qt"])
    }), x()]
  }) : (0, r.jsxs)(h.Ay, {
    children: [(0, r.jsx)(h.CK, {}), (0, r.jsx)(h.hE, {
      children: f.intl.string(f.t["9exy+V"])
    })]
  })
}
Chunk311907.Ay.initialize()