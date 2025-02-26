/** Chunk was on 93886 **/
n.d(t, {
  Z: () => w
}), n(47120), n(26686);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(392711),
  s = n(913527),
  c = n.n(s),
  d = n(442837),
  u = n(481060),
  m = n(129861),
  h = n(665149),
  x = n(301801),
  f = n(594174),
  p = n(55935),
  b = n(120816),
  _ = n(31336),
  g = n(257785),
  v = n(484036),
  j = n(681619),
  y = n(621060),
  C = n(388032),
  N = n(414746),
  T = n(841699);
let O = [{
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

function S(e) {
  let {
    name: t,
    children: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("dt", {
      className: N.customPropertiesName,
      children: t
    }), (0, r.jsx)("dd", {
      className: N.customPropertiesValue,
      children: n
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
      } = e, s = f.default.getUser(i), d = c()(a);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(h.ZP, {
          className: l()(T.headerBar, N.subPanelHeaderBar),
          children: [(0, r.jsx)(h.ZP.Icon, {
            icon: u.IeX,
            tooltip: t
          }), (0, r.jsx)(h.ZP.Title, {
            wrapperClassName: T.headerTitle,
            children: t
          }), (0, r.jsx)(h.ZP.Icon, {
            icon: u.k$p,
            tooltip: "Close",
            onClick: o
          })]
        }), (0, r.jsxs)(g.E, {
          className: N.commonProperties,
          children: [(0, r.jsx)(g.Z9, {
            name: "Timestamp (local)",
            children: (0, r.jsxs)("time", {
              dateTime: a.toISOString(),
              title: (0, p.vc)(d, "LLLL"),
              children: [c().locale(), (0, p.Y4)(d)]
            })
          }), null != s && (0, r.jsx)(g.Z9, {
            name: "User",
            children: (0, r.jsx)(m.Z, {
              user: s
            })
          }), (0, r.jsx)(g.Z9, {
            name: "Fingerprint",
            children: (0, r.jsx)("code", {
              children: i
            })
          })]
        }), (0, r.jsx)(E, {
          children: Object.entries(n).map(e => {
            let [t, n] = e;
            return (0, r.jsx)(S, {
              name: "".concat(t, ":"),
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
  k = {
    events: {
      label: "Events",
      filter: e => Object.entries(k).filter(e => {
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
  };

function w() {
  let e = a.useRef(null),
    [t, n] = a.useState(""),
    i = (0, d.e7)([b.Z], () => b.Z.loggedEventsVersion),
    s = a.useMemo(() => b.Z.loggedEvents, [i]),
    [c, m] = a.useState(Object.keys(k)),
    [h, f] = a.useState(s),
    p = a.useRef(null),
    g = a.useMemo(() => (0, o.throttle)(async (e, t) => {
      if ("" === e) {
        f(t);
        return
      }
      p.current = (0, o.uniqueId)();
      let n = await (0, x.H)(t, e => {
        let {
          event: t
        } = e;
        return t
      }, e, !0);
      null != p.current && f(n)
    }, 300, {
      leading: !0
    }), []),
    E = a.useMemo(() => h.filter(e => {
      for (let t of c)
        if (k[t].filter(e)) return !0;
      return !1
    }), [h, c]);
  a.useEffect(() => {
    g(t, s)
  }, [t, g, s]);
  let [S, w] = a.useState(void 0), Z = E.find(e => e.key === S), {
    TabBar: P,
    renderSelectedTab: R
  } = (0, y.Z)({
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
        onClick: _.Zw,
        children: (0, r.jsx)("span", {
          title: C.NW.string(C.t.VkKicX),
          children: (0, r.jsx)(u.XHJ, {
            size: "md",
            color: "currentColor",
            "aria-label": C.NW.string(C.t.VkKicX)
          })
        })
      }), (0, r.jsx)("div", {
        className: N.toolbarDivider
      }), (0, r.jsx)("div", {
        className: N.filters,
        children: Object.entries(k).map(e => {
          let [t, n] = e;
          return (0, r.jsx)(u.P3F, {
            className: l()(N.filter, c.includes(t) && N.activeFilter),
            onClick: () => {
              m(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
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
    }), (0, r.jsx)(j.Z, {
      columns: O,
      data: E,
      selectedRowKey: S,
      onClickRow: e => w(e.key)
    }), null != Z && (0, r.jsxs)(v.Z, {
      className: N.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, r.jsx)(P, {}), R({
        loggedEvent: Z,
        onClose: () => w(void 0)
      })]
    })]
  })
}