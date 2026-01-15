/** Chunk was on 22979 **/
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
  (0, u.mw)();
  let _ = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
    S = p.L1.useSetting(),
    E = (0, r.e7)([m.Z], () => m.Z.theme),
    T = S.backgroundGradientPresetId,
    O = (0, r.e7)([c.Z], () => c.Z.purchases),
    N = (0, d.Ad)(O),
    P = (0, d.jT)(O),
    w = null == _ || null == (e = _.avatarDecoration) ? true : e.skuId,
    I = null == _ || null == (n = _.collectibles) || null == (t = n.nameplate) ? true : t.skuId,
    k = null != w && null != (v = N.find(e => e.skuId === w)) ? v : null,
    R = null != I && null != (j = P.find(e => e.skuId === I)) ? j : null,
    A = (0, r.e7)([o.Z], () => o.Z.getProduct(null == k ? true : k.skuId)),
    D = (0, r.e7)([o.Z], () => o.Z.getProduct(null == R ? true : R.skuId)),
    Z = (0, r.e7)([s.Z], () => s.Z.fontSize),
    L = (0, r.e7)([s.Z], () => s.Z.messageGroupSpacing),
    M = p.YC.useSetting();
  return (0, f.ub)(), (0, a.jsxs)("div", {
    className: b.container,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: "Randomize customization settings"
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        children: "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state."
      }), (0, a.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Theme",
        onClick: f.aB
      }), (0, a.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Collectibles",
        onClick: f.th
      }), (0, a.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: "Randomize Appearance Settings",
        onClick: f._Y
      })]
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: "Current Settings"
      }), (0, a.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Theme: ", E]
      }), (0, a.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Client Theme ID:", " ", null != T ? null == (g = x.qt[T]) ? true : g.getName() : "None"]
      }), (0, a.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Avatar Decoration: ", null != (y = null == A ? true : A.name) ? y : "None"]
      }), (0, a.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Nameplate: ", null != (C = null == D ? true : D.name) ? C : "None"]
      }), (0, a.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Font Size: ", Z, "px"]
      }), (0, a.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Message Spacing: ", L]
      }), (0, a.jsxs)(l.Text, {
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