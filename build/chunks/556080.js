/** Chunk was on 77069 **/
/** chunk id: 556080, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => R
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
let L = (0, Chunk509613.J9)(Chunk313789.n.VOICE_INPUT_PROFILE_SETTING, {
    useTitle: () => f.intl.string(f.t.LM3U3k),
    usePredicate: function() {
      let {
        enabledInputProfiles: t
      } = (0, c.P)({
        location: "SettingsRendererConfig"
      });
      return t.length > 0
    },
    useSearchTerms: () => [f.intl.string(f.t.nuFtHH), f.intl.string(f.t.VZPR0R), f.intl.string(f.t.cjPbpT)],
    useValue: function() {
      return (0, l.e7)([T.Z], () => {
        var t;
        return null != (t = T.Z.getActiveInputProfile()) ? t : C._.CUSTOM
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
      } = (0, c.G)({
        location: "InputProfileCategory"
      });
      return [{
        value: C._.VOICE_ISOLATION,
        name: f.intl.string(f.t.cjPbpT),
        desc: f.intl.string(f.t.CzhvnE)
      }, {
        value: C._.STUDIO,
        name: f.intl.string(f.t.VZPR0R),
        desc: f.intl.string(f.t.ZaJksS)
      }, {
        value: C._.CUSTOM,
        name: f.intl.string(f.t["N/PQjv"]),
        desc: f.intl.string(f.t.SnBmuY)
      }].filter(e => {
        let {
          value: n
        } = e;
        return t.includes(n)
      })
    }
  }),
  R = (0, Chunk509613.k4)(Chunk313789.n.VOICE_INPUT_PROFILE_CATEGORY, {
    useNotice: function() {
      let t = (0, l.e7)([o.Z, T.Z], () => {
        let t = T.Z.getInputDeviceId();
        return (o.Z.hasEchoCancellation(t) || o.Z.hasNoiseSuppression(t) || o.Z.hasAutomaticGainControl(t)) && T.Z.isInputProfileCustom()
      });
      return i.useMemo(() => {
        if (t) return {
          type: a.v.INLINE_NOTICE,
          noticeType: "info",
          useText: () => f.intl.string(f.t["/Whuzi"])
        }
      }, [t])
    },
    buildLayout: () => [L, _.q, g.L, d.A, O.Y, I.h, A.q, N.X, E.h]
  })