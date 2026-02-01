/** Chunk was on 30485 **/
/** chunk id: 945928, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Q: () => L
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk347481 = require("./347481.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk77735 = require("./77735.js"),
  Chunk791460 = require("./791460.js"),
  Chunk53386 = require("./53386.js"),
  Chunk585175 = require("./585175.jsx"),
  Chunk338145 = require("./338145.jsx"),
  Chunk77371 = require("./77371.jsx"),
  Chunk772797 = require("./772797.js"),
  Chunk180491 = require("./180491.js"),
  Chunk903427 = require("./903427.jsx"),
  Chunk509381 = require("./509381.js"),
  Chunk985018 = require("./985018.jsx");
let p = (0, Chunk419954.Qx)(Chunk780964.X.VOICE_INPUT_PROFILE_SETTING, {
    useTitle: () => b.intl.string(b.t.LM3U3k),
    usePredicate: function() {
      let {
        enabledInputProfiles: t
      } = (0, A._)({
        location: "SettingsRendererConfig"
      });
      return t.length > 0
    },
    useSearchTerms: () => [b.intl.string(b.t.nuFtHH), b.intl.string(b.t.VZPR0R), b.intl.string(b.t.cjPbpT)],
    useValue: function() {
      return (0, l.bG)([d.A], () => {
        var t;
        return null != (t = d.A.getActiveInputProfile()) ? t : C.my.CUSTOM
      })
    },
    setValue: function(t) {
      let e = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
      s.A.setActiveInputProfile(t, {
        analyticsLocations: e
      })
    },
    useOptions: function() {
      let {
        enabledInputProfiles: t
      } = (0, A.d)({
        location: "InputProfileCategory"
      });
      return [{
        value: C.my.VOICE_ISOLATION,
        name: b.intl.string(b.t.cjPbpT),
        desc: b.intl.string(b.t.CzhvnE)
      }, {
        value: C.my.STUDIO,
        name: b.intl.string(b.t.VZPR0R),
        desc: b.intl.string(b.t.ZaJksS)
      }, {
        value: C.my.CUSTOM,
        name: b.intl.string(b.t["N/PQjv"]),
        desc: b.intl.string(b.t.SnBmuY)
      }].filter(e => {
        let {
          value: i
        } = e;
        return t.includes(i)
      })
    }
  }),
  L = (0, Chunk419954.zZ)(Chunk780964.X.VOICE_INPUT_PROFILE_CATEGORY, {
    useInlineNotice: function() {
      let t = (0, l.bG)([o.A, d.A], () => {
        let t = d.A.getInputDeviceId();
        return (o.A.hasEchoCancellation(t) || o.A.hasNoiseSuppression(t) || o.A.hasAutomaticGainControl(t)) && d.A.isInputProfileCustom()
      });
      return n.useMemo(() => {
        if (t) return {
          type: a.W.INLINE_NOTICE,
          noticeType: "info",
          useText: () => b.intl.string(b.t["/Whuzi"])
        }
      }, [t])
    },
    buildLayout: () => [p, E.O, g.w, c.h, N.K, _.C, O.m, I.A, S.U]
  })