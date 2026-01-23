/** Chunk was on 36054 **/
/** chunk id: 374058, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk58736 = require("./58736.jsx"),
  Chunk379078 = require("./379078.js"),
  Chunk704554 = require("./704554.js"),
  Chunk287809 = require("./287809.js"),
  Chunk957565 = require("./957565.js"),
  Chunk405269 = require("./405269.js"),
  Chunk967954 = require("./967954.js"),
  Chunk538064 = require("./538064.js"),
  Chunk708403 = require("./708403.jsx"),
  Chunk260880 = require("./260880.jsx"),
  Chunk303054 = require("./303054.jsx"),
  Chunk231643 = require("./231643.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk76584 = require("./76584.js"),
  Chunk661251 = require("./661251.js");
let E = [{
  key: "event",
  cellClassName: Chunk76584.Hz,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: Chunk76584.QN,
  render(e) {
    let {
      properties: t
    } = e;
    return null == t.location ? null : t.location
  }
}];

function N(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(u.IpV, {
    className: O._D,
    children: (0, a.jsx)("dl", {
      children: t
    })
  })
}

function w(e) {
  let {
    name: t,
    children: n,
    copyValue: r
  } = e, [i, s] = l.useState(false);
  return l.useEffect(() => {
    if (i) {
      let e = setTimeout(() => s(false), 1e3);
      return () => clearTimeout(e)
    }
  }, [i]), (0, a.jsxs)("div", {
    className: O.fY,
    children: [(0, a.jsx)("dt", {
      className: O.m2,
      children: t
    }), (0, a.jsx)("dd", {
      children: n
    }), (0, a.jsx)(u.DUT, {
      tag: "span",
      className: O.nH,
      onClick: () => (0, f.C)(JSON.stringify(r), () => s(true)),
      children: i ? (0, a.jsx)(u.Uzd, {
        color: "currentColor",
        size: "sm"
      }) : (0, a.jsx)(u.TdU, {
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
    group: Chunk231643.fu.NONE,
    render: e => {
      let {
        loggedEvent: {
          event: t,
          properties: n,
          timestamp: l,
          fingerprint: r
        },
        onClose: s,
        filteredEvents: c
      } = e, d = g.default.getUser(r), h = o()(l);
      return (0, a.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, a.jsxs)(p.Ay, {
          className: i()(T.jr, O.nZ),
          children: [(0, a.jsx)(p.Ay.Icon, {
            icon: u.Uy2,
            tooltip: t
          }), (0, a.jsxs)(p.Ay.Title, {
            wrapperClassName: O.qd,
            children: [t, (0, a.jsx)(u.DUT, {
              tag: "span",
              className: O.KE,
              onClick: () => (0, f.C)(t),
              children: (0, a.jsx)(u.TdU, {
                color: "currentColor",
                size: "sm"
              })
            })]
          }), (0, a.jsx)(p.Ay.Icon, {
            icon: u.TdU,
            tooltip: "Copy all properties",
            onClick: () => {
              (0, f.C)(JSON.stringify(function(e) {
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
                timestamp: l,
                fingerprint: r,
                user: null == d ? true : d.id
              }, n), (e, t) => true === t ? null : t, 2))
            }
          }), (0, a.jsx)(p.Ay.Icon, {
            icon: u.aXh,
            tooltip: "Close",
            onClick: s
          })]
        }), (0, a.jsxs)(_.OA, {
          className: O.ZK,
          children: [(0, a.jsx)(_.mA, {
            name: "Timestamp (local)",
            copyValue: l.toISOString(),
            children: (0, a.jsxs)("time", {
              dateTime: l.toISOString(),
              title: (0, b.i$)(h, "LLLL"),
              children: ["(", o().locale(), ") ", (0, b.mk)(h)]
            })
          }), null != d && (0, a.jsx)(_.mA, {
            name: "User",
            copyValue: d.id,
            children: (0, a.jsx)(m.A, {
              user: d
            })
          }), (0, a.jsx)(_.mA, {
            name: "Fingerprint",
            copyValue: r,
            children: (0, a.jsx)("code", {
              children: r
            })
          })]
        }), (0, a.jsx)(N, {
          children: Object.entries(n).map(e => {
            let [n, l] = e, r = I.has(n) ? ((e, t, n) => {
              let a = e.filter(e => e.event === t);
              if (0 === a.length) return {
                average: null,
                count: 0
              };
              let l = null,
                r = 0;
              for (let e of a) {
                let t = e.properties[n];
                "number" == typeof t && (r += 1, null == l ? l = t : l += t)
              }
              return {
                average: null !== l ? l / a.length : null,
                count: r
              }
            })(c, t, n) : null;
            return (0, a.jsxs)("div", {
              children: [(0, a.jsx)(w, {
                name: "".concat(n, ":"),
                copyValue: {
                  [n]: l || null
                },
                children: null != l ? (0, a.jsx)("code", {
                  children: JSON.stringify(l)
                }) : (0, a.jsx)("code", {
                  className: O.HO,
                  children: "null"
                })
              }, n), null !== r && null !== r.average && (0, a.jsx)(w, {
                name: "".concat(n, "_avg:"),
                copyValue: {
                  [n]: l || null
                },
                children: (0, a.jsxs)("code", {
                  children: [r.average.toFixed(3), " (", r.count, ")"]
                })
              }, "".concat(n, "_avg"))]
            }, "".concat(n, "_container"))
          })
        })]
      })
    }
  }],
  P = {
    events: {
      label: "Events",
      filter: e => Object.entries(P).filter(e => {
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
    searchType: Chunk379078.n.REGEX,
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
  let e = l.useRef(null),
    [t, n] = l.useState(""),
    r = (0, c.bG)([v.A], () => v.A.loggedEventsVersion),
    [s, o] = l.useState(() => Object.keys(P)),
    [m, p] = l.useState(v.A.loggedEvents),
    h = l.useCallback(e => {
      p(e)
    }, []);
  (0, x.RT)(t, v.A.loggedEvents, h, R, [r]);
  let g = m.filter(e => {
      for (let t of s)
        if (P[t].filter(e)) returntrue;
      returnfalse
    }),
    [f, b] = l.useState(true),
    _ = g.find(e => e.key === f),
    {
      TabBar: N,
      renderSelectedTab: w
    } = (0, C.Ay)({
      tabs: k
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: i()(T.nd, O.nd),
    children: [(0, a.jsxs)("div", {
      className: O.rh,
      children: [(0, a.jsx)(d.$n, {
        className: O.Q$,
        look: d.$n.Looks.BLANK,
        size: d.$n.Sizes.ICON,
        onClick: j.eY,
        children: (0, a.jsx)("span", {
          title: S.intl.string(S.t.VkKicb),
          children: (0, a.jsx)(u.ucK, {
            size: "md",
            color: "currentColor",
            "aria-label": S.intl.string(S.t.VkKicb)
          })
        })
      }), (0, a.jsx)("div", {
        className: O.Bi
      }), (0, a.jsx)("div", {
        className: O.uW,
        children: Object.entries(P).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(u.DUT, {
            className: i()(O.pb, s.includes(t) && O.bx),
            onClick: () => {
              o(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
            },
            children: n.label
          }, t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: O.rh,
      children: (0, a.jsx)(u.IWV, {
        size: "sm",
        query: t,
        onChange: n,
        onClear: () => n(""),
        placeholder: "Search by event name"
      })
    }), (0, a.jsx)(A.A, {
      columns: E,
      data: g,
      selectedRowKey: f,
      onClickRow: e => b(e.key)
    }), null != _ && (0, a.jsxs)(y.A, {
      className: O.rf,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(N, {}), w({
        loggedEvent: _,
        onClose: () => b(true),
        filteredEvents: g
      })]
    })]
  })
}