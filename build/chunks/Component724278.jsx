/** Chunk was on 98464 **/
/** chunk id: 724278, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  d = require.n(Chunk120356),
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

function U(e) {
  var n, t;
  let {
    creator: l,
    guildId: r,
    channelId: d
  } = e, {
    analyticsLocations: s
  } = (0, c.ZP)(), u = (0, a.e7)([m.ZP], () => m.ZP.getMember(r, l.id), [l, r]), _ = (0, g.X7)(null == u ? true : u.guildId, null == u ? true : u.userId, null != (n = null == u ? true : u.colorStrings) ? n : null);
  return (0, i.jsxs)("div", {
    className: O.row,
    children: [(0, i.jsx)(o.qEK, {
      size: o.EFr.SIZE_20,
      src: l.getAvatarURL(r, 20),
      "aria-label": null != (t = null == u ? true : u.nick) ? t : I.ZP.getName(l),
      className: O.icon
    }), (0, i.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: j.intl.format(j.t["66DLFh"], {
        usernameHook: function() {
          var e, n;
          return (0, i.jsx)(o.P3F, {
            onClick: () => (0, p.openUserProfileModal)({
              guildId: r,
              channelId: d,
              userId: l.id,
              roleId: null == u ? true : u.colorRoleId,
              sourceAnalyticsLocations: s
            }),
            className: O.creator,
            tag: "span",
            role: "link",
            children: (0, i.jsx)(o.PUh, {
              name: null != (e = null == u ? true : u.nick) ? e : I.ZP.getName(l),
              colorString: null != (n = null == u ? true : u.colorString) ? n : null,
              colorStrings: _
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function N(e) {
  let {
    guild: n,
    onClick: t,
    onClose: r
  } = e, a = l.useCallback(e => {
    null == t || t(e), null != t && (null == r || r(e))
  }, [t, r]), s = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.Z, {
      guild: n,
      size: u.Z.Sizes.MINI,
      active: true,
      className: d()(O.guildIcon, O.icon)
    }), (0, i.jsx)(_.Z, {
      guild: n,
      tooltipPosition: "top",
      tooltipColor: o.ua7.Colors.PRIMARY,
      size: 16,
      className: O.guildBadge
    }), (0, i.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: O.linkText,
      children: n.name
    })]
  });
  return (0, i.jsx)("div", {
    className: O.row,
    children: null != t ? (0, i.jsx)(o.P3F, {
      onClick: a,
      className: O.clickable,
      role: "link",
      children: s
    }) : s
  })
}

function G(e) {
  let {
    userCount: n,
    onClick: t
  } = e;
  return (0, i.jsxs)("div", {
    className: O.row,
    children: [(0, i.jsx)(o.BFJ, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: O.icon
    }), (0, i.jsx)(o.P3F, {
      onClick: t,
      className: O.interestedCount,
      children: (0, i.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: j.intl.format(j.t["+DLsDw"], {
          count: n
        })
      })
    })]
  })
}

function Z(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: r,
    headerId: d,
    onClose: c,
    onClickInterestedCount: u,
    isHub: _ = false,
    containerRef: g,
    recurrenceId: p,
    setRecurrenceId: m
  } = e, I = (0, a.e7)([f.Z], () => null != f.Z.getGuild(t.id), [t.id]), {
    startTime: j,
    endTime: Z
  } = (0, b.ZP)(n, p), P = (0, C.Z)(n.guild_id, n.id, p), R = l.useCallback(e => {
    e.stopPropagation(), null != n && (0, s.Bk)(n)
  }, [n]), z = (0, E.Z)(p, n.id), A = (0, h.Z)(n);
  l.useEffect(() => {
    v.Z.getGuildEventUserCounts(t.id, n.id, null != p ? [p] : []), v.Z.getGuildEventsForCurrentUser(t.id)
  }, [t.id, n.id, p]);
  let B = (0, T.KV)(n.recurrence_rule),
    w = (null == n ? true : n.scheduled_start_time) != null ? (0, y.lh)(z, j, new Date(null == n ? true : n.scheduled_start_time)) : null;
  return (0, i.jsxs)("div", {
    ref: g,
    children: [(0, i.jsxs)("div", {
      className: O.header,
      children: [(0, i.jsx)(S.z, {
        startTime: j.toISOString(),
        endTime: null == Z ? true : Z.toISOString(),
        status: null != w ? w : n.status,
        eventType: n.entity_type,
        guildEventId: n.id,
        recurrenceId: p
      }), (0, i.jsx)(o.X6q, {
        id: d,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: O.title,
        children: n.name
      })]
    }), (0, i.jsxs)("div", {
      className: O.body,
      children: [(0, i.jsx)(N, {
        guild: t,
        onClick: I ? R : true,
        onClose: c
      }), (0, i.jsx)(D.Z, {
        guildScheduledEvent: n,
        channel: r,
        onClose: c
      }), null != P && (0, i.jsx)(G, {
        userCount: P,
        onClick: u
      }), !_ && null != A && (0, i.jsx)(U, {
        creator: A,
        guildId: t.id,
        channelId: null == r ? true : r.id
      }, A.id), null != n.description && (0, i.jsx)("div", {
        className: O.description,
        children: (0, i.jsx)(x.Z, {
          description: n.description,
          truncate: false,
          guildId: t.id
        })
      })]
    }), null != B && (0, i.jsx)("hr", {
      className: O.divider
    }), null != B && (0, i.jsx)(L.Z, {
      guildId: t.id,
      recurrenceRule: B,
      guildEventId: n.id,
      onRecurrenceClick: m,
      hideScroller: true,
      activeRecurrenceId: p
    })]
  })
}