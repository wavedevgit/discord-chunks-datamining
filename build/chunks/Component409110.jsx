/** Chunk was on 84018 **/
/** chunk id: 409110, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk231679 = require("./231679.jsx"),
  Chunk685603 = require("./685603.jsx"),
  Chunk555528 = require("./555528.js"),
  Chunk256415 = require("./256415.js"),
  Chunk531685 = require("./531685.js"),
  Chunk5463 = require("./5463.js"),
  Chunk9302 = require("./9302.js"),
  Chunk328913 = require("./328913.jsx"),
  Chunk131575 = require("./131575.jsx"),
  Chunk799808 = require("./799808.js"),
  Chunk407195 = require("./407195.jsx"),
  Chunk61714 = require("./61714.jsx"),
  Chunk652215 = require("./652215.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = {
  [Chunk652215.uss.TEXT](e) {
    let {
      dragging: t,
      locked: n,
      pinned: r,
      dragStart: s,
      className: l
    } = e;
    return (0, i.jsx)(A.A, {
      dragStart: s,
      locked: n,
      pinned: r,
      dragging: t,
      className: l
    })
  },
  [Chunk652215.uss.GUILDS](e) {
    let {
      locked: t,
      dragStart: n,
      className: r
    } = e;
    return (0, i.jsx)(b.A, {
      dragStart: n,
      locked: t,
      className: r
    })
  },
  [Chunk652215.uss.VOICE](e) {
    let {
      id: t,
      anchor: n,
      isPreviewingInGame: r,
      locked: s,
      pinned: l
    } = e;
    return (0, i.jsx)(m.A, {
      anchor: n,
      id: t,
      locked: s,
      pinned: l,
      widget: O.uss.VOICE,
      isPreviewingInGame: r
    })
  },
  [Chunk652215.uss.GUILDS_TEXT](e) {
    let {
      dragging: t,
      locked: n,
      dragStart: r,
      className: s
    } = e;
    return (0, i.jsx)(g.A, {
      dragStart: r,
      dragging: t,
      locked: n,
      pinned: false,
      className: s
    })
  }
};
class x extends Chunk64700.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.A.track(O.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
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
    } = this, l = E[e.type];
    return null == l ? null : o => l({
      id: e.id,
      locked: i,
      pinned: e.pinned,
      dragging: s,
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
      isPreviewingInGame: s,
      isActiveRegion: l
    } = this.props;
    if (null == e || null == t) return null;
    let {
      id: o,
      pinned: a,
      zIndex: d,
      size: u,
      anchor: h,
      minSize: f
    } = e, b = (0, p.fd)(u, n), g = (0, p.Nv)(h, n), {
      resizeX: A,
      resizeY: m,
      dragAnywhere: O
    } = t, v = (0, y.AE)({
      locked: r,
      isPreviewingInGame: s,
      pinned: a
    }), E = {
      minX: 0,
      minY: 0,
      maxX: n.width,
      maxY: n.height
    }, x = this.renderWidget(e, g, b);
    return null == x ? null : (0, i.jsx)(c.A, {
      id: o,
      size: b,
      anchor: g,
      container: E,
      minSize: f,
      hidden: !v,
      resizeX: A,
      resizeY: m,
      style: {
        zIndex: d
      },
      dragAnywhere: O,
      active: !r || l,
      onUpdate: this.handleUpdate,
      onClick: this.handleFocus,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      children: x
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      lastLayoutUpdate: null,
      dragging: false
    }), v(this, "handleUpdate", (e, t, n, i, r) => {
      let {
        props: {
          layoutSize: s
        },
        state: {
          lastLayoutUpdate: o
        }
      } = this;
      if (!(0, f.validResolution)(s)) return;
      let a = (0, p.NO)(n, s),
        u = (0, p.R9)(i, s);
      (0, l.uD)(t), (0, l.Ju)({
        widgetId: t,
        anchor: a,
        size: u
      });
      let h = e === c.P.MOVE,
        b = (0, p.Ly)(n, s.width, s.height, r.width, r.height);
      this.setState({
        lastLayoutUpdate: {
          was_resized: null != o && o.was_resized || !h,
          was_dragged: null != o && o.was_dragged || h,
          widget_type: d.A.getWidgetType(t),
          window_width: s.width,
          window_height: s.height,
          widget_width: r.width,
          widget_height: r.height,
          widget_left: b.left,
          widget_top: b.top
        }
      })
    }), v(this, "handleFocus", e => {
      let {
        layoutSize: t
      } = this.props;
      (0, f.validResolution)(t) && (0, l.uD)(e)
    }), v(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.A.setPreviewInGameMode(true), this.setState({
        dragging: true
      }))
    }), v(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.A.setPreviewInGameMode(false), this.setState({
        dragging: false
      }))
    })
  }
}
let S = Chunk311907.Ay.connectStores([Chunk555528.A, Chunk256415.default], e => {
  let {
    widgetId: t
  } = e, n = d.A.getWidget(t), i = u.default.getActiveRegions();
  return {
    widget: n,
    widgetConfig: null != n ? d.A.getWidgetConfig(n.type) : null,
    locked: u.default.isInstanceLocked(),
    isPreviewingInGame: u.default.isPreviewingInGame(),
    isActiveRegion: null != n && n.type === O.uss.TEXT && i.has(O.ajI.TEXT_WIDGET)
  }
})(x);

function j(e, t) {
  return (0, i.jsx)(S, {
    widgetId: e,
    layoutSize: t
  }, e)
}
let _ = Chunk311907.Ay.connectStores([Chunk555528.A, Chunk531685.A], () => {
  var e;
  return {
    layout: null != (e = d.A.getLayout(f.OVERLAY_LAYOUT_ID)) ? e : true,
    layoutSize: h.A.windowSize(),
    renderWidget: j
  }
})(Chunk231679.A)