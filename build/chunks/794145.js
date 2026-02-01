/** Chunk was on 30485 **/
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
let N = (t, e) => {
    u.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: t,
      applied_to_existing_guilds: e
    })
  },
  C = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
    useTitle: () => (0, S.e)() ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN),
    useSubtitle: () => {
      let t = (0, c.Tx)(),
        e = (0, c.q9)(),
        i = (0, S.e)();
      return t === A.YG ? i ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT) : e ? O.intl.string(O.t.V0ka0Q) : i ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo)
    },
    useValue: () => {
      let t = (0, c.Tx)(),
        e = d.$s.useSetting().includes(t),
        i = (0, o.K)();
      return t === A.YG ? !i : !e
    },
    useDisabled: () => {
      let t = (0, l.uM)();
      return (0, c.Tx)() === A.YG && t
    },
    setValue: t => {
      let e = A.xk.getState().selectedGuildId;
      if (e === A.YG) {
        var i;
        i = !t, (0, E.O)({
          header: O.intl.string(O.t["uUr+GR"]),
          body: O.intl.string(O.t.hjGJBp),
          confirmText: O.intl.string(O.t.gm1Vej),
          cancelText: O.intl.string(O.t.p89ACt),
          confirmButtonColor: n.$n.Colors.BRAND,
          onConfirm: () => {
            d.n6.updateSetting(i), N(i, false)
          },
          onCancel: () => {
            d.n6.updateSetting(i), d.$s.updateSetting(i ? r.A.getGuildIds() : []), N(i, true)
          }
        })
      } else {
        let i = (0, a.Tb)();
        t ? i.delete(e) : i.add(e), d.$s.updateSetting(Array.from(i)), u.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
          action: g.m.DIRECT_MESSAGES_TOGGLE,
          ingress: _.bf.USER_SETTINGS_PRIVACY_SAFETY,
          guild_id: e
        })
      }
    }
  })