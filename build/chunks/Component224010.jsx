/** Chunk was on 7803 **/
/** chunk id: 224010, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  q: () => P
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk303727 = require("./303727.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk739010 = require("./739010.js"),
  Chunk207913 = require("./207913.js"),
  Chunk393033 = require("./393033.js"),
  Chunk671773 = require("./671773.js"),
  Chunk335891 = require("./335891.js"),
  Chunk985481 = require("./985481.js"),
  Chunk239093 = require("./239093.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk645700 = require("./645700.js");

function O(t) {
  for (var e = 1; e < arguments.length; e++) {
    var s = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(s);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(t) {
      return Object.getOwnPropertyDescriptor(s, t).enumerable
    }))), i.forEach(function(e) {
      var i;
      i = s[e], e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = i
    })
  }
  return t
}
let T = t => {
    let {
      status: e,
      onClick: s,
      opened: n,
      count: a
    } = t;
    return (0, i.jsxs)(c.DUT, {
      className: b.wx,
      onClick: s,
      children: [(0, i.jsx)("div", {
        className: b.Y5,
        children: (0, i.jsx)(c.id, {
          size: "md",
          color: "active" === e ? c.LU0.colors.INTERACTIVE_TEXT_ACTIVE : c.LU0.colors.ICON_MUTED
        })
      }), (0, i.jsxs)("div", {
        className: b.DD,
        children: [(0, i.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          color: "text-default",
          children: "active" === e ? E.intl.formatToPlainString(E.t.IeV2oY, {
            count: a.toString()
          }) : E.intl.formatToPlainString(E.t.fZAHBT, {
            count: a.toString()
          })
        }), (0, i.jsx)(c.Heading, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === e ? E.intl.string(E.t.XJ2YVR) : E.intl.string(E.t.SzGV0g)
        })]
      }), (0, i.jsx)("div", {
        className: b.OW,
        children: (0, i.jsx)(o.A, {
          width: 18,
          height: 18,
          direction: n ? o.A.Directions.UP : o.A.Directions.DOWN
        })
      })]
    })
  },
  A = () => (0, i.jsxs)("div", {
    className: b.p$,
    children: [(0, i.jsxs)("div", {
      className: b.zc,
      children: [(0, i.jsx)("div", {
        className: b.Wk,
        children: (0, i.jsx)(c.OR, {
          size: "md",
          color: "currentColor",
          className: b.Kk
        })
      }), (0, i.jsx)(d.A, {
        className: b.uf
      })]
    }), (0, i.jsx)(c.Heading, {
      variant: "heading-md/bold",
      className: b.q6,
      children: E.intl.string(E.t.reLFaV)
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: b.WO,
      children: E.intl.string(E.t.ERdH1o)
    })]
  }),
  _ = () => (0, i.jsx)("div", {
    className: b.p$,
    children: (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: b.WO,
      children: E.intl.string(E.t.RV3AXf)
    })
  }),
  I = t => {
    let {
      timestamp: e
    } = t;
    return (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: b.vE,
      children: (0, g._W)(e)
    })
  },
  S = () => (0, i.jsx)(c.Text, {
    variant: "text-xs/bold",
    className: b.Ad,
    children: E.intl.string(E.t.QKMRC4)
  }),
  D = t => {
    let {
      classification: e
    } = t, {
      id: a,
      description: r
    } = e, o = m.default.extractTimestamp(a), d = (0, j.e)(e), u = n.useMemo(() => {
      var t, s, n, a, l;
      let o = {
        description: r,
        descriptionHook: t => (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "heading-lg/bold",
          children: t
        })
      };
      return (0, g._g)(e) ? (null == e || null == (t = e.guild_metadata) ? true : t.member_type) !== x.Z9.OWNER ? E.intl.format(E.t.rmpEPD, {
        guildName: null == e || null == (n = e.guild_metadata) ? true : n.name,
        classification_type: o.description,
        classificationHook: o.descriptionHook
      }) : E.intl.format(E.t.Lb0HVv, (a = O({}, o), l = l = {
        guildName: null == e || null == (s = e.guild_metadata) ? true : s.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          s.push.apply(s, i)
        }
        return s
      })(Object(l)).forEach(function(t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(l, t))
      }), a)) : E.intl.format(E.t.QY4g5t, o)
    }, [e, r]);
    return (0, i.jsx)(c.DUT, {
      onClick: () => {
        (0, c.mMO)(async () => {
          let {
            default: t
          } = await Promise.all([s.e("92414"), s.e("22726"), s.e("9407"), s.e("52139")]).then(s.bind(s, 956450));
          return e => (0, i.jsx)(t, O({
            classificationId: a,
            source: f.XN.StandingTab
          }, e))
        })
      },
      className: l()(b.zk, {
        [b.V5]: d
      }),
      children: (0, i.jsxs)("div", {
        className: b.iQ,
        children: [d ? (0, i.jsx)(S, {}) : (0, i.jsx)(I, {
          timestamp: o
        }), (0, i.jsx)(c.Heading, {
          variant: "heading-lg/normal",
          children: u
        })]
      })
    }, a)
  },
  y = t => {
    let {
      status: e,
      classifications: s
    } = t, [a, l] = n.useState(false), [o, d] = n.useState(3), m = (0, v.K)(), x = (0, r.bG)([h.A], () => h.A.getIsDsaEligible()), g = n.useMemo(() => s.slice(0, o), [s, o]);
    n.useEffect(() => {
      a && u.default.track(p.HAw.SAFETY_HUB_ACTION, {
        action: f.ZU.ViewViolationsDropdown,
        account_standing: m.state,
        classification_ids: g.map(t => Number(t.id)),
        source: f.XN.StandingTab,
        is_violative_content_shown: false,
        is_dsa_eligible: x
      })
    }, [a, m.state, g, x]);
    let j = s.length - g.length > 3 ? 3 : s.length - g.length;
    return (0, i.jsxs)("div", {
      className: b.Wm,
      children: [(0, i.jsx)(T, {
        status: e,
        onClick: () => l(t => !t),
        opened: a,
        count: s.length
      }), a && (0, i.jsxs)("div", {
        className: b.ld,
        children: [(0, i.jsx)(c.VQ0.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), g.length > 0 && g.map(t => (0, i.jsx)(D, {
          classification: t
        }, t.id)), g.length < s.length && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(c.VQ0.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, i.jsx)("button", {
            className: b.Hr,
            onClick: () => d(t => t + j),
            children: E.intl.format(E.t["9Ml56H"], {
              nextPageSize: j
            })
          })]
        }), 0 === g.length && "active" === e && (0, i.jsx)(A, {}), 0 === g.length && "expired" === e && (0, i.jsx)(_, {})]
      })]
    })
  },
  P = () => {
    let t = (0, N.CI)(),
      e = (0, N.XK)();
    return 0 === t.length && 0 === e.length ? null : (0, i.jsxs)("div", {
      children: [(0, i.jsx)(y, {
        status: "active",
        classifications: t
      }), (0, i.jsx)(y, {
        status: "expired",
        classifications: e
      })]
    })
  }