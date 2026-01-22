/** Chunk was on 22477 **/
/** chunk id: 189244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g() {
  var e, t, n, g, v, j, y, _;
  (0, u.Bf)();
  let A = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
    C = p.eh.useSetting(),
    S = (0, l.bG)([m.A], () => m.A.theme),
    O = C.backgroundGradientPresetId,
    E = (0, l.bG)([c.A], () => c.A.purchases),
    N = (0, d.x9)(E),
    T = (0, d.$W)(E),
    I = null == A || null == (v = A.avatarDecoration) ? true : v.skuId,
    k = null == A || null == (y = A.collectibles) || null == (j = y.nameplate) ? true : j.skuId,
    w = null != I && null != (e = N.find(e => e.skuId === I)) ? e : null,
    P = null != k && null != (t = T.find(e => e.skuId === k)) ? t : null,
    R = (0, l.bG)([o.A], () => o.A.getProduct(null == w ? true : w.skuId)),
    D = (0, l.bG)([o.A], () => o.A.getProduct(null == P ? true : P.skuId)),
    M = (0, l.bG)([s.A], () => s.A.fontSize),
    L = (0, l.bG)([s.A], () => s.A.messageGroupSpacing),
    U = p.Xi.useSetting();
  return (0, f.DB)(), (0, a.jsxs)("div", {
    className: b.kL,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: "Randomize customization settings"
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state."
      }), (0, a.jsx)(r.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Theme",
        onClick: f.t0
      }), (0, a.jsx)(r.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Collectibles",
        onClick: f.ZL
      }), (0, a.jsx)(r.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Appearance Settings",
        onClick: f.ln
      })]
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: "Current Settings"
      }), (0, a.jsxs)(r.Text, {
        variant: "text-md/normal",
        children: ["Theme: ", S]
      }), (0, a.jsxs)(r.Text, {
        variant: "text-md/normal",
        children: ["Client Theme ID:", " ", null != O ? null == (_ = x.ag[O]) ? true : _.getName() : "None"]
      }), (0, a.jsxs)(r.Text, {
        variant: "text-md/normal",
        children: ["Avatar Decoration: ", null != (n = null == R ? true : R.name) ? n : "None"]
      }), (0, a.jsxs)(r.Text, {
        variant: "text-md/normal",
        children: ["Nameplate: ", null != (g = null == D ? true : D.name) ? g : "None"]
      }), (0, a.jsxs)(r.Text, {
        variant: "text-md/normal",
        children: ["Font Size: ", M, "px"]
      }), (0, a.jsxs)(r.Text, {
        variant: "text-md/normal",
        children: ["Message Spacing: ", L]
      }), (0, a.jsxs)(r.Text, {
        variant: "text-md/normal",
        children: ["UI Density: ", U, " (", function(e) {
          switch (e) {
            case i.NS.COMPACT:
              return "Compact";
            case i.NS.COZY:
              return "Cozy";
            case i.NS.DEFAULT:
              return "Default";
            case i.NS.RESPONSIVE:
              return "Responsive";
            default:
              return "Unknown"
          }
        }(U), ")"]
      })]
    })]
  })
}