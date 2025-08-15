/** Chunk was on 30202 **/
/** chunk id: 87792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk914788 = require("./914788.js"),
  Chunk546791 = require("./546791.js"),
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

function R() {
  let e = Chunk73800.useCallback(() => {
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
  return (0, Chunk255367.jsx)(Chunk481060.P3F, {
    className: Chunk37742.tooltip,
    onClick: module,
    children: (0, Chunk255367.jsx)(Chunk481060.d3s, {
      size: "custom",
      color: "currentColor",
      className: Chunk37742.icon,
      width: 15,
      height: 15
    })
  })
}

function D(e) {
  let {
    displayType: t
  } = e, n = r.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(y.intl.string(I.default.Wu8BKy), o.ToastType.FAILURE))
  }, []), s = (0, x.Z)(), l = (0, f.ws)(t), c = (0, f.C7)(t), {
    loadMore: u,
    isMoreLoading: g
  } = (0, h.G)({
    onError: n
  }), b = T.tx.get(t), [_, j] = r.useState(T.iB), O = (0, p.Xi)({
    location: "family_center_activity_section_web"
  }), v = r.useCallback(() => {
    j(e => e + T.iB), u(t)
  }, [t, u]);
  a()(b, "No text for action type");
  let S = b.sectionHeader(c),
    N = r.useCallback(e => {
      let {
        row: t
      } = e, n = l[t];
      return (0, m.iB)(n) ? (0, i.jsx)(C.Z, {
        userId: n.entity_id,
        timestamp: d.default.extractTimestamp(n.event_id),
        timestampFormatter: b.timestampFormatter
      }, n.event_id) : (0, m.f0)(n) ? (0, i.jsx)(E.Z, {
        guildId: n.entity_id
      }, n.event_id) : true
    }, [l, b.timestampFormatter]),
    P = r.useCallback(() => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.Text, {
        className: A.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: S
      }), true !== b.sectionDescription ? (0, i.jsx)(o.Text, {
        className: A.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: b.sectionDescription(null != s && s, O)
      }) : null]
    }), [S, b, s, O]);
  if (0 === l.length) return null;
  let R = l.slice(0, _);
  return (0, i.jsxs)("div", {
    className: A.actionSection,
    children: [P(), (0, i.jsx)("div", {
      className: A.actions,
      style: {
        maxHeight: 65 * R.length
      },
      children: R.map((e, t) => N({
        row: t
      }))
    }), R.length !== c ? (0, i.jsx)(o.P3F, {
      className: A.loadMoreBar,
      onClick: v,
      role: "button",
      children: g ? (0, i.jsx)(o.$jN, {
        type: o.$jN.Type.PULSING_ELLIPSIS,
        className: A.spinner
      }) : (0, i.jsx)(o.Text, {
        className: A.loadMore,
        variant: "text-sm/bold",
        children: y.intl.format(I.default["7dMmJS"], {
          pageSize: Math.min(c - R.length, T.iB)
        })
      })
    }) : null]
  })
}
let Z = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk345909.default["7hqFl5"], {
        activeLinks: exports.length
      }), Chunk388032.intl.string(Chunk345909.default["Q/D/0d"])),
      r = (0, Chunk546791.Qr)(!!module),
      s = (0, Chunk631885.Rd)(Chunk73800);
    return module && exports.length > 1 ? (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "eyebrow",
      children: Chunk512722
    }) : (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [module ? null : (0, Chunk255367.jsx)(Chunk481060.tEF, {
        size: "xs",
        color: "currentColor",
        className: Chunk37742.icon
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: require
      })]
    })
  },
  w = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: r = o.EFr.SIZE_40
    } = e, s = (0, b.I)(t);
    return true === s ? null : (0, i.jsxs)("div", {
      className: A.accountRow,
      children: [(0, i.jsx)(O.r, {
        user: s,
        avatarSize: r
      }), (0, i.jsxs)("div", {
        className: A.headerText,
        children: [(0, i.jsx)(v.Z, {
          user: s
        }), true !== n ? (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  k = () => {
    let e = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      s = module.map(e => ({
        label: e.id,
        value: e.id
      })),
      a = Chunk73800.useCallback(e => (0, i.jsx)(w, {
        userId: e.value,
        avatarSize: o.EFr.SIZE_24
      }), []);
    return (0, Chunk255367.jsx)(Chunk481060.PhF, {
      className: Chunk37742.select,
      renderOptionLabel: a,
      renderOptionValue: e => {
        let [t] = e;
        return a(t)
      },
      serialize: e => e,
      select: e => {
        n(e), c.default.track(N.rMx.FAMILY_CENTER_ACTION, {
          action: T.YC.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: Chunk512722
    })
  },
  L = e => {
    let {
      userId: t
    } = e, n = (0, x.Z)(), r = (0, _.mq)(T.ne.ACTIVE), s = (0, m.Qr)(!!n), a = (0, _.Rd)(s);
    return n && 1 !== r.length ? (0, i.jsx)(k, {}) : (0, i.jsx)(w, {
      userId: t,
      subText: a
    })
  },
  B = e => {
    let {
      user: t
    } = e, n = Array.from(T.tx.entries()), r = (0, f.kE)(), s = (0, m.t3)(), a = (0, _.Rd)(s);
    return (0, i.jsxs)("div", {
      className: A.container,
      children: [(0, i.jsxs)("div", {
        className: A.connectedCounter,
        children: [(0, i.jsx)(Z, {}), (0, i.jsx)(R, {})]
      }), (0, i.jsxs)("div", {
        className: P.box,
        children: [(0, i.jsx)("div", {
          className: A.header,
          children: (0, i.jsx)(L, {
            userId: t.id
          })
        }), (0, i.jsxs)("div", {
          className: A.content,
          children: [(0, i.jsx)("div", {
            className: A.activityCounterRow,
            children: n.map(e => {
              let [t, n] = e;
              return (0, i.jsx)(j.Z, {
                displayType: t,
                header: n.tooltipHeader()
              }, "counter-".concat(t))
            })
          }), (0, i.jsx)("div", {
            className: A.activityOverview,
            children: r ? n.map(e => {
              let [t] = e;
              return (0, i.jsx)(D, {
                displayType: t
              }, "".concat(t, "-list"))
            }) : (0, i.jsx)(S.Z, {
              className: A.emptyActivity,
              text: null != a ? a : ""
            })
          })]
        })]
      })]
    })
  }