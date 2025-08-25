/** Chunk was on web.js **/
/** chunk id: 413189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
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

function T(e) {
  var t, n, T, S;
  let A, C, N, {
      message: R,
      channel: P,
      compact: w
    } = e,
    D = null == (t = R.chatWallpaperInfo) ? true : t.wallpaperId,
    {
      enabled: x
    } = (0, p.sX)({
      location: "ChatWallpaperSetSystemMessage"
    }),
    L = p.qM.useExperiment({
      location: "ChatWallpaperSetSystemMessage"
    }).lightMode,
    j = (0, c.ZP)(R),
    k = (0, s.wjy)((0, l.ZP)()),
    {
      chatWallpaper: M,
      isUpdatingChatWallpaperFlag: U,
      lastSetMessageId: G
    } = (0, a.cj)([h.Z], () => ({
      chatWallpaper: h.Z.getWallpaperById(D),
      isUpdatingChatWallpaperFlag: h.Z.isUpdatingChatWallpaperFlagForChannel(P.id),
      lastSetMessageId: h.Z.getLastSetWallpaperMessageIdForChannel(P.id)
    })),
    B = (0, E.Z)(P.id),
    Z = G === R.id,
    F = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
    V = (null == F ? true : F.id) === R.author.id,
    H = (0, u.m)(O.p9.TIER_2),
    Y = m.t(P);
  return (i.useEffect(() => {
    null == M && h.Z.shouldFetchWallpapers && g.k9()
  }, [M]), null == D) ? null : (A = V ? v.intl.format(v.t.z847Tk, {
    wallpaper_name: null != (n = null == M ? true : M.label) ? n : v.intl.string(v.t["UQMV/P"])
  }) : v.intl.format(v.t["+lKndX"], {
    username: null == j ? true : j.nick,
    wallpaper_name: null != (T = null == M ? true : M.label) ? T : v.intl.string(v.t["UQMV/P"])
  }), x ? k || L ? Y && Z ? C = v.intl.formatToPlainString(v.t.PzTpVV, {
    wallpaperName: null != (S = null == M ? true : M.label) ? S : v.intl.string(v.t["UQMV/P"])
  }) : V || H || !Z || (C = v.intl.format(v.t.JwUhHh, {
    onClickNitro: () => {
      (0, d.uL)(y.Z5c.NITRO_HOME)
    }
  })) : C = v.intl.format(v.t.dBxFsL, {
    learnMoreLink: _.Z.getArticleURL(y.BhN.DM_WALLPAPERS)
  }) : C = v.intl.string(v.t["6JSOu7"]), (null == B ? true : B.isViewable) && Z && !V && (N = (0, r.jsx)("div", {
    className: I.action,
    children: (0, r.jsx)(o.z, {
      variant: "primary",
      text: v.intl.string(Y ? v.t.o6850d : v.t["/ubFp6"]),
      loading: U,
      onClick: () => {
        g.X(P, D, {
          shouldClear: !Y,
          onError: () => {
            (0, s.showToast)((0, s.createToast)(v.intl.string(v.t.F8FvU1), s.ToastType.FAILURE))
          }
        })
      }
    })
  })), (0, r.jsx)(b.Z, {
    channel: P,
    content: A,
    subtitle: C,
    action: N,
    compact: w,
    message: R
  }))
}