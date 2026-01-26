/** Chunk was on 39048 **/
/** chunk id: 987957, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O
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
let O = function(e) {
  var t, l, O, v, y;
  let {
    guildId: A,
    action: E,
    actionIndex: N,
    onChange: S,
    onDelete: I,
    onDragStart: T,
    onDragComplete: C,
    onDragReset: P
  } = e, w = (0, a.bG)([f.A], () => f.A.getChannel(E.channelId)), R = (0, a.bG)([h.A], () => h.A.getGuild(A)), D = (0, a.bG)([x.A], () => x.A.getPendingData()[E.channelId]), {
    customEmoji: G,
    unicodeEmoji: L
  } = (0, g.A)(null == (l = E.emoji) ? true : l.id, null == (O = E.emoji) ? true : O.name), k = null == E.emoji || null != G || null != L, M = b.Ay.getNewMemberActionIconURL({
    channelId: E.channelId,
    icon: E.icon
  }), U = null != D ? D.iconData : M, B = null;
  null != w && (0, m.Rc)(w) ? k || (B = j.intl.string(j.t.wAkIZW)) : B = j.intl.string(j.t.CbTEKP);
  let {
    drag: F,
    dragSourcePosition: H,
    drop: V,
    setIsDraggable: K
  } = (0, u.A)({
    type: "NEW_MEMBER_ACTION",
    index: N,
    optionId: E.channelId,
    onDragStart: T,
    onDragComplete: C,
    onDragReset: P
  }), z = i.useCallback(() => {
    if (null != A) return (0, c.mMO)(async () => {
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
          guildId: A,
          action: E,
          onSave: (e, t, n) => S(N, e, t, n),
          onDelete: () => I(N)
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
  }, [A, E, N, S, I]);
  if (null == w || null == R) return null;
  let W = null != (t = (0, d.gU)(w)) ? t : c.N$i;
  return (0, r.jsxs)("div", {
    className: _.L8,
    children: [(0, r.jsxs)("div", {
      className: s()(_.kv, {
        [_.A]: null != H && N < H,
        [_.Ze]: null != H && N > H,
        [_.e5]: null != B
      }),
      ref: e => {
        F(V(e))
      },
      children: [(0, r.jsx)("div", {
        className: _.cK,
        onMouseEnter: () => K(true),
        onMouseLeave: () => K(false),
        children: (0, r.jsx)(c.WP0, {
          size: "xs",
          color: "currentColor",
          className: _.co
        })
      }), null != U ? (0, r.jsx)("div", {
        className: _.P0,
        children: (0, r.jsx)("img", {
          src: U,
          className: _.Kk,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": true
        })
      }) : (0, r.jsx)("div", {
        className: _.zV,
        children: (0, r.jsx)(p.A, {
          emojiId: null == (v = E.emoji) ? true : v.id,
          emojiName: null == (y = E.emoji) ? true : y.name,
          size: p.g.MEDIUM,
          defaultComponent: (0, r.jsx)(W, {})
        })
      }), (0, r.jsxs)("div", {
        className: _.tV,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: E.title
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: j.intl.format(j.t.Ngk8Nr, {
            channelName: w.name
          })
        })]
      }), (0, r.jsx)(o.m, {
        text: j.intl.string(j.t.bt75uw),
        children: (0, r.jsx)(c.K0, {
          icon: c.R2l,
          size: "sm",
          variant: "primary",
          onClick: z,
          "aria-label": j.intl.string(j.t.bt75uw)
        })
      })]
    }), null != B && (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: B
    })]
  })
}