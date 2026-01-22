/** Chunk was on 35894 **/
/** chunk id: 89092, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk33851 = require("./33851.js"),
  s = require.n(Chunk33851),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk70738 = require("./70738.js"),
  Chunk134413 = require("./134413.js"),
  Chunk266047 = require("./266047.js"),
  Chunk225671 = require("./225671.js"),
  Chunk100172 = require("./100172.jsx"),
  Chunk401695 = require("./401695.jsx"),
  Chunk925282 = require("./925282.jsx"),
  Chunk441358 = require("./441358.jsx"),
  Chunk386404 = require("./386404.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk236671 = require("./236671.js"),
  Chunk918372 = require("./918372.js");

function D(e) {
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

function S(e, t) {
  if (null == e) return {};
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}
let _ = Chunk64700.forwardRef(function(e, t) {
  var n, l;
  let [i, ...a] = [e, t], {
    label: s,
    onFilter: c,
    isFiltered: d,
    isSorted: C,
    className: f
  } = i, b = S(i, ["label", "onFilter", "isFiltered", "isSorted", "className"]), [m] = a, p = d ? "text-strong" : "text-default";
  return C && (p = "text-brand"), (0, r.jsx)("th", {
    className: o()(w.P1, f),
    children: (0, r.jsxs)(u.DUT, (n = D({}, b), l = l = {
      innerRef: m,
      onClick: c,
      className: o()(w.WV, {
        [w.o1]: null != c
      }),
      children: [(0, r.jsx)(u.Text, {
        variant: "eyebrow",
        color: p,
        children: s
      }), null != c && (0, r.jsx)("div", {
        className: w.IO,
        children: (0, r.jsx)(u.RgP, {
          size: "custom",
          className: w.Sj,
          color: d ? u.LU0.colors.CONTROL_BRAND_FOREGROUND.css : u.LU0.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
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
  })
});

function N(e) {
  let {
    guildId: t,
    currentPagedMembers: n
  } = e, i = l.useRef(null), a = l.useRef(null), N = l.useRef(null), P = l.useRef(null), V = l.useRef(null), L = (0, c.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], s()), E = (0, c.bG)([f.A, C.A], () => f.A.can(v.xBc.MANAGE_GUILD, C.A.getGuild(t)), [t]), {
    selectedUserIds: M,
    addUsers: R,
    clearSelection: I
  } = (0, j.A)(t), T = L.requireUnusualDmActivity || L.requireCommunicationDisabled || L.requireUnusualAccountActivity || L.requireUsernameQuarantined, Z = L.selectedRoleIds.size > 0, k = null != L.selectedJoinDateOption.afterDate, U = L.selectedSort === b.mF.ORDER_BY_GUILD_JOINED_AT_ASC, F = null != L.selectedAccountAgeOption.afterDate, B = L.selectedSort === b.mF.ORDER_BY_USER_ID_ASC || L.selectedSort === b.mF.ORDER_BY_USER_ID_DESC, G = null != L.selectedSourceInviteCode && "" !== L.selectedSourceInviteCode, z = null != L.selectedJoinSourceType, q = G || z, Y = (0, m.vA)(t), K = l.useMemo(() => n.filter(e => (0, m.Ph)(t, Y, e)), [Y, n, t]), Q = K.length > 0, X = 0 === K.filter(e => !M.has(e)).length, J = l.useCallback(() => {
    Q && (X ? I() : R(K))
  }, [Q, X, I, R, K]);
  return (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: w.Yk,
      children: [Y && (0, r.jsx)("th", {
        className: o()(w.P1, A.y2),
        children: (0, r.jsx)(d.m, {
          shouldShow: !Q,
          text: H.intl.string(H.t.tJEY0G),
          children: (0, r.jsx)(u.DUT, {
            onClick: J,
            className: w.WV,
            children: (0, r.jsx)(u.P7L, {
              checked: X,
              disabled: !Q
            })
          })
        })
      }), (0, r.jsx)(_, {
        label: H.intl.string(H.t.Es7n9c)
      }), E ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.YNO, {
          targetElementRef: i,
          animation: u.YNO.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(x.A, {
            guildId: t,
            onClose: v.tEg
          }),
          children: e => {
            let {
              onClick: t
            } = e, n = S(e, ["onClick"]);
            return (0, r.jsx)(_, D({
              ref: i,
              label: H.intl.string(H.t.xcKP1P),
              onFilter: t,
              isFiltered: k,
              isSorted: U,
              className: A.qp
            }, n))
          }
        }), (0, r.jsx)(u.YNO, {
          targetElementRef: a,
          animation: u.YNO.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(g.A, {
            guildId: t,
            onClose: v.tEg
          }),
          children: e => {
            let {
              onClick: t
            } = e, n = S(e, ["onClick"]);
            return (0, r.jsx)(_, D({
              ref: a,
              label: H.intl.string(H.t.sPph4O),
              onFilter: t,
              isFiltered: F,
              isSorted: B,
              className: A.qp
            }, n))
          }
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_, {
          label: H.intl.string(H.t.xcKP1P),
          className: A.qp
        }), (0, r.jsx)(_, {
          label: H.intl.string(H.t.sPph4O),
          className: A.qp
        })]
      }), E ? (0, r.jsx)(u.YNO, {
        targetElementRef: N,
        animation: u.YNO.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(y.A, {
          guildId: t,
          onClose: v.tEg
        }),
        children: e => {
          let {
            onClick: t
          } = e, n = S(e, ["onClick"]);
          return (0, r.jsx)(_, D({
            ref: N,
            label: H.intl.string(H.t["yn0w1+"]),
            onFilter: t,
            isFiltered: q,
            className: A.qp
          }, n))
        }
      }) : E && (0, r.jsx)(_, {
        label: H.intl.string(H.t["yn0w1+"]),
        className: A.qp
      }), (0, r.jsx)(u.YNO, {
        targetElementRef: P,
        animation: u.YNO.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(O.A, {
          guildId: t
        }),
        children: e => {
          let {
            onClick: t
          } = e, n = S(e, ["onClick"]);
          return (0, r.jsx)(_, D({
            ref: P,
            label: H.intl.string(H.t["2SZsWX"]),
            onFilter: t,
            isFiltered: Z,
            className: A.QB
          }, n))
        }
      }), (0, r.jsx)(d.m, {
        text: H.intl.string(H.t["2cRO3R"]),
        position: "top",
        align: "left",
        shouldShow: true,
        children: (0, r.jsx)(u.YNO, {
          targetElementRef: V,
          animation: u.YNO.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: n
            } = e;
            return (0, r.jsx)(h.A, {
              guildId: t,
              onClose: n
            })
          },
          children: e => (0, r.jsx)(_, {
            ref: V,
            label: H.intl.string(H.t["7V3759"]),
            "aria-label": H.intl.string(H.t["2cRO3R"]),
            onFilter: t => {
              var n;
              null == (n = e.onClick) || n.call(e, t)
            },
            isFiltered: T,
            className: A.qp,
            onMouseEnter: () => {
              var t;
              null == (t = e.onMouseEnter) || t.call(e)
            },
            onMouseDown: e.onMouseDown,
            onKeyDown: e.onKeyDown,
            "aria-controls": e["aria-controls"],
            "aria-expanded": e["aria-expanded"]
          })
        })
      }), (0, r.jsx)(_, {
        label: H.intl.string(H.t["5Q9xGr"]),
        className: A.qp
      })]
    })
  })
}