/** Chunk was on 58121 **/
/** chunk id: 905204, original params: e,t,n (module,exports,require) **/
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

function h(e) {
  c.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}
let m = {};

function g(e) {
  let t = (0, o.e7)([p.Z], () => {
    var t;
    return null != (t = p.Z.getPendingResponseOptions(e)) ? t : m
  }, [e]);
  return a.useEffect(() => (h(e), () => h(e)), [e]), a.useEffect(() => {
    null != t && 0 !== Object.keys(t).length && b.Z.updateOnboardingResponses(e)
  }, [e, t]), {
    handleSelectOption: a.useCallback((t, n, a) => {
      let r = p.Z.getOnboardingResponses(e),
        {
          addedRoleIds: o,
          removedRoleIds: h
        } = function(e, t, n, a) {
          var r, i, o, c, d;
          let s = [],
            b = [];
          if (e.singleSelect && n) {
            let n = e.options.find(e => a.includes(e.id));
            s = l().difference(null != (r = t.roleIds) ? r : [], null != (i = null == n ? true : n.roleIds) ? i : []), b = l().difference(null != (o = null == n ? true : n.roleIds) ? o : [], null != (c = t.roleIds) ? c : [])
          } else if (n) s = null != (d = t.roleIds) ? d : [], b = [];
          else {
            let n = e.options.filter(e => a.includes(e.id)),
              r = n.filter(e => t.id !== e.id),
              i = n.map(e => e.roleIds).flat().filter(u.lm),
              o = r.map(e => e.roleIds).flat().filter(u.lm);
            s = [], b = l().difference(i, o)
          }
          return {
            addedRoleIds: s,
            removedRoleIds: b
          }
        }(t, n, a, r),
        {
          addedChannelIds: m,
          removedChannelIds: g
        } = function(e) {
          var t, n, a, r, i;
          let {
            guildId: o,
            prompt: c,
            option: s,
            selected: b,
            responses: f
          } = e, h = [], m = [];
          if (c.singleSelect && b) {
            let e = c.options.find(e => f.includes(e.id));
            h = l().difference(null != (t = s.channelIds) ? t : [], null != (n = null == e ? true : e.channelIds) ? n : []), m = l().difference(null != (a = null == e ? true : e.channelIds) ? a : [], null != (r = s.channelIds) ? r : [])
          } else if (b) h = null != (i = s.channelIds) ? i : [], m = [];
          else {
            let e = c.options.filter(e => f.includes(e.id)),
              t = e.filter(e => s.id !== e.id),
              n = e.map(e => e.channelIds).flat().filter(u.lm),
              a = t.map(e => e.channelIds).flat().filter(u.lm);
            h = [], m = l().difference(n, a)
          }
          return (0, d.hi)(o) && h.push(...p.Z.getDefaultChannelIds(o)), {
            addedChannelIds: h,
            removedChannelIds: m
          }
        }({
          guildId: e,
          prompt: t,
          option: n,
          selected: a,
          responses: r
        }),
        x = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({}, m.reduce((t, n) => {
          let a = s.ZP.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, i.mB)(a, f.ic.OPT_IN_ENABLED, true)
          }, t
        }, {}), g.reduce((t, n) => {
          let a = s.ZP.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, i.mB)(a, f.ic.OPT_IN_ENABLED, false)
          }, t
        }, {}));
      b.Z.selectOption(e, t.id, n.id, a), c.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: x
      }), b.Z.updateRolesLocal(e, o, h)
    }, [e])
  }
}