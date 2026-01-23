/** Chunk was on web.js **/
/** chunk id: 52167, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
let k = (e, t, n) => (0, i.Mw)(e) ? t : n,
  U = e => {
    let {
      styles: t
    } = e, i = (0, a.Ay)(), U = (0, r.bG)([o.default], () => {
      let e = o.default.getCurrentUser();
      return c.Ay.canUsePremiumProfileCustomization(e)
    }), G = e => {
      let t = () => {
        {
          let {
            openUserSettings: t
          } = n(840065);
          t(s.X.PROFILE_PANEL, {
            section: d.nc_.PROFILE_CUSTOMIZATION,
            scrollPosition: f._F.TRY_IT_OUT,
            analyticsLocations: e
          })
        }
      };
      return U ? p.intl.format(p.t.aj1pfZ, {
        onCheckItOutClick: t
      }) : p.intl.format(p.t.d2oYS8, {
        onTryItOutClick: t
      })
    }, V = (0, l.Xq)(u.f3 / 1024, {
      useKibibytes: true
    });
    return {
      badge: {
        title: p.intl.string(p.t.SS87rQ),
        description: p.intl.string(p.t.oD6CRr),
        imageSource: m,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: p.intl.string(p.t["5cYMu0"]),
        description: p.intl.string(p.t.vxk9va),
        imageSource: k(i, _, h),
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
        imageSource: R,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: p.intl.string(p.t["R2IV/Q"]),
        description: p.intl.string(p.t.R5Xag2),
        imageSource: w,
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
        imageSource: k(i, P, D),
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
        imageSource: k(i, y, b),
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
        imageSource: k(i, A, L),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: p.intl.string(p.t.tzdIwI),
        description: p.intl.string(p.t.hJG8ZN),
        imageSource: k(i, A, L),
        imageClassName: t.stickersImage
      },
      stickersPremiumPerk: {
        title: p.intl.string(p.t.tzdIwI),
        description: p.intl.string(p.t.hJG8ZN),
        imageSource: k(i, A, L),
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
        imageSource: k(i, I, S),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: p.intl.formatToPlainString(p.t.jqhAdL, {
          premiumMaxSize: V
        }),
        description: p.intl.formatToPlainString(p.t["HI+cfm"], {
          premiumMaxSize: V
        }),
        imageSource: M,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: p.intl.string(p.t.NaGpTf),
        description: p.intl.string(p.t["A8O/Qw"]),
        imageSource: k(i, T, C),
        imageClassName: t.videoBackgroundImage
      }
    }
  }