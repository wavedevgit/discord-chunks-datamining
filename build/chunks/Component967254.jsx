/** Chunk was on web.js **/
/** chunk id: 967254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => L
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk16583 = require("./16583.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = e => {
    let {
      status: t,
      onClick: n,
      opened: i,
      count: a
    } = e;
    return (0, r.jsxs)(l.P3F, {
      className: v.header,
      onClick: n,
      children: [(0, r.jsx)("div", {
        className: v.headerIconWrapper,
        children: (0, r.jsx)(l.aNP, {
          size: "md",
          color: "active" === t ? l.TVs.colors.INTERACTIVE_TEXT_ACTIVE : l.TVs.colors.ICON_MUTED
        })
      }), (0, r.jsxs)("div", {
        className: v.title,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: "text-default",
          children: "active" === t ? O.intl.formatToPlainString(O.t.IeV2oY, {
            count: a.toString()
          }) : O.intl.formatToPlainString(O.t.fZAHBT, {
            count: a.toString()
          })
        }), (0, r.jsx)(l.Heading, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === t ? O.intl.string(O.t.XJ2YVR) : O.intl.string(O.t.SzGV0g)
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
  N = () => (0, r.jsxs)("div", {
    className: v.emptyState,
    children: [(0, r.jsxs)("div", {
      className: v.iconContainer,
      children: [(0, r.jsx)("div", {
        className: v.iconBackground,
        children: (0, r.jsx)(l.rm8, {
          size: "md",
          color: "currentColor",
          className: v.icon
        })
      }), (0, r.jsx)(u.Z, {
        className: v.stars
      })]
    }), (0, r.jsx)(l.Heading, {
      variant: "heading-md/bold",
      className: v.emptyStateText,
      children: O.intl.string(O.t.reLFaV)
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: v.emptyStateSubtext,
      children: O.intl.string(O.t.ERdH1o)
    })]
  }),
  P = () => (0, r.jsx)("div", {
    className: v.emptyState,
    children: (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: v.emptyStateSubtext,
      children: O.intl.string(O.t.RV3AXf)
    })
  }),
  w = e => {
    let {
      timestamp: t
    } = e;
    return (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: v.timestamp,
      children: (0, h.XX)(t)
    })
  },
  R = () => (0, r.jsx)(l.Text, {
    variant: "text-xs/bold",
    className: v.newBadge,
    children: O.intl.string(O.t.QKMRC4)
  }),
  D = e => {
    let {
      classification: t
    } = e, {
      id: a,
      description: s
    } = t, c = f.default.extractTimestamp(a), u = (0, m.e)(t), d = i.useMemo(() => {
      var e, n, i;
      let a = {
        description: s,
        descriptionHook: e => (0, r.jsx)(l.Text, {
          tag: "span",
          variant: "heading-lg/bold",
          children: e
        })
      };
      return (0, h.FB)(t) ? (null == t || null == (e = t.guild_metadata) ? true : e.member_type) === p.wO.OWNER ? O.intl.format(O.t.Lb0HVv, C(I({}, a), {
        guildName: null == t || null == (n = t.guild_metadata) ? true : n.name
      })) : O.intl.format(O.t.rmpEPD, {
        guildName: null == t || null == (i = t.guild_metadata) ? true : i.name,
        classification_type: a.description,
        classificationHook: a.descriptionHook
      }) : O.intl.format(O.t.QY4g5t, a)
    }, [t, s]), _ = () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("18831").then(n.bind(n, 41164));
        return t => (0, r.jsx)(e, I({
          classificationId: a,
          source: b.s.StandingTab
        }, t))
      })
    };
    return (0, r.jsx)(l.P3F, {
      onClick: _,
      className: o()(v.itemDetail, {
        [v.itemDetailNew]: u
      }),
      children: (0, r.jsxs)("div", {
        className: v.descriptionContainer,
        children: [u ? (0, r.jsx)(R, {}) : (0, r.jsx)(w, {
          timestamp: c
        }), (0, r.jsx)(l.Heading, {
          variant: "heading-lg/normal",
          children: d
        })]
      })
    }, a)
  },
  x = e => {
    let {
      status: t,
      classifications: n
    } = e, [a, o] = i.useState(false), [c, u] = i.useState(3), f = (0, g.P)(), p = (0, s.e7)([_.Z], () => _.Z.getIsDsaEligible()), h = i.useMemo(() => n.slice(0, c), [n, c]);
    i.useEffect(() => {
      a && d.default.track(y.rMx.SAFETY_HUB_ACTION, {
        action: b.n0.ViewViolationsDropdown,
        account_standing: f.state,
        classification_ids: h.map(e => Number(e.id)),
        source: b.s.StandingTab,
        is_violative_content_shown: false,
        is_dsa_eligible: p
      })
    }, [a, f.state, h, p]);
    let m = n.length - h.length > 3 ? 3 : n.length - h.length;
    return (0, r.jsxs)("div", {
      className: v.dropdown,
      children: [(0, r.jsx)(A, {
        status: t,
        onClick: () => o(e => !e),
        opened: a,
        count: n.length
      }), a && (0, r.jsxs)("div", {
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
            children: O.intl.format(O.t["9Ml56H"], {
              nextPageSize: m
            })
          })]
        }), 0 === h.length && "active" === t && (0, r.jsx)(N, {}), 0 === h.length && "expired" === t && (0, r.jsx)(P, {})]
      })]
    })
  },
  L = () => {
    let e = (0, E.y9)(),
      t = (0, E.KM)();
    return 0 === e.length && 0 === t.length ? null : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(x, {
        status: "active",
        classifications: e
      }), (0, r.jsx)(x, {
        status: "expired",
        classifications: t
      })]
    })
  }