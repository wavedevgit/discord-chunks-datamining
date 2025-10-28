/** Chunk was on 36925 **/
/** chunk id: 486311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk713081 = require("./713081.js"),
  Chunk326660 = require("./326660.js"),
  Chunk441536 = require("./441536.js"),
  Chunk933104 = require("./933104.jsx"),
  Chunk332538 = require("./332538.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk459196 = require("./459196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969649 = require("./969649.js");

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
let v = {
    animation: {
      BEG: 0,
      END: 75
    },
    LOOP: {
      BEG: 76,
      END: 376
    }
  },
  C = Chunk647438.memo(function(e) {
    let {
      guildId: t,
      selected: l
    } = e, C = (0, m.ZP)(t), x = i.useCallback(() => {
      var e;
      (0, p.jd)(t), (0, h.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == C || null == (e = C.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION)
    }, [t, C]), E = i.useCallback(() => {
      var e;
      switch (null == C || null == (e = C.popout) ? true : e.type) {
        case f.J.LEVEL_REACHED:
          return (0, r.jsx)(g.jG, j({
            guildId: t
          }, C.popout));
        case f.J.PERKS_AVAILABLE:
          return (0, r.jsx)(g.$h, j({
            guildId: t
          }, C.popout));
        case f.J.PERKS_PURCHASABLE:
          return (0, r.jsx)(g.yI, j({
            guildId: t
          }, C.popout));
        case f.J.NEW_PERK_AVAILABLE:
          return (0, r.jsx)(g.cO, j({
            guildId: t
          }, C.popout));
        case f.J.GAME_SERVER_HOSTING_AVAILABLE:
        case f.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
          return (0, r.jsx)(g.dJ, j({
            guildId: t
          }, C.popout));
        default:
          return (0, r.jsx)("div", {})
      }
    }, [t, null == C ? true : C.popout]), S = (0, s.s9z)(s.JQI), I = (0, a.e7)([d.Z], () => d.Z.hasLayers()), [P, N] = i.useState(null), Z = null == P ? "animation" : "LOOP";
    i.useEffect(() => {
      (null == C ? true : C.popout) == null && N(null)
    }, [null == C ? true : C.popout]);
    let T = i.useCallback(e => {
        N(e)
      }, []),
      w = i.useRef(null);
    return (0, r.jsx)(s.yRy, {
      targetElementRef: w,
      shouldShow: (null == C ? true : C.popout) != null && !(S || I),
      nudgeAlignIntoViewport: true,
      animationPosition: "bottom",
      position: "right",
      renderPopout: E,
      children: e => {
        var i, a;
        return (0, r.jsx)(u.m, (i = j({}, e), a = a = {
          ref: w,
          className: y.container,
          id: "skill-trees-".concat(t),
          renderIcon: e => (0, r.jsx)(s.Ucv, {
            size: "md",
            className: e,
            color: "currentColor"
          }),
          background: (null == C ? true : C.popout) != null && (0, r.jsx)("div", {
            className: y.lottieContainer,
            children: (0, r.jsx)(s.kci, {
              nextScene: Z,
              className: y.lottie,
              sceneSegments: v,
              importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
              onScenePlay: T,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            })
          }),
          text: (0, r.jsx)("span", {
            className: o()({
              [y.textImportant]: (null == C ? true : C.showUnread) === true
            }),
            children: O.intl.string(_.default.yv3DJJ)
          }),
          selected: l,
          onClick: x,
          showUnread: (null == C ? true : C.showUnread) === true,
          trailing: null == C ? true : C.trailing
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    })
  })