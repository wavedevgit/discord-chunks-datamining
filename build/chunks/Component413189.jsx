/** Chunk was on 91173 **/
/** chunk id: 413189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk739566 = require("./739566.js"),
  Chunk612659 = require("./612659.js"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk436952 = require("./436952.js"),
  Chunk411149 = require("./411149.js"),
  Chunk115215 = require("./115215.js"),
  Chunk151480 = require("./151480.js"),
  Chunk680783 = require("./680783.js"),
  Chunk66420 = require("./66420.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk664677 = require("./664677.js");

function x(e) {
  var t, n, x, j;
  let I, S, T, {
      message: P,
      channel: N,
      compact: A
    } = e,
    w = null == (t = P.chatWallpaperInfo) ? true : t.wallpaperId,
    {
      enabled: Z
    } = (0, f.sX)({
      location: "ChatWallpaperSetSystemMessage"
    }),
    R = f.qM.useExperiment({
      location: "ChatWallpaperSetSystemMessage"
    }).lightMode,
    D = (0, c.ZP)(P),
    L = (0, a.wjy)((0, s.ZP)()),
    {
      chatWallpaper: M,
      isUpdatingChatWallpaperFlag: k,
      lastSetMessageId: U
    } = (0, l.cj)([g.Z], () => ({
      chatWallpaper: g.Z.getWallpaperById(w),
      isUpdatingChatWallpaperFlag: g.Z.isUpdatingChatWallpaperFlagForChannel(N.id),
      lastSetMessageId: g.Z.getLastSetWallpaperMessageIdForChannel(N.id)
    })),
    F = (0, b.Z)(N.id),
    B = U === P.id,
    G = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
    H = (null == G ? true : G.id) === P.author.id,
    V = (0, u.m)(O.p9.TIER_2),
    z = _.t(N);
  return (i.useEffect(() => {
    null == M && g.Z.shouldFetchWallpapers && h.k9()
  }, [M]), null == w) ? null : (I = H ? v.intl.format(v.t.z847Tk, {
    wallpaper_name: null != (n = null == M ? true : M.label) ? n : v.intl.string(v.t["UQMV/P"])
  }) : v.intl.format(v.t["+lKndX"], {
    username: null == D ? true : D.nick,
    wallpaper_name: null != (x = null == M ? true : M.label) ? x : v.intl.string(v.t["UQMV/P"])
  }), Z ? L || R ? z && B ? S = v.intl.formatToPlainString(v.t.PzTpVV, {
    wallpaperName: null != (j = null == M ? true : M.label) ? j : v.intl.string(v.t["UQMV/P"])
  }) : H || V || !B || (S = v.intl.format(v.t.JwUhHh, {
    onClickNitro: () => {
      (0, d.uL)(C.Z5c.NITRO_HOME)
    }
  })) : S = v.intl.format(v.t.dBxFsL, {
    learnMoreLink: m.Z.getArticleURL(C.BhN.DM_WALLPAPERS)
  }) : S = v.intl.string(v.t["6JSOu7"]), (null == F ? true : F.isViewable) && B && !H && (T = (0, r.jsx)("div", {
    className: y.action,
    children: (0, r.jsx)(o.z, {
      variant: "primary",
      text: v.intl.string(z ? v.t.o6850d : v.t["/ubFp6"]),
      loading: k,
      onClick: () => {
        h.X(N, w, {
          shouldClear: !z,
          onError: () => {
            (0, a.showToast)((0, a.createToast)(v.intl.string(v.t.F8FvU1), a.ToastType.FAILURE))
          }
        })
      }
    })
  })), (0, r.jsx)(E.Z, {
    channel: N,
    content: I,
    subtitle: S,
    action: T,
    compact: A,
    message: P
  }))
}