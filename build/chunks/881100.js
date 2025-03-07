/** Chunk was on 1815 **/
n.d(t, {
  N: () => M
});
var r = n(399606),
  i = n(780384),
  s = n(230711),
  a = n(410030),
  l = n(594174),
  o = n(424218),
  c = n(74538),
  d = n(474936),
  u = n(981631),
  m = n(526761),
  p = n(388032),
  g = n(323780),
  h = n(101732),
  f = n(450598),
  b = n(633030),
  N = n(97942),
  x = n(269987),
  _ = n(548629),
  E = n(507084),
  j = n(680313),
  C = n(926433),
  O = n(302036),
  v = n(994554),
  S = n(1549),
  T = n(13327),
  I = n(59137),
  y = n(405991),
  A = n(24615),
  P = n(193943),
  R = n(334347),
  D = n(943734),
  Z = n(603076),
  w = n(472656),
  k = n(912429),
  W = n(772969),
  L = n(926262);
let B = (e, t, n) => (0, i.wj)(e) ? t : n,
  M = e => {
    let {
      styles: t
    } = e, n = (0, a.ZP)(), i = (0, r.e7)([l.default], () => {
      let e = l.default.getCurrentUser();
      return c.ZP.canUsePremiumProfileCustomization(e)
    }), M = (0, o.BU)(d.Uq / 1024, {
      useKibibytes: !0
    });
    return {
      badge: {
        title: p.NW.string(p.t.SS87ra),
        description: p.NW.string(p.t.oD6CRk),
        imageSource: f,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: p.NW.string(p.t["5cYMu7"]),
        description: p.NW.string(p.t.vxk9vb),
        imageSource: B(n, g, h),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: p.NW.string(p.t["/xvEMz"]),
        description: p.NW.string(p.t.HKWdjo),
        className: t.clientThemesCard,
        imageSource: A,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: p.NW.string(p.t.OuItFh),
        description: p.NW.string(p.t.mPyrEx),
        imageSource: P,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: p.NW.string(p.t["R2IV/f"]),
        description: p.NW.string(p.t.R5Xag4),
        imageSource: R,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: p.NW.string(p.t.lKDhhI),
        description: e => {
          let t = () => {
            s.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: m.Y_.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return i ? p.NW.format(p.t.aj1pfX, {
            onCheckItOutClick: t
          }) : p.NW.format(p.t.d2oYS0, {
            onTryItOutClick: t
          })
        },
        imageSource: N,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: p.NW.string(p.t.BUSciY),
        description: p.NW.string(p.t.vN6Xpa),
        imageSource: B(n, D, Z),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: p.NW.string(p.t.Bv8Pfn),
        description: p.NW.string(p.t.JMfaTU),
        imageSource: B(n, b, w),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: p.NW.string(p.t.Bv8Pfn),
        description: p.NW.string(p.t.JMfaTU),
        imageSource: B(n, E, j),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: p.NW.string(p.t.ZvulDg),
        description: p.NW.string(p.t["8GwCPT"]),
        imageSource: B(n, x, _),
        imageClassName: t.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: p.NW.string(p.t["lGcW+f"]),
        description: p.NW.string(p.t["/fDyOz"]),
        imageSource: B(n, C, O),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: p.NW.string(p.t["1c+xwc"]),
        description: p.NW.string(p.t.hJG8ZG),
        imageSource: B(n, v, k),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: p.NW.string(p.t.tzdIwM),
        description: p.NW.string(p.t.hJG8ZG),
        imageSource: B(n, v, k),
        imageClassName: t.stickersImage
      },
      stickersPerkDiscoverability: {
        title: p.NW.string(p.t.tzdIwM),
        description: p.NW.string(p.t.FXlU29),
        imageSource: B(n, v, k),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: p.NW.string(p.t.RSXQYG),
        description: p.NW.string(p.t.ymCPxs),
        imageSource: W,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: p.NW.string(p.t.uZt5q6),
        description: p.NW.string(p.t.ZK3Zoa),
        imageSource: B(n, S, T),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: p.NW.formatToPlainString(p.t.jqhAdH, {
          premiumMaxSize: M
        }),
        description: p.NW.formatToPlainString(p.t["HI+cfn"], {
          premiumMaxSize: M
        }),
        imageSource: L,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: p.NW.string(p.t.NaGpTU),
        description: p.NW.string(p.t["A8O/Q0"]),
        imageSource: B(n, I, y),
        imageClassName: t.videoBackgroundImage
      }
    }
  }