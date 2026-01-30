/** Chunk was on 78376 **/
/** chunk id: 343906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F,
  O: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function G() {
  let e = i.useCallback(() => {
    (0, u.mMO)(async () => {
      let {
        default: e
      } = await n.e("59276").then(n.bind(n, 549223));
      return t => (0, r.jsx)(e, function(e) {
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
      }({}, t))
    })
  }, []);
  return (0, r.jsx)(u.DUT, {
    className: w.YL,
    onClick: e,
    children: (0, r.jsx)(u.mir, {
      size: "custom",
      color: "currentColor",
      className: w.Kk,
      width: 15,
      height: 15
    })
  })
}

function U(e) {
  let {
    displayType: t
  } = e, n = i.useCallback(() => {
    (0, u.showToast)((0, u.createToast)(L.intl.string(D.default.Wu8BK2), u.ToastType.FAILURE))
  }, []), l = (0, h.A)(), a = (0, b._w)(t), c = (0, b.Gn)(t), d = (0, b.Ju)(t), {
    loadMore: _,
    isMoreLoading: A
  } = (0, f.A)({
    onError: n
  }), E = (0, g.kN)().get(t), [O, C] = i.useState(P.PH), x = i.useCallback(() => {
    C(e => e + P.PH), _(t)
  }, [t, _]);
  o()(E, "No text for action type: ".concat(t));
  let y = t === P.NV.PURCHASES && null != d ? E.sectionHeader(d) : E.sectionHeader(c),
    N = i.useCallback(e => {
      let {
        row: t
      } = e, n = a[t];
      if ((0, g.aq)(n)) {
        let e = p.default.extractTimestamp(n.event_id),
          t = (0, g.i6)(e, E.timestampFormatter);
        return (0, r.jsx)(I.A, {
          userId: n.entity_id,
          subText: t
        }, n.event_id)
      }
      if ((0, g.Is)(n)) return (0, r.jsx)(S.A, {
        guildId: n.entity_id
      }, n.event_id);
      if ((0, g.u7)(n)) {
        let e = m.A.getPurchaseInfo(n.entity_id);
        return null == e ? null : (0, r.jsx)(T.A, {
          skuId: e.sku_id,
          subscriptionPlanId: e.subscription_plan_id,
          total: e.total,
          currency: e.currency
        }, n.event_id)
      }
      return null
    }, [a, E.timestampFormatter]),
    j = i.useCallback(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.Text, {
        className: w.bV,
        variant: "text-md/semibold",
        children: y
      }), true !== E.sectionDescription ? (0, r.jsx)(u.Text, {
        className: w.yV,
        variant: "text-md/medium",
        color: "text-muted",
        children: E.sectionDescription(null != l && l)
      }) : null]
    }), [y, E, l]);
  if (0 === a.length) return null;
  let v = a.slice(0, O);
  return (0, r.jsxs)("div", {
    className: w.A2,
    children: [j(), (0, r.jsx)("div", {
      className: w.o1,
      style: {
        maxHeight: 65 * v.length
      },
      children: v.map((e, t) => N({
        row: t
      }))
    }), v.length < c ? (0, r.jsx)(u.DUT, {
      className: s()(w.FQ, {
        [w.r9]: A
      }),
      onClick: x,
      role: "button",
      "aria-disabled": A,
      children: A ? (0, r.jsx)(u.y$y, {
        type: u.y$y.Type.PULSING_ELLIPSIS,
        className: w.u1
      }) : (0, r.jsx)(u.Text, {
        className: w.UX,
        variant: "text-sm/bold",
        children: L.intl.format(D.default["7dMmJY"], {
          pageSize: Math.max(1, Math.min(c - v.length, P.PH))
        })
      })
    }) : null]
  })
}
let k = () => {
    let e = (0, h.A)(),
      t = (0, C.vx)(),
      n = (0, A.y)(L.intl.formatToPlainString(D.default["7hqFl9"], {
        activeLinks: t.length
      }), L.intl.string(D.default["Q/D/0Q"])),
      i = (0, g.cV)(!!e),
      l = (0, C.v4)(i);
    return e && t.length > 1 ? (0, r.jsx)(u.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, r.jsxs)(r.Fragment, {
      children: [e ? null : (0, r.jsx)(u.bMW, {
        size: "xs",
        color: "currentColor",
        className: w.Kk
      }), (0, r.jsx)(u.Text, {
        variant: "eyebrow",
        children: n
      })]
    })
  },
  B = Chunk64700.memo(e => {
    let {
      userId: t,
      subText: n,
      avatarSize: i = u._3J.SIZE_40,
      hideUserTag: l = false
    } = e, s = (0, O.F7)(t);
    return true === s ? null : (0, r.jsxs)("div", {
      className: w.iO,
      children: [(0, r.jsx)(y.H, {
        user: s,
        avatarSize: i
      }), (0, r.jsxs)("div", {
        className: w.TK,
        children: [(0, r.jsx)(N.A, {
          user: s,
          hideUserTag: l
        }), true !== n ? (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  });
B.displayName = "FamilyCenterActivityCardAccountRow";
let H = () => {
    let e = (0, C.GR)(),
      t = (0, c.bG)([m.A], () => m.A.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, f.A)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      s = i.useCallback(e => (0, r.jsx)(B, {
        userId: e.value,
        avatarSize: u._3J.SIZE_24
      }), []);
    return (0, r.jsx)(d.Pw, {
      className: w.Lt,
      renderOptionLabel: s,
      renderOptionValue: e => {
        let [t] = e;
        return s(t)
      },
      serialize: e => e,
      select: e => {
        n(e), _.default.track(R.HAw.FAMILY_CENTER_ACTION, {
          action: P.qb.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: l,
      "data-migration-pending": true
    })
  },
  V = () => {
    let e = (0, E.k)(),
      t = (0, h.A)(),
      n = (0, C.vx)(),
      i = (0, g.cV)(!!t),
      l = (0, C.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, r.jsx)(H, {}) : (0, r.jsx)(B, {
      userId: e,
      subText: l
    })
  },
  F = () => {
    let e = (0, g.Mo)(),
      t = (0, b.lI)(),
      n = (0, g.jp)(),
      i = (0, C.v4)(n);
    return (0, r.jsxs)("div", {
      className: w.kL,
      children: [(0, r.jsxs)("div", {
        className: w.vF,
        children: [(0, r.jsx)(k, {}), (0, r.jsx)(G, {})]
      }), (0, r.jsxs)("div", {
        className: M.a,
        children: [(0, r.jsx)("div", {
          className: w.wx,
          children: (0, r.jsx)(V, {})
        }), (0, r.jsxs)(u.BJc, {
          gap: 32,
          padding: 32,
          fullWidth: false,
          children: [(0, r.jsx)("div", {
            className: w.O2,
            children: e.map(e => {
              let [t, n] = e;
              return (0, r.jsx)(x.A, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, r.jsxs)("div", {
            className: w.RJ,
            children: [(0, r.jsx)(v.A, {}), t ? e.map(e => {
              let [t] = e;
              return (0, r.jsx)(U, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, r.jsx)(j.A, {
              className: w.RL,
              text: null != i ? i : ""
            })]
          })]
        })]
      })]
    })
  }