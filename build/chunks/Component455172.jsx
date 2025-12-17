/** Chunk was on 67000 **/
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
    className: x.row,
    children: [(0, r.jsx)(t, {
      className: x.activityIcon,
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
    children: C.intl.string(C.t.fpKdS1)
  }) : (0, r.jsx)(p.Z, {
    muteConfig: t,
    className: n
  })
}

function I(e) {
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
      l = (0, o.Wu)([u.ZP, v.default], () => u.ZP.getEmbeddedActivitiesForChannel(t).flatMap(e => Array.from(e.userIds)).map(e => v.default.getUser(e)), [t]),
      a = i.useMemo(() => (0, f.dq)(l, n), [l, n]),
      s = i.useMemo(() => (0, b.C)(a, r, "DirectMessageTooltip - activityUsers"), [a, r]),
      c = (0, o.Wu)([m.Z, v.default], () => {
        let e = m.Z.getAllApplicationStreamsForChannel(t).map(e => e.ownerId).map(e => v.default.getUser(e));
        return (0, f.dq)(e, n)
      }, [t, n]),
      d = i.useMemo(() => (0, f.dq)(c, n), [c, n]),
      h = i.useMemo(() => (0, b.C)(d, r, "DirectMessageTooltip - activityUsers"), [d, r]),
      p = i.useMemo(() => h.filter(e => !s.some(t => t.id === e.id)), [h, s]),
      O = (0, o.Wu)([j.ZP], () => {
        let t = j.ZP.getVoiceStatesForChannel(e).map(e => {
          let {
            user: t
          } = e;
          return t
        });
        return (0, f.dq)(t, n)
      }, [e, n]),
      C = i.useMemo(() => (0, f.dq)(O, n), [O, n]),
      x = i.useMemo(() => (0, b.C)(C, r, "DirectMessageTooltip - voiceUsers"), [C, r]);
    return {
      voiceUsers: i.useMemo(() => x.filter(e => !s.some(t => t.id === e.id) && !h.some(t => t.id === e.id)), [x, s, h]),
      streamUsers: p,
      activityUsers: s
    }
  }(t), h = (0, r.jsx)(E, {
    icon: c.gj8,
    users: d
  }), p = (0, r.jsx)(E, {
    icon: c.hGI,
    users: s
  }), C = (0, r.jsx)(E, {
    icon: c.nG3,
    users: l
  }), {
    isMuted: I,
    muteConfig: _
  } = (0, o.cj)([O.ZP], () => ({
    isMuted: O.ZP.isChannelMuted(null, n),
    muteConfig: O.ZP.getChannelMuteConfig(null, n)
  }), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [h, p, C, I ? (0, r.jsx)(S, {
      muteConfig: _,
      className: a()(x.muteText, {
        [x.muteTextWithActivity]: null != h || null != p
      })
    }) : null]
  })
}

function _(e) {
  let {
    channel: t
  } = e, n = (0, h.ZP)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(x.row, x.rowGuildName),
      children: (0, r.jsx)("span", {
        className: a()(x.guildNameText, x.guildNameTextLimitedSize),
        children: n
      })
    }), (0, r.jsx)(I, {
      channel: t
    })]
  })
}

function P(e) {
  let {
    channel: t,
    children: n
  } = e, l = (0, h.ZP)(t), a = i.useMemo(() => (0, r.jsx)("div", {
    className: x.guildTooltipWrapper,
    children: (0, r.jsx)(_, {
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