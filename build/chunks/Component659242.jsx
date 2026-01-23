/** Chunk was on 77986 **/
/** chunk id: 659242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk660110 = require("./660110.jsx"),
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
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk888804 = require("./888804.js");

function T(e) {
  var t, n;
  let {
    creator: r,
    guildId: i,
    channelId: s
  } = e, {
    analyticsLocations: u
  } = (0, a.Ay)(), d = (0, c.bG)([v.Ay], () => v.Ay.getMember(i, r.id), [r, i]), _ = (0, g.gn)(null == d ? true : d.guildId, null == d ? true : d.userId, null != (t = null == d ? true : d.colorStrings) ? t : null);
  return (0, l.jsxs)("div", {
    className: w.nM,
    children: [(0, l.jsx)(o.euF, {
      size: o._3J.SIZE_20,
      src: r.getAvatarURL(i, 20),
      "aria-label": null != (n = null == d ? true : d.nick) ? n : x.Ay.getName(r),
      className: w.Kk
    }), (0, l.jsx)(o.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: P.intl.format(P.t["66DLFs"], {
        usernameHook: function() {
          var e, t;
          return (0, l.jsx)(o.DUT, {
            onClick: () => (0, h.openUserProfileModal)({
              guildId: i,
              channelId: s,
              userId: r.id,
              roleId: null == d ? true : d.colorRoleId,
              sourceAnalyticsLocations: u
            }),
            className: w.xL,
            tag: "span",
            role: "link",
            children: (0, l.jsx)(o.gyj, {
              name: null != (e = null == d ? true : d.nick) ? e : x.Ay.getName(r),
              colorString: null != (t = null == d ? true : d.colorString) ? t : null,
              colorStrings: _
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function D(e) {
  let {
    guild: t,
    onClick: n,
    onClose: i
  } = e, c = r.useCallback(e => {
    null == n || n(e), null != n && (null == i || i(e))
  }, [n, i]), u = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(d.A, {
      guild: t,
      size: d.A.Sizes.MINI,
      active: true,
      className: s()(w.$f, w.Kk)
    }), (0, l.jsx)(_.A, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: o.STz.Colors.PRIMARY,
      size: 16,
      className: w.n2
    }), (0, l.jsx)(o.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: w.yX,
      children: t.name
    })]
  });
  return (0, l.jsx)("div", {
    className: w.nM,
    children: null != n ? (0, l.jsx)(o.DUT, {
      onClick: c,
      className: w.vk,
      role: "link",
      children: u
    }) : u
  })
}

function L(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, l.jsxs)("div", {
    className: w.nM,
    children: [(0, l.jsx)(o.nFg, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: w.Kk
    }), (0, l.jsx)(o.DUT, {
      onClick: n,
      className: w.tK,
      children: (0, l.jsx)(o.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: P.intl.format(P.t["+DLsD8"], {
          count: t
        })
      })
    })]
  })
}

function G(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: i,
    headerId: s,
    onClose: a,
    onClickInterestedCount: d,
    containerRef: _,
    recurrenceId: g,
    setRecurrenceId: h
  } = e, v = (0, c.bG)([j.A], () => null != j.A.getGuild(n.id), [n.id]), {
    startTime: x,
    endTime: P
  } = (0, b.Ay)(t, g), G = (0, A.A)(t.guild_id, t.id, g), R = r.useCallback(e => {
    e.stopPropagation(), null != t && (0, u.rq)(t)
  }, [t]), U = (0, y.A)(g, t.id), V = (0, m.A)(t);
  r.useEffect(() => {
    p.A.getGuildEventUserCounts(n.id, t.id, null != g ? [g] : []), p.A.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, g]);
  let M = (0, O.Sn)(t.recurrence_rule),
    K = (null == t ? true : t.scheduled_start_time) != null ? (0, N.j)(U, x, new Date(null == t ? true : t.scheduled_start_time)) : null;
  return (0, l.jsxs)("div", {
    ref: _,
    children: [(0, l.jsxs)("div", {
      className: w.wx,
      children: [(0, l.jsx)(k.L, {
        startTime: x.toISOString(),
        endTime: null == P ? true : P.toISOString(),
        status: null != K ? K : t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: g
      }), (0, l.jsx)(o.Heading, {
        id: s,
        variant: "heading-lg/semibold",
        color: "text-strong",
        className: w.DD,
        children: t.name
      })]
    }), (0, l.jsxs)("div", {
      className: w.rf,
      children: [(0, l.jsx)(D, {
        guild: n,
        onClick: v ? R : true,
        onClose: a
      }), (0, l.jsx)(I.A, {
        guildScheduledEvent: t,
        channel: i,
        onClose: a
      }), null != G && (0, l.jsx)(L, {
        userCount: G,
        onClick: d
      }), null != V && (0, l.jsx)(T, {
        creator: V,
        guildId: n.id,
        channelId: null == i ? true : i.id
      }, V.id), null != t.description && (0, l.jsx)("div", {
        className: w.h_,
        children: (0, l.jsx)(C.A, {
          description: t.description,
          truncate: false,
          guildId: n.id
        })
      }), S.Tn.has(t.entity_type) && (0, l.jsx)(f.A, {
        noBackground: true,
        divider: f.V.TOP,
        channelId: null == i ? true : i.id
      })]
    }), null != M && (0, l.jsx)("hr", {
      className: w.yF
    }), null != M && (0, l.jsx)(E.A, {
      guildId: n.id,
      recurrenceRule: M,
      guildEventId: t.id,
      onRecurrenceClick: h,
      hideScroller: true,
      activeRecurrenceId: g
    })]
  })
}