/** Chunk was on 28532 **/
/** chunk id: 926976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
  Chunk599832 = require("./599832.js"),
  Chunk451429 = require("./451429.js");
let O = [{
  key: "event",
  cellClassName: Chunk599832.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: Chunk599832.locationColumn,
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
  return (0, a.jsx)(u.zJl, {
    className: T.customPropertiesContainer,
    children: (0, a.jsx)("dl", {
      children: t
    })
  })
}

function w(e) {
  let {
    name: t,
    children: n,
    copyValue: l
  } = e, [r, s] = i.useState(false);
  return i.useEffect(() => {
    if (r) {
      let e = setTimeout(() => s(false), 1e3);
      return () => clearTimeout(e)
    }
  }, [r]), (0, a.jsxs)("div", {
    className: T.customProperty,
    children: [(0, a.jsx)("dt", {
      className: T.customPropertiesName,
      children: t
    }), (0, a.jsx)("dd", {
      children: n
    }), (0, a.jsx)(u.P3F, {
      tag: "span",
      className: T.copyPropertyButton,
      onClick: () => (0, f.JG)(JSON.stringify(l), () => s(true)),
      children: r ? (0, a.jsx)(u.kmB, {
        color: "currentColor",
        size: "sm"
      }) : (0, a.jsx)(u.TIy, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}
let I = new Set(["client_performance_cpu", "client_performance_memory"]),
  k = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      let {
        loggedEvent: {
          event: t,
          properties: n,
          timestamp: i,
          fingerprint: l
        },
        onClose: s,
        filteredEvents: c
      } = e, d = g.default.getUser(l), h = o()(i);
      return (0, a.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, a.jsxs)(p.ZP, {
          className: r()(N.headerBar, T.subPanelHeaderBar),
          children: [(0, a.jsx)(p.ZP.Icon, {
            icon: u.IeX,
            tooltip: t
          }), (0, a.jsxs)(p.ZP.Title, {
            wrapperClassName: T.headerTitle,
            children: [t, (0, a.jsx)(u.P3F, {
              tag: "span",
              className: T.copyEventButton,
              onClick: () => (0, f.JG)(t),
              children: (0, a.jsx)(u.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(p.ZP.Icon, {
            icon: u.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, f.JG)(JSON.stringify(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), a.forEach(function(t) {
                    var a;
                    a = n[t], t in e ? Object.defineProperty(e, t, {
                      value: a,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = a
                  })
                }
                return e
              }({
                event: t,
                timestamp: i,
                fingerprint: l,
                user: null == d ? true : d.id
              }, n), (e, t) => true === t ? null : t, 2))
            }
          }), (0, a.jsx)(p.ZP.Icon, {
            icon: u.k$p,
            tooltip: "Close",
            onClick: s
          })]
        }), (0, a.jsxs)(_.E, {
          className: T.commonProperties,
          children: [(0, a.jsx)(_.Z9, {
            name: "Timestamp (local)",
            copyValue: i.toISOString(),
            children: (0, a.jsxs)("time", {
              dateTime: i.toISOString(),
              title: (0, b.vc)(h, "LLLL"),
              children: ["(", o().locale(), ") ", (0, b.Y4)(h)]
            })
          }), null != d && (0, a.jsx)(_.Z9, {
            name: "User",
            copyValue: d.id,
            children: (0, a.jsx)(m.Z, {
              user: d
            })
          }), (0, a.jsx)(_.Z9, {
            name: "Fingerprint",
            copyValue: l,
            children: (0, a.jsx)("code", {
              children: l
            })
          })]
        }), (0, a.jsx)(P, {
          children: Object.entries(n).map(e => {
            let [n, i] = e, l = I.has(n) ? ((e, t, n) => {
              let a = e.filter(e => e.event === t);
              if (0 === a.length) return {
                average: null,
                count: 0
              };
              let i = null,
                l = 0;
              for (let e of a) {
                let t = e.properties[n];
                "number" == typeof t && (l += 1, null == i ? i = t : i += t)
              }
              return {
                average: null !== i ? i / a.length : null,
                count: l
              }
            })(c, t, n) : null;
            return (0, a.jsxs)("div", {
              children: [(0, a.jsx)(w, {
                name: "".concat(n, ":"),
                copyValue: {
                  [n]: i || null
                },
                children: null != i ? (0, a.jsx)("code", {
                  children: JSON.stringify(i)
                }) : (0, a.jsx)("code", {
                  className: T.emptyProperty,
                  children: "null"
                })
              }, n), null !== l && null !== l.average && (0, a.jsx)(w, {
                name: "".concat(n, "_avg:"),
                copyValue: {
                  [n]: i || null
                },
                children: (0, a.jsxs)("code", {
                  children: [l.average.toFixed(3), " (", l.count, ")"]
                })
              }, "".concat(n, "_avg"))]
            }, "".concat(n, "_container"))
          })
        })]
      })
    }
  }],
  A = {
    events: {
      label: "Events",
      filter: e => Object.entries(A).filter(e => {
        let [t] = e;
        return "events" !== t
      }).map(t => {
        let [n, {
          filter: a
        }] = t;
        return !a(e)
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
  R = {
    searchType: Chunk886118.S.REGEX,
    searchStringGenerator: e => {
      let {
        event: t,
        properties: n
      } = e;
      return null != n.location ? [t, n.location] : t
    },
    throttleMs: 100
  };

function Z() {
  let e = Chunk647438.useRef(null),
    [t, n] = Chunk647438.useState(""),
    l = (0, Chunk442837.e7)([Chunk120816.Z], () => Chunk120816.Z.loggedEventsVersion),
    [s, o] = Chunk647438.useState(() => Object.keys(A)),
    [m, p] = Chunk647438.useState(Chunk120816.Z.loggedEvents),
    h = Chunk647438.useCallback(e => {
      p(e)
    }, []);
  (0, Chunk301801.BO)(exports, Chunk120816.Z.loggedEvents, Chunk886118, R, [Chunk120356]);
  let g = Chunk129861.filter(e => {
      for (let t of s)
        if (A[t].filter(e)) returntrue;
      returnfalse
    }),
    [f, b] = Chunk647438.useState(true),
    _ = Chunk594174.find(e => e.key === f),
    {
      TabBar: P,
      renderSelectedTab: w
    } = (0, Chunk621060.ZP)({
      tabs: k
    }, []);
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: r()(Chunk451429.panel, Chunk599832.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk599832.toolbar,
      children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
        className: Chunk599832.toolbarButton,
        look: Chunk755721.zx.Looks.BLANK,
        size: Chunk755721.zx.Sizes.ICON,
        onClick: Chunk31336.Zw,
        children: (0, Chunk951288.jsx)("span", {
          title: Chunk388032.intl.string(Chunk388032.t.VkKicb),
          children: (0, Chunk951288.jsx)(Chunk481060.XHJ, {
            size: "md",
            color: "currentColor",
            "aria-label": Chunk388032.intl.string(Chunk388032.t.VkKicb)
          })
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk599832.toolbarDivider
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk599832.filters,
        children: Object.entries(A).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(u.P3F, {
            className: r()(T.filter, s.includes(t) && T.activeFilter),
            onClick: () => {
              o(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: n.label
          }, t)
        })
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk599832.toolbar,
      children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: exports,
        onChange: require,
        onClear: () => require(""),
        placeholder: "Search by event name"
      })
    }), (0, Chunk951288.jsx)(Chunk681619.Z, {
      columns: O,
      data: Chunk594174,
      selectedRowKey: Chunk572004,
      onClickRow: e => b(e.key)
    }), null != Chunk257785 && (0, Chunk951288.jsxs)(Chunk484036.Z, {
      className: Chunk599832.subPanel,
      minHeight: 100,
      initialHeight: null != module.current ? module.current.clientHeight / 2 : 300,
      children: [(0, Chunk951288.jsx)(P, {}), w({
        loggedEvent: Chunk257785,
        onClose: () => Chunk55935(true),
        filteredEvents: Chunk594174
      })]
    })]
  })
}