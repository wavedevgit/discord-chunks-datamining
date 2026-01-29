/** Chunk was on 4670 **/
/** chunk id: 945928, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Q: () => m
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
        enabledInputProfiles: e
      } = (0, c._)({
        location: "SettingsRendererConfig"
      });
      return e.length > 0
    },
    useSearchTerms: () => [b.intl.string(b.t.nuFtHH), b.intl.string(b.t.VZPR0R), b.intl.string(b.t.cjPbpT)],
    useValue: function() {
      return (0, l.bG)([d.A], () => {
        var e;
        return null != (e = d.A.getActiveInputProfile()) ? e : N.my.CUSTOM
      })
    },
    setValue: function(e) {
      let t = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
      s.A.setActiveInputProfile(e, {
        analyticsLocations: t
      })
    },
    useOptions: function() {
      let {
        enabledInputProfiles: e
      } = (0, c.d)({
        location: "InputProfileCategory"
      });
      return [{
        value: N.my.VOICE_ISOLATION,
        name: b.intl.string(b.t.cjPbpT),
        desc: b.intl.string(b.t.CzhvnE)
      }, {
        value: N.my.STUDIO,
        name: b.intl.string(b.t.VZPR0R),
        desc: b.intl.string(b.t.ZaJksS)
      }, {
        value: N.my.CUSTOM,
        name: b.intl.string(b.t["N/PQjv"]),
        desc: b.intl.string(b.t.SnBmuY)
      }].filter(t => {
        let {
          value: i
        } = t;
        return e.includes(i)
      })
    }
  }),
  m = (0, Chunk419954.zZ)(Chunk780964.X.VOICE_INPUT_PROFILE_CATEGORY, {
    useInlineNotice: function() {
      let e = (0, l.bG)([o.A, d.A], () => {
        let e = d.A.getInputDeviceId();
        return (o.A.hasEchoCancellation(e) || o.A.hasNoiseSuppression(e) || o.A.hasAutomaticGainControl(e)) && d.A.isInputProfileCustom()
      });
      return n.useMemo(() => {
        if (e) return {
          type: u.W.INLINE_NOTICE,
          noticeType: "info",
          useText: () => b.intl.string(b.t["/Whuzi"])
        }
      }, [e])
    },
    buildLayout: () => [p, _.O, E.w, S.h, C.K, g.C, O.m, I.A, A.U]
  })