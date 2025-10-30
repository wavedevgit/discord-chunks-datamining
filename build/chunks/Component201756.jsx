/** Chunk was on 6850 **/
/** chunk id: 201756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk498607 = require("./498607.js"),
  s = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
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
  Chunk909350 = require("./909350.js"),
  Chunk399291 = require("./399291.js");

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

function N(e, t) {
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
let D = Chunk647438.forwardRef(function(e, t) {
  var n, l, {
      label: i,
      onFilter: a,
      isFiltered: s,
      isSorted: c,
      className: u
    } = e,
    d = N(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
  let m = s ? "header-primary" : "header-secondary";
  return c && (m = "text-brand"), (0, r.jsx)("th", {
    className: o()(w.tableHeaderCellContainer, u),
    children: (0, r.jsxs)(C.P3F, (n = Z({}, d), l = l = {
      innerRef: t,
      onClick: a,
      className: o()(w.tableHeaderCell, {
        [w.tableHeaderCellWithFilter]: null != a
      }),
      children: [(0, r.jsx)(C.Text, {
        variant: "eyebrow",
        color: m,
        children: i
      }), null != a && (0, r.jsx)("div", {
        className: w.filterIconButton,
        children: (0, r.jsx)(C.gXV, {
          size: "custom",
          className: w.filterIcon,
          color: s ? C.TVs.colors.CONTROL_BRAND_FOREGROUND.css : C.TVs.colors.TEXT_MUTED.css,
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

function R(e) {
  let {
    guildId: t,
    currentPagedMembers: n
  } = e, i = l.useRef(null), a = l.useRef(null), R = l.useRef(null), L = l.useRef(null), P = l.useRef(null), I = (0, c.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], s()), V = (0, c.e7)([b.Z, m.Z], () => b.Z.can(H.Plq.MANAGE_GUILD, m.Z.getGuild(t)), [t]), {
    selectedUserIds: M,
    addUsers: E,
    clearSelection: T
  } = (0, g.Z)(t), k = I.requireUnusualDmActivity || I.requireCommunicationDisabled || I.requireUnusualAccountActivity || I.requireUsernameQuarantined, A = I.selectedRoleIds.size > 0, U = null != I.selectedJoinDateOption.afterDate, B = I.selectedSort === p.d$.ORDER_BY_GUILD_JOINED_AT_ASC, F = null != I.selectedAccountAgeOption.afterDate, q = I.selectedSort === p.d$.ORDER_BY_USER_ID_ASC || I.selectedSort === p.d$.ORDER_BY_USER_ID_DESC, G = null != I.selectedSourceInviteCode && "" !== I.selectedSourceInviteCode, z = null != I.selectedJoinSourceType, Y = G || z, Q = (0, f.xC)(t), W = l.useMemo(() => n.filter(e => (0, f.rX)(t, Q, e)), [Q, n, t]), K = W.length > 0, J = 0 === W.filter(e => !M.has(e)).length, X = l.useCallback(() => {
    K && (J ? T() : E(W))
  }, [K, J, T, E, W]);
  return (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: w.tableHeaderRow,
      children: [Q && (0, r.jsx)("th", {
        className: o()(w.tableHeaderCellContainer, S.xsmallCol),
        children: (0, r.jsx)(u.u, {
          shouldShow: !K,
          text: _.intl.string(_.t.tJEY0G),
          children: (0, r.jsx)(C.P3F, {
            onClick: X,
            className: w.tableHeaderCell,
            children: (0, r.jsx)(d.$q, {
              type: d.M0.INVERTED,
              value: J,
              disabled: !K
            })
          })
        })
      }), (0, r.jsx)(D, {
        label: _.intl.string(_.t.Es7n9c)
      }), V ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(C.yRy, {
          targetElementRef: i,
          animation: C.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(v.Z, {
            guildId: t,
            onClose: H.dG4
          }),
          children: e => {
            var {
              onClick: t
            } = e, n = N(e, ["onClick"]);
            return (0, r.jsx)(D, Z({
              ref: i,
              label: _.intl.string(_.t.xcKP1P),
              onFilter: t,
              isFiltered: U,
              isSorted: B,
              className: S.smallCol
            }, n))
          }
        }), (0, r.jsx)(C.yRy, {
          targetElementRef: a,
          animation: C.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(j.Z, {
            guildId: t,
            onClose: H.dG4
          }),
          children: e => {
            var {
              onClick: t
            } = e, n = N(e, ["onClick"]);
            return (0, r.jsx)(D, Z({
              ref: a,
              label: _.intl.string(_.t.sPph4O),
              onFilter: t,
              isFiltered: F,
              isSorted: q,
              className: S.smallCol
            }, n))
          }
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          label: _.intl.string(_.t.xcKP1P),
          className: S.smallCol
        }), (0, r.jsx)(D, {
          label: _.intl.string(_.t.sPph4O),
          className: S.smallCol
        })]
      }), V ? (0, r.jsx)(C.yRy, {
        targetElementRef: R,
        animation: C.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(y.Z, {
          guildId: t,
          onClose: H.dG4
        }),
        children: e => {
          var {
            onClick: t
          } = e, n = N(e, ["onClick"]);
          return (0, r.jsx)(D, Z({
            ref: R,
            label: _.intl.string(_.t["yn0w1+"]),
            onFilter: t,
            isFiltered: Y,
            className: S.smallCol
          }, n))
        }
      }) : V && (0, r.jsx)(D, {
        label: _.intl.string(_.t["yn0w1+"]),
        className: S.smallCol
      }), (0, r.jsx)(C.yRy, {
        targetElementRef: L,
        animation: C.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, r.jsx)(O.Z, {
            guildId: t,
            onClose: n
          })
        },
        children: e => {
          var {
            onClick: t
          } = e, n = N(e, ["onClick"]);
          return (0, r.jsx)(D, Z({
            ref: L,
            label: _.intl.string(_.t["2SZsWX"]),
            onFilter: t,
            isFiltered: A,
            className: S.mediumCol
          }, n))
        }
      }), (0, r.jsx)(u.u, {
        text: _.intl.string(_.t["2cRO3R"]),
        position: "top",
        align: "left",
        shouldShow: true,
        children: (0, r.jsx)(C.yRy, {
          targetElementRef: P,
          animation: C.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: n
            } = e;
            return (0, r.jsx)(x.Z, {
              guildId: t,
              onClose: n
            })
          },
          children: e => (0, r.jsx)(D, {
            ref: P,
            label: _.intl.string(_.t["7V3759"]),
            "aria-label": _.intl.string(_.t["2cRO3R"]),
            onFilter: t => {
              var n;
              null == (n = e.onClick) || n.call(e, t)
            },
            isFiltered: k,
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
      }), (0, r.jsx)(D, {
        label: _.intl.string(_.t["5Q9xGr"]),
        className: S.smallCol
      })]
    })
  })
}