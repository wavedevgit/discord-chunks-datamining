/** Chunk was on 85362 **/
/** chunk id: 46148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => E
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

function C(e) {
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
let E = Chunk647438.memo(function(e) {
  let t = e.channel.id,
    n = e.selected,
    E = (0, c.Nj)(o.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
    x = (0, l.e7)([p.Z], () => p.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
    {
      canAccessPicker: S,
      entryPoint: I
    } = (0, h.m)({
      location: "ChatWallpaperDMListCoachmark",
      channelId: t
    }),
    P = I === f.FN.CONTEXT_MENU,
    [N, w] = (0, u.US)(E && P && n && S && !x ? [o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
    Z = (0, d.m)(O.p9.TIER_2),
    T = (0, g.Z)(t),
    A = N === o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
    R = (0, i.useRef)(null),
    D = (0, i.useRef)(null),
    L = (0, i.useRef)(null),
    [M, k] = (0, i.useState)(m.U.TOP);
  if ((0, i.useLayoutEffect)(() => {
      if (null === R.current) return;
      let e = () => {
        var e, t, n;
        let r = null == (e = R.current) ? true : e.getBoundingClientRect();
        if (null == r) return;
        let i = null != (n = null == (t = L.current) ? true : t.getBoundingClientRect().height) ? n : 0;
        window.innerHeight - r.bottom < i ? k(m.U.BOTTOM) : k(m.U.TOP)
      };
      return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, [A]), !A) return (0, r.jsx)(s.ZP, C({}, e));
  let U = () => {
      w(_.L.USER_DISMISS)
    },
    G = ((e, t) => {
      let n = null != t && !t.isPreview;
      return e ? e && !n ? "no-wallpaper-nitro" : "has-wallpaper-nitro" : "non-nitro"
    })(Z, null != T ? T : null),
    B = "has-wallpaper-nitro" === G ? y.intl.string(y.t.T9dXPj) : y.intl.string(y.t.zyvzQ0),
    V = (e => {
      switch (e) {
        case "non-nitro":
          return y.intl.string(y.t.VU8fxM);
        case "no-wallpaper-nitro":
          return y.intl.string(y.t.BQBNjY);
        case "has-wallpaper-nitro":
          return y.intl.string(y.t.eZMxlZ)
      }
    })(G);
  return (0, r.jsx)("div", {
    ref: R,
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: D,
      align: M,
      position: "right",
      shouldShow: A,
      onRequestClose: U,
      renderPopout: () => (0, r.jsx)(m.Z, {
        ref: L,
        onClose: U,
        buttonText: y.intl.string(y.t["+IrDzM"]),
        header: B,
        art: (0, r.jsx)("img", {
          src: j.Z,
          alt: "",
          className: v.chatWallpaperDMListCoachmarkArt
        }),
        body: V,
        align: M
      }),
      children: t => {
        var n, i;
        return (0, r.jsx)(s.ZP, (n = C({}, e), i = i = {
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