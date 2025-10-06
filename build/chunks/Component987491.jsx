/** Chunk was on 9924 **/
/** chunk id: 987491, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk693546 = require("./693546.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js"),
  Chunk98493 = require("./98493.js"),
  Chunk328977 = require("./328977.js"),
  Chunk665625 = require("./665625.js"),
  Chunk223312 = require("./223312.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk768762 = require("./768762.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk430824 = require("./430824.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk659541 = require("./659541.js"),
  Chunk461914 = require("./461914.js"),
  Chunk909350 = require("./909350.js"),
  Chunk399291 = require("./399291.js");

function M(e) {
  let t, n, {
    status: r
  } = e;
  switch (r) {
    case f.wB.REJECTED:
      t = R.t["7YSJ6e"], n = R.t.i05OUV;
      break;
    case f.wB.APPROVED:
      t = R.t.bv82GR, n = R.t.D4OUHR;
      break;
    default:
      t = R.t["/wqiSk"], n = R.t.o47YZm
  }
  return (0, l.jsxs)("div", {
    className: I.emptyContainer,
    children: [(0, l.jsx)(u.dz2, {
      size: "md",
      color: "currentColor",
      className: I.checkmark
    }), (0, l.jsx)(u.X6q, {
      variant: "heading-md/medium",
      children: R.intl.string(t)
    }), (0, l.jsx)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: R.intl.string(n)
    })]
  })
}

function y(e) {
  let {
    sortOrder: t,
    onSortChange: n
  } = e;
  return (0, l.jsx)("thead", {
    children: (0, l.jsxs)("tr", {
      className: O.tableHeaderRow,
      children: [(0, l.jsx)("th", {
        className: I.headerCell,
        children: (0, l.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: R.intl.string(R.t.Es7n9f)
        })
      }), (0, l.jsx)("th", {
        className: a()(I.headerCell, w.mediumCol),
        children: (0, l.jsxs)(u.P3F, {
          className: I.sortItem,
          onClick: n,
          children: [(0, l.jsx)(u.Text, {
            variant: "eyebrow",
            color: "interactive-normal",
            children: R.intl.string(R.t.EZ5QWF)
          }), t === f.Nw.TIMESTAMP_ASC ? (0, l.jsx)(T.Z, {
            className: I.sortIcon,
            direction: T.Z.Directions.UP
          }) : (0, l.jsx)(T.Z, {
            className: I.sortIcon,
            direction: T.Z.Directions.DOWN
          })]
        })
      }), (0, l.jsx)("th", {
        className: a()(I.headerCell, I.moreOptionsCol),
        children: (0, l.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: R.intl.string(R.t["5Q9xGh"])
        })
      })]
    })
  })
}
let A = Chunk647438.memo(function(e) {
    let {
      joinRequest: t,
      user: n
    } = e, {
      joinRequestId: i,
      guildId: a
    } = t, {
      analyticsLocations: s
    } = (0, j.ZP)(), o = r.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), (0, E.openUserProfileModal)({
        userId: n.id,
        joinRequestId: i,
        sourceAnalyticsLocations: s
      })
    }, [n, i, s]);
    return (0, l.jsxs)("div", {
      className: w.memberNameContainer,
      children: [(0, l.jsx)(u.P3F, {
        className: w.memberAvatar,
        onClick: o,
        children: (0, l.jsx)(x.Z, {
          user: n
        })
      }), (0, l.jsx)("div", {
        className: w.memberName,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: (0, l.jsxs)(u.P3F, {
            onClick: o,
            className: w.nameContainer,
            children: [n.globalName, (0, l.jsx)(_.ZP, {
              primaryGuild: null == n ? true : n.primaryGuild,
              userId: null == n ? true : n.id,
              contextGuildId: a,
              containerClassName: w.memberClanTag
            })]
          })
        })
      }), (0, l.jsx)("div", {
        className: w.memberGlobalName,
        children: (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          tag: "span",
          children: (0, l.jsx)(u.P3F, {
            onClick: o,
            tag: "span",
            children: P.ZP.getUserTag(n)
          })
        })
      })]
    })
  }),
  D = Chunk647438.memo(function(e) {
    let {
      joinRequest: t,
      onSelect: i
    } = e, {
      guildId: s,
      createdAt: x,
      applicationStatus: j
    } = t, h = r.useMemo(() => new N.Z(t.user), [t.user]), b = (0, g.L)({
      guildId: s
    }), v = (0, c.e7)([S.Z], () => S.Z.getGuild(s)), p = j === f.wB.SUBMITTED;
    return null == h ? null : (0, l.jsxs)("tr", {
      onClick: i,
      className: a()(w.roundedRow, w.memberRowContainer, {
        [w.selected]: (null == b ? true : b.joinRequestId) === t.joinRequestId
      }),
      children: [(0, l.jsx)("td", {
        children: (0, l.jsx)(A, {
          joinRequest: t,
          user: h
        })
      }), (0, l.jsx)("td", {
        className: w.mediumCol,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: o()(x).format("lll")
        })
      }), (0, l.jsx)("td", {
        className: I.moreOptionsCol,
        children: p && (0, l.jsx)(d.u, {
          text: R.intl.string(R.t.x8Nn4O),
          children: (0, l.jsx)(u.P3F, {
            onClick: e => {
              (0, m.jW)(e, async () => {
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
                    guild: v,
                    user: h
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
            },
            className: w.button,
            children: (0, l.jsx)(u.Huf, {
              size: "custom",
              color: "currentColor",
              width: 18,
              height: 18
            })
          })
        })
      })]
    })
  }),
  k = () => {
    let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
      t = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
      n = "".concat(Math.floor(25 * Math.random()) + 50, "px");
    return (0, Chunk951288.jsxs)("tr", {
      className: a()(Chunk399291.roundedRow, Chunk399291.memberRowContainer),
      children: [(0, Chunk951288.jsx)("td", {
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk399291.memberNameContainer,
          children: [(0, Chunk951288.jsx)("div", {
            className: a()(Chunk659541.placeholderAvatar, Chunk399291.memberAvatar)
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk399291.memberName,
            children: (0, Chunk951288.jsx)("div", {
              className: Chunk659541.placeholderText,
              style: {
                width: module
              }
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk399291.memberGlobalName,
            children: (0, Chunk951288.jsx)("div", {
              className: Chunk659541.placeholderTextSmall,
              style: {
                width: exports
              }
            })
          })]
        })
      }), (0, Chunk951288.jsx)("td", {
        className: Chunk399291.mediumCol,
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk659541.placeholderText,
          style: {
            width: require
          }
        })
      }), (0, Chunk951288.jsx)("td", {
        className: Chunk659541.moreOptionsCol
      })]
    })
  };

function B(e) {
  let {
    guildId: t,
    currentTab: n
  } = e, i = r.useRef(null), a = (0, c.e7)([S.Z], () => S.Z.getGuild(t)), s = (0, p.C)({
    guildId: t
  }), o = (0, c.e7)([b.Z], () => b.Z.isFetching()), {
    guildJoinRequests: d
  } = (0, C.j)({
    guildId: t,
    applicationStatus: n,
    sortOrder: s
  }), {
    fetchNextPage: m
  } = (0, v.m)({
    guildId: t,
    guildJoinRequests: d
  }), x = r.useCallback(async () => {
    let e = s === f.Nw.TIMESTAMP_ASC ? f.Nw.TIMESTAMP_DESC : f.Nw.TIMESTAMP_ASC;
    h.Z.setSelectedSortOrder(t, e), await m(e, n)
  }, [s, t, m, n]);
  return null == a ? null : (0, l.jsx)("div", {
    className: Z.mainTableContainer,
    children: (0, l.jsx)(u.Den, {
      className: Z.horizatonalScroller,
      ref: i,
      orientation: "horizontal",
      children: (0, l.jsxs)("table", {
        className: I.table,
        children: [(0, l.jsx)(y, {
          sortOrder: s,
          onSortChange: x
        }), (0, l.jsx)("tbody", {
          children: o ? [, , , , , ].fill(0).map((e, t) => (0, l.jsx)(k, {}, "placeholder-".concat(t))) : 0 === d.length ? (0, l.jsx)("td", {
            colSpan: 3,
            children: (0, l.jsx)(M, {
              status: n
            })
          }) : d.map(e => (0, l.jsx)(D, {
            joinRequest: e,
            onSelect: () => h.Z.setSelectedGuildJoinRequest(t, e)
          }, e.joinRequestId))
        })]
      })
    })
  })
}