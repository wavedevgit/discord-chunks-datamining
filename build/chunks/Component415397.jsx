/** Chunk was on 57336 **/
/** chunk id: 415397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
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

function _(e) {
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

function x(e) {
  let {
    channel: t,
    inviteKey: l,
    onHoverOrFocus: o,
    setPopoutRef: c,
    closePopout: d
  } = e, p = r.useRef(null), h = (0, g.Tu)(p), m = (0, g.j1)({
    channel: t
  });
  r.useEffect(() => {
    null == c || c(p.current)
  }, [c]), r.useEffect(() => {
    null == o || o(h.isHoveringOrFocusing)
  }, [o, h]);
  let x = r.useCallback(() => {
    let e = f.Z.getGuild(t.guild_id);
    s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"), (0, u.ZDy)(async () => {
      let {
        default: r
      } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(n.bind(n, 560114));
      return n => {
        var l, a;
        return (0, i.jsx)(r, (l = _({}, n), a = a = {
          guild: e,
          channel: t,
          source: b.t4x.VOICE_INVITE_SUGGESTIONS
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
    }), d()
  }, [t, d]);
  return (0, i.jsx)("div", {
    ref: p,
    "aria-label": y.intl.string(y.t.o53CL2),
    className: a()(v.popover, C.popover),
    children: (0, i.jsx)("div", {
      className: C.inner,
      children: (0, i.jsxs)("ul", {
        className: C.list,
        children: [m.map(e => (0, i.jsx)(j, {
          channel: t,
          user: e,
          inviteKey: l
        }, e.id)), (0, i.jsxs)(u.P3F, {
          tag: "li",
          onClick: x,
          className: a()(C.row, C.clickable),
          children: [(0, i.jsx)("div", {
            className: C.leading,
            children: (0, i.jsx)(u.oLu, {
              size: "refresh_sm",
              className: C.icon
            })
          }), (0, i.jsx)(u.Text, {
            variant: "text-md/medium",
            className: C.name,
            lineClamp: 1,
            children: y.intl.string(y.t.NOP3Ry)
          })]
        })]
      })
    })
  })
}

function j(e) {
  let {
    channel: t,
    user: n,
    inviteKey: l
  } = e, o = r.useRef(null), s = (0, c.e7)([h.ZP], () => h.ZP.getMember(t.guild_id, n.id), [t.guild_id, n.id]), {
    isHoveringOrFocusing: f
  } = (0, g.Tu)(o), [b, v] = r.useState(null), x = "success" === b || "sending" === b || null == l, j = r.useCallback(() => {
    x || null != l && (v("sending"), d.Z.enqueue({
      type: d.m.USER,
      user: n,
      inviteKey: l,
      location: "VoiceInviteSuggestionsPopover",
      inviteAnalyticsMetadata: {}
    }, e => {
      v(e ? "success" : null)
    }))
  }, [x, l, n]), {
    avatarDecorationSrc: O,
    avatarSrc: E,
    eventHandlers: S
  } = (0, p.Z)({
    userId: n.id,
    size: u.EFr.SIZE_24,
    animateOnHover: !f,
    guildId: t.guild_id
  });
  if (null == s) return null;
  let P = m.ZP.getName(n);
  return (0, i.jsxs)(u.P3F, {
    innerRef: o,
    tag: "li",
    "aria-label": y.intl.string(y.t.jYnGPG),
    className: a()(C.row, {
      [C.clickable]: !x
    }),
    onClick: j,
    "aria-disabled": x,
    children: [(0, i.jsx)(u.qEK, _({
      className: C.avatar,
      "aria-label": P,
      size: u.EFr.SIZE_24,
      src: E,
      avatarDecoration: O
    }, S)), (0, i.jsx)(u.Text, {
      variant: "text-md/medium",
      className: C.name,
      lineClamp: 1,
      children: P
    }), "sending" === b && (0, i.jsx)("div", {
      className: C.dots,
      children: (0, i.jsx)(u.bbz, {
        dotRadius: 2,
        themed: true
      })
    }), "success" === b && (0, i.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: C.status,
      lineClamp: 1,
      children: y.intl.string(y.t["8BEiNn"])
    })]
  })
}