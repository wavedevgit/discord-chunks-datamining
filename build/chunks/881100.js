/** Chunk was on web.js **/
/** chunk id: 881100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => U
});
var Chunk399606 = require("./399606.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk313789 = require("./313789.js"),
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
let j = (e, t, n) => (0, i.wj)(e) ? t : n,
  U = e => {
    let {
      styles: t
    } = e, i = (0, a.ZP)(), U = (0, r.e7)([s.default], () => {
      let e = s.default.getCurrentUser();
      return c.ZP.canUsePremiumProfileCustomization(e)
    }), G = e => {
      let t = () => {
        {
          let {
            openUserSettings: t
          } = n(518596);
          t(o.n.PROFILE_PANEL, {
            section: d.oAB.PROFILE_CUSTOMIZATION,
            scrollPosition: f.Y_.TRY_IT_OUT,
            analyticsLocations: e
          })
        }
      };
      return U ? _.intl.format(_.t.aj1pfZ, {
        onCheckItOutClick: t
      }) : _.intl.format(_.t.d2oYS8, {
        onTryItOutClick: t
      })
    }, B = (0, l.BU)(u.Uq / 1024, {
      useKibibytes: true
    });
    return {
      badge: {
        title: _.intl.string(_.t.SS87rQ),
        description: _.intl.string(_.t.oD6CRr),
        imageSource: m,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: _.intl.string(_.t["5cYMu0"]),
        description: _.intl.string(_.t.vxk9va),
        imageSource: j(i, p, h),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: _.intl.string(_.t["/xvEMy"]),
        description: _.intl.string(_.t.HKWdjj),
        className: t.clientThemesCard,
        imageSource: N,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: _.intl.string(_.t.OuItFi),
        description: _.intl.string(_.t.mPyrE6),
        imageSource: R,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: _.intl.string(_.t["R2IV/Q"]),
        description: _.intl.string(_.t.R5Xag2),
        imageSource: P,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: _.intl.string(_.t.lKDhhJ),
        description: G,
        imageSource: E,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: _.intl.string(_.t.BUScid),
        description: _.intl.string(_.t.vN6XpQ),
        imageSource: j(i, D, w),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: _.intl.string(_.t.Bv8Pfk),
        description: _.intl.string(_.t.JMfaTU),
        imageSource: j(i, g, x),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: _.intl.string(_.t.Bv8Pfk),
        description: _.intl.string(_.t.JMfaTU),
        imageSource: j(i, b, y),
        imageClassName: t.moreGuildsAltImage
      },
      soundboard: {
        title: _.intl.string(_.t["lGcW+c"]),
        description: _.intl.string(_.t["/fDyO+"]),
        imageSource: j(i, O, v),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: _.intl.string(_.t["1c+xwT"]),
        description: _.intl.string(_.t.hJG8ZN),
        imageSource: j(i, I, L),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: _.intl.string(_.t.tzdIwI),
        description: _.intl.string(_.t.hJG8ZN),
        imageSource: j(i, I, L),
        imageClassName: t.stickersImage
      },
      stickersPremiumPerk: {
        title: _.intl.string(_.t.tzdIwI),
        description: _.intl.string(_.t.FXlU24),
        imageSource: j(i, I, L),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: _.intl.string(_.t.RSXQYO),
        description: _.intl.string(_.t.ymCPxp),
        imageSource: M,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: _.intl.string(_.t["uZt5q/"]),
        description: _.intl.string(_.t.ZK3ZoX),
        imageSource: j(i, T, S),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: _.intl.formatToPlainString(_.t.jqhAdL, {
          premiumMaxSize: B
        }),
        description: _.intl.formatToPlainString(_.t["HI+cfm"], {
          premiumMaxSize: B
        }),
        imageSource: k,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: _.intl.string(_.t.NaGpTf),
        description: _.intl.string(_.t["A8O/Qw"]),
        imageSource: j(i, A, C),
        imageClassName: t.videoBackgroundImage
      }
    }
  }