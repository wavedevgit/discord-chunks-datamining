/** Chunk was on 384 **/
/** chunk id: 733683, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E,
  x: () => _
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk772848 = require("./772848.js"),
  Chunk374470 = require("./374470.js"),
  Chunk681715 = require("./681715.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js"),
  Chunk265397 = require("./265397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31441 = require("./31441.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = false,
  v = (0, Chunk624138.Mg)(Chunk477690.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  O = (0, Chunk624138.Mg)(Chunk477690.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  C = {
    tension: 140,
    friction: 30
  },
  y = {
    tension: 800,
    friction: 20
  };
class N extends(r = Chunk473749.Component) {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return module[module.length - 1].y + O / 2
  }
  getProgressHeight(e) {
    let t, {
        tiers: n,
        progress: r
      } = this.props,
      i = n[e];
    for (let e = n.length - 1; e > 0; e--) {
      if (r === n[e].numRequired) return n[e].y;
      if (r > n[e].numRequired) {
        t = n[e + 1];
        break
      }
    }
    if (null == t) return i.y;
    let l = t.y - i.y,
      s = t.numRequired - i.numRequired,
      a = r - i.numRequired;
    return i.y + a / s * l
  }
  getCurrentTierIndex() {
    let {
      currentTier: e,
      tiers: t
    } = this.props;
    for (let n = exports.length - 1; require > 0; require--)
      if (module >= exports[require].key) return require;
    return 0
  }
  getTierDisabled(e) {
    let {
      currentTier: t,
      progress: n
    } = this.props;
    return t < e.key && n >= e.numRequired
  }
  renderForegroundTooltip() {
    let {
      progress: e,
      tiers: t
    } = this.props, {
      showForegroundTooltip: n,
      foregroundTooltipY: r
    } = this.state;
    if (!require || null == this.foregroundTooltipElementRef.current) return null;
    let l = exports[this.getCurrentTierIndex() + 1],
      s = null != Chunk473749 ? Chunk473749.numRequired : null,
      a = null != Chunk120356 ? Chunk120356 - module : null;
    return (0, Chunk54381.jsxs)(Chunk481060.gqK, {
      "data-migration-pending": true,
      targetElementRef: this.foregroundTooltipElementRef,
      position: "right",
      color: Chunk481060.aML.Colors.PRIMARY,
      tooltipClassName: Chunk31441.foregroundTooltip,
      children: [(0, Chunk54381.jsx)("div", {
        children: Chunk388032.intl.format(Chunk388032.t.gDsyB9, {
          numSubscriptions: module
        })
      }), null != a && a > 0 && null != Chunk473749 ? (0, Chunk54381.jsx)("div", {
        className: Chunk31441.tooltipMuted,
        children: Chunk388032.intl.format(Chunk388032.t["2U9MDp"], {
          number: a,
          tier: Chunk473749.name
        })
      }) : null]
    }, r)
  }
  getTierMarkerTooltipText(e) {
    let {
      progress: t
    } = this.props;
    if (null == e.name || e.key === f.Eu4.NONE) return null;
    let n = Math.min(t, e.numRequired);
    return this.getTierDisabled(e) ? {
      title: null,
      body: x.intl.formatToPlainString(h.default["9CtPjt"], {
        perk: e.name
      })
    } : {
      title: e.name,
      body: x.intl.format(x.t.AkLa6n, {
        subscribers: n,
        numRequired: e.numRequired
      })
    }
  }
  renderTierMarker(e, t, n) {
    let r, {
        progress: l,
        tiers: s
      } = this.props,
      a = s[n],
      c = l >= e.numRequired,
      u = null != a && e.key === a.key,
      g = e.key === s[0].key,
      p = this.getTierDisabled(e);
    r = g ? b.tierFirst : p ? b.tierInProgress : u ? b.tierCurrent : c ? b.tierAccomplished : b.tierInProgress;
    let f = e.y - (g ? 0 : O / 2),
      h = this.state.tierMarkerActive >= t,
      x = !g && u && h,
      j = this.getTierMarkerTooltipText(e);
    return (0, i.jsx)(m.AMe, {
      from: {
        scale: 1
      },
      to: {
        scale: x ? 1.625 : 1
      },
      config: y,
      children: t => {
        var n, l, s;
        return (0, i.jsx)(d.i_, {
          body: null != (n = null == j ? true : j.body) ? n : "",
          title: null != (l = null == j ? true : j.title) ? l : true,
          shouldShow: null != j,
          position: "right",
          "aria-label": null != (s = e.name) ? s : "",
          children: (0, i.jsx)(o.animated.div, {
            className: r,
            style: {
              top: f,
              transform: t.scale.interpolate(e => "scale(".concat(e, ")"))
            },
            children: x && (0, i.jsx)(m.dz2, {
              size: "md",
              color: "currentColor",
              className: b.currentTierIcon
            })
          })
        })
      }
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
        width: v,
        height: e,
        fill: "white"
      }), t.map(e => (0, i.jsx)("circle", {
        cx: v / 2,
        cy: e.y,
        r: v / 2,
        fill: "black"
      }, e.key))]
    })
  }
  renderProgressBar(e, t) {
    let n = this.getProgressHeight(t),
      {
        finishedInitialAnimation: r,
        showForegroundTooltip: l
      } = this.state;
    return (0, i.jsxs)("g", {
      mask: "url(#".concat(this.tierMarkerMaskId, ")"),
      children: [(0, i.jsx)("rect", {
        className: b.background,
        height: e,
        fill: "currentColor"
      }), (0, i.jsx)(m.AMe, {
        from: {
          height: 0
        },
        to: {
          height: n
        },
        config: C,
        delay: r ? 0 : this.props.initialAnimationDelay,
        onChange: this.handleForegroundFrame,
        onRest: r ? true : this.handleFinishedInitialAnimation,
        children: e => (0, i.jsx)(o.animated.rect, {
          className: b.foreground,
          height: e.height.interpolate(e => Math.max(0, e)),
          onMouseEnter: this.handleForegroundMouseEnter,
          onMouseLeave: this.handleForegroundMouseLeave,
          onMouseMove: l ? this.handleForegroundMouseMove : true,
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
    return (0, Chunk54381.jsxs)("div", {
      className: a()(module, Chunk31441.progressBar),
      style: {
        height: r
      },
      children: [(0, Chunk54381.jsxs)("svg", {
        viewBox: "0 0 ".concat(v, " ").concat(r),
        width: v,
        height: r,
        children: [this.renderProgressMask(r), this.renderProgressBar(r, require)]
      }), (0, Chunk54381.jsx)("div", {
        ref: this.foregroundTooltipElementRef,
        style: {
          top: this.state.foregroundTooltipY
        },
        className: Chunk31441.foregroundTooltipPosition
      }), exports.map((e, t) => this.renderTierMarker(e, t, n)), this.renderForegroundTooltip()]
    })
  }
  constructor(...e) {
    super(...e), j(this, "state", {
      showForegroundTooltip: false,
      foregroundTooltipY: 0,
      tierMarkerActive: 0,
      finishedInitialAnimation: false
    }), j(this, "foregroundTooltipElementRef", l.createRef()), j(this, "tierMarkerMaskId", (0, c.Z)()), j(this, "handleForegroundMouseEnter", e => {
      this.setState({
        showForegroundTooltip: true
      }), this.handleForegroundMouseMove(e)
    }), j(this, "handleForegroundMouseMove", e => {
      if (!(0, u.kK)(e.target)) return;
      let t = e.target.getBoundingClientRect(),
        n = e.clientY - t.top;
      n !== this.state.foregroundTooltipY && this.setState({
        foregroundTooltipY: n
      })
    }), j(this, "handleForegroundMouseLeave", () => {
      this.setState({
        showForegroundTooltip: false
      })
    }), j(this, "handleForegroundFrame", e => {
      let {
        height: t
      } = e, {
        tiers: n,
        progress: r,
        onAnimatedTierMaker: i
      } = this.props, {
        tierMarkerActive: l
      } = this.state;
      for (let e = n.length - 1; e > 0; e--) {
        let s = n[e],
          a = l === e;
        if (t + 20 >= s.y && r >= s.numRequired) {
          a || (this.setState({
            tierMarkerActive: e
          }), null != i && i(s));
          return
        }
      }
    }), j(this, "handleFinishedInitialAnimation", () => {
      this.setState({
        finishedInitialAnimation: true
      })
    })
  }
}
j(N, "defaultProps", {
  initialAnimationDelay: 0
});
let E = N