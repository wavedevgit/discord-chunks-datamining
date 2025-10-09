/** Chunk was on 58121 **/
/** chunk id: 905204, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./472816.js"), require("./794429.js"), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
  let n = (0, a.e7)([h.Z], () => {
    var n;
    return null != (n = h.Z.getPendingResponseOptions(e)) ? n : g
  }, [e]);
  return l.useEffect(() => (f(e), () => f(e)), [e]), l.useEffect(() => {
    null != n && 0 !== Object.keys(n).length && m.Z.updateOnboardingResponses(e)
  }, [e, n]), {
    handleSelectOption: l.useCallback((n, t, l) => {
      let r = h.Z.getOnboardingResponses(e),
        {
          addedRoleIds: a,
          removedRoleIds: f
        } = function(e, n, t, l) {
          var r, a, o, s, c;
          let d = [],
            m = [];
          if (e.singleSelect && t) {
            let t = e.options.find(e => l.includes(e.id));
            d = i().difference(null != (r = n.roleIds) ? r : [], null != (a = null == t ? true : t.roleIds) ? a : []), m = i().difference(null != (o = null == t ? true : t.roleIds) ? o : [], null != (s = n.roleIds) ? s : [])
          } else if (t) d = null != (c = n.roleIds) ? c : [], m = [];
          else {
            let t = e.options.filter(e => l.includes(e.id)),
              r = t.filter(e => n.id !== e.id),
              a = t.map(e => e.roleIds).flat().filter(u.lm),
              o = r.map(e => e.roleIds).flat().filter(u.lm);
            d = [], m = i().difference(a, o)
          }
          return {
            addedRoleIds: d,
            removedRoleIds: m
          }
        }(n, t, l, r),
        {
          addedChannelIds: g,
          removedChannelIds: x
        } = function(e) {
          var n, t, l, r, a;
          let {
            guildId: o,
            prompt: c,
            option: d,
            selected: m,
            responses: p
          } = e, f = [], g = [];
          if (c.singleSelect && m) {
            let e = c.options.find(e => p.includes(e.id));
            f = i().difference(null != (n = d.channelIds) ? n : [], null != (t = null == e ? true : e.channelIds) ? t : []), g = i().difference(null != (l = null == e ? true : e.channelIds) ? l : [], null != (r = d.channelIds) ? r : [])
          } else if (m) f = null != (a = d.channelIds) ? a : [], g = [];
          else {
            let e = c.options.filter(e => p.includes(e.id)),
              n = e.filter(e => d.id !== e.id),
              t = e.map(e => e.channelIds).flat().filter(u.lm),
              l = n.map(e => e.channelIds).flat().filter(u.lm);
            f = [], g = i().difference(t, l)
          }
          return (0, s.hi)(o) && f.push(...h.Z.getDefaultChannelIds(o)), {
            addedChannelIds: f,
            removedChannelIds: g
          }
        }({
          guildId: e,
          prompt: n,
          option: t,
          selected: l,
          responses: r
        }),
        _ = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
              var l;
              l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = l
            })
          }
          return e
        }({}, g.reduce((n, t) => {
          let l = c.ZP.getChannelIdFlags(e, t);
          return n[t] = {
            flags: (0, d.mB)(l, p.ic.OPT_IN_ENABLED, true)
          }, n
        }, {}), x.reduce((n, t) => {
          let l = c.ZP.getChannelIdFlags(e, t);
          return n[t] = {
            flags: (0, d.mB)(l, p.ic.OPT_IN_ENABLED, false)
          }, n
        }, {}));
      m.Z.selectOption(e, n.id, t.id, l), o.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: _
      }), m.Z.updateRolesLocal(e, a, f)
    }, [e])
  }
}