/** Chunk was on 65599 **/
/** chunk id: 189244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk993408 = require("./993408.js"),
  Chunk841702 = require("./841702.js"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk287809 = require("./287809.js"),
  Chunk850730 = require("./850730.js"),
  Chunk385803 = require("./385803.js"),
  Chunk607335 = require("./607335.js");

function b() {
  var e, t, n, b, v, j, _, y;
  (0, u.Bf)();
  let A = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
    C = p.eh.useSetting(),
    S = (0, l.bG)([m.A], () => m.A.theme),
    O = C.backgroundGradientPresetId,
    E = (0, l.bG)([c.A], () => c.A.purchases),
    T = (0, d.x9)(E),
    N = (0, d.$W)(E),
    w = null == A || null == (v = A.avatarDecoration) ? true : v.skuId,
    I = null == A || null == (_ = A.collectibles) || null == (j = _.nameplate) ? true : j.skuId,
    k = null != w && null != (e = T.find(e => e.skuId === w)) ? e : null,
    P = null != I && null != (t = N.find(e => e.skuId === I)) ? t : null,
    R = (0, l.bG)([o.A], () => o.A.getProduct(null == k ? true : k.skuId)),
    D = (0, l.bG)([o.A], () => o.A.getProduct(null == P ? true : P.skuId)),
    M = (0, l.bG)([s.A], () => s.A.fontSize),
    L = (0, l.bG)([s.A], () => s.A.messageGroupSpacing),
    U = p.Xi.useSetting();
  return (0, x.DB)(), (0, a.jsxs)("div", {
    className: f.kL,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: "Randomize customization settings"
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state."
      }), (0, a.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Theme",
        onClick: x.t0
      }), (0, a.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Collectibles",
        onClick: x.ZL
      }), (0, a.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Appearance Settings",
        onClick: x.ln
      })]
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: "Current Settings"
      }), (0, a.jsxs)(i.Text, {
        variant: "text-md/normal",
        children: ["Theme: ", S]
      }), (0, a.jsxs)(i.Text, {
        variant: "text-md/normal",
        children: ["Client Theme ID:", " ", null != O ? null == (y = g.ag[O]) ? true : y.getName() : "None"]
      }), (0, a.jsxs)(i.Text, {
        variant: "text-md/normal",
        children: ["Avatar Decoration: ", null != (n = null == R ? true : R.name) ? n : "None"]
      }), (0, a.jsxs)(i.Text, {
        variant: "text-md/normal",
        children: ["Nameplate: ", null != (b = null == D ? true : D.name) ? b : "None"]
      }), (0, a.jsxs)(i.Text, {
        variant: "text-md/normal",
        children: ["Font Size: ", M, "px"]
      }), (0, a.jsxs)(i.Text, {
        variant: "text-md/normal",
        children: ["Message Spacing: ", L]
      }), (0, a.jsxs)(i.Text, {
        variant: "text-md/normal",
        children: ["UI Density: ", U, " (", function(e) {
          switch (e) {
            case r.NS.COMPACT:
              return "Compact";
            case r.NS.COZY:
              return "Cozy";
            case r.NS.DEFAULT:
              return "Default";
            case r.NS.RESPONSIVE:
              return "Responsive";
            default:
              return "Unknown"
          }
        }(U), ")"]
      })]
    })]
  })
}