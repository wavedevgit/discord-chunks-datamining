/** Chunk was on 92837 **/
/** chunk id: 480900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => k,
  default: () => C
}), require("./896048.js"), require("./864466.js"), require("./443073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function S(e) {
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

function k(e, t) {
  (0, u.mMO)(async () => {
    let {
      default: l
    } = await n.e("80971").then(n.bind(n, 488358));
    return n => (0, r.jsx)(l, S({
      role: e,
      guildId: t
    }, n))
  })
}
let C = function(e) {
  let {
    guildId: t,
    transitionState: o,
    onClose: C
  } = e, E = (0, a.bG)([x.A], () => x.A.getSortedRoles(t)), I = (0, a.bG)([y.default], () => y.default.getId()), U = (0, a.bG)([O.Ay], () => O.Ay.getMember(t, I)), [D, R] = l.useState([]), T = (0, b.Ay)();
  if (l.useEffect(() => {
      0 !== D.length && v.default.track(w.HAw.PASSPORT_ENTRY_VIEWED, S({
        role_ids: D.map(e => {
          let {
            role_id: t
          } = e;
          return t
        })
      }, (0, j.H$)(t)))
    }, [t, D]), l.useEffect(() => {
      f.A.getGuildRoleConnectionsConfigurations(t).then(e => R(e))
    }, [t]), null == U) return null;
  let G = E.filter(e => null === e.tags.guild_connections);
  return (0, r.jsx)(c.Modal, {
    transitionState: o,
    title: P.intl.string(P.t.ghtnss),
    onClose: C,
    subtitle: P.intl.format(P.t["Y+TsEV"], {
      helpdeskArticleUrl: h.A.getArticleURL(w.MVz.CONNECTION_DETAILS)
    }),
    actions: [],
    children: (0, r.jsx)(u.BJc, {
      children: G.map(e => {
        let o = U.roles.includes(e.id),
          c = function(e) {
            let n = D.find(t => {
              let {
                role_id: n
              } = t;
              return n === e
            });
            if (null == n) return [];
            let l = {};
            for (let e of n.rules.flat()) {
              let c;
              if (null != e.application_id) {
                var o;
                let l = null == (o = n.applications) ? true : o[e.application_id];
                c = (null == l ? true : l.bot) != null ? (0, r.jsx)("img", {
                  src: new m.A(l.bot).getAvatarURL(t, 24),
                  alt: "",
                  className: i()(_.ZN, N.my)
                }) : null
              } else {
                let t = p.A.get(e.connection_type);
                c = (0, r.jsx)("img", {
                  src: (0, s.qB)(T) ? t.icon.lightSVG : t.icon.darkSVG,
                  alt: "",
                  className: N.my
                })
              }
              null != c && (l["".concat(e.connection_type, ":").concat(e.application_id)] = c)
            }
            return Object.values(l)
          }(e.id);
        return (0, r.jsxs)(u.DUT, {
          className: i()(_.L5, o ? _.xN : null),
          onClick: o ? true : () => k(e, t),
          onContextMenu: o ? l => {
            var o;
            return o = e.id, void(0, d.L3)(l, async () => {
              let {
                default: e
              } = await n.e("68001").then(n.bind(n, 699896));
              return n => {
                var l, i;
                return (0, r.jsx)(e, (l = S({}, n), i = i = {
                  roleId: o,
                  onLeaveRole: () => f.A.unassignGuildRoleConnection(t, o)
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(i)).forEach(function(e) {
                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
                }), l))
              }
            })
          } : true,
          children: [o ? (0, r.jsx)("div", {
            className: _.UA,
            children: (0, r.jsx)(u.Uzd, {
              size: "xs",
              color: "currentColor"
            })
          }) : null, (0, r.jsx)(A.A, {
            guildId: t,
            role: e,
            size: 24
          }), (0, r.jsxs)("div", {
            className: _.fk,
            children: [(0, r.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "text-strong",
              className: _.CF,
              children: e.name
            }), true !== e.description ? (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              className: _.Xr,
              children: e.description
            }) : null]
          }), (0, r.jsx)(g.Ay, {
            showUserPopout: false,
            guildId: t,
            users: c.map(() => null),
            renderUser: (e, t, n) => (0, r.jsx)(l.Fragment, {
              children: c[n]
            }, n),
            max: 3
          })]
        }, e.id)
      })
    })
  })
}