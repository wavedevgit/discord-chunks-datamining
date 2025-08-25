/** Chunk was on web.js **/
/** chunk id: 967254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => L
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk712243 = require("./712243.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
    let {
      status: t,
      onClick: n,
      opened: i,
      count: o
    } = e;
    return (0, r.jsxs)(l.P3F, {
      className: v.header,
      onClick: n,
      children: [(0, r.jsx)("div", {
        className: v.headerIconWrapper,
        children: (0, r.jsx)(l.aNP, {
          size: "md",
          color: "active" === t ? l.TVs.colors.INTERACTIVE_ACTIVE : l.TVs.colors.INTERACTIVE_MUTED
        })
      }), (0, r.jsxs)("div", {
        className: v.title,
        children: [(0, r.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          color: "text-default",
          children: "active" === t ? O.intl.formatToPlainString(O.t.IeV2oa, {
            count: o.toString()
          }) : O.intl.formatToPlainString(O.t.fZAHBQ, {
            count: o.toString()
          })
        }), (0, r.jsx)(l.X6q, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === t ? O.intl.string(O.t.XJ2YVV) : O.intl.string(O.t.SzGV0t)
        })]
      }), (0, r.jsx)("div", {
        className: v.caret,
        children: (0, r.jsx)(c.Z, {
          width: 18,
          height: 18,
          direction: i ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })
      })]
    })
  },
  N = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk712243.emptyState,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk712243.iconContainer,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk712243.iconBackground,
        children: (0, Chunk951288.jsx)(Chunk481060.rm8, {
          size: "md",
          color: "currentColor",
          className: Chunk712243.icon
        })
      }), (0, Chunk951288.jsx)(Chunk499033.Z, {
        className: Chunk712243.stars
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/bold",
      className: Chunk712243.emptyStateText,
      children: Chunk388032.intl.string(Chunk388032.t.reLFaW)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      className: Chunk712243.emptyStateSubtext,
      children: Chunk388032.intl.string(Chunk388032.t.ERdH1t)
    })]
  }),
  R = () => (0, Chunk951288.jsx)("div", {
    className: Chunk712243.emptyState,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      className: Chunk712243.emptyStateSubtext,
      children: Chunk388032.intl.string(Chunk388032.t.RV3AXV)
    })
  }),
  P = e => {
    let {
      timestamp: t
    } = e;
    return (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: v.timestamp,
      children: (0, h.XX)(t)
    })
  },
  w = () => (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-xs/bold",
    className: Chunk712243.newBadge,
    children: Chunk388032.intl.string(Chunk388032.t.QKMRCw)
  }),
  D = e => {
    let {
      classification: t
    } = e, {
      id: o,
      description: s
    } = t, c = f.default.extractTimestamp(o), u = (0, m.e)(t), d = i.useMemo(() => {
      var e, n, i;
      let o = {
        description: s,
        descriptionHook: e => (0, r.jsx)(l.Text, {
          tag: "span",
          variant: "heading-lg/bold",
          children: e
        })
      };
      return (0, h.FB)(t) ? (null == t || null == (e = t.guild_metadata) ? true : e.member_type) === _.wO.OWNER ? O.intl.format(O.t.Lb0HVl, A(T({}, o), {
        guildName: null == t || null == (n = t.guild_metadata) ? true : n.name
      })) : O.intl.format(O.t.rmpEPD, {
        guildName: null == t || null == (i = t.guild_metadata) ? true : i.name,
        classification_type: o.description,
        classificationHook: o.descriptionHook
      }) : O.intl.format(O.t.QY4g5u, o)
    }, [t, s]), p = () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("18831").then(n.bind(n, 41164));
        return t => (0, r.jsx)(e, T({
          classificationId: o,
          source: b.s.StandingTab
        }, t))
      })
    };
    return (0, r.jsx)(l.P3F, {
      onClick: p,
      className: a()(v.itemDetail, {
        [v.itemDetailNew]: u
      }),
      children: (0, r.jsxs)("div", {
        className: v.descriptionContainer,
        children: [u ? (0, r.jsx)(w, {}) : (0, r.jsx)(P, {
          timestamp: c
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-lg/normal",
          children: d
        })]
      })
    }, o)
  },
  x = e => {
    let {
      status: t,
      classifications: n
    } = e, [o, a] = i.useState(false), [c, u] = i.useState(3), f = (0, g.P)(), _ = (0, s.e7)([p.Z], () => p.Z.getIsDsaEligible()), h = i.useMemo(() => n.slice(0, c), [n, c]);
    i.useEffect(() => {
      o && d.default.track(y.rMx.SAFETY_HUB_ACTION, {
        action: b.n0.ViewViolationsDropdown,
        account_standing: f.state,
        classification_ids: h.map(e => Number(e.id)),
        source: b.s.StandingTab,
        is_violative_content_shown: false,
        is_dsa_eligible: _
      })
    }, [o, f.state, h, _]);
    let m = n.length - h.length > 3 ? 3 : n.length - h.length;
    return (0, r.jsxs)("div", {
      className: v.dropdown,
      children: [(0, r.jsx)(C, {
        status: t,
        onClick: () => a(e => !e),
        opened: o,
        count: n.length
      }), o && (0, r.jsxs)("div", {
        className: v.items,
        children: [(0, r.jsx)(l.njP.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), h.length > 0 && h.map(e => (0, r.jsx)(D, {
          classification: e
        }, e.id)), h.length < n.length && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.njP.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, r.jsx)("button", {
            className: v.paginationButton,
            onClick: () => u(e => e + m),
            children: O.intl.format(O.t["9Ml56O"], {
              nextPageSize: m
            })
          })]
        }), 0 === h.length && "active" === t && (0, r.jsx)(N, {}), 0 === h.length && "expired" === t && (0, r.jsx)(R, {})]
      })]
    })
  },
  L = () => {
    let e = (0, Chunk613734.y9)(),
      t = (0, Chunk613734.KM)();
    return 0 === module.length && 0 === exports.length ? null : (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(x, {
        status: "active",
        classifications: module
      }), (0, Chunk951288.jsx)(x, {
        status: "expired",
        classifications: exports
      })]
    })
  }