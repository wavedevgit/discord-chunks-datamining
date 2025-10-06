/** Chunk was on web.js **/
/** chunk id: 87792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => F,
  Z: () => Y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk914788 = require("./914788.js"),
  Chunk546791 = require("./546791.js"),
  Chunk277537 = require("./277537.js"),
  Chunk259756 = require("./259756.js"),
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
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37742 = require("./37742.js"),
  Chunk519279 = require("./519279.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}
let U = 65;

function G() {
  let e = Chunk647438.useCallback(() => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("66462").then(require.bind(require, 756226));
      return t => (0, r.jsx)(e, k({}, t))
    })
  }, []);
  return (0, Chunk951288.jsx)(Chunk481060.P3F, {
    className: Chunk37742.tooltip,
    onClick: module,
    children: (0, Chunk951288.jsx)(Chunk481060.d3s, {
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
  } = e, n = (0, _.PO)("family_center_activity_card"), a = i.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(L.intl.string(D.default.Wu8BKy), l.ToastType.FAILURE))
  }, []), s = (0, y.Z)(), c = (0, g.ws)(t), h = (0, g.C7)(t), E = (0, g.A)(t), {
    loadMore: b,
    isMoreLoading: O
  } = (0, m.G)({
    onError: a
  }), v = (0, f.E2)(n).get(t), [A, C] = i.useState(P.iB), N = (0, p.Xi)({
    location: "family_center_activity_section_web"
  }), R = i.useCallback(() => {
    C(e => e + P.iB), b(t)
  }, [t, b]);
  o()(v, "No text for action type: ".concat(t));
  let w = t === P.MY.PURCHASES && null != E ? v.sectionHeader(E) : v.sectionHeader(h),
    M = i.useCallback(e => {
      let {
        row: t
      } = e, n = c[t];
      if ((0, f.iB)(n)) {
        let e = u.default.extractTimestamp(n.event_id),
          t = (0, f.LI)(e, v.timestampFormatter);
        return (0, r.jsx)(S.Z, {
          userId: n.entity_id,
          subText: t
        }, n.event_id)
      }
      if ((0, f.f0)(n)) return (0, r.jsx)(I.Z, {
        guildId: n.entity_id
      }, n.event_id);
      if ((0, f.m4)(n)) {
        let e = d.Z.getPurchaseInfo(n.entity_id);
        return null == e ? null : (0, r.jsx)(T.Z, {
          skuId: e.sku_id,
          subscriptionPlanId: e.subscription_plan_id,
          total: e.total,
          currency: e.currency
        }, n.event_id)
      }
      return null
    }, [c, v.timestampFormatter]),
    j = i.useCallback(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Text, {
        className: x.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: w
      }), true !== v.sectionDescription ? (0, r.jsx)(l.Text, {
        className: x.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: v.sectionDescription(null != s && s, N)
      }) : null]
    }), [w, v, s, N]);
  if (0 === c.length) return null;
  let k = c.slice(0, A);
  return (0, r.jsxs)("div", {
    className: x.actionSection,
    children: [j(), (0, r.jsx)("div", {
      className: x.actions,
      style: {
        maxHeight: k.length * U
      },
      children: k.map((e, t) => M({
        row: t
      }))
    }), k.length !== h ? (0, r.jsx)(l.P3F, {
      className: x.loadMoreBar,
      onClick: R,
      role: "button",
      children: O ? (0, r.jsx)(l.$jN, {
        type: l.$jN.Type.PULSING_ELLIPSIS,
        className: x.spinner
      }) : (0, r.jsx)(l.Text, {
        className: x.loadMore,
        variant: "text-sm/bold",
        children: L.intl.format(D.default["7dMmJS"], {
          pageSize: Math.min(h - k.length, P.iB)
        })
      })
    }) : null]
  })
}
let Z = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.ZM)(),
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk345909.default["7hqFl5"], {
        activeLinks: exports.length
      }), Chunk388032.intl.string(Chunk345909.default["Q/D/0d"])),
      i = (0, Chunk546791.Qr)(!!module),
      a = (0, Chunk631885.Rd)(Chunk647438);
    return module && exports.length > 1 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "eyebrow",
      children: Chunk512722
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [module ? null : (0, Chunk951288.jsx)(Chunk481060.tEF, {
        size: "xs",
        color: "currentColor",
        className: Chunk37742.icon
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: require
      })]
    })
  },
  F = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: i = l.EFr.SIZE_40,
      hideUserTag: a = false
    } = e, o = (0, b.In)(t);
    return true === o ? null : (0, r.jsxs)("div", {
      className: x.accountRow,
      children: [(0, r.jsx)(A.r, {
        user: o,
        avatarSize: i
      }), (0, r.jsxs)("div", {
        className: x.headerText,
        children: [(0, r.jsx)(C.Z, {
          user: o,
          hideUserTag: a
        }), true !== n ? (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  V = () => {
    let e = (0, Chunk631885.zu)(),
      t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      a = e => {
        n(e), c.default.track(w.rMx.FAMILY_CENTER_ACTION, {
          action: P.YC.SelectTeen
        })
      },
      o = module.map(e => ({
        label: e.id,
        value: e.id
      })),
      u = Chunk647438.useCallback(e => (0, r.jsx)(F, {
        userId: e.value,
        avatarSize: l.EFr.SIZE_24
      }), []);
    return (0, Chunk951288.jsx)(Chunk481060.PhF, {
      className: Chunk37742.select,
      renderOptionLabel: Chunk709054,
      renderOptionValue: e => {
        let [t] = e;
        return u(t)
      },
      serialize: e => e,
      select: Chunk512722,
      isSelected: e => e === t,
      options: o
    })
  },
  H = () => {
    let e = (0, Chunk652262.M)(),
      t = (0, Chunk880257.Z)(),
      n = (0, Chunk631885.ZM)(),
      i = (0, Chunk546791.Qr)(!!exports),
      a = (0, Chunk631885.Rd)(Chunk647438);
    return null === module ? null : exports && 1 !== require.length ? (0, Chunk951288.jsx)(V, {}) : (0, Chunk951288.jsx)(F, {
      userId: module,
      subText: Chunk512722
    })
  },
  Y = () => {
    let e = (0, Chunk277537.PO)("family_center_activity_card"),
      t = (0, Chunk546791._p)(module),
      n = (0, Chunk858719.kE)(),
      i = (0, Chunk546791.t3)(),
      a = (0, Chunk631885.Rd)(Chunk647438);
    return (0, Chunk951288.jsxs)("div", {
      className: module ? Chunk37742.containerV2 : Chunk37742.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk37742.connectedCounter,
        children: [(0, Chunk951288.jsx)(Z, {}), (0, Chunk951288.jsx)(G, {})]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk519279.box,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk37742.header,
          children: (0, Chunk951288.jsx)(H, {})
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk37742.content,
          children: [(0, Chunk951288.jsx)("div", {
            className: module ? Chunk37742.activityCounterRowV2 : Chunk37742.activityCounterRow,
            children: exports.map(e => {
              let [t, n] = e;
              return (0, r.jsx)(v.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), module ? (0, Chunk951288.jsx)(Chunk448524.Z, {}) : null, (0, Chunk951288.jsx)("div", {
            className: Chunk37742.activityOverview,
            children: require ? exports.map(e => {
              let [t] = e;
              return (0, r.jsx)(B, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, Chunk951288.jsx)(Chunk895328.Z, {
              className: Chunk37742.emptyActivity,
              text: null != Chunk512722 ? Chunk512722 : ""
            })
          })]
        })]
      })]
    })
  }