/** Chunk was on 40184 **/
/** chunk id: 415397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => _
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
  Chunk303092 = require("./303092.js"),
  Chunk770966 = require("./770966.js");

function S(e) {
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

function _(e) {
  let {
    channel: t,
    inviteKey: l,
    onHoverOrFocus: o,
    setPopoutRef: u,
    closePopout: p
  } = e, g = r.useRef(null), b = (0, v.Tu)(g), y = (0, v.j1)({
    channel: t
  }), {
    analyticsLocations: _
  } = (0, h.ZP)(f.Z.VOICE_INVITE_SUGGESTIONS_POPOVER);
  (0, m.Z)({
    name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
    type: c.ImpressionTypes.POPOUT,
    properties: {
      voice_channel_id: t.id,
      voice_guild_id: t.guild_id,
      location_stack: _
    }
  }), r.useEffect(() => {
    null == u || u(g.current)
  }, [u]), r.useEffect(() => {
    null == o || o(b.isHoveringOrFocusing)
  }, [o, b]);
  let I = r.useCallback(() => {
    let e = C.Z.getGuild(t.guild_id);
    s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"), (0, d.ZDy)(async () => {
      let {
        default: r
      } = await Promise.all([n.e("49049"), n.e("7654"), n.e("97016")]).then(n.bind(n, 560114));
      return n => {
        var l, a;
        return (0, i.jsx)(r, (l = S({}, n), a = a = {
          guild: e,
          channel: t,
          source: x.t4x.VOICE_INVITE_SUGGESTIONS
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
    className: a()(j.popover, E.popover),
    children: (0, i.jsx)("div", {
      className: E.inner,
      children: (0, i.jsxs)("ul", {
        className: E.list,
        children: [y.map(e => (0, i.jsx)(P, {
          channel: t,
          user: e,
          inviteKey: l
        }, e.id)), (0, i.jsxs)(d.P3F, {
          tag: "li",
          onClick: I,
          className: a()(E.row, E.clickable),
          children: [(0, i.jsx)("div", {
            className: E.leading,
            children: (0, i.jsx)(d.BFJ, {
              size: "xs",
              className: E.icon
            })
          }), (0, i.jsx)(d.Text, {
            variant: "text-md/medium",
            className: E.name,
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
  } = (0, v.Tu)(o), [f, h] = r.useState(null), m = "success" === f || "sending" === f || null == l, C = r.useCallback(() => {
    m || null != l && (h("sending"), p.Z.enqueue({
      type: p.m.USER,
      user: n,
      inviteKey: l,
      location: "VoiceInviteSuggestionsPopover",
      inviteAnalyticsMetadata: {
        source: x.t4x.VOICE_INVITE_SUGGESTIONS
      }
    }, e => {
      h(e ? "success" : null)
    }))
  }, [m, l, n]), {
    avatarDecorationSrc: j,
    avatarSrc: _,
    eventHandlers: P
  } = (0, g.Z)({
    userId: n.id,
    size: d.EFr.SIZE_24,
    animateOnHover: !c,
    guildId: t.guild_id
  });
  if (null == s) return null;
  let I = y.ZP.getName(n),
    Z = O.intl.string(O.t.jYnGPG);
  return (0, i.jsxs)(d.P3F, {
    innerRef: o,
    tag: "li",
    className: a()(E.row, {
      [E.clickable]: !m
    }),
    "aria-disabled": m,
    onClick: C,
    "aria-label": Z,
    children: [(0, i.jsx)(d.qEK, S({
      className: E.avatar,
      "aria-label": I,
      size: d.EFr.SIZE_24,
      src: _,
      avatarDecoration: j
    }, P)), (0, i.jsx)(d.Text, {
      variant: "text-md/medium",
      className: E.name,
      lineClamp: 1,
      children: I
    }), "sending" === f && (0, i.jsx)("div", {
      className: E.dots,
      children: (0, i.jsx)(d.bbz, {
        dotRadius: 2,
        themed: true
      })
    }), "success" === f && (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: E.status,
      lineClamp: 1,
      children: O.intl.string(O.t["8BEiNn"])
    }), null == f && (0, i.jsx)("div", {
      className: E.userIconContainer,
      children: (0, i.jsx)(d.oLu, {
        color: "currentColor",
        size: "xs",
        className: E.icon
      })
    })]
  })
}