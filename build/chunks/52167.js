/** Chunk was on 5606 **/
/** chunk id: 52167, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => U
});
var Chunk417597 = require("./417597.js"),
  Chunk582754 = require("./582754.js"),
  Chunk736653 = require("./736653.js"),
  Chunk780964 = require("./780964.js"),
  Chunk287809 = require("./287809.js"),
  Chunk255438 = require("./255438.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk420643 = require("./420643.js"),
  Chunk755165 = require("./755165.js"),
  Chunk542838 = require("./542838.js"),
  Chunk9523 = require("./9523.js"),
  Chunk416999 = require("./416999.js"),
  Chunk338832 = require("./338832.js"),
  Chunk252373 = require("./252373.js"),
  Chunk522799 = require("./522799.js"),
  Chunk795710 = require("./795710.js"),
  Chunk484813 = require("./484813.js"),
  Chunk1748 = require("./1748.js"),
  Chunk772473 = require("./772473.js"),
  Chunk64514 = require("./64514.js"),
  Chunk121818 = require("./121818.js"),
  Chunk536851 = require("./536851.js"),
  Chunk992186 = require("./992186.js"),
  Chunk629139 = require("./629139.js"),
  Chunk753563 = require("./753563.js"),
  Chunk584378 = require("./584378.js"),
  Chunk747918 = require("./747918.js"),
  Chunk330290 = require("./330290.js"),
  Chunk252261 = require("./252261.js"),
  Chunk106731 = require("./106731.js");
let G = (e, t, n) => (0, i.Mw)(e) ? t : n,
  U = e => {
    let {
      styles: t
    } = e, i = (0, l.Ay)(), U = (0, r.bG)([a.default], () => {
      let e = a.default.getCurrentUser();
      return c.Ay.canUsePremiumProfileCustomization(e)
    }), k = (0, o.Xq)(d.f3 / 1024, {
      useKibibytes: true
    });
    return {
      badge: {
        title: _.intl.string(_.t.SS87rQ),
        description: _.intl.string(_.t.oD6CRr),
        imageSource: f,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: _.intl.string(_.t["5cYMu0"]),
        description: _.intl.string(_.t.vxk9va),
        imageSource: G(i, m, g),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: _.intl.string(_.t["/xvEMy"]),
        description: _.intl.string(_.t.HKWdjj),
        className: t.clientThemesCard,
        imageSource: S,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: _.intl.string(_.t.OuItFi),
        description: _.intl.string(_.t.mPyrE6),
        imageSource: I,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: _.intl.string(_.t["R2IV/Q"]),
        description: _.intl.string(_.t.R5Xag2),
        imageSource: N,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: _.intl.string(_.t.lKDhhJ),
        description: e => {
          let t = () => {
            {
              let {
                openUserSettings: t
              } = n(840065);
              t(s.X.PROFILE_PANEL, {
                section: u.nc_.PROFILE_CUSTOMIZATION,
                scrollPosition: p._F.TRY_IT_OUT,
                analyticsLocations: e
              })
            }
          };
          return U ? _.intl.format(_.t.aj1pfZ, {
            onCheckItOutClick: t
          }) : _.intl.format(_.t.d2oYS8, {
            onTryItOutClick: t
          })
        },
        imageSource: h,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: _.intl.string(_.t.BUScid),
        description: _.intl.string(_.t.vN6XpQ),
        imageSource: G(i, P, R),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: _.intl.string(_.t.Bv8Pfk),
        description: _.intl.string(_.t.JMfaTU),
        imageSource: G(i, b, D),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: _.intl.string(_.t.Bv8Pfk),
        description: _.intl.string(_.t.JMfaTU),
        imageSource: G(i, A, E),
        imageClassName: t.moreGuildsAltImage
      },
      soundboard: {
        title: _.intl.string(_.t["lGcW+c"]),
        description: _.intl.string(_.t["/fDyO+"]),
        imageSource: G(i, x, O),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: _.intl.string(_.t["1c+xwT"]),
        description: _.intl.string(_.t.hJG8ZN),
        imageSource: G(i, C, w),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: _.intl.string(_.t.tzdIwI),
        description: _.intl.string(_.t.hJG8ZN),
        imageSource: G(i, C, w),
        imageClassName: t.stickersImage
      },
      stickersPremiumPerk: {
        title: _.intl.string(_.t.tzdIwI),
        description: _.intl.string(_.t.hJG8ZN),
        imageSource: G(i, C, w),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: _.intl.string(_.t.RSXQYO),
        description: _.intl.string(_.t.ymCPxp),
        imageSource: L,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: _.intl.string(_.t["uZt5q/"]),
        description: _.intl.string(_.t.ZK3ZoX),
        imageSource: G(i, y, j),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: _.intl.formatToPlainString(_.t.jqhAdL, {
          premiumMaxSize: k
        }),
        description: _.intl.formatToPlainString(_.t["HI+cfm"], {
          premiumMaxSize: k
        }),
        imageSource: M,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: _.intl.string(_.t.NaGpTf),
        description: _.intl.string(_.t["A8O/Qw"]),
        imageSource: G(i, T, v),
        imageClassName: t.videoBackgroundImage
      }
    }
  }