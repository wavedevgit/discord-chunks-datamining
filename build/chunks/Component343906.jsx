/** Chunk was on 60667 **/
/** chunk id: 343906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F,
  O: () => V
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

function U() {
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
    className: L.YL,
    onClick: e,
    children: (0, r.jsx)(u.mir, {
      size: "custom",
      color: "currentColor",
      className: L.Kk,
      width: 15,
      height: 15
    })
  })
}

function G(e) {
  let {
    displayType: t
  } = e, n = i.useCallback(() => {
    (0, u.showToast)((0, u.createToast)(w.intl.string(D.default.Wu8BK2), u.ToastType.FAILURE))
  }, []), l = (0, b.A)(), a = (0, h._w)(t), c = (0, h.Gn)(t), d = (0, h.Ju)(t), {
    loadMore: _,
    isMoreLoading: A
  } = (0, f.A)({
    onError: n
  }), E = (0, g.kN)().get(t), [x, O] = i.useState(P.PH), C = i.useCallback(() => {
    O(e => e + P.PH), _(t)
  }, [t, _]);
  o()(E, "No text for action type: ".concat(t));
  let j = t === P.NV.PURCHASES && null != d ? E.sectionHeader(d) : E.sectionHeader(c),
    v = i.useCallback(e => {
      let {
        row: t
      } = e, n = a[t];
      if ((0, g.aq)(n)) {
        let e = p.default.extractTimestamp(n.event_id),
          t = (0, g.i6)(e, E.timestampFormatter);
        return (0, r.jsx)(S.A, {
          userId: n.entity_id,
          subText: t
        }, n.event_id)
      }
      if ((0, g.Is)(n)) return (0, r.jsx)(I.A, {
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
    N = i.useCallback(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.Text, {
        className: L.bV,
        variant: "text-md/semibold",
        children: j
      }), true !== E.sectionDescription ? (0, r.jsx)(u.Text, {
        className: L.yV,
        variant: "text-md/medium",
        color: "text-muted",
        children: E.sectionDescription(null != l && l)
      }) : null]
    }), [j, E, l]);
  if (0 === a.length) return null;
  let y = a.slice(0, x);
  return (0, r.jsxs)("div", {
    className: L.A2,
    children: [N(), (0, r.jsx)("div", {
      className: L.o1,
      style: {
        maxHeight: 65 * y.length
      },
      children: y.map((e, t) => v({
        row: t
      }))
    }), y.length < c ? (0, r.jsx)(u.DUT, {
      className: s()(L.FQ, {
        [L.r9]: A
      }),
      onClick: C,
      role: "button",
      "aria-disabled": A,
      children: A ? (0, r.jsx)(u.y$y, {
        type: u.y$y.Type.PULSING_ELLIPSIS,
        className: L.u1
      }) : (0, r.jsx)(u.Text, {
        className: L.UX,
        variant: "text-sm/bold",
        children: w.intl.format(D.default["7dMmJY"], {
          pageSize: Math.max(1, Math.min(c - y.length, P.PH))
        })
      })
    }) : null]
  })
}
let k = () => {
    let e = (0, b.A)(),
      t = (0, O.vx)(),
      n = (0, A.y)(w.intl.formatToPlainString(D.default["7hqFl9"], {
        activeLinks: t.length
      }), w.intl.string(D.default["Q/D/0Q"])),
      i = (0, g.cV)(!!e),
      l = (0, O.v4)(i);
    return e && t.length > 1 ? (0, r.jsx)(u.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, r.jsxs)(r.Fragment, {
      children: [e ? null : (0, r.jsx)(u.bMW, {
        size: "xs",
        color: "currentColor",
        className: L.Kk
      }), (0, r.jsx)(u.Text, {
        variant: "eyebrow",
        children: n
      })]
    })
  },
  V = Chunk64700.memo(e => {
    let {
      userId: t,
      subText: n,
      avatarSize: i = u._3J.SIZE_40,
      hideUserTag: l = false
    } = e, s = (0, x.F7)(t);
    return true === s ? null : (0, r.jsxs)("div", {
      className: L.iO,
      children: [(0, r.jsx)(j.H, {
        user: s,
        avatarSize: i
      }), (0, r.jsxs)("div", {
        className: L.TK,
        children: [(0, r.jsx)(v.A, {
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
V.displayName = "FamilyCenterActivityCardAccountRow";
let H = () => {
    let e = (0, O.GR)(),
      t = (0, c.bG)([m.A], () => m.A.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, f.A)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      s = i.useCallback(e => (0, r.jsx)(V, {
        userId: e.value,
        avatarSize: u._3J.SIZE_24
      }), []);
    return (0, r.jsx)(d.Pw, {
      className: L.Lt,
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
  B = () => {
    let e = (0, E.k)(),
      t = (0, b.A)(),
      n = (0, O.vx)(),
      i = (0, g.cV)(!!t),
      l = (0, O.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, r.jsx)(H, {}) : (0, r.jsx)(V, {
      userId: e,
      subText: l
    })
  },
  F = () => {
    let e = (0, g.Mo)(),
      t = (0, h.lI)(),
      n = (0, g.jp)(),
      i = (0, O.v4)(n);
    return (0, r.jsxs)("div", {
      className: L.kL,
      children: [(0, r.jsxs)("div", {
        className: L.vF,
        children: [(0, r.jsx)(k, {}), (0, r.jsx)(U, {})]
      }), (0, r.jsxs)("div", {
        className: M.a,
        children: [(0, r.jsx)("div", {
          className: L.wx,
          children: (0, r.jsx)(B, {})
        }), (0, r.jsxs)(u.BJc, {
          gap: 32,
          padding: 32,
          fullWidth: false,
          children: [(0, r.jsx)("div", {
            className: L.O2,
            children: e.map(e => {
              let [t, n] = e;
              return (0, r.jsx)(C.A, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, r.jsxs)("div", {
            className: L.RJ,
            children: [(0, r.jsx)(y.A, {}), t ? e.map(e => {
              let [t] = e;
              return (0, r.jsx)(G, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, r.jsx)(N.A, {
              className: L.RL,
              text: null != i ? i : ""
            })]
          })]
        })]
      })]
    })
  }