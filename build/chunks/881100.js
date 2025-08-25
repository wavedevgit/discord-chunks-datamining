/** Chunk was on web.js **/
/** chunk id: 881100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => B
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
let G = (e, t, n) => (0, i.wj)(e) ? t : n,
  B = e => {
    let {
      styles: t
    } = e, n = (0, a.ZP)(), i = (0, r.e7)([s.default], () => {
      let e = s.default.getCurrentUser();
      return c.ZP.canUsePremiumProfileCustomization(e)
    }), B = e => {
      let t = () => {
        o.Z.open(d.oAB.PROFILE_CUSTOMIZATION, null, {
          scrollPosition: f.Y_.TRY_IT_OUT,
          analyticsLocations: e
        })
      };
      return i ? _.intl.format(_.t.aj1pfX, {
        onCheckItOutClick: t
      }) : _.intl.format(_.t.d2oYS0, {
        onTryItOutClick: t
      })
    }, Z = (0, l.BU)(u.Uq / 1024, {
      useKibibytes: true
    });
    return {
      badge: {
        title: _.intl.string(_.t.SS87ra),
        description: _.intl.string(_.t.oD6CRk),
        imageSource: m,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: _.intl.string(_.t["5cYMu7"]),
        description: _.intl.string(_.t.vxk9vb),
        imageSource: G(n, p, h),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: _.intl.string(_.t["/xvEMz"]),
        description: _.intl.string(_.t.HKWdjo),
        className: t.clientThemesCard,
        imageSource: P,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: _.intl.string(_.t.OuItFh),
        description: _.intl.string(_.t.mPyrEx),
        imageSource: w,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: _.intl.string(_.t["R2IV/f"]),
        description: _.intl.string(_.t.R5Xag4),
        imageSource: D,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: _.intl.string(_.t.lKDhhI),
        description: B,
        imageSource: E,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: _.intl.string(_.t.BUSciY),
        description: _.intl.string(_.t.vN6Xpa),
        imageSource: G(n, x, L),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: _.intl.string(_.t.Bv8Pfn),
        description: _.intl.string(_.t.JMfaTU),
        imageSource: G(n, g, j),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: _.intl.string(_.t.Bv8Pfn),
        description: _.intl.string(_.t.JMfaTU),
        imageSource: G(n, O, v),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: _.intl.string(_.t.ZvulDg),
        description: _.intl.string(_.t["8GwCPT"]),
        imageSource: G(n, b, y),
        imageClassName: t.remixingImage,
        isEarlyAccess: true
      },
      soundboard: {
        title: _.intl.string(_.t["lGcW+f"]),
        description: _.intl.string(_.t["/fDyOz"]),
        imageSource: G(n, I, T),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: _.intl.string(_.t["1c+xwc"]),
        description: _.intl.string(_.t.hJG8ZG),
        imageSource: G(n, S, k),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: _.intl.string(_.t.tzdIwM),
        description: _.intl.string(_.t.hJG8ZG),
        imageSource: G(n, S, k),
        imageClassName: t.stickersImage
      },
      stickersPremiumPerk: {
        title: _.intl.string(_.t.tzdIwM),
        description: _.intl.string(_.t.FXlU29),
        imageSource: G(n, S, k),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: _.intl.string(_.t.RSXQYG),
        description: _.intl.string(_.t.ymCPxs),
        imageSource: M,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: _.intl.string(_.t.uZt5q6),
        description: _.intl.string(_.t.ZK3Zoa),
        imageSource: G(n, A, C),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: _.intl.formatToPlainString(_.t.jqhAdH, {
          premiumMaxSize: Z
        }),
        description: _.intl.formatToPlainString(_.t["HI+cfn"], {
          premiumMaxSize: Z
        }),
        imageSource: U,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: _.intl.string(_.t.NaGpTU),
        description: _.intl.string(_.t["A8O/Q0"]),
        imageSource: G(n, N, R),
        imageClassName: t.videoBackgroundImage
      }
    }
  }