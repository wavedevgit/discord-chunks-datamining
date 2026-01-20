/** Chunk was on 63141 **/
/** chunk id: 312178, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk26229 = require("./26229.jsx"),
  Chunk552062 = require("./552062.jsx"),
  Chunk355863 = require("./355863.js"),
  Chunk237997 = require("./237997.js"),
  Chunk451478 = require("./451478.js"),
  Chunk434529 = require("./434529.js"),
  Chunk145597 = require("./145597.js"),
  Chunk382790 = require("./382790.jsx"),
  Chunk990673 = require("./990673.jsx"),
  Chunk906037 = require("./906037.js"),
  Chunk430036 = require("./430036.jsx"),
  Chunk839434 = require("./839434.jsx"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let x = {
  [Chunk981631.Odu.TEXT](e) {
    let {
      dragging: t,
      locked: n,
      pinned: r,
      dragStart: s,
      className: o
    } = e;
    return (0, i.jsx)(y.Z, {
      dragStart: s,
      locked: n,
      pinned: r,
      dragging: t,
      className: o
    })
  },
  [Chunk981631.Odu.GUILDS](e) {
    let {
      locked: t,
      dragStart: n,
      className: r
    } = e;
    return (0, i.jsx)(g.Z, {
      dragStart: n,
      locked: t,
      className: r
    })
  },
  [Chunk981631.Odu.VOICE](e) {
    let {
      id: t,
      anchor: n,
      isPreviewingInGame: r,
      locked: s,
      pinned: o
    } = e;
    return (0, i.jsx)(v.Z, {
      anchor: n,
      id: t,
      locked: s,
      pinned: o,
      widget: O.Odu.VOICE,
      isPreviewingInGame: r
    })
  },
  [Chunk981631.Odu.GUILDS_TEXT](e) {
    let {
      dragging: t,
      locked: n,
      dragStart: r,
      className: s
    } = e;
    return (0, i.jsx)(m.Z, {
      dragStart: r,
      dragging: t,
      locked: n,
      pinned: false,
      className: s
    })
  }
};
class S extends Chunk473749.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (a.Z.track(O.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
      lastLayoutUpdate: null
    }))
  }
  renderWidget(e, t, n) {
    let {
      props: {
        locked: i,
        isPreviewingInGame: r
      },
      state: {
        dragging: s
      }
    } = this, o = x[e.type];
    return null == o ? null : a => o({
      id: e.id,
      locked: i,
      pinned: e.pinned,
      dragging: s,
      isPreviewingInGame: r,
      anchor: t,
      size: n,
      dragStart: a
    })
  }
  render() {
    let {
      widget: e,
      widgetConfig: t,
      layoutSize: n,
      locked: r,
      isPreviewingInGame: s,
      isActiveRegion: o
    } = this.props;
    if (null == e || null == t) return null;
    let {
      id: a,
      pinned: l,
      zIndex: d,
      size: u,
      anchor: h,
      minSize: p
    } = e, g = (0, f.w_)(u, n), m = (0, f.KR)(h, n), {
      resizeX: y,
      resizeY: v,
      dragAnywhere: O
    } = t, E = (0, b.eM)({
      locked: r,
      isPreviewingInGame: s,
      pinned: l
    }), x = {
      minX: 0,
      minY: 0,
      maxX: n.width,
      maxY: n.height
    }, S = this.renderWidget(e, m, g);
    return null == S ? null : (0, i.jsx)(c.Z, {
      id: a,
      size: g,
      anchor: m,
      container: x,
      minSize: p,
      hidden: !E,
      resizeX: y,
      resizeY: v,
      style: {
        zIndex: d
      },
      dragAnywhere: O,
      active: !r || o,
      onUpdate: this.handleUpdate,
      onClick: this.handleFocus,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      children: S
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      lastLayoutUpdate: null,
      dragging: false
    }), E(this, "handleUpdate", (e, t, n, i, r) => {
      let {
        props: {
          layoutSize: s
        },
        state: {
          lastLayoutUpdate: a
        }
      } = this;
      if (!(0, p.validResolution)(s)) return;
      let l = (0, f.jL)(n, s),
        u = (0, f.Ox)(i, s);
      (0, o.Os)(t), (0, o.nv)({
        widgetId: t,
        anchor: l,
        size: u
      });
      let h = e === c.B.MOVE,
        g = (0, f.PY)(n, s.width, s.height, r.width, r.height);
      this.setState({
        lastLayoutUpdate: {
          was_resized: null != a && a.was_resized || !h,
          was_dragged: null != a && a.was_dragged || h,
          widget_type: d.Z.getWidgetType(t),
          window_width: s.width,
          window_height: s.height,
          widget_width: r.width,
          widget_height: r.height,
          widget_left: g.left,
          widget_top: g.top
        }
      })
    }), E(this, "handleFocus", e => {
      let {
        layoutSize: t
      } = this.props;
      (0, p.validResolution)(t) && (0, o.Os)(e)
    }), E(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && a.Z.setPreviewInGameMode(true), this.setState({
        dragging: true
      }))
    }), E(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && a.Z.setPreviewInGameMode(false), this.setState({
        dragging: false
      }))
    })
  }
}
let Z = Chunk442837.ZP.connectStores([Chunk355863.Z, Chunk237997.default], e => {
  let {
    widgetId: t
  } = e, n = d.Z.getWidget(t), i = u.default.getActiveRegions();
  return {
    widget: n,
    widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
    locked: u.default.isInstanceLocked(),
    isPreviewingInGame: u.default.isPreviewingInGame(),
    isActiveRegion: null != n && n.type === O.Odu.TEXT && i.has(O.O0n.TEXT_WIDGET)
  }
})(S);

function j(e, t) {
  return (0, i.jsx)(Z, {
    widgetId: e,
    layoutSize: t
  }, e)
}
let _ = Chunk442837.ZP.connectStores([Chunk355863.Z, Chunk451478.Z], () => {
  var e;
  return {
    layout: null != (e = d.Z.getLayout(p.OVERLAY_LAYOUT_ID)) ? e : true,
    layoutSize: h.Z.windowSize(),
    renderWidget: j
  }
})(Chunk26229.Z)