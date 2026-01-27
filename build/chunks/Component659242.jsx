/** Chunk was on 74665 **/
/** chunk id: 659242, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  d = require.n(Chunk503698),
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

function D(e) {
  var n, t;
  let {
    creator: i,
    guildId: r,
    channelId: d
  } = e, {
    analyticsLocations: o
  } = (0, c.Ay)(), u = (0, s.bG)([p.Ay], () => p.Ay.getMember(r, i.id), [i, r]), _ = (0, g.gn)(null == u ? true : u.guildId, null == u ? true : u.userId, null != (n = null == u ? true : u.colorStrings) ? n : null);
  return (0, l.jsxs)("div", {
    className: w.nM,
    children: [(0, l.jsx)(a.euF, {
      size: a._3J.SIZE_20,
      src: i.getAvatarURL(r, 20),
      "aria-label": null != (t = null == u ? true : u.nick) ? t : b.Ay.getName(i),
      className: w.Kk
    }), (0, l.jsx)(a.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: P.intl.format(P.t["66DLFs"], {
        usernameHook: function() {
          var e, n;
          return (0, l.jsx)(a.DUT, {
            onClick: () => (0, v.openUserProfileModal)({
              guildId: r,
              channelId: d,
              userId: i.id,
              roleId: null == u ? true : u.colorRoleId,
              sourceAnalyticsLocations: o
            }),
            className: w.xL,
            tag: "span",
            role: "link",
            children: (0, l.jsx)(a.gyj, {
              name: null != (e = null == u ? true : u.nick) ? e : b.Ay.getName(i),
              colorString: null != (n = null == u ? true : u.colorString) ? n : null,
              colorStrings: _
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function T(e) {
  let {
    guild: n,
    onClick: t,
    onClose: r
  } = e, s = i.useCallback(e => {
    null == t || t(e), null != t && (null == r || r(e))
  }, [t, r]), o = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.A, {
      guild: n,
      size: u.A.Sizes.MINI,
      active: true,
      className: d()(w.$f, w.Kk)
    }), (0, l.jsx)(_.A, {
      guild: n,
      tooltipPosition: "top",
      tooltipColor: a.STz.Colors.PRIMARY,
      size: 16,
      className: w.n2
    }), (0, l.jsx)(a.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: w.yX,
      children: n.name
    })]
  });
  return (0, l.jsx)("div", {
    className: w.nM,
    children: null != t ? (0, l.jsx)(a.DUT, {
      onClick: s,
      className: w.vk,
      role: "link",
      children: o
    }) : o
  })
}

function L(e) {
  let {
    userCount: n,
    onClick: t
  } = e;
  return (0, l.jsxs)("div", {
    className: w.nM,
    children: [(0, l.jsx)(a.nFg, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: w.Kk
    }), (0, l.jsx)(a.DUT, {
      onClick: t,
      className: w.tK,
      children: (0, l.jsx)(a.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: P.intl.format(P.t["+DLsD8"], {
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
    headerId: d,
    onClose: c,
    onClickInterestedCount: u,
    containerRef: _,
    recurrenceId: g,
    setRecurrenceId: v
  } = e, p = (0, s.bG)([h.A], () => null != h.A.getGuild(t.id), [t.id]), {
    startTime: b,
    endTime: P
  } = (0, y.Ay)(n, g), R = (0, A.A)(n.guild_id, n.id, g), G = i.useCallback(e => {
    e.stopPropagation(), null != n && (0, o.rq)(n)
  }, [n]), U = (0, j.A)(g, n.id), B = (0, x.A)(n);
  i.useEffect(() => {
    m.A.getGuildEventUserCounts(t.id, n.id, null != g ? [g] : []), m.A.getGuildEventsForCurrentUser(t.id)
  }, [t.id, n.id, g]);
  let M = (0, I.Sn)(n.recurrence_rule),
    V = (null == n ? true : n.scheduled_start_time) != null ? (0, N.j)(U, b, new Date(null == n ? true : n.scheduled_start_time)) : null;
  return (0, l.jsxs)("div", {
    ref: _,
    children: [(0, l.jsxs)("div", {
      className: w.wx,
      children: [(0, l.jsx)(k.L, {
        startTime: b.toISOString(),
        endTime: null == P ? true : P.toISOString(),
        status: null != V ? V : n.status,
        eventType: n.entity_type,
        guildEventId: n.id,
        recurrenceId: g
      }), (0, l.jsx)(a.Heading, {
        id: d,
        variant: "heading-lg/semibold",
        color: "text-strong",
        className: w.DD,
        children: n.name
      })]
    }), (0, l.jsxs)("div", {
      className: w.rf,
      children: [(0, l.jsx)(T, {
        guild: t,
        onClick: p ? G : true,
        onClose: c
      }), (0, l.jsx)(E.A, {
        guildScheduledEvent: n,
        channel: r,
        onClose: c
      }), null != R && (0, l.jsx)(L, {
        userCount: R,
        onClick: u
      }), null != B && (0, l.jsx)(D, {
        creator: B,
        guildId: t.id,
        channelId: null == r ? true : r.id
      }, B.id), null != n.description && (0, l.jsx)("div", {
        className: w.h_,
        children: (0, l.jsx)(C.A, {
          description: n.description,
          truncate: false,
          guildId: t.id
        })
      }), S.Tn.has(n.entity_type) && (0, l.jsx)(f.A, {
        noBackground: true,
        divider: f.V.TOP,
        channelId: null == r ? true : r.id
      })]
    }), null != M && (0, l.jsx)("hr", {
      className: w.yF
    }), null != M && (0, l.jsx)(O.A, {
      guildId: t.id,
      recurrenceRule: M,
      guildEventId: n.id,
      onRecurrenceClick: v,
      hideScroller: true,
      activeRecurrenceId: g
    })]
  })
}