/** Chunk was on 28979 **/
/** chunk id: 404096, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  w: () => b
});
var Chunk421380 = require("./421380.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk171316 = require("./171316.js"),
  Chunk419954 = require("./419954.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk115063 = require("./115063.js"),
  Chunk152076 = require("./152076.js"),
  Chunk762183 = require("./762183.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk612025 = require("./612025.js"),
  Chunk112469 = require("./112469.js"),
  Chunk997913 = require("./997913.jsx"),
  Chunk542457 = require("./542457.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let R = (t, e) => {
    o.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: t,
      applied_to_existing_guilds: e
    })
  },
  b = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
    useTitle: () => L.intl.string(L.t["3o2ojh"]),
    useSubtitle: () => (0, g.q9)() ? L.intl.format(L.t.WpnWLc, {
      helpdeskArticle: T.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
    }) : L.intl.format(L.t.wkm9a3, {
      helpdeskArticle: T.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
    }),
    useValue: () => {
      let t = (0, g.Tx)(),
        e = (0, E.K)(),
        i = d.$s.useSetting().includes(t),
        n = d.YX.useSetting(),
        l = d.Zr.useSetting().includes(t);
      return t === I.YG ? !e && !n : !i && !l
    },
    useDisabled: () => {
      let t = (0, g.Tx)(),
        e = (0, r.uM)(),
        i = (0, E.K)(),
        n = d.$s.useSetting().includes(t);
      return t === I.YG ? i || e : n
    },
    setValue: t => {
      let e = I.xk.getState().selectedGuildId;
      if (!t && (0, S.w)()) return void l.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS
      });
      if (e === I.YG) {
        var i;
        i = !t, (0, c.O)({
          header: L.intl.string(L.t.yAfu1p),
          body: L.intl.string(L.t.Ry2z74),
          confirmText: L.intl.string(L.t.gm1Vej),
          cancelText: L.intl.string(L.t.p89ACt),
          confirmButtonColor: n.$n.Colors.BRAND,
          onConfirm: () => {
            d.YX.updateSetting(i), R(i, false)
          },
          onCancel: () => {
            d.YX.updateSetting(i), d.Zr.updateSetting(i ? a.A.getGuildIds() : []), R(i, true)
          }
        })
      } else {
        let i = (0, A.xo)();
        t ? i.delete(e) : i.add(e), d.Zr.updateSetting(Array.from(i)), o.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
          action: N.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
          ingress: O.bf.USER_SETTINGS_PRIVACY_SAFETY,
          guild_id: e
        })
      }
    }
  })