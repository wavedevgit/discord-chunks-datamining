/** Chunk was on web.js **/
/** chunk id: 355314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk424218 = require("./424218.js"),
  Chunk403182 = require("./403182.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk117474 = require("./117474.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function I(e) {
  var {
    onClose: t,
    handleLearnMore: n
  } = e, b = O(e, ["onClose", "handleLearnMore"]);
  let v = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
    I = (0, a.e7)([s.Z], () => s.Z.theme),
    S = (0, a.e7)([l.Z], () => l.Z.getGuildId()),
    T = I === m.BRd.LIGHT ? "light" : "dark",
    A = (0, r.jsx)("img", {
      className: E.art,
      alt: "File Upload Nitro Perk",
      src: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_".concat(T, "_v2.png")
    }),
    C = i.useMemo(() => {
      let e = _.ZP.getUserMaxFileSize(v);
      return (0, u.BU)(e / 1024, {
        useKibibytes: true
      })
    }, [v]),
    N = (0, d.iL)({
      guildId: S,
      onClick: () => {
        window.open(f.Z.getArticleURL(m.BhN.NITRO_FAQ), "_blank")
      }
    }),
    R = (0, r.jsx)("div", {
      className: E.body,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: N
      })
    });
  return (0, r.jsx)(p.Z, y({
    artElement: A,
    artContainerClassName: E.artContainer,
    enableArtBoxShadow: false,
    type: h.cd.UPLOAD_ERROR_UPSELL,
    title: g.intl.string(g.t["9C+41g"]),
    body: R,
    context: g.intl.formatToPlainString(g.t.q5fTZp, {
      maxSize: C
    }),
    glowUp: N,
    analyticsLocation: {
      section: m.jXE.FILE_UPLOAD_POPOUT
    },
    onClose: t,
    subscriptionTier: h.Si.TIER_2,
    secondaryCTA: g.intl.string(g.t.ZnqyZ2),
    onSecondaryClick: n,
    showEnhancedUpsell: true
  }, b))
}