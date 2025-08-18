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
    L = (0, o.wjy)((0, s.ZP)()),
    {
      chatWallpaper: M,
      isUpdatingChatWallpaperFlag: k,
      lastSetMessageId: U
    } = (0, l.cj)([_.Z], () => ({
      chatWallpaper: _.Z.getWallpaperById(w),
      isUpdatingChatWallpaperFlag: _.Z.isUpdatingChatWallpaperFlagForChannel(N.id),
      lastSetMessageId: _.Z.getLastSetWallpaperMessageIdForChannel(N.id)
    })),
    F = (0, b.Z)(N.id),
    B = U === P.id,
    G = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
    H = (null == G ? true : G.id) === P.author.id,
    V = (0, u.m)(v.p9.TIER_2),
    z = g.t(N);
  return (i.useEffect(() => {
    null == M && _.Z.shouldFetchWallpapers && h.k9()
  }, [M]), null == w) ? null : (I = H ? O.intl.format(O.t.z847Tk, {
    wallpaper_name: null != (n = null == M ? true : M.label) ? n : O.intl.string(O.t["UQMV/P"])
  }) : O.intl.format(O.t["+lKndX"], {
    username: null == D ? true : D.nick,
    wallpaper_name: null != (x = null == M ? true : M.label) ? x : O.intl.string(O.t["UQMV/P"])
  }), Z ? L || R ? z && B ? S = O.intl.formatToPlainString(O.t.PzTpVV, {
    wallpaperName: null != (j = null == M ? true : M.label) ? j : O.intl.string(O.t["UQMV/P"])
  }) : H || V || !B || (S = O.intl.format(O.t.JwUhHh, {
    onClickNitro: () => {
      (0, d.uL)(C.Z5c.NITRO_HOME)
    }
  })) : S = O.intl.format(O.t.dBxFsL, {
    learnMoreLink: m.Z.getArticleURL(C.BhN.DM_WALLPAPERS)
  }) : S = O.intl.string(O.t["6JSOu7"]), (null == F ? true : F.isViewable) && B && !H && (T = (0, r.jsx)("div", {
    className: y.action,
    children: (0, r.jsx)(a.z, {
      variant: "primary",
      text: O.intl.string(z ? O.t.o6850d : O.t["/ubFp6"]),
      loading: k,
      onClick: () => {
        h.X(N, w, {
          shouldClear: !z,
          onError: () => {
            (0, o.showToast)((0, o.createToast)(O.intl.string(O.t.F8FvU1), o.ToastType.FAILURE))
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