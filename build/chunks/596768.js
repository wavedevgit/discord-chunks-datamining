/** Chunk was on 93886 **/
n.d(t, {
  Z: () => S
}), n(47120), n(230036);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(658722),
  s = n.n(o),
  c = n(913527),
  d = n.n(c),
  u = n(442837),
  m = n(481060),
  h = n(570140),
  p = n(665149),
  f = n(55935),
  x = n(120816),
  b = n(31336),
  _ = n(257785),
  g = n(484036),
  v = n(681619),
  j = n(621060),
  y = n(388032),
  C = n(871133),
  O = n(710662);
let N = [{
    key: "id",
    cellClassName: C.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: C.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: C.locationColumn,
    render(e) {
      let {
        timestamp: t
      } = e;
      return t.toLocaleString()
    }
  }],
  T = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedTrigger: {
          experimentId: t,
          descriptor: n,
          exposureType: a,
          excluded: i,
          timestamp: o,
          location: s,
          previouslyTracked: c
        }
      } = e, u = d()(o);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(p.ZP, {
          className: l()(O.headerBar, C.subPanelHeaderBar),
          children: [(0, r.jsx)(p.ZP.Icon, {
            icon: m.IeX,
            tooltip: t
          }), (0, r.jsx)(p.ZP.Title, {
            children: t
          })]
        }), (0, r.jsxs)(_.E, {
          className: C.commonProperties,
          children: [(0, r.jsx)(_.Z9, {
            name: "Timestamp (local)",
            children: (0, r.jsx)("time", {
              dateTime: o.toISOString(),
              title: (0, f.vc)(u, "LLLL"),
              children: (0, f.Y4)(u)
            })
          }), "guild" === n.type && (0, r.jsx)(_.Z9, {
            name: "Guild ID",
            children: (0, r.jsx)("code", {
              children: n.guildId
            })
          }), (0, r.jsx)(_.Z9, {
            name: "Bucket",
            children: (0, r.jsx)("code", {
              children: n.bucket
            })
          }), (0, r.jsx)(_.Z9, {
            name: "Revision",
            children: (0, r.jsx)("code", {
              children: n.revision
            })
          }), (0, r.jsx)(_.Z9, {
            name: "Override",
            children: (0, r.jsx)(_.wl, {
              value: n.override
            })
          }), (0, r.jsx)(_.Z9, {
            name: "Exposure type",
            children: (0, r.jsx)("code", {
              children: a
            })
          }), (0, r.jsx)(_.Z9, {
            name: "Excluded",
            children: (0, r.jsx)(_.wl, {
              value: i
            })
          }), (0, r.jsx)(_.Z9, {
            name: "Previously tracked",
            children: (0, r.jsx)(_.wl, {
              value: c
            })
          }), (0, r.jsx)(_.Z9, {
            name: "Location",
            children: (0, r.jsx)("code", {
              children: s
            })
          })]
        })]
      })
    }
  }];

function S() {
  let [e, t] = a.useState(""), n = a.useRef(null), i = (0, u.Wu)([x.Z], () => x.Z.loggedTriggers), o = a.useMemo(() => i.filter(t => 0 === e.length || s()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [i, e]), [c, d] = a.useState(void 0), p = o.find(e => e.key === c), {
    TabBar: f,
    renderSelectedTab: _
  } = (0, j.Z)({
    tabs: T
  }, []), S = (0, u.e7)([x.Z], () => x.Z.trackTriggers), E = a.useCallback(e => {
    h.Z.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, r.jsxs)("div", {
    ref: n,
    className: l()(O.panel, C.panel),
    children: [(0, r.jsxs)("div", {
      className: C.toolbar,
      children: [(0, r.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: C.triggersEnable,
        children: (0, r.jsx)(m.rsf, {
          checked: S,
          onChange: E,
          className: C.__invalid_toolbarSwitch
        })
      }), (0, r.jsx)(m.zxk, {
        className: C.toolbarButton,
        look: m.zxk.Looks.BLANK,
        size: m.zxk.Sizes.ICON,
        onClick: b.Zw,
        children: (0, r.jsx)("span", {
          title: y.NW.string(y.t.VkKicX),
          children: (0, r.jsx)(m.XHJ, {
            size: "md",
            color: "currentColor",
            "aria-label": y.NW.string(y.t.VkKicX)
          })
        })
      }), (0, r.jsx)(m.E1j, {
        className: C.searchBar,
        query: e,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, r.jsx)(v.Z, {
      columns: N,
      data: o,
      selectedRowKey: c,
      onClickRow: e => d(e.key)
    }), null != p && (0, r.jsxs)(g.Z, {
      className: C.subPanel,
      minHeight: 100,
      initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
      children: [(0, r.jsx)(f, {}), _({
        loggedTrigger: p
      })]
    })]
  })
}