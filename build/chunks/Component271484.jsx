/** Chunk was on 88615 **/
/** chunk id: 271484, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  g: () => A
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

function A(e, t) {
  var A;
  let _ = null != (A = (0, d.A)(t)) && A,
    x = (0, o.bG)([u.A], () => {
      var e;
      return null == (e = u.A.getStateForGuild(t)) ? true : e.allPowerups
    }),
    h = (0, o.bG)([u.A], () => {
      var e;
      return null == (e = u.A.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return l.useMemo(() => {
    let l = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: l,
          allPowerups: o,
          unlockedPowerups: u
        } = e, d = f.intl.string(m.default.KC9HRW), A = f.intl.string(m.default.GJiSmP), _ = null == o ? true : o[i.SL], x = (null == u ? true : u[i.SL]) != null, h = f.intl.string(m.default["/egwJA"]), b = x ? true : f.intl.string(m.default.W6Vwn3), j = x ? true : f.intl.string(m.default.lvk1Gc), E = x ? f.intl.string(m.default["9CfkLO"]) : f.intl.string(f.t["+7XY31"]), w = x ? "secondary" : "expressive", y = l ? () => {
          x ? a.A.open(t, p.BEX.TAG, p.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != _ && (0, c.A)(t, _), (0, s.s7G)()
        } : true;
        return {
          title: d,
          description: A,
          openModal: function(e) {
            let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
            (0, s.mMO)(async () => {
              let {
                default: i
              } = await n.e("56065").then(n.bind(n, 534904));
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
                description: f.intl.string(m.default.BBRFRd),
                powerups: e,
                footerInfoText: j,
                footerAction: l && null != y && null != E ? {
                  variant: w,
                  text: E,
                  icon: "expressive" === w ? s._Jp : true,
                  onClick: y
                } : true
              }, n))
            }, {
              onCloseCallback: null == i ? true : i.onModalClose
            })
          },
          viewCta: h,
          viewCtaTooltip: b,
          image: {
            staticUrl: g.A,
            animatedUrl: v.A
          }
        }
      }({
        guildId: t,
        canUseBoosts: _,
        allPowerups: x,
        unlockedPowerups: h
      }) : true,
      o = {};
    for (let t of e) {
      let e = l(t);
      null != e && (o[t] = e)
    }
    return o
  }, [e, t, _, x, h])
}

function _(e, t) {
  return A([e], t)[e]
}