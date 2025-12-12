/** Chunk was on 63141 **/
/** chunk id: 312178, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = {
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
      widget: b.Odu.VOICE,
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
class x extends Chunk473749.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (l.Z.track(b.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
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
    } = this, o = E[e.type];
    return null == o ? null : l => o({
      id: e.id,
      locked: i,
      pinned: e.pinned,
      dragging: s,
      isPreviewingInGame: r,
      anchor: t,
      size: n,
      dragStart: l
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
    if (null == module || null == exports) return null;
    let {
      id: l,
      pinned: a,
      zIndex: d,
      size: u,
      anchor: h,
      minSize: f
    } = module, g = (0, Chunk434529.w_)(Chunk237997, require), m = (0, Chunk434529.KR)(Chunk451478, require), {
      resizeX: y,
      resizeY: v,
      dragAnywhere: b
    } = exports, O = (0, Chunk906037.eM)({
      locked: Chunk473749,
      isPreviewingInGame: Chunk442837,
      pinned: Chunk26229
    }), E = {
      minX: 0,
      minY: 0,
      maxX: require.width,
      maxY: require.height
    }, x = this.renderWidget(module, Chunk990673, Chunk382790);
    return null == x ? null : (0, Chunk54381.jsx)(Chunk552062.Z, {
      id: Chunk13245,
      size: Chunk382790,
      anchor: Chunk990673,
      container: E,
      minSize: Chunk145597,
      hidden: !O,
      resizeX: Chunk430036,
      resizeY: Chunk839434,
      style: {
        zIndex: Chunk355863
      },
      dragAnywhere: Chunk981631,
      active: !Chunk473749 || Chunk765250,
      onUpdate: this.handleUpdate,
      onClick: this.handleFocus,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      children: x
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      lastLayoutUpdate: null,
      dragging: false
    }), O(this, "handleUpdate", (e, t, n, i, r) => {
      let {
        props: {
          layoutSize: s
        },
        state: {
          lastLayoutUpdate: l
        }
      } = this;
      if (!(0, f.validResolution)(s)) return;
      let a = (0, p.jL)(n, s),
        u = (0, p.Ox)(i, s);
      (0, o.Os)(t), (0, o.nv)({
        widgetId: t,
        anchor: a,
        size: u
      });
      let h = e === c.B.MOVE,
        g = (0, p.PY)(n, s.width, s.height, r.width, r.height);
      this.setState({
        lastLayoutUpdate: {
          was_resized: null != l && l.was_resized || !h,
          was_dragged: null != l && l.was_dragged || h,
          widget_type: d.Z.getWidgetType(t),
          window_width: s.width,
          window_height: s.height,
          widget_width: r.width,
          widget_height: r.height,
          widget_left: g.left,
          widget_top: g.top
        }
      })
    }), O(this, "handleFocus", e => {
      let {
        layoutSize: t
      } = this.props;
      (0, f.validResolution)(t) && (0, o.Os)(e)
    }), O(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && l.Z.setPreviewInGameMode(true), this.setState({
        dragging: true
      }))
    }), O(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && l.Z.setPreviewInGameMode(false), this.setState({
        dragging: false
      }))
    })
  }
}
let S = Chunk442837.ZP.connectStores([Chunk355863.Z, Chunk237997.default], e => {
  let {
    widgetId: t
  } = e, n = d.Z.getWidget(t), i = u.default.getActiveRegions();
  return {
    widget: n,
    widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
    locked: u.default.isInstanceLocked(),
    isPreviewingInGame: u.default.isPreviewingInGame(),
    isActiveRegion: null != n && n.type === b.Odu.TEXT && i.has(b.O0n.TEXT_WIDGET)
  }
})(x);

function Z(e, t) {
  return (0, i.jsx)(S, {
    widgetId: e,
    layoutSize: t
  }, e)
}
let j = Chunk442837.ZP.connectStores([Chunk355863.Z, Chunk451478.Z], () => {
  var e;
  return {
    layout: null != (e = Chunk355863.Z.getLayout(Chunk145597.OVERLAY_LAYOUT_ID)) ? module : true,
    layoutSize: Chunk451478.Z.windowSize(),
    renderWidget: Z
  }
})(Chunk26229.Z)