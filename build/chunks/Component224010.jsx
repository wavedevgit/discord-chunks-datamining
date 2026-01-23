/** Chunk was on web.js **/
/** chunk id: 224010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => L
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function A(e, t, n) {
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
      A(e, t, n[t])
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

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
    let {
      status: t,
      onClick: n,
      opened: i,
      count: a
    } = e;
    return (0, r.jsxs)(l.DUT, {
      className: v.wx,
      onClick: n,
      children: [(0, r.jsx)("div", {
        className: v.Y5,
        children: (0, r.jsx)(l.id, {
          size: "md",
          color: "active" === t ? l.LU0.colors.INTERACTIVE_TEXT_ACTIVE : l.LU0.colors.ICON_MUTED
        })
      }), (0, r.jsxs)("div", {
        className: v.DD,
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
        className: v.OW,
        children: (0, r.jsx)(c.A, {
          width: 18,
          height: 18,
          direction: i ? c.A.Directions.UP : c.A.Directions.DOWN
        })
      })]
    })
  },
  N = () => (0, r.jsxs)("div", {
    className: v.p$,
    children: [(0, r.jsxs)("div", {
      className: v.zc,
      children: [(0, r.jsx)("div", {
        className: v.Wk,
        children: (0, r.jsx)(l.OR, {
          size: "md",
          color: "currentColor",
          className: v.Kk
        })
      }), (0, r.jsx)(u.A, {
        className: v.uf
      })]
    }), (0, r.jsx)(l.Heading, {
      variant: "heading-md/bold",
      className: v.q6,
      children: O.intl.string(O.t.reLFaV)
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: v.WO,
      children: O.intl.string(O.t.ERdH1o)
    })]
  }),
  w = () => (0, r.jsx)("div", {
    className: v.p$,
    children: (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: v.WO,
      children: O.intl.string(O.t.RV3AXf)
    })
  }),
  R = e => {
    let {
      timestamp: t
    } = e;
    return (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: v.vE,
      children: (0, h._W)(t)
    })
  },
  P = () => (0, r.jsx)(l.Text, {
    variant: "text-xs/bold",
    className: v.Ad,
    children: O.intl.string(O.t.QKMRC4)
  }),
  D = e => {
    let {
      classification: t
    } = e, {
      id: a,
      description: o
    } = t, c = f.default.extractTimestamp(a), u = (0, m.e)(t), d = i.useMemo(() => {
      var e, n, i;
      let a = {
        description: o,
        descriptionHook: e => (0, r.jsx)(l.Text, {
          tag: "span",
          variant: "heading-lg/bold",
          children: e
        })
      };
      return (0, h._g)(t) ? (null == t || null == (e = t.guild_metadata) ? true : e.member_type) === p.Z9.OWNER ? O.intl.format(O.t.Lb0HVv, T(I({}, a), {
        guildName: null == t || null == (n = t.guild_metadata) ? true : n.name
      })) : O.intl.format(O.t.rmpEPD, {
        guildName: null == t || null == (i = t.guild_metadata) ? true : i.name,
        classification_type: a.description,
        classificationHook: a.descriptionHook
      }) : O.intl.format(O.t.QY4g5t, a)
    }, [t, o]), _ = () => {
      (0, l.mMO)(async () => {
        let {
          default: e
        } = await n.e("9407").then(n.bind(n, 956450));
        return t => (0, r.jsx)(e, I({
          classificationId: a,
          source: y.XN.StandingTab
        }, t))
      })
    };
    return (0, r.jsx)(l.DUT, {
      onClick: _,
      className: s()(v.zk, {
        [v.V5]: u
      }),
      children: (0, r.jsxs)("div", {
        className: v.iQ,
        children: [u ? (0, r.jsx)(P, {}) : (0, r.jsx)(R, {
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
    } = e, [a, s] = i.useState(false), [c, u] = i.useState(3), f = (0, g.K)(), p = (0, o.bG)([_.A], () => _.A.getIsDsaEligible()), h = i.useMemo(() => n.slice(0, c), [n, c]);
    i.useEffect(() => {
      a && d.default.track(b.HAw.SAFETY_HUB_ACTION, {
        action: y.ZU.ViewViolationsDropdown,
        account_standing: f.state,
        classification_ids: h.map(e => Number(e.id)),
        source: y.XN.StandingTab,
        is_violative_content_shown: false,
        is_dsa_eligible: p
      })
    }, [a, f.state, h, p]);
    let m = n.length - h.length > 3 ? 3 : n.length - h.length;
    return (0, r.jsxs)("div", {
      className: v.Wm,
      children: [(0, r.jsx)(C, {
        status: t,
        onClick: () => s(e => !e),
        opened: a,
        count: n.length
      }), a && (0, r.jsxs)("div", {
        className: v.ld,
        children: [(0, r.jsx)(l.VQ0.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), h.length > 0 && h.map(e => (0, r.jsx)(D, {
          classification: e
        }, e.id)), h.length < n.length && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.VQ0.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, r.jsx)("button", {
            className: v.Hr,
            onClick: () => u(e => e + m),
            children: O.intl.format(O.t["9Ml56H"], {
              nextPageSize: m
            })
          })]
        }), 0 === h.length && "active" === t && (0, r.jsx)(N, {}), 0 === h.length && "expired" === t && (0, r.jsx)(w, {})]
      })]
    })
  },
  L = () => {
    let e = (0, E.CI)(),
      t = (0, E.XK)();
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