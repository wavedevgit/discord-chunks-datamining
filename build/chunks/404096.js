/** Chunk was on 4670 **/
/** chunk id: 404096, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  w: () => m
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
let p = (e, t) => {
    o.default.track(N.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  },
  m = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
    useTitle: () => b.intl.string(b.t["3o2ojh"]),
    useSubtitle: () => (0, g.q9)() ? b.intl.format(b.t.WpnWLc, {
      helpdeskArticle: d.A.getArticleURL(N.MVz.MESSAGE_REQUESTS)
    }) : b.intl.format(b.t.wkm9a3, {
      helpdeskArticle: d.A.getArticleURL(N.MVz.MESSAGE_REQUESTS)
    }),
    useValue: () => {
      let e = (0, g.Tx)(),
        t = (0, A.K)(),
        i = S.$s.useSetting().includes(e),
        n = S.YX.useSetting(),
        l = S.Zr.useSetting().includes(e);
      return e === E.YG ? !t && !n : !i && !l
    },
    useDisabled: () => {
      let e = (0, g.Tx)(),
        t = (0, r.uM)(),
        i = (0, A.K)(),
        n = S.$s.useSetting().includes(e);
      return e === E.YG ? i || t : n
    },
    setValue: e => {
      let t = E.xk.getState().selectedGuildId;
      if (!e && (0, c.w)()) return void l.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS
      });
      if (t === E.YG) {
        var i;
        i = !e, (0, I.O)({
          header: b.intl.string(b.t.yAfu1p),
          body: b.intl.string(b.t.Ry2z74),
          confirmText: b.intl.string(b.t.gm1Vej),
          cancelText: b.intl.string(b.t.p89ACt),
          confirmButtonColor: n.$n.Colors.BRAND,
          onConfirm: () => {
            S.YX.updateSetting(i), p(i, false)
          },
          onCancel: () => {
            S.YX.updateSetting(i), S.Zr.updateSetting(i ? u.A.getGuildIds() : []), p(i, true)
          }
        })
      } else {
        let i = (0, T.xo)();
        e ? i.delete(t) : i.add(t), S.Zr.updateSetting(Array.from(i)), o.default.track(N.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
          action: O.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
          ingress: C.bf.USER_SETTINGS_PRIVACY_SAFETY,
          guild_id: t
        })
      }
    }
  })