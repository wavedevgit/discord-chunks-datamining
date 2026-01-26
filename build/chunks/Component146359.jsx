/** Chunk was on 67447 **/
/** chunk id: 146359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk80682 = require("./80682.js"),
  Chunk660273 = require("./660273.jsx"),
  Chunk351001 = require("./351001.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function O(e) {
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
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t, m) {
  let j = l.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, a.E)(j, "useThreadAdminActionItems"), (0, i.bG)([b.A], () => b.A.getGuildVersion(t), [t]);
  let h = (0, i.bG)([A.A], () => A.A.getChannel(m)),
    E = (0, i.bG)([g.A], () => g.A.getGuild(t), [t]),
    P = (0, i.bG)([f.default], () => f.default.getCurrentUser()),
    v = (0, c.A)(h, "Context Menu"),
    x = (0, s.qi)(null == h ? true : h.id);
  return (null == P ? true : P.id) === e.id ? [v] : null == E || null == h || null == P ? [] : [x ? (0, r.jsx)(o.Drp, {
    id: "remove",
    label: h.isForumPost() ? p.intl.formatToPlainString(p.t.v2KNNx, {
      user: e.username
    }) : p.intl.formatToPlainString(p.t["27xWaT"], {
      user: e.username
    }),
    color: "danger",
    action: () => d.A.removeMember(h.id, e.id, "Context Menu")
  }) : null, (0, u.L7)(e, E) ? (0, r.jsx)(o.Drp, {
    id: "kick",
    label: x ? p.intl.formatToPlainString(p.t["1Ie87p"], {
      user: e.username
    }) : p.intl.formatToPlainString(p.t["9l/iTS"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.mMO)(async () => {
      let {
        default: t
      } = await n.e("62624").then(n.bind(n, 324785));
      return n => (0, r.jsx)(t, y(O({}, n), {
        guildId: E.id,
        user: e
      }))
    })
  }) : null, (0, u.EZ)(e, E) ? (0, r.jsx)(o.Drp, {
    id: "ban",
    label: x ? p.intl.formatToPlainString(p.t.i62APf, {
      user: e.username
    }) : p.intl.formatToPlainString(p.t.WnpUBi, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.mMO)(async () => {
      let {
        default: t
      } = await n.e("80123").then(n.bind(n, 333179));
      return n => (0, r.jsx)(t, y(O({}, n), {
        guildId: E.id,
        user: e
      }))
    })
  }) : null]
}