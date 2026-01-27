/** Chunk was on 92837 **/
/** chunk id: 480900, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => C,
  default: () => S
}), require("./896048.js"), require("./864466.js"), require("./443073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk967740 = require("./967740.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk702326 = require("./702326.js"),
  Chunk688963 = require("./688963.js");

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
  (0, u.mMO)(async () => {
    let {
      default: l
    } = await Promise.all([r.e("49282"), r.e("58481")]).then(r.bind(r, 488358));
    return r => (0, n.jsx)(l, k({
      role: e,
      guildId: t
    }, r))
  })
}
let S = function(e) {
  let {
    guildId: t,
    transitionState: i,
    onClose: S
  } = e, R = (0, c.bG)([O.A], () => O.A.getSortedRoles(t)), E = (0, c.bG)([y.default], () => y.default.getId()), D = (0, c.bG)([v.Ay], () => v.Ay.getMember(t, E)), [I, U] = l.useState([]), T = (0, p.Ay)();
  if (l.useEffect(() => {
      0 !== I.length && x.default.track(w.HAw.PASSPORT_ENTRY_VIEWED, k({
        role_ids: I.map(e => {
          let {
            role_id: t
          } = e;
          return t
        })
      }, (0, g.H$)(t)))
    }, [t, I]), l.useEffect(() => {
      f.A.getGuildRoleConnectionsConfigurations(t).then(e => U(e))
    }, [t]), null == D) return null;
  let G = R.filter(e => null === e.tags.guild_connections);
  return (0, n.jsx)(a.Modal, {
    transitionState: i,
    title: _.intl.string(_.t.ghtnss),
    onClose: S,
    subtitle: _.intl.format(_.t["Y+TsEV"], {
      helpdeskArticleUrl: h.A.getArticleURL(w.MVz.CONNECTION_DETAILS)
    }),
    actions: [],
    children: (0, n.jsx)(u.BJc, {
      children: G.map(e => {
        let i = D.roles.includes(e.id),
          a = function(e) {
            let r = I.find(t => {
              let {
                role_id: r
              } = t;
              return r === e
            });
            if (null == r) return [];
            let l = {};
            for (let e of r.rules.flat()) {
              let a;
              if (null != e.application_id) {
                var i;
                let l = null == (i = r.applications) ? true : i[e.application_id];
                a = (null == l ? true : l.bot) != null ? (0, n.jsx)("img", {
                  src: new j.A(l.bot).getAvatarURL(t, 24),
                  alt: "",
                  className: o()(N.ZN, P.my)
                }) : null
              } else {
                let t = b.A.get(e.connection_type);
                a = (0, n.jsx)("img", {
                  src: (0, s.qB)(T) ? t.icon.lightSVG : t.icon.darkSVG,
                  alt: "",
                  className: P.my
                })
              }
              null != a && (l["".concat(e.connection_type, ":").concat(e.application_id)] = a)
            }
            return Object.values(l)
          }(e.id);
        return (0, n.jsxs)(u.DUT, {
          className: o()(N.L5, i ? N.xN : null),
          onClick: i ? true : () => C(e, t),
          onContextMenu: i ? l => {
            var i;
            return i = e.id, void(0, d.L3)(l, async () => {
              let {
                default: e
              } = await r.e("68001").then(r.bind(r, 699896));
              return r => {
                var l, o;
                return (0, n.jsx)(e, (l = k({}, r), o = o = {
                  roleId: i,
                  onLeaveRole: () => f.A.unassignGuildRoleConnection(t, i)
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                  }
                  return r
                })(Object(o)).forEach(function(e) {
                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
                }), l))
              }
            })
          } : true,
          children: [i ? (0, n.jsx)("div", {
            className: N.UA,
            children: (0, n.jsx)(u.Uzd, {
              size: "xs",
              color: "currentColor"
            })
          }) : null, (0, n.jsx)(A.A, {
            guildId: t,
            role: e,
            size: 24
          }), (0, n.jsxs)("div", {
            className: N.fk,
            children: [(0, n.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "text-strong",
              className: N.CF,
              children: e.name
            }), true !== e.description ? (0, n.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              className: N.Xr,
              children: e.description
            }) : null]
          }), (0, n.jsx)(m.Ay, {
            showUserPopout: false,
            guildId: t,
            users: a.map(() => null),
            renderUser: (e, t, r) => (0, n.jsx)(l.Fragment, {
              children: a[r]
            }, r),
            max: 3
          })]
        }, e.id)
      })
    })
  })
}