/** Chunk was on 40184 **/
/** chunk id: 415397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => T
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

function I(e) {
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
let Z = "VoiceInviteSuggestionsPopover";

function T(e) {
  let {
    channel: t,
    onHoverOrFocus: l,
    setPopoutRef: o,
    closePopout: u
  } = e, p = r.useRef(null), f = (0, E.Tu)(p), b = (0, E.j1)({
    channel: t
  }), {
    analyticsLocations: y
  } = (0, m.ZP)(h.Z.VOICE_INVITE_SUGGESTIONS_POPOVER);
  (0, g.Z)({
    name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
    type: c.ImpressionTypes.POPOUT,
    properties: {
      voice_channel_id: t.id,
      voice_guild_id: t.guild_id,
      location_stack: y
    }
  }), r.useEffect(() => {
    null == o || o(p.current)
  }, [o]), r.useEffect(() => {
    null == l || l(f.isHoveringOrFocusing)
  }, [l, f]);
  let v = r.useCallback(() => {
    let e = C.Z.getGuild(t.guild_id);
    s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"), (0, d.ZDy)(async () => {
      let {
        default: r
      } = await Promise.all([n.e("49049"), n.e("7654"), n.e("97016")]).then(n.bind(n, 560114));
      return n => {
        var l, a;
        return (0, i.jsx)(r, (l = I({}, n), a = a = {
          guild: e,
          channel: t,
          source: j.t4x.VOICE_INVITE_SUGGESTIONS
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
    "aria-label": S.intl.string(S.t.o53CL2),
    className: a()(P.popover, _.popover),
    children: (0, i.jsx)("div", {
      className: _.inner,
      children: (0, i.jsxs)("ul", {
        className: _.list,
        children: [b.map(e => (0, i.jsx)(N, {
          channel: t,
          user: e
        }, e.id)), (0, i.jsxs)(d.P3F, {
          tag: "li",
          onClick: v,
          className: a()(_.row, _.clickable),
          children: [(0, i.jsx)("div", {
            className: _.leading,
            children: (0, i.jsx)(d.BFJ, {
              size: "xs",
              className: _.icon
            })
          }), (0, i.jsx)(d.Text, {
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

function N(e) {
  let {
    channel: t,
    user: n
  } = e, l = r.useRef(null), o = (0, u.e7)([y.ZP], () => y.ZP.getMember(t.guild_id, n.id), [t.guild_id, n.id]), {
    isHoveringOrFocusing: s
  } = (0, E.Tu)(l), [c, h] = r.useState(null), m = "success" === c || "sending" === c, g = r.useCallback(async () => {
    if (m) return;
    async function e() {
      var e, n, i;
      let r = null != (e = v.Z.getInvite(t.id, {})) ? e : null;
      if (null == r) {
        if (!x.Z.can(j.Plq.CREATE_INSTANT_INVITE, t)) return null;
        try {
          await p.ZP.createInvite(t.id, {}, Z)
        } catch (e) {
          return null
        }
        r = null != (n = v.Z.getInvite(t.id, {})) ? n : null
      }
      return null != (i = null == r ? true : r.code) ? i : null
    }
    h("sending");
    let i = await e();
    if (null == i) return void h(null);
    f.Z.enqueue({
      type: f.m.USER,
      user: n,
      inviteKey: i,
      location: Z,
      inviteAnalyticsMetadata: {
        source: j.t4x.VOICE_INVITE_SUGGESTIONS
      }
    }, e => {
      h(e ? "success" : null)
    })
  }, [m, n, t]), {
    avatarDecorationSrc: C,
    avatarSrc: P,
    eventHandlers: T
  } = (0, b.Z)({
    userId: n.id,
    size: d.EFr.SIZE_24,
    animateOnHover: !s,
    guildId: t.guild_id
  });
  if (null == o) return null;
  let N = O.ZP.getName(n),
    A = S.intl.string(S.t.jYnGPG);
  return (0, i.jsxs)(d.P3F, {
    innerRef: l,
    tag: "li",
    className: a()(_.row, {
      [_.clickable]: !m
    }),
    "aria-disabled": m,
    onClick: g,
    "aria-label": A,
    children: [(0, i.jsx)(d.qEK, I({
      className: _.avatar,
      "aria-label": N,
      size: d.EFr.SIZE_24,
      src: P,
      avatarDecoration: C
    }, T)), (0, i.jsx)(d.Text, {
      variant: "text-md/medium",
      className: _.name,
      lineClamp: 1,
      children: N
    }), "sending" === c && (0, i.jsx)("div", {
      className: _.dots,
      children: (0, i.jsx)(d.bbz, {
        dotRadius: 2,
        themed: true
      })
    }), "success" === c && (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: _.status,
      lineClamp: 1,
      children: S.intl.string(S.t["8BEiNn"])
    }), null == c && (0, i.jsx)("div", {
      className: _.userIconContainer,
      children: (0, i.jsx)(d.oLu, {
        color: "currentColor",
        size: "xs",
        className: _.icon
      })
    })]
  })
}