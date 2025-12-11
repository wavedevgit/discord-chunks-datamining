/** Chunk was on 9536 **/
/** chunk id: 733683, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I,
  x: () => v
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk772848 = require("./772848.js"),
  Chunk374470 = require("./374470.js"),
  Chunk681715 = require("./681715.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js"),
  Chunk44542 = require("./44542.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788555 = require("./788555.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = false,
  O = (0, Chunk624138.Mg)(Chunk477690.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  C = (0, Chunk624138.Mg)(Chunk477690.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  y = {
    tension: 140,
    friction: 30
  },
  N = {
    tension: 800,
    friction: 20
  };
class E extends(r = Chunk473749.Component) {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return module[module.length - 1].y + C / 2
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
      a = t.numRequired - i.numRequired,
      s = r - i.numRequired;
    return i.y + s / a * l
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
      a = null != Chunk473749 ? Chunk473749.numRequired : null,
      s = null != Chunk120356 ? Chunk120356 - module : null;
    return (0, Chunk54381.jsxs)(Chunk481060.gqK, {
      "data-migration-pending": true,
      targetElementRef: this.foregroundTooltipElementRef,
      position: "right",
      color: Chunk481060.aML.Colors.PRIMARY,
      tooltipClassName: Chunk788555.foregroundTooltip,
      children: [(0, Chunk54381.jsx)("div", {
        children: Chunk388032.intl.format(Chunk388032.t.gDsyB9, {
          numSubscriptions: module
        })
      }), null != s && s > 0 && null != Chunk473749 ? (0, Chunk54381.jsx)("div", {
        className: Chunk788555.tooltipMuted,
        children: Chunk388032.intl.format(Chunk388032.t["2U9MDp"], {
          number: s,
          tier: Chunk473749.name
        })
      }) : null]
    }, r)
  }
  getTierMarkerTooltipText(e) {
    let {
      progress: t
    } = this.props;
    if (null == e.name || e.key === b.Eu4.NONE) return null;
    let n = Math.min(t, e.numRequired);
    return this.getTierDisabled(e) ? {
      title: null,
      body: h.intl.formatToPlainString(p.default["9CtPjt"], {
        perk: e.name
      })
    } : {
      title: e.name,
      body: h.intl.format(h.t.AkLa6n, {
        subscribers: n,
        numRequired: e.numRequired
      })
    }
  }
  renderTierMarker(e, t, n) {
    let r, {
        progress: l,
        tiers: a
      } = this.props,
      s = a[n],
      c = l >= e.numRequired,
      d = null != s && e.key === s.key,
      g = e.key === a[0].key,
      m = this.getTierDisabled(e);
    r = g ? x.tierFirst : m ? x.tierInProgress : d ? x.tierCurrent : c ? x.tierAccomplished : x.tierInProgress;
    let b = e.y - (g ? 0 : C / 2),
      p = this.state.tierMarkerActive >= t,
      h = !g && d && p,
      j = this.getTierMarkerTooltipText(e);
    return (0, i.jsx)(f.AMe, {
      from: {
        scale: 1
      },
      to: {
        scale: h ? 1.625 : 1
      },
      config: N,
      children: t => {
        var n, l, a;
        return (0, i.jsx)(u.i_, {
          body: null != (n = null == j ? true : j.body) ? n : "",
          title: null != (l = null == j ? true : j.title) ? l : true,
          shouldShow: null != j,
          position: "right",
          "aria-label": null != (a = e.name) ? a : "",
          children: (0, i.jsx)(o.animated.div, {
            className: r,
            style: {
              top: b,
              transform: t.scale.interpolate(e => "scale(".concat(e, ")"))
            },
            children: h && (0, i.jsx)(f.dz2, {
              size: "md",
              color: "currentColor",
              className: x.currentTierIcon
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
        width: O,
        height: e,
        fill: "white"
      }), t.map(e => (0, i.jsx)("circle", {
        cx: O / 2,
        cy: e.y,
        r: O / 2,
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
        className: x.background,
        height: e,
        fill: "currentColor"
      }), (0, i.jsx)(f.AMe, {
        from: {
          height: 0
        },
        to: {
          height: n
        },
        config: y,
        delay: r ? 0 : this.props.initialAnimationDelay,
        onChange: this.handleForegroundFrame,
        onRest: r ? true : this.handleFinishedInitialAnimation,
        children: e => (0, i.jsx)(o.animated.rect, {
          className: x.foreground,
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
      className: s()(module, Chunk788555.progressBar),
      style: {
        height: r
      },
      children: [(0, Chunk54381.jsxs)("svg", {
        viewBox: "0 0 ".concat(O, " ").concat(r),
        width: O,
        height: r,
        children: [this.renderProgressMask(r), this.renderProgressBar(r, require)]
      }), (0, Chunk54381.jsx)("div", {
        ref: this.foregroundTooltipElementRef,
        style: {
          top: this.state.foregroundTooltipY
        },
        className: Chunk788555.foregroundTooltipPosition
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
      if (!(0, d.kK)(e.target)) return;
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
        let a = n[e],
          s = l === e;
        if (t + 20 >= a.y && r >= a.numRequired) {
          s || (this.setState({
            tierMarkerActive: e
          }), null != i && i(a));
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
j(E, "defaultProps", {
  initialAnimationDelay: 0
});
let I = E