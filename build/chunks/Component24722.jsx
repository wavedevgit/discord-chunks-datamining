/** Chunk was on 15968 **/
/** chunk id: 24722, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => w
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

function x(e) {
  var t = function(e, t) {
    if ("object" !== C(e) || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (true !== r) {
      var n = r.call(e, t || "default");
      if ("object" !== C(n)) return n;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === C(t) ? t : String(t)
}

function C(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

function w(e) {
  let {
    transitionState: t,
    onClose: r,
    roleId: C,
    guildId: w
  } = e, S = (0, a.e7)([g.Z], () => g.Z.getRole(C), [C]), [M, P] = i.useState(""), [E, R] = i.useState({}), [T, Z] = i.useState(false);
  i.useEffect(() => {
    f.Z.requestMembers(w, M.trim().toLowerCase(), v._4)
  }, [w, M]);
  let _ = i.useCallback(e => !e.roles.includes(C), [C]),
    q = (0, v.lJ)(w, _),
    B = i.useMemo(() => q.filter(e => (0, v.eg)(M, e)), [M, q]),
    L = i.useCallback(async () => {
      let e = Object.values(E).map(e => e.row.id);
      Z(true);
      try {
        await p.Z.bulkAddMemberRoles(w, C, e), (0, y.H)(w, C, false), r()
      } catch (e) {
        Z(false)
      }
    }, [w, C, E, r]),
    U = i.useCallback(e => {
      R(t => {
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
          n = (0, m.G)(e);
        return n in r ? delete r[n] : r[n] = {
          display: {
            type: c.F.MEMBER,
            label: e.name,
            avatar: e.avatarURL
          },
          row: e
        }, r
      })
    }, []),
    A = i.useCallback(e => {
      R(t => {
        let {
          [e]: r
        } = t;
        return function(e, t) {
          if (null == e) return {};
          var r, n, i = function(e, t) {
            if (null == e) return {};
            var r, n, i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
          }
          return i
        }(t, [e].map(x))
      })
    }, []),
    N = i.useMemo(() => B.map(e => {
      var t;
      let r = d.ZP.getUserTag(e.user);
      return {
        rowType: j.aC.MEMBER,
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
    }), [B]),
    G = i.useMemo(() => Object.keys(E).length, [E]),
    I = [{
      text: k.intl.string(k.t["ETE/oK"]),
      variant: "secondary",
      onClick: r
    }, {
      text: k.intl.string(k.t.OYkgVl),
      variant: "primary",
      onClick: L,
      loading: T,
      disabled: 0 === G || G > O.ey
    }];
  return (0, n.jsxs)(l.I, {
    onClose: r,
    transitionState: t,
    children: [(0, n.jsx)(u.x, {
      title: k.intl.string(k.t["ZYOK4+"]),
      subtitle: null != S ? k.intl.format(k.t["qP+nub"], {
        numMembers: O.ey,
        roleName: S.name
      }) : k.intl.format(k.t["3OxP4u"], {
        numMembers: O.ey
      }),
      alignCenter: true,
      titleTextVariant: "heading-xl/semibold"
    }), (0, n.jsx)(s.f, {
      children: (0, n.jsx)(b.t, {
        listClassName: h.list,
        pendingAdditions: E,
        query: M,
        onQueryChange: P,
        onClickRow: U,
        onRemovePendingAddition: A,
        roles: [],
        members: N,
        placeholderText: k.intl.string(k.t.vMiCaW),
        renderEmptyText: e => k.intl.format(k.t.eq8a8f, {
          query: e
        })
      })
    }), (0, n.jsx)(o.G, {
      actions: I
    })]
  })
}