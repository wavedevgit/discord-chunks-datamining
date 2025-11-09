/** Chunk was on web.js **/
/** chunk id: 87792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => V,
  Z: () => W
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk382402 = require("./382402.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk742164 = require("./742164.js"),
  Chunk152269 = require("./152269.js");

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

function B() {
  let e = Chunk647438.useCallback(() => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("66462").then(require.bind(require, 756226));
      return t => (0, r.jsx)(e, U({}, t))
    })
  }, []);
  return (0, Chunk951288.jsx)(Chunk481060.P3F, {
    className: Chunk742164.tooltip,
    onClick: module,
    children: (0, Chunk951288.jsx)(Chunk481060.d3s, {
      size: "custom",
      color: "currentColor",
      className: Chunk742164.icon,
      width: 15,
      height: 15
    })
  })
}

function Z(e) {
  let {
    displayType: t
  } = e, n = (0, h.PO)("family_center_activity_card"), a = i.useCallback(() => {
    (0, u.showToast)((0, u.createToast)(L.intl.string(x.default.Wu8BK2), u.ToastType.FAILURE))
  }, []), s = (0, O.Z)(), c = (0, E.ws)(t), d = (0, E.C7)(t), m = (0, E.A)(t), {
    loadMore: b,
    isMoreLoading: y
  } = (0, g.G)({
    onError: a
  }), v = (0, p.E2)(n).get(t), [I, C] = i.useState(w.iB), N = i.useCallback(() => {
    C(e => e + w.iB), b(t)
  }, [t, b]);
  l()(v, "No text for action type: ".concat(t));
  let R = t === w.MY.PURCHASES && null != m ? v.sectionHeader(m) : v.sectionHeader(d),
    P = i.useCallback(e => {
      let {
        row: t
      } = e, n = c[t];
      if ((0, p.iB)(n)) {
        let e = f.default.extractTimestamp(n.event_id),
          t = (0, p.LI)(e, v.timestampFormatter);
        return (0, r.jsx)(A.Z, {
          userId: n.entity_id,
          subText: t
        }, n.event_id)
      }
      if ((0, p.f0)(n)) return (0, r.jsx)(S.Z, {
        guildId: n.entity_id
      }, n.event_id);
      if ((0, p.m4)(n)) {
        let e = _.Z.getPurchaseInfo(n.entity_id);
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
        className: M.sectionHeader,
        variant: "text-md/semibold",
        children: R
      }), true !== v.sectionDescription ? (0, r.jsx)(u.Text, {
        className: M.sectionDescription,
        variant: "text-md/medium",
        color: "text-tertiary",
        children: v.sectionDescription(null != s && s)
      }) : null]
    }), [R, v, s]);
  if (0 === c.length) return null;
  let j = c.slice(0, I);
  return (0, r.jsxs)("div", {
    className: M.actionSection,
    children: [D(), (0, r.jsx)("div", {
      className: M.actions,
      style: {
        maxHeight: j.length * G
      },
      children: j.map((e, t) => P({
        row: t
      }))
    }), j.length < d ? (0, r.jsx)(u.P3F, {
      className: o()(M.loadMoreBar, {
        [M.disabled]: y
      }),
      onClick: N,
      role: "button",
      "aria-disabled": y,
      children: y ? (0, r.jsx)(u.$jN, {
        type: u.$jN.Type.PULSING_ELLIPSIS,
        className: M.spinner
      }) : (0, r.jsx)(u.Text, {
        className: M.loadMore,
        variant: "text-sm/bold",
        children: L.intl.format(x.default["7dMmJY"], {
          pageSize: Math.max(1, Math.min(d - j.length, w.iB))
        })
      })
    }) : null]
  })
}
let F = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.ZM)(),
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk382402.default["7hqFl9"], {
        activeLinks: exports.length
      }), Chunk388032.intl.string(Chunk382402.default["Q/D/0Q"])),
      i = (0, Chunk546791.Qr)(!!module),
      a = (0, Chunk631885.Rd)(Chunk647438);
    return module && exports.length > 1 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "eyebrow",
      children: Chunk120356
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [module ? null : (0, Chunk951288.jsx)(Chunk481060.tEF, {
        size: "xs",
        color: "currentColor",
        className: Chunk742164.icon
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: require
      })]
    })
  },
  V = Chunk647438.memo(e => {
    let {
      userId: t,
      subText: n,
      avatarSize: i = u.EFr.SIZE_40,
      hideUserTag: a = false
    } = e, o = (0, y.In)(t);
    return true === o ? null : (0, r.jsxs)("div", {
      className: M.accountRow,
      children: [(0, r.jsx)(C.r, {
        user: o,
        avatarSize: i
      }), (0, r.jsxs)("div", {
        className: M.headerText,
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
      s = Chunk647438.useCallback(e => (0, r.jsx)(V, {
        userId: e.value,
        avatarSize: u.EFr.SIZE_24
      }), []);
    return (0, Chunk951288.jsx)(Chunk481060.PhF, {
      className: Chunk742164.select,
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
      a = (0, Chunk631885.Rd)(Chunk647438);
    return null === module ? null : exports && 1 !== require.length ? (0, Chunk951288.jsx)(H, {}) : (0, Chunk951288.jsx)(V, {
      userId: module,
      subText: Chunk120356
    })
  },
  W = () => {
    let e = (0, Chunk277537.PO)("family_center_activity_card"),
      t = (0, Chunk546791._p)(module),
      n = (0, Chunk858719.kE)(),
      i = (0, Chunk546791.t3)(),
      a = (0, Chunk631885.Rd)(Chunk647438);
    return (0, Chunk951288.jsxs)("div", {
      className: module ? Chunk742164.containerV2 : Chunk742164.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk742164.connectedCounter,
        children: [(0, Chunk951288.jsx)(F, {}), (0, Chunk951288.jsx)(B, {})]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk152269.box,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk742164.header,
          children: (0, Chunk951288.jsx)(Y, {})
        }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 32,
          padding: 32,
          fullWidth: false,
          children: [(0, Chunk951288.jsx)("div", {
            className: module ? Chunk742164.activityCounterRowV2 : Chunk742164.activityCounterRow,
            children: exports.map(e => {
              let [t, n] = e;
              return (0, r.jsx)(I.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk742164.activityOverview,
            children: [module ? (0, Chunk951288.jsx)(Chunk448524.Z, {}) : null, require ? exports.map(e => {
              let [t] = e;
              return (0, r.jsx)(Z, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, Chunk951288.jsx)(Chunk895328.Z, {
              className: Chunk742164.emptyActivity,
              text: null != Chunk120356 ? Chunk120356 : ""
            })]
          })]
        })]
      })]
    })
  }