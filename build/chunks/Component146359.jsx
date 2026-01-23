/** Chunk was on 67447 **/
/** chunk id: 146359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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

function p(e) {
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

function m(e, t) {
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

function y(e, t, y) {
  let j = l.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, o.E)(j, "useThreadAdminActionItems"), (0, i.bG)([g.A], () => g.A.getGuildVersion(t), [t]);
  let h = (0, i.bG)([A.A], () => A.A.getChannel(y)),
    E = (0, i.bG)([b.A], () => b.A.getGuild(t), [t]),
    P = (0, i.bG)([O.default], () => O.default.getCurrentUser()),
    x = (0, u.A)(h, "Context Menu"),
    v = (0, s.qi)(null == h ? true : h.id);
  return (null == P ? true : P.id) === e.id ? [x] : null == E || null == h || null == P ? [] : [v ? (0, r.jsx)(a.Drp, {
    id: "remove",
    label: h.isForumPost() ? f.intl.formatToPlainString(f.t.v2KNNx, {
      user: e.username
    }) : f.intl.formatToPlainString(f.t["27xWaT"], {
      user: e.username
    }),
    color: "danger",
    action: () => c.A.removeMember(h.id, e.id, "Context Menu")
  }) : null, (0, d.L7)(e, E) ? (0, r.jsx)(a.Drp, {
    id: "kick",
    label: v ? f.intl.formatToPlainString(f.t["1Ie87p"], {
      user: e.username
    }) : f.intl.formatToPlainString(f.t["9l/iTS"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.mMO)(async () => {
      let {
        default: t
      } = await n.e("62624").then(n.bind(n, 324785));
      return n => (0, r.jsx)(t, m(p({}, n), {
        guildId: E.id,
        user: e
      }))
    })
  }) : null, (0, d.EZ)(e, E) ? (0, r.jsx)(a.Drp, {
    id: "ban",
    label: v ? f.intl.formatToPlainString(f.t.i62APf, {
      user: e.username
    }) : f.intl.formatToPlainString(f.t.WnpUBi, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.mMO)(async () => {
      let {
        default: t
      } = await n.e("80123").then(n.bind(n, 333179));
      return n => (0, r.jsx)(t, m(p({}, n), {
        guildId: E.id,
        user: e
      }))
    })
  }) : null]
}