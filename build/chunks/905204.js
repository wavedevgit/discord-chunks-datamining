/** Chunk was on 58121 **/
/** chunk id: 905204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./472816.js"), require("./794429.js"), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk724213 = require("./724213.js"),
  Chunk9156 = require("./9156.js"),
  Chunk823379 = require("./823379.js"),
  Chunk549817 = require("./549817.js"),
  Chunk45966 = require("./45966.js"),
  Chunk526761 = require("./526761.js");

function m(e) {
  s.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}
let g = {};

function _(e) {
  let t = (0, o.e7)([h.Z], () => {
    var t;
    return null != (t = h.Z.getPendingResponseOptions(e)) ? t : g
  }, [e]);
  return r.useEffect(() => (m(e), () => m(e)), [e]), r.useEffect(() => {
    null != t && 0 !== Object.keys(t).length && p.Z.updateOnboardingResponses(e)
  }, [e, t]), {
    handleSelectOption: r.useCallback((t, n, r) => {
      let l = h.Z.getOnboardingResponses(e),
        {
          addedRoleIds: o,
          removedRoleIds: m
        } = function(e, t, n, r) {
          var l, a, o, s, c;
          let d = [],
            p = [];
          if (e.singleSelect && n) {
            let n = e.options.find(e => r.includes(e.id));
            d = i().difference(null != (l = t.roleIds) ? l : [], null != (a = null == n ? true : n.roleIds) ? a : []), p = i().difference(null != (o = null == n ? true : n.roleIds) ? o : [], null != (s = t.roleIds) ? s : [])
          } else if (n) d = null != (c = t.roleIds) ? c : [], p = [];
          else {
            let n = e.options.filter(e => r.includes(e.id)),
              l = n.filter(e => t.id !== e.id),
              a = n.map(e => e.roleIds).flat().filter(u.lm),
              o = l.map(e => e.roleIds).flat().filter(u.lm);
            d = [], p = i().difference(a, o)
          }
          return {
            addedRoleIds: d,
            removedRoleIds: p
          }
        }(t, n, r, l),
        {
          addedChannelIds: g,
          removedChannelIds: _
        } = function(e) {
          var t, n, r, l, a;
          let {
            guildId: o,
            prompt: s,
            option: d,
            selected: p,
            responses: f
          } = e, m = [], g = [];
          if (s.singleSelect && p) {
            let e = s.options.find(e => f.includes(e.id));
            m = i().difference(null != (t = d.channelIds) ? t : [], null != (n = null == e ? true : e.channelIds) ? n : []), g = i().difference(null != (r = null == e ? true : e.channelIds) ? r : [], null != (l = d.channelIds) ? l : [])
          } else if (p) m = null != (a = d.channelIds) ? a : [], g = [];
          else {
            let e = s.options.filter(e => f.includes(e.id)),
              t = e.filter(e => d.id !== e.id),
              n = e.map(e => e.channelIds).flat().filter(u.lm),
              r = t.map(e => e.channelIds).flat().filter(u.lm);
            m = [], g = i().difference(n, r)
          }
          return (0, c.hi)(o) && m.push(...h.Z.getDefaultChannelIds(o)), {
            addedChannelIds: m,
            removedChannelIds: g
          }
        }({
          guildId: e,
          prompt: t,
          option: n,
          selected: r,
          responses: l
        }),
        x = function(e) {
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
        }({}, g.reduce((t, n) => {
          let r = d.ZP.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, a.mB)(r, f.ic.OPT_IN_ENABLED, true)
          }, t
        }, {}), _.reduce((t, n) => {
          let r = d.ZP.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, a.mB)(r, f.ic.OPT_IN_ENABLED, false)
          }, t
        }, {}));
      p.Z.selectOption(e, t.id, n.id, r), s.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: x
      }), p.Z.updateRolesLocal(e, o, m)
    }, [e])
  }
}