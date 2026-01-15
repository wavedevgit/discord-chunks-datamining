/** Chunk was on web.js **/
/** chunk id: 216045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk113334 = require("./113334.js"),
  Chunk246946 = require("./246946.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk413182 = require("./413182.js"),
  Chunk265159 = require("./265159.jsx"),
  Chunk532495 = require("./532495.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk581571 = require("./581571.js");

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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function H() {
  var e;
  let t = (0, s.e7)([P.default], () => {
      let e = P.default.getCurrentUser();
      return o()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
    }),
    n = (0, s.e7)([A.Z], () => A.Z.hidePersonalInformation),
    a = (0, s.cj)([N.Z], () => N.Z.getAllPending()),
    {
      pendingBio: U,
      pendingAvatar: Z,
      pendingNameplate: V
    } = a,
    H = B(a, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
    Y = (0, T.SD)({
      userId: t.id,
      image: Z
    }),
    W = (0, y.Ys)({
      pendingValue: V,
      userValue: null == t || null == (e = t.collectibles) ? true : e.nameplate
    }),
    K = (0, s.e7)([N.Z], () => N.Z.showNotice()),
    z = (0, C.Z)() && null != U ? m.ZP.parse(true, U).content : U,
    q = R.ZP.canUsePremiumProfileCustomization(t),
    {
      analyticsLocations: Q,
      newestAnalyticsLocation: X
    } = (0, _.ZP)(p.Z.USER_SETTINGS_USER_PROFILE);
  i.useEffect(() => () => u.Z.wait(d.W3), []);
  let [J, $] = i.useState(false), {
    showRedesign: ee
  } = D.b.useExperiment({
    location: "profile customization"
  }), et = !q, en = i.useRef(null);
  return n ? (0, r.jsx)(f.Z, {}) : (0, r.jsxs)(_.Gt, {
    value: Q,
    children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(O.Z, {
      profilePreview: (0, r.jsx)(v.Z, F(G({
        user: t,
        canUsePremiumCustomization: q,
        onUpsellClick: x.Z,
        pendingBio: z
      }, H), {
        pendingAvatar: Y
      })),
      nameplatePreview: (0, r.jsx)(g.Z, F(G({
        user: t,
        nameplate: W
      }, H), {
        className: null == W ? k.nameplatePreviewPlaceholder : true,
        isHighlighted: true
      })),
      children: (0, r.jsx)(L.Z, {})
    }), ee && (0, r.jsx)(S.Z, {}), (0, r.jsx)(l.$, {
      innerRef: en,
      onChange: e => $(e),
      threshold: .25,
      active: et,
      children: (0, r.jsx)("div", {
        ref: en,
        children: (0, r.jsx)(I.Z, {
          user: t,
          shouldShow: et,
          isVisible: J
        })
      })
    }), et && !K && (0, r.jsx)(E.p, {
      className: k.floatingNitroUpsell,
      showUpsell: et && !J,
      text: M.intl.format(M.t.TmfgI2, {
        onClick: () => (0, b.y)({
          analyticsSource: X
        })
      }),
      textVariant: "heading-md/medium",
      button: (0, r.jsx)(c.Button, {
        variant: "expressive",
        onClick: () => {
          var e;
          w.default.track(j.rMx.TRY_IT_OUT_PRESET_CLICKED, {
            cta_variant: "floating_action_button"
          }), null == en || null == (e = en.current) || e.scrollIntoView({
            behavior: "smooth"
          })
        },
        text: M.intl.string(M.t.uw9zI7),
        icon: c.SrA
      })
    })]
  })
}