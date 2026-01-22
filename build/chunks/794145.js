/** Chunk was on 28979 **/
/** chunk id: 794145, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  V: () => C
});
var Chunk421380 = require("./421380.js"),
  Chunk171316 = require("./171316.js"),
  Chunk419954 = require("./419954.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk115063 = require("./115063.js"),
  Chunk762183 = require("./762183.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk612025 = require("./612025.js"),
  Chunk445176 = require("./445176.js"),
  Chunk112469 = require("./112469.js"),
  Chunk997913 = require("./997913.jsx"),
  Chunk542457 = require("./542457.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let O = (t, e) => {
    u.default.track(c.HAw.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: t,
      applied_to_existing_guilds: e
    })
  },
  C = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
    useTitle: () => (0, E.e)() ? N.intl.string(N.t.PMsfcH) : N.intl.string(N.t.RAQUSN),
    useSubtitle: () => {
      let t = (0, d.Tx)(),
        e = (0, d.q9)(),
        i = (0, E.e)();
      return t === S.YG ? i ? N.intl.string(N.t.XXGmuB) : N.intl.string(N.t.wbYDfT) : e ? N.intl.string(N.t.V0ka0Q) : i ? N.intl.string(N.t.F9WY3f) : N.intl.string(N.t.G7c3Xo)
    },
    useValue: () => {
      let t = (0, d.Tx)(),
        e = T.$s.useSetting().includes(t),
        i = (0, o.K)();
      return t === S.YG ? !i : !e
    },
    useDisabled: () => {
      let t = (0, l.uM)();
      return (0, d.Tx)() === S.YG && t
    },
    setValue: t => {
      let e = S.xk.getState().selectedGuildId;
      if (e === S.YG) {
        var i;
        i = !t, (0, _.O)({
          header: N.intl.string(N.t["uUr+GR"]),
          body: N.intl.string(N.t.hjGJBp),
          confirmText: N.intl.string(N.t.gm1Vej),
          cancelText: N.intl.string(N.t.p89ACt),
          confirmButtonColor: n.$n.Colors.BRAND,
          onConfirm: () => {
            T.n6.updateSetting(i), O(i, false)
          },
          onCancel: () => {
            T.n6.updateSetting(i), T.$s.updateSetting(i ? r.A.getGuildIds() : []), O(i, true)
          }
        })
      } else {
        let i = (0, a.Tb)();
        t ? i.delete(e) : i.add(e), T.$s.updateSetting(Array.from(i)), u.default.track(c.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
          action: I.m.DIRECT_MESSAGES_TOGGLE,
          ingress: g.bf.USER_SETTINGS_PRIVACY_SAFETY,
          guild_id: e
        })
      }
    }
  })