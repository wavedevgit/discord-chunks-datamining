/** Chunk was on 78580 **/
/** chunk id: 133238, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  m: () => O,
  y: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk808728 = require("./808728.js"),
  Chunk181079 = require("./181079.js"),
  Chunk422258 = require("./422258.js"),
  Chunk93055 = require("./93055.js"),
  Chunk616075 = require("./616075.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, n) {
  return e.type === f.rbe.GROUP_DM ? n ? A.intl.string(A.t["0BWmSM"]) : A.intl.string(A.t.uuVTOK) : e.type === f.rbe.DM ? n ? A.intl.string(A.t["2wfKGo"]) : A.intl.string(A.t.wPbAse) : n ? A.intl.string(A.t.Bou7lT) : A.intl.string(A.t["4wcdE/"])
}

function O(e) {
  let n = (0, c.bG)([o.Ay], () => o.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
    {
      isFavoritesPerk: t
    } = (0, b.l)("58e21a_1"),
    {
      notifyFavoriteAdded: i
    } = (0, d.CJ)();
  if (!(0, d.pe)(e)) return null;
  let [
    [s], A
  ] = a().partition(n, e => "null" === e.channel.id);

  function O(n) {
    i(), (0, u.Jz)(e.id, n)
  }
  return 0 === A.length ? (0, r.jsx)(l.Drp, {
    id: "favorite-channel",
    label: p(e, false),
    action: () => O(null)
  }) : (0, r.jsxs)(l.Drp, {
    id: "favorite-channel",
    label: p(e, false),
    action: () => O(null),
    children: [t && (0, r.jsx)(l.rXV, {
      children: (0, r.jsx)(l.Drp, {
        id: "favorite-".concat(s.channel.id),
        label: s.channel.name,
        action: () => O("null" === s.channel.id ? null : s.channel.id)
      }, s.channel.id)
    }), (0, r.jsx)(l.rXV, {
      children: A.map(e => (0, r.jsx)(l.Drp, {
        id: "favorite-".concat(e.channel.id),
        label: e.channel.name,
        action: () => O(e.channel.id)
      }, e.channel.id))
    })]
  })
}

function h(e) {
  let n = (0, c.bG)([s.A], () => s.A.isFavorite(e.id));
  return __OVERLAY__ || !n ? null : (0, r.jsx)(l.Drp, {
    id: "favorite-channel",
    label: p(e, true),
    color: "danger",
    action: () => e.type === f.rbe.GUILD_CATEGORY ? (0, l.mMO)(async () => {
      let {
        default: n
      } = await t.e("52210").then(t.bind(t, 862377));
      return t => {
        var i, a;
        return (0, r.jsx)(n, (i = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(n) {
              var r;
              r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = r
            })
          }
          return e
        }({}, t), a = a = {
          onConfirm: () => {
            t.onClose(), (0, u.i_)(e.id)
          },
          channel: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    }) : (0, u.i_)(e.id)
  })
}