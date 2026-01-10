/** Chunk was on 81985 **/
/** chunk id: 734386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk911969 = require("./911969.js"),
  Chunk933557 = require("./933557.js"),
  Chunk185413 = require("./185413.jsx"),
  Chunk626786 = require("./626786.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk454585 = require("./454585.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk51144 = require("./51144.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk786721 = require("./786721.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk56759 = require("./56759.js"),
  Chunk960324 = require("./960324.js");

function w(e) {
  let {
    channel: t
  } = e, [n, l] = i.useState(false), o = (0, g.ZP)(t, true), w = t.guild_id, R = (0, u.e7)([j.Z], () => null != w ? j.Z.getSortedRoles(w) : true), D = (0, u.e7)([E.default, x.Z], () => {
    var e;
    return E.default.getUser(null == (e = x.Z.getGuild(w)) ? true : e.ownerId)
  }), M = i.useMemo(() => null != R ? R.filter(e => !(0, O.fI)(e)) : [], [R]), k = i.useMemo(() => s()(M).filter(e => {
    if (null == w) returnfalse;
    let n = S.I0({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return c.Db(n, c.$e(Z.Plq.ADMINISTRATOR, Z.Plq.VIEW_CHANNEL))
  }).value(), [t, w, M]), L = (0, u.Wu)([E.default], () => {
    let e = {};
    for (let n of (null != D && (e[D.id] = D), Object.values(t.permissionOverwrites))) {
      if (n.type !== h.BN.MEMBER || null != e[n.id]) continue;
      let t = E.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return s()(e).filter(e => {
      var n;
      let r = S.BT({
          permission: Z.Plq.ADMINISTRATOR,
          user: e,
          context: t
        }),
        i = null != (n = t.permissionOverwrites[e.id]) ? n : S.Hn,
        l = c.e$(i.allow, Z.Plq.VIEW_CHANNEL);
      return r || l
    }).value()
  }, [t, D]), U = C.Z.can(Z.Plq.MANAGE_CHANNELS, t) || C.Z.can(Z.Plq.MANAGE_ROLES, t), G = i.useCallback(() => l(false), []);
  return (0, r.jsxs)(I.ZP, {
    channelId: t.id,
    children: [(0, r.jsx)(I.Kq, {
      locked: true,
      channelType: t.type
    }), (0, r.jsx)(I.Ot, {
      children: N.intl.format(N.t.I3R7Vn, {
        channelName: o
      })
    }), (0, r.jsx)(I.jz, {
      className: A.markup,
      children: N.intl.format(N.t.QuwqjG, {
        channelName: o,
        topicHook: () => v.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), U ? (0, r.jsxs)("div", {
      className: T.channelSettingButtons,
      children: [(0, r.jsx)(p.Button, {
        size: "sm",
        variant: "secondary",
        text: N.intl.string(N.t.dMJ3Y6),
        onClick: () => l(true),
        icon: p.BFJ
      }), (0, r.jsx)(p.Button, {
        size: "sm",
        variant: "secondary",
        text: N.intl.string(N.t["3gUsJb"]),
        onClick: function() {
          f.ZP.open(t.id)
        },
        icon: p.vdY
      })]
    }) : null, (0, r.jsxs)("div", {
      className: T.members,
      children: [function() {
        if (1 !== L.length || k.length > 0) return (0, r.jsx)(d.Z, {
          guildId: t.guild_id,
          className: T.avatars,
          maxUsers: 5,
          users: L
        });
        let e = L[0],
          n = _.ZP.getName(e);
        return (0, r.jsxs)("div", {
          className: T.avatars,
          children: [(0, r.jsx)(p.qEK, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: p.EFr.SIZE_24
          }), (0, r.jsx)(p.Text, {
            tag: "span",
            className: T.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, r.jsx)(p.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(N.t.rt0ERW)
          })]
        })
      }(), k.map((e, n) => {
        var i, l;
        let o = null != (l = e.colorString) ? l : Z.Pbq,
          s = (null == (i = e.tags) ? true : i.guild_connections) !== true;
        return U ? (0, r.jsx)(P.Z, {
          className: a()(T.role, {
            [T.last]: n === k.length - 1
          }),
          roleName: e.name,
          roleColor: o,
          disabled: !U,
          verified: s,
          onClick: () => {
            y.Z.open(t.guild_id, Z.pNK.MEMBERS), y.Z.selectRole(e.id)
          }
        }, e.id) : (0, r.jsx)(b.Z, {
          className: a()(T.role, {
            [T.last]: n === k.length - 1
          }),
          roleName: e.name,
          roleColor: o,
          verified: s
        }, e.id)
      })]
    }), n ? (0, r.jsx)(p.u_l, {
      renderModal: e => {
        var n, i;
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
        }({}, e), i = i = {
          onClose: () => (G(), e.onClose()),
          channelId: t.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      },
      onCloseRequest: () => l(false)
    }) : null]
  })
}