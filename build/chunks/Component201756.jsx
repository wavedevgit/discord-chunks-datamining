/** Chunk was on 6850 **/
/** chunk id: 201756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk498607 = require("./498607.js"),
  s = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
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

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e, t) {
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
  var {
    label: n,
    onFilter: l,
    isFiltered: i,
    isSorted: a,
    className: s
  } = e, c = Z(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
  let u = i ? "header-primary" : "header-secondary";
  return a && (u = "text-brand"), (0, r.jsx)("th", {
    className: o()(_.tableHeaderCellContainer, s),
    children: (0, r.jsxs)(d.P3F, N(S({}, c), {
      innerRef: t,
      onClick: l,
      className: o()(_.tableHeaderCell, {
        [_.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, r.jsx)(d.Text, {
        variant: "eyebrow",
        color: u,
        children: n
      }), null != l && (0, r.jsx)("div", {
        className: _.filterIconButton,
        children: (0, r.jsx)(d.gXV, {
          size: "custom",
          className: _.filterIcon,
          color: i ? d.TVs.colors.CONTROL_BRAND_FOREGROUND.css : d.TVs.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    }))
  })
});

function L(e) {
  let {
    guildId: t,
    currentPagedMembers: n
  } = e, i = l.useRef(null), a = l.useRef(null), L = l.useRef(null), R = l.useRef(null), P = l.useRef(null), I = (0, c.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], s()), M = (0, c.e7)([m.Z, C.Z], () => m.Z.can(O.Plq.MANAGE_GUILD, C.Z.getGuild(t)), [t]), {
    selectedUserIds: V,
    addUsers: E,
    clearSelection: T
  } = (0, h.Z)(t), k = I.requireUnusualDmActivity || I.requireCommunicationDisabled || I.requireUnusualAccountActivity || I.requireUsernameQuarantined, A = I.selectedRoleIds.size > 0, U = null != I.selectedJoinDateOption.afterDate, F = I.selectedSort === b.d$.ORDER_BY_GUILD_JOINED_AT_ASC, B = null != I.selectedAccountAgeOption.afterDate, q = I.selectedSort === b.d$.ORDER_BY_USER_ID_ASC || I.selectedSort === b.d$.ORDER_BY_USER_ID_DESC, z = null != I.selectedSourceInviteCode && "" !== I.selectedSourceInviteCode, G = null != I.selectedJoinSourceType, Y = z || G, W = (0, p.xC)(t), K = l.useMemo(() => n.filter(e => (0, p.rX)(t, W, e)), [W, n, t]), Q = K.length > 0, X = 0 === K.filter(e => !V.has(e)).length, J = l.useCallback(() => {
    Q && (X ? T() : E(K))
  }, [Q, X, T, E, K]);
  return (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: _.tableHeaderRow,
      children: [W && (0, r.jsx)("th", {
        className: o()(_.tableHeaderCellContainer, w.xsmallCol),
        children: (0, r.jsx)(d.ua7, {
          shouldShow: !Q,
          text: H.intl.string(H.t.tJEY0N),
          children: e => (0, r.jsx)(d.P3F, N(S({}, e), {
            onClick: J,
            className: _.tableHeaderCell,
            children: (0, r.jsx)(u.$q, {
              type: u.M0.INVERTED,
              value: X,
              disabled: !Q
            })
          }))
        })
      }), (0, r.jsx)(D, {
        label: H.intl.string(H.t.Es7n9f)
      }), M ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.yRy, {
          targetElementRef: i,
          animation: d.yRy.Animation.FADE,
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
            } = e, n = Z(e, ["onClick"]);
            return (0, r.jsx)(D, S({
              ref: i,
              label: H.intl.string(H.t.xcKP1N),
              onFilter: t,
              isFiltered: U,
              isSorted: F,
              className: w.smallCol
            }, n))
          }
        }), (0, r.jsx)(d.yRy, {
          targetElementRef: a,
          animation: d.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(j.Z, {
            guildId: t,
            onClose: O.dG4
          }),
          children: e => {
            var {
              onClick: t
            } = e, n = Z(e, ["onClick"]);
            return (0, r.jsx)(D, S({
              ref: a,
              label: H.intl.string(H.t.sPph4O),
              onFilter: t,
              isFiltered: B,
              isSorted: q,
              className: w.smallCol
            }, n))
          }
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          label: H.intl.string(H.t.xcKP1N),
          className: w.smallCol
        }), (0, r.jsx)(D, {
          label: H.intl.string(H.t.sPph4O),
          className: w.smallCol
        })]
      }), M ? (0, r.jsx)(d.yRy, {
        targetElementRef: L,
        animation: d.yRy.Animation.FADE,
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
          } = e, n = Z(e, ["onClick"]);
          return (0, r.jsx)(D, S({
            ref: L,
            label: H.intl.string(H.t.yn0w19),
            onFilter: t,
            isFiltered: Y,
            className: w.smallCol
          }, n))
        }
      }) : M && (0, r.jsx)(D, {
        label: H.intl.string(H.t.yn0w19),
        className: w.smallCol
      }), (0, r.jsx)(d.yRy, {
        targetElementRef: R,
        animation: d.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, r.jsx)(y.Z, {
            guildId: t,
            onClose: n
          })
        },
        children: e => {
          var {
            onClick: t
          } = e, n = Z(e, ["onClick"]);
          return (0, r.jsx)(D, S({
            ref: R,
            label: H.intl.string(H.t["2SZsWV"]),
            onFilter: t,
            isFiltered: A,
            className: w.mediumCol
          }, n))
        }
      }), (0, r.jsx)(d.ua7, {
        text: H.intl.string(H.t["2cRO3d"]),
        position: "top",
        align: "left",
        shouldShow: true,
        color: d.ua7.Colors.BRAND,
        children: e => (0, r.jsx)(d.yRy, {
          targetElementRef: P,
          animation: d.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: n
            } = e;
            return (0, r.jsx)(g.Z, {
              guildId: t,
              onClose: n
            })
          },
          children: t => (0, r.jsx)(D, {
            ref: P,
            label: H.intl.string(H.t["7V375+"]),
            "aria-label": H.intl.string(H.t["2cRO3d"]),
            onFilter: n => {
              var r, l;
              null == (r = t.onClick) || r.call(t, n), null == (l = e.onClick) || l.call(e)
            },
            isFiltered: k,
            className: w.smallCol,
            onMouseEnter: () => {
              var n, r;
              null == (n = e.onMouseEnter) || n.call(e), null == (r = t.onMouseEnter) || r.call(t)
            },
            onMouseDown: t.onMouseDown,
            onMouseLeave: e.onMouseLeave,
            onBlur: e.onBlur,
            onFocus: e.onFocus,
            onKeyDown: t.onKeyDown,
            "aria-controls": t["aria-controls"],
            "aria-expanded": t["aria-expanded"]
          })
        })
      }), (0, r.jsx)(D, {
        label: H.intl.string(H.t["5Q9xGh"]),
        className: w.smallCol
      })]
    })
  })
}