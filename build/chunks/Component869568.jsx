/** Chunk was on 47841 **/
/** chunk id: 869568, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => M
}), require("./733351.js"), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk181658 = require("./181658.js"),
  Chunk80682 = require("./80682.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk642133 = require("./642133.js"),
  Chunk997509 = require("./997509.js"),
  Chunk396816 = require("./396816.js"),
  Chunk856644 = require("./856644.js"),
  Chunk785312 = require("./785312.js"),
  Chunk316506 = require("./316506.jsx"),
  Chunk981634 = require("./981634.jsx"),
  Chunk927573 = require("./927573.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk727938 = require("./727938.js"),
  Chunk261223 = require("./261223.js");

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function R(e, t, n) {
  let i = e.roles.filter(e => e !== n);
  try {
    await O.A.updateMemberRoles(t, e.id, i, [], [n])
  } catch (t) {
    let e = new f.A(t);
    (0, d.qfG)(t => (0, r.jsx)(a.Modal, w(P({}, t), {
      title: T.intl.string(T.t.R0RpRX),
      actions: [{
        text: T.intl.string(T.t.BddRzS),
        variant: "primary",
        onClick: t.onClose
      }],
      children: (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-md/normal",
        children: e.getAnyErrorMessage()
      })
    })))
  }
}

function D(e) {
  let {
    member: t,
    guildId: l,
    roleId: c,
    locked: f
  } = e, b = i.useRef(null), m = i.useMemo(() => ({
    [l]: [t.id]
  }), [l, t.id]);

  function h(e) {
    if (e.stopPropagation(), !f) {
      let n;
      if (e.shiftKey) return void R(t, l, c);
      n = y.A.getRole(c), (0, d.qfG)(e => (0, r.jsx)(a.Modal, w(P({}, e), {
        title: T.intl.string(T.t["7sFNfW"]),
        subtitle: T.intl.format(T.t.scORUv, {
          username: t.name,
          roleName: null == n ? true : n.name
        }),
        actions: [{
          text: T.intl.string(T.t["ETE/oC"]),
          variant: "secondary",
          onClick: e.onClose
        }, {
          text: T.intl.string(T.t.N86XcP),
          variant: "critical-primary",
          onClick: () => {
            R(t, l, c), e.onClose()
          }
        }],
        children: (0, r.jsx)(d.Text, {
          className: I.Of,
          color: "text-muted",
          variant: "text-md/normal",
          children: T.intl.string(T.t.jxIxJL)
        })
      })))
    }
  }

  function j(e) {
    let i = x.default.getUser(t.id);
    null != i && (0, u.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("91042"), n.e("23215")]).then(n.bind(n, 365689));
      return t => (0, r.jsx)(e, w(P({}, t), {
        user: i,
        guildId: l,
        showChatItems: false
      }))
    })
  }
  return (0, g.E)(m, "GuildSettingsRolesEditMembers"), (0, r.jsx)("div", {
    className: C.Q,
    children: (0, r.jsx)(p.A, {
      targetElementRef: b,
      userId: t.id,
      guildId: l,
      roleId: c,
      position: "left",
      children: e => (0, r.jsxs)(d.DUT, w(P({}, e), {
        innerRef: b,
        className: I.TL,
        onContextMenu: j,
        children: [(0, r.jsx)(N.A, {
          className: I.bu,
          avatarURL: t.avatarURL,
          name: t.name,
          bot: t.bot,
          verifiedBot: t.verifiedBot,
          userTag: t.userTag
        }), (0, r.jsx)("div", {
          className: I.O6,
          children: (0, r.jsx)(o.m, {
            text: f ? T.intl.string(T.t.wkrQaK) : T.intl.string(T.t["7sFNfW"]),
            position: "top",
            children: (0, r.jsx)(d.DUT, {
              className: s()(I.DT, {
                [I.li]: f
              }),
              onClick: h,
              children: (0, r.jsx)(d.aXh, {
                size: "xs",
                color: "currentColor"
              })
            })
          })
        })]
      }))
    })
  })
}

function G(e) {
  let {
    handleAddClick: t,
    locked: n
  } = e;
  return (0, r.jsx)("div", {
    className: C.Q,
    children: (0, r.jsxs)("div", {
      className: s()(I.TL, I.xs),
      children: [(0, r.jsx)(d.nFg, {
        size: "md",
        color: "currentColor"
      }), (0, r.jsx)(d.Text, {
        className: I.Tf,
        variant: "text-sm/semibold",
        color: "text-muted",
        children: T.intl.format(T.t.P9pZOW, {
          addMembersHook: function(e, i) {
            return n ? null : (0, r.jsx)(d.MzZ, {
              onClick: t,
              children: e
            }, i)
          }
        })
      })]
    })
  })
}

function L(e) {
  let {
    guildId: t,
    roleId: n,
    query: l,
    headerHeight: s,
    locked: a,
    onScroll: c,
    roleMembers: o,
    handleAddClick: u
  } = e, {
    analyticsLocations: f
  } = (0, m.Ay)(b.A.MEMBER_LIST), g = i.useMemo(() => l.trim().toLowerCase(), [l]);
  (0, v.cG)(t, g);
  let p = i.useMemo(() => o.filter(e => (0, v.EF)(g, e)), [o, g]),
    x = i.useMemo(() => p.sort((e, t) => e.name.localeCompare(t.name)), [p]);
  return (0, r.jsx)(m.f5, {
    value: f,
    children: (0, r.jsx)(d.Eie, {
      className: I.p_,
      sections: [Math.max(p.length, 1)],
      sectionHeight: s,
      renderSection: () => (0, r.jsx)("div", {
        style: {
          height: s
        }
      }, "section"),
      style: {
        scrollPaddingTop: s
      },
      rowHeight: 40,
      renderRow: function(e) {
        let {
          row: i
        } = e;
        if (0 === x.length) return (0, r.jsx)(G, {
          handleAddClick: u,
          locked: a
        }, "empty");
        let l = x[i];
        return (0, r.jsx)(D, {
          member: l,
          guildId: t,
          roleId: n,
          locked: a
        }, l.id)
      },
      onScroll: c
    })
  })
}

function k(e) {
  let {
    query: t,
    setQuery: n,
    locked: i,
    handleAddClick: l
  } = e;
  return (0, r.jsxs)("div", {
    className: I.MT,
    children: [(0, r.jsx)(d.IWV, {
      query: t,
      onChange: n,
      onClear: () => n(""),
      placeholder: T.intl.string(T.t.pYHobK),
      "aria-label": T.intl.string(T.t.pYHobK)
    }), (0, r.jsx)(d.Button, {
      onClick: l,
      variant: "primary",
      size: "sm",
      disabled: i,
      text: T.intl.string(T.t.cHszXg)
    })]
  })
}

function M(e) {
  let {
    guild: t,
    role: l,
    locked: a,
    setSelectedSection: o
  } = e, [u, f] = i.useState(""), {
    headerHeight: g,
    headerRef: b
  } = (0, A.A)(0), {
    scrolledToTop: m,
    handleScroll: p
  } = (0, E.u)(), x = l.managed || a, O = (0, v.K5)(t.id, l.id), y = (0, c.bG)([j.A], () => {
    var e, n;
    return null != (e = null == (n = j.A.getRoleMemberCount(t.id)) ? true : n[l.id]) ? e : 0
  }) > O.length, N = () => {
    h.default.track(S.HAw.OPEN_MODAL, {
      type: "Add Role Members",
      location_page: "Role Settings",
      location_section: "Members"
    }), (0, d.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("72271"), n.e("51711")]).then(n.bind(n, 66655));
      return n => (0, r.jsx)(e, w(P({}, n), {
        roleId: l.id,
        guildId: t.id
      }))
    })
  };
  return (0, r.jsxs)("div", {
    className: I.kL,
    children: [(0, r.jsx)("div", {
      className: I.N1,
      ref: b,
      children: (0, r.jsx)("div", {
        className: C.Q,
        children: (0, r.jsxs)("div", {
          className: s()(C.wx, {
            [C.l6]: !m
          }),
          children: [(0, r.jsx)(E.A, {
            guild: t,
            role: l,
            selectedSection: _.T$.MEMBERS,
            setSelectedSection: o
          }), (0, r.jsx)(k, {
            query: u,
            setQuery: f,
            locked: x,
            handleAddClick: N
          }), y ? (0, r.jsx)(d.po8, {
            className: I.v6,
            messageType: d.YCn.INFO,
            children: T.intl.string(T.t.RQxHZ8)
          }) : null]
        })
      })
    }), (0, r.jsx)(L, {
      headerHeight: g + 8,
      query: u,
      guildId: t.id,
      roleId: l.id,
      locked: x,
      onScroll: p,
      roleMembers: O,
      handleAddClick: N
    })]
  })
}