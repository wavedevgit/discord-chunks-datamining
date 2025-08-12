/** Chunk was on 40897 **/
/** chunk id: 507294, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => k,
  g: () => A
}), require("./388685.js"), require("./472816.js"), require("./794429.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk435935 = require("./435935.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk313201 = require("./313201.js"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk225104 = require("./225104.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk94443 = require("./94443.js"),
  Chunk625401 = require("./625401.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = r[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function A(e, t) {
  (0, f.ZDy)(async () => {
    let {
      default: n
    } = await Promise.all([r.e("82412"), r.e("83744")]).then(r.bind(r, 107807));
    return r => (0, l.jsx)(n, C({
      role: e,
      guildId: t
    }, r))
  })
}
let k = function(e) {
  let {
    guildId: t,
    transitionState: i,
    onClose: k
  } = e, T = (0, s.e7)([O.Z], () => O.Z.getSortedRoles(t)), D = (0, s.e7)([h.default], () => h.default.getId()), Z = (0, s.e7)([v.ZP], () => v.ZP.getMember(t, D)), [I, J] = n.useState([]), H = (0, p.ZP)(), W = (0, m.Dt)();
  if (n.useEffect(() => {
      0 !== I.length && j.default.track(w.rMx.PASSPORT_ENTRY_VIEWED, C({
        role_ids: I.map(e => {
          let {
            role_id: t
          } = e;
          return t
        })
      }, (0, b.hH)(t)))
    }, [t, I]), n.useEffect(() => {
      d.Z.getGuildRoleConnectionsConfigurations(t).then(e => J(e))
    }, [t]), null == Z) return null;
  let L = T.filter(e => null === e.tags.guild_connections);
  return (0, l.jsxs)(f.Y0X, {
    transitionState: i,
    "aria-labelledby": W,
    className: E.modal,
    parentComponent: "GuildRoleConnectionsModal",
    children: [(0, l.jsxs)(f.xBx, {
      separator: false,
      justify: a.k.Justify.BETWEEN,
      children: [(0, l.jsxs)("div", {
        className: E.header,
        children: [(0, l.jsx)(R.Z, {
          className: E.headerIcon,
          size: 24
        }), (0, l.jsx)(f.X6q, {
          variant: "text-lg/semibold",
          children: P.intl.string(P.t.ghtnsr)
        })]
      }), (0, l.jsx)(f.olH, {
        onClick: k
      })]
    }), (0, l.jsxs)(f.hzk, {
      className: E.container,
      children: [(0, l.jsx)(f.X6q, {
        variant: "heading-md/medium",
        children: P.intl.format(P.t["Y+TsER"], {
          helpdeskArticleUrl: _.Z.getArticleURL(w.BhN.CONNECTION_DETAILS)
        })
      }), (0, l.jsx)("div", {
        className: E.verifiedRoles,
        children: L.map(e => {
          let i = Z.roles.includes(e.id),
            a = function(e) {
              let r = I.find(t => {
                let {
                  role_id: r
                } = t;
                return r === e
              });
              if (null == r) return [];
              let n = {};
              for (let e of r.rules.flat()) {
                let a;
                if (null != e.application_id) {
                  var i;
                  let n = null == (i = r.applications) ? true : i[e.application_id];
                  a = (null == n ? true : n.bot) != null ? (0, l.jsx)("img", {
                    src: new g.Z(n.bot).getAvatarURL(t, 24),
                    alt: "",
                    className: o()(E.botAvatar, S.avatar)
                  }) : null
                } else {
                  let t = x.Z.get(e.connection_type);
                  a = (0, l.jsx)("img", {
                    src: (0, c.ap)(H) ? t.icon.lightSVG : t.icon.darkSVG,
                    alt: "",
                    className: S.avatar
                  })
                }
                null != a && (n["".concat(e.connection_type, ":").concat(e.application_id)] = a)
              }
              return Object.values(n)
            }(e.id);
          return (0, l.jsxs)(f.P3F, {
            className: o()(E.verifiedRole, i ? E.verifiedRoleHasRole : null),
            onClick: i ? true : () => A(e, t),
            onContextMenu: i ? n => {
              var i;
              return i = e.id, void(0, u.jW)(n, async () => {
                let {
                  default: e
                } = await r.e("60079").then(r.bind(r, 850902));
                return r => {
                  var n, o;
                  return (0, l.jsx)(e, (n = C({}, r), o = o = {
                    roleId: i,
                    onLeaveRole: () => d.Z.unassignGuildRoleConnection(t, i)
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, l)
                    }
                    return r
                  })(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                  }), n))
                }
              })
            } : true,
            children: [i ? (0, l.jsx)("div", {
              className: E.roleCheckmark,
              children: (0, l.jsx)(f.kmB, {
                size: "xs",
                color: "currentColor"
              })
            }) : null, (0, l.jsx)(N.Z, {
              guildId: t,
              role: e,
              size: 24
            }), (0, l.jsxs)("div", {
              className: E.verifiedRoleNameDescriptionContainer,
              children: [(0, l.jsx)(f.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: E.verifiedRoleName,
                children: e.name
              }), true !== e.description ? (0, l.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: E.verifiedRoleDescription,
                children: e.description
              }) : null]
            }), (0, l.jsx)(y.ZP, {
              showUserPopout: false,
              guildId: t,
              users: a.map(() => null),
              renderUser: (e, t, r) => (0, l.jsx)(n.Fragment, {
                children: a[r]
              }, r),
              max: 3
            })]
          }, e.id)
        })
      })]
    })]
  })
}