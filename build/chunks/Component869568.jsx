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
    await _.A.updateMemberRoles(t, e.id, i, [], [n])
  } catch (t) {
    let e = new g.A(t);
    (0, d.qfG)(t => (0, r.jsx)(a.Modal, w(P({}, t), {
      title: I.intl.string(I.t.R0RpRX),
      actions: [{
        text: I.intl.string(I.t.BddRzS),
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
    roleId: o,
    locked: g
  } = e, p = i.useRef(null), f = i.useMemo(() => ({
    [l]: [t.id]
  }), [l, t.id]);

  function x(e) {
    if (e.stopPropagation(), !g) {
      let n;
      if (e.shiftKey) return void R(t, l, o);
      n = O.A.getRole(o), (0, d.qfG)(e => (0, r.jsx)(a.Modal, w(P({}, e), {
        title: I.intl.string(I.t["7sFNfW"]),
        subtitle: I.intl.format(I.t.scORUv, {
          username: t.name,
          roleName: null == n ? true : n.name
        }),
        actions: [{
          text: I.intl.string(I.t["ETE/oC"]),
          variant: "secondary",
          onClick: e.onClose
        }, {
          text: I.intl.string(I.t.N86XcP),
          variant: "critical-primary",
          onClick: () => {
            R(t, l, o), e.onClose()
          }
        }],
        children: (0, r.jsx)(d.Text, {
          className: T.Of,
          color: "text-muted",
          variant: "text-md/normal",
          children: I.intl.string(I.t.jxIxJL)
        })
      })))
    }
  }

  function j(e) {
    let i = h.default.getUser(t.id);
    null != i && (0, u.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("91042"), n.e("62841")]).then(n.bind(n, 365689));
      return t => (0, r.jsx)(e, w(P({}, t), {
        user: i,
        guildId: l,
        showChatItems: false
      }))
    })
  }
  return (0, m.E)(f, "GuildSettingsRolesEditMembers"), (0, r.jsx)("div", {
    className: C.Q,
    children: (0, r.jsx)(b.A, {
      targetElementRef: p,
      userId: t.id,
      guildId: l,
      roleId: o,
      position: "left",
      children: e => (0, r.jsxs)(d.DUT, w(P({}, e), {
        innerRef: p,
        className: T.TL,
        onContextMenu: j,
        children: [(0, r.jsx)(E.A, {
          className: T.bu,
          avatarURL: t.avatarURL,
          name: t.name,
          bot: t.bot,
          verifiedBot: t.verifiedBot,
          userTag: t.userTag
        }), (0, r.jsx)("div", {
          className: T.O6,
          children: (0, r.jsx)(c.m, {
            text: g ? I.intl.string(I.t.wkrQaK) : I.intl.string(I.t["7sFNfW"]),
            position: "top",
            children: (0, r.jsx)(d.DUT, {
              className: s()(T.DT, {
                [T.li]: g
              }),
              onClick: x,
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
      className: s()(T.TL, T.xs),
      children: [(0, r.jsx)(d.nFg, {
        size: "md",
        color: "currentColor"
      }), (0, r.jsx)(d.Text, {
        className: T.Tf,
        variant: "text-sm/semibold",
        color: "text-muted",
        children: I.intl.format(I.t.P9pZOW, {
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
    onScroll: o,
    roleMembers: c,
    handleAddClick: u
  } = e, {
    analyticsLocations: g
  } = (0, f.Ay)(p.A.MEMBER_LIST), m = i.useMemo(() => l.trim().toLowerCase(), [l]);
  (0, v.cG)(t, m);
  let b = i.useMemo(() => c.filter(e => (0, v.EF)(m, e)), [c, m]),
    h = i.useMemo(() => b.sort((e, t) => e.name.localeCompare(t.name)), [b]);
  return (0, r.jsx)(f.f5, {
    value: g,
    children: (0, r.jsx)(d.Eie, {
      className: T.p_,
      sections: [Math.max(b.length, 1)],
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
        if (0 === h.length) return (0, r.jsx)(G, {
          handleAddClick: u,
          locked: a
        }, "empty");
        let l = h[i];
        return (0, r.jsx)(D, {
          member: l,
          guildId: t,
          roleId: n,
          locked: a
        }, l.id)
      },
      onScroll: o
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
    className: T.MT,
    children: [(0, r.jsx)(d.IWV, {
      query: t,
      onChange: n,
      onClear: () => n(""),
      placeholder: I.intl.string(I.t.pYHobK),
      "aria-label": I.intl.string(I.t.pYHobK)
    }), (0, r.jsx)(d.Button, {
      onClick: l,
      variant: "primary",
      size: "sm",
      disabled: i,
      text: I.intl.string(I.t.cHszXg)
    })]
  })
}

function M(e) {
  let {
    guild: t,
    role: l,
    locked: a,
    setSelectedSection: c
  } = e, [u, g] = i.useState(""), {
    headerHeight: m,
    headerRef: p
  } = (0, y.A)(0), {
    scrolledToTop: f,
    handleScroll: b
  } = (0, A.u)(), h = l.managed || a, _ = (0, v.K5)(t.id, l.id), O = (0, o.bG)([j.A], () => {
    var e, n;
    return null != (e = null == (n = j.A.getRoleMemberCount(t.id)) ? true : n[l.id]) ? e : 0
  }) > _.length, E = () => {
    x.default.track(S.HAw.OPEN_MODAL, {
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
    className: T.kL,
    children: [(0, r.jsx)("div", {
      className: T.N1,
      ref: p,
      children: (0, r.jsx)("div", {
        className: C.Q,
        children: (0, r.jsxs)("div", {
          className: s()(C.wx, {
            [C.l6]: !f
          }),
          children: [(0, r.jsx)(A.A, {
            guild: t,
            role: l,
            selectedSection: N.T$.MEMBERS,
            setSelectedSection: c
          }), (0, r.jsx)(k, {
            query: u,
            setQuery: g,
            locked: h,
            handleAddClick: E
          }), O ? (0, r.jsx)(d.po8, {
            className: T.v6,
            messageType: d.YCn.INFO,
            children: I.intl.string(I.t.RQxHZ8)
          }) : null]
        })
      })
    }), (0, r.jsx)(L, {
      headerHeight: m + 8,
      query: u,
      guildId: t.id,
      roleId: l.id,
      locked: h,
      onScroll: b,
      roleMembers: _,
      handleAddClick: E
    })]
  })
}