/** Chunk was on 64982 **/
/** chunk id: 733683, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E,
  x: () => j
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk772848 = require("./772848.js"),
  Chunk374470 = require("./374470.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js"),
  Chunk592441 = require("./592441.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31441 = require("./31441.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let j = false,
  v = (0, Chunk624138.Mg)(Chunk477690.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  _ = (0, Chunk624138.Mg)(Chunk477690.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  C = {
    tension: 140,
    friction: 30
  },
  O = {
    tension: 800,
    friction: 20
  };
class y extends(r = Chunk647438.Component) {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return module[module.length - 1].y + _ / 2
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
      a = null != Chunk647438 ? Chunk647438.numRequired : null,
      s = null != Chunk120356 ? Chunk120356 - module : null;
    return (0, Chunk951288.jsxs)(Chunk481060.gqK, {
      targetElementRef: this.foregroundTooltipElementRef,
      position: "right",
      color: Chunk481060.aML.Colors.PRIMARY,
      tooltipClassName: Chunk31441.foregroundTooltip,
      children: [(0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.format(Chunk388032.t.gDsyB9, {
          numSubscriptions: module
        })
      }), null != s && s > 0 && null != Chunk647438 ? (0, Chunk951288.jsx)("div", {
        className: Chunk31441.tooltipMuted,
        children: Chunk388032.intl.format(Chunk388032.t["2U9MDp"], {
          number: s,
          tier: Chunk647438.name
        })
      }) : null]
    }, r)
  }
  renderTierMarkerTooltip(e) {
    let {
      progress: t
    } = this.props;
    if (null == e.name || e.key === p.Eu4.NONE) return null;
    let n = Math.min(t, e.numRequired);
    return (0, i.jsx)("div", {
      children: this.getTierDisabled(e) ? (0, i.jsx)("div", {
        children: h.intl.formatToPlainString(f.default["9CtPjt"], {
          perk: e.name
        })
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          children: e.name
        }), (0, i.jsx)("div", {
          children: h.intl.format(h.t.AkLa6n, {
            subscribers: n,
            numRequired: e.numRequired
          })
        })]
      })
    })
  }
  renderTierMarker(e, t, n) {
    var r;
    let l, {
        progress: a,
        tiers: s
      } = this.props,
      c = s[n],
      d = a >= e.numRequired,
      u = null != c && e.key === c.key,
      m = e.key === s[0].key,
      p = this.getTierDisabled(e);
    l = m ? b.tierFirst : p ? b.tierInProgress : u ? b.tierCurrent : d ? b.tierAccomplished : b.tierInProgress;
    let f = e.y - (m ? 0 : _ / 2),
      h = this.state.tierMarkerActive >= t,
      j = !m && u && h;
    return (0, i.jsx)(g.aML, {
      text: this.renderTierMarkerTooltip(e),
      position: "right",
      "aria-label": null != (r = e.name) ? r : "",
      children: e => (0, i.jsx)(g.AMe, {
        from: {
          scale: 1
        },
        to: {
          scale: j ? 1.625 : 1
        },
        config: O,
        children: t => {
          var n, r;
          return (0, i.jsx)(o.animated.div, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                x(e, t, n[t])
              })
            }
            return e
          }({}, e), r = r = {
            className: l,
            style: {
              top: f,
              transform: t.scale.interpolate(e => "scale(".concat(e, ")"))
            },
            children: j && (0, i.jsx)(g.dz2, {
              size: "md",
              color: "currentColor",
              className: b.currentTierIcon
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
      }), (0, i.jsx)(g.AMe, {
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
    return (0, Chunk951288.jsxs)("div", {
      className: s()(module, Chunk31441.progressBar),
      style: {
        height: r
      },
      children: [(0, Chunk951288.jsxs)("svg", {
        viewBox: "0 0 ".concat(v, " ").concat(r),
        width: v,
        height: r,
        children: [this.renderProgressMask(r), this.renderProgressBar(r, require)]
      }), (0, Chunk951288.jsx)("div", {
        ref: this.foregroundTooltipElementRef,
        style: {
          top: this.state.foregroundTooltipY
        },
        className: Chunk31441.foregroundTooltipPosition
      }), exports.map((e, t) => this.renderTierMarker(e, t, n)), this.renderForegroundTooltip()]
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      showForegroundTooltip: false,
      foregroundTooltipY: 0,
      tierMarkerActive: 0,
      finishedInitialAnimation: false
    }), x(this, "foregroundTooltipElementRef", l.createRef()), x(this, "tierMarkerMaskId", (0, c.Z)()), x(this, "handleForegroundMouseEnter", e => {
      this.setState({
        showForegroundTooltip: true
      }), this.handleForegroundMouseMove(e)
    }), x(this, "handleForegroundMouseMove", e => {
      if (!(0, d.kK)(e.target)) return;
      let t = e.target.getBoundingClientRect(),
        n = e.clientY - t.top;
      n !== this.state.foregroundTooltipY && this.setState({
        foregroundTooltipY: n
      })
    }), x(this, "handleForegroundMouseLeave", () => {
      this.setState({
        showForegroundTooltip: false
      })
    }), x(this, "handleForegroundFrame", e => {
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
    }), x(this, "handleFinishedInitialAnimation", () => {
      this.setState({
        finishedInitialAnimation: true
      })
    })
  }
}
x(y, "defaultProps", {
  initialAnimationDelay: 0
});
let E = y