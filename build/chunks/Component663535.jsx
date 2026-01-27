/** Chunk was on 34160 **/
/** chunk id: 663535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk964486 = require("./964486.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk256587 = require("./256587.js"),
  Chunk287809 = require("./287809.js"),
  Chunk802958 = require("./802958.js"),
  Chunk190772 = require("./190772.jsx"),
  Chunk37411 = require("./37411.js"),
  Chunk106259 = require("./106259.js");
let x = Chunk64700.memo(function(e) {
  let {
    threadId: t,
    goToThread: l,
    showChannelName: i
  } = e, c = (0, a.bG)([u.A], () => u.A.getChannel(t)), d = (0, a.bG)([u.A], () => u.A.getChannel(c.parent_id));
  return (0, r.jsxs)(s.DUT, {
    className: j.kL,
    onClick: e => l(c, e.shiftKey),
    onContextMenu: e => (0, o.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99011"), n.e("88974"), n.e("86901")]).then(n.bind(n, 44536));
      return t => {
        var n, l;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), l = l = {
          channel: c
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    }),
    children: [(0, r.jsxs)("div", {
      className: j.kb,
      children: [(0, r.jsxs)(s.Heading, {
        className: j.OG,
        variant: "heading-md/semibold",
        children: [(0, r.jsx)("span", {
          className: j.CB,
          children: c.name
        }), i && null != d ? (0, r.jsx)("span", {
          className: j.Ot,
          children: "#".concat(d.name)
        }) : null]
      }), (0, m.A)(c)]
    }), (0, r.jsx)(v, {
      channel: c
    })]
  })
});

function v(e) {
  let {
    channel: t
  } = e, n = (0, a.bG)([g.A], () => {
    var e;
    return null != (e = g.A.getMemberIdsPreview(t.id)) ? e : []
  }), l = (0, a.bG)([g.A], () => {
    var e;
    return null != (e = g.A.getMemberCount(t.id)) ? e : 0
  }), s = (0, a.yK)([h.default], () => n.map(e => h.default.getUser(e)));
  return ((0, i.Ay)(() => {
    n.filter((e, t) => null == s[t]).forEach(e => {
      d.A.requestMember(t.guild_id, e)
    })
  }), 0 === n.length) ? null : (0, r.jsx)(c.Ay, {
    className: j.WM,
    showDefaultAvatarsForNullUsers: true,
    guildId: t.guild_id,
    users: s,
    count: l,
    max: f.Td
  })
}