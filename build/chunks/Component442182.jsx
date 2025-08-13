/** Chunk was on 60458 **/
/** chunk id: 442182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => L
}), require("./781311.js"), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk479531 = require("./479531.js"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk243730 = require("./243730.js"),
  Chunk434404 = require("./434404.js"),
  Chunk946724 = require("./946724.js"),
  Chunk130341 = require("./130341.js"),
  Chunk95242 = require("./95242.js"),
  Chunk420966 = require("./420966.jsx"),
  Chunk566476 = require("./566476.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk523612 = require("./523612.js"),
  Chunk90237 = require("./90237.js");

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
    await j.Z.updateMemberRoles(t, e.id, i, [], [n])
  } catch (t) {
    let e = new u.Z(t);
    (0, c.h7j)(t => (0, r.jsx)(o.Modal, w(P({}, t), {
      title: E.intl.string(E.t.R0RpRU),
      actions: [{
        text: E.intl.string(E.t.BddRzc),
        variant: "primary",
        onClick: t.onClose
      }],
      children: (0, r.jsx)(c.Text, {
        color: "text-default",
        variant: "text-md/normal",
        children: e.getAnyErrorMessage()
      })
    })))
  }
}

function Z(e) {
  let {
    member: t,
    guildId: l,
    roleId: s,
    locked: u
  } = e, g = i.useRef(null), p = i.useMemo(() => ({
    [l]: [t.id]
  }), [l, t.id]);

  function b(e) {
    if (e.stopPropagation(), !u) {
      if (e.shiftKey) return void R(t, l, s);
      let n = v.Z.getRole(s);
      (0, c.h7j)(e => (0, r.jsx)(o.Modal, w(P({}, e), {
        title: E.intl.string(E.t["7sFNfX"]),
        subtitle: E.intl.format(E.t.scORUl, {
          username: t.name,
          roleName: null == n ? true : n.name
        }),
        actions: [{
          text: E.intl.string(E.t["ETE/oK"]),
          variant: "secondary",
          onClick: e.onClose
        }, {
          text: E.intl.string(E.t.N86XcH),
          variant: "critical-primary",
          onClick: () => {
            R(t, l, s), e.onClose()
          }
        }],
        children: (0, r.jsx)(c.Text, {
          className: S.removeTip,
          color: "text-muted",
          variant: "text-md/normal",
          children: E.intl.string(E.t.jxIxJC)
        })
      })))
    }
  }

  function x(e) {
    let i = f.default.getUser(t.id);
    null != i && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("26976"), n.e("54617")]).then(n.bind(n, 415118));
      return t => (0, r.jsx)(e, w(P({}, t), {
        user: i,
        guildId: l,
        showChatItems: false
      }))
    })
  }
  return (0, m.$)(p), (0, r.jsx)("div", {
    className: T.contentWidth,
    children: (0, r.jsx)(h.Z, {
      targetElementRef: g,
      userId: t.id,
      guildId: l,
      roleId: s,
      position: "left",
      children: e => (0, r.jsxs)(c.P3F, w(P({}, e), {
        innerRef: g,
        className: S.memberRow,
        onContextMenu: x,
        children: [(0, r.jsx)(C.Z, {
          className: S.memberDetails,
          avatarURL: t.avatarURL,
          name: t.name,
          bot: t.bot,
          verifiedBot: t.verifiedBot,
          userTag: t.userTag
        }), (0, r.jsx)("div", {
          className: S.removeButtonContainer,
          children: (0, r.jsx)(c.ua7, {
            text: u ? E.intl.string(E.t.wkrQaG) : E.intl.string(E.t["7sFNfX"]),
            position: "top",
            children: e => (0, r.jsx)(c.P3F, w(P({}, e), {
              className: a()(S.removeButton, {
                [S.removeButtonDisabled]: u
              }),
              onClick: b,
              children: (0, r.jsx)(c.k$p, {
                size: "xs",
                color: "currentColor"
              })
            }))
          })
        })]
      }))
    })
  })
}

function D(e) {
  let {
    handleAddClick: t,
    locked: n
  } = e;
  return (0, r.jsx)("div", {
    className: T.contentWidth,
    children: (0, r.jsxs)("div", {
      className: a()(S.memberRow, S.emptyRowContainer),
      children: [(0, r.jsx)(c.BFJ, {
        size: "md",
        color: "currentColor"
      }), (0, r.jsx)(c.Text, {
        className: S.emptyRowText,
        variant: "text-sm/semibold",
        color: "text-muted",
        children: E.intl.format(E.t.P9pZOT, {
          addMembersHook: function(e, i) {
            return n ? null : (0, r.jsx)(c.eee, {
              onClick: t,
              children: e
            }, i)
          }
        })
      })]
    })
  })
}

function A(e) {
  let {
    guildId: t,
    roleId: n,
    query: l,
    headerHeight: a,
    locked: s,
    onScroll: o,
    roleMembers: d,
    handleAddClick: u
  } = e, {
    analyticsLocations: m
  } = (0, p.ZP)(g.Z.MEMBER_LIST), h = i.useMemo(() => l.trim().toLowerCase(), [l]);
  (0, _.rY)(t, h);
  let f = i.useMemo(() => d.filter(e => (0, _.eg)(h, e)), [d, h]),
    b = i.useMemo(() => f.sort((e, t) => e.name.localeCompare(t.name)), [f]);
  return (0, r.jsx)(p.Gt, {
    value: m,
    children: (0, r.jsx)(c._2F, {
      className: S.list,
      sections: [Math.max(f.length, 1)],
      sectionHeight: a,
      renderSection: () => (0, r.jsx)("div", {
        style: {
          height: a
        }
      }, "section"),
      style: {
        scrollPaddingTop: a
      },
      rowHeight: 40,
      renderRow: function(e) {
        let {
          row: i
        } = e;
        if (0 === b.length) return (0, r.jsx)(D, {
          handleAddClick: u,
          locked: s
        }, "empty");
        let l = b[i];
        return (0, r.jsx)(Z, {
          member: l,
          guildId: t,
          roleId: n,
          locked: s
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
    className: S.searchContainer,
    children: [(0, r.jsx)(c.E1j, {
      query: t,
      onChange: n,
      onClear: () => n(""),
      placeholder: E.intl.string(E.t.pYHobG),
      "aria-label": E.intl.string(E.t.pYHobG)
    }), (0, r.jsx)(c.zxk, {
      onClick: l,
      variant: "primary",
      size: "sm",
      disabled: i,
      text: E.intl.string(E.t.cHszXl)
    })]
  })
}

function L(e) {
  let {
    guild: t,
    role: l,
    locked: o,
    setSelectedSection: d
  } = e, [u, m] = i.useState(""), {
    headerHeight: g,
    headerRef: p
  } = (0, O.Z)(0), {
    scrolledToTop: h,
    handleScroll: f
  } = (0, y.V)(), j = l.managed || o, v = (0, _.e)(t.id, l.id), C = (0, s.e7)([x.Z], () => {
    var e, n;
    return null != (n = null == (e = x.Z.getRoleMemberCount(t.id)) ? true : e[l.id]) ? n : 0
  }) > v.length, R = () => {
    b.default.track(I.rMx.OPEN_MODAL, {
      type: "Add Role Members",
      location_page: "Role Settings",
      location_section: "Members"
    }), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("15968").then(n.bind(n, 24722));
      return n => (0, r.jsx)(e, w(P({}, n), {
        roleId: l.id,
        guildId: t.id
      }))
    })
  };
  return (0, r.jsxs)("div", {
    className: S.container,
    children: [(0, r.jsx)("div", {
      className: S.headerContainer,
      ref: p,
      children: (0, r.jsx)("div", {
        className: T.contentWidth,
        children: (0, r.jsxs)("div", {
          className: a()(T.header, {
            [T.stickyHeaderElevated]: !h
          }),
          children: [(0, r.jsx)(y.Z, {
            guild: t,
            role: l,
            selectedSection: N.ZI.MEMBERS,
            setSelectedSection: d
          }), (0, r.jsx)(k, {
            query: u,
            setQuery: m,
            locked: j,
            handleAddClick: R
          }), C ? (0, r.jsx)(c.Wn, {
            className: S.searchWarning,
            messageType: c.QYI.INFO,
            children: E.intl.string(E.t.RQxHZ2)
          }) : null]
        })
      })
    }), (0, r.jsx)(A, {
      headerHeight: g + 8,
      query: u,
      guildId: t.id,
      roleId: l.id,
      locked: j,
      onScroll: f,
      roleMembers: v,
      handleAddClick: R
    })]
  })
}