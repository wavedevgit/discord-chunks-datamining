/** Chunk was on web.js **/
/** chunk id: 997351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544028 = require("./544028.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk255438 = require("./255438.js"),
  Chunk453771 = require("./453771.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk950503 = require("./950503.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = v(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function A(e) {
  let {
    onClose: t,
    handleLearnMore: n
  } = e, y = O(e, ["onClose", "handleLearnMore"]), v = (0, a.bG)([c.default], () => c.default.getCurrentUser()), A = (0, a.bG)([o.A], () => o.A.theme), I = (0, a.bG)([l.A], () => l.A.getGuildId()), S = A === m.NJ8.LIGHT ? "light" : "dark", T = (0, r.jsx)("img", {
    className: E.Qw,
    alt: "File Upload Nitro Perk",
    src: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_".concat(S, "_v2.png")
  }), C = i.useMemo(() => {
    let e = p.Ay.getUserMaxFileSize(v);
    return (0, u.Xq)(e / 1024, {
      useKibibytes: true
    })
  }, [v]), N = (0, d.Iu)({
    guildId: I,
    onClick: () => {
      window.open(f.A.getArticleURL(m.MVz.NITRO_FAQ), "_blank")
    }
  }), w = (0, r.jsx)("div", {
    className: E.rf,
    children: (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      children: N
    })
  });
  return (0, r.jsx)(_.A, b({
    artElement: T,
    artContainerClassName: E.JS,
    enableArtBoxShadow: false,
    type: h.e.UPLOAD_ERROR_UPSELL,
    title: g.intl.string(g.t["9C+41g"]),
    body: w,
    context: g.intl.formatToPlainString(g.t.q5fTZp, {
      maxSize: C
    }),
    glowUp: N,
    analyticsLocation: {
      section: m.JJy.FILE_UPLOAD_POPOUT
    },
    onClose: t,
    subscriptionTier: h.pe.TIER_2,
    secondaryCTA: g.intl.string(g.t.ZnqyZ2),
    onSecondaryClick: n,
    showEnhancedUpsell: true
  }, y))
}