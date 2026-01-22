/** Chunk was on 22477 **/
/** chunk id: 344673, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
  E = [{
    id: "details",
    name: "Details",
    group: Chunk231643.fu.NONE,
    render: e => {
      let {
        loggedTrigger: {
          experimentId: t,
          descriptor: n,
          exposureType: l,
          excluded: i,
          timestamp: s,
          location: o,
          previouslyTracked: c
        }
      } = e, u = d()(s);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(f.Ay, {
          className: r()(S.jr, C.nZ),
          children: [(0, a.jsx)(f.Ay.Icon, {
            icon: p.Uy2,
            tooltip: t
          }), (0, a.jsx)(f.Ay.Title, {
            children: t
          })]
        }), (0, a.jsxs)(v.OA, {
          className: C.ZK,
          children: [(0, a.jsx)(v.mA, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: s.toISOString(),
              title: (0, x.i$)(u, "LLLL"),
              children: (0, x.mk)(u)
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
              value: i
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

function N() {
  let [e, t] = l.useState(""), n = l.useRef(null), i = (0, u.yK)([b.A], () => b.A.loggedTriggers), s = l.useMemo(() => i.filter(t => 0 === e.length || o()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [i, e]), [c, d] = l.useState(true), f = s.find(e => e.key === c), {
    TabBar: x,
    renderSelectedTab: v
  } = (0, _.Ay)({
    tabs: E
  }, []), N = (0, u.bG)([b.A], () => b.A.trackTriggers), T = l.useCallback(e => {
    h.h.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []), I = N ? "Stop Tracking" : "Start Tracking";
  return (0, a.jsxs)("div", {
    ref: n,
    className: r()(S.nd, C.nd),
    children: [(0, a.jsxs)("div", {
      className: C.rh,
      children: [(0, a.jsx)(m.m_, {
        text: I,
        children: (0, a.jsx)(p.K0, {
          size: "sm",
          variant: N ? "active" : "primary",
          icon: N ? p.E$n : p.udU,
          "aria-label": I,
          onClick: () => T(!N)
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
        onClick: g.eY
      })]
    }), (0, a.jsx)(y.A, {
      columns: O,
      data: s,
      selectedRowKey: c,
      onClickRow: e => d(e.key)
    }), null != f && (0, a.jsxs)(j.A, {
      className: C.rf,
      minHeight: 100,
      initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(x, {}), v({
        loggedTrigger: f
      })]
    })]
  })
}