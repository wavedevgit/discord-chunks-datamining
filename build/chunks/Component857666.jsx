/** Chunk was on 44799 **/
/** chunk id: 857666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  f: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk905128 = require("./905128.js"),
  Chunk639777 = require("./639777.js"),
  Chunk169010 = require("./169010.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk46310 = require("./46310.js"),
  Chunk175435 = require("./175435.js");

function _(e, t) {
  var _;
  let b = null != (_ = (0, u.Z)(t)) && _,
    j = (0, i.e7)([a.Z], () => {
      var e;
      return null == (e = a.Z.getStateForGuild(t)) ? true : e.allPowerups
    }),
    h = (0, i.e7)([a.Z], () => {
      var e;
      return null == (e = a.Z.getStateForGuild(t)) ? true : e.unlockedPowerups
    });
  return o.useMemo(() => {
    let o = e => "guildTagsBadgePacks" === e ? function(e) {
        let {
          guildId: t,
          canUseBoosts: o,
          allPowerups: i,
          unlockedPowerups: a,
          skuIds: u
        } = e, c = g.intl.string(m.default.KC9HRU), _ = g.intl.string(m.default.GJiSmJ), b = null == i ? true : i[p.IN], j = (null == a ? true : a[p.IN]) != null, h = g.intl.string(m.default["/egwJC"]), E = j ? true : g.intl.string(m.default.W6Vwn5), C = j ? true : g.intl.string(m.default.lvk1GR), I = j ? g.intl.string(m.default["9CfkLC"]) : g.intl.string(m.default.NTuNw8), O = j ? "secondary" : "primary", y = o ? () => {
          j ? s.Z.open(t, f.pNK.TAG, f.jXE.GUILD_POWERUPS_OVERVIEW_CARD) : null != b && (0, d.KE)(t, b), (0, l.pTH)()
        } : true;
        return {
          title: c,
          description: _,
          openModal: e => {
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
                title: c,
                description: _,
                powerups: e,
                footerInfoText: C,
                footerAction: o && null != y && null != I ? {
                  variant: null != O ? O : "secondary",
                  text: I,
                  onClick: y
                } : true
              }, n))
            })
          },
          viewCta: h,
          viewCtaTooltip: E,
          badge: "beta",
          image: {
            staticUrl: v.Z,
            animatedUrl: x.Z
          },
          skuIds: u
        }
      }({
        guildId: t,
        canUseBoosts: b,
        allPowerups: j,
        unlockedPowerups: h,
        skuIds: c.z[e]
      }) : true,
      i = {};
    for (let t of e) {
      let e = o(t);
      null != e && (i[t] = e)
    }
    return i
  }, [e, t, b, j, h])
}

function b(e, t) {
  return _([e], t)[e]
}