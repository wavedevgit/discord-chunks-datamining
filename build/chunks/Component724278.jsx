/** Chunk was on 66452 **/
/** chunk id: 724278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk315416 = require("./315416.js"),
  Chunk236373 = require("./236373.js"),
  Chunk854698 = require("./854698.js"),
  Chunk391174 = require("./391174.jsx"),
  Chunk810561 = require("./810561.jsx"),
  Chunk390966 = require("./390966.jsx"),
  Chunk390072 = require("./390072.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk984946 = require("./984946.js");

function w(e) {
  var t, n;
  let {
    creator: r,
    guildId: i,
    channelId: a
  } = e, {
    analyticsLocations: o
  } = (0, d.ZP)(), u = (0, s.e7)([x.ZP], () => x.ZP.getMember(i, r.id), [r, i]), f = (0, b.X7)(null == u ? true : u.guildId, null == u ? true : u.userId, null != (t = null == u ? true : u.colorStrings) ? t : null);
  return (0, l.jsxs)("div", {
    className: T.row,
    children: [(0, l.jsx)(c.qEK, {
      size: c.EFr.SIZE_20,
      src: r.getAvatarURL(i, 20),
      "aria-label": null != (n = null == u ? true : u.nick) ? n : g.ZP.getName(r),
      className: T.icon
    }), (0, l.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: P.intl.format(P.t["66DLFs"], {
        usernameHook: function() {
          var e, t;
          return (0, l.jsx)(c.P3F, {
            onClick: () => (0, h.openUserProfileModal)({
              guildId: i,
              channelId: a,
              userId: r.id,
              roleId: null == u ? true : u.colorRoleId,
              sourceAnalyticsLocations: o
            }),
            className: T.creator,
            tag: "span",
            role: "link",
            children: (0, l.jsx)(c.PUh, {
              name: null != (e = null == u ? true : u.nick) ? e : g.ZP.getName(r),
              colorString: null != (t = null == u ? true : u.colorString) ? t : null,
              colorStrings: f
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function k(e) {
  let {
    guild: t,
    onClick: n,
    onClose: i
  } = e, s = r.useCallback(e => {
    null == n || n(e), null != n && (null == i || i(e))
  }, [n, i]), o = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z, {
      guild: t,
      size: u.Z.Sizes.MINI,
      active: true,
      className: a()(T.guildIcon, T.icon)
    }), (0, l.jsx)(f.Z, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: c.aML.Colors.PRIMARY,
      size: 16,
      className: T.guildBadge
    }), (0, l.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: T.linkText,
      children: t.name
    })]
  });
  return (0, l.jsx)("div", {
    className: T.row,
    children: null != n ? (0, l.jsx)(c.P3F, {
      onClick: s,
      className: T.clickable,
      role: "link",
      children: o
    }) : o
  })
}

function O(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, l.jsxs)("div", {
    className: T.row,
    children: [(0, l.jsx)(c.BFJ, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: T.icon
    }), (0, l.jsx)(c.P3F, {
      onClick: n,
      className: T.interestedCount,
      children: (0, l.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: P.intl.format(P.t["+DLsD8"], {
          count: t
        })
      })
    })]
  })
}

function R(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: i,
    headerId: a,
    onClose: d,
    onClickInterestedCount: u,
    containerRef: f,
    recurrenceId: b,
    setRecurrenceId: h
  } = e, x = (0, s.e7)([m.Z], () => null != m.Z.getGuild(n.id), [n.id]), {
    startTime: g,
    endTime: P
  } = (0, p.ZP)(t, b), R = (0, N.Z)(t.guild_id, t.id, b), L = r.useCallback(e => {
    e.stopPropagation(), null != t && (0, o.Bk)(t)
  }, [t]), B = (0, _.Z)(b, t.id), F = (0, j.Z)(t);
  r.useEffect(() => {
    v.Z.getGuildEventUserCounts(n.id, t.id, null != b ? [b] : []), v.Z.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, b]);
  let D = (0, I.KV)(t.recurrence_rule),
    M = (null == t ? true : t.scheduled_start_time) != null ? (0, Z.lh)(B, g, new Date(null == t ? true : t.scheduled_start_time)) : null;
  return (0, l.jsxs)("div", {
    ref: f,
    children: [(0, l.jsxs)("div", {
      className: T.header,
      children: [(0, l.jsx)(E.z, {
        startTime: g.toISOString(),
        endTime: null == P ? true : P.toISOString(),
        status: null != M ? M : t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: b
      }), (0, l.jsx)(c.Heading, {
        id: a,
        variant: "heading-lg/semibold",
        color: "text-strong",
        className: T.title,
        children: t.name
      })]
    }), (0, l.jsxs)("div", {
      className: T.body,
      children: [(0, l.jsx)(k, {
        guild: n,
        onClick: x ? L : true,
        onClose: d
      }), (0, l.jsx)(C.Z, {
        guildScheduledEvent: t,
        channel: i,
        onClose: d
      }), null != R && (0, l.jsx)(O, {
        userCount: R,
        onClick: u
      }), null != F && (0, l.jsx)(w, {
        creator: F,
        guildId: n.id,
        channelId: null == i ? true : i.id
      }, F.id), null != t.description && (0, l.jsx)("div", {
        className: T.description,
        children: (0, l.jsx)(S.Z, {
          description: t.description,
          truncate: false,
          guildId: n.id
        })
      })]
    }), null != D && (0, l.jsx)("hr", {
      className: T.divider
    }), null != D && (0, l.jsx)(y.Z, {
      guildId: n.id,
      recurrenceRule: D,
      guildEventId: t.id,
      onRecurrenceClick: h,
      hideScroller: true,
      activeRecurrenceId: b
    })]
  })
}