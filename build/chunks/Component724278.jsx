/** Chunk was on 96492 **/
/** chunk id: 724278, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk296354 = require("./296354.js");

function T(e) {
  var n, t;
  let {
    creator: i,
    guildId: r,
    channelId: o
  } = e, {
    analyticsLocations: a
  } = (0, u.ZP)(), d = (0, c.e7)([_.ZP], () => _.ZP.getMember(r, i.id), [i, r]), f = (0, g.X7)(null == d ? true : d.guildId, null == d ? true : d.userId, null != (n = null == d ? true : d.colorStrings) ? n : null);
  return (0, l.jsxs)("div", {
    className: S.row,
    children: [(0, l.jsx)(s.qEK, {
      size: s.EFr.SIZE_20,
      src: i.getAvatarURL(r, 20),
      "aria-label": null != (t = null == d ? true : d.nick) ? t : m.ZP.getName(i),
      className: S.icon
    }), (0, l.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: O.intl.format(O.t["66DLFh"], {
        usernameHook: function() {
          var e, n;
          return (0, l.jsx)(s.P3F, {
            onClick: () => (0, h.openUserProfileModal)({
              guildId: r,
              channelId: o,
              userId: i.id,
              roleId: null == d ? true : d.colorRoleId,
              sourceAnalyticsLocations: a
            }),
            className: S.creator,
            tag: "span",
            role: "link",
            children: (0, l.jsx)(s.PUh, {
              name: null != (e = null == d ? true : d.nick) ? e : m.ZP.getName(i),
              colorString: null != (n = null == d ? true : d.colorString) ? n : null,
              colorStrings: f
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function w(e) {
  let {
    guild: n,
    onClick: t,
    onClose: r
  } = e, c = i.useCallback(e => {
    null == t || t(e), null != t && (null == r || r(e))
  }, [t, r]), a = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(d.Z, {
      guild: n,
      size: d.Z.Sizes.MINI,
      active: true,
      className: o()(S.guildIcon, S.icon)
    }), (0, l.jsx)(f.Z, {
      guild: n,
      tooltipPosition: "top",
      tooltipColor: s.ua7.Colors.PRIMARY,
      size: 16,
      className: S.guildBadge
    }), (0, l.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: S.linkText,
      children: n.name
    })]
  });
  return (0, l.jsx)("div", {
    className: S.row,
    children: null != t ? (0, l.jsx)(s.P3F, {
      onClick: c,
      className: S.clickable,
      role: "link",
      children: a
    }) : a
  })
}

function k(e) {
  let {
    userCount: n,
    onClick: t
  } = e;
  return (0, l.jsxs)("div", {
    className: S.row,
    children: [(0, l.jsx)(s.BFJ, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: S.icon
    }), (0, l.jsx)(s.P3F, {
      onClick: t,
      className: S.interestedCount,
      children: (0, l.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: O.intl.format(O.t["+DLsDw"], {
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
    channel: r,
    headerId: o,
    onClose: u,
    onClickInterestedCount: d,
    isHub: f = false,
    containerRef: g,
    recurrenceId: h,
    setRecurrenceId: _
  } = e, m = (0, c.e7)([v.Z], () => null != v.Z.getGuild(t.id), [t.id]), {
    startTime: O,
    endTime: R
  } = (0, b.ZP)(n, h), L = (0, Z.Z)(n.guild_id, n.id, h), D = i.useCallback(e => {
    e.stopPropagation(), null != n && (0, a.Bk)(n)
  }, [n]), G = (0, p.Z)(h, n.id), B = (0, j.Z)(n);
  i.useEffect(() => {
    x.Z.getGuildEventUserCounts(t.id, n.id, null != h ? [h] : []), x.Z.getGuildEventsForCurrentUser(t.id)
  }, [t.id, n.id, h]);
  let M = (0, y.KV)(n.recurrence_rule),
    A = (null == n ? true : n.scheduled_start_time) != null ? (0, P.lh)(G, O, new Date(null == n ? true : n.scheduled_start_time)) : null;
  return (0, l.jsxs)("div", {
    ref: g,
    children: [(0, l.jsxs)("div", {
      className: S.header,
      children: [(0, l.jsx)(E.z, {
        startTime: O.toISOString(),
        endTime: null == R ? true : R.toISOString(),
        status: null != A ? A : n.status,
        eventType: n.entity_type,
        guildEventId: n.id,
        recurrenceId: h
      }), (0, l.jsx)(s.X6q, {
        id: o,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: S.title,
        children: n.name
      })]
    }), (0, l.jsxs)("div", {
      className: S.body,
      children: [(0, l.jsx)(w, {
        guild: t,
        onClick: m ? D : true,
        onClose: u
      }), (0, l.jsx)(I.Z, {
        guildScheduledEvent: n,
        channel: r,
        onClose: u
      }), null != L && (0, l.jsx)(k, {
        userCount: L,
        onClick: d
      }), !f && null != B && (0, l.jsx)(T, {
        creator: B,
        guildId: t.id,
        channelId: null == r ? true : r.id
      }, B.id), null != n.description && (0, l.jsx)("div", {
        className: S.description,
        children: (0, l.jsx)(C.Z, {
          description: n.description,
          truncate: false,
          guildId: t.id
        })
      })]
    }), null != M && (0, l.jsx)("hr", {
      className: S.divider
    }), null != M && (0, l.jsx)(N.Z, {
      guildId: t.id,
      recurrenceRule: M,
      guildEventId: n.id,
      onRecurrenceClick: _,
      hideScroller: true,
      activeRecurrenceId: h
    })]
  })
}