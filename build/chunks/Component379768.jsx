/** Chunk was on 17534 **/
/** chunk id: 379768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk155718 = require("./155718.js"),
  Chunk47167 = require("./47167.js"),
  Chunk685374 = require("./685374.jsx"),
  Chunk569989 = require("./569989.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk46054 = require("./46054.js"),
  Chunk34457 = require("./34457.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk427262 = require("./427262.js"),
  Chunk314307 = require("./314307.jsx"),
  Chunk234567 = require("./234567.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk391514 = require("./391514.js"),
  Chunk206314 = require("./206314.js");

function R(e) {
  let {
    channel: t
  } = e, [n, i] = l.useState(false), a = (0, f.Ay)(t, true), R = t.guild_id, D = (0, u.bG)([_.A], () => null != R ? _.A.getSortedRoles(R) : true), L = (0, u.bG)([v.default, j.A], () => {
    var e;
    return v.default.getUser(null == (e = j.A.getGuild(R)) ? true : e.ownerId)
  }), M = l.useMemo(() => null != D ? D.filter(e => !(0, O.Oy)(e)) : [], [D]), G = l.useMemo(() => o()(M).filter(e => {
    if (null == R) returnfalse;
    let n = E.aH({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return c.X8(n, c.kg(N.xBc.ADMINISTRATOR, N.xBc.VIEW_CHANNEL))
  }).value(), [t, R, M]), k = (0, u.yK)([v.default], () => {
    let e = {};
    for (let n of (null != L && (e[L.id] = L), Object.values(t.permissionOverwrites))) {
      if (n.type !== g.r2.MEMBER || null != e[n.id]) continue;
      let t = v.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return o()(e).filter(e => {
      var n;
      let r = E.$3({
          permission: N.xBc.ADMINISTRATOR,
          user: e,
          context: t
        }),
        l = null != (n = t.permissionOverwrites[e.id]) ? n : E.x3,
        i = c.zy(l.allow, N.xBc.VIEW_CHANNEL);
      return r || i
    }).value()
  }, [t, L]), U = x.A.can(N.xBc.MANAGE_CHANNELS, t) || x.A.can(N.xBc.MANAGE_ROLES, t), V = l.useCallback(() => i(false), []);
  return (0, r.jsxs)(S.Ay, {
    channelId: t.id,
    children: [(0, r.jsx)(S.WK, {
      locked: true,
      channelType: t.type
    }), (0, r.jsx)(S.cr, {
      children: T.intl.format(T.t.I3R7Vn, {
        channelName: a
      })
    }), (0, r.jsx)(S.j1, {
      className: w.PT,
      children: T.intl.format(T.t.QuwqjG, {
        channelName: a,
        topicHook: () => y.A.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), U ? (0, r.jsxs)("div", {
      className: P.$x,
      children: [(0, r.jsx)(h.Button, {
        size: "sm",
        variant: "secondary",
        text: T.intl.string(T.t.dMJ3Y6),
        onClick: () => i(true),
        icon: h.nFg
      }), (0, r.jsx)(h.Button, {
        size: "sm",
        variant: "secondary",
        text: T.intl.string(T.t["3gUsJb"]),
        onClick: function() {
          p.Ay.open(t.id)
        },
        icon: h.R2l
      })]
    }) : null, (0, r.jsxs)("div", {
      className: P.ol,
      children: [function() {
        if (1 !== k.length || G.length > 0) return (0, r.jsx)(d.A, {
          guildId: t.guild_id,
          className: P.HD,
          maxUsers: 5,
          users: k
        });
        let e = k[0],
          n = C.Ay.getName(e);
        return (0, r.jsxs)("div", {
          className: P.HD,
          children: [(0, r.jsx)(h.euF, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: h._3J.SIZE_24
          }), (0, r.jsx)(h.Text, {
            tag: "span",
            className: P.Jk,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, r.jsx)(h.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: T.intl.string(T.t.rt0ERW)
          })]
        })
      }(), G.map((e, n) => {
        var l, i;
        let a = null != (l = e.colorString) ? l : N.TpD,
          o = (null == (i = e.tags) ? true : i.guild_connections) !== true;
        return U ? (0, r.jsx)(I.A, {
          className: s()(P.JC, {
            [P.HV]: n === G.length - 1
          }),
          roleName: e.name,
          roleColor: a,
          disabled: !U,
          verified: o,
          onClick: () => {
            A.A.open(t.guild_id, N.BEX.MEMBERS), A.A.selectRole(e.id)
          }
        }, e.id) : (0, r.jsx)(b.A, {
          className: s()(P.JC, {
            [P.HV]: n === G.length - 1
          }),
          roleName: e.name,
          roleColor: a,
          verified: o
        }, e.id)
      })]
    }), n ? (0, r.jsx)(h.aFV, {
      renderModal: e => {
        var n, l;
        return (0, r.jsx)(m.default, (n = function(e) {
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
        }({}, e), l = l = {
          onClose: () => (V(), e.onClose()),
          channelId: t.id
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
      },
      onCloseRequest: () => i(false)
    }) : null]
  })
}