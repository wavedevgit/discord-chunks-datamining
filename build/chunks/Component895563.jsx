/** Chunk was on 56826 **/
/** chunk id: 895563, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  P: () => b,
  l: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984933 = require("./984933.js"),
  Chunk853856 = require("./853856.js"),
  Chunk117984 = require("./117984.js"),
  Chunk593214 = require("./593214.js"),
  Chunk362658 = require("./362658.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function j(e, n) {
  return e.type === h.d4z.GROUP_DM ? n ? g.intl.string(g.t["0BWmSM"]) : g.intl.string(g.t.uuVTOK) : e.type === h.d4z.DM ? n ? g.intl.string(g.t["2wfKGo"]) : g.intl.string(g.t.wPbAse) : n ? g.intl.string(g.t.Bou7lT) : g.intl.string(g.t["4wcdE/"])
}

function p(e) {
  let n = (0, a.e7)([o.ZP], () => o.ZP.getChannels(h.I_8))[h.d4z.GUILD_CATEGORY],
    {
      isFavoritesPerk: t
    } = (0, f.z)("58e21a_1"),
    {
      notifyFavoriteAdded: r
    } = (0, u.up)();
  if (!(0, u.li)(e)) return null;
  let [
    [d], g
  ] = l().partition(n, e => "null" === e.channel.id);

  function p(n) {
    r(), (0, c.kj)(e.id, n)
  }
  return 0 === g.length ? (0, i.jsx)(s.sNh, {
    id: "favorite-channel",
    label: j(e, false),
    action: () => p(null)
  }) : (0, i.jsxs)(s.sNh, {
    id: "favorite-channel",
    label: j(e, false),
    action: () => p(null),
    children: [t && (0, i.jsx)(s.kSQ, {
      children: (0, i.jsx)(s.sNh, {
        id: "favorite-".concat(d.channel.id),
        label: d.channel.name,
        action: () => p("null" === d.channel.id ? null : d.channel.id)
      }, d.channel.id)
    }), (0, i.jsx)(s.kSQ, {
      children: g.map(e => (0, i.jsx)(s.sNh, {
        id: "favorite-".concat(e.channel.id),
        label: e.channel.name,
        action: () => p(e.channel.id)
      }, e.channel.id))
    })]
  })
}

function b(e) {
  let n = (0, a.e7)([d.Z], () => d.Z.isFavorite(e.id));
  return __OVERLAY__ || !n ? null : (0, i.jsx)(s.sNh, {
    id: "favorite-channel",
    label: j(e, true),
    color: "danger",
    action: () => e.type === h.d4z.GUILD_CATEGORY ? (0, s.ZDy)(async () => {
      let {
        default: n
      } = await t.e("37720").then(t.bind(t, 357632));
      return t => {
        var r, l;
        return (0, i.jsx)(n, (r = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              i = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.forEach(function(n) {
              var i;
              i = t[n], n in e ? Object.defineProperty(e, n, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = i
            })
          }
          return e
        }({}, t), l = l = {
          onConfirm: () => {
            t.onClose(), (0, c.oC)(e.id)
          },
          channel: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t.push.apply(t, i)
          }
          return t
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    }) : (0, c.oC)(e.id)
  })
}