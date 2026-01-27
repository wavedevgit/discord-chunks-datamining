/** Chunk was on 28979 **/
/** chunk id: 945928, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Q: () => R
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
  Chunk903427 = require("./903427.js"),
  Chunk509381 = require("./509381.js"),
  Chunk985018 = require("./985018.jsx");
let b = (0, Chunk419954.Qx)(Chunk780964.X.VOICE_INPUT_PROFILE_SETTING, {
    useTitle: () => L.intl.string(L.t.LM3U3k),
    usePredicate: function() {
      let {
        enabledInputProfiles: t
      } = (0, d._)({
        location: "SettingsRendererConfig"
      });
      return t.length > 0
    },
    useSearchTerms: () => [L.intl.string(L.t.nuFtHH), L.intl.string(L.t.VZPR0R), L.intl.string(L.t.cjPbpT)],
    useValue: function() {
      return (0, l.bG)([T.A], () => {
        var t;
        return null != (t = T.A.getActiveInputProfile()) ? t : C.my.CUSTOM
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
      } = (0, d.d)({
        location: "InputProfileCategory"
      });
      return [{
        value: C.my.VOICE_ISOLATION,
        name: L.intl.string(L.t.cjPbpT),
        desc: L.intl.string(L.t.CzhvnE)
      }, {
        value: C.my.STUDIO,
        name: L.intl.string(L.t.VZPR0R),
        desc: L.intl.string(L.t.ZaJksS)
      }, {
        value: C.my.CUSTOM,
        name: L.intl.string(L.t["N/PQjv"]),
        desc: L.intl.string(L.t.SnBmuY)
      }].filter(e => {
        let {
          value: i
        } = e;
        return t.includes(i)
      })
    }
  }),
  R = (0, Chunk419954.zZ)(Chunk780964.X.VOICE_INPUT_PROFILE_CATEGORY, {
    useInlineNotice: function() {
      let t = (0, l.bG)([o.A, T.A], () => {
        let t = T.A.getInputDeviceId();
        return (o.A.hasEchoCancellation(t) || o.A.hasNoiseSuppression(t) || o.A.hasAutomaticGainControl(t)) && T.A.isInputProfileCustom()
      });
      return n.useMemo(() => {
        if (t) return {
          type: a.W.INLINE_NOTICE,
          noticeType: "info",
          useText: () => L.intl.string(L.t["/Whuzi"])
        }
      }, [t])
    },
    buildLayout: () => [b, _.O, g.w, E.h, N.K, c.C, O.m, I.A, S.U]
  })