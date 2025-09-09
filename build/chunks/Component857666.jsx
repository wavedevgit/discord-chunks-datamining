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
  Chunk46310 = require("./46310.js"),
  Chunk175435 = require("./175435.js");

function x(e, t) {
  var x;
  let h = null != (x = (0, u.Z)(t)) && x,
    b = (0, s.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    C = (0, s.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return o.useMemo(() => {
    let o = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: o,
          allPowerups: s,
          unlockedPowerups: c,
          skuIds: u
        } = e, d = g.intl.string(f.default.KC9HRU), x = g.intl.string(f.default.GJiSmJ), h = null == s ? true : s[i.IN], b = (null == c ? true : c[i.IN]) != null, C = g.intl.string(f.default["/egwJC"]), j = b ? true : g.intl.string(f.default.W6Vwn5), P = b ? true : g.intl.string(f.default.lvk1GR), E = b ? g.intl.string(f.default["9CfkLC"]) : g.intl.string(g.t["+7XY39"]), I = b ? "secondary" : "expressive", T = o ? () => {
          b ? a.Z.open(t, m.pNK.TAG, m.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != h && (0, p.KE)(t, h), (0, l.pTH)()
        } : true;
        return {
          title: d,
          description: x,
          openModal: function(e) {
            let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
            (0, l.ZDy)(async () => {
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
                description: g.intl.string(f.default.BBRFRU),
                powerups: e,
                footerInfoText: P,
                footerAction: o && null != T && null != E ? {
                  variant: I,
                  text: E,
                  icon: "expressive" === I ? l.$Eu : true,
                  onClick: T
                } : true
              }, n))
            }, {
              onCloseCallback: null == i ? true : i.onModalClose
            })
          },
          viewCta: C,
          viewCtaTooltip: j,
          badge: "beta",
          image: {
            staticUrl: _.Z,
            animatedUrl: v.Z
          },
          skuIds: u
        }
      }({
        guildId: t,
        canUseBoosts: h,
        allPowerups: b,
        unlockedPowerups: C,
        skuIds: d.z[e]
      }) : true,
      s = {};
    for (let t of e) {
      let e = o(t);
      null != e && (s[t] = e)
    }
    return s
  }, [e, t, h, b, C])
}

function h(e, t) {
  return x([e], t)[e]
}