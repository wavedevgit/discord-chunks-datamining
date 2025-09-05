/** Chunk was on 54052 **/
/** chunk id: 922112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk603211 = require("./603211.js"),
  Chunk734893 = require("./734893.js"),
  Chunk592125 = require("./592125.js"),
  Chunk768581 = require("./768581.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk359449 = require("./359449.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = function(e) {
  let {
    guildId: t,
    resourceChannel: l,
    index: x,
    onDragComplete: j,
    onDragStart: v,
    onDragReset: _
  } = e, {
    title: O,
    channelId: y,
    description: C
  } = l, N = d.Z.getChannel(y), E = null;
  null != N && (0, c.k3)(N) || (E = p.intl.string(p.t.kTdL8f));
  let I = null == C || 0 === C.length,
    S = u.ZP.getResourceChannelIconURL({
      channelId: l.channelId,
      icon: l.icon
    }),
    {
      drag: T,
      dragSourcePosition: P,
      drop: w,
      setIsDraggable: R
    } = (0, o.Z)({
      type: "RESOURCE_CHANNEL",
      optionId: l.channelId,
      index: x,
      onDragStart: v,
      onDragComplete: j,
      onDragReset: _
    }),
    Z = i.useCallback(e => {
      (0, m.XG)(l.channelId, e)
    }, [l.channelId]),
    D = i.useCallback((e, n) => {
      let r = g.Z.getSettings();
      null != r && ((0, m.XG)(l.channelId, e), (0, m.oo)(t, r).then(() => {
        (0, m.mM)(t, e.channelId, n)
      }))
    }, [t, l]),
    A = i.useCallback(() => (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("76396").then(n.bind(n, 462499));
      return n => (0, r.jsx)(e, b(h({}, n), {
        guildId: t,
        resourceChannel: l,
        onSave: Z,
        onDelete: () => (0, m.Hz)(l.channelId),
        onIconUpload: D
      }))
    }), [t, l, Z, D]);
  return null == N ? null : (0, r.jsxs)("div", {
    className: f.resourceChannelContainer,
    children: [(0, r.jsxs)("div", {
      className: a()(f.resourceChannel, {
        [f.dropIndicatorBefore]: null != P && x < P,
        [f.dropIndicatorAfter]: null != P && x > P,
        [f.resourceChannelError]: null != E
      }),
      ref: e => {
        T(w(e))
      },
      children: [(0, r.jsx)("div", {
        className: f.dragContainer,
        onMouseEnter: () => R(true),
        onMouseLeave: () => R(false),
        children: (0, r.jsx)(s.Vni, {
          size: "xs",
          color: "currentColor",
          className: f.dragIcon
        })
      }), null != S && (0, r.jsx)("div", {
        className: f.iconWrapper,
        children: (0, r.jsx)("img", {
          src: S,
          className: f.icon,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: f.resourceChannelContent,
        children: [(0, r.jsx)(s.Text, {
          className: f.resourceChannelTitle,
          variant: "text-md/semibold",
          color: "header-primary",
          children: O
        }), !I && (0, r.jsx)(s.Text, {
          className: f.resourceChannelDescription,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: C
        })]
      }), (0, r.jsx)(s.ua7, {
        text: p.intl.string(p.t.bt75u7),
        children: e => (0, r.jsx)(s.hU, b(h({}, e), {
          icon: s.vdY,
          size: "sm",
          variant: "primary",
          onClick: A,
          "aria-label": p.intl.string(p.t.bt75u7)
        }))
      })]
    }), null != E && (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: E
    })]
  })
}