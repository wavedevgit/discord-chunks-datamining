/** Chunk was on web.js **/
/** chunk id: 955872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk631670 = require("./631670.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429619 = require("./429619.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk202639 = require("./202639.jsx"),
  Chunk407217 = require("./407217.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk884546 = require("./884546.jsx"),
  Chunk287070 = require("./287070.jsx"),
  Chunk158358 = require("./158358.jsx"),
  Chunk196291 = require("./196291.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk814390 = require("./814390.js"),
  Chunk351906 = require("./351906.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk897358 = require("./897358.js"),
  Chunk606532 = require("./606532.jsx"),
  Chunk161290 = require("./161290.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk166378 = require("./166378.js");

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

function V(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = H(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function H(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function Y() {
  var e;
  let t = (0, o.bG)([R.default], () => {
      let e = R.default.getCurrentUser();
      return s()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
    }),
    n = (0, o.bG)([C.A], () => C.A.hidePersonalInformation),
    a = (0, o.cf)([N.A], () => N.A.getAllPending()),
    {
      pendingBio: U,
      pendingAvatar: V,
      pendingNameplate: H
    } = a,
    Y = B(a, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
    W = (0, S.V7)({
      userId: t.id,
      image: V
    }),
    K = (0, b.lw)({
      pendingValue: H,
      userValue: null == t || null == (e = t.collectibles) ? true : e.nameplate
    }),
    z = (0, o.bG)([N.A], () => N.A.showNotice()),
    q = (0, T.A)() && null != U ? m.Ay.parse(true, U).content : U,
    X = P.Ay.canUsePremiumProfileCustomization(t),
    {
      analyticsLocations: Z,
      newestAnalyticsLocation: Q
    } = (0, _.Ay)(p.A.USER_SETTINGS_USER_PROFILE);
  i.useEffect(() => () => u.h.wait(d.IM), []);
  let [$, J] = i.useState(false), {
    showRedesign: ee
  } = D.X.useExperiment({
    location: "profile customization"
  }), et = !X, en = i.useRef(null);
  return n ? (0, r.jsx)(f.A, {}) : (0, r.jsxs)(_.f5, {
    value: Z,
    children: [(0, r.jsx)(h.A, {}), (0, r.jsx)(O.A, {
      profilePreview: (0, r.jsx)(v.A, F(G({
        user: t,
        canUsePremiumCustomization: X,
        onUpsellClick: x.A,
        pendingBio: q
      }, Y), {
        pendingAvatar: W
      })),
      nameplatePreview: (0, r.jsx)(g.A, F(G({
        user: t,
        nameplate: K
      }, Y), {
        className: null == K ? k.t : true,
        isHighlighted: true
      })),
      children: (0, r.jsx)(L.A, {})
    }), ee && (0, r.jsx)(A.A, {}), (0, r.jsx)(l.L, {
      innerRef: en,
      onChange: e => J(e),
      threshold: .25,
      active: et,
      children: (0, r.jsx)("div", {
        ref: en,
        children: (0, r.jsx)(I.A, {
          user: t,
          shouldShow: et,
          isVisible: $
        })
      })
    }), et && !z && (0, r.jsx)(E.d, {
      className: k.E,
      showUpsell: et && !$,
      text: M.intl.format(M.t.TmfgI2, {
        onClick: () => (0, y.K)({
          analyticsSource: Q
        })
      }),
      textVariant: "heading-md/medium",
      button: (0, r.jsx)(c.Button, {
        variant: "expressive",
        onClick: () => {
          var e;
          w.default.track(j.HAw.TRY_IT_OUT_PRESET_CLICKED, {
            cta_variant: "floating_action_button"
          }), null == en || null == (e = en.current) || e.scrollIntoView({
            behavior: "smooth"
          })
        },
        text: M.intl.string(M.t.uw9zI7),
        icon: c.tvc
      })
    })]
  })
}