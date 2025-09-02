/** Chunk was on web.js **/
/** chunk id: 87792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => G,
  Z: () => F
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
  Chunk780985 = require("./780985.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk240351 = require("./240351.jsx"),
  Chunk792258 = require("./792258.jsx"),
  Chunk657825 = require("./657825.jsx"),
  Chunk198952 = require("./198952.jsx"),
  Chunk329242 = require("./329242.jsx"),
  Chunk895328 = require("./895328.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37742 = require("./37742.js"),
  Chunk519279 = require("./519279.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}
let j = 65;

function M() {
  let e = Chunk647438.useCallback(() => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("66462").then(require.bind(require, 756226));
      return t => (0, r.jsx)(e, L({}, t))
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

function k(e) {
  let {
    displayType: t
  } = e, n = (0, _.PO)("family_center_activity_card"), a = i.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(P.intl.string(R.default.Wu8BKy), l.ToastType.FAILURE))
  }, []), s = (0, b.Z)(), c = (0, g.ws)(t), d = (0, g.C7)(t), {
    loadMore: h,
    isMoreLoading: E
  } = (0, m.G)({
    onError: a
  }), y = (0, f.E2)(n).get(t), [O, S] = i.useState(C.iB), T = (0, p.Xi)({
    location: "family_center_activity_section_web"
  }), A = i.useCallback(() => {
    S(e => e + C.iB), h(t)
  }, [t, h]);
  o()(y, "No text for action type: ".concat(t));
  let N = y.sectionHeader(d),
    D = i.useCallback(e => {
      let {
        row: t
      } = e, n = c[t];
      return (0, f.iB)(n) ? (0, r.jsx)(I.Z, {
        userId: n.entity_id,
        timestamp: u.default.extractTimestamp(n.event_id),
        timestampFormatter: y.timestampFormatter
      }, n.event_id) : (0, f.f0)(n) ? (0, r.jsx)(v.Z, {
        guildId: n.entity_id
      }, n.event_id) : true
    }, [c, y.timestampFormatter]),
    x = i.useCallback(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Text, {
        className: w.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: N
      }), true !== y.sectionDescription ? (0, r.jsx)(l.Text, {
        className: w.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: y.sectionDescription(null != s && s, T)
      }) : null]
    }), [N, y, s, T]);
  if (0 === c.length) return null;
  let L = c.slice(0, O);
  return (0, r.jsxs)("div", {
    className: w.actionSection,
    children: [x(), (0, r.jsx)("div", {
      className: w.actions,
      style: {
        maxHeight: L.length * j
      },
      children: L.map((e, t) => D({
        row: t
      }))
    }), L.length !== d ? (0, r.jsx)(l.P3F, {
      className: w.loadMoreBar,
      onClick: A,
      role: "button",
      children: E ? (0, r.jsx)(l.$jN, {
        type: l.$jN.Type.PULSING_ELLIPSIS,
        className: w.spinner
      }) : (0, r.jsx)(l.Text, {
        className: w.loadMore,
        variant: "text-sm/bold",
        children: P.intl.format(R.default["7dMmJS"], {
          pageSize: Math.min(d - L.length, C.iB)
        })
      })
    }) : null]
  })
}
let U = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
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
  G = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: i = l.EFr.SIZE_40,
      hideUserTag: a = false
    } = e, o = (0, E.In)(t);
    return true === o ? null : (0, r.jsxs)("div", {
      className: w.accountRow,
      children: [(0, r.jsx)(S.r, {
        user: o,
        avatarSize: i
      }), (0, r.jsxs)("div", {
        className: w.headerText,
        children: [(0, r.jsx)(T.Z, {
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
  B = () => {
    let e = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      a = e => {
        n(e), c.default.track(N.rMx.FAMILY_CENTER_ACTION, {
          action: C.YC.SelectTeen
        })
      },
      o = module.map(e => ({
        label: e.id,
        value: e.id
      })),
      u = Chunk647438.useCallback(e => (0, r.jsx)(G, {
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
  Z = e => {
    let {
      userId: t
    } = e, n = (0, b.Z)(), i = (0, y.mq)(C.ne.ACTIVE), a = (0, f.Qr)(!!n), o = (0, y.Rd)(a);
    return n && 1 !== i.length ? (0, r.jsx)(B, {}) : (0, r.jsx)(G, {
      userId: t,
      subText: o
    })
  },
  F = e => {
    let {
      user: t
    } = e, n = (0, _.PO)("family_center_activity_card"), i = (0, f._p)(n), a = (0, g.kE)(), o = (0, f.t3)(), s = (0, y.Rd)(o);
    return (0, r.jsxs)("div", {
      className: n ? w.containerV2 : w.container,
      children: [(0, r.jsxs)("div", {
        className: w.connectedCounter,
        children: [(0, r.jsx)(U, {}), (0, r.jsx)(M, {})]
      }), (0, r.jsxs)("div", {
        className: D.box,
        children: [(0, r.jsx)("div", {
          className: w.header,
          children: (0, r.jsx)(Z, {
            userId: t.id
          })
        }), (0, r.jsxs)("div", {
          className: w.content,
          children: [(0, r.jsx)("div", {
            className: n ? w.activityCounterRowV2 : w.activityCounterRow,
            children: i.map(e => {
              let [t, n] = e;
              return (0, r.jsx)(O.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, r.jsx)("div", {
            className: w.activityOverview,
            children: a ? i.map(e => {
              let [t] = e;
              return (0, r.jsx)(k, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, r.jsx)(A.Z, {
              className: w.emptyActivity,
              text: null != s ? s : ""
            })
          })]
        })]
      })]
    })
  }