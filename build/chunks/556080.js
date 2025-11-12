/** Chunk was on 9452 **/
/** chunk id: 556080, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk846071 = require("./846071.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.J9)(Chunk313789.n.VOICE_INPUT_PROFILE_SETTING, {
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
      l.Z.setActiveInputProfile(t, {
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
  S = (0, Chunk509613.k4)(Chunk313789.n.VOICE_INPUT_PROFILE_CATEGORY, {
    buildLayout: () => [d]
  })