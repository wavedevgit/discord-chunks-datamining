/** Chunk was on 44799 **/
/** chunk id: 857666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  f: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk905128 = require("./905128.js"),
  Chunk639777 = require("./639777.js"),
  Chunk169010 = require("./169010.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk46310 = require("./46310.js"),
  Chunk175435 = require("./175435.js");

function v(e, t) {
  var v;
  let b = null != (v = (0, u.Z)(t)) && v,
    h = (0, l.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    j = (0, l.e7)([c.Z], () => {
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
        } = e, d = _.intl.string(f.default.KC9HRU), v = _.intl.string(f.default.GJiSmJ), b = null == l ? true : l[i.IN], h = (null == c ? true : c[i.IN]) != null, j = _.intl.string(f.default["/egwJC"]), C = h ? true : _.intl.string(f.default.W6Vwn5), E = h ? true : _.intl.string(f.default.lvk1GR), I = h ? _.intl.string(f.default["9CfkLC"]) : _.intl.string(_.t["+7XY39"]), N = h ? "secondary" : "expressive", w = o ? () => {
          h ? a.Z.open(t, m.pNK.TAG, m.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != b && (0, p.KE)(t, b), (0, s.pTH)()
        } : true;
        return {
          title: d,
          description: v,
          openModal: function(e) {
            let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
            (0, s.ZDy)(async () => {
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
                description: _.intl.string(f.default.BBRFRU),
                powerups: e,
                footerInfoText: E,
                footerAction: o && null != w && null != I ? {
                  variant: N,
                  text: I,
                  icon: "expressive" === N ? s.$Eu : true,
                  onClick: w
                } : true
              }, n))
            }, {
              onCloseCallback: null == i ? true : i.onModalClose
            })
          },
          viewCta: j,
          viewCtaTooltip: C,
          badge: "beta",
          image: {
            staticUrl: g.Z,
            animatedUrl: x.Z
          },
          skuIds: u
        }
      }({
        guildId: t,
        canUseBoosts: b,
        allPowerups: h,
        unlockedPowerups: j,
        skuIds: d.z[e]
      }) : true,
      l = {};
    for (let t of e) {
      let e = o(t);
      null != e && (l[t] = e)
    }
    return l
  }, [e, t, b, h, j])
}

function b(e, t) {
  return v([e], t)[e]
}