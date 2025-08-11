/** Chunk was on 58121 **/
/** chunk id: 905204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./472816.js"), require("./794429.js"), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
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

function x(e) {
  let t = (0, a.e7)([h.Z], () => {
    var t;
    return null != (t = h.Z.getPendingResponseOptions(e)) ? t : g
  }, [e]);
  return l.useEffect(() => (f(e), () => f(e)), [e]), l.useEffect(() => {
    null != t && 0 !== Object.keys(t).length && m.Z.updateOnboardingResponses(e)
  }, [e, t]), {
    handleSelectOption: l.useCallback((t, n, l) => {
      let r = h.Z.getOnboardingResponses(e),
        {
          addedRoleIds: a,
          removedRoleIds: f
        } = function(e, t, n, l) {
          var r, a, o, s, c;
          let d = [],
            m = [];
          if (e.singleSelect && n) {
            let n = e.options.find(e => l.includes(e.id));
            d = i().difference(null != (r = t.roleIds) ? r : [], null != (a = null == n ? true : n.roleIds) ? a : []), m = i().difference(null != (o = null == n ? true : n.roleIds) ? o : [], null != (s = t.roleIds) ? s : [])
          } else if (n) d = null != (c = t.roleIds) ? c : [], m = [];
          else {
            let n = e.options.filter(e => l.includes(e.id)),
              r = n.filter(e => t.id !== e.id),
              a = n.map(e => e.roleIds).flat().filter(u.lm),
              o = r.map(e => e.roleIds).flat().filter(u.lm);
            d = [], m = i().difference(a, o)
          }
          return {
            addedRoleIds: d,
            removedRoleIds: m
          }
        }(t, n, l, r),
        {
          addedChannelIds: g,
          removedChannelIds: x
        } = function(e) {
          var t, n, l, r, a;
          let {
            guildId: o,
            prompt: c,
            option: d,
            selected: m,
            responses: p
          } = e, f = [], g = [];
          if (c.singleSelect && m) {
            let e = c.options.find(e => p.includes(e.id));
            f = i().difference(null != (t = d.channelIds) ? t : [], null != (n = null == e ? true : e.channelIds) ? n : []), g = i().difference(null != (l = null == e ? true : e.channelIds) ? l : [], null != (r = d.channelIds) ? r : [])
          } else if (m) f = null != (a = d.channelIds) ? a : [], g = [];
          else {
            let e = c.options.filter(e => p.includes(e.id)),
              t = e.filter(e => d.id !== e.id),
              n = e.map(e => e.channelIds).flat().filter(u.lm),
              l = t.map(e => e.channelIds).flat().filter(u.lm);
            f = [], g = i().difference(n, l)
          }
          return (0, s.hi)(o) && f.push(...h.Z.getDefaultChannelIds(o)), {
            addedChannelIds: f,
            removedChannelIds: g
          }
        }({
          guildId: e,
          prompt: t,
          option: n,
          selected: l,
          responses: r
        }),
        _ = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, g.reduce((t, n) => {
          let l = c.ZP.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, d.mB)(l, p.ic.OPT_IN_ENABLED, true)
          }, t
        }, {}), x.reduce((t, n) => {
          let l = c.ZP.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, d.mB)(l, p.ic.OPT_IN_ENABLED, false)
          }, t
        }, {}));
      m.Z.selectOption(e, t.id, n.id, l), o.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: _
      }), m.Z.updateRolesLocal(e, a, f)
    }, [e])
  }
}