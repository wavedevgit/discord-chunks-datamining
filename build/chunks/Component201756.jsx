/** Chunk was on 6850 **/
/** chunk id: 201756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk494409 = require("./494409.js"),
  Chunk266631 = require("./266631.js");

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
  var n, l, {
      label: i,
      onFilter: a,
      isFiltered: s,
      isSorted: c,
      className: u
    } = e,
    C = Z(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
  let m = s ? "header-primary" : "header-secondary";
  return c && (m = "text-brand"), (0, r.jsx)("th", {
    className: o()(_.tableHeaderCellContainer, u),
    children: (0, r.jsxs)(d.P3F, (n = S({}, C), l = l = {
      innerRef: t,
      onClick: a,
      className: o()(_.tableHeaderCell, {
        [_.tableHeaderCellWithFilter]: null != a
      }),
      children: [(0, r.jsx)(d.Text, {
        variant: "eyebrow",
        color: m,
        children: i
      }), null != a && (0, r.jsx)("div", {
        className: _.filterIconButton,
        children: (0, r.jsx)(d.gXV, {
          size: "custom",
          className: _.filterIcon,
          color: s ? d.TVs.colors.CONTROL_BRAND_FOREGROUND.css : d.TVs.colors.TEXT_MUTED.css,
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
  } = e, i = l.useRef(null), a = l.useRef(null), N = l.useRef(null), R = l.useRef(null), L = l.useRef(null), P = (0, c.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], s()), I = (0, c.e7)([m.Z, C.Z], () => m.Z.can(O.Plq.MANAGE_GUILD, C.Z.getGuild(t)), [t]), {
    selectedUserIds: V,
    addUsers: M,
    clearSelection: E
  } = (0, h.Z)(t), T = P.requireUnusualDmActivity || P.requireCommunicationDisabled || P.requireUnusualAccountActivity || P.requireUsernameQuarantined, k = P.selectedRoleIds.size > 0, A = null != P.selectedJoinDateOption.afterDate, U = P.selectedSort === b.d$.ORDER_BY_GUILD_JOINED_AT_ASC, F = null != P.selectedAccountAgeOption.afterDate, B = P.selectedSort === b.d$.ORDER_BY_USER_ID_ASC || P.selectedSort === b.d$.ORDER_BY_USER_ID_DESC, q = null != P.selectedSourceInviteCode && "" !== P.selectedSourceInviteCode, G = null != P.selectedJoinSourceType, z = q || G, Y = (0, p.xC)(t), W = l.useMemo(() => n.filter(e => (0, p.rX)(t, Y, e)), [Y, n, t]), Q = W.length > 0, K = 0 === W.filter(e => !V.has(e)).length, J = l.useCallback(() => {
    Q && (K ? E() : M(W))
  }, [Q, K, E, M, W]);
  return (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: _.tableHeaderRow,
      children: [Y && (0, r.jsx)("th", {
        className: o()(_.tableHeaderCellContainer, w.xsmallCol),
        children: (0, r.jsx)(u.u, {
          shouldShow: !Q,
          text: H.intl.string(H.t.tJEY0G),
          children: (0, r.jsx)(d.P3F, {
            onClick: J,
            className: _.tableHeaderCell,
            children: (0, r.jsx)(d.FZ5, {
              checked: K,
              disabled: !Q
            })
          })
        })
      }), (0, r.jsx)(D, {
        label: H.intl.string(H.t.Es7n9c)
      }), I ? (0, r.jsxs)(r.Fragment, {
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
              label: H.intl.string(H.t.xcKP1P),
              onFilter: t,
              isFiltered: A,
              isSorted: U,
              className: w.smallCol
            }, n))
          }
        }), (0, r.jsx)(d.yRy, {
          targetElementRef: a,
          animation: d.yRy.Animation.FADE,
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
            } = e, n = Z(e, ["onClick"]);
            return (0, r.jsx)(D, S({
              ref: a,
              label: H.intl.string(H.t.sPph4O),
              onFilter: t,
              isFiltered: F,
              isSorted: B,
              className: w.smallCol
            }, n))
          }
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          label: H.intl.string(H.t.xcKP1P),
          className: w.smallCol
        }), (0, r.jsx)(D, {
          label: H.intl.string(H.t.sPph4O),
          className: w.smallCol
        })]
      }), I ? (0, r.jsx)(d.yRy, {
        targetElementRef: N,
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
            ref: N,
            label: H.intl.string(H.t["yn0w1+"]),
            onFilter: t,
            isFiltered: z,
            className: w.smallCol
          }, n))
        }
      }) : I && (0, r.jsx)(D, {
        label: H.intl.string(H.t["yn0w1+"]),
        className: w.smallCol
      }), (0, r.jsx)(d.yRy, {
        targetElementRef: R,
        animation: d.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(y.Z, {
          guildId: t
        }),
        children: e => {
          var {
            onClick: t
          } = e, n = Z(e, ["onClick"]);
          return (0, r.jsx)(D, S({
            ref: R,
            label: H.intl.string(H.t["2SZsWX"]),
            onFilter: t,
            isFiltered: k,
            className: w.mediumCol
          }, n))
        }
      }), (0, r.jsx)(u.u, {
        text: H.intl.string(H.t["2cRO3R"]),
        position: "top",
        align: "left",
        shouldShow: true,
        children: (0, r.jsx)(d.yRy, {
          targetElementRef: L,
          animation: d.yRy.Animation.FADE,
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
          children: e => (0, r.jsx)(D, {
            ref: L,
            label: H.intl.string(H.t["7V3759"]),
            "aria-label": H.intl.string(H.t["2cRO3R"]),
            onFilter: t => {
              var n;
              null == (n = e.onClick) || n.call(e, t)
            },
            isFiltered: T,
            className: w.smallCol,
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
        label: H.intl.string(H.t["5Q9xGr"]),
        className: w.smallCol
      })]
    })
  })
}