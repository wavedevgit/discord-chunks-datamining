/** Chunk was on 41727 **/
/** chunk id: 778768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk110259 = require("./110259.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk774300 = require("./774300.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk854627 = require("./854627.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk958590 = require("./958590.js"),
  Chunk576705 = require("./576705.js"),
  Chunk427262 = require("./427262.js"),
  Chunk582904 = require("./582904.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk357694 = require("./357694.js"),
  Chunk248789 = require("./248789.js");

function I(e) {
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
let N = "VoiceInviteSuggestionsPopover";

function T(e) {
  let {
    channel: t,
    onHoverOrFocus: i,
    setPopoutRef: a,
    closePopout: u
  } = e, p = l.useRef(null), h = (0, v.L7)(p), b = (0, v.kt)({
    channel: t
  }), {
    analyticsLocations: A
  } = (0, g.Ay)(f.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
  (0, m.A)({
    name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
    type: c.ImpressionTypes.POPOUT,
    properties: {
      voice_channel_id: t.id,
      voice_guild_id: t.guild_id,
      location_stack: A
    }
  }), l.useEffect(() => {
    null == a || a(p.current)
  }, [a]), l.useEffect(() => {
    null == i || i(h.isHoveringOrFocusing)
  }, [i, h]);
  let _ = l.useCallback(() => {
    let e = y.A.getGuild(t.guild_id);
    o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"), (0, d.mMO)(async () => {
      let {
        default: l
      } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
      return n => {
        var i, s;
        return (0, r.jsx)(l, (i = I({}, n), s = s = {
          guild: e,
          channel: t,
          source: x.PE1.VOICE_INVITE_SUGGESTIONS
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    }), u()
  }, [t, u]);
  return (0, r.jsx)("div", {
    ref: p,
    "aria-label": E.intl.string(E.t.o53CL2),
    className: s()(S.popover, C.oO),
    children: (0, r.jsx)("div", {
      className: C.vW,
      children: (0, r.jsxs)("ul", {
        className: C.p_,
        children: [b.map(e => (0, r.jsx)(P, {
          channel: t,
          user: e
        }, e.id)), (0, r.jsxs)(d.DUT, {
          tag: "li",
          onClick: _,
          className: s()(C.nM, C.vk),
          children: [(0, r.jsx)("div", {
            className: C.R4,
            children: (0, r.jsx)(d.nFg, {
              size: "xs",
              className: C.Kk
            })
          }), (0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            className: C.UU,
            lineClamp: 1,
            children: E.intl.string(E.t.NOP3Ry)
          })]
        })]
      })
    })
  })
}

function P(e) {
  let {
    channel: t,
    user: n
  } = e, i = l.useRef(null), a = (0, u.bG)([A.Ay], () => A.Ay.getMember(t.guild_id, n.id), [t.guild_id, n.id]), {
    isHoveringOrFocusing: o
  } = (0, v.L7)(i), [c, f] = l.useState(null), g = "success" === c || "sending" === c, m = l.useCallback(async () => {
    if (g) return;
    async function e() {
      var e, n, r;
      let l = null != (e = _.A.getInvite(t.id, {})) ? e : null;
      if (null == l) {
        if (!O.A.can(x.xBc.CREATE_INSTANT_INVITE, t)) return null;
        try {
          await p.Ay.createInvite(t.id, {}, N)
        } catch (e) {
          return null
        }
        l = null != (r = _.A.getInvite(t.id, {})) ? r : null
      }
      return null != (n = null == l ? true : l.code) ? n : null
    }
    f("sending");
    let r = await e();
    null == r ? f(null) : h.A.enqueue({
      type: h.F.USER,
      user: n,
      inviteKey: r,
      location: N,
      inviteAnalyticsMetadata: {
        source: x.PE1.VOICE_INVITE_SUGGESTIONS
      }
    }, e => {
      f(e ? "success" : null)
    })
  }, [g, n, t]), {
    avatarDecorationSrc: y,
    avatarSrc: S,
    eventHandlers: T
  } = (0, b.A)({
    userId: n.id,
    size: d._3J.SIZE_24,
    animateOnHover: !o,
    guildId: t.guild_id
  });
  if (null == a) return null;
  let P = j.Ay.getName(n),
    w = E.intl.string(E.t.jYnGPG);
  return (0, r.jsxs)(d.DUT, {
    innerRef: i,
    tag: "li",
    className: s()(C.nM, {
      [C.vk]: !g
    }),
    "aria-disabled": g,
    onClick: m,
    "aria-label": w,
    children: [(0, r.jsx)(d.euF, I({
      className: C.my,
      "aria-label": P,
      size: d._3J.SIZE_24,
      src: S,
      avatarDecoration: y
    }, T)), (0, r.jsx)(d.Text, {
      variant: "text-md/medium",
      className: C.UU,
      lineClamp: 1,
      children: P
    }), "sending" === c && (0, r.jsx)("div", {
      className: C.r$,
      children: (0, r.jsx)(d.nvX, {
        dotRadius: 2,
        themed: true
      })
    }), "success" === c && (0, r.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: C.h5,
      lineClamp: 1,
      children: E.intl.string(E.t["8BEiNn"])
    }), null == c && (0, r.jsx)("div", {
      className: C.SB,
      children: (0, r.jsx)(d.Rvf, {
        color: "currentColor",
        size: "xs",
        className: C.Kk
      })
    })]
  })
}