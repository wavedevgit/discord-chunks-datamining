/** Chunk was on 77069 **/
/** chunk id: 347854, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  k: () => C
});
var Chunk755721 = require("./755721.js"),
  Chunk915009 = require("./915009.js"),
  Chunk509613 = require("./509613.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk88658 = require("./88658.js"),
  Chunk976978 = require("./976978.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk997950 = require("./997950.js"),
  Chunk87820 = require("./87820.js"),
  Chunk639814 = require("./639814.js"),
  Chunk922628 = require("./922628.jsx"),
  Chunk703115 = require("./703115.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let O = (t, e) => {
    r.default.track(A.rMx.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: t,
      applied_to_existing_guilds: e
    })
  },
  C = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
    useTitle: () => (0, E.r)() ? N.intl.string(N.t.PMsfcH) : N.intl.string(N.t.RAQUSN),
    useSubtitle: () => {
      let t = (0, d.is)(),
        e = (0, d.c_)(),
        n = (0, E.r)();
      return t === c.Th ? n ? N.intl.string(N.t.XXGmuB) : N.intl.string(N.t.wbYDfT) : e ? N.intl.string(N.t.V0ka0Q) : n ? N.intl.string(N.t.F9WY3f) : N.intl.string(N.t.G7c3Xo)
    },
    useValue: () => {
      let t = (0, d.is)(),
        e = T.h2.useSetting().includes(t),
        n = (0, o.q)();
      return t === c.Th ? !n : !e
    },
    useDisabled: () => {
      let t = (0, l.LN)();
      return (0, d.is)() === c.Th && t
    },
    setValue: t => {
      let e = c.xu.getState().selectedGuildId;
      if (e === c.Th) {
        var n;
        n = !t, (0, _.V)({
          header: N.intl.string(N.t["uUr+GR"]),
          body: N.intl.string(N.t.hjGJBp),
          confirmText: N.intl.string(N.t.gm1Vej),
          cancelText: N.intl.string(N.t.p89ACt),
          confirmButtonColor: i.zx.Colors.BRAND,
          onConfirm: () => {
            T.gR.updateSetting(n), O(n, false)
          },
          onCancel: () => {
            T.gR.updateSetting(n), T.h2.updateSetting(n ? u.Z.getGuildIds() : []), O(n, true)
          }
        })
      } else {
        let n = (0, a.YK)();
        t ? n.delete(e) : n.add(e), T.h2.updateSetting(Array.from(n)), r.default.track(A.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
          action: g.Y.DIRECT_MESSAGES_TOGGLE,
          ingress: I.f4.USER_SETTINGS_PRIVACY_SAFETY,
          guild_id: e
        })
      }
    }
  })