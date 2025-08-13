/** Chunk was on 60458 **/
/** chunk id: 430677, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk603211 = require("./603211.js"),
  Chunk307707 = require("./307707.js"),
  Chunk734893 = require("./734893.js"),
  Chunk216701 = require("./216701.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk193204 = require("./193204.js");

function j(e) {
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

function v(e, t) {
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
let _ = function(e) {
  var t, l, _, O, y;
  let {
    guildId: C,
    action: N,
    actionIndex: I,
    onChange: E,
    onDelete: S,
    onDragStart: T,
    onDragComplete: P,
    onDragReset: w
  } = e, R = (0, s.e7)([p.Z], () => p.Z.getChannel(N.channelId)), Z = (0, s.e7)([h.Z], () => h.Z.getGuild(C)), {
    customEmoji: D,
    unicodeEmoji: A
  } = (0, u.Z)(null == (t = N.emoji) ? true : t.id, null == (l = N.emoji) ? true : l.name), k = null == N.emoji || null != D || null != A, L = f.ZP.getNewMemberActionIconURL({
    channelId: N.channelId,
    icon: N.icon
  }), M = null;
  null != R && (0, m.kb)(R) ? k || (M = b.intl.string(b.t.wAkIZW)) : M = b.intl.string(b.t.CbTEKC);
  let {
    drag: G,
    dragSourcePosition: U,
    drop: B,
    setIsDraggable: F
  } = (0, d.Z)({
    type: "NEW_MEMBER_ACTION",
    index: I,
    optionId: N.channelId,
    onDragStart: T,
    onDragComplete: P,
    onDragReset: w
  }), H = i.useCallback(() => {
    if (null != C) return (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("7590").then(n.bind(n, 380716));
      return t => (0, r.jsx)(e, v(j({}, t), {
        guildId: C,
        action: N,
        onSave: (e, t, n) => E(I, e, t, n),
        onDelete: () => S(I)
      }))
    })
  }, [C, N, I, E, S]);
  if (null == R || null == Z) return null;
  let z = null != (y = (0, c.KS)(R)) ? y : o.VL1;
  return (0, r.jsxs)("div", {
    className: x.actionItemContainer,
    children: [(0, r.jsxs)("div", {
      className: a()(x.actionItem, {
        [x.dropIndicatorBefore]: null != U && I < U,
        [x.dropIndicatorAfter]: null != U && I > U,
        [x.actionItemError]: null != M
      }),
      ref: e => {
        G(B(e))
      },
      children: [(0, r.jsx)("div", {
        className: x.dragContainer,
        onMouseEnter: () => F(true),
        onMouseLeave: () => F(false),
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: x.dragIcon
        })
      }), null != L ? (0, r.jsx)("div", {
        className: x.iconWrapper,
        children: (0, r.jsx)("img", {
          src: L,
          className: x.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": true
        })
      }) : (0, r.jsx)("div", {
        className: x.actionItemEmojiWrapper,
        children: (0, r.jsx)(g.Z, {
          emojiId: null == (_ = N.emoji) ? true : _.id,
          emojiName: null == (O = N.emoji) ? true : O.name,
          size: g.R.MEDIUM,
          defaultComponent: (0, r.jsx)(z, {})
        })
      }), (0, r.jsxs)("div", {
        className: x.actionItemText,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: N.title
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: b.intl.format(b.t.Ngk8Nj, {
            channelName: R.name
          })
        })]
      }), (0, r.jsx)(o.ua7, {
        text: b.intl.string(b.t.bt75u7),
        children: e => (0, r.jsx)(o.hU, v(j({}, e), {
          icon: o.vdY,
          size: "sm",
          variant: "primary",
          onClick: H,
          "aria-label": b.intl.string(b.t.bt75u7)
        }))
      })]
    }), null != M && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: M
    })]
  })
}