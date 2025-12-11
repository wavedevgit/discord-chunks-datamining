/** Chunk was on 58121 **/
/** chunk id: 905204, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./472816.js"), require("./794429.js"), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk724213 = require("./724213.js"),
  Chunk9156 = require("./9156.js"),
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
let m = {};

function g(e) {
  let n = (0, c.e7)([p.Z], () => {
    var n;
    return null != (n = p.Z.getPendingResponseOptions(e)) ? n : m
  }, [e]);
  return a.useEffect(() => (f(e), () => f(e)), [e]), a.useEffect(() => {
    null != n && 0 !== Object.keys(n).length && b.Z.updateOnboardingResponses(e)
  }, [e, n]), {
    handleSelectOption: a.useCallback((n, t, a) => {
      let r = p.Z.getOnboardingResponses(e),
        {
          addedRoleIds: c,
          removedRoleIds: f
        } = function(e, n, t, a) {
          var r, i, c, o, d;
          let s = [],
            b = [];
          if (e.singleSelect && t) {
            let t = e.options.find(e => a.includes(e.id));
            s = l().difference(null != (r = n.roleIds) ? r : [], null != (i = null == t ? true : t.roleIds) ? i : []), b = l().difference(null != (c = null == t ? true : t.roleIds) ? c : [], null != (o = n.roleIds) ? o : [])
          } else if (t) s = null != (d = n.roleIds) ? d : [], b = [];
          else {
            let t = e.options.filter(e => a.includes(e.id)),
              r = t.filter(e => n.id !== e.id),
              i = t.map(e => e.roleIds).flat().filter(u.lm),
              c = r.map(e => e.roleIds).flat().filter(u.lm);
            s = [], b = l().difference(i, c)
          }
          return {
            addedRoleIds: s,
            removedRoleIds: b
          }
        }(n, t, a, r),
        {
          addedChannelIds: m,
          removedChannelIds: g
        } = function(e) {
          var n, t, a, r, i;
          let {
            guildId: c,
            prompt: o,
            option: s,
            selected: b,
            responses: h
          } = e, f = [], m = [];
          if (o.singleSelect && b) {
            let e = o.options.find(e => h.includes(e.id));
            f = l().difference(null != (n = s.channelIds) ? n : [], null != (t = null == e ? true : e.channelIds) ? t : []), m = l().difference(null != (a = null == e ? true : e.channelIds) ? a : [], null != (r = s.channelIds) ? r : [])
          } else if (b) f = null != (i = s.channelIds) ? i : [], m = [];
          else {
            let e = o.options.filter(e => h.includes(e.id)),
              n = e.filter(e => s.id !== e.id),
              t = e.map(e => e.channelIds).flat().filter(u.lm),
              a = n.map(e => e.channelIds).flat().filter(u.lm);
            f = [], m = l().difference(t, a)
          }
          return (0, d.hi)(c) && f.push(...p.Z.getDefaultChannelIds(c)), {
            addedChannelIds: f,
            removedChannelIds: m
          }
        }({
          guildId: e,
          prompt: n,
          option: t,
          selected: a,
          responses: r
        }),
        x = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              a = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), a.forEach(function(n) {
              var a;
              a = t[n], n in e ? Object.defineProperty(e, n, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = a
            })
          }
          return e
        }({}, m.reduce((n, t) => {
          let a = s.ZP.getChannelIdFlags(e, t);
          return n[t] = {
            flags: (0, i.mB)(a, h.ic.OPT_IN_ENABLED, true)
          }, n
        }, {}), g.reduce((n, t) => {
          let a = s.ZP.getChannelIdFlags(e, t);
          return n[t] = {
            flags: (0, i.mB)(a, h.ic.OPT_IN_ENABLED, false)
          }, n
        }, {}));
      b.Z.selectOption(e, n.id, t.id, a), o.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: x
      }), b.Z.updateRolesLocal(e, c, f)
    }, [e])
  }
}