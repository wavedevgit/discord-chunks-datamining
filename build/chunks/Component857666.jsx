/** Chunk was on 44799 **/
/** chunk id: 857666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
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
  let b = null != (x = (0, c.Z)(t)) && x,
    h = (0, l.e7)([u.Z], () => {
      var e;
      return null == (e = u.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    C = (0, l.e7)([u.Z], () => {
      var e;
      return null == (e = u.Z.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return i.useMemo(() => {
    let i = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: i,
          allPowerups: l,
          unlockedPowerups: u,
          skuIds: c
        } = e, d = _.intl.string(m.default.KC9HRU), x = _.intl.string(m.default.GJiSmJ), b = null == l ? true : l[o.IN], h = (null == u ? true : u[o.IN]) != null, C = _.intl.string(m.default["/egwJC"]), j = h ? true : _.intl.string(m.default.W6Vwn5), I = h ? true : _.intl.string(m.default.lvk1GR), E = h ? _.intl.string(m.default["9CfkLC"]) : _.intl.string(_.t["+7XY39"]), w = h ? "secondary" : "expressive", Z = i ? () => {
          h ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != b && (0, p.KE)(t, b), (0, a.pTH)()
        } : true;
        return {
          title: d,
          description: x,
          openModal: function(e) {
            let o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
            (0, a.ZDy)(async () => {
              let {
                default: o
              } = await n.e("64767").then(n.bind(n, 754887));
              return n => (0, r.jsx)(o, function(e) {
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
                description: _.intl.string(m.default.BBRFRU),
                powerups: e,
                footerInfoText: I,
                footerAction: i && null != Z && null != E ? {
                  variant: w,
                  text: E,
                  icon: "expressive" === w ? a.$Eu : true,
                  onClick: Z
                } : true
              }, n))
            }, {
              onCloseCallback: null == o ? true : o.onModalClose
            })
          },
          viewCta: C,
          viewCtaTooltip: j,
          badge: "beta",
          image: {
            staticUrl: v.Z,
            animatedUrl: g.Z
          },
          skuIds: c
        }
      }({
        guildId: t,
        canUseBoosts: b,
        allPowerups: h,
        unlockedPowerups: C,
        skuIds: d.z[e]
      }) : true,
      l = {};
    for (let t of e) {
      let e = i(t);
      null != e && (l[t] = e)
    }
    return l
  }, [e, t, b, h, C])
}

function b(e, t) {
  return x([e], t)[e]
}