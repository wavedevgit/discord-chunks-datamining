/** Chunk was on 9536 **/
/** chunk id: 922112, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk603211 = require("./603211.js"),
  Chunk734893 = require("./734893.js"),
  Chunk592125 = require("./592125.js"),
  Chunk768581 = require("./768581.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551952 = require("./551952.js");
let h = function(e) {
  let {
    guildId: t,
    resourceChannel: l,
    index: h,
    onDragComplete: x,
    onDragStart: j,
    onDragReset: v
  } = e, {
    title: O,
    channelId: C,
    description: y
  } = l, N = u.Z.getChannel(C), E = null;
  null != N && (0, d.k3)(N) || (E = p.intl.string(p.t.kTdL8X));
  let I = null == y || 0 === y.length,
    S = g.ZP.getResourceChannelIconURL({
      channelId: l.channelId,
      icon: l.icon
    }),
    {
      drag: _,
      dragSourcePosition: T,
      drop: P,
      setIsDraggable: w
    } = (0, c.Z)({
      type: "RESOURCE_CHANNEL",
      optionId: l.channelId,
      index: h,
      onDragStart: j,
      onDragComplete: x,
      onDragReset: v
    }),
    Z = i.useCallback(e => {
      (0, m.XG)(l.channelId, e)
    }, [l.channelId]),
    R = i.useCallback((e, n) => {
      let r = f.Z.getSettings();
      null != r && ((0, m.XG)(l.channelId, e), (0, m.oo)(t, r).then(() => {
        (0, m.mM)(t, e.channelId, n)
      }))
    }, [t, l]),
    D = i.useCallback(() => (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("84725").then(n.bind(n, 462499));
      return n => {
        var i, a;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), a = a = {
          guildId: t,
          resourceChannel: l,
          onSave: Z,
          onDelete: () => (0, m.Hz)(l.channelId),
          onIconUpload: R
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    }), [t, l, Z, R]);
  return null == N ? null : (0, r.jsxs)("div", {
    className: b.resourceChannelContainer,
    children: [(0, r.jsxs)("div", {
      className: a()(b.resourceChannel, {
        [b.dropIndicatorBefore]: null != T && h < T,
        [b.dropIndicatorAfter]: null != T && h > T,
        [b.resourceChannelError]: null != E
      }),
      ref: e => {
        _(P(e))
      },
      children: [(0, r.jsx)("div", {
        className: b.dragContainer,
        onMouseEnter: () => w(true),
        onMouseLeave: () => w(false),
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: b.dragIcon
        })
      }), null != S && (0, r.jsx)("div", {
        className: b.iconWrapper,
        children: (0, r.jsx)("img", {
          src: S,
          className: b.icon,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: b.resourceChannelContent,
        children: [(0, r.jsx)(o.Text, {
          className: b.resourceChannelTitle,
          variant: "text-md/semibold",
          color: "header-primary",
          children: O
        }), !I && (0, r.jsx)(o.Text, {
          className: b.resourceChannelDescription,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: y
        })]
      }), (0, r.jsx)(s.u, {
        text: p.intl.string(p.t.bt75uw),
        children: (0, r.jsx)(o.hU, {
          icon: o.vdY,
          size: "sm",
          variant: "primary",
          onClick: D,
          "aria-label": p.intl.string(p.t.bt75uw)
        })
      })]
    }), null != E && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: E
    })]
  })
}