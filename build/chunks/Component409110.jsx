/** Chunk was on 84018 **/
/** chunk id: 409110, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = {
  [Chunk652215.uss.TEXT](e) {
    let {
      dragging: t,
      locked: n,
      pinned: r,
      dragStart: s,
      className: l
    } = e;
    return (0, i.jsx)(_.A, {
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
    return (0, i.jsx)(g.A, {
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
    return (0, i.jsx)(b.A, {
      anchor: n,
      id: t,
      locked: s,
      pinned: l,
      widget: A.uss.VOICE,
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
    return (0, i.jsx)(y.A, {
      dragStart: r,
      dragging: t,
      locked: n,
      pinned: false,
      className: s
    })
  }
};
class E extends Chunk64700.PureComponent {
  componentDidUpdate(e) {
    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.A.track(A.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
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
    } = this, l = v[e.type];
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
      anchor: p,
      minSize: f
    } = e, g = (0, h.fd)(u, n), y = (0, h.Nv)(p, n), {
      resizeX: _,
      resizeY: b,
      dragAnywhere: A
    } = t, O = (0, m.AE)({
      locked: r,
      isPreviewingInGame: s,
      pinned: a
    }), v = {
      minX: 0,
      minY: 0,
      maxX: n.width,
      maxY: n.height
    }, E = this.renderWidget(e, y, g);
    return null == E ? null : (0, i.jsx)(c.A, {
      id: o,
      size: g,
      anchor: y,
      container: v,
      minSize: f,
      hidden: !O,
      resizeX: _,
      resizeY: b,
      style: {
        zIndex: d
      },
      dragAnywhere: A,
      active: !r || l,
      onUpdate: this.handleUpdate,
      onClick: this.handleFocus,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      children: E
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
          lastLayoutUpdate: o
        }
      } = this;
      if (!(0, f.validResolution)(s)) return;
      let a = (0, h.NO)(n, s),
        u = (0, h.R9)(i, s);
      (0, l.uD)(t), (0, l.Ju)({
        widgetId: t,
        anchor: a,
        size: u
      });
      let p = e === c.P.MOVE,
        g = (0, h.Ly)(n, s.width, s.height, r.width, r.height);
      this.setState({
        lastLayoutUpdate: {
          was_resized: null != o && o.was_resized || !p,
          was_dragged: null != o && o.was_dragged || p,
          widget_type: d.A.getWidgetType(t),
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
      (0, f.validResolution)(t) && (0, l.uD)(e)
    }), O(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.A.setPreviewInGameMode(true), this.setState({
        dragging: true
      }))
    }), O(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && o.A.setPreviewInGameMode(false), this.setState({
        dragging: false
      }))
    })
  }
}
let x = Chunk311907.Ay.connectStores([Chunk555528.A, Chunk256415.default], e => {
  let {
    widgetId: t
  } = e, n = d.A.getWidget(t), i = u.default.getActiveRegions();
  return {
    widget: n,
    widgetConfig: null != n ? d.A.getWidgetConfig(n.type) : null,
    locked: u.default.isInstanceLocked(),
    isPreviewingInGame: u.default.isPreviewingInGame(),
    isActiveRegion: null != n && n.type === A.uss.TEXT && i.has(A.ajI.TEXT_WIDGET)
  }
})(E);

function S(e, t) {
  return (0, i.jsx)(x, {
    widgetId: e,
    layoutSize: t
  }, e)
}
let j = Chunk311907.Ay.connectStores([Chunk555528.A, Chunk531685.A], () => {
  var e;
  return {
    layout: null != (e = d.A.getLayout(f.OVERLAY_LAYOUT_ID)) ? e : true,
    layoutSize: p.A.windowSize(),
    renderWidget: S
  }
})(Chunk231679.A)