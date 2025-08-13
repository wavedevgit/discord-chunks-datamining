/** Chunk was on 41753 **/
/** chunk id: 486311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk18282 = require("./18282.js");

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
  j = Chunk73800.memo(function(e) {
    let {
      guildId: t,
      selected: l
    } = e, j = (0, m.ZP)(t), E = i.useCallback(() => {
      var e;
      (0, h.jd)(t), (0, f.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == j || null == (e = j.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION)
    }, [t, j]), S = i.useCallback(() => {
      var e;
      switch (null == j || null == (e = j.popout) ? true : e.type) {
        case p.J.LEVEL_REACHED:
          return (0, r.jsx)(g.jG, C({
            guildId: t
          }, j.popout));
        case p.J.PERKS_AVAILABLE:
          return (0, r.jsx)(g.$h, C({
            guildId: t
          }, j.popout));
        case p.J.PERKS_PURCHASABLE:
          return (0, r.jsx)(g.yI, C({
            guildId: t
          }, j.popout));
        case p.J.NEW_PERK_AVAILABLE:
          return (0, r.jsx)(g.cO, C({
            guildId: t
          }, j.popout));
        default:
          return (0, r.jsx)("div", {})
      }
    }, [t, null == j ? true : j.popout]), x = (0, a.s9z)(a.JQI), I = (0, s.e7)([d.Z], () => d.Z.hasLayers()), [P, N] = i.useState(null), w = null == P ? "animation" : "LOOP";
    i.useEffect(() => {
      (null == j ? true : j.popout) == null && N(null)
    }, [null == j ? true : j.popout]);
    let Z = i.useCallback(e => {
        N(e)
      }, []),
      T = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
      targetElementRef: T,
      shouldShow: (null == j ? true : j.popout) != null && !(x || I),
      nudgeAlignIntoViewport: true,
      animationPosition: "bottom",
      position: "right",
      renderPopout: S,
      children: e => {
        var i, s;
        return (0, r.jsx)(u.m, (i = C({}, e), s = s = {
          ref: T,
          className: y.container,
          id: "skill-trees-".concat(t),
          renderIcon: e => (0, r.jsx)(a.$Eu, {
            size: "md",
            className: e,
            color: "currentColor"
          }),
          background: (null == j ? true : j.popout) != null && (0, r.jsx)("div", {
            className: y.lottieContainer,
            children: (0, r.jsx)(a.kci, {
              nextScene: w,
              className: y.lottie,
              sceneSegments: v,
              importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
              onScenePlay: Z,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            })
          }),
          text: (0, r.jsx)("span", {
            className: o()({
              [y.textImportant]: (null == j ? true : j.showUnread) === true
            }),
            children: _.intl.string(O.default.yv3DJC)
          }),
          selected: l,
          onClick: E,
          showUnread: (null == j ? true : j.showUnread) === true,
          trailing: null == j ? true : j.trailing
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    })
  })