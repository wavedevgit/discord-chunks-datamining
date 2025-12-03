/** Chunk was on 40897 **/
/** chunk id: 507294, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => Z,
  g: () => C
}), require("./388685.js"), require("./472816.js"), require("./794429.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk225104 = require("./225104.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk375563 = require("./375563.js"),
  Chunk245141 = require("./245141.js");

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function C(e, t) {
  (0, u.ZDy)(async () => {
    let {
      default: i
    } = await r.e("38413").then(r.bind(r, 107807));
    return r => (0, n.jsx)(i, k({
      role: e,
      guildId: t
    }, r))
  })
}
let Z = function(e) {
  let {
    guildId: t,
    transitionState: l,
    onClose: Z
  } = e, S = (0, c.e7)([h.Z], () => h.Z.getSortedRoles(t)), D = (0, c.e7)([j.default], () => j.default.getId()), E = (0, c.e7)([O.ZP], () => O.ZP.getMember(t, D)), [I, A] = i.useState([]), T = (0, p.ZP)();
  if (i.useEffect(() => {
      0 !== I.length && y.default.track(P.rMx.PASSPORT_ENTRY_VIEWED, k({
        role_ids: I.map(e => {
          let {
            role_id: t
          } = e;
          return t
        })
      }, (0, m.hH)(t)))
    }, [t, I]), i.useEffect(() => {
      f.Z.getGuildRoleConnectionsConfigurations(t).then(e => A(e))
    }, [t]), null == E) return null;
  let U = S.filter(e => null === e.tags.guild_connections);
  return (0, n.jsx)(a.Modal, {
    transitionState: l,
    title: N.intl.string(N.t.ghtnss),
    onClose: Z,
    subtitle: N.intl.format(N.t["Y+TsEV"], {
      helpdeskArticleUrl: x.Z.getArticleURL(P.BhN.CONNECTION_DETAILS)
    }),
    actions: [],
    children: (0, n.jsx)(u.Kqy, {
      children: U.map(e => {
        let l = E.roles.includes(e.id),
          a = function(e) {
            let r = I.find(t => {
              let {
                role_id: r
              } = t;
              return r === e
            });
            if (null == r) return [];
            let i = {};
            for (let e of r.rules.flat()) {
              let a;
              if (null != e.application_id) {
                var l;
                let i = null == (l = r.applications) ? true : l[e.application_id];
                a = (null == i ? true : i.bot) != null ? (0, n.jsx)("img", {
                  src: new g.Z(i.bot).getAvatarURL(t, 24),
                  alt: "",
                  className: o()(_.botAvatar, w.avatar)
                }) : null
              } else {
                let t = v.Z.get(e.connection_type);
                a = (0, n.jsx)("img", {
                  src: (0, s.ap)(T) ? t.icon.lightSVG : t.icon.darkSVG,
                  alt: "",
                  className: w.avatar
                })
              }
              null != a && (i["".concat(e.connection_type, ":").concat(e.application_id)] = a)
            }
            return Object.values(i)
          }(e.id);
        return (0, n.jsxs)(u.P3F, {
          className: o()(_.verifiedRole, l ? _.verifiedRoleHasRole : null),
          onClick: l ? true : () => C(e, t),
          onContextMenu: l ? i => {
            var l;
            return l = e.id, void(0, d.jW)(i, async () => {
              let {
                default: e
              } = await r.e("60079").then(r.bind(r, 850902));
              return r => {
                var i, o;
                return (0, n.jsx)(e, (i = k({}, r), o = o = {
                  roleId: l,
                  onLeaveRole: () => f.Z.unassignGuildRoleConnection(t, l)
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                  }
                  return r
                })(Object(o)).forEach(function(e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
                }), i))
              }
            })
          } : true,
          children: [l ? (0, n.jsx)("div", {
            className: _.roleCheckmark,
            children: (0, n.jsx)(u.kmB, {
              size: "xs",
              color: "currentColor"
            })
          }) : null, (0, n.jsx)(R.Z, {
            guildId: t,
            role: e,
            size: 24
          }), (0, n.jsxs)("div", {
            className: _.verifiedRoleNameDescriptionContainer,
            children: [(0, n.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              className: _.verifiedRoleName,
              children: e.name
            }), true !== e.description ? (0, n.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              className: _.verifiedRoleDescription,
              children: e.description
            }) : null]
          }), (0, n.jsx)(b.ZP, {
            showUserPopout: false,
            guildId: t,
            users: a.map(() => null),
            renderUser: (e, t, r) => (0, n.jsx)(i.Fragment, {
              children: a[r]
            }, r),
            max: 3
          })]
        }, e.id)
      })
    })
  })
}