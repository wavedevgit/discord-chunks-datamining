/** Chunk was on 9536 **/
/** chunk id: 733683, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E,
  x: () => j
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk772848 = require("./772848.js"),
  Chunk681715 = require("./681715.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788555 = require("./788555.js");

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
  O = (0, Chunk624138.Mg)(Chunk477690.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  y = {
    tension: 140,
    friction: 30
  },
  C = {
    tension: 800,
    friction: 20
  };
class N extends(r = Chunk473749.Component) {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return e[e.length - 1].y + O / 2
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
    for (let n = t.length - 1; n > 0; n--)
      if (e >= t[n].key) return n;
    return 0
  }
  getTierDisabled(e) {
    let {
      currentTier: t,
      progress: n
    } = this.props;
    return t < e.key && n >= e.numRequired
  }
  getTierMarkerTooltipText(e) {
    let {
      progress: t
    } = this.props;
    if (null == e.name || e.key === m.Eu4.NONE) return null;
    let n = Math.min(t, e.numRequired);
    return this.getTierDisabled(e) ? {
      title: null,
      body: p.intl.formatToPlainString(b.default["9CtPjt"], {
        perk: e.name
      })
    } : {
      title: e.name,
      body: p.intl.format(p.t.AkLa6n, {
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
      u = null != s && e.key === s.key,
      f = e.key === a[0].key,
      m = this.getTierDisabled(e);
    r = f ? h.tierFirst : m ? h.tierInProgress : u ? h.tierCurrent : c ? h.tierAccomplished : h.tierInProgress;
    let b = e.y - (f ? 0 : O / 2),
      p = this.state.tierMarkerActive >= t,
      x = !f && u && p,
      j = this.getTierMarkerTooltipText(e);
    return (0, i.jsx)(g.AMe, {
      from: {
        scale: 1
      },
      to: {
        scale: x ? 1.625 : 1
      },
      config: C,
      children: t => {
        var n, l, a;
        return (0, i.jsx)(d.i_, {
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
            children: x && (0, i.jsx)(g.dz2, {
              size: "md",
              color: "currentColor",
              className: h.currentTierIcon
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
        finishedInitialAnimation: r
      } = this.state;
    return (0, i.jsxs)("g", {
      mask: "url(#".concat(this.tierMarkerMaskId, ")"),
      children: [(0, i.jsx)("rect", {
        className: h.background,
        height: e,
        fill: "currentColor"
      }), (0, i.jsx)(g.AMe, {
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
          className: h.foreground,
          height: e.height.interpolate(e => Math.max(0, e)),
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
      className: s()(e, h.progressBar),
      style: {
        height: r
      },
      children: [(0, i.jsxs)("svg", {
        viewBox: "0 0 ".concat(v, " ").concat(r),
        width: v,
        height: r,
        children: [this.renderProgressMask(r), this.renderProgressBar(r, n)]
      }), t.map((e, t) => this.renderTierMarker(e, t, n))]
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      tierMarkerActive: 0,
      finishedInitialAnimation: false
    }), x(this, "tierMarkerMaskId", (0, c.Z)()), x(this, "handleForegroundFrame", e => {
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
x(N, "defaultProps", {
  initialAnimationDelay: 0
});
let E = N