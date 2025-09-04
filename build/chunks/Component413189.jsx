/** Chunk was on web.js **/
/** chunk id: 413189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411149 = require("./411149.js"),
  Chunk115215 = require("./115215.js"),
  Chunk151480 = require("./151480.js"),
  Chunk680783 = require("./680783.js"),
  Chunk66420 = require("./66420.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk664677 = require("./664677.js");

function g(e) {
  var t, n, g;
  let E, b, {
      message: y,
      channel: O,
      compact: v
    } = e,
    I = null == (t = y.chatWallpaperInfo) ? true : t.wallpaperId,
    T = (0, l.ZP)(y),
    {
      chatWallpaper: S,
      isUpdatingChatWallpaperFlag: A,
      lastSetMessageId: C
    } = (0, a.cj)([u.Z], () => ({
      chatWallpaper: u.Z.getWallpaperById(I),
      isUpdatingChatWallpaperFlag: u.Z.isUpdatingChatWallpaperFlagForChannel(O.id),
      lastSetMessageId: u.Z.getLastSetWallpaperMessageIdForChannel(O.id)
    })),
    N = (0, _.Z)(O.id),
    R = C === y.id,
    P = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
    w = (null == P ? true : P.id) === y.author.id,
    D = d.t(O);
  if (i.useEffect(() => {
      null == S && u.Z.shouldFetchWallpapers && f.k9()
    }, [S]), null == I) return null;
  E = w ? h.intl.format(h.t.z847Tk, {
    wallpaper_name: null != (n = null == S ? true : S.label) ? n : h.intl.string(h.t["UQMV/P"])
  }) : h.intl.format(h.t["+lKndX"], {
    username: null == T ? true : T.nick,
    wallpaper_name: null != (g = null == S ? true : S.label) ? g : h.intl.string(h.t["UQMV/P"])
  });
  let x = h.intl.string(h.t["6JSOu7"]);
  return (null == N ? true : N.isViewable) && R && !w && (b = (0, r.jsx)("div", {
    className: m.action,
    children: (0, r.jsx)(o.z, {
      variant: "primary",
      text: h.intl.string(D ? h.t.o6850d : h.t["/ubFp6"]),
      loading: A,
      onClick: () => {
        f.X(O, I, {
          shouldClear: !D,
          onError: () => {
            (0, s.showToast)((0, s.createToast)(h.intl.string(h.t.F8FvU1), s.ToastType.FAILURE))
          }
        })
      }
    })
  })), (0, r.jsx)(p.Z, {
    channel: O,
    content: E,
    subtitle: x,
    action: b,
    compact: v,
    message: y
  })
}