/** Chunk was on 44799 **/
/** chunk id: 857666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  f: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk639777 = require("./639777.js"),
  Chunk169010 = require("./169010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk46310 = require("./46310.js"),
  Chunk175435 = require("./175435.js");

function m(e, t) {
  let m = (0, s.Z)(t);
  return o.useMemo(() => {
    let o = e => {
        if ("guildTagsBadgePacks" === e) {
          let o = d.intl.string(u.default.KC9HRU),
            s = d.intl.string(u.default.GJiSmJ),
            g = m ? () => {
              l.Z.open(t, c.pNK.TAG, c.jXE.GUILD_POWERUPS_OVERVIEW_CARD), (0, i.pTH)()
            } : true,
            x = m ? d.intl.string(u.default.lvk1GR) : true,
            _ = m ? d.intl.string(u.default["9CfkLC"]) : true;
          return {
            title: o,
            description: s,
            openModal: e => {
              (0, i.ZDy)(async () => {
                let {
                  default: i
                } = await n.e("64767").then(n.bind(n, 754887));
                return n => <i{...function(e) {
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
                  title: o,
                  description: s,
                  powerups: e,
                  footerInfoText: x,
                  footerButtonText: _,
                  footerButtonOnClick: g
                }, n)} />
              })
            },
            badge: "beta",
            image: {
              staticUrl: f.Z,
              animatedUrl: p.Z
            },
            skuIds: a.z[e],
            viewCta: d.intl.string(u.default["/egwJC"])
          }
        }
      },
      s = {};
    for (let t of e) {
      let e = o(t);
      null != e && (s[t] = e)
    }
    return s
  }, [e, t, m])
}

function g(e, t) {
  return m([e], t)[e]
}