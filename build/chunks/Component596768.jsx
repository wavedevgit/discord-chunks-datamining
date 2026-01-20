/** Chunk was on 22979 **/
/** chunk id: 596768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
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
  Chunk975775 = require("./975775.jsx"),
  Chunk681619 = require("./681619.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk865362 = require("./865362.js"),
  Chunk663618 = require("./663618.js");
let T = [{
    key: "id",
    cellClassName: Chunk865362.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: Chunk865362.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: Chunk865362.locationColumn,
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
          excluded: i,
          timestamp: s,
          location: o,
          previouslyTracked: c
        }
      } = e, u = d()(s);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(f.ZP, {
          className: l()(E.headerBar, S.subPanelHeaderBar),
          children: [(0, a.jsx)(f.ZP.Icon, {
            icon: p.IeX,
            tooltip: t
          }), (0, a.jsx)(f.ZP.Title, {
            children: t
          })]
        }), (0, a.jsxs)(v.E, {
          className: S.commonProperties,
          children: [(0, a.jsx)(v.Z9, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: s.toISOString(),
              title: (0, b.vc)(u, "LLLL"),
              children: (0, b.Y4)(u)
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
              value: i
            })
          }), (0, a.jsx)(v.Z9, {
            name: "Previously tracked",
            children: (0, a.jsx)(v.wl, {
              value: c
            })
          }), (0, a.jsx)(v.Z9, {
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
  let [e, t] = r.useState(""), n = r.useRef(null), i = (0, u.Wu)([x.Z], () => x.Z.loggedTriggers), s = r.useMemo(() => i.filter(t => 0 === e.length || o()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [i, e]), [c, d] = r.useState(true), f = s.find(e => e.key === c), {
    TabBar: b,
    renderSelectedTab: v
  } = (0, C.ZP)({
    tabs: O
  }, []), N = (0, u.e7)([x.Z], () => x.Z.trackTriggers), P = r.useCallback(e => {
    h.Z.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []), w = N ? "Stop Tracking" : "Start Tracking";
  return (0, a.jsxs)("div", {
    ref: n,
    className: l()(E.panel, S.panel),
    children: [(0, a.jsxs)("div", {
      className: S.toolbar,
      children: [(0, a.jsx)(m.u, {
        text: w,
        children: (0, a.jsx)(p.hU, {
          size: "sm",
          variant: N ? "active" : "primary",
          icon: N ? p.fpf : p.o1U,
          "aria-label": w,
          onClick: () => P(!N)
        })
      }), (0, a.jsx)(p.E1j, {
        size: "sm",
        query: e,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search by experiment id"
      }), (0, a.jsx)(p.hU, {
        size: "sm",
        variant: "icon-only",
        "aria-label": _.intl.string(_.t.VkKicb),
        icon: p.XHJ,
        onClick: g.Zw
      })]
    }), (0, a.jsx)(y.Z, {
      columns: T,
      data: s,
      selectedRowKey: c,
      onClickRow: e => d(e.key)
    }), null != f && (0, a.jsxs)(j.Z, {
      className: S.subPanel,
      minHeight: 100,
      initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(b, {}), v({
        loggedTrigger: f
      })]
    })]
  })
}