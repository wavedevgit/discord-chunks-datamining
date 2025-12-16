/** Chunk was on 6043 **/
/** chunk id: 107606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk223143 = require("./223143.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk176038 = require("./176038.js"),
  Chunk469115 = require("./469115.js"),
  Chunk431135 = require("./431135.js");

function g() {
  var e, t, n, g, v, j, y, C;
  (0, Chunk223143.mw)();
  let _ = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    S = Chunk695346.L1.useSetting(),
    E = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    T = S.backgroundGradientPresetId,
    O = (0, Chunk442837.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
    N = (0, Chunk884697.Ad)(O),
    w = (0, Chunk884697.jT)(O),
    P = null == _ || null == (e = _.avatarDecoration) ? true : module.skuId,
    I = null == _ || null == (n = _.collectibles) || null == (t = require.nameplate) ? true : exports.skuId,
    k = null != P && null != (v = N.find(e => e.skuId === P)) ? v : null,
    R = null != I && null != (j = w.find(e => e.skuId === I)) ? j : null,
    A = (0, Chunk442837.e7)([Chunk597688.Z], () => Chunk597688.Z.getProduct(null == k ? true : k.skuId)),
    Z = (0, Chunk442837.e7)([Chunk597688.Z], () => Chunk597688.Z.getProduct(null == R ? true : R.skuId)),
    D = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.fontSize),
    L = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.messageGroupSpacing),
    M = Chunk695346.YC.useSetting();
  return (0, Chunk176038.ub)(), (0, Chunk54381.jsxs)("div", {
    className: Chunk431135.container,
    children: [(0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Randomize customization settings"
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state."
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Theme",
        onClick: Chunk176038.aB
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Collectibles",
        onClick: Chunk176038.th
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Appearance Settings",
        onClick: Chunk176038._Y
      })]
    }), (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Current Settings"
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Theme: ", E]
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Client Theme ID:", " ", null != T ? null == (g = Chunk469115.qt[T]) ? true : g.getName() : "None"]
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Avatar Decoration: ", null != (y = null == A ? true : A.name) ? y : "None"]
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Nameplate: ", null != (C = null == Z ? true : Z.name) ? C : "None"]
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Font Size: ", D, "px"]
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Message Spacing: ", L]
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["UI Density: ", M, " (", function(e) {
          switch (e) {
            case i.Pi.COMPACT:
              return "Compact";
            case i.Pi.COZY:
              return "Cozy";
            case i.Pi.DEFAULT:
              return "Default";
            case i.Pi.RESPONSIVE:
              return "Responsive";
            default:
              return "Unknown"
          }
        }(M), ")"]
      })]
    })]
  })
}