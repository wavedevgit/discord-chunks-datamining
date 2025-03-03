/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => N,
  p: () => x
}), n(47120);
var i = n(200651),
  r = n(192379),
  s = n(442837),
  o = n(765250),
  a = n(13245),
  l = n(26229),
  c = n(552062),
  d = n(355863),
  u = n(237997),
  h = n(451478),
  p = n(434529),
  f = n(145597),
  g = n(382790),
  m = n(990673),
  y = n(906037),
  _ = n(430036),
  v = n(839434),
  O = n(981631);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let x = {
  [O.Odu.TEXT](e) {
    let {
      dragging: t,
      locked: n,
      pinned: r,
      dragStart: s,
      className: o
    } = e;
    return (0, i.jsx)(_.Z, {
      dragStart: s,
      locked: n,
      pinned: r,
      dragging: t,
      className: o
    })
  },
  [O.Odu.GUILDS](e) {
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
  [O.Odu.VOICE](e) {
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
  [O.Odu.GUILDS_TEXT](e) {
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
      pinned: !1,
      className: s
    })
  }
};
class S extends r.PureComponent {
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
      anchor: h
    } = e, f = (0, p.w_)(u, n), g = (0, p.KR)(h, n), {
      minSize: m,
      resizeX: _,
      resizeY: v,
      dragAnywhere: O
    } = t, b = (0, y.eM)({
      locked: r,
      isPreviewingInGame: s,
      pinned: l
    }), x = {
      minX: 0,
      minY: 0,
      maxX: n.width,
      maxY: n.height
    }, S = this.renderWidget(e, g, f);
    return null == S ? null : (0, i.jsx)(c.Z, {
      id: a,
      size: f,
      anchor: g,
      container: x,
      minSize: m,
      hidden: !b,
      resizeX: _,
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
    super(...e), b(this, "state", {
      lastLayoutUpdate: null,
      dragging: !1
    }), b(this, "handleUpdate", (e, t, n, i, r) => {
      let {
        props: {
          layoutSize: s
        },
        state: {
          lastLayoutUpdate: a
        }
      } = this;
      if (!(0, f.validResolution)(s)) return;
      let l = (0, p.jL)(n, s),
        u = (0, p.Ox)(i, s);
      (0, o.Os)(t), (0, o.nv)({
        widgetId: t,
        anchor: l,
        size: u
      });
      let h = e === c.B.MOVE,
        g = (0, p.PY)(n, s.width, s.height, r.width, r.height);
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
    }), b(this, "handleFocus", e => {
      let {
        layoutSize: t
      } = this.props;
      (0, f.validResolution)(t) && (0, o.Os)(e)
    }), b(this, "handleDragStart", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && a.Z.setPreviewInGameMode(!0), this.setState({
        dragging: !0
      }))
    }), b(this, "handleDragEnd", () => {
      let {
        widget: e
      } = this.props;
      null != e && (e.pinned && a.Z.setPreviewInGameMode(!1), this.setState({
        dragging: !1
      }))
    })
  }
}
let E = s.ZP.connectStores([d.Z, u.default], e => {
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
  return (0, i.jsx)(E, {
    widgetId: e,
    layoutSize: t
  }, e)
}
let N = s.ZP.connectStores([d.Z, h.Z], () => {
  var e;
  return {
    layout: null !== (e = d.Z.getLayout(f.OVERLAY_LAYOUT_ID)) && void 0 !== e ? e : void 0,
    layoutSize: h.Z.windowSize(),
    renderWidget: j
  }
})(l.Z)