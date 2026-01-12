/** Chunk was on 44799 **/
/** chunk id: 857666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  f: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk905128 = require("./905128.js"),
  Chunk639777 = require("./639777.js"),
  Chunk196806 = require("./196806.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk592281 = require("./592281.js"),
  Chunk337003 = require("./337003.js");

function x(e, t) {
  var x;
  let b = null != (x = (0, c.Z)(t)) && x,
    h = (0, l.e7)([u.Z], () => {
      var e;
      return null == (e = u.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    j = (0, l.e7)([u.Z], () => {
      var e;
      return null == (e = u.Z.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return i.useMemo(() => {
    let i = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: i,
          allPowerups: l,
          unlockedPowerups: u
        } = e, c = m.intl.string(p.default.KC9HRW), x = m.intl.string(p.default.GJiSmP), b = null == l ? true : l[o.IN], h = (null == u ? true : u[o.IN]) != null, j = m.intl.string(p.default["/egwJA"]), Z = h ? true : m.intl.string(p.default.W6Vwn3), w = h ? true : m.intl.string(p.default.lvk1Gc), _ = h ? m.intl.string(p.default["9CfkLO"]) : m.intl.string(m.t["+7XY31"]), C = h ? "secondary" : "expressive", I = i ? () => {
          h ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != b && (0, d.Z)(t, b), (0, a.pTH)()
        } : true;
        return {
          title: c,
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
                title: c,
                description: m.intl.string(p.default.BBRFRd),
                powerups: e,
                footerInfoText: w,
                footerAction: i && null != I && null != _ ? {
                  variant: C,
                  text: _,
                  icon: "expressive" === C ? a.Ucv : true,
                  onClick: I
                } : true
              }, n))
            }, {
              onCloseCallback: null == o ? true : o.onModalClose
            })
          },
          viewCta: j,
          viewCtaTooltip: Z,
          image: {
            staticUrl: g.Z,
            animatedUrl: v.Z
          }
        }
      }({
        guildId: t,
        canUseBoosts: b,
        allPowerups: h,
        unlockedPowerups: j
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
  return x([e], t)[e]
}