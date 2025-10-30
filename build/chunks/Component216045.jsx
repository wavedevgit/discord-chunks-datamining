/** Chunk was on web.js **/
/** chunk id: 216045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk809206 = require("./809206.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk475977 = require("./475977.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk53691 = require("./53691.jsx"),
  Chunk267717 = require("./267717.jsx"),
  Chunk296810 = require("./296810.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk610794 = require("./610794.jsx"),
  Chunk935147 = require("./935147.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk373230 = require("./373230.js"),
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
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk950106 = require("./950106.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e, t) {
  if (null == e) return {};
  var n, r, i = K(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function K(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function z() {
  let e = (0, Chunk373230.T)({
      location: "UserSettingsProfileCustomization"
    }),
    t = (0, Chunk266454.Nj)(Chunk704215.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
    n = module && !exports;
  Chunk647438.useEffect(() => {
    require && (0, Chunk266454.Q3)(Chunk704215.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, {
      forceTrack: true
    })
  }, [require])
}

function q() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.DISPLAY_NAME_STYLES_NEW_BADGE]), n = module === Chunk704215.z.DISPLAY_NAME_STYLES_NEW_BADGE;
  Chunk647438.useEffect(() => {
    require && exports(Chunk921944.L.TAKE_ACTION)
  }, [require, exports])
}

function X() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return o()(null != module, "UserSettingsProfileCustomization: user cannot be undefined"), module
    }),
    t = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    n = (0, Chunk442837.cj)([Chunk25990.Z], () => Chunk25990.Z.getAllPending()),
    {
      pendingBio: a,
      pendingAvatar: l,
      pendingNameplate: g
    } = require,
    E = W(require, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
    N = (0, Chunk643879.SD)({
      userId: module.id,
      image: Chunk704215
    }),
    G = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.showNotice()),
    F = Chunk695346.dN.useSetting() && null != Chunk512722 ? Chunk957730.ZP.parse(true, Chunk512722).content : Chunk512722,
    H = Chunk74538.ZP.canUsePremiumProfileCustomization(module),
    {
      analyticsLocations: K,
      newestAnalyticsLocation: X
    } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS_USER_PROFILE);
  z(), q(), Chunk647438.useEffect(() => () => Chunk570140.Z.wait(Chunk809206.W3), []);
  let [Q, J] = Chunk647438.useState(false), {
    showRedesign: $
  } = Chunk413182.b.useExperiment({
    location: "profile customization"
  }), ee = !H, et = Chunk647438.useRef(null);
  return exports ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (0, Chunk951288.jsxs)(Chunk906732.Gt, {
    value: K,
    children: [(0, Chunk951288.jsx)(Chunk475977.Z, {}), (0, Chunk951288.jsx)(Chunk296810.Z, {
      profilePreview: (0, Chunk951288.jsx)(Chunk678135.Z, Y(V({
        user: module,
        canUsePremiumCustomization: H,
        onUpsellClick: Chunk265159.Z,
        pendingBio: F
      }, Chunk243778), {
        pendingAvatar: Chunk373230
      })),
      nameplatePreview: (0, Chunk951288.jsx)(Chunk566697.Z, Y(V({
        user: module,
        nameplate: Chunk266454,
        nameplateData: true === Chunk266454 ? module.nameplate : true
      }, Chunk243778), {
        className: Chunk950106.nameplatePreview,
        isHighlighted: true
      })),
      children: (0, Chunk951288.jsx)(Chunk532495.Z, {})
    }), $ && (0, Chunk951288.jsx)(Chunk610794.Z, {}), (0, Chunk951288.jsx)(Chunk622535.$, {
      innerRef: et,
      onChange: e => J(e),
      threshold: .25,
      active: ee,
      children: (0, Chunk951288.jsx)("div", {
        ref: et,
        children: (0, Chunk951288.jsx)(Chunk935147.Z, {
          user: module,
          shouldShow: ee,
          isVisible: Q
        })
      })
    }), ee && !Chunk921944 && (0, Chunk951288.jsx)(Chunk53691.p, {
      className: Chunk950106.floatingNitroUpsell,
      showUpsell: ee && !Q,
      text: Chunk388032.intl.format(Chunk388032.t.TmfgI2, {
        onClick: () => (0, Chunk267717.y)({
          analyticsSource: X
        })
      }),
      textVariant: "heading-md/medium",
      button: (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "expressive",
        onClick: () => {
          var e;
          Chunk626135.default.track(Chunk981631.rMx.TRY_IT_OUT_PRESET_CLICKED, {
            cta_variant: "floating_action_button"
          }), null == et || null == (e = et.current) || module.scrollIntoView({
            behavior: "smooth"
          })
        },
        text: Chunk388032.intl.string(Chunk388032.t.uw9zI7),
        icon: Chunk481060.SrA
      })
    })]
  })
}