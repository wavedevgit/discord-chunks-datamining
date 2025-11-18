/** Chunk was on 34740 **/
/** chunk id: 415397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk630810 = require("./630810.js"),
  Chunk518950 = require("./518950.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk51144 = require("./51144.js"),
  Chunk771027 = require("./771027.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764194 = require("./764194.js"),
  Chunk254477 = require("./254477.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function j(e) {
  let {
    channel: t,
    inviteKey: l,
    onHoverOrFocus: o,
    setPopoutRef: c,
    closePopout: u
  } = e, p = r.useRef(null), h = (0, b.Tu)(p), f = (0, b.j1)({
    channel: t
  });
  r.useEffect(() => {
    null == c || c(p.current)
  }, [c]), r.useEffect(() => {
    null == o || o(h.isHoveringOrFocusing)
  }, [o, h]);
  let g = r.useCallback(() => {
    let e = m.Z.getGuild(t.guild_id);
    s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"), (0, d.ZDy)(async () => {
      let {
        default: r
      } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(n.bind(n, 560114));
      return n => {
        var l, a;
        return (0, i.jsx)(r, (l = x({}, n), a = a = {
          guild: e,
          channel: t,
          source: y.t4x.VOICE_INVITE_SUGGESTIONS
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l))
      }
    }), u()
  }, [t, u]);
  return (0, i.jsx)("div", {
    ref: p,
    "aria-label": C.intl.string(C.t.o53CL2),
    className: a()(_.popover, v.popover),
    children: (0, i.jsx)("div", {
      className: v.inner,
      children: (0, i.jsxs)("ul", {
        className: v.list,
        children: [f.map(e => (0, i.jsx)(O, {
          channel: t,
          user: e,
          inviteKey: l
        }, e.id)), (0, i.jsxs)(d.P3F, {
          tag: "li",
          onClick: g,
          className: a()(v.row, v.clickable),
          children: [(0, i.jsx)("div", {
            className: v.leading,
            children: (0, i.jsx)(d.oLu, {
              size: "refresh_sm",
              className: v.icon
            })
          }), (0, i.jsx)(d.Text, {
            variant: "text-md/medium",
            className: v.name,
            lineClamp: 1,
            children: C.intl.string(C.t.NOP3Ry)
          })]
        })]
      })
    })
  })
}

function O(e) {
  let {
    channel: t,
    user: n,
    inviteKey: l
  } = e, a = r.useRef(null), o = (0, c.e7)([f.ZP], () => f.ZP.getMember(t.guild_id, n.id), [t.guild_id, n.id]), {
    isHoveringOrFocusing: s
  } = (0, b.Tu)(a), [m, y] = r.useState(null), _ = "success" === m || "sending" === m || null == l, j = r.useCallback(() => {
    _ || null != l && (y("sending"), p.Z.enqueue({
      type: p.m.USER,
      user: n,
      inviteKey: l,
      location: "VoiceInviteSuggestionsPopover",
      inviteAnalyticsMetadata: {}
    }, e => {
      y(e ? "success" : null)
    }))
  }, [_, l, n]), {
    avatarDecorationSrc: O,
    avatarSrc: E,
    eventHandlers: S
  } = (0, h.Z)({
    userId: n.id,
    size: d.EFr.SIZE_24,
    animateOnHover: !s,
    guildId: t.guild_id
  });
  if (null == o) return null;
  let P = g.ZP.getName(n),
    I = C.intl.string(C.t.jYnGPG);
  return (0, i.jsxs)("li", {
    ref: a,
    className: v.row,
    children: [(0, i.jsx)(d.qEK, x({
      className: v.avatar,
      "aria-label": P,
      size: d.EFr.SIZE_24,
      src: E,
      avatarDecoration: O
    }, S)), (0, i.jsx)(d.Text, {
      variant: "text-md/medium",
      className: v.name,
      lineClamp: 1,
      children: P
    }), null == m && (0, i.jsx)(u.u, {
      text: C.intl.string(C.t["EE+P0H"]),
      children: (0, i.jsx)(d.hU, {
        icon: d.oLu,
        disabled: _,
        onClick: j,
        "aria-label": I,
        size: "sm",
        variant: "secondary"
      })
    }), "sending" === m && (0, i.jsx)("div", {
      className: v.dots,
      children: (0, i.jsx)(d.bbz, {
        dotRadius: 2,
        themed: true
      })
    }), "success" === m && (0, i.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: v.status,
      lineClamp: 1,
      children: C.intl.string(C.t["8BEiNn"])
    })]
  })
}