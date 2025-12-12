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
      dragStart: a,
      className: s
    } = e;
    return (0, i.jsx)(y.Z, {
      dragStart: a,
      locked: n,
      pinned: r,
      dragging: t,
      className: s
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
      locked: a,
      pinned: s
    } = e;
    return (0, i.jsx)(v.Z, {
      anchor: n,
      id: t,
      locked: a,
      pinned: s,
      widget: O.Odu.VOICE,
      isPreviewingInGame: r
    })
  },
  [Chunk981631.Odu.GUILDS_TEXT](e) {
    let {
      dragging: t,
      locked: n,
      dragStart: r,
      className: a
    } = e;
    return (0, i.jsx)(b.Z, {
      dragStart: r,
      dragging: t,
      locked: n,
      pinned: false,
      className: a
    })
  }
};
class S extends Chunk473749.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.Z.track(O.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
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
        dragging: a
      }
    } = this, s = x[e.type];
    return null == s ? null : o => s({
      id: e.id,
      locked: i,
      pinned: e.pinned,
      dragging: a,
      isPreviewingInGame: r,
      anchor: t,
      size: n,
      dragStart: o
    })
  }
  render() {
    let {
      widget: e,
      widgetConfig: t,
      layoutSize: n,
      locked: r,
      isPreviewingInGame: a,
      isActiveRegion: s
    } = this.props;
    if (null == module || null == exports) return null;
    let {
      id: o,
      pinned: l,
      zIndex: d,
      size: u,
      anchor: f,
      minSize: p
    } = module, g = (0, Chunk434529.w_)(Chunk237997, require), b = (0, Chunk434529.KR)(Chunk451478, require), {
      resizeX: y,
      resizeY: v,
      dragAnywhere: O
    } = exports, E = (0, Chunk906037.eM)({
      locked: Chunk473749,
      isPreviewingInGame: Chunk442837,
      pinned: Chunk26229
    }), x = {
      minX: 0,
      minY: 0,
      maxX: require.width,
      maxY: require.height
    }, S = this.renderWidget(module, Chunk990673, Chunk382790);
    return null == S ? null : (0, Chunk54381.jsx)(Chunk552062.Z, {
      id: Chunk13245,
      size: Chunk382790,
      anchor: Chunk990673,
      container: x,
      minSize: Chunk145597,
      hidden: !E,
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
          layoutSize: a
        },
        state: {
          lastLayoutUpdate: o
        }
      } = this;
      if (!(0, p.validResolution)(a)) return;
      let l = (0, h.jL)(n, a),
        u = (0, h.Ox)(i, a);
      (0, s.Os)(t), (0, s.nv)({
        widgetId: t,
        anchor: l,
        size: u
      });
      let f = e === c.B.MOVE,
        g = (0, h.PY)(n, a.width, a.height, r.width, r.height);
      this.setState({
        lastLayoutUpdate: {
          was_resized: null != o && o.was_resized || !f,
          was_dragged: null != o && o.was_dragged || f,
          widget_type: d.Z.getWidgetType(t),
          window_width: a.width,
          window_height: a.height,
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
      (0, p.validResolution)(t) && (0, s.Os)(e)
    }), E(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.Z.setPreviewInGameMode(true), this.setState({
        dragging: true
      }))
    }), E(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.Z.setPreviewInGameMode(false), this.setState({
        dragging: false
      }))
    })
  }
}
let _ = Chunk442837.ZP.connectStores([Chunk355863.Z, Chunk237997.default], e => {
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

function Z(e, t) {
  return (0, i.jsx)(_, {
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