/** Chunk was on 44799 **/
/** chunk id: 857666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  f: () => _
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
  Chunk789142 = require("./789142.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk46310 = require("./46310.js"),
  Chunk175435 = require("./175435.js");

function _(e, t) {
  var _;
  let b = null != (_ = (0, u.Z)(t)) && _,
    h = (0, l.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    j = (0, l.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return i.useMemo(() => {
    let i = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: i,
          allPowerups: l,
          unlockedPowerups: c,
          skuIds: u
        } = e, d = g.intl.string(m.default.KC9HRW), _ = g.intl.string(m.default.GJiSmP), b = null == l ? true : l[o.IN], h = (null == c ? true : c[o.IN]) != null, j = g.intl.string(m.default["/egwJA"]), C = h ? true : g.intl.string(m.default.W6Vwn3), w = h ? true : g.intl.string(m.default.lvk1Gc), I = h ? g.intl.string(m.default["9CfkLO"]) : g.intl.string(g.t["+7XY31"]), E = h ? "secondary" : "expressive", Z = i ? () => {
          h ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != b && (0, p.KE)(t, b), (0, a.pTH)()
        } : true;
        return {
          title: d,
          description: _,
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
                description: g.intl.string(m.default.BBRFRd),
                powerups: e,
                footerInfoText: w,
                footerAction: i && null != Z && null != I ? {
                  variant: E,
                  text: I,
                  icon: "expressive" === E ? a.Ucv : true,
                  onClick: Z
                } : true
              }, n))
            }, {
              onCloseCallback: null == o ? true : o.onModalClose
            })
          },
          viewCta: j,
          viewCtaTooltip: C,
          image: {
            staticUrl: x.Z,
            animatedUrl: v.Z
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
      let e = i(t);
      null != e && (l[t] = e)
    }
    return l
  }, [e, t, b, h, j])
}

function b(e, t) {
  return _([e], t)[e]
}