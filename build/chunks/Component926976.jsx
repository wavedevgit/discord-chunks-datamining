/** Chunk was on 22979 **/
/** chunk id: 926976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk975775 = require("./975775.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk865362 = require("./865362.js"),
  Chunk663618 = require("./663618.js");
let N = [{
  key: "event",
  cellClassName: Chunk865362.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: Chunk865362.locationColumn,
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
    copyValue: i
  } = e, [l, s] = r.useState(false);
  return r.useEffect(() => {
    if (l) {
      let e = setTimeout(() => s(false), 1e3);
      return () => clearTimeout(e)
    }
  }, [l]), (0, a.jsxs)("div", {
    className: T.customProperty,
    children: [(0, a.jsx)("dt", {
      className: T.customPropertiesName,
      children: t
    }), (0, a.jsx)("dd", {
      children: n
    }), (0, a.jsx)(u.P3F, {
      tag: "span",
      className: T.copyPropertyButton,
      onClick: () => (0, b.JG)(JSON.stringify(i), () => s(true)),
      children: l ? (0, a.jsx)(u.kmB, {
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
          timestamp: r,
          fingerprint: i
        },
        onClose: s,
        filteredEvents: c
      } = e, d = x.default.getUser(i), h = o()(r);
      return (0, a.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, a.jsxs)(p.ZP, {
          className: l()(O.headerBar, T.subPanelHeaderBar),
          children: [(0, a.jsx)(p.ZP.Icon, {
            icon: u.IeX,
            tooltip: t
          }), (0, a.jsxs)(p.ZP.Title, {
            wrapperClassName: T.headerTitle,
            children: [t, (0, a.jsx)(u.P3F, {
              tag: "span",
              className: T.copyEventButton,
              onClick: () => (0, b.JG)(t),
              children: (0, a.jsx)(u.TIy, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(p.ZP.Icon, {
            icon: u.TIy,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, b.JG)(JSON.stringify(function(e) {
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
                timestamp: r,
                fingerprint: i,
                user: null == d ? true : d.id
              }, n), (e, t) => true === t ? null : t, 2))
            }
          }), (0, a.jsx)(p.ZP.Icon, {
            icon: u.k$p,
            tooltip: "Close",
            onClick: s
          })]
        }), (0, a.jsxs)(y.E, {
          className: T.commonProperties,
          children: [(0, a.jsx)(y.Z9, {
            name: "Timestamp (local)",
            copyValue: r.toISOString(),
            children: (0, a.jsxs)("time", {
              dateTime: r.toISOString(),
              title: (0, g.vc)(h, "LLLL"),
              children: ["(", o().locale(), ") ", (0, g.Y4)(h)]
            })
          }), null != d && (0, a.jsx)(y.Z9, {
            name: "User",
            copyValue: d.id,
            children: (0, a.jsx)(m.Z, {
              user: d
            })
          }), (0, a.jsx)(y.Z9, {
            name: "Fingerprint",
            copyValue: i,
            children: (0, a.jsx)("code", {
              children: i
            })
          })]
        }), (0, a.jsx)(P, {
          children: Object.entries(n).map(e => {
            let [n, r] = e, i = I.has(n) ? ((e, t, n) => {
              let a = e.filter(e => e.event === t);
              if (0 === a.length) return {
                average: null,
                count: 0
              };
              let r = null,
                i = 0;
              for (let e of a) {
                let t = e.properties[n];
                "number" == typeof t && (i += 1, null == r ? r = t : r += t)
              }
              return {
                average: null !== r ? r / a.length : null,
                count: i
              }
            })(c, t, n) : null;
            return (0, a.jsxs)("div", {
              children: [(0, a.jsx)(w, {
                name: "".concat(n, ":"),
                copyValue: {
                  [n]: r || null
                },
                children: null != r ? (0, a.jsx)("code", {
                  children: JSON.stringify(r)
                }) : (0, a.jsx)("code", {
                  className: T.emptyProperty,
                  children: "null"
                })
              }, n), null !== i && null !== i.average && (0, a.jsx)(w, {
                name: "".concat(n, "_avg:"),
                copyValue: {
                  [n]: r || null
                },
                children: (0, a.jsxs)("code", {
                  children: [i.average.toFixed(3), " (", i.count, ")"]
                })
              }, "".concat(n, "_avg"))]
            }, "".concat(n, "_container"))
          })
        })]
      })
    }
  }],
  R = {
    events: {
      label: "Events",
      filter: e => Object.entries(R).filter(e => {
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
  A = {
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

function D() {
  let e = r.useRef(null),
    [t, n] = r.useState(""),
    i = (0, c.e7)([v.Z], () => v.Z.loggedEventsVersion),
    [s, o] = r.useState(() => Object.keys(R)),
    [m, p] = r.useState(v.Z.loggedEvents),
    h = r.useCallback(e => {
      p(e)
    }, []);
  (0, f.BO)(t, v.Z.loggedEvents, h, A, [i]);
  let x = m.filter(e => {
      for (let t of s)
        if (R[t].filter(e)) returntrue;
      returnfalse
    }),
    [b, g] = r.useState(true),
    y = x.find(e => e.key === b),
    {
      TabBar: P,
      renderSelectedTab: w
    } = (0, S.ZP)({
      tabs: k
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(O.panel, T.panel),
    children: [(0, a.jsxs)("div", {
      className: T.toolbar,
      children: [(0, a.jsx)(d.zx, {
        className: T.toolbarButton,
        look: d.zx.Looks.BLANK,
        size: d.zx.Sizes.ICON,
        onClick: j.Zw,
        children: (0, a.jsx)("span", {
          title: E.intl.string(E.t.VkKicb),
          children: (0, a.jsx)(u.XHJ, {
            size: "md",
            color: "currentColor",
            "aria-label": E.intl.string(E.t.VkKicb)
          })
        })
      }), (0, a.jsx)("div", {
        className: T.toolbarDivider
      }), (0, a.jsx)("div", {
        className: T.filters,
        children: Object.entries(R).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(u.P3F, {
            className: l()(T.filter, s.includes(t) && T.activeFilter),
            onClick: () => {
              o(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: n.label
          }, t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: T.toolbar,
      children: (0, a.jsx)(u.E1j, {
        size: "sm",
        query: t,
        onChange: n,
        onClear: () => n(""),
        placeholder: "Search by event name"
      })
    }), (0, a.jsx)(_.Z, {
      columns: N,
      data: x,
      selectedRowKey: b,
      onClickRow: e => g(e.key)
    }), null != y && (0, a.jsxs)(C.Z, {
      className: T.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(P, {}), w({
        loggedEvent: y,
        onClose: () => g(true),
        filteredEvents: x
      })]
    })]
  })
}