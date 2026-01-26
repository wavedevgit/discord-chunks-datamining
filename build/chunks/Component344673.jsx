/** Chunk was on 65298 **/
/** chunk id: 344673, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk91871 = require("./91871.js"),
  o = require.n(Chunk91871),
  Chunk989349 = require("./989349.js"),
  d = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk58736 = require("./58736.jsx"),
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
let O = [{
    key: "id",
    cellClassName: Chunk76584.Hz,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: Chunk76584.QN,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: Chunk76584.QN,
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
    group: Chunk231643.fu.NONE,
    render: e => {
      let {
        loggedTrigger: {
          experimentId: t,
          descriptor: n,
          exposureType: l,
          excluded: r,
          timestamp: s,
          location: o,
          previouslyTracked: c
        }
      } = e, u = d()(s);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(x.Ay, {
          className: i()(S.jr, C.nZ),
          children: [(0, a.jsx)(x.Ay.Icon, {
            icon: p.Uy2,
            tooltip: t
          }), (0, a.jsx)(x.Ay.Title, {
            children: t
          })]
        }), (0, a.jsxs)(v.OA, {
          className: C.ZK,
          children: [(0, a.jsx)(v.mA, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: s.toISOString(),
              title: (0, g.i$)(u, "LLLL"),
              children: (0, g.mk)(u)
            })
          }), "guild" === n.type && (0, a.jsx)(v.mA, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: n.guildId
            })
          }), (0, a.jsx)(v.mA, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: n.bucket
            })
          }), (0, a.jsx)(v.mA, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: n.revision
            })
          }), (0, a.jsx)(v.mA, {
            name: "Override",
            children: (0, a.jsx)(v.HY, {
              value: n.override
            })
          }), (0, a.jsx)(v.mA, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: l
            })
          }), (0, a.jsx)(v.mA, {
            name: "Excluded",
            children: (0, a.jsx)(v.HY, {
              value: r
            })
          }), (0, a.jsx)(v.mA, {
            name: "Previously tracked",
            children: (0, a.jsx)(v.HY, {
              value: c
            })
          }), (0, a.jsx)(v.mA, {
            name: "Location",
            children: (0, a.jsx)("code", {
              children: o
            })
          })]
        })]
      })
    }
  }];

function E() {
  let [e, t] = l.useState(""), n = l.useRef(null), r = (0, u.yK)([f.A], () => f.A.loggedTriggers), s = l.useMemo(() => r.filter(t => 0 === e.length || o()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [r, e]), [c, d] = l.useState(true), x = s.find(e => e.key === c), {
    TabBar: g,
    renderSelectedTab: v
  } = (0, y.Ay)({
    tabs: T
  }, []), E = (0, u.bG)([f.A], () => f.A.trackTriggers), N = l.useCallback(e => {
    h.h.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []), w = E ? "Stop Tracking" : "Start Tracking";
  return (0, a.jsxs)("div", {
    ref: n,
    className: i()(S.nd, C.nd),
    children: [(0, a.jsxs)("div", {
      className: C.rh,
      children: [(0, a.jsx)(m.m_, {
        text: w,
        children: (0, a.jsx)(p.K0, {
          size: "sm",
          variant: E ? "active" : "primary",
          icon: E ? p.E$n : p.udU,
          "aria-label": w,
          onClick: () => N(!E)
        })
      }), (0, a.jsx)(p.IWV, {
        size: "sm",
        query: e,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search by experiment id"
      }), (0, a.jsx)(p.K0, {
        size: "sm",
        variant: "icon-only",
        "aria-label": A.intl.string(A.t.VkKicb),
        icon: p.ucK,
        onClick: b.eY
      })]
    }), (0, a.jsx)(_.A, {
      columns: O,
      data: s,
      selectedRowKey: c,
      onClickRow: e => d(e.key)
    }), null != x && (0, a.jsxs)(j.A, {
      className: C.rf,
      minHeight: 100,
      initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(g, {}), v({
        loggedTrigger: x
      })]
    })]
  })
}