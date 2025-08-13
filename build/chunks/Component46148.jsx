/** Chunk was on 41753 **/
/** chunk id: 46148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk819640 = require("./819640.js"),
  Chunk436952 = require("./436952.js"),
  Chunk54480 = require("./54480.js"),
  Chunk680783 = require("./680783.js"),
  Chunk13186 = require("./13186.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk614058 = require("./614058.js"),
  Chunk777091 = require("./777091.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let E = (e, t) => {
    let n = null != t && !t.isPreview;
    return e ? e && !n ? "no-wallpaper-nitro" : "has-wallpaper-nitro" : "non-nitro"
  },
  S = e => "has-wallpaper-nitro" === e ? y.intl.string(y.t.T9dXPj) : y.intl.string(y.t.zyvzQ0),
  x = e => {
    switch (e) {
      case "non-nitro":
        return y.intl.string(y.t.VU8fxM);
      case "no-wallpaper-nitro":
        return y.intl.string(y.t.BQBNjY);
      case "has-wallpaper-nitro":
        return y.intl.string(y.t.eZMxlZ)
    }
  },
  I = Chunk73800.memo(function(e) {
    let t = e.channel.id,
      n = e.selected,
      I = (0, c.Nj)(o.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
      P = (0, l.e7)([h.Z], () => h.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
      {
        canAccessPicker: N,
        entryPoint: w
      } = (0, f.m)({
        location: "ChatWallpaperDMListCoachmark",
        channelId: t
      }),
      Z = w === p.FN.CONTEXT_MENU,
      [T, A] = (0, u.US)(I && Z && n && N && !P ? [o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
      R = (0, d.m)(_.p9.TIER_2),
      D = (0, g.Z)(t),
      L = T === o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
      M = (0, i.useRef)(null),
      k = (0, i.useRef)(null),
      U = (0, i.useRef)(null),
      [G, B] = (0, i.useState)(m.U.TOP);
    if ((0, i.useLayoutEffect)(() => {
        if (null === M.current) return;
        let e = () => {
          var e, t, n;
          let r = null == (e = M.current) ? true : e.getBoundingClientRect();
          if (null == r) return;
          let i = null != (n = null == (t = U.current) ? true : t.getBoundingClientRect().height) ? n : 0;
          window.innerHeight - r.bottom < i ? B(m.U.BOTTOM) : B(m.U.TOP)
        };
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
      }, [L]), !L) return (0, r.jsx)(a.ZP, j({}, e));
    let V = () => {
        A(O.L.USER_DISMISS)
      },
      F = E(R, null != D ? D : null),
      H = S(F),
      z = x(F);
    return (0, r.jsx)("div", {
      ref: M,
      children: (0, r.jsx)(s.yRy, {
        targetElementRef: k,
        align: G,
        position: "right",
        shouldShow: L,
        onRequestClose: V,
        renderPopout: () => (0, r.jsx)(m.Z, {
          ref: U,
          onClose: V,
          buttonText: y.intl.string(y.t["+IrDzM"]),
          header: H,
          art: (0, r.jsx)("img", {
            src: v.Z,
            alt: "",
            className: C.chatWallpaperDMListCoachmarkArt
          }),
          body: z,
          align: G
        }),
        children: t => {
          var n, i;
          return (0, r.jsx)(a.ZP, (n = j({}, e), i = i = {
            ref: k
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      })
    })
  })