/** Chunk was on 72165 **/
/** chunk id: 663915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function _(e) {
  o.h.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}
let m = {};

function g(e) {
  let t = (0, s.bG)([p.A], () => {
    var t;
    return null != (t = p.A.getPendingResponseOptions(e)) ? t : m
  }, [e]);
  return l.useEffect(() => (_(e), () => _(e)), [e]), l.useEffect(() => {
    null != t && 0 !== Object.keys(t).length && h.A.updateOnboardingResponses(e)
  }, [e, t]), {
    handleSelectOption: l.useCallback((t, n, l) => {
      let r = p.A.getOnboardingResponses(e),
        {
          addedRoleIds: s,
          removedRoleIds: _
        } = function(e, t, n, l) {
          var r, a, s, o, c;
          let d = [],
            h = [];
          if (e.singleSelect && n) {
            let n = e.options.find(e => l.includes(e.id));
            d = i().difference(null != (r = t.roleIds) ? r : [], null != (a = null == n ? true : n.roleIds) ? a : []), h = i().difference(null != (s = null == n ? true : n.roleIds) ? s : [], null != (o = t.roleIds) ? o : [])
          } else if (n) d = null != (c = t.roleIds) ? c : [], h = [];
          else {
            let n = e.options.filter(e => l.includes(e.id)),
              r = n.filter(e => t.id !== e.id),
              a = n.map(e => e.roleIds).flat().filter(u.Vq),
              s = r.map(e => e.roleIds).flat().filter(u.Vq);
            d = [], h = i().difference(a, s)
          }
          return {
            addedRoleIds: d,
            removedRoleIds: h
          }
        }(t, n, l, r),
        {
          addedChannelIds: m,
          removedChannelIds: g
        } = function(e) {
          var t, n, l, r, a;
          let {
            guildId: s,
            prompt: o,
            option: d,
            selected: h,
            responses: f
          } = e, _ = [], m = [];
          if (o.singleSelect && h) {
            let e = o.options.find(e => f.includes(e.id));
            _ = i().difference(null != (t = d.channelIds) ? t : [], null != (n = null == e ? true : e.channelIds) ? n : []), m = i().difference(null != (l = null == e ? true : e.channelIds) ? l : [], null != (r = d.channelIds) ? r : [])
          } else if (h) _ = null != (a = d.channelIds) ? a : [], m = [];
          else {
            let e = o.options.filter(e => f.includes(e.id)),
              t = e.filter(e => d.id !== e.id),
              n = e.map(e => e.channelIds).flat().filter(u.Vq),
              l = t.map(e => e.channelIds).flat().filter(u.Vq);
            _ = [], m = i().difference(n, l)
          }
          return (0, c.cE)(s) && _.push(...p.A.getDefaultChannelIds(s)), {
            addedChannelIds: _,
            removedChannelIds: m
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
        }({}, m.reduce((t, n) => {
          let l = d.Ay.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, a.lA)(l, f.vv.OPT_IN_ENABLED, true)
          }, t
        }, {}), g.reduce((t, n) => {
          let l = d.Ay.getChannelIdFlags(e, n);
          return t[n] = {
            flags: (0, a.lA)(l, f.vv.OPT_IN_ENABLED, false)
          }, t
        }, {}));
      h.A.selectOption(e, t.id, n.id, l), o.h.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: x
      }), h.A.updateRolesLocal(e, s, _)
    }, [e])
  }
}