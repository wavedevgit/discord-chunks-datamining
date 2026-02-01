/** Chunk was on 30485 **/
/** chunk id: 404096, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  w: () => L
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
let p = (t, e) => {
    o.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: t,
      applied_to_existing_guilds: e
    })
  },
  L = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
    useTitle: () => b.intl.string(b.t["3o2ojh"]),
    useSubtitle: () => (0, _.q9)() ? b.intl.format(b.t.WpnWLc, {
      helpdeskArticle: d.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
    }) : b.intl.format(b.t.wkm9a3, {
      helpdeskArticle: d.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
    }),
    useValue: () => {
      let t = (0, _.Tx)(),
        e = (0, S.K)(),
        i = c.$s.useSetting().includes(t),
        n = c.YX.useSetting(),
        l = c.Zr.useSetting().includes(t);
      return t === g.YG ? !e && !n : !i && !l
    },
    useDisabled: () => {
      let t = (0, _.Tx)(),
        e = (0, r.uM)(),
        i = (0, S.K)(),
        n = c.$s.useSetting().includes(t);
      return t === g.YG ? i || e : n
    },
    setValue: t => {
      let e = g.xk.getState().selectedGuildId;
      if (!t && (0, A.w)()) return void l.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS
      });
      if (e === g.YG) {
        var i;
        i = !t, (0, I.O)({
          header: b.intl.string(b.t.yAfu1p),
          body: b.intl.string(b.t.Ry2z74),
          confirmText: b.intl.string(b.t.gm1Vej),
          cancelText: b.intl.string(b.t.p89ACt),
          confirmButtonColor: n.$n.Colors.BRAND,
          onConfirm: () => {
            c.YX.updateSetting(i), p(i, false)
          },
          onCancel: () => {
            c.YX.updateSetting(i), c.Zr.updateSetting(i ? a.A.getGuildIds() : []), p(i, true)
          }
        })
      } else {
        let i = (0, T.xo)();
        t ? i.delete(e) : i.add(e), c.Zr.updateSetting(Array.from(i)), o.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
          action: O.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
          ingress: N.bf.USER_SETTINGS_PRIVACY_SAFETY,
          guild_id: e
        })
      }
    }
  })