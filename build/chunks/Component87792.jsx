/** Chunk was on 30202 **/
/** chunk id: 87792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function D() {
  let e = Chunk647438.useCallback(() => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("66462").then(require.bind(require, 756226));
      return t => (0, i.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, t))
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

function Z(e) {
  let {
    displayType: t
  } = e, n = (0, p.PO)("family_center_activity_card"), s = r.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(A.intl.string(y.default.Wu8BKy), o.ToastType.FAILURE))
  }, []), l = (0, _.Z)(), c = (0, b.ws)(t), u = (0, b.C7)(t), {
    loadMore: h,
    isMoreLoading: x
  } = (0, f.G)({
    onError: s
  }), j = (0, m.E2)(n).get(t), [E, v] = r.useState(N.iB), S = (0, g.Xi)({
    location: "family_center_activity_section_web"
  }), T = r.useCallback(() => {
    v(e => e + N.iB), h(t)
  }, [t, h]);
  a()(j, "No text for action type: ".concat(t));
  let I = j.sectionHeader(u),
    R = r.useCallback(e => {
      let {
        row: t
      } = e, n = c[t];
      return (0, m.iB)(n) ? (0, i.jsx)(O.Z, {
        userId: n.entity_id,
        timestamp: d.default.extractTimestamp(n.event_id),
        timestampFormatter: j.timestampFormatter
      }, n.event_id) : (0, m.f0)(n) ? (0, i.jsx)(C.Z, {
        guildId: n.entity_id
      }, n.event_id) : true
    }, [c, j.timestampFormatter]),
    D = r.useCallback(() => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.Text, {
        className: P.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: I
      }), true !== j.sectionDescription ? (0, i.jsx)(o.Text, {
        className: P.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: j.sectionDescription(null != l && l, S)
      }) : null]
    }), [I, j, l, S]);
  if (0 === c.length) return null;
  let Z = c.slice(0, E);
  return (0, i.jsxs)("div", {
    className: P.actionSection,
    children: [D(), (0, i.jsx)("div", {
      className: P.actions,
      style: {
        maxHeight: 65 * Z.length
      },
      children: Z.map((e, t) => R({
        row: t
      }))
    }), Z.length !== u ? (0, i.jsx)(o.P3F, {
      className: P.loadMoreBar,
      onClick: T,
      role: "button",
      children: x ? (0, i.jsx)(o.$jN, {
        type: o.$jN.Type.PULSING_ELLIPSIS,
        className: P.spinner
      }) : (0, i.jsx)(o.Text, {
        className: P.loadMore,
        variant: "text-sm/bold",
        children: A.intl.format(y.default["7dMmJS"], {
          pageSize: Math.min(u - Z.length, N.iB)
        })
      })
    }) : null]
  })
}
let w = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk345909.default["7hqFl5"], {
        activeLinks: exports.length
      }), Chunk388032.intl.string(Chunk345909.default["Q/D/0d"])),
      r = (0, Chunk546791.Qr)(!!module),
      s = (0, Chunk631885.Rd)(Chunk647438);
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
  k = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: r = o.EFr.SIZE_40
    } = e, s = (0, x.I)(t);
    return true === s ? null : (0, i.jsxs)("div", {
      className: P.accountRow,
      children: [(0, i.jsx)(v.r, {
        user: s,
        avatarSize: r
      }), (0, i.jsxs)("div", {
        className: P.headerText,
        children: [(0, i.jsx)(S.Z, {
          user: s
        }), true !== n ? (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  L = () => {
    let e = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      s = module.map(e => ({
        label: e.id,
        value: e.id
      })),
      a = Chunk647438.useCallback(e => (0, i.jsx)(k, {
        userId: e.value,
        avatarSize: o.EFr.SIZE_24
      }), []);
    return (0, Chunk951288.jsx)(Chunk481060.PhF, {
      className: Chunk37742.select,
      renderOptionLabel: a,
      renderOptionValue: e => {
        let [t] = e;
        return a(t)
      },
      serialize: e => e,
      select: e => {
        n(e), c.default.track(I.rMx.FAMILY_CENTER_ACTION, {
          action: N.YC.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: Chunk512722
    })
  },
  B = e => {
    let {
      userId: t
    } = e, n = (0, _.Z)(), r = (0, j.mq)(N.ne.ACTIVE), s = (0, m.Qr)(!!n), a = (0, j.Rd)(s);
    return n && 1 !== r.length ? (0, i.jsx)(L, {}) : (0, i.jsx)(k, {
      userId: t,
      subText: a
    })
  },
  M = e => {
    let {
      user: t
    } = e, n = (0, p.PO)("family_center_activity_card"), r = (0, m._p)(n), s = (0, b.kE)(), a = (0, m.t3)(), l = (0, j.Rd)(a);
    return (0, i.jsxs)("div", {
      className: n ? P.containerV2 : P.container,
      children: [(0, i.jsxs)("div", {
        className: P.connectedCounter,
        children: [(0, i.jsx)(w, {}), (0, i.jsx)(D, {})]
      }), (0, i.jsxs)("div", {
        className: R.box,
        children: [(0, i.jsx)("div", {
          className: P.header,
          children: (0, i.jsx)(B, {
            userId: t.id
          })
        }), (0, i.jsxs)("div", {
          className: P.content,
          children: [(0, i.jsx)("div", {
            className: n ? P.activityCounterRowV2 : P.activityCounterRow,
            children: r.map(e => {
              let [t, n] = e;
              return (0, i.jsx)(E.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, i.jsx)("div", {
            className: P.activityOverview,
            children: s ? r.map(e => {
              let [t] = e;
              return (0, i.jsx)(Z, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, i.jsx)(T.Z, {
              className: P.emptyActivity,
              text: null != l ? l : ""
            })
          })]
        })]
      })]
    })
  }