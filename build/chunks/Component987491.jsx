/** Chunk was on 9924 **/
/** chunk id: 987491, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk412222 = require("./412222.js"),
  Chunk223312 = require("./223312.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk768762 = require("./768762.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk430824 = require("./430824.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk929133 = require("./929133.js"),
  Chunk803767 = require("./803767.js"),
  Chunk452173 = require("./452173.js"),
  Chunk983266 = require("./983266.js");

function A(e) {
  let t, n, {
    status: r
  } = e;
  switch (r) {
    case h.wB.REJECTED:
      t = _.t["7YSJ6f"], n = _.t.i05OUR;
      break;
    case h.wB.APPROVED:
      t = _.t.bv82GS, n = _.t.D4OUHT;
      break;
    default:
      t = _.t["/wqiSv"], n = _.t.o47YZs
  }
  return (0, l.jsxs)("div", {
    className: y.emptyContainer,
    children: [(0, l.jsx)(u.dz2, {
      size: "md",
      color: "currentColor",
      className: y.checkmark
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/medium",
      children: _.intl.string(t)
    }), (0, l.jsx)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: _.intl.string(n)
    })]
  })
}

function M(e) {
  let {
    sortOrder: t,
    onSortChange: n
  } = e;
  return (0, l.jsx)("thead", {
    children: (0, l.jsxs)("tr", {
      className: R.tableHeaderRow,
      children: [(0, l.jsx)("th", {
        className: y.headerCell,
        children: (0, l.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          children: _.intl.string(_.t.Es7n9c)
        })
      }), (0, l.jsx)("th", {
        className: i()(y.headerCell, w.mediumCol),
        children: (0, l.jsxs)(u.P3F, {
          className: y.sortItem,
          onClick: n,
          children: [(0, l.jsx)(u.Text, {
            variant: "eyebrow",
            color: "interactive-text-default",
            children: _.intl.string(_.t.EZ5QWL)
          }), t === h.Nw.TIMESTAMP_ASC ? (0, l.jsx)(S.Z, {
            className: y.sortIcon,
            direction: S.Z.Directions.UP
          }) : (0, l.jsx)(S.Z, {
            className: y.sortIcon,
            direction: S.Z.Directions.DOWN
          })]
        })
      }), (0, l.jsx)("th", {
        className: i()(y.headerCell, y.moreOptionsCol),
        children: (0, l.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          children: _.intl.string(_.t["5Q9xGr"])
        })
      })]
    })
  })
}
let Z = Chunk473749.memo(function(e) {
    let {
      joinRequest: t,
      user: n
    } = e, {
      joinRequestId: a,
      guildId: i
    } = t, {
      analyticsLocations: s
    } = (0, b.ZP)(), o = r.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), (0, E.openUserProfileModal)({
        userId: n.id,
        joinRequestId: a,
        sourceAnalyticsLocations: s
      })
    }, [n, a, s]);
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
            children: [n.globalName, (0, l.jsx)(T.ZP, {
              primaryGuild: null == n ? true : n.primaryGuild,
              userId: null == n ? true : n.id,
              contextGuildId: i,
              containerClassName: w.memberClanTag
            })]
          })
        })
      }), (0, l.jsx)("div", {
        className: w.memberGlobalName,
        children: (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-default",
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
  D = Chunk473749.memo(function(e) {
    let {
      joinRequest: t,
      onSelect: a
    } = e, {
      guildId: s,
      createdAt: x,
      applicationStatus: b
    } = t, j = r.useMemo(() => new N.Z(t.user), [t.user]), f = (0, p.L)({
      guildId: s
    }), g = (0, c.e7)([O.Z], () => O.Z.getGuild(s)), v = b === h.wB.SUBMITTED;
    return null == j ? null : (0, l.jsxs)("tr", {
      onClick: a,
      className: i()(w.roundedRow, w.memberRowContainer, {
        [w.selected]: (null == f ? true : f.joinRequestId) === t.joinRequestId
      }),
      children: [(0, l.jsx)("td", {
        children: (0, l.jsx)(Z, {
          joinRequest: t,
          user: j
        })
      }), (0, l.jsx)("td", {
        className: w.mediumCol,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: o()(x).format("lll")
        })
      }), (0, l.jsx)("td", {
        className: y.moreOptionsCol,
        children: v && (0, l.jsx)(d.u, {
          text: _.intl.string(_.t.x8Nn4M),
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
                    guild: g,
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
    return (0, Chunk54381.jsxs)("tr", {
      className: i()(Chunk983266.roundedRow, Chunk983266.memberRowContainer),
      children: [(0, Chunk54381.jsx)("td", {
        children: (0, Chunk54381.jsxs)("div", {
          className: Chunk983266.memberNameContainer,
          children: [(0, Chunk54381.jsx)("div", {
            className: i()(Chunk929133.placeholderAvatar, Chunk983266.memberAvatar)
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk983266.memberName,
            children: (0, Chunk54381.jsx)("div", {
              className: Chunk929133.placeholderText,
              style: {
                width: module
              }
            })
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk983266.memberGlobalName,
            children: (0, Chunk54381.jsx)("div", {
              className: Chunk929133.placeholderTextSmall,
              style: {
                width: exports
              }
            })
          })]
        })
      }), (0, Chunk54381.jsx)("td", {
        className: Chunk983266.mediumCol,
        children: (0, Chunk54381.jsx)("div", {
          className: Chunk929133.placeholderText,
          style: {
            width: require
          }
        })
      }), (0, Chunk54381.jsx)("td", {
        className: Chunk929133.moreOptionsCol
      })]
    })
  };

function L(e) {
  let {
    guildId: t,
    currentTab: n
  } = e, a = r.useRef(null), i = (0, c.e7)([O.Z], () => O.Z.getGuild(t)), s = (0, v.C)({
    guildId: t
  }), o = (0, c.e7)([f.Z], () => f.Z.isFetching()), {
    guildJoinRequests: d
  } = (0, C.j)({
    guildId: t,
    applicationStatus: n,
    sortOrder: s
  }), {
    fetchNextPage: m
  } = (0, g.m)({
    guildId: t,
    guildJoinRequests: d
  }), x = r.useCallback(async () => {
    let e = s === h.Nw.TIMESTAMP_ASC ? h.Nw.TIMESTAMP_DESC : h.Nw.TIMESTAMP_ASC;
    j.Z.setSelectedSortOrder(t, e), await m(e, n)
  }, [s, t, m, n]);
  return null == i ? null : (0, l.jsx)("div", {
    className: I.mainTableContainer,
    children: (0, l.jsx)(u.Den, {
      className: I.horizatonalScroller,
      ref: a,
      orientation: "horizontal",
      children: (0, l.jsxs)("table", {
        className: y.table,
        children: [(0, l.jsx)(M, {
          sortOrder: s,
          onSortChange: x
        }), (0, l.jsx)("tbody", {
          children: o ? [, , , , , ].fill(0).map((e, t) => (0, l.jsx)(k, {}, "placeholder-".concat(t))) : 0 === d.length ? (0, l.jsx)("td", {
            colSpan: 3,
            children: (0, l.jsx)(A, {
              status: n
            })
          }) : d.map(e => (0, l.jsx)(D, {
            joinRequest: e,
            onSelect: () => j.Z.setSelectedGuildJoinRequest(t, e)
          }, e.joinRequestId))
        })]
      })
    })
  })
}