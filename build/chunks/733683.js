/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => E,
  x: () => C
}), n(47120);
var r, i = n(200651),
  s = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(642128),
  c = n(772848),
  A = n(374470),
  d = n(477690),
  u = n(481060),
  g = n(624138),
  f = n(981631),
  m = n(388032),
  p = n(240415);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = -1,
  b = (0, g.Mg)(d.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  v = (0, g.Mg)(d.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  x = {
    tension: 140,
    friction: 30
  },
  N = {
    tension: 800,
    friction: 20
  };
class j extends(r = s.Component) {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return e[e.length - 1].y + v / 2
  }
  getProgressHeight(e) {
    let {
      tiers: t,
      progress: n
    } = this.props, r = t[e], i = t[e + 1];
    if (null == i || n === r.numRequired) return r.y;
    let s = i.y - r.y,
      a = i.numRequired - r.numRequired,
      l = n - r.numRequired;
    return r.y + l / a * s
  }
  getCurrentTierIndex() {
    let {
      tiers: e,
      progress: t
    } = this.props;
    for (let n = e.length - 1; n > 0; n--)
      if (t >= e[n].numRequired) return n;
    return 0
  }
  renderForegroundTooltip() {
    let {
      progress: e,
      tiers: t
    } = this.props, {
      showForegroundTooltip: n,
      foregroundTooltipY: r
    } = this.state;
    if (!n || null == this.foregroundTooltipElementRef.current) return null;
    let s = t[this.getCurrentTierIndex() + 1],
      a = null != s ? s.numRequired : null,
      l = null != a ? a - e : null;
    return (0, i.jsxs)(u.Cys, {
      targetElementRef: this.foregroundTooltipElementRef,
      position: "right",
      color: u.ua7.Colors.BLACK,
      tooltipClassName: p.foregroundTooltip,
      children: [(0, i.jsx)("div", {
        children: m.NW.format(m.t.gDsyBw, {
          numSubscriptions: e
        })
      }), null != l && null != s ? (0, i.jsx)("div", {
        className: p.tooltipMuted,
        children: m.NW.format(m.t["2U9MDg"], {
          number: l,
          tier: s.name
        })
      }) : null]
    }, r)
  }
  renderTierMarkerTooltip(e) {
    let {
      progress: t
    } = this.props;
    if (null == e.name || e.key === f.Eu4.NONE) return null;
    let n = Math.min(t, e.numRequired);
    return (0, i.jsxs)("div", {
      className: p.__invalid_tierTooltip,
      children: [(0, i.jsx)("div", {
        children: e.name
      }), (0, i.jsx)("div", {
        children: m.NW.format(m.t.AkLa6u, {
          subscribers: n,
          numRequired: e.numRequired
        })
      })]
    })
  }
  renderTierMarker(e, t, n) {
    var r;
    let s;
    let {
      progress: a,
      tiers: l
    } = this.props, c = l[n], A = a >= e.numRequired, d = null != c && e.key === c.key, g = e.key === l[0].key;
    s = g ? p.tierFirst : d ? p.tierCurrent : A ? p.tierAccomplished : p.tierInProgress;
    let f = e.y - (g ? 0 : v / 2),
      m = this.state.tierMarkerActive === t,
      C = !g && d && m;
    return (0, i.jsx)(u.ua7, {
      text: this.renderTierMarkerTooltip(e),
      position: "right",
      "aria-label": null !== (r = e.name) && void 0 !== r ? r : "",
      children: e => (0, i.jsx)(u.AMe, {
        from: {
          scale: 1
        },
        to: {
          scale: C ? 1.625 : 1
        },
        config: N,
        children: t => {
          var n, r;
          return (0, i.jsx)(o.animated.div, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                h(e, t, n[t])
              })
            }
            return e
          }({}, e), r = r = {
            className: s,
            style: {
              top: f,
              transform: t.scale.interpolate(e => "scale(".concat(e, ")"))
            },
            children: C && (0, i.jsx)(u.dz2, {
              size: "md",
              color: "currentColor",
              className: p.currentTierIcon
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n))
        }
      })
    }, e.key)
  }
  renderProgressMask(e) {
    let {
      tiers: t
    } = this.props;
    return (0, i.jsxs)("mask", {
      id: "".concat(this.tierMarkerMaskId),
      children: [(0, i.jsx)("rect", {
        x: "0",
        y: "0",
        width: b,
        height: e,
        fill: "white"
      }), t.map(e => (0, i.jsx)("circle", {
        cx: b / 2,
        cy: e.y,
        r: b / 2,
        fill: "black"
      }, e.key))]
    })
  }
  renderProgressBar(e, t) {
    let n = this.getProgressHeight(t),
      {
        finishedInitialAnimation: r,
        showForegroundTooltip: s
      } = this.state;
    return (0, i.jsxs)("g", {
      mask: "url(#".concat(this.tierMarkerMaskId, ")"),
      children: [(0, i.jsx)("rect", {
        className: p.background,
        height: e,
        fill: "currentColor"
      }), (0, i.jsx)(u.AMe, {
        from: {
          height: 0
        },
        to: {
          height: n
        },
        config: x,
        delay: r ? 0 : this.props.initialAnimationDelay,
        onChange: this.handleForegroundFrame,
        onRest: r ? void 0 : this.handleFinishedInitialAnimation,
        children: e => (0, i.jsx)(o.animated.rect, {
          className: p.foreground,
          height: e.height.interpolate(e => Math.max(0, e)),
          onMouseEnter: this.handleForegroundMouseEnter,
          onMouseLeave: this.handleForegroundMouseLeave,
          onMouseMove: s ? this.handleForegroundMouseMove : void 0,
          fill: "currentColor"
        })
      })]
    })
  }
  render() {
    let {
      className: e,
      tiers: t
    } = this.props, n = this.getCurrentTierIndex(), r = this.getTotalHeight();
    return (0, i.jsxs)("div", {
      className: l()(e, p.progressBar),
      style: {
        height: r
      },
      children: [(0, i.jsxs)("svg", {
        viewBox: "0 0 ".concat(b, " ").concat(r),
        width: b,
        height: r,
        children: [this.renderProgressMask(r), this.renderProgressBar(r, n)]
      }), (0, i.jsx)("div", {
        ref: this.foregroundTooltipElementRef,
        style: {
          top: this.state.foregroundTooltipY
        },
        className: p.foregroundTooltipPosition
      }), t.map((e, t) => this.renderTierMarker(e, t, n)), this.renderForegroundTooltip()]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      showForegroundTooltip: !1,
      foregroundTooltipY: 0,
      tierMarkerActive: 0,
      finishedInitialAnimation: !1
    }), h(this, "foregroundTooltipElementRef", s.createRef()), h(this, "tierMarkerMaskId", (0, c.Z)()), h(this, "handleForegroundMouseEnter", e => {
      this.setState({
        showForegroundTooltip: !0
      }), this.handleForegroundMouseMove(e)
    }), h(this, "handleForegroundMouseMove", e => {
      if (!(0, A.k)(e.target)) return;
      let t = e.target.getBoundingClientRect(),
        n = e.clientY - t.top;
      n !== this.state.foregroundTooltipY && this.setState({
        foregroundTooltipY: n
      })
    }), h(this, "handleForegroundMouseLeave", () => {
      this.setState({
        showForegroundTooltip: !1
      })
    }), h(this, "handleForegroundFrame", e => {
      let {
        height: t
      } = e, {
        tiers: n,
        progress: r,
        onAnimatedTierMaker: i
      } = this.props, {
        tierMarkerActive: s
      } = this.state;
      for (let e = n.length - 1; e > 0; e--) {
        let a = n[e],
          l = s === e;
        if (t + 20 >= a.y && r >= a.numRequired) {
          l || (this.setState({
            tierMarkerActive: e
          }), null != i && i(a));
          return
        }
      }
    }), h(this, "handleFinishedInitialAnimation", () => {
      this.setState({
        finishedInitialAnimation: !0
      })
    })
  }
}
h(j, "defaultProps", {
  initialAnimationDelay: 0
});
let E = j