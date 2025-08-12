/** Chunk was on 6850 **/
/** chunk id: 201756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk498607 = require("./498607.js"),
  s = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
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
  Chunk940397 = require("./940397.js"),
  Chunk92006 = require("./92006.js");

function w(e) {
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

function S(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let Z = Chunk73800.forwardRef(function(e, t) {
  var {
    label: n,
    onFilter: l,
    isFiltered: o,
    isSorted: a,
    className: s
  } = e, c = S(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
  let d = o ? "header-primary" : "header-secondary";
  return a && (d = "text-brand"), (0, r.jsx)("th", {
    className: i()(H.tableHeaderCellContainer, s),
    children: (0, r.jsxs)(u.P3F, N(w({}, c), {
      innerRef: t,
      onClick: l,
      className: i()(H.tableHeaderCell, {
        [H.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, r.jsx)(u.Text, {
        variant: "eyebrow",
        color: d,
        children: n
      }), null != l && (0, r.jsx)("div", {
        className: H.filterIconButton,
        children: (0, r.jsx)(u.gXV, {
          size: "custom",
          className: H.filterIcon,
          color: o ? u.TVs.colors.CONTROL_BRAND_FOREGROUND.css : u.TVs.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    }))
  })
});

function D(e) {
  let {
    guildId: t,
    currentPagedMembers: n
  } = e, o = l.useRef(null), a = l.useRef(null), D = l.useRef(null), L = l.useRef(null), R = l.useRef(null), I = (0, c.e7)([p.Z], () => p.Z.getSearchStateByGuildId(t), [t], s()), P = (0, c.e7)([C.Z, d.Z], () => C.Z.can(y.Plq.MANAGE_GUILD, d.Z.getGuild(t)), [t]), {
    selectedUserIds: M,
    addUsers: V,
    clearSelection: E
  } = (0, f.Z)(t), T = I.requireUnusualDmActivity || I.requireCommunicationDisabled || I.requireUnusualAccountActivity || I.requireUsernameQuarantined, k = I.selectedRoleIds.size > 0, A = null != I.selectedJoinDateOption.afterDate, B = I.selectedSort === m.d$.ORDER_BY_GUILD_JOINED_AT_ASC, U = null != I.selectedAccountAgeOption.afterDate, F = I.selectedSort === m.d$.ORDER_BY_USER_ID_ASC || I.selectedSort === m.d$.ORDER_BY_USER_ID_DESC, q = null != I.selectedSourceInviteCode && "" !== I.selectedSourceInviteCode, z = null != I.selectedJoinSourceType, G = q || z, Y = (0, b.xC)(t), W = l.useMemo(() => n.filter(e => (0, b.rX)(t, Y, e)), [Y, n, t]), X = W.length > 0, J = 0 === W.filter(e => !M.has(e)).length, K = l.useCallback(() => {
    X && (J ? E() : V(W))
  }, [X, J, E, V, W]);
  return (0, r.jsx)("thead", {
    children: (0, r.jsxs)("tr", {
      className: H.tableHeaderRow,
      children: [Y && (0, r.jsx)("th", {
        className: i()(H.tableHeaderCellContainer, _.xsmallCol),
        children: (0, r.jsx)(u.ua7, {
          shouldShow: !X,
          text: O.intl.string(O.t.tJEY0N),
          children: e => (0, r.jsx)(u.P3F, N(w({}, e), {
            onClick: K,
            className: H.tableHeaderCell,
            children: (0, r.jsx)(u.XZJ, {
              type: u.XZJ.Types.INVERTED,
              value: J,
              disabled: !X
            })
          }))
        })
      }), (0, r.jsx)(Z, {
        label: O.intl.string(O.t.Es7n9f)
      }), P ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.yRy, {
          targetElementRef: o,
          animation: u.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(g.Z, {
            guildId: t,
            onClose: y.dG4
          }),
          children: e => {
            var {
              onClick: t
            } = e, n = S(e, ["onClick"]);
            return (0, r.jsx)(Z, w({
              ref: o,
              label: O.intl.string(O.t.xcKP1N),
              onFilter: t,
              isFiltered: A,
              isSorted: B,
              className: _.smallCol
            }, n))
          }
        }), (0, r.jsx)(u.yRy, {
          targetElementRef: a,
          animation: u.yRy.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, r.jsx)(h.Z, {
            guildId: t,
            onClose: y.dG4
          }),
          children: e => {
            var {
              onClick: t
            } = e, n = S(e, ["onClick"]);
            return (0, r.jsx)(Z, w({
              ref: a,
              label: O.intl.string(O.t.sPph4O),
              onFilter: t,
              isFiltered: U,
              isSorted: F,
              className: _.smallCol
            }, n))
          }
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Z, {
          label: O.intl.string(O.t.xcKP1N),
          className: _.smallCol
        }), (0, r.jsx)(Z, {
          label: O.intl.string(O.t.sPph4O),
          className: _.smallCol
        })]
      }), P ? (0, r.jsx)(u.yRy, {
        targetElementRef: D,
        animation: u.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(x.Z, {
          guildId: t,
          onClose: y.dG4
        }),
        children: e => {
          var {
            onClick: t
          } = e, n = S(e, ["onClick"]);
          return (0, r.jsx)(Z, w({
            ref: D,
            label: O.intl.string(O.t.yn0w19),
            onFilter: t,
            isFiltered: G,
            className: _.smallCol
          }, n))
        }
      }) : P && (0, r.jsx)(Z, {
        label: O.intl.string(O.t.yn0w19),
        className: _.smallCol
      }), (0, r.jsx)(u.yRy, {
        targetElementRef: L,
        animation: u.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, r.jsx)(v.Z, {
            guildId: t,
            onClose: n
          })
        },
        children: e => {
          var {
            onClick: t
          } = e, n = S(e, ["onClick"]);
          return (0, r.jsx)(Z, w({
            ref: L,
            label: O.intl.string(O.t["2SZsWV"]),
            onFilter: t,
            isFiltered: k,
            className: _.mediumCol
          }, n))
        }
      }), (0, r.jsx)(u.ua7, {
        text: O.intl.string(O.t["2cRO3d"]),
        position: "top",
        align: "left",
        shouldShow: true,
        color: u.ua7.Colors.BRAND,
        children: e => (0, r.jsx)(u.yRy, {
          targetElementRef: R,
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
          children: t => (0, r.jsx)(Z, {
            ref: R,
            label: O.intl.string(O.t["7V375+"]),
            "aria-label": O.intl.string(O.t["2cRO3d"]),
            onFilter: n => {
              var r, l;
              null == (r = t.onClick) || r.call(t, n), null == (l = e.onClick) || l.call(e)
            },
            isFiltered: T,
            className: _.smallCol,
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
      }), (0, r.jsx)(Z, {
        label: O.intl.string(O.t["5Q9xGh"]),
        className: _.smallCol
      })]
    })
  })
}