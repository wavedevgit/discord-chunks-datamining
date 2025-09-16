/** Chunk was on 44799 **/
/** chunk id: 857666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  f: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk905128 = require("./905128.js"),
  Chunk639777 = require("./639777.js"),
  Chunk169010 = require("./169010.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk592281 = require("./592281.js"),
  Chunk337003 = require("./337003.js");

function x(e, t) {
  var x;
  let h = null != (x = (0, u.Z)(t)) && x,
    C = (0, l.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    b = (0, l.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return o.useMemo(() => {
    let o = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: o,
          allPowerups: l,
          unlockedPowerups: c,
          skuIds: u
        } = e, d = f.intl.string(g.default.KC9HRU), x = f.intl.string(g.default.GJiSmJ), h = null == l ? true : l[i.IN], C = (null == c ? true : c[i.IN]) != null, b = f.intl.string(g.default["/egwJC"]), E = C ? true : f.intl.string(g.default.W6Vwn5), j = C ? true : f.intl.string(g.default.lvk1GR), T = C ? f.intl.string(g.default["9CfkLC"]) : f.intl.string(f.t["+7XY39"]), P = C ? "secondary" : "expressive", I = o ? () => {
          C ? s.Z.open(t, m.pNK.TAG, m.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != h && (0, p.KE)(t, h), (0, a.pTH)()
        } : true;
        return {
          title: d,
          description: x,
          openModal: function(e) {
            let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
            (0, a.ZDy)(async () => {
              let {
                default: i
              } = await n.e("64767").then(n.bind(n, 754887));
              return n => (0, r.jsx)(i, function(e) {
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
              }({
                guildId: t,
                title: d,
                description: f.intl.string(g.default.BBRFRU),
                powerups: e,
                footerInfoText: j,
                footerAction: o && null != I && null != T ? {
                  variant: P,
                  text: T,
                  icon: "expressive" === P ? a.$Eu : true,
                  onClick: I
                } : true
              }, n))
            }, {
              onCloseCallback: null == i ? true : i.onModalClose
            })
          },
          viewCta: b,
          viewCtaTooltip: E,
          image: {
            staticUrl: _.Z,
            animatedUrl: v.Z
          },
          skuIds: u
        }
      }({
        guildId: t,
        canUseBoosts: h,
        allPowerups: C,
        unlockedPowerups: b,
        skuIds: d.z[e]
      }) : true,
      l = {};
    for (let t of e) {
      let e = o(t);
      null != e && (l[t] = e)
    }
    return l
  }, [e, t, h, C, b])
}

function h(e, t) {
  return x([e], t)[e]
}