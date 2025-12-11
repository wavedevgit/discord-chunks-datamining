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
  Chunk238343 = require("./238343.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk981631 = require("./981631.js"),
  Chunk44542 = require("./44542.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk592281 = require("./592281.js"),
  Chunk337003 = require("./337003.js");

function x(e, t) {
  var x;
  let b = null != (x = (0, d.Z)(t)) && x,
    h = (0, a.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    j = (0, a.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return i.useMemo(() => {
    let i = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: i,
          allPowerups: a,
          unlockedPowerups: c
        } = e, d = m.intl.string(p.default.KC9HRW), x = m.intl.string(p.default.GJiSmP), b = null == a ? true : a[l.IN], h = (null == c ? true : c[l.IN]) != null, j = m.intl.string(p.default["/egwJA"]), _ = h ? true : m.intl.string(p.default.W6Vwn3), C = h ? true : m.intl.string(p.default.lvk1Gc), Z = h ? m.intl.string(p.default["9CfkLO"]) : m.intl.string(m.t["+7XY31"]), w = h ? "secondary" : "expressive", I = i ? () => {
          h ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != b && (0, u.KE)(t, b), (0, o.pTH)()
        } : true;
        return {
          title: d,
          description: x,
          openModal: function(e) {
            let l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
            (0, o.ZDy)(async () => {
              let {
                default: l
              } = await n.e("64767").then(n.bind(n, 754887));
              return n => (0, r.jsx)(l, function(e) {
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
                description: m.intl.string(p.default.BBRFRd),
                powerups: e,
                footerInfoText: C,
                footerAction: i && null != I && null != Z ? {
                  variant: w,
                  text: Z,
                  icon: "expressive" === w ? o.Ucv : true,
                  onClick: I
                } : true
              }, n))
            }, {
              onCloseCallback: null == l ? true : l.onModalClose
            })
          },
          viewCta: j,
          viewCtaTooltip: _,
          image: {
            staticUrl: v.Z,
            animatedUrl: g.Z
          }
        }
      }({
        guildId: t,
        canUseBoosts: b,
        allPowerups: h,
        unlockedPowerups: j
      }) : true,
      a = {};
    for (let t of e) {
      let e = i(t);
      null != e && (a[t] = e)
    }
    return a
  }, [e, t, b, h, j])
}

function b(e, t) {
  return x([e], t)[e]
}