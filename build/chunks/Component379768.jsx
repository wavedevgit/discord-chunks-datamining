/** Chunk was on 61344 **/
/** chunk id: 379768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
  } = e, [n, i] = r.useState(false), s = (0, m.Ay)(t, true), R = t.guild_id, D = (0, u.bG)([v.A], () => null != R ? v.A.getSortedRoles(R) : true), M = (0, u.bG)([C.default, E.A], () => {
    var e;
    return C.default.getUser(null == (e = E.A.getGuild(R)) ? true : e.ownerId)
  }), k = r.useMemo(() => null != D ? D.filter(e => !(0, y.Oy)(e)) : [], [D]), L = r.useMemo(() => o()(k).filter(e => {
    if (null == R) returnfalse;
    let n = S.aH({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return c.X8(n, c.kg(T.xBc.ADMINISTRATOR, T.xBc.VIEW_CHANNEL))
  }).value(), [t, R, k]), U = (0, u.yK)([C.default], () => {
    let e = {};
    for (let n of (null != M && (e[M.id] = M), Object.values(t.permissionOverwrites))) {
      if (n.type !== f.r2.MEMBER || null != e[n.id]) continue;
      let t = C.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return o()(e).filter(e => {
      var n;
      let l = S.$3({
          permission: T.xBc.ADMINISTRATOR,
          user: e,
          context: t
        }),
        r = null != (n = t.permissionOverwrites[e.id]) ? n : S.x3,
        i = c.zy(r.allow, T.xBc.VIEW_CHANNEL);
      return l || i
    }).value()
  }, [t, M]), G = O.A.can(T.xBc.MANAGE_CHANNELS, t) || O.A.can(T.xBc.MANAGE_ROLES, t), F = r.useCallback(() => i(false), []);
  return (0, l.jsxs)(j.Ay, {
    channelId: t.id,
    children: [(0, l.jsx)(j.WK, {
      locked: true,
      channelType: t.type
    }), (0, l.jsx)(j.cr, {
      children: N.intl.format(N.t.I3R7Vn, {
        channelName: s
      })
    }), (0, l.jsx)(j.j1, {
      className: w.PT,
      children: N.intl.format(N.t.QuwqjG, {
        channelName: s,
        topicHook: () => _.A.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), G ? (0, l.jsxs)("div", {
      className: P.$x,
      children: [(0, l.jsx)(h.Button, {
        size: "sm",
        variant: "secondary",
        text: N.intl.string(N.t.dMJ3Y6),
        onClick: () => i(true),
        icon: h.nFg
      }), (0, l.jsx)(h.Button, {
        size: "sm",
        variant: "secondary",
        text: N.intl.string(N.t["3gUsJb"]),
        onClick: function() {
          p.Ay.open(t.id)
        },
        icon: h.R2l
      })]
    }) : null, (0, l.jsxs)("div", {
      className: P.ol,
      children: [function() {
        if (1 !== U.length || L.length > 0) return (0, l.jsx)(d.A, {
          guildId: t.guild_id,
          className: P.HD,
          maxUsers: 5,
          users: U
        });
        let e = U[0],
          n = x.Ay.getName(e);
        return (0, l.jsxs)("div", {
          className: P.HD,
          children: [(0, l.jsx)(h.euF, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: h._3J.SIZE_24
          }), (0, l.jsx)(h.Text, {
            tag: "span",
            className: P.Jk,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, l.jsx)(h.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(N.t.rt0ERW)
          })]
        })
      }(), L.map((e, n) => {
        var r, i;
        let s = null != (r = e.colorString) ? r : T.TpD,
          o = (null == (i = e.tags) ? true : i.guild_connections) !== true;
        return G ? (0, l.jsx)(I.A, {
          className: a()(P.JC, {
            [P.HV]: n === L.length - 1
          }),
          roleName: e.name,
          roleColor: s,
          disabled: !G,
          verified: o,
          onClick: () => {
            b.A.open(t.guild_id, T.BEX.MEMBERS), b.A.selectRole(e.id)
          }
        }, e.id) : (0, l.jsx)(A.A, {
          className: a()(P.JC, {
            [P.HV]: n === L.length - 1
          }),
          roleName: e.name,
          roleColor: s,
          verified: o
        }, e.id)
      })]
    }), n ? (0, l.jsx)(h.aFV, {
      renderModal: e => {
        var n, r;
        return (0, l.jsx)(g.default, (n = function(e) {
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
        }({}, e), r = r = {
          onClose: () => (F(), e.onClose()),
          channelId: t.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      },
      onCloseRequest: () => i(false)
    }) : null]
  })
}