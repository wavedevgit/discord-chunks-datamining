/** Chunk was on 93886 **/
/** chunk id: 926976, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk886118 = require("./886118.js"),
  Chunk301801 = require("./301801.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk120816 = require("./120816.js"),
  Chunk31336 = require("./31336.js"),
  Chunk257785 = require("./257785.jsx"),
  Chunk484036 = require("./484036.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk402369 = require("./402369.js"),
  Chunk881291 = require("./881291.js");
let S = [{
  key: "event",
  cellClassName: Chunk402369.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: Chunk402369.locationColumn,
  render(e) {
    let {
      properties: t
    } = e;
    return null == t.location ? null : t.location
  }
}];

function P(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)(u.zJl, {
    className: T.customPropertiesContainer,
    children: (0, n.jsx)("dl", {
      children: t
    })
  })
}

function w(e) {
  let {
    name: t,
    children: a,
    copyValue: l
  } = e, [i, s] = r.useState(false);
  return r.useEffect(() => {
    if (i) {
      let e = setTimeout(() => s(false), 1e3);
      return () => clearTimeout(e)
    }
  }, [i]), (0, n.jsxs)("div", {
    className: T.customProperty,
    children: [(0, n.jsx)("dt", {
      className: T.customPropertiesName,
      children: t
    }), (0, n.jsx)("dd", {
      children: a
    }), (0, n.jsx)(u.P3F, {
      tag: "span",
      className: T.copyPropertyButton,
      onClick: () => (0, f.JG)(JSON.stringify(l), () => s(true)),
      children: i ? (0, n.jsx)(u.kmB, {
        color: "currentColor",
        size: "sm"
      }) : (0, n.jsx)(u.TIy, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}
let I = new Set(["client_performance_cpu", "client_performance_memory"]),
  k = (e, t, a) => {
    let n = e.filter(e => e.event === t);
    if (0 === n.length) return {
      average: null,
      count: 0
    };
    let r = null,
      l = 0;
    for (let e of n) {
      let t = e.properties[a];
      "number" == typeof t && (l += 1, null == r ? r = t : r += t)
    }
    return {
      average: null !== r ? r / n.length : null,
      count: l
    }
  },
  R = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      let {
        loggedEvent: {
          event: t,
          properties: a,
          timestamp: r,
          fingerprint: l
        },
        onClose: s,
        filteredEvents: c
      } = e, d = b.default.getUser(l), h = o()(r);
      return (0, n.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, n.jsxs)(x.ZP, {
          className: i()(E.headerBar, T.subPanelHeaderBar),
          children: [(0, n.jsx)(x.ZP.Icon, {
            icon: u.IeX,
            tooltip: t
          }), (0, n.jsxs)(x.ZP.Title, {
            wrapperClassName: T.headerTitle,
            children: [t, (0, n.jsx)(u.P3F, {
              tag: "span",
              className: T.copyEventButton,
              onClick: () => (0, f.JG)(t),
              children: (0, n.jsx)(u.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, n.jsx)(x.ZP.Icon, {
            icon: u.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, f.JG)(JSON.stringify(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(a);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = a[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = n
                  })
                }
                return e
              }({
                event: t,
                timestamp: r,
                fingerprint: l,
                user: null == d ? true : d.id
              }, a), (e, t) => true === t ? null : t, 2))
            }
          }), (0, n.jsx)(x.ZP.Icon, {
            icon: u.k$p,
            tooltip: "Close",
            onClick: s
          })]
        }), (0, n.jsxs)(_.E, {
          className: T.commonProperties,
          children: [(0, n.jsx)(_.Z9, {
            name: "Timestamp (local)",
            copyValue: r.toISOString(),
            children: (0, n.jsxs)("time", {
              dateTime: r.toISOString(),
              title: (0, v.vc)(h, "LLLL"),
              children: ["(", o().locale(), ") ", (0, v.Y4)(h)]
            })
          }), null != d && (0, n.jsx)(_.Z9, {
            name: "User",
            copyValue: d.id,
            children: (0, n.jsx)(m.Z, {
              user: d
            })
          }), (0, n.jsx)(_.Z9, {
            name: "Fingerprint",
            copyValue: l,
            children: (0, n.jsx)("code", {
              children: l
            })
          })]
        }), (0, n.jsx)(P, {
          children: Object.entries(a).map(e => {
            let [a, r] = e, l = I.has(a) ? k(c, t, a) : null;
            return (0, n.jsxs)("div", {
              children: [(0, n.jsx)(w, {
                name: "".concat(a, ":"),
                copyValue: {
                  [a]: r || null
                },
                children: null != r ? (0, n.jsx)("code", {
                  children: JSON.stringify(r)
                }) : (0, n.jsx)("code", {
                  className: T.emptyProperty,
                  children: "null"
                })
              }, a), null !== l && null !== l.average && (0, n.jsx)(w, {
                name: "".concat(a, "_avg:"),
                copyValue: {
                  [a]: r || null
                },
                children: (0, n.jsxs)("code", {
                  children: [l.average.toFixed(3), " (", l.count, ")"]
                })
              }, "".concat(a, "_avg"))]
            }, "".concat(a, "_container"))
          })
        })]
      })
    }
  }],
  Z = {
    events: {
      label: "Events",
      filter: e => Object.entries(Z).filter(e => {
        let [t] = e;
        return "events" !== t
      }).map(t => {
        let [a, {
          filter: n
        }] = t;
        return !n(e)
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
  A = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        event: t,
        properties: a
      } = e;
      return null != a.location ? [t, a.location] : t
    },
    throttleMs: 100
  };

function D() {
  let e = Chunk73800.useRef(null),
    [t, a] = Chunk73800.useState(""),
    l = (0, Chunk442837.e7)([Chunk120816.Z], () => Chunk120816.Z.loggedEventsVersion),
    [s, o] = Chunk73800.useState(() => Object.keys(Z)),
    [m, x] = Chunk73800.useState(Chunk120816.Z.loggedEvents),
    h = Chunk73800.useCallback(e => {
      x(e)
    }, []);
  (0, Chunk301801.BO)(exports, Chunk120816.Z.loggedEvents, Chunk886118, A, [Chunk120356]);
  let b = Chunk129861.filter(e => {
      for (let t of s)
        if (Z[t].filter(e)) returntrue;
      returnfalse
    }),
    [f, v] = Chunk73800.useState(true),
    _ = Chunk594174.find(e => e.key === f),
    {
      TabBar: P,
      renderSelectedTab: w
    } = (0, Chunk621060.ZP)({
      tabs: R
    }, []);
  return (0, Chunk255367.jsxs)("div", {
    ref: module,
    className: i()(Chunk881291.panel, Chunk402369.panel),
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk402369.toolbar,
      children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
        className: Chunk402369.toolbarButton,
        look: Chunk755721.zx.Looks.BLANK,
        size: Chunk755721.zx.Sizes.ICON,
        onClick: Chunk31336.Zw,
        children: (0, Chunk255367.jsx)("span", {
          title: Chunk388032.intl.string(Chunk388032.t.VkKicX),
          children: (0, Chunk255367.jsx)(Chunk481060.XHJ, {
            size: "md",
            color: "currentColor",
            "aria-label": Chunk388032.intl.string(Chunk388032.t.VkKicX)
          })
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk402369.toolbarDivider
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk402369.filters,
        children: Object.entries(Z).map(e => {
          let [t, a] = e;
          return (0, n.jsx)(u.P3F, {
            className: i()(T.filter, s.includes(t) && T.activeFilter),
            onClick: () => {
              o(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: a.label
          }, t)
        })
      })]
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk402369.toolbar,
      children: (0, Chunk255367.jsx)(Chunk481060.E1j, {
        size: "sm",
        className: Chunk402369.searchBar,
        query: exports,
        onChange: require,
        onClear: () => require(""),
        placeholder: "Search by event name"
      })
    }), (0, Chunk255367.jsx)(Chunk681619.Z, {
      columns: S,
      data: Chunk594174,
      selectedRowKey: Chunk572004,
      onClickRow: e => v(e.key)
    }), null != Chunk257785 && (0, Chunk255367.jsxs)(Chunk484036.Z, {
      className: Chunk402369.subPanel,
      minHeight: 100,
      initialHeight: null != module.current ? module.current.clientHeight / 2 : 300,
      children: [(0, Chunk255367.jsx)(P, {}), w({
        loggedEvent: Chunk257785,
        onClose: () => Chunk55935(true),
        filteredEvents: Chunk594174
      })]
    })]
  })
}