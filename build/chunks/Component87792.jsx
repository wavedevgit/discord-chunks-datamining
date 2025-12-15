/** Chunk was on web.js **/
/** chunk id: 87792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => V,
  Z: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk914788 = require("./914788.js"),
  Chunk546791 = require("./546791.js"),
  Chunk785681 = require("./785681.js"),
  Chunk985002 = require("./985002.js"),
  Chunk858719 = require("./858719.js"),
  Chunk652262 = require("./652262.js"),
  Chunk780985 = require("./780985.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk240351 = require("./240351.jsx"),
  Chunk792258 = require("./792258.jsx"),
  Chunk381190 = require("./381190.jsx"),
  Chunk657825 = require("./657825.jsx"),
  Chunk198952 = require("./198952.jsx"),
  Chunk329242 = require("./329242.jsx"),
  Chunk895328 = require("./895328.jsx"),
  Chunk448524 = require("./448524.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk203549 = require("./203549.js"),
  Chunk108319 = require("./108319.js");

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

function Z() {
  let e = Chunk473749.useCallback(() => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("66462").then(require.bind(require, 756226));
      return t => (0, r.jsx)(e, U({}, t))
    })
  }, []);
  return (0, Chunk54381.jsx)(Chunk481060.P3F, {
    className: Chunk203549.tooltip,
    onClick: module,
    children: (0, Chunk54381.jsx)(Chunk481060.d3s, {
      size: "custom",
      color: "currentColor",
      className: Chunk203549.icon,
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
  }, []), a = (0, O.Z)(), s = (0, E.ws)(t), c = (0, E.C7)(t), u = (0, E.A)(t), {
    loadMore: f,
    isMoreLoading: h
  } = (0, g.G)({
    onError: n
  }), b = (0, m.E2)().get(t), [y, v] = i.useState(w.iB), S = i.useCallback(() => {
    v(e => e + w.iB), f(t)
  }, [t, f]);
  l()(b, "No text for action type: ".concat(t));
  let A = t === w.MY.PURCHASES && null != u ? b.sectionHeader(u) : b.sectionHeader(c),
    N = i.useCallback(e => {
      let {
        row: t
      } = e, n = s[t];
      if ((0, m.iB)(n)) {
        let e = p.default.extractTimestamp(n.event_id),
          t = (0, m.LI)(e, b.timestampFormatter);
        return (0, r.jsx)(C.Z, {
          userId: n.entity_id,
          subText: t
        }, n.event_id)
      }
      if ((0, m.f0)(n)) return (0, r.jsx)(I.Z, {
        guildId: n.entity_id
      }, n.event_id);
      if ((0, m.m4)(n)) {
        let e = _.Z.getPurchaseInfo(n.entity_id);
        return null == e ? null : (0, r.jsx)(T.Z, {
          skuId: e.sku_id,
          subscriptionPlanId: e.subscription_plan_id,
          total: e.total,
          currency: e.currency
        }, n.event_id)
      }
      return null
    }, [s, b.timestampFormatter]),
    P = i.useCallback(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Text, {
        className: j.sectionHeader,
        variant: "text-md/semibold",
        children: A
      }), true !== b.sectionDescription ? (0, r.jsx)(d.Text, {
        className: j.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: b.sectionDescription(null != a && a)
      }) : null]
    }), [A, b, a]);
  if (0 === s.length) return null;
  let R = s.slice(0, y);
  return (0, r.jsxs)("div", {
    className: j.actionSection,
    children: [P(), (0, r.jsx)("div", {
      className: j.actions,
      style: {
        maxHeight: R.length * G
      },
      children: R.map((e, t) => N({
        row: t
      }))
    }), R.length < c ? (0, r.jsx)(d.P3F, {
      className: o()(j.loadMoreBar, {
        [j.disabled]: h
      }),
      onClick: S,
      role: "button",
      "aria-disabled": h,
      children: h ? (0, r.jsx)(d.$jN, {
        type: d.$jN.Type.PULSING_ELLIPSIS,
        className: j.spinner
      }) : (0, r.jsx)(d.Text, {
        className: j.loadMore,
        variant: "text-sm/bold",
        children: L.intl.format(x.default["7dMmJY"], {
          pageSize: Math.max(1, Math.min(c - R.length, w.iB))
        })
      })
    }) : null]
  })
}
let B = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.ZM)(),
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk517319.default["7hqFl9"], {
        activeLinks: exports.length
      }), Chunk388032.intl.string(Chunk517319.default["Q/D/0Q"])),
      i = (0, Chunk546791.Qr)(!!module),
      a = (0, Chunk631885.Rd)(Chunk473749);
    return module && exports.length > 1 ? (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "eyebrow",
      children: Chunk120356
    }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [module ? null : (0, Chunk54381.jsx)(Chunk481060.tEF, {
        size: "xs",
        color: "currentColor",
        className: Chunk203549.icon
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: require
      })]
    })
  },
  V = Chunk473749.memo(e => {
    let {
      userId: t,
      subText: n,
      avatarSize: i = d.EFr.SIZE_40,
      hideUserTag: a = false
    } = e, o = (0, y.In)(t);
    return true === o ? null : (0, r.jsxs)("div", {
      className: j.accountRow,
      children: [(0, r.jsx)(A.r, {
        user: o,
        avatarSize: i
      }), (0, r.jsxs)("div", {
        className: j.headerText,
        children: [(0, r.jsx)(N.Z, {
          user: o,
          hideUserTag: a
        }), true !== n ? (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  });
V.displayName = "FamilyCenterActivityCardAccountRow";
let H = () => {
    let e = (0, Chunk631885.zu)(),
      t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      a = e => {
        n(e), f.default.track(D.rMx.FAMILY_CENTER_ACTION, {
          action: w.YC.SelectTeen
        })
      },
      o = module.map(e => ({
        label: e.id,
        value: e.id
      })),
      s = Chunk473749.useCallback(e => (0, r.jsx)(V, {
        userId: e.value,
        avatarSize: d.EFr.SIZE_24
      }), []);
    return (0, Chunk54381.jsx)(Chunk199849.B6, {
      className: Chunk203549.select,
      renderOptionLabel: Chunk512722,
      renderOptionValue: e => {
        let [t] = e;
        return s(t)
      },
      serialize: e => e,
      select: Chunk120356,
      isSelected: e => e === t,
      options: o
    })
  },
  Y = () => {
    let e = (0, Chunk652262.M)(),
      t = (0, Chunk880257.Z)(),
      n = (0, Chunk631885.ZM)(),
      i = (0, Chunk546791.Qr)(!!exports),
      a = (0, Chunk631885.Rd)(Chunk473749);
    return null === module ? null : exports && 1 !== require.length ? (0, Chunk54381.jsx)(H, {}) : (0, Chunk54381.jsx)(V, {
      userId: module,
      subText: Chunk120356
    })
  },
  W = () => {
    let e = (0, Chunk546791._p)(),
      t = (0, Chunk858719.kE)(),
      n = (0, Chunk546791.t3)(),
      i = (0, Chunk631885.Rd)(require);
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk203549.container,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk203549.connectedCounter,
        children: [(0, Chunk54381.jsx)(B, {}), (0, Chunk54381.jsx)(Z, {})]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk108319.box,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk203549.header,
          children: (0, Chunk54381.jsx)(Y, {})
        }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 32,
          padding: 32,
          fullWidth: false,
          children: [(0, Chunk54381.jsx)("div", {
            className: Chunk203549.activityCounterRow,
            children: module.map(e => {
              let [t, n] = e;
              return (0, r.jsx)(S.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, Chunk54381.jsxs)("div", {
            className: Chunk203549.activityOverview,
            children: [(0, Chunk54381.jsx)(Chunk448524.Z, {}), exports ? module.map(e => {
              let [t] = e;
              return (0, r.jsx)(F, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, Chunk54381.jsx)(Chunk895328.Z, {
              className: Chunk203549.emptyActivity,
              text: null != Chunk473749 ? Chunk473749 : ""
            })]
          })]
        })]
      })]
    })
  }