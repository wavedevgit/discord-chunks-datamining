/** Chunk was on 75708 **/
/** chunk id: 216045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk622535 = require("./622535.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk809206 = require("./809206.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk475977 = require("./475977.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk957730 = require("./957730.js"),
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
  Chunk775274 = require("./775274.js");

function F() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return a()(null != module, "UserSettingsProfileCustomization: user cannot be undefined"), module
    }),
    s = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    F = (0, Chunk442837.cj)([Chunk25990.Z], () => Chunk25990.Z.getAllPending()),
    {
      pendingBio: H,
      pendingAvatar: z,
      pendingNameplate: W
    } = F,
    Y = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(F, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
    K = (0, Chunk643879.SD)({
      userId: require.id,
      image: z
    }),
    q = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.showNotice()),
    X = Chunk695346.dN.useSetting() && null != H ? Chunk957730.ZP.parse(true, H).content : H,
    J = Chunk74538.ZP.canUsePremiumProfileCustomization(require),
    {
      analyticsLocations: Q,
      newestAnalyticsLocation: $
    } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS_USER_PROFILE),
    ee = (0, Chunk373230.T)({
      location: "UserSettingsProfileCustomization"
    }),
    et = (0, Chunk266454.Nj)(Chunk704215.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
    en = ee && !et;
  Chunk73800.useEffect(() => {
    en && (0, Chunk266454.Q3)(Chunk704215.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, {
      forceTrack: true
    })
  }, [en]);
  let [ei, er] = (0, Chunk243778.US)([Chunk704215.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE]), es = ei === Chunk704215.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE;
  Chunk73800.useEffect(() => {
    es && er(Chunk921944.L.TAKE_ACTION)
  }, [es, er]), Chunk73800.useEffect(() => () => Chunk570140.Z.wait(Chunk809206.W3), []);
  let [ea, el] = Chunk73800.useState(false), {
    showRedesign: eo
  } = Chunk413182.b.useExperiment({
    location: "profile customization"
  }), ec = !J, ed = Chunk73800.useRef(null);
  return Chunk512722 ? (0, Chunk255367.jsx)(Chunk497321.Z, {}) : (0, Chunk255367.jsxs)(Chunk906732.Gt, {
    value: Q,
    children: [(0, Chunk255367.jsx)(Chunk475977.Z, {}), (0, Chunk255367.jsx)(Chunk296810.Z, {
      profilePreview: (0, Chunk255367.jsx)(Chunk678135.Z, (e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        user: require,
        canUsePremiumCustomization: J,
        onUpsellClick: Chunk265159.Z,
        pendingBio: X
      }, Y), t = t = {
        pendingAvatar: K
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(exports)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), module)),
      nameplatePreview: (0, Chunk255367.jsx)(Chunk22267.Z, {
        user: require,
        nameplate: W,
        nameplateData: true === W ? require.nameplate : true,
        pendingGlobalName: Y.pendingGlobalName,
        className: Chunk775274.nameplatePreview,
        isHighlighted: true
      }),
      children: (0, Chunk255367.jsx)(Chunk532495.Z, {})
    }), eo && (0, Chunk255367.jsx)(Chunk610794.Z, {}), (0, Chunk255367.jsx)(Chunk622535.$, {
      innerRef: ed,
      onChange: e => el(e),
      threshold: .25,
      active: ec,
      children: (0, Chunk255367.jsx)("div", {
        ref: ed,
        children: (0, Chunk255367.jsx)(Chunk935147.Z, {
          user: require,
          shouldShow: ec,
          isVisible: ea
        })
      })
    }), ec && !q && (0, Chunk255367.jsx)(Chunk53691.p, {
      className: Chunk775274.floatingNitroUpsell,
      showUpsell: ec && !ea,
      text: Chunk388032.intl.format(Chunk388032.t.TmfgIy, {
        onClick: () => (0, Chunk267717.y)({
          analyticsSource: $
        })
      }),
      textVariant: "heading-md/medium",
      button: (0, Chunk255367.jsxs)(Chunk481060.gtL, {
        className: Chunk775274.floatingNitroButton,
        innerClassName: Chunk775274.floatingNitroButtonInner,
        onClick: () => {
          var e;
          Chunk626135.default.track(Chunk981631.rMx.TRY_IT_OUT_PRESET_CLICKED, {
            cta_variant: "floating_action_button"
          }), null == ed || null == (e = ed.current) || module.scrollIntoView({
            behavior: "smooth"
          })
        },
        color: Chunk755721.zx.Colors.GREEN,
        size: Chunk755721.Ph.MEDIUM,
        children: [(0, Chunk255367.jsx)(Chunk481060.SrA, {
          size: "sm",
          color: "currentColor"
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "currentColor",
          children: Chunk388032.intl.string(Chunk388032.t.uw9zIy)
        })]
      })
    })]
  })
}