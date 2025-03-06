/** Chunk was on 93886 **/
n.d(t, {
  Z: () => R
}), n(47120), n(26686);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(913527),
  s = n.n(o),
  c = n(852229),
  d = n(442837),
  u = n(481060),
  m = n(129861),
  h = n(665149),
  p = n(886118),
  f = n(301801),
  x = n(594174),
  b = n(55935),
  _ = n(120816),
  g = n(31336),
  v = n(257785),
  j = n(484036),
  y = n(681619),
  C = n(621060),
  O = n(388032),
  N = n(871133),
  T = n(710662);
let S = [{
  key: "event",
  cellClassName: N.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: N.locationColumn,
  render(e) {
    let {
      properties: t
    } = e;
    return null == t.location ? null : t.location
  }
}];

function E(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(u.zJl, {
    className: N.customPropertiesContainer,
    children: (0, r.jsx)("dl", {
      children: t
    })
  })
}

function k(e) {
  let {
    name: t,
    children: n,
    copyValue: i
  } = e, [l, o] = a.useState(!1);
  return a.useEffect(() => {
    if (l) {
      let e = setTimeout(() => o(!1), 1e3);
      return () => clearTimeout(e)
    }
  }, [l]), (0, r.jsxs)("div", {
    className: N.customProperty,
    children: [(0, r.jsx)("dt", {
      className: N.customPropertiesName,
      children: t
    }), (0, r.jsx)("dd", {
      children: n
    }), (0, r.jsx)(u.P3F, {
      tag: "span",
      className: N.copyPropertyButton,
      onClick: () => {
        (0, c.J)(JSON.stringify(i)), o(!0)
      },
      children: l ? (0, r.jsx)(u.kmB, {
        color: "currentColor",
        size: "sm"
      }) : (0, r.jsx)(u.TIy, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}
let I = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedEvent: {
          event: t,
          properties: n,
          timestamp: a,
          fingerprint: i
        },
        onClose: o
      } = e, d = x.default.getUser(i), p = s()(a);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(h.ZP, {
          className: l()(T.headerBar, N.subPanelHeaderBar),
          children: [(0, r.jsx)(h.ZP.Icon, {
            icon: u.IeX,
            tooltip: t
          }), (0, r.jsxs)(h.ZP.Title, {
            wrapperClassName: N.headerTitle,
            children: [t, (0, r.jsx)(u.P3F, {
              tag: "span",
              className: N.copyEventButton,
              onClick: () => (0, c.J)(t),
              children: (0, r.jsx)(u.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, r.jsx)(h.ZP.Icon, {
            icon: u.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, c.J)(JSON.stringify(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = r
                  })
                }
                return e
              }({
                event: t,
                timestamp: a,
                fingerprint: i,
                user: null == d ? void 0 : d.id
              }, n), (e, t) => void 0 === t ? null : t, 2))
            }
          }), (0, r.jsx)(h.ZP.Icon, {
            icon: u.k$p,
            tooltip: "Close",
            onClick: o
          })]
        }), (0, r.jsxs)(v.E, {
          className: N.commonProperties,
          children: [(0, r.jsx)(v.Z9, {
            name: "Timestamp (local)",
            copyValue: a.toISOString(),
            children: (0, r.jsxs)("time", {
              dateTime: a.toISOString(),
              title: (0, b.vc)(p, "LLLL"),
              children: ["(", s().locale(), ") ", (0, b.Y4)(p)]
            })
          }), null != d && (0, r.jsx)(v.Z9, {
            name: "User",
            copyValue: d.id,
            children: (0, r.jsx)(m.Z, {
              user: d
            })
          }), (0, r.jsx)(v.Z9, {
            name: "Fingerprint",
            copyValue: i,
            children: (0, r.jsx)("code", {
              children: i
            })
          })]
        }), (0, r.jsx)(E, {
          children: Object.entries(n).map(e => {
            let [t, n] = e;
            return (0, r.jsx)(k, {
              name: "".concat(t, ":"),
              copyValue: {
                [t]: n || null
              },
              children: null != n ? (0, r.jsx)("code", {
                children: JSON.stringify(n)
              }) : (0, r.jsx)("code", {
                className: N.emptyProperty,
                children: "null"
              })
            }, t)
          })
        })]
      })
    }
  }],
  w = {
    events: {
      label: "Events",
      filter: e => Object.entries(w).filter(e => {
        let [t] = e;
        return "events" !== t
      }).map(t => {
        let [n, {
          filter: r
        }] = t;
        return !r(e)
      }).every(e => e)
    },
    experiments: {
      label: "Experiments",
      filter: e => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event)
    },
    impressions: {
      label: "Impressions",
      filter: e => e.event.startsWith("impression_")
    },
    networkActions: {
      label: "Network",
      filter: e => e.event.startsWith("network_action")
    }
  },
  P = e => {
    let {
      event: t,
      properties: n
    } = e;
    return null != n.location ? [t, n.location] : t
  },
  Z = {
    searchType: p.S.REGEX
  };

function R() {
  let e = a.useRef(null),
    [t, n] = a.useState(""),
    i = (0, d.e7)([_.Z], () => _.Z.loggedEventsVersion),
    [o, s] = a.useState(() => Object.keys(w)),
    [c, m] = a.useState(_.Z.loggedEvents),
    h = a.useCallback(e => {
      m(e)
    }, []),
    p = (0, f.c)(P, h, Z),
    x = c.filter(e => {
      for (let t of o)
        if (w[t].filter(e)) return !0;
      return !1
    });
  a.useEffect(() => {
    p(t, _.Z.loggedEvents)
  }, [t, p, i]);
  let [b, v] = a.useState(void 0), E = x.find(e => e.key === b), {
    TabBar: k,
    renderSelectedTab: R
  } = (0, C.Z)({
    tabs: I
  }, []);
  return (0, r.jsxs)("div", {
    ref: e,
    className: l()(T.panel, N.panel),
    children: [(0, r.jsxs)("div", {
      className: N.toolbar,
      children: [(0, r.jsx)(u.zxk, {
        className: N.toolbarButton,
        look: u.zxk.Looks.BLANK,
        size: u.zxk.Sizes.ICON,
        onClick: g.Zw,
        children: (0, r.jsx)("span", {
          title: O.NW.string(O.t.VkKicX),
          children: (0, r.jsx)(u.XHJ, {
            size: "md",
            color: "currentColor",
            "aria-label": O.NW.string(O.t.VkKicX)
          })
        })
      }), (0, r.jsx)("div", {
        className: N.toolbarDivider
      }), (0, r.jsx)("div", {
        className: N.filters,
        children: Object.entries(w).map(e => {
          let [t, n] = e;
          return (0, r.jsx)(u.P3F, {
            className: l()(N.filter, o.includes(t) && N.activeFilter),
            onClick: () => {
              s(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: n.label
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: N.toolbar,
      children: (0, r.jsx)(u.E1j, {
        className: N.searchBar,
        query: t,
        onChange: n,
        onClear: () => n(""),
        placeholder: "Search by event name"
      })
    }), (0, r.jsx)(y.Z, {
      columns: S,
      data: x,
      selectedRowKey: b,
      onClickRow: e => v(e.key)
    }), null != E && (0, r.jsxs)(j.Z, {
      className: N.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, r.jsx)(k, {}), R({
        loggedEvent: E,
        onClose: () => v(void 0)
      })]
    })]
  })
}