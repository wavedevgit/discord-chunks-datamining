/** Chunk was on 9924 **/
/** chunk id: 987491, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk693546 = require("./693546.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js"),
  Chunk98493 = require("./98493.js"),
  Chunk328977 = require("./328977.js"),
  Chunk412222 = require("./412222.js"),
  Chunk223312 = require("./223312.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk768762 = require("./768762.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk430824 = require("./430824.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk106682 = require("./106682.js"),
  Chunk243194 = require("./243194.js"),
  Chunk494409 = require("./494409.js"),
  Chunk266631 = require("./266631.js");

function O(e) {
  let t, n, {
    status: r
  } = e;
  switch (r) {
    case b.wB.REJECTED:
      t = P.t["7YSJ6e"], n = P.t.i05OUV;
      break;
    case b.wB.APPROVED:
      t = P.t.bv82GR, n = P.t.D4OUHR;
      break;
    default:
      t = P.t["/wqiSk"], n = P.t.o47YZm
  }
  return (0, l.jsxs)("div", {
    className: R.emptyContainer,
    children: [(0, l.jsx)(d.dz2, {
      size: "md",
      color: "currentColor",
      className: R.checkmark
    }), (0, l.jsx)(d.X6q, {
      variant: "heading-md/medium",
      children: P.intl.string(t)
    }), (0, l.jsx)(d.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: P.intl.string(n)
    })]
  })
}

function w(e) {
  let {
    sortOrder: t,
    onSortChange: n
  } = e;
  return (0, l.jsx)("thead", {
    children: (0, l.jsxs)("tr", {
      className: Z.tableHeaderRow,
      children: [(0, l.jsx)("th", {
        className: R.headerCell,
        children: (0, l.jsx)(d.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: P.intl.string(P.t.Es7n9f)
        })
      }), (0, l.jsx)("th", {
        className: a()(R.headerCell, M.mediumCol),
        children: (0, l.jsxs)(d.P3F, {
          className: R.sortItem,
          onClick: n,
          children: [(0, l.jsx)(d.Text, {
            variant: "eyebrow",
            color: "interactive-normal",
            children: P.intl.string(P.t.EZ5QWF)
          }), t === b.Nw.TIMESTAMP_ASC ? (0, l.jsx)(_.Z, {
            className: R.sortIcon,
            direction: _.Z.Directions.UP
          }) : (0, l.jsx)(_.Z, {
            className: R.sortIcon,
            direction: _.Z.Directions.DOWN
          })]
        })
      }), (0, l.jsx)("th", {
        className: a()(R.headerCell, R.moreOptionsCol),
        children: (0, l.jsx)(d.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: P.intl.string(P.t["5Q9xGh"])
        })
      })]
    })
  })
}
let y = Chunk647438.memo(function(e) {
    let {
      joinRequest: t,
      user: n
    } = e, {
      joinRequestId: i,
      guildId: a
    } = t, {
      analyticsLocations: s
    } = (0, x.ZP)(), o = r.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), (0, T.openUserProfileModal)({
        userId: n.id,
        joinRequestId: i,
        sourceAnalyticsLocations: s
      })
    }, [n, i, s]);
    return (0, l.jsxs)("div", {
      className: M.memberNameContainer,
      children: [(0, l.jsx)(d.P3F, {
        className: M.memberAvatar,
        onClick: o,
        children: (0, l.jsx)(m.Z, {
          user: n
        })
      }), (0, l.jsx)("div", {
        className: M.memberName,
        children: (0, l.jsx)(d.Text, {
          variant: "text-sm/medium",
          children: (0, l.jsxs)(d.P3F, {
            onClick: o,
            className: M.nameContainer,
            children: [n.globalName, (0, l.jsx)(C.ZP, {
              primaryGuild: null == n ? true : n.primaryGuild,
              userId: null == n ? true : n.id,
              contextGuildId: a,
              containerClassName: M.memberClanTag
            })]
          })
        })
      }), (0, l.jsx)("div", {
        className: M.memberGlobalName,
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          tag: "span",
          children: (0, l.jsx)(d.P3F, {
            onClick: o,
            tag: "span",
            children: S.ZP.getUserTag(n)
          })
        })
      })]
    })
  }),
  A = Chunk647438.memo(function(e) {
    let {
      joinRequest: t,
      onSelect: i
    } = e, {
      guildId: s,
      createdAt: m,
      applicationStatus: x
    } = t, j = r.useMemo(() => new E.Z(t.user), [t.user]), h = (0, v.L)({
      guildId: s
    }), f = (0, c.e7)([N.Z], () => N.Z.getGuild(s)), g = x === b.wB.SUBMITTED, p = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await n.e("84259").then(n.bind(n, 597409));
        return t => {
          var n, r;
          return (0, l.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, t), r = r = {
            guild: f,
            user: j
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n))
        }
      }, {
        position: "bottom",
        align: "right"
      })
    };
    return null == j ? null : (0, l.jsxs)("tr", {
      onClick: i,
      className: a()(M.roundedRow, M.memberRowContainer, {
        [M.selected]: (null == h ? true : h.joinRequestId) === t.joinRequestId
      }),
      children: [(0, l.jsx)("td", {
        children: (0, l.jsx)(y, {
          joinRequest: t,
          user: j
        })
      }), (0, l.jsx)("td", {
        className: M.mediumCol,
        children: (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: o()(m).format("lll")
        })
      }), (0, l.jsx)("td", {
        className: R.moreOptionsCol,
        children: g && (0, l.jsx)(d.ua7, {
          text: P.intl.string(P.t.x8Nn4O),
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, l.jsx)(d.P3F, {
              onMouseEnter: t,
              onMouseLeave: n,
              onClick: p,
              className: M.button,
              children: (0, l.jsx)(d.Huf, {
                size: "custom",
                color: "currentColor",
                width: 18,
                height: 18
              })
            })
          }
        })
      })]
    })
  }),
  D = () => {
    let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
      t = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
      n = "".concat(Math.floor(25 * Math.random()) + 50, "px");
    return (0, Chunk951288.jsxs)("tr", {
      className: a()(Chunk266631.roundedRow, Chunk266631.memberRowContainer),
      children: [(0, Chunk951288.jsx)("td", {
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk266631.memberNameContainer,
          children: [(0, Chunk951288.jsx)("div", {
            className: a()(Chunk106682.placeholderAvatar, Chunk266631.memberAvatar)
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk266631.memberName,
            children: (0, Chunk951288.jsx)("div", {
              className: Chunk106682.placeholderText,
              style: {
                width: module
              }
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk266631.memberGlobalName,
            children: (0, Chunk951288.jsx)("div", {
              className: Chunk106682.placeholderTextSmall,
              style: {
                width: exports
              }
            })
          })]
        })
      }), (0, Chunk951288.jsx)("td", {
        className: Chunk266631.mediumCol,
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk106682.placeholderText,
          style: {
            width: require
          }
        })
      }), (0, Chunk951288.jsx)("td", {
        className: Chunk106682.moreOptionsCol
      })]
    })
  };

function k(e) {
  let {
    guildId: t,
    currentTab: n
  } = e, i = r.useRef(null), a = (0, c.e7)([N.Z], () => N.Z.getGuild(t)), s = (0, g.C)({
    guildId: t
  }), o = (0, c.e7)([h.Z], () => h.Z.isFetching()), {
    guildJoinRequests: u
  } = (0, p.j)({
    guildId: t,
    applicationStatus: n,
    sortOrder: s
  }), {
    fetchNextPage: m
  } = (0, f.m)({
    guildId: t,
    guildJoinRequests: u
  }), x = r.useCallback(async () => {
    let e = s === b.Nw.TIMESTAMP_ASC ? b.Nw.TIMESTAMP_DESC : b.Nw.TIMESTAMP_ASC;
    j.Z.setSelectedSortOrder(t, e), await m(e, n)
  }, [s, t, m, n]);
  return null == a ? null : (0, l.jsx)("div", {
    className: I.mainTableContainer,
    children: (0, l.jsx)(d.Den, {
      className: I.horizatonalScroller,
      ref: i,
      orientation: "horizontal",
      children: (0, l.jsxs)("table", {
        className: R.table,
        children: [(0, l.jsx)(w, {
          sortOrder: s,
          onSortChange: x
        }), (0, l.jsx)("tbody", {
          children: o ? [, , , , , ].fill(0).map((e, t) => (0, l.jsx)(D, {}, "placeholder-".concat(t))) : 0 === u.length ? (0, l.jsx)("td", {
            colSpan: 3,
            children: (0, l.jsx)(O, {
              status: n
            })
          }) : u.map(e => (0, l.jsx)(A, {
            joinRequest: e,
            onSelect: () => j.Z.setSelectedGuildJoinRequest(t, e)
          }, e.joinRequestId))
        })]
      })
    })
  })
}