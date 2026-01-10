/** Chunk was on 81985 **/
/** chunk id: 415397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => N
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
  Chunk447543 = require("./447543.js"),
  Chunk630810 = require("./630810.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk518950 = require("./518950.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk341165 = require("./341165.js"),
  Chunk496675 = require("./496675.js"),
  Chunk51144 = require("./51144.js"),
  Chunk771027 = require("./771027.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk303092 = require("./303092.js"),
  Chunk770966 = require("./770966.js");

function P(e) {
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
let Z = "VoiceInviteSuggestionsPopover";

function N(e) {
  let {
    channel: t,
    onHoverOrFocus: l,
    setPopoutRef: o,
    closePopout: u
  } = e, p = i.useRef(null), f = (0, C.Tu)(p), b = (0, C.j1)({
    channel: t
  }), {
    analyticsLocations: y
  } = (0, g.ZP)(h.Z.VOICE_INVITE_SUGGESTIONS_POPOVER);
  (0, m.Z)({
    name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
    type: c.ImpressionTypes.POPOUT,
    properties: {
      voice_channel_id: t.id,
      voice_guild_id: t.guild_id,
      location_stack: y
    }
  }), i.useEffect(() => {
    null == o || o(p.current)
  }, [o]), i.useEffect(() => {
    null == l || l(f.isHoveringOrFocusing)
  }, [l, f]);
  let O = i.useCallback(() => {
    let e = v.Z.getGuild(t.guild_id);
    s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"), (0, d.ZDy)(async () => {
      let {
        default: i
      } = await Promise.all([n.e("7654"), n.e("49049"), n.e("97016")]).then(n.bind(n, 560114));
      return n => {
        var l, a;
        return (0, r.jsx)(i, (l = P({}, n), a = a = {
          guild: e,
          channel: t,
          source: E.t4x.VOICE_INVITE_SUGGESTIONS
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l))
      }
    }), u()
  }, [t, u]);
  return (0, r.jsx)("div", {
    ref: p,
    "aria-label": S.intl.string(S.t.o53CL2),
    className: a()(I.popover, _.popover),
    children: (0, r.jsx)("div", {
      className: _.inner,
      children: (0, r.jsxs)("ul", {
        className: _.list,
        children: [b.map(e => (0, r.jsx)(T, {
          channel: t,
          user: e
        }, e.id)), (0, r.jsxs)(d.P3F, {
          tag: "li",
          onClick: O,
          className: a()(_.row, _.clickable),
          children: [(0, r.jsx)("div", {
            className: _.leading,
            children: (0, r.jsx)(d.BFJ, {
              size: "xs",
              className: _.icon
            })
          }), (0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            className: _.name,
            lineClamp: 1,
            children: S.intl.string(S.t.NOP3Ry)
          })]
        })]
      })
    })
  })
}

function T(e) {
  let {
    channel: t,
    user: n
  } = e, l = i.useRef(null), o = (0, u.e7)([y.ZP], () => y.ZP.getMember(t.guild_id, n.id), [t.guild_id, n.id]), {
    isHoveringOrFocusing: s
  } = (0, C.Tu)(l), [c, h] = i.useState(null), g = "success" === c || "sending" === c, m = i.useCallback(async () => {
    if (g) return;
    async function e() {
      var e, n, r;
      let i = null != (e = O.Z.getInvite(t.id, {})) ? e : null;
      if (null == i) {
        if (!j.Z.can(E.Plq.CREATE_INSTANT_INVITE, t)) return null;
        try {
          await p.ZP.createInvite(t.id, {}, Z)
        } catch (e) {
          return null
        }
        i = null != (n = O.Z.getInvite(t.id, {})) ? n : null
      }
      return null != (r = null == i ? true : i.code) ? r : null
    }
    h("sending");
    let r = await e();
    if (null == r) return void h(null);
    f.Z.enqueue({
      type: f.m.USER,
      user: n,
      inviteKey: r,
      location: Z,
      inviteAnalyticsMetadata: {
        source: E.t4x.VOICE_INVITE_SUGGESTIONS
      }
    }, e => {
      h(e ? "success" : null)
    })
  }, [g, n, t]), {
    avatarDecorationSrc: v,
    avatarSrc: I,
    eventHandlers: N
  } = (0, b.Z)({
    userId: n.id,
    size: d.EFr.SIZE_24,
    animateOnHover: !s,
    guildId: t.guild_id
  });
  if (null == o) return null;
  let T = x.ZP.getName(n),
    A = S.intl.string(S.t.jYnGPG);
  return (0, r.jsxs)(d.P3F, {
    innerRef: l,
    tag: "li",
    className: a()(_.row, {
      [_.clickable]: !g
    }),
    "aria-disabled": g,
    onClick: m,
    "aria-label": A,
    children: [(0, r.jsx)(d.qEK, P({
      className: _.avatar,
      "aria-label": T,
      size: d.EFr.SIZE_24,
      src: I,
      avatarDecoration: v
    }, N)), (0, r.jsx)(d.Text, {
      variant: "text-md/medium",
      className: _.name,
      lineClamp: 1,
      children: T
    }), "sending" === c && (0, r.jsx)("div", {
      className: _.dots,
      children: (0, r.jsx)(d.bbz, {
        dotRadius: 2,
        themed: true
      })
    }), "success" === c && (0, r.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: _.status,
      lineClamp: 1,
      children: S.intl.string(S.t["8BEiNn"])
    }), null == c && (0, r.jsx)("div", {
      className: _.userIconContainer,
      children: (0, r.jsx)(d.oLu, {
        color: "currentColor",
        size: "xs",
        className: _.icon
      })
    })]
  })
}