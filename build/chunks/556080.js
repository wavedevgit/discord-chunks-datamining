/** Chunk was on 77069 **/
/** chunk id: 556080, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => P
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk846071 = require("./846071.js"),
  Chunk375258 = require("./375258.js"),
  Chunk383713 = require("./383713.js"),
  Chunk782134 = require("./782134.jsx"),
  Chunk833682 = require("./833682.jsx"),
  Chunk815194 = require("./815194.jsx"),
  Chunk16009 = require("./16009.js"),
  Chunk387076 = require("./387076.js"),
  Chunk595373 = require("./595373.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx");
let p = (0, Chunk509613.J9)(Chunk313789.n.VOICE_INPUT_PROFILE_SETTING, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.LM3U3k),
    usePredicate: function() {
      let {
        enabledInputProfiles: t
      } = (0, Chunk846071.P)({
        location: "SettingsRendererConfig"
      });
      return module.length > 0
    },
    useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.nuFtHH), Chunk388032.intl.string(Chunk388032.t.VZPR0R), Chunk388032.intl.string(Chunk388032.t.cjPbpT)],
    useValue: function() {
      return (0, Chunk442837.e7)([Chunk131951.Z], () => {
        var t;
        return null != (t = Chunk131951.Z.getActiveInputProfile()) ? module : Chunk345655._.CUSTOM
      })
    },
    setValue: function(t) {
      let e = [u.Z.USER_SETTINGS_VOICE_AND_VIDEO];
      s.Z.setActiveInputProfile(t, {
        analyticsLocations: e
      })
    },
    useOptions: function() {
      let {
        enabledInputProfiles: t
      } = (0, Chunk846071.G)({
        location: "InputProfileCategory"
      });
      return [{
        value: Chunk345655._.VOICE_ISOLATION,
        name: Chunk388032.intl.string(Chunk388032.t.cjPbpT),
        desc: Chunk388032.intl.string(Chunk388032.t.CzhvnE)
      }, {
        value: Chunk345655._.STUDIO,
        name: Chunk388032.intl.string(Chunk388032.t.VZPR0R),
        desc: Chunk388032.intl.string(Chunk388032.t.ZaJksS)
      }, {
        value: Chunk345655._.CUSTOM,
        name: Chunk388032.intl.string(Chunk388032.t["N/PQjv"]),
        desc: Chunk388032.intl.string(Chunk388032.t.SnBmuY)
      }].filter(e => {
        let {
          value: n
        } = e;
        return t.includes(n)
      })
    }
  }),
  P = (0, Chunk509613.k4)(Chunk313789.n.VOICE_INPUT_PROFILE_CATEGORY, {
    useNotice: function() {
      let t = (0, Chunk442837.e7)([Chunk463395.Z, Chunk131951.Z], () => {
        let t = Chunk131951.Z.getInputDeviceId();
        return (Chunk463395.Z.hasEchoCancellation(module) || Chunk463395.Z.hasNoiseSuppression(module) || Chunk463395.Z.hasAutomaticGainControl(module)) && Chunk131951.Z.isInputProfileCustom()
      });
      return Chunk473749.useMemo(() => {
        if (module) return {
          type: Chunk970013.v.INLINE_NOTICE,
          noticeType: "info",
          useText: () => Chunk388032.intl.string(Chunk388032.t["/Whuzi"])
        }
      }, [module])
    },
    buildLayout: () => [p, Chunk782134.q, Chunk833682.L, Chunk383713.A, Chunk595373.Y, Chunk815194.h, Chunk387076.q, Chunk16009.X, Chunk375258.h]
  })