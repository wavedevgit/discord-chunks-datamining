/** Chunk was on 30202 **/
/** chunk id: 881100, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => U
});
var Chunk399606 = require("./399606.js"),
  Chunk780384 = require("./780384.js"),
  Chunk230711 = require("./230711.js"),
  Chunk410030 = require("./410030.js"),
  Chunk594174 = require("./594174.js"),
  Chunk424218 = require("./424218.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk323780 = require("./323780.js"),
  Chunk101732 = require("./101732.js"),
  Chunk450598 = require("./450598.js"),
  Chunk633030 = require("./633030.js"),
  Chunk97942 = require("./97942.js"),
  Chunk269987 = require("./269987.js"),
  Chunk548629 = require("./548629.js"),
  Chunk507084 = require("./507084.js"),
  Chunk680313 = require("./680313.js"),
  Chunk926433 = require("./926433.js"),
  Chunk302036 = require("./302036.js"),
  Chunk994554 = require("./994554.js"),
  Chunk1549 = require("./1549.js"),
  Chunk13327 = require("./13327.js"),
  Chunk59137 = require("./59137.js"),
  Chunk405991 = require("./405991.js"),
  Chunk24615 = require("./24615.js"),
  Chunk193943 = require("./193943.js"),
  Chunk334347 = require("./334347.js"),
  Chunk943734 = require("./943734.js"),
  Chunk603076 = require("./603076.js"),
  Chunk472656 = require("./472656.js"),
  Chunk912429 = require("./912429.js"),
  Chunk772969 = require("./772969.js"),
  Chunk926262 = require("./926262.js");
let M = (e, t, n) => (0, r.wj)(e) ? t : n,
  U = e => {
    let {
      styles: t
    } = e, n = (0, a.ZP)(), r = (0, i.e7)([l.default], () => {
      let e = l.default.getCurrentUser();
      return c.ZP.canUsePremiumProfileCustomization(e)
    }), U = (0, o.BU)(d.Uq / 1024, {
      useKibibytes: true
    });
    return {
      badge: {
        title: p.intl.string(p.t.SS87ra),
        description: p.intl.string(p.t.oD6CRk),
        imageSource: f,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: p.intl.string(p.t["5cYMu7"]),
        description: p.intl.string(p.t.vxk9vb),
        imageSource: M(n, g, h),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: p.intl.string(p.t["/xvEMz"]),
        description: p.intl.string(p.t.HKWdjo),
        className: t.clientThemesCard,
        imageSource: A,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: p.intl.string(p.t.OuItFh),
        description: p.intl.string(p.t.mPyrEx),
        imageSource: P,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: p.intl.string(p.t["R2IV/f"]),
        description: p.intl.string(p.t.R5Xag4),
        imageSource: R,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: p.intl.string(p.t.lKDhhI),
        description: e => {
          let t = () => {
            s.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: m.Y_.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return r ? p.intl.format(p.t.aj1pfX, {
            onCheckItOutClick: t
          }) : p.intl.format(p.t.d2oYS0, {
            onTryItOutClick: t
          })
        },
        imageSource: x,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: p.intl.string(p.t.BUSciY),
        description: p.intl.string(p.t.vN6Xpa),
        imageSource: M(n, D, Z),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: p.intl.string(p.t.Bv8Pfn),
        description: p.intl.string(p.t.JMfaTU),
        imageSource: M(n, b, w),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: p.intl.string(p.t.Bv8Pfn),
        description: p.intl.string(p.t.JMfaTU),
        imageSource: M(n, E, C),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: p.intl.string(p.t.ZvulDg),
        description: p.intl.string(p.t["8GwCPT"]),
        imageSource: M(n, _, j),
        imageClassName: t.remixingImage,
        isEarlyAccess: true
      },
      soundboard: {
        title: p.intl.string(p.t["lGcW+f"]),
        description: p.intl.string(p.t["/fDyOz"]),
        imageSource: M(n, O, v),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: p.intl.string(p.t["1c+xwc"]),
        description: p.intl.string(p.t.hJG8ZG),
        imageSource: M(n, S, k),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: p.intl.string(p.t.tzdIwM),
        description: p.intl.string(p.t.hJG8ZG),
        imageSource: M(n, S, k),
        imageClassName: t.stickersImage
      },
      stickersPremiumPerk: {
        title: p.intl.string(p.t.tzdIwM),
        description: p.intl.string(p.t.FXlU29),
        imageSource: M(n, S, k),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: p.intl.string(p.t.RSXQYG),
        description: p.intl.string(p.t.ymCPxs),
        imageSource: L,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: p.intl.string(p.t.uZt5q6),
        description: p.intl.string(p.t.ZK3Zoa),
        imageSource: M(n, T, N),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: p.intl.formatToPlainString(p.t.jqhAdH, {
          premiumMaxSize: U
        }),
        description: p.intl.formatToPlainString(p.t["HI+cfn"], {
          premiumMaxSize: U
        }),
        imageSource: B,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: p.intl.string(p.t.NaGpTU),
        description: p.intl.string(p.t["A8O/Q0"]),
        imageSource: M(n, I, y),
        imageClassName: t.videoBackgroundImage
      }
    }
  }