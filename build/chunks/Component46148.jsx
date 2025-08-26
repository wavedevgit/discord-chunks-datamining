/** Chunk was on 91488 **/
/** chunk id: 46148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk865696 = require("./865696.js"),
  Chunk777091 = require("./777091.js");

function x(e) {
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
let C = Chunk647438.memo(function(e) {
  let t = e.channel.id,
    n = e.selected,
    C = (0, c.Nj)(o.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
    S = (0, l.e7)([p.Z], () => p.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
    {
      canAccessPicker: E,
      entryPoint: P
    } = (0, f.m)({
      location: "ChatWallpaperDMListCoachmark",
      channelId: t
    }),
    I = P === h.FN.CONTEXT_MENU,
    [N, w] = (0, u.US)(C && I && n && E && !S ? [o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
    Z = (0, d.m)(y.p9.TIER_2),
    T = (0, g.Z)(t),
    A = N === o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
    R = (0, i.useRef)(null),
    D = (0, i.useRef)(null),
    M = (0, i.useRef)(null),
    [L, k] = (0, i.useState)(m.U.TOP);
  if ((0, i.useLayoutEffect)(() => {
      if (null === R.current) return;
      let e = () => {
        var e, t, n;
        let r = null == (e = R.current) ? true : e.getBoundingClientRect();
        if (null == r) return;
        let i = null != (n = null == (t = M.current) ? true : t.getBoundingClientRect().height) ? n : 0;
        window.innerHeight - r.bottom < i ? k(m.U.BOTTOM) : k(m.U.TOP)
      };
      return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, [A]), !A) return (0, r.jsx)(s.ZP, x({}, e));
  let U = () => {
      w(O.L.USER_DISMISS)
    },
    G = ((e, t) => {
      let n = null != t && !t.isPreview;
      return e ? e && !n ? "no-wallpaper-nitro" : "has-wallpaper-nitro" : "non-nitro"
    })(Z, null != T ? T : null),
    B = "has-wallpaper-nitro" === G ? _.intl.string(_.t.T9dXPj) : _.intl.string(_.t.zyvzQ0),
    F = (e => {
      switch (e) {
        case "non-nitro":
          return _.intl.string(_.t.VU8fxM);
        case "no-wallpaper-nitro":
          return _.intl.string(_.t.BQBNjY);
        case "has-wallpaper-nitro":
          return _.intl.string(_.t.eZMxlZ)
      }
    })(G);
  return (0, r.jsx)("div", {
    ref: R,
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: D,
      align: L,
      position: "right",
      shouldShow: A,
      onRequestClose: U,
      renderPopout: () => (0, r.jsx)(m.Z, {
        ref: M,
        onClose: U,
        buttonText: _.intl.string(_.t["+IrDzM"]),
        header: B,
        art: (0, r.jsx)("img", {
          src: j.Z,
          alt: "",
          className: v.chatWallpaperDMListCoachmarkArt
        }),
        body: F,
        align: L
      }),
      children: t => {
        var n, i;
        return (0, r.jsx)(s.ZP, (n = x({}, e), i = i = {
          ref: D
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