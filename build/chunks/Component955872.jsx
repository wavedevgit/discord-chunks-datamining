/** Chunk was on 9207 **/
/** chunk id: 955872, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H
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
  Chunk836602 = require("./836602.js"),
  Chunk299947 = require("./299947.js"),
  Chunk814390 = require("./814390.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk897358 = require("./897358.js"),
  Chunk606532 = require("./606532.jsx"),
  Chunk161290 = require("./161290.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk166378 = require("./166378.js");

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H() {
  var e;
  let t = (0, a.bG)([v.default], () => {
      let e = v.default.getCurrentUser();
      return s()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
    }),
    n = (0, a.bG)([j.A], () => j.A.hidePersonalInformation),
    l = (0, a.cf)([I.A], () => B(k({}, I.A.getPendingChanges()), {
      showNotice: I.A.showNotice()
    })),
    {
      pendingBio: H,
      pendingAvatar: V,
      pendingNameplate: F,
      showNotice: Y
    } = l,
    W = function(e, t) {
      if (null == e) return {};
      var n, r, i, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.getOwnPropertyNames(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
          return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(l, ["pendingBio", "pendingAvatar", "pendingNameplate", "showNotice"]),
    K = (0, T.V7)({
      userId: t.id,
      image: V
    }),
    z = (0, E.lw)({
      pendingValue: F,
      userValue: null == t || null == (e = t.collectibles) ? true : e.nameplate
    }),
    Z = (0, y.A)() && null != H ? A.Ay.parse(true, H).content : H,
    X = R.Ay.canUsePremiumProfileCustomization(t),
    {
      analyticsLocations: q,
      newestAnalyticsLocation: J
    } = (0, m.Ay)(p.A.USER_SETTINGS_USER_PROFILE);
  i.useEffect(() => () => d.h.wait(u.IM), []);
  let [Q, $] = i.useState(false), {
    showRedesign: ee
  } = D.X.useExperiment({
    location: "profile customization"
  }), {
    updatedButtonEnabled: et
  } = (0, N.W)("UserSettingsProfileCustomization"), en = !X, er = i.useRef(null);
  return n ? (0, r.jsx)(_.A, {}) : (0, r.jsxs)(m.f5, {
    value: q,
    children: [(0, r.jsx)(g.A, {}), (0, r.jsx)(O.A, {
      profilePreview: (0, r.jsx)(x.A, B(k({
        user: t,
        canUsePremiumCustomization: X,
        onUpsellClick: L.A,
        pendingBio: Z
      }, W), {
        pendingAvatar: K
      })),
      nameplatePreview: (0, r.jsx)(f.A, B(k({
        user: t,
        nameplate: z
      }, W), {
        className: null == z ? U.t : true,
        isHighlighted: true
      })),
      children: (0, r.jsx)(w.A, {})
    }), ee && (0, r.jsx)(C.A, {}), (0, r.jsx)(o.L, {
      innerRef: er,
      onChange: e => $(e),
      threshold: .25,
      active: en,
      children: (0, r.jsx)("div", {
        ref: er,
        children: (0, r.jsx)(S.A, {
          user: t,
          shouldShow: en,
          isVisible: Q
        })
      })
    }), en && !Y && (0, r.jsx)(b.d, {
      className: U.E,
      showUpsell: en && !Q,
      text: G.intl.format(G.t.TmfgI2, {
        onClick: () => (0, h.K)({
          analyticsSource: J
        })
      }),
      textVariant: "heading-md/medium",
      button: (0, r.jsx)(c.Button, {
        variant: et ? "overlay-primary" : "expressive",
        onClick: () => {
          var e;
          P.default.track(M.HAw.TRY_IT_OUT_PRESET_CLICKED, {
            cta_variant: "floating_action_button"
          }), null == er || null == (e = er.current) || e.scrollIntoView({
            behavior: "smooth"
          })
        },
        text: G.intl.string(G.t.uw9zI7),
        icon: c.tvc
      })
    })]
  })
}