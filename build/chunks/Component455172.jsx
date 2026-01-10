/** Chunk was on 81985 **/
/** chunk id: 455172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk317381 = require("./317381.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk470883 = require("./470883.js"),
  Chunk933557 = require("./933557.js"),
  Chunk777861 = require("./777861.jsx"),
  Chunk752048 = require("./752048.js"),
  Chunk439944 = require("./439944.js"),
  Chunk199902 = require("./199902.js"),
  Chunk699516 = require("./699516.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk998081 = require("./998081.js");

function E(e) {
  let {
    icon: t,
    users: n
  } = e;
  return 0 === n.length ? null : (0, r.jsxs)("div", {
    className: C.row,
    children: [(0, r.jsx)(t, {
      className: C.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(d.ZP, {
      users: n,
      max: 6
    })]
  })
}

function S(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? true : t.end_time) == null ? (0, r.jsx)(c.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: x.intl.string(x.t.fpKdS1)
  }) : (0, r.jsx)(h.Z, {
    muteConfig: t,
    className: n
  })
}

function _(e) {
  let {
    channel: t
  } = e, n = t.id, {
    activityUsers: l,
    streamUsers: s,
    voiceUsers: d
  } = function(e) {
    let t = e.id,
      n = (0, o.Wu)([y.Z], () => y.Z.getBlockedOrIgnoredIDs()),
      r = (0, o.e7)([g.Z], () => g.Z.getUserAffinitiesMap(), []),
      l = (0, o.Wu)([u.ZP, O.default], () => u.ZP.getEmbeddedActivitiesForChannel(t).flatMap(e => Array.from(e.userIds)).map(e => O.default.getUser(e)), [t]),
      a = i.useMemo(() => (0, p.dq)(l, n), [l, n]),
      s = i.useMemo(() => (0, m.C)(a, r, "DirectMessageTooltip - activityUsers"), [a, r]),
      c = (0, o.Wu)([b.Z, O.default], () => {
        let e = b.Z.getAllApplicationStreamsForChannel(t).map(e => e.ownerId).map(e => O.default.getUser(e));
        return (0, p.dq)(e, n)
      }, [t, n]),
      d = i.useMemo(() => (0, p.dq)(c, n), [c, n]),
      f = i.useMemo(() => (0, m.C)(d, r, "DirectMessageTooltip - activityUsers"), [d, r]),
      h = i.useMemo(() => f.filter(e => !s.some(t => t.id === e.id)), [f, s]),
      v = (0, o.Wu)([j.ZP], () => {
        let t = j.ZP.getVoiceStatesForChannel(e).map(e => {
          let {
            user: t
          } = e;
          return t
        });
        return (0, p.dq)(t, n)
      }, [e, n]),
      x = i.useMemo(() => (0, p.dq)(v, n), [v, n]),
      C = i.useMemo(() => (0, m.C)(x, r, "DirectMessageTooltip - voiceUsers"), [x, r]);
    return {
      voiceUsers: i.useMemo(() => C.filter(e => !s.some(t => t.id === e.id) && !f.some(t => t.id === e.id)), [C, s, f]),
      streamUsers: h,
      activityUsers: s
    }
  }(t), f = (0, r.jsx)(E, {
    icon: c.gj8,
    users: d
  }), h = (0, r.jsx)(E, {
    icon: c.hGI,
    users: s
  }), x = (0, r.jsx)(E, {
    icon: c.nG3,
    users: l
  }), {
    isMuted: _,
    muteConfig: I
  } = (0, o.cj)([v.ZP], () => ({
    isMuted: v.ZP.isChannelMuted(null, n),
    muteConfig: v.ZP.getChannelMuteConfig(null, n)
  }), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [f, h, x, _ ? (0, r.jsx)(S, {
      muteConfig: I,
      className: a()(C.muteText, {
        [C.muteTextWithActivity]: null != f || null != h
      })
    }) : null]
  })
}

function I(e) {
  let {
    channel: t
  } = e, n = (0, f.ZP)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(C.row, C.rowGuildName),
      children: (0, r.jsx)("span", {
        className: a()(C.guildNameText, C.guildNameTextLimitedSize),
        children: n
      })
    }), (0, r.jsx)(_, {
      channel: t
    })]
  })
}

function P(e) {
  let {
    channel: t,
    children: n
  } = e, l = (0, f.ZP)(t), a = i.useMemo(() => (0, r.jsx)("div", {
    className: C.guildTooltipWrapper,
    children: (0, r.jsx)(I, {
      channel: t
    })
  }), [t]);
  return (0, r.jsx)(s.u, {
    __unsupportedReactNodeAsText: a,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    "aria-label": null != l ? l : true,
    asContainer: true,
    children: n
  })
}