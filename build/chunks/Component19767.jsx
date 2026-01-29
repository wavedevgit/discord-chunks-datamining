/** Chunk was on 87557 **/
/** chunk id: 19767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk53705 = require("./53705.js"),
  Chunk154323 = require("./154323.js"),
  Chunk607335 = require("./607335.js");

function d() {
  let e = (0, r.bG)([o.A], () => o.A.allWithDescriptions(), [], r.My),
    t = l.useMemo(() => e.map(e => {
      let [t, n, l] = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.dOG, {
          label: l,
          description: t,
          checked: n,
          onChange: e => (0, s.L)(t, e)
        }, t), (0, a.jsx)(i.cGx, {
          gap: 16
        })]
      })
    }), [e]);
  return (0, a.jsxs)("div", {
    className: c.kL,
    children: [(0, a.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: c.x6,
      children: (0, a.jsx)(i.Button, {
        variant: "primary",
        text: "Clear all",
        onClick: s.$,
        fullWidth: true
      })
    }), (0, a.jsx)("div", {
      className: c.vu,
      children: t
    })]
  })
}