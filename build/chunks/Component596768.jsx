/** Chunk was on 39297 **/
/** chunk id: 596768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk665149 = require("./665149.jsx"),
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
let T = [{
    key: "id",
    cellClassName: Chunk599832.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: Chunk599832.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: Chunk599832.locationColumn,
    render(e) {
      let {
        timestamp: t
      } = e;
      return t.toLocaleString()
    }
  }],
  O = [{
    id: "details",
    name: "Details",
    group: Chunk621060.v0.NONE,
    render: e => {
      let {
        loggedTrigger: {
          experimentId: t,
          descriptor: n,
          exposureType: r,
          excluded: l,
          timestamp: o,
          location: s,
          previouslyTracked: c
        }
      } = e, u = d()(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(x.ZP, {
          className: i()(E.headerBar, S.subPanelHeaderBar),
          children: [(0, a.jsx)(x.ZP.Icon, {
            icon: p.IeX,
            tooltip: t
          }), (0, a.jsx)(x.ZP.Title, {
            children: t
          })]
        }), (0, a.jsxs)(v.E, {
          className: S.commonProperties,
          children: [(0, a.jsx)(v.Z9, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: o.toISOString(),
              title: (0, g.vc)(u, "LLLL"),
              children: (0, g.Y4)(u)
            })
          }), "guild" === n.type && (0, a.jsx)(v.Z9, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: n.guildId
            })
          }), (0, a.jsx)(v.Z9, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: n.bucket
            })
          }), (0, a.jsx)(v.Z9, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: n.revision
            })
          }), (0, a.jsx)(v.Z9, {
            name: "Override",
            children: (0, a.jsx)(v.wl, {
              value: n.override
            })
          }), (0, a.jsx)(v.Z9, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: r
            })
          }), (0, a.jsx)(v.Z9, {
            name: "Excluded",
            children: (0, a.jsx)(v.wl, {
              value: l
            })
          }), (0, a.jsx)(v.Z9, {
            name: "Previously tracked",
            children: (0, a.jsx)(v.wl, {
              value: c
            })
          }), (0, a.jsx)(v.Z9, {
            name: "Location",
            children: (0, a.jsx)("code", {
              children: s
            })
          })]
        })]
      })
    }
  }];

function N() {
  let [e, t] = Chunk647438.useState(""), n = Chunk647438.useRef(null), l = (0, Chunk442837.Wu)([Chunk120816.Z], () => Chunk120816.Z.loggedTriggers), o = Chunk647438.useMemo(() => Chunk120356.filter(t => 0 === e.length || s()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [Chunk120356, module]), [c, d] = Chunk647438.useState(true), x = Chunk658722.find(e => e.key === c), {
    TabBar: g,
    renderSelectedTab: v
  } = (0, Chunk621060.ZP)({
    tabs: O
  }, []), N = (0, Chunk442837.e7)([Chunk120816.Z], () => Chunk120816.Z.trackTriggers), P = Chunk647438.useCallback(e => {
    h.Z.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []), I = N ? "Stop Tracking" : "Start Tracking";
  return (0, Chunk951288.jsxs)("div", {
    ref: require,
    className: i()(Chunk451429.panel, Chunk599832.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk599832.toolbar,
      children: [(0, Chunk951288.jsx)(Chunk681715.u, {
        text: I,
        children: (0, Chunk951288.jsx)(Chunk481060.hU, {
          size: "sm",
          variant: N ? "active" : "primary",
          icon: N ? Chunk481060.fpf : Chunk481060.o1U,
          "aria-label": I,
          onClick: () => P(!N)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: module,
        onChange: exports,
        onClear: () => exports(""),
        placeholder: "Search by experiment id"
      }), (0, Chunk951288.jsx)(Chunk481060.hU, {
        size: "sm",
        variant: "icon-only",
        "aria-label": Chunk388032.intl.string(Chunk388032.t.VkKicb),
        icon: Chunk481060.XHJ,
        onClick: Chunk31336.Zw
      })]
    }), (0, Chunk951288.jsx)(Chunk681619.Z, {
      columns: T,
      data: Chunk658722,
      selectedRowKey: Chunk913527,
      onClickRow: e => d(e.key)
    }), null != Chunk665149 && (0, Chunk951288.jsxs)(Chunk484036.Z, {
      className: Chunk599832.subPanel,
      minHeight: 100,
      initialHeight: null != require.current ? require.current.clientHeight / 2 : 300,
      children: [(0, Chunk951288.jsx)(Chunk55935, {}), Chunk257785({
        loggedTrigger: Chunk665149
      })]
    })]
  })
}