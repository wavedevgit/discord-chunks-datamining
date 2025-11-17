/** Chunk was on 70675 **/
/** chunk id: 520063, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616780 = require("./616780.js"),
  Chunk438536 = require("./438536.jsx"),
  Chunk946273 = require("./946273.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
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
}

function h(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function p(e, n, p) {
  let P = i.useMemo(() => ({
    [n]: [e.id]
  }), [n, e.id]);
  (0, u.$)(P, "useThreadAdminActionItems"), (0, r.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
  let j = (0, r.e7)([g.Z], () => g.Z.getChannel(p)),
    v = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
    y = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
    N = (0, o.Z)(j, "Context Menu"),
    x = (0, c.yw)(null == j ? true : j.id);
  return (null == y ? true : y.id) === e.id ? [N] : null == v || null == j || null == y ? [] : [x ? (0, l.jsx)(a.sNh, {
    id: "remove",
    label: j.isForumPost() ? O.intl.formatToPlainString(O.t.v2KNNx, {
      user: e.username
    }) : O.intl.formatToPlainString(O.t["27xWaT"], {
      user: e.username
    }),
    color: "danger",
    action: () => d.Z.removeMember(j.id, e.id, "Context Menu")
  }) : null, (0, s.BK)(e, v) ? (0, l.jsx)(a.sNh, {
    id: "kick",
    label: x ? O.intl.formatToPlainString(O.t["1Ie87p"], {
      user: e.username
    }) : O.intl.formatToPlainString(O.t["9l/iTS"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: n
      } = await t.e("79939").then(t.bind(t, 495494));
      return t => (0, l.jsx)(n, h(m({}, t), {
        guildId: v.id,
        user: e
      }))
    })
  }) : null, (0, s.mm)(e, v) ? (0, l.jsx)(a.sNh, {
    id: "ban",
    label: x ? O.intl.formatToPlainString(O.t.i62APf, {
      user: e.username
    }) : O.intl.formatToPlainString(O.t.WnpUBi, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: n
      } = await t.e("18910").then(t.bind(t, 497880));
      return t => (0, l.jsx)(n, h(m({}, t), {
        guildId: v.id,
        user: e
      }))
    })
  }) : null]
}