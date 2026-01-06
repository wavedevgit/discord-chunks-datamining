/** Chunk was on 9536 **/
/** chunk id: 430677, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk603211 = require("./603211.js"),
  Chunk307707 = require("./307707.js"),
  Chunk734893 = require("./734893.js"),
  Chunk216701 = require("./216701.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk969632 = require("./969632.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551952 = require("./551952.js");
let O = function(e) {
  var t, l, O, C, y;
  let {
    guildId: N,
    action: E,
    actionIndex: I,
    onChange: S,
    onDelete: _,
    onDragStart: T,
    onDragComplete: P,
    onDragReset: w
  } = e, Z = (0, s.e7)([b.Z], () => b.Z.getChannel(E.channelId)), R = (0, s.e7)([p.Z], () => p.Z.getGuild(N)), D = (0, s.e7)([x.Z], () => x.Z.getPendingData()[E.channelId]), {
    customEmoji: A,
    unicodeEmoji: L
  } = (0, g.Z)(null == (t = E.emoji) ? true : t.id, null == (l = E.emoji) ? true : l.name), k = null == E.emoji || null != A || null != L, G = h.ZP.getNewMemberActionIconURL({
    channelId: E.channelId,
    icon: E.icon
  }), M = null != D ? D.iconData : G, U = null;
  null != Z && (0, f.kb)(Z) ? k || (U = j.intl.string(j.t.wAkIZW)) : U = j.intl.string(j.t.CbTEKP);
  let {
    drag: B,
    dragSourcePosition: F,
    drop: H,
    setIsDraggable: W
  } = (0, u.Z)({
    type: "NEW_MEMBER_ACTION",
    index: I,
    optionId: E.channelId,
    onDragStart: T,
    onDragComplete: P,
    onDragReset: w
  }), z = i.useCallback(() => {
    if (null != N) return (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7590"), n.e("88575")]).then(n.bind(n, 380716));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), i = i = {
          guildId: N,
          action: E,
          onSave: (e, t, n) => S(I, e, t, n),
          onDelete: () => _(I)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })
  }, [N, E, I, S, _]);
  if (null == Z || null == R) return null;
  let V = null != (y = (0, d.KS)(Z)) ? y : c.VL1;
  return (0, r.jsxs)("div", {
    className: v.actionItemContainer,
    children: [(0, r.jsxs)("div", {
      className: a()(v.actionItem, {
        [v.dropIndicatorBefore]: null != F && I < F,
        [v.dropIndicatorAfter]: null != F && I > F,
        [v.actionItemError]: null != U
      }),
      ref: e => {
        B(H(e))
      },
      children: [(0, r.jsx)("div", {
        className: v.dragContainer,
        onMouseEnter: () => W(true),
        onMouseLeave: () => W(false),
        children: (0, r.jsx)(c.Vni, {
          size: "xs",
          color: "currentColor",
          className: v.dragIcon
        })
      }), null != M ? (0, r.jsx)("div", {
        className: v.iconWrapper,
        children: (0, r.jsx)("img", {
          src: M,
          className: v.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": true
        })
      }) : (0, r.jsx)("div", {
        className: v.actionItemEmojiWrapper,
        children: (0, r.jsx)(m.Z, {
          emojiId: null == (O = E.emoji) ? true : O.id,
          emojiName: null == (C = E.emoji) ? true : C.name,
          size: m.R.MEDIUM,
          defaultComponent: (0, r.jsx)(V, {})
        })
      }), (0, r.jsxs)("div", {
        className: v.actionItemText,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: E.title
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: j.intl.format(j.t.Ngk8Nr, {
            channelName: Z.name
          })
        })]
      }), (0, r.jsx)(o.u, {
        text: j.intl.string(j.t.bt75uw),
        children: (0, r.jsx)(c.hU, {
          icon: c.vdY,
          size: "sm",
          variant: "primary",
          onClick: z,
          "aria-label": j.intl.string(j.t.bt75uw)
        })
      })]
    }), null != U && (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: U
    })]
  })
}