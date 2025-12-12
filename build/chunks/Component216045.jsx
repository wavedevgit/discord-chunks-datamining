/** Chunk was on web.js **/
/** chunk id: 216045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk809206 = require("./809206.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk475977 = require("./475977.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk53691 = require("./53691.jsx"),
  Chunk267717 = require("./267717.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk296810 = require("./296810.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk610794 = require("./610794.jsx"),
  Chunk935147 = require("./935147.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk246946 = require("./246946.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk413182 = require("./413182.js"),
  Chunk695346 = require("./695346.js"),
  Chunk265159 = require("./265159.jsx"),
  Chunk532495 = require("./532495.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391371 = require("./391371.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = V(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function H() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return a()(null != module, "UserSettingsProfileCustomization: user cannot be undefined"), module
    }),
    n = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    o = (0, Chunk442837.cj)([Chunk25990.Z], () => Chunk25990.Z.getAllPending()),
    {
      pendingBio: U,
      pendingAvatar: Z,
      pendingNameplate: V
    } = Chunk512722,
    H = B(Chunk512722, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
    Y = (0, Chunk643879.SD)({
      userId: exports.id,
      image: Z
    }),
    W = (0, Chunk150039.Ys)({
      pendingValue: V,
      userValue: null == exports || null == (e = exports.collectibles) ? true : module.nameplate
    }),
    K = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.showNotice()),
    z = Chunk695346.dN.useSetting() && null != U ? Chunk957730.ZP.parse(true, U).content : U,
    q = Chunk74538.ZP.canUsePremiumProfileCustomization(exports),
    {
      analyticsLocations: Q,
      newestAnalyticsLocation: X
    } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS_USER_PROFILE);
  Chunk473749.useEffect(() => () => Chunk570140.Z.wait(Chunk809206.W3), []);
  let [J, $] = Chunk473749.useState(false), {
    showRedesign: ee
  } = Chunk413182.b.useExperiment({
    location: "profile customization"
  }), et = !q, en = Chunk473749.useRef(null);
  return require ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : (0, Chunk54381.jsxs)(Chunk906732.Gt, {
    value: Q,
    children: [(0, Chunk54381.jsx)(Chunk475977.Z, {}), (0, Chunk54381.jsx)(Chunk296810.Z, {
      profilePreview: (0, Chunk54381.jsx)(Chunk678135.Z, F(G({
        user: exports,
        canUsePremiumCustomization: q,
        onUpsellClick: Chunk265159.Z,
        pendingBio: z
      }, H), {
        pendingAvatar: Y
      })),
      nameplatePreview: (0, Chunk54381.jsx)(Chunk566697.Z, F(G({
        user: exports,
        nameplate: W
      }, H), {
        className: null == W ? Chunk391371.nameplatePreviewPlaceholder : true,
        isHighlighted: true
      })),
      children: (0, Chunk54381.jsx)(Chunk532495.Z, {})
    }), ee && (0, Chunk54381.jsx)(Chunk610794.Z, {}), (0, Chunk54381.jsx)(Chunk622535.$, {
      innerRef: en,
      onChange: e => $(e),
      threshold: .25,
      active: et,
      children: (0, Chunk54381.jsx)("div", {
        ref: en,
        children: (0, Chunk54381.jsx)(Chunk935147.Z, {
          user: exports,
          shouldShow: et,
          isVisible: J
        })
      })
    }), et && !K && (0, Chunk54381.jsx)(Chunk53691.p, {
      className: Chunk391371.floatingNitroUpsell,
      showUpsell: et && !J,
      text: Chunk388032.intl.format(Chunk388032.t.TmfgI2, {
        onClick: () => (0, Chunk267717.y)({
          analyticsSource: X
        })
      }),
      textVariant: "heading-md/medium",
      button: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "expressive",
        onClick: () => {
          var e;
          Chunk626135.default.track(Chunk981631.rMx.TRY_IT_OUT_PRESET_CLICKED, {
            cta_variant: "floating_action_button"
          }), null == en || null == (e = en.current) || module.scrollIntoView({
            behavior: "smooth"
          })
        },
        text: Chunk388032.intl.string(Chunk388032.t.uw9zI7),
        icon: Chunk481060.SrA
      })
    })]
  })
}