/** Chunk was on 72165 **/
/** chunk id: 663915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./864466.js"), require("./443073.js"), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk234053 = require("./234053.js"),
  Chunk543465 = require("./543465.js"),
  Chunk403362 = require("./403362.js"),
  Chunk669953 = require("./669953.js"),
  Chunk591552 = require("./591552.js"),
  Chunk355097 = require("./355097.js");

function p(e) {
  c.h.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}
let g = {};

function m(e) {
  let t = (0, s.bG)([b.A], () => {
    var t;
    return null != (t = b.A.getPendingResponseOptions(e)) ? t : g
  }, [e]);
  return l.useEffect(() => (p(e), () => p(e)), [e]), l.useEffect(() => {
    null != t && 0 !== Object.keys(t).length && f.A.updateOnboardingResponses(e)
  }, [e, t]), {
    handleSelectOption: l.useCallback((t, n, l) => {
      let r = b.A.getOnboardingResponses(e),
        {
          addedRoleIds: s,
          removedRoleIds: p
        } = function(e, t, n, l) {
          var r, a, s, c, d;
          let o = [],
            f = [];
          if (e.singleSelect && n) {
            let n = e.options.find(e => l.includes(e.id));
            o = i().difference(null != (r = t.roleIds) ? r : [], null != (a = null == n ? true : n.roleIds) ? a : []), f = i().difference(null != (s = null == n ? true : n.roleIds) ? s : [], null != (c = t.roleIds) ? c : [])
          } else if (n) o = null != (d = t.roleIds) ? d : [], f = [];
          else {
            let n = e.options.filter(e => l.includes(e.id)),
              r = n.filter(e => t.id !== e.id),
              a = n.map(e => e.roleIds).flat().filter(u.Vq),
              s = r.map(e => e.roleIds).flat().filter(u.Vq);
            o = [], f = i().difference(a, s)
          }
          return {
            addedRoleIds: o,
            removedRoleIds: f
          }
        }(t, n, l, r),
        {
          addedChannelIds: g,
          removedChannelIds: m
        } = function(e) {
          var t, n, l, r, a;
          let {
            guildId: s,
            prompt: c,
            option: o,
            selected: f,
            responses: h
          } = e, p = [], g = [];
          if (c.singleSelect && f) {
            let e = c.options.find(e => h.includes(e.id));
            p = i().difference(null != (t = o.channelIds) ? t : [], null != (n = null == e ? true : e.channelIds) ? n : []), g = i().difference(null != (l = null == e ? true : e.channelIds) ? l : [], null != (r = o.channelIds) ? r : [])
          } else if (f) p = null != (a = o.channelIds) ? a : [], g = [];
          else {
            let e = c.options.filter(e => h.includes(e.id)),
              t = e.filter(e => o.id !== e.id),
              n = e.map(e => e.channelIds).flat().filter(u.Vq),
              l = t.map(e => e.channelIds).flat().filter(u.Vq);
            p = [], g = i().difference(n, l)
          }
          return (0, d.cE)(s) && p.push(...b.A.getDefaultChannelIds(s)), {
            addedChannelIds: p,
            removedChannelIds: g
          }
        }({
          guildId: e,
          prompt: t,
          option: n,
          selected: l,
          responses: r
        }),
        x = function(e) {
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
          let l = o.Ay.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, a.lA)(l, h.vv.OPT_IN_ENABLED, true)
          }, t
        }, {}), m.reduce((t, n) => {
          let l = o.Ay.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, a.lA)(l, h.vv.OPT_IN_ENABLED, false)
          }, t
        }, {}));
      f.A.selectOption(e, t.id, n.id, l), c.h.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: x
      }), f.A.updateRolesLocal(e, s, p)
    }, [e])
  }
}