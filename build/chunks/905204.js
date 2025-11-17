/** Chunk was on 58121 **/
/** chunk id: 905204, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./472816.js"), require("./794429.js"), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk724213 = require("./724213.js"),
  Chunk9156 = require("./9156.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk549817 = require("./549817.js"),
  Chunk45966 = require("./45966.js"),
  Chunk526761 = require("./526761.js");

function f(e) {
  o.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}
let g = {};

function _(e) {
  let n = (0, a.e7)([h.Z], () => {
    var n;
    return null != (n = h.Z.getPendingResponseOptions(e)) ? n : g
  }, [e]);
  return r.useEffect(() => (f(e), () => f(e)), [e]), r.useEffect(() => {
    null != n && 0 !== Object.keys(n).length && p.Z.updateOnboardingResponses(e)
  }, [e, n]), {
    handleSelectOption: r.useCallback((n, t, r) => {
      let l = h.Z.getOnboardingResponses(e),
        {
          addedRoleIds: a,
          removedRoleIds: f
        } = function(e, n, t, r) {
          var l, a, o, s, c;
          let d = [],
            p = [];
          if (e.singleSelect && t) {
            let t = e.options.find(e => r.includes(e.id));
            d = i().difference(null != (l = n.roleIds) ? l : [], null != (a = null == t ? true : t.roleIds) ? a : []), p = i().difference(null != (o = null == t ? true : t.roleIds) ? o : [], null != (s = n.roleIds) ? s : [])
          } else if (t) d = null != (c = n.roleIds) ? c : [], p = [];
          else {
            let t = e.options.filter(e => r.includes(e.id)),
              l = t.filter(e => n.id !== e.id),
              a = t.map(e => e.roleIds).flat().filter(u.lm),
              o = l.map(e => e.roleIds).flat().filter(u.lm);
            d = [], p = i().difference(a, o)
          }
          return {
            addedRoleIds: d,
            removedRoleIds: p
          }
        }(n, t, r, l),
        {
          addedChannelIds: g,
          removedChannelIds: _
        } = function(e) {
          var n, t, r, l, a;
          let {
            guildId: o,
            prompt: c,
            option: d,
            selected: p,
            responses: m
          } = e, f = [], g = [];
          if (c.singleSelect && p) {
            let e = c.options.find(e => m.includes(e.id));
            f = i().difference(null != (n = d.channelIds) ? n : [], null != (t = null == e ? true : e.channelIds) ? t : []), g = i().difference(null != (r = null == e ? true : e.channelIds) ? r : [], null != (l = d.channelIds) ? l : [])
          } else if (p) f = null != (a = d.channelIds) ? a : [], g = [];
          else {
            let e = c.options.filter(e => m.includes(e.id)),
              n = e.filter(e => d.id !== e.id),
              t = e.map(e => e.channelIds).flat().filter(u.lm),
              r = n.map(e => e.channelIds).flat().filter(u.lm);
            f = [], g = i().difference(t, r)
          }
          return (0, s.hi)(o) && f.push(...h.Z.getDefaultChannelIds(o)), {
            addedChannelIds: f,
            removedChannelIds: g
          }
        }({
          guildId: e,
          prompt: n,
          option: t,
          selected: r,
          responses: l
        }),
        x = function(e) {
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
        }({}, g.reduce((n, t) => {
          let r = c.ZP.getChannelIdFlags(e, t);
          return n[t] = {
            flags: (0, d.mB)(r, m.ic.OPT_IN_ENABLED, true)
          }, n
        }, {}), _.reduce((n, t) => {
          let r = c.ZP.getChannelIdFlags(e, t);
          return n[t] = {
            flags: (0, d.mB)(r, m.ic.OPT_IN_ENABLED, false)
          }, n
        }, {}));
      p.Z.selectOption(e, n.id, t.id, r), o.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: x
      }), p.Z.updateRolesLocal(e, a, f)
    }, [e])
  }
}