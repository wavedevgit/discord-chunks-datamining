/** Chunk was on 25046 **/
/** chunk id: 724278, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk854698 = require("./854698.js"),
  Chunk391174 = require("./391174.jsx"),
  Chunk810561 = require("./810561.jsx"),
  Chunk390966 = require("./390966.jsx"),
  Chunk390072 = require("./390072.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831272 = require("./831272.js");

function w(e) {
  var n, t;
  let {
    creator: r,
    guildId: i,
    channelId: s
  } = e, {
    analyticsLocations: a
  } = (0, d.ZP)(), u = (0, c.e7)([f.ZP], () => f.ZP.getMember(i, r.id), [r, i]), _ = (0, h.X7)(null == u ? true : u.guildId, null == u ? true : u.userId, null != (n = null == u ? true : u.colorStrings) ? n : null);
  return (0, l.jsxs)("div", {
    className: E.row,
    children: [(0, l.jsx)(o.qEK, {
      size: o.EFr.SIZE_20,
      src: r.getAvatarURL(i, 20),
      "aria-label": null != (t = null == u ? true : u.nick) ? t : g.ZP.getName(r),
      className: E.icon
    }), (0, l.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: k.intl.format(k.t["66DLFs"], {
        usernameHook: function() {
          var e, n;
          return (0, l.jsx)(o.P3F, {
            onClick: () => (0, m.openUserProfileModal)({
              guildId: i,
              channelId: s,
              userId: r.id,
              roleId: null == u ? true : u.colorRoleId,
              sourceAnalyticsLocations: a
            }),
            className: E.creator,
            tag: "span",
            role: "link",
            children: (0, l.jsx)(o.PUh, {
              name: null != (e = null == u ? true : u.nick) ? e : g.ZP.getName(r),
              colorString: null != (n = null == u ? true : u.colorString) ? n : null,
              colorStrings: _
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function O(e) {
  let {
    guild: n,
    onClick: t,
    onClose: i
  } = e, c = r.useCallback(e => {
    null == t || t(e), null != t && (null == i || i(e))
  }, [t, i]), a = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z, {
      guild: n,
      size: u.Z.Sizes.MINI,
      active: true,
      className: s()(E.guildIcon, E.icon)
    }), (0, l.jsx)(_.Z, {
      guild: n,
      tooltipPosition: "top",
      tooltipColor: o.aML.Colors.PRIMARY,
      size: 16,
      className: E.guildBadge
    }), (0, l.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: E.linkText,
      children: n.name
    })]
  });
  return (0, l.jsx)("div", {
    className: E.row,
    children: null != t ? (0, l.jsx)(o.P3F, {
      onClick: c,
      className: E.clickable,
      role: "link",
      children: a
    }) : a
  })
}

function T(e) {
  let {
    userCount: n,
    onClick: t
  } = e;
  return (0, l.jsxs)("div", {
    className: E.row,
    children: [(0, l.jsx)(o.BFJ, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: E.icon
    }), (0, l.jsx)(o.P3F, {
      onClick: t,
      className: E.interestedCount,
      children: (0, l.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: k.intl.format(k.t["+DLsD8"], {
          count: n
        })
      })
    })]
  })
}

function R(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: i,
    headerId: s,
    onClose: d,
    onClickInterestedCount: u,
    containerRef: _,
    recurrenceId: h,
    setRecurrenceId: m
  } = e, f = (0, c.e7)([x.Z], () => null != x.Z.getGuild(t.id), [t.id]), {
    startTime: g,
    endTime: k
  } = (0, b.ZP)(n, h), R = (0, N.Z)(n.guild_id, n.id, h), L = r.useCallback(e => {
    e.stopPropagation(), null != n && (0, a.Bk)(n)
  }, [n]), B = (0, p.Z)(h, n.id), D = (0, j.Z)(n);
  r.useEffect(() => {
    v.Z.getGuildEventUserCounts(t.id, n.id, null != h ? [h] : []), v.Z.getGuildEventsForCurrentUser(t.id)
  }, [t.id, n.id, h]);
  let F = (0, I.KV)(n.recurrence_rule),
    M = (null == n ? true : n.scheduled_start_time) != null ? (0, Z.lh)(B, g, new Date(null == n ? true : n.scheduled_start_time)) : null;
  return (0, l.jsxs)("div", {
    ref: _,
    children: [(0, l.jsxs)("div", {
      className: E.header,
      children: [(0, l.jsx)(S.z, {
        startTime: g.toISOString(),
        endTime: null == k ? true : k.toISOString(),
        status: null != M ? M : n.status,
        eventType: n.entity_type,
        guildEventId: n.id,
        recurrenceId: h
      }), (0, l.jsx)(o.Heading, {
        id: s,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: E.title,
        children: n.name
      })]
    }), (0, l.jsxs)("div", {
      className: E.body,
      children: [(0, l.jsx)(O, {
        guild: t,
        onClick: f ? L : true,
        onClose: d
      }), (0, l.jsx)(P.Z, {
        guildScheduledEvent: n,
        channel: i,
        onClose: d
      }), null != R && (0, l.jsx)(T, {
        userCount: R,
        onClick: u
      }), null != D && (0, l.jsx)(w, {
        creator: D,
        guildId: t.id,
        channelId: null == i ? true : i.id
      }, D.id), null != n.description && (0, l.jsx)("div", {
        className: E.description,
        children: (0, l.jsx)(y.Z, {
          description: n.description,
          truncate: false,
          guildId: t.id
        })
      })]
    }), null != F && (0, l.jsx)("hr", {
      className: E.divider
    }), null != F && (0, l.jsx)(C.Z, {
      guildId: t.id,
      recurrenceRule: F,
      guildEventId: n.id,
      onRecurrenceClick: m,
      hideScroller: true,
      activeRecurrenceId: h
    })]
  })
}