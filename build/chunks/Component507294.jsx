/** Chunk was on 40897 **/
/** chunk id: 507294, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => S,
  g: () => D
}), require("./388685.js"), require("./472816.js"), require("./794429.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk479306 = require("./479306.js"),
  Chunk562721 = require("./562721.js");

function Z(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      var n;
      n = t[r], r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = n
    })
  }
  return e
}

function D(e, r) {
  (0, d.ZDy)(async () => {
    let {
      default: i
    } = await t.e("38413").then(t.bind(t, 107807));
    return t => (0, n.jsx)(i, Z({
      role: e,
      guildId: r
    }, t))
  })
}
let S = function(e) {
  let {
    guildId: r,
    transitionState: l,
    onClose: S
  } = e, E = (0, s.e7)([y.Z], () => y.Z.getSortedRoles(r)), I = (0, s.e7)([g.default], () => g.default.getId()), A = (0, s.e7)([x.ZP], () => x.ZP.getMember(r, I)), [T, z] = i.useState([]), G = (0, p.ZP)(), H = (0, h.Dt)();
  if (i.useEffect(() => {
      0 !== T.length && O.default.track(P.rMx.PASSPORT_ENTRY_VIEWED, Z({
        role_ids: T.map(e => {
          let {
            role_id: r
          } = e;
          return r
        })
      }, (0, b.hH)(r)))
    }, [r, T]), i.useEffect(() => {
      f.Z.getGuildRoleConnectionsConfigurations(r).then(e => z(e))
    }, [r]), null == A) return null;
  let U = E.filter(e => null === e.tags.guild_connections);
  return (0, n.jsxs)(d.Y0X, {
    transitionState: l,
    "aria-labelledby": H,
    className: w.modal,
    parentComponent: "GuildRoleConnectionsModal",
    children: [(0, n.jsxs)(d.xBx, {
      separator: false,
      justify: a.k.Justify.BETWEEN,
      children: [(0, n.jsxs)("div", {
        className: w.header,
        children: [(0, n.jsx)(N.Z, {
          className: w.headerIcon,
          size: 24
        }), (0, n.jsx)(d.X6q, {
          variant: "text-lg/semibold",
          children: k.intl.string(k.t.ghtnsr)
        })]
      }), (0, n.jsx)(d.olH, {
        onClick: S
      })]
    }), (0, n.jsxs)(d.hzk, {
      className: w.container,
      children: [(0, n.jsx)(d.X6q, {
        variant: "heading-md/medium",
        children: k.intl.format(k.t["Y+TsER"], {
          helpdeskArticleUrl: R.Z.getArticleURL(P.BhN.CONNECTION_DETAILS)
        })
      }), (0, n.jsx)("div", {
        className: w.verifiedRoles,
        children: U.map(e => {
          let l = A.roles.includes(e.id),
            a = function(e) {
              let t = T.find(r => {
                let {
                  role_id: t
                } = r;
                return t === e
              });
              if (null == t) return [];
              let i = {};
              for (let e of t.rules.flat()) {
                let a;
                if (null != e.application_id) {
                  var l;
                  let i = null == (l = t.applications) ? true : l[e.application_id];
                  a = (null == i ? true : i.bot) != null ? (0, n.jsx)("img", {
                    src: new j.Z(i.bot).getAvatarURL(r, 24),
                    alt: "",
                    className: o()(w.botAvatar, C.avatar)
                  }) : null
                } else {
                  let r = m.Z.get(e.connection_type);
                  a = (0, n.jsx)("img", {
                    src: (0, c.ap)(G) ? r.icon.lightSVG : r.icon.darkSVG,
                    alt: "",
                    className: C.avatar
                  })
                }
                null != a && (i["".concat(e.connection_type, ":").concat(e.application_id)] = a)
              }
              return Object.values(i)
            }(e.id);
          return (0, n.jsxs)(d.P3F, {
            className: o()(w.verifiedRole, l ? w.verifiedRoleHasRole : null),
            onClick: l ? true : () => D(e, r),
            onContextMenu: l ? i => {
              var l;
              return l = e.id, void(0, u.jW)(i, async () => {
                let {
                  default: e
                } = await t.e("60079").then(t.bind(t, 850902));
                return t => {
                  var i, o;
                  return (0, n.jsx)(e, (i = Z({}, t), o = o = {
                    roleId: l,
                    onLeaveRole: () => f.Z.unassignGuildRoleConnection(r, l)
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n)
                    }
                    return t
                  })(Object(o)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
                  }), i))
                }
              })
            } : true,
            children: [l ? (0, n.jsx)("div", {
              className: w.roleCheckmark,
              children: (0, n.jsx)(d.kmB, {
                size: "xs",
                color: "currentColor"
              })
            }) : null, (0, n.jsx)(_.Z, {
              guildId: r,
              role: e,
              size: 24
            }), (0, n.jsxs)("div", {
              className: w.verifiedRoleNameDescriptionContainer,
              children: [(0, n.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: w.verifiedRoleName,
                children: e.name
              }), true !== e.description ? (0, n.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: w.verifiedRoleDescription,
                children: e.description
              }) : null]
            }), (0, n.jsx)(v.ZP, {
              showUserPopout: false,
              guildId: r,
              users: a.map(() => null),
              renderUser: (e, r, t) => (0, n.jsx)(i.Fragment, {
                children: a[t]
              }, t),
              max: 3
            })]
          }, e.id)
        })
      })]
    })]
  })
}