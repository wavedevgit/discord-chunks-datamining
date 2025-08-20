/** Chunk was on 25046 **/
/** chunk id: 724278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk892001 = require("./892001.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk51144 = require("./51144.js"),
  Chunk897285 = require("./897285.js"),
  Chunk978227 = require("./978227.js"),
  Chunk894017 = require("./894017.js"),
  Chunk79874 = require("./79874.js"),
  Chunk376108 = require("./376108.js"),
  Chunk236373 = require("./236373.js"),
  Chunk954313 = require("./954313.js"),
  Chunk391174 = require("./391174.jsx"),
  Chunk810561 = require("./810561.jsx"),
  Chunk390966 = require("./390966.jsx"),
  Chunk390072 = require("./390072.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831272 = require("./831272.js");

function D(e) {
  var t, n;
  let {
    creator: l,
    guildId: r,
    channelId: a
  } = e, {
    analyticsLocations: o
  } = (0, c.ZP)(), u = (0, d.e7)([m.ZP], () => m.ZP.getMember(r, l.id), [l, r]), _ = (0, g.X7)(null == u ? true : u.guildId, null == u ? true : u.userId, null != (t = null == u ? true : u.colorStrings) ? t : null);
  return (0, i.jsxs)("div", {
    className: U.row,
    children: [(0, i.jsx)(s.qEK, {
      size: s.EFr.SIZE_20,
      src: l.getAvatarURL(r, 20),
      "aria-label": null != (n = null == u ? true : u.nick) ? n : E.ZP.getName(l),
      className: U.icon
    }), (0, i.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: S.intl.format(S.t["66DLFh"], {
        usernameHook: function() {
          var e, t;
          return (0, i.jsx)(s.P3F, {
            onClick: () => (0, p.openUserProfileModal)({
              guildId: r,
              channelId: a,
              userId: l.id,
              roleId: null == u ? true : u.colorRoleId,
              sourceAnalyticsLocations: o
            }),
            className: U.creator,
            tag: "span",
            role: "link",
            children: (0, i.jsx)(s.PUh, {
              name: null != (e = null == u ? true : u.nick) ? e : E.ZP.getName(l),
              colorString: null != (t = null == u ? true : u.colorString) ? t : null,
              colorStrings: _
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function G(e) {
  let {
    guild: t,
    onClick: n,
    onClose: r
  } = e, d = l.useCallback(e => {
    null == n || n(e), null != n && (null == r || r(e))
  }, [n, r]), o = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.Z, {
      guild: t,
      size: u.Z.Sizes.MINI,
      active: true,
      className: a()(U.guildIcon, U.icon)
    }), (0, i.jsx)(_.Z, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: s.ua7.Colors.PRIMARY,
      size: 16,
      className: U.guildBadge
    }), (0, i.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: U.linkText,
      children: t.name
    })]
  });
  return (0, i.jsx)("div", {
    className: U.row,
    children: null != n ? (0, i.jsx)(s.P3F, {
      onClick: d,
      className: U.clickable,
      role: "link",
      children: o
    }) : o
  })
}

function N(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, i.jsxs)("div", {
    className: U.row,
    children: [(0, i.jsx)(s.BFJ, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: U.icon
    }), (0, i.jsx)(s.P3F, {
      onClick: n,
      className: U.interestedCount,
      children: (0, i.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: S.intl.format(S.t["+DLsDw"], {
          count: t
        })
      })
    })]
  })
}

function Z(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    headerId: a,
    onClose: c,
    onClickInterestedCount: u,
    isHub: _ = false,
    containerRef: g,
    recurrenceId: p,
    setRecurrenceId: m
  } = e, E = (0, d.e7)([I.Z], () => null != I.Z.getGuild(n.id), [n.id]), {
    startTime: S,
    endTime: Z
  } = (0, T.ZP)(t, p), P = (0, y.Z)(t.guild_id, t.id, p), A = l.useCallback(e => {
    e.stopPropagation(), null != t && (0, o.Bk)(t)
  }, [t]), R = (0, v.Z)(p, t.id), z = (0, h.Z)(t);
  l.useEffect(() => {
    f.Z.getGuildEventUserCounts(n.id, t.id, null != p ? [p] : []), f.Z.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, p]);
  let w = (0, C.KV)(t.recurrence_rule),
    H = (null == t ? true : t.scheduled_start_time) != null ? (0, x.lh)(R, S, new Date(null == t ? true : t.scheduled_start_time)) : null;
  return (0, i.jsxs)("div", {
    ref: g,
    children: [(0, i.jsxs)("div", {
      className: U.header,
      children: [(0, i.jsx)(b.z, {
        startTime: S.toISOString(),
        endTime: null == Z ? true : Z.toISOString(),
        status: null != H ? H : t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: p
      }), (0, i.jsx)(s.X6q, {
        id: a,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: U.title,
        children: t.name
      })]
    }), (0, i.jsxs)("div", {
      className: U.body,
      children: [(0, i.jsx)(G, {
        guild: n,
        onClick: E ? A : true,
        onClose: c
      }), (0, i.jsx)(O.Z, {
        guildScheduledEvent: t,
        channel: r,
        onClose: c
      }), null != P && (0, i.jsx)(N, {
        userCount: P,
        onClick: u
      }), !_ && null != z && (0, i.jsx)(D, {
        creator: z,
        guildId: n.id,
        channelId: null == r ? true : r.id
      }, z.id), null != t.description && (0, i.jsx)("div", {
        className: U.description,
        children: (0, i.jsx)(L.Z, {
          description: t.description,
          truncate: false,
          guildId: n.id
        })
      })]
    }), null != w && (0, i.jsx)("hr", {
      className: U.divider
    }), null != w && (0, i.jsx)(j.Z, {
      guildId: n.id,
      recurrenceRule: w,
      guildEventId: t.id,
      onRecurrenceClick: m,
      hideScroller: true,
      activeRecurrenceId: p
    })]
  })
}