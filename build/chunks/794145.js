/** Chunk was on 4670 **/
/** chunk id: 794145, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  V: () => N
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
let C = (e, t) => {
    a.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  },
  N = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
    useTitle: () => (0, A.e)() ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN),
    useSubtitle: () => {
      let e = (0, S.Tx)(),
        t = (0, S.q9)(),
        i = (0, A.e)();
      return e === c.YG ? i ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT) : t ? O.intl.string(O.t.V0ka0Q) : i ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo)
    },
    useValue: () => {
      let e = (0, S.Tx)(),
        t = d.$s.useSetting().includes(e),
        i = (0, o.K)();
      return e === c.YG ? !i : !t
    },
    useDisabled: () => {
      let e = (0, l.uM)();
      return (0, S.Tx)() === c.YG && e
    },
    setValue: e => {
      let t = c.xk.getState().selectedGuildId;
      if (t === c.YG) {
        var i;
        i = !e, (0, _.O)({
          header: O.intl.string(O.t["uUr+GR"]),
          body: O.intl.string(O.t.hjGJBp),
          confirmText: O.intl.string(O.t.gm1Vej),
          cancelText: O.intl.string(O.t.p89ACt),
          confirmButtonColor: n.$n.Colors.BRAND,
          onConfirm: () => {
            d.n6.updateSetting(i), C(i, false)
          },
          onCancel: () => {
            d.n6.updateSetting(i), d.$s.updateSetting(i ? r.A.getGuildIds() : []), C(i, true)
          }
        })
      } else {
        let i = (0, u.Tb)();
        e ? i.delete(t) : i.add(t), d.$s.updateSetting(Array.from(i)), a.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
          action: E.m.DIRECT_MESSAGES_TOGGLE,
          ingress: g.bf.USER_SETTINGS_PRIVACY_SAFETY,
          guild_id: t
        })
      }
    }
  })