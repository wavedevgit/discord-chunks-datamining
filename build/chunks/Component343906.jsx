/** Chunk was on web.js **/
/** chunk id: 343906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => K,
  O: () => H
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk695515 = require("./695515.js"),
  Chunk923531 = require("./923531.js"),
  Chunk294433 = require("./294433.js"),
  Chunk10005 = require("./10005.js"),
  Chunk400641 = require("./400641.js"),
  Chunk438732 = require("./438732.js"),
  Chunk500470 = require("./500470.js"),
  Chunk153739 = require("./153739.js"),
  Chunk834981 = require("./834981.js"),
  Chunk607822 = require("./607822.jsx"),
  Chunk254847 = require("./254847.jsx"),
  Chunk436805 = require("./436805.jsx"),
  Chunk773349 = require("./773349.jsx"),
  Chunk283900 = require("./283900.jsx"),
  Chunk475833 = require("./475833.jsx"),
  Chunk469696 = require("./469696.jsx"),
  Chunk400553 = require("./400553.jsx"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk976744 = require("./976744.js"),
  Chunk896498 = require("./896498.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}
let G = 65;

function V() {
  let e = i.useCallback(() => {
    (0, d.mMO)(async () => {
      let {
        default: e
      } = await n.e("59276").then(n.bind(n, 549223));
      return t => (0, r.jsx)(e, U({}, t))
    })
  }, []);
  return (0, r.jsx)(d.DUT, {
    className: j.YL,
    onClick: e,
    children: (0, r.jsx)(d.mir, {
      size: "custom",
      color: "currentColor",
      className: j.Kk,
      width: 15,
      height: 15
    })
  })
}

function F(e) {
  let {
    displayType: t
  } = e, n = i.useCallback(() => {
    (0, d.showToast)((0, d.createToast)(L.intl.string(x.default.Wu8BK2), d.ToastType.FAILURE))
  }, []), a = (0, y.A)(), o = (0, E._w)(t), c = (0, E.Gn)(t), u = (0, E.Ju)(t), {
    loadMore: f,
    isMoreLoading: m
  } = (0, g.A)({
    onError: n
  }), b = (0, h.kN)().get(t), [O, v] = i.useState(P.PH), A = i.useCallback(() => {
    v(e => e + P.PH), f(t)
  }, [t, f]);
  l()(b, "No text for action type: ".concat(t));
  let C = t === P.NV.PURCHASES && null != u ? b.sectionHeader(u) : b.sectionHeader(c),
    N = i.useCallback(e => {
      let {
        row: t
      } = e, n = o[t];
      if ((0, h.aq)(n)) {
        let e = p.default.extractTimestamp(n.event_id),
          t = (0, h.i6)(e, b.timestampFormatter);
        return (0, r.jsx)(T.A, {
          userId: n.entity_id,
          subText: t
        }, n.event_id)
      }
      if ((0, h.Is)(n)) return (0, r.jsx)(I.A, {
        guildId: n.entity_id
      }, n.event_id);
      if ((0, h.u7)(n)) {
        let e = _.A.getPurchaseInfo(n.entity_id);
        return null == e ? null : (0, r.jsx)(S.A, {
          skuId: e.sku_id,
          subscriptionPlanId: e.subscription_plan_id,
          total: e.total,
          currency: e.currency
        }, n.event_id)
      }
      return null
    }, [o, b.timestampFormatter]),
    w = i.useCallback(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Text, {
        className: j.bV,
        variant: "text-md/semibold",
        children: C
      }), true !== b.sectionDescription ? (0, r.jsx)(d.Text, {
        className: j.yV,
        variant: "text-md/medium",
        color: "text-muted",
        children: b.sectionDescription(null != a && a)
      }) : null]
    }), [C, b, a]);
  if (0 === o.length) return null;
  let R = o.slice(0, O);
  return (0, r.jsxs)("div", {
    className: j.A2,
    children: [w(), (0, r.jsx)("div", {
      className: j.o1,
      style: {
        maxHeight: R.length * G
      },
      children: R.map((e, t) => N({
        row: t
      }))
    }), R.length < c ? (0, r.jsx)(d.DUT, {
      className: s()(j.FQ, {
        [j.r9]: m
      }),
      onClick: A,
      role: "button",
      "aria-disabled": m,
      children: m ? (0, r.jsx)(d.y$y, {
        type: d.y$y.Type.PULSING_ELLIPSIS,
        className: j.u1
      }) : (0, r.jsx)(d.Text, {
        className: j.UX,
        variant: "text-sm/bold",
        children: L.intl.format(x.default["7dMmJY"], {
          pageSize: Math.max(1, Math.min(c - R.length, P.PH))
        })
      })
    }) : null]
  })
}
let B = () => {
    let e = (0, y.A)(),
      t = (0, v.vx)(),
      n = (0, m.y)(L.intl.formatToPlainString(x.default["7hqFl9"], {
        activeLinks: t.length
      }), L.intl.string(x.default["Q/D/0Q"])),
      i = (0, h.cV)(!!e),
      a = (0, v.v4)(i);
    return e && t.length > 1 ? (0, r.jsx)(d.Text, {
      variant: "eyebrow",
      children: a
    }) : (0, r.jsxs)(r.Fragment, {
      children: [e ? null : (0, r.jsx)(d.bMW, {
        size: "xs",
        color: "currentColor",
        className: j.Kk
      }), (0, r.jsx)(d.Text, {
        variant: "eyebrow",
        children: n
      })]
    })
  },
  H = Chunk64700.memo(e => {
    let {
      userId: t,
      subText: n,
      avatarSize: i = d._3J.SIZE_40,
      hideUserTag: a = false
    } = e, s = (0, O.F7)(t);
    return true === s ? null : (0, r.jsxs)("div", {
      className: j.iO,
      children: [(0, r.jsx)(C.H, {
        user: s,
        avatarSize: i
      }), (0, r.jsxs)("div", {
        className: j.TK,
        children: [(0, r.jsx)(N.A, {
          user: s,
          hideUserTag: a
        }), true !== n ? (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  });
H.displayName = "FamilyCenterActivityCardAccountRow";
let Y = () => {
    let e = (0, v.GR)(),
      t = (0, c.bG)([_.A], () => _.A.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, g.A)({}),
      a = e => {
        n(e), f.default.track(D.HAw.FAMILY_CENTER_ACTION, {
          action: P.qb.SelectTeen
        })
      },
      s = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      o = i.useCallback(e => (0, r.jsx)(H, {
        userId: e.value,
        avatarSize: d._3J.SIZE_24
      }), []);
    return (0, r.jsx)(u.Pw, {
      className: j.Lt,
      renderOptionLabel: o,
      renderOptionValue: e => {
        let [t] = e;
        return o(t)
      },
      serialize: e => e,
      select: a,
      isSelected: e => e === t,
      options: s,
      "data-migration-pending": true
    })
  },
  W = () => {
    let e = (0, b.k)(),
      t = (0, y.A)(),
      n = (0, v.vx)(),
      i = (0, h.cV)(!!t),
      a = (0, v.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, r.jsx)(Y, {}) : (0, r.jsx)(H, {
      userId: e,
      subText: a
    })
  },
  K = () => {
    let e = (0, h.Mo)(),
      t = (0, E.lI)(),
      n = (0, h.jp)(),
      i = (0, v.v4)(n);
    return (0, r.jsxs)("div", {
      className: j.kL,
      children: [(0, r.jsxs)("div", {
        className: j.vF,
        children: [(0, r.jsx)(B, {}), (0, r.jsx)(V, {})]
      }), (0, r.jsxs)("div", {
        className: M.a,
        children: [(0, r.jsx)("div", {
          className: j.wx,
          children: (0, r.jsx)(W, {})
        }), (0, r.jsxs)(d.BJc, {
          gap: 32,
          padding: 32,
          fullWidth: false,
          children: [(0, r.jsx)("div", {
            className: j.O2,
            children: e.map(e => {
              let [t, n] = e;
              return (0, r.jsx)(A.A, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, r.jsxs)("div", {
            className: j.RJ,
            children: [(0, r.jsx)(R.A, {}), t ? e.map(e => {
              let [t] = e;
              return (0, r.jsx)(F, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, r.jsx)(w.A, {
              className: j.RL,
              text: null != i ? i : ""
            })]
          })]
        })]
      })]
    })
  }