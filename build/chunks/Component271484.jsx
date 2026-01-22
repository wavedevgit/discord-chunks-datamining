/** Chunk was on 88615 **/
/** chunk id: 271484, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => x,
  g: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk645619 = require("./645619.js"),
  Chunk363487 = require("./363487.js"),
  Chunk915667 = require("./915667.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk870166 = require("./870166.js"),
  Chunk849630 = require("./849630.js");

function g(e, t) {
  var g;
  let x = null != (g = (0, d.A)(t)) && g,
    b = (0, s.bG)([u.A], () => {
      var e;
      return null == (e = u.A.getStateForGuild(t)) ? true : e.allPowerups
    }),
    h = (0, s.bG)([u.A], () => {
      var e;
      return null == (e = u.A.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return n.useMemo(() => {
    let n = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: n,
          allPowerups: s,
          unlockedPowerups: u
        } = e, d = m.intl.string(p.default.KC9HRW), g = m.intl.string(p.default.GJiSmP), x = null == s ? true : s[i.SL], b = (null == u ? true : u[i.SL]) != null, h = m.intl.string(p.default["/egwJA"]), j = b ? true : m.intl.string(p.default.W6Vwn3), _ = b ? true : m.intl.string(p.default.lvk1Gc), E = b ? m.intl.string(p.default["9CfkLO"]) : m.intl.string(m.t["+7XY31"]), y = b ? "secondary" : "expressive", I = n ? () => {
          b ? a.A.open(t, f.BEX.TAG, f.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != x && (0, c.A)(t, x), (0, o.s7G)()
        } : true;
        return {
          title: d,
          description: g,
          openModal: function(e) {
            let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
            (0, o.mMO)(async () => {
              let {
                default: i
              } = await l.e("56065").then(l.bind(l, 534904));
              return l => (0, r.jsx)(i, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(l);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable
                  }))), r.forEach(function(t) {
                    var r;
                    r = l[t], t in e ? Object.defineProperty(e, t, {
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
                footerInfoText: _,
                footerAction: n && null != I && null != E ? {
                  variant: y,
                  text: E,
                  icon: "expressive" === y ? o._Jp : true,
                  onClick: I
                } : true
              }, l))
            }, {
              onCloseCallback: null == i ? true : i.onModalClose
            })
          },
          viewCta: h,
          viewCtaTooltip: j,
          image: {
            staticUrl: A.A,
            animatedUrl: v.A
          }
        }
      }({
        guildId: t,
        canUseBoosts: x,
        allPowerups: b,
        unlockedPowerups: h
      }) : true,
      s = {};
    for (let t of e) {
      let e = n(t);
      null != e && (s[t] = e)
    }
    return s
  }, [e, t, x, b, h])
}

function x(e, t) {
  return g([e], t)[e]
}