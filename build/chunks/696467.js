/** Chunk was on 77069 **/
/** chunk id: 696467, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  u: () => P
});
var Chunk755721 = require("./755721.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk915009 = require("./915009.js"),
  Chunk509613 = require("./509613.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk88658 = require("./88658.js"),
  Chunk750832 = require("./750832.js"),
  Chunk976978 = require("./976978.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk997950 = require("./997950.js"),
  Chunk639814 = require("./639814.js"),
  Chunk922628 = require("./922628.jsx"),
  Chunk703115 = require("./703115.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let L = (t, e) => {
    o.default.track(C.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: t,
      applied_to_existing_guilds: e
    })
  },
  P = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
    useTitle: () => f.intl.string(f.t["3o2ojh"]),
    useSubtitle: () => (0, I.c_)() ? f.intl.format(f.t.WpnWLc, {
      helpdeskArticle: T.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS)
    }) : f.intl.format(f.t.wkm9a3, {
      helpdeskArticle: T.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS)
    }),
    useValue: () => {
      let t = (0, I.is)(),
        e = (0, E.q)(),
        n = d.h2.useSetting().includes(t),
        i = d.mX.useSetting(),
        l = d.zA.useSetting().includes(t);
      return t === g.Th ? !e && !i : !n && !l
    },
    useDisabled: () => {
      let t = (0, I.is)(),
        e = (0, u.LN)(),
        n = (0, E.q)(),
        i = d.h2.useSetting().includes(t);
      return t === g.Th ? n || e : i
    },
    setValue: t => {
      let e = g.xu.getState().selectedGuildId;
      if (!t && (0, c.S)()) return void l.Z.showAgeVerificationGetStartedModal({
        entryPoint: s.cU.MESSAGE_REQUESTS_SETTINGS
      });
      if (e === g.Th) {
        var n;
        n = !t, (0, A.V)({
          header: f.intl.string(f.t.yAfu1p),
          body: f.intl.string(f.t.Ry2z74),
          confirmText: f.intl.string(f.t.gm1Vej),
          cancelText: f.intl.string(f.t.p89ACt),
          confirmButtonColor: i.zx.Colors.BRAND,
          onConfirm: () => {
            d.mX.updateSetting(n), L(n, false)
          },
          onCancel: () => {
            d.mX.updateSetting(n), d.zA.updateSetting(n ? a.Z.getGuildIds() : []), L(n, true)
          }
        })
      } else {
        let n = (0, S.gl)();
        t ? n.delete(e) : n.add(e), d.zA.updateSetting(Array.from(n)), o.default.track(C.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
          action: N.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
          ingress: O.f4.USER_SETTINGS_PRIVACY_SAFETY,
          guild_id: e
        })
      }
    }
  })