/** Chunk was on 18824 **/
/** chunk id: 967254, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  N: () => k
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk499033 = require("./499033.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk531441 = require("./531441.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk467432 = require("./467432.js"),
  Chunk451284 = require("./451284.js"),
  Chunk613734 = require("./613734.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk828056 = require("./828056.js");

function E(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      s = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), s.forEach(function(e) {
      var s;
      s = n[e], e in t ? Object.defineProperty(t, e, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = s
    })
  }
  return t
}
let T = t => {
    let {
      status: e,
      onClick: n,
      opened: i,
      count: a
    } = t;
    return (0, s.jsxs)(c.P3F, {
      className: b.header,
      onClick: n,
      children: [(0, s.jsx)("div", {
        className: b.headerIconWrapper,
        children: (0, s.jsx)(c.aNP, {
          size: "md",
          color: "active" === e ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_MUTED
        })
      }), (0, s.jsxs)("div", {
        className: b.title,
        children: [(0, s.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          color: "text-default",
          children: "active" === e ? S.intl.formatToPlainString(S.t.IeV2oa, {
            count: a.toString()
          }) : S.intl.formatToPlainString(S.t.fZAHBQ, {
            count: a.toString()
          })
        }), (0, s.jsx)(c.X6q, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === e ? S.intl.string(S.t.XJ2YVV) : S.intl.string(S.t.SzGV0t)
        })]
      }), (0, s.jsx)("div", {
        className: b.caret,
        children: (0, s.jsx)(o.Z, {
          width: 18,
          height: 18,
          direction: i ? o.Z.Directions.UP : o.Z.Directions.DOWN
        })
      })]
    })
  },
  O = () => (0, Chunk255367.jsxs)("div", {
    className: Chunk828056.emptyState,
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk828056.iconContainer,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk828056.iconBackground,
        children: (0, Chunk255367.jsx)(Chunk481060.rm8, {
          size: "md",
          color: "currentColor",
          className: Chunk828056.icon
        })
      }), (0, Chunk255367.jsx)(Chunk499033.Z, {
        className: Chunk828056.stars
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-md/bold",
      className: Chunk828056.emptyStateText,
      children: Chunk388032.intl.string(Chunk388032.t.reLFaW)
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      className: Chunk828056.emptyStateSubtext,
      children: Chunk388032.intl.string(Chunk388032.t.ERdH1t)
    })]
  }),
  y = () => (0, Chunk255367.jsx)("div", {
    className: Chunk828056.emptyState,
    children: (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      className: Chunk828056.emptyStateSubtext,
      children: Chunk388032.intl.string(Chunk388032.t.RV3AXV)
    })
  }),
  I = t => {
    let {
      timestamp: e
    } = t;
    return (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: b.timestamp,
      children: (0, g.XX)(e)
    })
  },
  _ = () => (0, Chunk255367.jsx)(Chunk481060.Text, {
    variant: "text-xs/bold",
    className: Chunk828056.newBadge,
    children: Chunk388032.intl.string(Chunk388032.t.QKMRCw)
  }),
  D = t => {
    let {
      classification: e
    } = t, {
      id: a,
      description: l
    } = e, o = m.default.extractTimestamp(a), d = (0, j.e)(e), u = i.useMemo(() => {
      var t, n, i, a, r;
      let o = {
        description: l,
        descriptionHook: t => (0, s.jsx)(c.Text, {
          tag: "span",
          variant: "heading-lg/bold",
          children: t
        })
      };
      return (0, g.FB)(e) ? (null == e || null == (t = e.guild_metadata) ? true : t.member_type) !== h.wO.OWNER ? S.intl.format(S.t.rmpEPD, {
        guildName: null == e || null == (i = e.guild_metadata) ? true : i.name,
        classification_type: o.description,
        classificationHook: o.descriptionHook
      }) : S.intl.format(S.t.Lb0HVl, (a = E({}, o), r = r = {
        guildName: null == e || null == (n = e.guild_metadata) ? true : n.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          n.push.apply(n, s)
        }
        return n
      })(Object(r)).forEach(function(t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t))
      }), a)) : S.intl.format(S.t.QY4g5u, o)
    }, [e, l]);
    return (0, s.jsx)(c.P3F, {
      onClick: () => {
        (0, c.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("25183"), n.e("18831"), n.e("97333")]).then(n.bind(n, 41164));
          return e => (0, s.jsx)(t, E({
            classificationId: a,
            source: v.s.StandingTab
          }, e))
        })
      },
      className: r()(b.itemDetail, {
        [b.itemDetailNew]: d
      }),
      children: (0, s.jsxs)("div", {
        className: b.descriptionContainer,
        children: [d ? (0, s.jsx)(_, {}) : (0, s.jsx)(I, {
          timestamp: o
        }), (0, s.jsx)(c.X6q, {
          variant: "heading-lg/normal",
          children: u
        })]
      })
    }, a)
  },
  w = t => {
    let {
      status: e,
      classifications: n
    } = t, [a, r] = i.useState(false), [o, d] = i.useState(3), m = (0, p.P)(), h = (0, l.e7)([x.Z], () => x.Z.getIsDsaEligible()), g = i.useMemo(() => n.slice(0, o), [n, o]);
    i.useEffect(() => {
      a && u.default.track(N.rMx.SAFETY_HUB_ACTION, {
        action: v.n0.ViewViolationsDropdown,
        account_standing: m.state,
        classification_ids: g.map(t => Number(t.id)),
        source: v.s.StandingTab,
        is_violative_content_shown: false,
        is_dsa_eligible: h
      })
    }, [a, m.state, g, h]);
    let j = n.length - g.length > 3 ? 3 : n.length - g.length;
    return (0, s.jsxs)("div", {
      className: b.dropdown,
      children: [(0, s.jsx)(T, {
        status: e,
        onClick: () => r(t => !t),
        opened: a,
        count: n.length
      }), a && (0, s.jsxs)("div", {
        className: b.items,
        children: [(0, s.jsx)(c.njP.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), g.length > 0 && g.map(t => (0, s.jsx)(D, {
          classification: t
        }, t.id)), g.length < n.length && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(c.njP.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, s.jsx)("button", {
            className: b.paginationButton,
            onClick: () => d(t => t + j),
            children: S.intl.format(S.t["9Ml56O"], {
              nextPageSize: j
            })
          })]
        }), 0 === g.length && "active" === e && (0, s.jsx)(O, {}), 0 === g.length && "expired" === e && (0, s.jsx)(y, {})]
      })]
    })
  },
  k = () => {
    let t = (0, Chunk613734.y9)(),
      e = (0, Chunk613734.KM)();
    return 0 === module.length && 0 === exports.length ? null : (0, Chunk255367.jsxs)("div", {
      children: [(0, Chunk255367.jsx)(w, {
        status: "active",
        classifications: module
      }), (0, Chunk255367.jsx)(w, {
        status: "expired",
        classifications: exports
      })]
    })
  }