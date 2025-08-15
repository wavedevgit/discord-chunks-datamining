/** Chunk was on 80890 **/
/** chunk id: 24722, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk794433 = require("./794433.jsx"),
  Chunk185413 = require("./185413.jsx"),
  Chunk971628 = require("./971628.jsx"),
  Chunk892880 = require("./892880.js"),
  Chunk51144 = require("./51144.js"),
  Chunk480608 = require("./480608.js"),
  Chunk434404 = require("./434404.js"),
  Chunk946724 = require("./946724.js"),
  Chunk130341 = require("./130341.js"),
  Chunk494831 = require("./494831.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk98678 = require("./98678.js");

function O(e) {
  var t = function(e, t) {
    if ("object" !== S(e) || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (true !== r) {
      var n = r.call(e, t || "default");
      if ("object" !== S(n)) return n;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === S(t) ? t : String(t)
}

function S(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

function k(e) {
  let {
    transitionState: t,
    onClose: r,
    roleId: S,
    guildId: k
  } = e, R = (0, a.e7)([y.Z], () => y.Z.getRole(S), [S]), [j, C] = o.useState(""), [M, T] = o.useState({}), [L, P] = o.useState(false);
  o.useEffect(() => {
    m.Z.requestMembers(k, j.trim().toLowerCase(), g._4)
  }, [k, j]);
  let E = o.useCallback(e => !e.roles.includes(S), [S]),
    B = (0, g.lJ)(k, E),
    I = o.useMemo(() => B.filter(e => (0, g.eg)(j, e)), [j, B]),
    Z = o.useCallback(async () => {
      let e = Object.values(M).map(e => e.row.id);
      P(true);
      try {
        await p.Z.bulkAddMemberRoles(k, S, e), (0, f.H)(k, S, false), r()
      } catch (e) {
        P(false)
      }
    }, [k, S, M, r]),
    q = o.useCallback(e => {
      T(t => {
        let r = function(e) {
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
          }({}, t),
          n = (0, d.G)(e);
        return n in r ? delete r[n] : r[n] = {
          display: {
            type: u.F.MEMBER,
            label: e.name,
            avatar: e.avatarURL
          },
          row: e
        }, r
      })
    }, []),
    U = o.useCallback(e => {
      T(t => {
        let {
          [e]: r
        } = t;
        return function(e, t) {
          if (null == e) return {};
          var r, n, o = function(e, t) {
            if (null == e) return {};
            var r, n, o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
          }
          return o
        }(t, [e].map(O))
      })
    }, []),
    A = o.useMemo(() => I.map(e => {
      var t;
      let r = _.ZP.getUserTag(e.user);
      return {
        rowType: v.aC.MEMBER,
        name: null != (t = e.name) ? t : r,
        nickname: e.name,
        username: r,
        id: e.id,
        avatarURL: e.avatarURL,
        bot: e.bot,
        verifiedBot: e.verifiedBot,
        disabled: false,
        key: e.id
      }
    }), [I]),
    H = o.useMemo(() => Object.keys(M).length, [M]),
    N = [{
      text: w.intl.string(w.t["ETE/oK"]),
      variant: "secondary",
      onClick: r
    }, {
      text: w.intl.string(w.t.OYkgVl),
      variant: "primary",
      onClick: Z,
      loading: L,
      disabled: 0 === H || H > h.ey
    }];
  return (0, n.jsxs)(i.I, {
    onClose: r,
    transitionState: t,
    children: [(0, n.jsx)(b.x, {
      title: w.intl.string(w.t["ZYOK4+"]),
      subtitle: null != R ? w.intl.format(w.t["qP+nub"], {
        numMembers: h.ey,
        roleName: R.name
      }) : w.intl.format(w.t["3OxP4u"], {
        numMembers: h.ey
      }),
      alignCenter: true,
      titleTextVariant: "heading-xl/semibold"
    }), (0, n.jsx)(s.f, {
      children: (0, n.jsx)(c.t, {
        listClassName: x.list,
        pendingAdditions: M,
        query: j,
        onQueryChange: C,
        onClickRow: q,
        onRemovePendingAddition: U,
        roles: [],
        members: A,
        placeholderText: w.intl.string(w.t.vMiCaW),
        renderEmptyText: e => w.intl.format(w.t.eq8a8f, {
          query: e
        })
      })
    }), (0, n.jsx)(l.G, {
      actions: N
    })]
  })
}