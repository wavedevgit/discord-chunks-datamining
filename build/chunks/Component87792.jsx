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
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk914788 = require("./914788.js"),
  Chunk546791 = require("./546791.js"),
  Chunk277537 = require("./277537.js"),
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
  Chunk744038 = require("./744038.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37742 = require("./37742.js"),
  Chunk519279 = require("./519279.js");

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
    className: Chunk37742.tooltip,
    onClick: module,
    children: (0, Chunk54381.jsx)(Chunk481060.d3s, {
      size: "custom",
      color: "currentColor",
      className: Chunk37742.icon,
      width: 15,
      height: 15
    })
  })
}

function B(e) {
  let {
    displayType: t
  } = e, n = (0, m.PO)("family_center_activity_card"), a = i.useCallback(() => {
    (0, u.showToast)((0, u.createToast)(L.intl.string(x.default.Wu8BK2), u.ToastType.FAILURE))
  }, []), s = (0, O.Z)(), c = (0, E.ws)(t), d = (0, E.C7)(t), h = (0, E.A)(t), {
    loadMore: b,
    isMoreLoading: y
  } = (0, g.G)({
    onError: a
  }), v = (0, _.E2)(n).get(t), [S, C] = i.useState(w.iB), N = i.useCallback(() => {
    C(e => e + w.iB), b(t)
  }, [t, b]);
  l()(v, "No text for action type: ".concat(t));
  let P = t === w.MY.PURCHASES && null != h ? v.sectionHeader(h) : v.sectionHeader(d),
    R = i.useCallback(e => {
      let {
        row: t
      } = e, n = c[t];
      if ((0, _.iB)(n)) {
        let e = f.default.extractTimestamp(n.event_id),
          t = (0, _.LI)(e, v.timestampFormatter);
        return (0, r.jsx)(A.Z, {
          userId: n.entity_id,
          subText: t
        }, n.event_id)
      }
      if ((0, _.f0)(n)) return (0, r.jsx)(I.Z, {
        guildId: n.entity_id
      }, n.event_id);
      if ((0, _.m4)(n)) {
        let e = p.Z.getPurchaseInfo(n.entity_id);
        return null == e ? null : (0, r.jsx)(T.Z, {
          skuId: e.sku_id,
          subscriptionPlanId: e.subscription_plan_id,
          total: e.total,
          currency: e.currency
        }, n.event_id)
      }
      return null
    }, [c, v.timestampFormatter]),
    D = i.useCallback(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.Text, {
        className: j.sectionHeader,
        variant: "text-md/semibold",
        children: P
      }), true !== v.sectionDescription ? (0, r.jsx)(u.Text, {
        className: j.sectionDescription,
        variant: "text-md/medium",
        color: "text-tertiary",
        children: v.sectionDescription(null != s && s)
      }) : null]
    }), [P, v, s]);
  if (0 === c.length) return null;
  let M = c.slice(0, S);
  return (0, r.jsxs)("div", {
    className: j.actionSection,
    children: [D(), (0, r.jsx)("div", {
      className: j.actions,
      style: {
        maxHeight: M.length * G
      },
      children: M.map((e, t) => R({
        row: t
      }))
    }), M.length < d ? (0, r.jsx)(u.P3F, {
      className: o()(j.loadMoreBar, {
        [j.disabled]: y
      }),
      onClick: N,
      role: "button",
      "aria-disabled": y,
      children: y ? (0, r.jsx)(u.$jN, {
        type: u.$jN.Type.PULSING_ELLIPSIS,
        className: j.spinner
      }) : (0, r.jsx)(u.Text, {
        className: j.loadMore,
        variant: "text-sm/bold",
        children: L.intl.format(x.default["7dMmJY"], {
          pageSize: Math.max(1, Math.min(d - M.length, w.iB))
        })
      })
    }) : null]
  })
}
let F = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.ZM)(),
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk744038.default["7hqFl9"], {
        activeLinks: exports.length
      }), Chunk388032.intl.string(Chunk744038.default["Q/D/0Q"])),
      i = (0, Chunk546791.Qr)(!!module),
      a = (0, Chunk631885.Rd)(Chunk473749);
    return module && exports.length > 1 ? (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "eyebrow",
      children: Chunk120356
    }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [module ? null : (0, Chunk54381.jsx)(Chunk481060.tEF, {
        size: "xs",
        color: "currentColor",
        className: Chunk37742.icon
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
      avatarSize: i = u.EFr.SIZE_40,
      hideUserTag: a = false
    } = e, o = (0, y.In)(t);
    return true === o ? null : (0, r.jsxs)("div", {
      className: j.accountRow,
      children: [(0, r.jsx)(C.r, {
        user: o,
        avatarSize: i
      }), (0, r.jsxs)("div", {
        className: j.headerText,
        children: [(0, r.jsx)(N.Z, {
          user: o,
          hideUserTag: a
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
    let e = (0, Chunk631885.zu)(),
      t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      a = e => {
        n(e), d.default.track(D.rMx.FAMILY_CENTER_ACTION, {
          action: w.YC.SelectTeen
        })
      },
      o = module.map(e => ({
        label: e.id,
        value: e.id
      })),
      s = Chunk473749.useCallback(e => (0, r.jsx)(V, {
        userId: e.value,
        avatarSize: u.EFr.SIZE_24
      }), []);
    return (0, Chunk54381.jsx)(Chunk481060.PhF, {
      className: Chunk37742.select,
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
    let e = (0, Chunk277537.PO)("family_center_activity_card"),
      t = (0, Chunk546791._p)(module),
      n = (0, Chunk858719.kE)(),
      i = (0, Chunk546791.t3)(),
      a = (0, Chunk631885.Rd)(Chunk473749);
    return (0, Chunk54381.jsxs)("div", {
      className: module ? Chunk37742.containerV2 : Chunk37742.container,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk37742.connectedCounter,
        children: [(0, Chunk54381.jsx)(F, {}), (0, Chunk54381.jsx)(Z, {})]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk519279.box,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk37742.header,
          children: (0, Chunk54381.jsx)(Y, {})
        }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 32,
          padding: 32,
          fullWidth: false,
          children: [(0, Chunk54381.jsx)("div", {
            className: module ? Chunk37742.activityCounterRowV2 : Chunk37742.activityCounterRow,
            children: exports.map(e => {
              let [t, n] = e;
              return (0, r.jsx)(S.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, Chunk54381.jsxs)("div", {
            className: Chunk37742.activityOverview,
            children: [module ? (0, Chunk54381.jsx)(Chunk448524.Z, {}) : null, require ? exports.map(e => {
              let [t] = e;
              return (0, r.jsx)(B, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, Chunk54381.jsx)(Chunk895328.Z, {
              className: Chunk37742.emptyActivity,
              text: null != Chunk120356 ? Chunk120356 : ""
            })]
          })]
        })]
      })]
    })
  }