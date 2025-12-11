/** Chunk was on 6850 **/
/** chunk id: 201756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk498607 = require("./498607.js"),
  s = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk588215 = require("./588215.js"),
  Chunk241559 = require("./241559.js"),
  Chunk893966 = require("./893966.js"),
  Chunk256003 = require("./256003.js"),
  Chunk170323 = require("./170323.jsx"),
  Chunk434368 = require("./434368.jsx"),
  Chunk42170 = require("./42170.jsx"),
  Chunk123846 = require("./123846.jsx"),
  Chunk42551 = require("./42551.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452173 = require("./452173.js"),
  Chunk983266 = require("./983266.js");

function Z(e) {
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

function D(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let N = Chunk473749.forwardRef(function(e, t) {
  var n, l, {
      label: i,
      onFilter: o,
      isFiltered: s,
      isSorted: c,
      className: d
    } = e,
    C = D(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
  let m = s ? "header-primary" : "text-default";
  return c && (m = "text-brand"), (0, r.jsx)("th", {
    className: a()(w.tableHeaderCellContainer, d),
    children: (0, r.jsxs)(u.P3F, (n = Z({}, C), l = l = {
      innerRef: t,
      onClick: o,
      className: a()(w.tableHeaderCell, {
        [w.tableHeaderCellWithFilter]: null != o
      }),
      children: [(0, r.jsx)(u.Text, {
        variant: "eyebrow",
        color: m,
        children: i
      }), null != o && (0, r.jsx)("div", {
        className: w.filterIconButton,
        children: (0, r.jsx)(u.gXV, {
          size: "custom",
          className: w.filterIcon,
          color: s ? u.TVs.colors.CONTROL_BRAND_FOREGROUND.css : u.TVs.colors.TEXT_MUTED.css,
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

function _(e) {
  let {
    guildId: t,
    currentPagedMembers: n
  } = e, i = l.useRef(null), o = l.useRef(null), _ = l.useRef(null), R = l.useRef(null), L = l.useRef(null), I = (0, c.e7)([p.Z], () => p.Z.getSearchStateByGuildId(t), [t], s()), P = (0, c.e7)([m.Z, C.Z], () => m.Z.can(O.Plq.MANAGE_GUILD, C.Z.getGuild(t)), [t]), {
    selectedUserIds: V,
    addUsers: M,
    clearSelection: E
  } = (0, h.Z)(t), T = I.requireUnusualDmActivity || I.requireCommunicationDisabled || I.requireUnusualAccountActivity || I.requireUsernameQuarantined, k = I.selectedRoleIds.size > 0, A = null != I.selectedJoinDateOption.afterDate, U = I.selectedSort === b.d$.ORDER_BY_GUILD_JOINED_AT_ASC, F = null != I.selectedAccountAgeOption.afterDate, B = I.selectedSort === b.d$.ORDER_BY_USER_ID_ASC || I.selectedSort === b.d$.ORDER_BY_USER_ID_DESC, q = null != I.selectedSourceInviteCode && "" !== I.selectedSourceInviteCode, G = null != I.selectedJoinSourceType, z = q || G, Y = (0, f.xC)(t), Q = l.useMemo(() => n.filter(e => (0, f.rX)(t, Y, e)), [Y, n, t]), W = Q.length > 0, K = 0 === Q.filter(e => !V.has(e)).length, J = l.useCallback(() => {
    W && (K ? E() : M(Q))
  }, [W, K, E, M, Q]);
  return (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: w.tableHeaderRow,
      children: [Y && (0, r.jsx)("th", {
        className: a()(w.tableHeaderCellContainer, S.xsmallCol),
        children: (0, r.jsx)(d.u, {
          shouldShow: !W,
          text: H.intl.string(H.t.tJEY0G),
          children: (0, r.jsx)(u.P3F, {
            onClick: J,
            className: w.tableHeaderCell,
            children: (0, r.jsx)(u.FZ5, {
              checked: K,
              disabled: !W
            })
          })
        })
      }), (0, r.jsx)(N, {
        label: H.intl.string(H.t.Es7n9c)
      }), P ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.yRy, {
          targetElementRef: i,
          animation: u.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(x.Z, {
            guildId: t,
            onClose: O.dG4
          }),
          children: e => {
            var {
              onClick: t
            } = e, n = D(e, ["onClick"]);
            return (0, r.jsx)(N, Z({
              ref: i,
              label: H.intl.string(H.t.xcKP1P),
              onFilter: t,
              isFiltered: A,
              isSorted: U,
              className: S.smallCol
            }, n))
          }
        }), (0, r.jsx)(u.yRy, {
          targetElementRef: o,
          animation: u.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(g.Z, {
            guildId: t,
            onClose: O.dG4
          }),
          children: e => {
            var {
              onClick: t
            } = e, n = D(e, ["onClick"]);
            return (0, r.jsx)(N, Z({
              ref: o,
              label: H.intl.string(H.t.sPph4O),
              onFilter: t,
              isFiltered: F,
              isSorted: B,
              className: S.smallCol
            }, n))
          }
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(N, {
          label: H.intl.string(H.t.xcKP1P),
          className: S.smallCol
        }), (0, r.jsx)(N, {
          label: H.intl.string(H.t.sPph4O),
          className: S.smallCol
        })]
      }), P ? (0, r.jsx)(u.yRy, {
        targetElementRef: _,
        animation: u.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(v.Z, {
          guildId: t,
          onClose: O.dG4
        }),
        children: e => {
          var {
            onClick: t
          } = e, n = D(e, ["onClick"]);
          return (0, r.jsx)(N, Z({
            ref: _,
            label: H.intl.string(H.t["yn0w1+"]),
            onFilter: t,
            isFiltered: z,
            className: S.smallCol
          }, n))
        }
      }) : P && (0, r.jsx)(N, {
        label: H.intl.string(H.t["yn0w1+"]),
        className: S.smallCol
      }), (0, r.jsx)(u.yRy, {
        targetElementRef: R,
        animation: u.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(y.Z, {
          guildId: t
        }),
        children: e => {
          var {
            onClick: t
          } = e, n = D(e, ["onClick"]);
          return (0, r.jsx)(N, Z({
            ref: R,
            label: H.intl.string(H.t["2SZsWX"]),
            onFilter: t,
            isFiltered: k,
            className: S.mediumCol
          }, n))
        }
      }), (0, r.jsx)(d.u, {
        text: H.intl.string(H.t["2cRO3R"]),
        position: "top",
        align: "left",
        shouldShow: true,
        children: (0, r.jsx)(u.yRy, {
          targetElementRef: L,
          animation: u.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: n
            } = e;
            return (0, r.jsx)(j.Z, {
              guildId: t,
              onClose: n
            })
          },
          children: e => (0, r.jsx)(N, {
            ref: L,
            label: H.intl.string(H.t["7V3759"]),
            "aria-label": H.intl.string(H.t["2cRO3R"]),
            onFilter: t => {
              var n;
              null == (n = e.onClick) || n.call(e, t)
            },
            isFiltered: T,
            className: S.smallCol,
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
      }), (0, r.jsx)(N, {
        label: H.intl.string(H.t["5Q9xGr"]),
        className: S.smallCol
      })]
    })
  })
}