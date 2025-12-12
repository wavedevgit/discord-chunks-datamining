/** Chunk was on 44799 **/
/** chunk id: 857666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
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
  Chunk5238 = require("./5238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk46310 = require("./46310.js"),
  Chunk175435 = require("./175435.js");

function x(e, t) {
  var x;
  let _ = null != (x = (0, d.Z)(t)) && x,
    b = (0, o.e7)([u.Z], () => {
      var e;
      return null == (e = u.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    h = (0, o.e7)([u.Z], () => {
      var e;
      return null == (e = u.Z.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return i.useMemo(() => {
    let i = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: i,
          allPowerups: o,
          unlockedPowerups: u
        } = e, d = m.intl.string(f.default.KC9HRW), x = m.intl.string(f.default.GJiSmP), _ = null == o ? true : o[l.IN], b = (null == u ? true : u[l.IN]) != null, h = m.intl.string(f.default["/egwJA"]), j = b ? true : m.intl.string(f.default.W6Vwn3), C = b ? true : m.intl.string(f.default.lvk1Gc), Z = b ? m.intl.string(f.default["9CfkLO"]) : m.intl.string(m.t["+7XY31"]), w = b ? "secondary" : "expressive", I = i ? () => {
          b ? s.Z.open(t, p.pNK.TAG, p.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != _ && (0, c.KE)(t, _), (0, a.pTH)()
        } : true;
        return {
          title: d,
          description: x,
          openModal: function(e) {
            let l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
            (0, a.ZDy)(async () => {
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
                description: m.intl.string(f.default.BBRFRd),
                powerups: e,
                footerInfoText: C,
                footerAction: i && null != I && null != Z ? {
                  variant: w,
                  text: Z,
                  icon: "expressive" === w ? a.Ucv : true,
                  onClick: I
                } : true
              }, n))
            }, {
              onCloseCallback: null == l ? true : l.onModalClose
            })
          },
          viewCta: h,
          viewCtaTooltip: j,
          image: {
            staticUrl: v.Z,
            animatedUrl: g.Z
          }
        }
      }({
        guildId: t,
        canUseBoosts: _,
        allPowerups: b,
        unlockedPowerups: h
      }) : true,
      o = {};
    for (let t of e) {
      let e = i(t);
      null != e && (o[t] = e)
    }
    return o
  }, [e, t, _, b, h])
}

function _(e, t) {
  return x([e], t)[e]
}