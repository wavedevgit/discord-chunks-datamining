/** Chunk was on 77986 **/
/** chunk id: 659242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk657331 = require("./657331.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk427262 = require("./427262.js"),
  Chunk285059 = require("./285059.js"),
  Chunk408607 = require("./408607.js"),
  Chunk722260 = require("./722260.js"),
  Chunk563312 = require("./563312.js"),
  Chunk826383 = require("./826383.js"),
  Chunk794782 = require("./794782.js"),
  Chunk974930 = require("./974930.js"),
  Chunk847494 = require("./847494.jsx"),
  Chunk888637 = require("./888637.jsx"),
  Chunk103355 = require("./103355.jsx"),
  Chunk167630 = require("./167630.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk888804 = require("./888804.js");

function w(e) {
  var t, n;
  let {
    creator: r,
    guildId: s,
    channelId: i
  } = e, {
    analyticsLocations: d
  } = (0, u.Ay)(), o = (0, a.bG)([h.Ay], () => h.Ay.getMember(s, r.id), [r, s]), f = (0, b.gn)(null == o ? true : o.guildId, null == o ? true : o.userId, null != (t = null == o ? true : o.colorStrings) ? t : null);
  return (0, l.jsxs)("div", {
    className: E.nM,
    children: [(0, l.jsx)(c.euF, {
      size: c._3J.SIZE_20,
      src: r.getAvatarURL(s, 20),
      "aria-label": null != (n = null == o ? true : o.nick) ? n : j.Ay.getName(r),
      className: E.Kk
    }), (0, l.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: C.intl.format(C.t["66DLFs"], {
        usernameHook: function() {
          var e, t;
          return (0, l.jsx)(c.DUT, {
            onClick: () => (0, x.openUserProfileModal)({
              guildId: s,
              channelId: i,
              userId: r.id,
              roleId: null == o ? true : o.colorRoleId,
              sourceAnalyticsLocations: d
            }),
            className: E.xL,
            tag: "span",
            role: "link",
            children: (0, l.jsx)(c.gyj, {
              name: null != (e = null == o ? true : o.nick) ? e : j.Ay.getName(r),
              colorString: null != (t = null == o ? true : o.colorString) ? t : null,
              colorStrings: f
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function P(e) {
  let {
    guild: t,
    onClick: n,
    onClose: s
  } = e, a = r.useCallback(e => {
    null == n || n(e), null != n && (null == s || s(e))
  }, [n, s]), d = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.A, {
      guild: t,
      size: o.A.Sizes.MINI,
      active: true,
      className: i()(E.$f, E.Kk)
    }), (0, l.jsx)(f.A, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: c.STz.Colors.PRIMARY,
      size: 16,
      className: E.n2
    }), (0, l.jsx)(c.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: E.yX,
      children: t.name
    })]
  });
  return (0, l.jsx)("div", {
    className: E.nM,
    children: null != n ? (0, l.jsx)(c.DUT, {
      onClick: a,
      className: E.vk,
      role: "link",
      children: d
    }) : d
  })
}

function T(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, l.jsxs)("div", {
    className: E.nM,
    children: [(0, l.jsx)(c.nFg, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: E.Kk
    }), (0, l.jsx)(c.DUT, {
      onClick: n,
      className: E.tK,
      children: (0, l.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: C.intl.format(C.t["+DLsD8"], {
          count: t
        })
      })
    })]
  })
}

function D(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: s,
    headerId: i,
    onClose: u,
    onClickInterestedCount: o,
    containerRef: f,
    recurrenceId: b,
    setRecurrenceId: x
  } = e, h = (0, a.bG)([g.A], () => null != g.A.getGuild(n.id), [n.id]), {
    startTime: j,
    endTime: C
  } = (0, p.Ay)(t, b), D = (0, y.A)(t.guild_id, t.id, b), L = r.useCallback(e => {
    e.stopPropagation(), null != t && (0, d.rq)(t)
  }, [t]), R = (0, _.A)(b, t.id), U = (0, m.A)(t);
  r.useEffect(() => {
    v.A.getGuildEventUserCounts(n.id, t.id, null != b ? [b] : []), v.A.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, b]);
  let G = (0, A.Sn)(t.recurrence_rule),
    M = (null == t ? true : t.scheduled_start_time) != null ? (0, N.j)(R, j, new Date(null == t ? true : t.scheduled_start_time)) : null;
  return (0, l.jsxs)("div", {
    ref: f,
    children: [(0, l.jsxs)("div", {
      className: E.wx,
      children: [(0, l.jsx)(I.L, {
        startTime: j.toISOString(),
        endTime: null == C ? true : C.toISOString(),
        status: null != M ? M : t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: b
      }), (0, l.jsx)(c.Heading, {
        id: i,
        variant: "heading-lg/semibold",
        color: "text-strong",
        className: E.DD,
        children: t.name
      })]
    }), (0, l.jsxs)("div", {
      className: E.rf,
      children: [(0, l.jsx)(P, {
        guild: n,
        onClick: h ? L : true,
        onClose: u
      }), (0, l.jsx)(S.A, {
        guildScheduledEvent: t,
        channel: s,
        onClose: u
      }), null != D && (0, l.jsx)(T, {
        userCount: D,
        onClick: o
      }), null != U && (0, l.jsx)(w, {
        creator: U,
        guildId: n.id,
        channelId: null == s ? true : s.id
      }, U.id), null != t.description && (0, l.jsx)("div", {
        className: E.h_,
        children: (0, l.jsx)(O.A, {
          description: t.description,
          truncate: false,
          guildId: n.id
        })
      })]
    }), null != G && (0, l.jsx)("hr", {
      className: E.yF
    }), null != G && (0, l.jsx)(k.A, {
      guildId: n.id,
      recurrenceRule: G,
      guildEventId: t.id,
      onRecurrenceClick: x,
      hideScroller: true,
      activeRecurrenceId: b
    })]
  })
}