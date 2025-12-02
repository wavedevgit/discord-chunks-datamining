/** Chunk was on 34740 **/
/** chunk id: 415397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk630810 = require("./630810.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk518950 = require("./518950.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk51144 = require("./51144.js"),
  Chunk771027 = require("./771027.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764194 = require("./764194.js"),
  Chunk254477 = require("./254477.js");

function j(e) {
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

function S(e) {
  let {
    channel: t,
    inviteKey: l,
    onHoverOrFocus: o,
    setPopoutRef: u,
    closePopout: p
  } = e, g = r.useRef(null), b = (0, v.Tu)(g), C = (0, v.j1)({
    channel: t
  }), {
    analyticsLocations: S
  } = (0, f.ZP)(h.Z.VOICE_INVITE_SUGGESTIONS_POPOVER);
  (0, m.Z)({
    name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
    type: c.ImpressionTypes.POPOUT,
    properties: {
      voice_channel_id: t.id,
      voice_guild_id: t.guild_id,
      location_stack: S
    }
  }), r.useEffect(() => {
    null == u || u(g.current)
  }, [u]), r.useEffect(() => {
    null == o || o(b.isHoveringOrFocusing)
  }, [o, b]);
  let I = r.useCallback(() => {
    let e = y.Z.getGuild(t.guild_id);
    s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"), (0, d.ZDy)(async () => {
      let {
        default: r
      } = await Promise.all([n.e("49049"), n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
      return n => {
        var l, a;
        return (0, i.jsx)(r, (l = j({}, n), a = a = {
          guild: e,
          channel: t,
          source: _.t4x.VOICE_INVITE_SUGGESTIONS
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
    }), p()
  }, [t, p]);
  return (0, i.jsx)("div", {
    ref: g,
    "aria-label": O.intl.string(O.t.o53CL2),
    className: a()(E.popover, x.popover),
    children: (0, i.jsx)("div", {
      className: x.inner,
      children: (0, i.jsxs)("ul", {
        className: x.list,
        children: [C.map(e => (0, i.jsx)(P, {
          channel: t,
          user: e,
          inviteKey: l
        }, e.id)), (0, i.jsxs)(d.P3F, {
          tag: "li",
          onClick: I,
          className: a()(x.row, x.clickable),
          children: [(0, i.jsx)("div", {
            className: x.leading,
            children: (0, i.jsx)(d.BFJ, {
              size: "xs",
              className: x.icon
            })
          }), (0, i.jsx)(d.Text, {
            variant: "text-md/medium",
            className: x.name,
            lineClamp: 1,
            children: O.intl.string(O.t.NOP3Ry)
          })]
        })]
      })
    })
  })
}

function P(e) {
  let {
    channel: t,
    user: n,
    inviteKey: l
  } = e, o = r.useRef(null), s = (0, u.e7)([b.ZP], () => b.ZP.getMember(t.guild_id, n.id), [t.guild_id, n.id]), {
    isHoveringOrFocusing: c
  } = (0, v.Tu)(o), [h, f] = r.useState(null), m = "success" === h || "sending" === h || null == l, y = r.useCallback(() => {
    m || null != l && (f("sending"), p.Z.enqueue({
      type: p.m.USER,
      user: n,
      inviteKey: l,
      location: "VoiceInviteSuggestionsPopover",
      inviteAnalyticsMetadata: {
        source: _.t4x.VOICE_INVITE_SUGGESTIONS
      }
    }, e => {
      f(e ? "success" : null)
    }))
  }, [m, l, n]), {
    avatarDecorationSrc: E,
    avatarSrc: S,
    eventHandlers: P
  } = (0, g.Z)({
    userId: n.id,
    size: d.EFr.SIZE_24,
    animateOnHover: !c,
    guildId: t.guild_id
  });
  if (null == s) return null;
  let I = C.ZP.getName(n),
    Z = O.intl.string(O.t.jYnGPG);
  return (0, i.jsxs)(d.P3F, {
    innerRef: o,
    tag: "li",
    className: a()(x.row, {
      [x.clickable]: !m
    }),
    "aria-disabled": m,
    onClick: y,
    "aria-label": Z,
    children: [(0, i.jsx)(d.qEK, j({
      className: x.avatar,
      "aria-label": I,
      size: d.EFr.SIZE_24,
      src: S,
      avatarDecoration: E
    }, P)), (0, i.jsx)(d.Text, {
      variant: "text-md/medium",
      className: x.name,
      lineClamp: 1,
      children: I
    }), "sending" === h && (0, i.jsx)("div", {
      className: x.dots,
      children: (0, i.jsx)(d.bbz, {
        dotRadius: 2,
        themed: true
      })
    }), "success" === h && (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: x.status,
      lineClamp: 1,
      children: O.intl.string(O.t["8BEiNn"])
    }), null == h && (0, i.jsx)("div", {
      className: x.userIconContainer,
      children: (0, i.jsx)(d.oLu, {
        color: "currentColor",
        size: "xs",
        className: x.icon
      })
    })]
  })
}