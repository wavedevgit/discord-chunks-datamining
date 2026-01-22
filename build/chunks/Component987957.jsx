/** Chunk was on 47841 **/
/** chunk id: 987957, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk599119 = require("./599119.js"),
  Chunk202027 = require("./202027.js"),
  Chunk374084 = require("./374084.js"),
  Chunk111487 = require("./111487.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk132514 = require("./132514.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659233 = require("./659233.js");
let y = function(e) {
  var t, l, y, v, A;
  let {
    guildId: E,
    action: N,
    actionIndex: _,
    onChange: S,
    onDelete: T,
    onDragStart: I,
    onDragComplete: C,
    onDragReset: P
  } = e, w = (0, a.bG)([m.A], () => m.A.getChannel(N.channelId)), R = (0, a.bG)([p.A], () => p.A.getGuild(E)), D = (0, a.bG)([h.A], () => h.A.getPendingData()[N.channelId]), {
    customEmoji: G,
    unicodeEmoji: L
  } = (0, f.A)(null == (l = N.emoji) ? true : l.id, null == (y = N.emoji) ? true : y.name), k = null == N.emoji || null != G || null != L, M = x.Ay.getNewMemberActionIconURL({
    channelId: N.channelId,
    icon: N.icon
  }), U = null != D ? D.iconData : M, F = null;
  null != w && (0, g.Rc)(w) ? k || (F = j.intl.string(j.t.wAkIZW)) : F = j.intl.string(j.t.CbTEKP);
  let {
    drag: B,
    dragSourcePosition: H,
    drop: V,
    setIsDraggable: K
  } = (0, u.A)({
    type: "NEW_MEMBER_ACTION",
    index: _,
    optionId: N.channelId,
    onDragStart: I,
    onDragComplete: C,
    onDragReset: P
  }), z = i.useCallback(() => {
    if (null != E) return (0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("54569"), n.e("76945")]).then(n.bind(n, 251632));
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
          guildId: E,
          action: N,
          onSave: (e, t, n) => S(_, e, t, n),
          onDelete: () => T(_)
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
  }, [E, N, _, S, T]);
  if (null == w || null == R) return null;
  let Y = null != (t = (0, d.gU)(w)) ? t : o.N$i;
  return (0, r.jsxs)("div", {
    className: O.L8,
    children: [(0, r.jsxs)("div", {
      className: s()(O.kv, {
        [O.A]: null != H && _ < H,
        [O.Ze]: null != H && _ > H,
        [O.e5]: null != F
      }),
      ref: e => {
        B(V(e))
      },
      children: [(0, r.jsx)("div", {
        className: O.cK,
        onMouseEnter: () => K(true),
        onMouseLeave: () => K(false),
        children: (0, r.jsx)(o.WP0, {
          size: "xs",
          color: "currentColor",
          className: O.co
        })
      }), null != U ? (0, r.jsx)("div", {
        className: O.P0,
        children: (0, r.jsx)("img", {
          src: U,
          className: O.Kk,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": true
        })
      }) : (0, r.jsx)("div", {
        className: O.zV,
        children: (0, r.jsx)(b.A, {
          emojiId: null == (v = N.emoji) ? true : v.id,
          emojiName: null == (A = N.emoji) ? true : A.name,
          size: b.g.MEDIUM,
          defaultComponent: (0, r.jsx)(Y, {})
        })
      }), (0, r.jsxs)("div", {
        className: O.tV,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: N.title
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: j.intl.format(j.t.Ngk8Nr, {
            channelName: w.name
          })
        })]
      }), (0, r.jsx)(c.m, {
        text: j.intl.string(j.t.bt75uw),
        children: (0, r.jsx)(o.K0, {
          icon: o.R2l,
          size: "sm",
          variant: "primary",
          onClick: z,
          "aria-label": j.intl.string(j.t.bt75uw)
        })
      })]
    }), null != F && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: F
    })]
  })
}