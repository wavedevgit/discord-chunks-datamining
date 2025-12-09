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
let k = (e, t, n) => (0, i.wj)(e) ? t : n,
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
      return U ? p.intl.format(p.t.aj1pfZ, {
        onCheckItOutClick: t
      }) : p.intl.format(p.t.d2oYS8, {
        onTryItOutClick: t
      })
    }, Z = (0, l.BU)(u.Uq / 1024, {
      useKibibytes: true
    });
    return {
      badge: {
        title: p.intl.string(p.t.SS87rQ),
        description: p.intl.string(p.t.oD6CRr),
        imageSource: h,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: p.intl.string(p.t["5cYMu0"]),
        description: p.intl.string(p.t.vxk9va),
        imageSource: k(i, _, m),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: p.intl.string(p.t["/xvEMy"]),
        description: p.intl.string(p.t.HKWdjj),
        className: t.clientThemesCard,
        imageSource: N,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: p.intl.string(p.t.OuItFi),
        description: p.intl.string(p.t.mPyrE6),
        imageSource: P,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: p.intl.string(p.t["R2IV/Q"]),
        description: p.intl.string(p.t.R5Xag2),
        imageSource: R,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: p.intl.string(p.t.lKDhhJ),
        description: G,
        imageSource: E,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: p.intl.string(p.t.BUScid),
        description: p.intl.string(p.t.vN6XpQ),
        imageSource: k(i, D, w),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: p.intl.string(p.t.Bv8Pfk),
        description: p.intl.string(p.t.JMfaTU),
        imageSource: k(i, g, x),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: p.intl.string(p.t.Bv8Pfk),
        description: p.intl.string(p.t.JMfaTU),
        imageSource: k(i, b, y),
        imageClassName: t.moreGuildsAltImage
      },
      soundboard: {
        title: p.intl.string(p.t["lGcW+c"]),
        description: p.intl.string(p.t["/fDyO+"]),
        imageSource: k(i, O, v),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: p.intl.string(p.t["1c+xwT"]),
        description: p.intl.string(p.t.hJG8ZN),
        imageSource: k(i, S, L),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: p.intl.string(p.t.tzdIwI),
        description: p.intl.string(p.t.hJG8ZN),
        imageSource: k(i, S, L),
        imageClassName: t.stickersImage
      },
      stickersPremiumPerk: {
        title: p.intl.string(p.t.tzdIwI),
        description: p.intl.string(p.t.hJG8ZN),
        imageSource: k(i, S, L),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: p.intl.string(p.t.RSXQYO),
        description: p.intl.string(p.t.ymCPxp),
        imageSource: j,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: p.intl.string(p.t["uZt5q/"]),
        description: p.intl.string(p.t.ZK3ZoX),
        imageSource: k(i, I, T),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: p.intl.formatToPlainString(p.t.jqhAdL, {
          premiumMaxSize: Z
        }),
        description: p.intl.formatToPlainString(p.t["HI+cfm"], {
          premiumMaxSize: Z
        }),
        imageSource: M,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: p.intl.string(p.t.NaGpTf),
        description: p.intl.string(p.t["A8O/Qw"]),
        imageSource: k(i, A, C),
        imageClassName: t.videoBackgroundImage
      }
    }
  }