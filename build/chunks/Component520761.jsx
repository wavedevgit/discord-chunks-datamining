/** Chunk was on 39048 **/
/** chunk id: 520761, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk599119 = require("./599119.js"),
  Chunk374084 = require("./374084.js"),
  Chunk734057 = require("./734057.js"),
  Chunk486020 = require("./486020.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659233 = require("./659233.js");
let b = function(e) {
  let {
    guildId: t,
    resourceChannel: l,
    index: b,
    onDragComplete: x,
    onDragStart: j,
    onDragReset: _
  } = e, {
    title: O,
    channelId: v,
    description: y
  } = l, A = u.A.getChannel(v), E = null;
  null != A && (0, d.Yt)(A) || (E = f.intl.string(f.t.kTdL8X));
  let N = null == y || 0 === y.length,
    S = g.Ay.getResourceChannelIconURL({
      channelId: l.channelId,
      icon: l.icon
    }),
    {
      drag: I,
      dragSourcePosition: T,
      drop: C,
      setIsDraggable: P
    } = (0, c.A)({
      type: "RESOURCE_CHANNEL",
      optionId: l.channelId,
      index: b,
      onDragStart: j,
      onDragComplete: x,
      onDragReset: _
    }),
    w = i.useCallback(e => {
      (0, m.z4)(l.channelId, e)
    }, [l.channelId]),
    R = i.useCallback((e, n) => {
      let r = p.A.getSettings();
      null != r && ((0, m.z4)(l.channelId, e), (0, m.W5)(t, r).then(() => {
        (0, m.E0)(t, e.channelId, n)
      }))
    }, [t, l]),
    D = i.useCallback(() => (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("36354").then(n.bind(n, 983161));
      return n => {
        var i, s;
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
        }({}, n), s = s = {
          guildId: t,
          resourceChannel: l,
          onSave: w,
          onDelete: () => (0, m.XD)(l.channelId),
          onIconUpload: R
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    }), [t, l, w, R]);
  return null == A ? null : (0, r.jsxs)("div", {
    className: h.l5,
    children: [(0, r.jsxs)("div", {
      className: s()(h.Km, {
        [h.A]: null != T && b < T,
        [h.Ze]: null != T && b > T,
        [h._t]: null != E
      }),
      ref: e => {
        I(C(e))
      },
      children: [(0, r.jsx)("div", {
        className: h.cK,
        onMouseEnter: () => P(true),
        onMouseLeave: () => P(false),
        children: (0, r.jsx)(o.WP0, {
          size: "xs",
          color: "currentColor",
          className: h.co
        })
      }), null != S && (0, r.jsx)("div", {
        className: h.P0,
        children: (0, r.jsx)("img", {
          src: S,
          className: h.Kk,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: h.DP,
        children: [(0, r.jsx)(o.Text, {
          className: h.qj,
          variant: "text-md/semibold",
          color: "text-strong",
          children: O
        }), !N && (0, r.jsx)(o.Text, {
          className: h.ur,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: y
        })]
      }), (0, r.jsx)(a.m, {
        text: f.intl.string(f.t.bt75uw),
        children: (0, r.jsx)(o.K0, {
          icon: o.R2l,
          size: "sm",
          variant: "primary",
          onClick: D,
          "aria-label": f.intl.string(f.t.bt75uw)
        })
      })]
    }), null != E && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: E
    })]
  })
}