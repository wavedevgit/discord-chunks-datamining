/** Chunk was on 47841 **/
/** chunk id: 199139, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j,
  h: () => N
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk835245 = require("./835245.js"),
  Chunk435371 = require("./435371.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk240248 = require("./240248.js"),
  Chunk652215 = require("./652215.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk576943 = require("./576943.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let j = false,
  O = (0, Chunk240248.xI)(Chunk319060.A.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
  y = (0, Chunk240248.xI)(Chunk319060.A.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
  v = {
    tension: 140,
    friction: 30
  },
  A = {
    tension: 800,
    friction: 20
  };
class E extends(r = Chunk64700.Component) {
  getTotalHeight() {
    let {
      tiers: e
    } = this.props;
    return e[e.length - 1].y + y / 2
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
    if (null == e.name || e.key === b.TVA.NONE) return null;
    let n = Math.min(t, e.numRequired);
    return this.getTierDisabled(e) ? {
      title: null,
      body: p.intl.formatToPlainString(m.default["9CtPjt"], {
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
        tiers: s
      } = this.props,
      a = s[n],
      o = l >= e.numRequired,
      u = null != a && e.key === a.key,
      g = e.key === s[0].key,
      b = this.getTierDisabled(e);
    r = g ? x.LR : b ? x.B2 : u ? x.E2 : o ? x.lZ : x.B2;
    let m = e.y - (g ? 0 : y / 2),
      p = this.state.tierMarkerActive >= t,
      h = !g && u && p,
      j = this.getTierMarkerTooltipText(e);
    return (0, i.jsx)(f.c7X, {
      from: {
        scale: 1
      },
      to: {
        scale: h ? 1.625 : 1
      },
      config: A,
      children: t => {
        var n, l, s;
        return (0, i.jsx)(d.un, {
          body: null != (n = null == j ? true : j.body) ? n : "",
          title: null != (l = null == j ? true : j.title) ? l : true,
          shouldShow: null != j,
          position: "right",
          "aria-label": null != (s = e.name) ? s : "",
          children: (0, i.jsx)(c.animated.div, {
            className: r,
            style: {
              top: m,
              transform: t.scale.interpolate(e => "scale(".concat(e, ")"))
            },
            children: h && (0, i.jsx)(f.A9s, {
              size: "md",
              color: "currentColor",
              className: x.zw
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
        finishedInitialAnimation: r
      } = this.state;
    return (0, i.jsxs)("g", {
      mask: "url(#".concat(this.tierMarkerMaskId, ")"),
      children: [(0, i.jsx)("rect", {
        className: x.Tp,
        height: e,
        fill: "currentColor"
      }), (0, i.jsx)(f.c7X, {
        from: {
          height: 0
        },
        to: {
          height: n
        },
        config: v,
        delay: r ? 0 : this.props.initialAnimationDelay,
        onChange: this.handleForegroundFrame,
        onRest: r ? true : this.handleFinishedInitialAnimation,
        children: e => (0, i.jsx)(c.animated.rect, {
          className: x.CU,
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
      className: a()(e, x.hr),
      style: {
        height: r
      },
      children: [(0, i.jsxs)("svg", {
        viewBox: "0 0 ".concat(O, " ").concat(r),
        width: O,
        height: r,
        children: [this.renderProgressMask(r), this.renderProgressBar(r, n)]
      }), t.map((e, t) => this.renderTierMarker(e, t, n))]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      tierMarkerActive: 0,
      finishedInitialAnimation: false
    }), h(this, "tierMarkerMaskId", (0, o.A)()), h(this, "handleForegroundFrame", e => {
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
    }), h(this, "handleFinishedInitialAnimation", () => {
      this.setState({
        finishedInitialAnimation: true
      })
    })
  }
}
h(E, "defaultProps", {
  initialAnimationDelay: 0
});
let N = E