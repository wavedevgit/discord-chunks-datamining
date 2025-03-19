/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  ZP: () => Z
}), n(566702), n(230036), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(239091),
  A = n(479531),
  d = n(616780),
  u = n(100527),
  g = n(906732),
  f = n(184301),
  m = n(347475),
  p = n(594174),
  h = n(626135),
  C = n(243730),
  b = n(434404),
  v = n(946724),
  x = n(130341),
  N = n(95242),
  j = n(420966),
  E = n(566476),
  I = n(203377),
  O = n(981631),
  y = n(388032),
  w = n(567295),
  P = n(104978);

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function D(e, t) {
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
async function T(e, t, n) {
  let i = e.roles.filter(e => e !== n);
  try {
    await b.Z.updateMemberRoles(t, e.id, i, [], [n])
  } catch (t) {
    let e = new A.Z(t);
    (0, o.h7j)(t => (0, r.jsx)(o.ConfirmModal, D(B({}, t), {
      header: y.NW.string(y.t.R0RpRU),
      confirmText: y.NW.string(y.t.BddRzc),
      confirmButtonColor: o.zxk.Colors.BRAND,
      children: (0, r.jsx)(o.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: e.getAnyErrorMessage()
      })
    })))
  }
}

function S(e) {
  let {
    member: t,
    guildId: s,
    roleId: l,
    locked: A
  } = e, u = i.useMemo(() => ({
    [s]: [t.id]
  }), [s, t.id]);

  function g(e) {
    if (e.stopPropagation(), !A) {
      if (e.shiftKey) {
        T(t, s, l);
        return
      }! function(e, t, n) {
        let i = v.Z.getRole(n);
        (0, o.h7j)(s => (0, r.jsxs)(o.ConfirmModal, D(B({}, s), {
          header: y.NW.string(y.t["7sFNfX"]),
          confirmText: y.NW.string(y.t.N86XcH),
          cancelText: y.NW.string(y.t["ETE/oK"]),
          onConfirm: () => T(e, t, n),
          children: [(0, r.jsx)(o.Text, {
            color: "text-normal",
            variant: "text-md/normal",
            children: y.NW.format(y.t.scORUl, {
              username: e.name,
              roleName: null == i ? void 0 : i.name
            })
          }), (0, r.jsx)(o.Text, {
            className: w.removeTip,
            color: "text-muted",
            variant: "text-md/normal",
            children: y.NW.string(y.t.jxIxJC)
          })]
        })))
      }(t, s, l)
    }
  }

  function h(e) {
    let i = p.default.getUser(t.id);
    null != i && (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("26976"), n.e("2427")]).then(n.bind(n, 415118));
      return t => (0, r.jsx)(e, D(B({}, t), {
        user: i,
        guildId: s,
        showChatItems: !1
      }))
    })
  }
  return (0, d.$)(u), (0, r.jsx)("div", {
    className: P.contentWidth,
    children: (0, r.jsx)(o.yRy, {
      renderPopout: e => (0, r.jsx)(m.Z, B({
        guildId: s,
        userId: t.id,
        roleId: l
      }, e)),
      position: "left",
      preload: () => (0, f.Z)(t.id, t.avatarURL, {
        guildId: s
      }),
      children: e => (0, r.jsxs)(o.P3F, D(B({}, e), {
        className: w.memberRow,
        onContextMenu: h,
        children: [(0, r.jsx)(E.Z, {
          className: w.memberDetails,
          avatarURL: t.avatarURL,
          name: t.name,
          bot: t.bot,
          verifiedBot: t.verifiedBot,
          userTag: t.userTag
        }), (0, r.jsx)("div", {
          className: w.removeButtonContainer,
          children: (0, r.jsx)(o.ua7, {
            text: A ? y.NW.string(y.t.wkrQaG) : y.NW.string(y.t["7sFNfX"]),
            position: "top",
            children: e => (0, r.jsx)(o.P3F, D(B({}, e), {
              className: a()(w.removeButton, {
                [w.removeButtonDisabled]: A
              }),
              onClick: g,
              children: (0, r.jsx)(o.k$p, {
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

function L(e) {
  let {
    handleAddClick: t,
    locked: n
  } = e;
  return (0, r.jsx)("div", {
    className: P.contentWidth,
    children: (0, r.jsxs)("div", {
      className: a()(w.memberRow, w.emptyRowContainer),
      children: [(0, r.jsx)(o.BFJ, {
        size: "md",
        color: "currentColor"
      }), (0, r.jsx)(o.Text, {
        className: w.emptyRowText,
        variant: "text-sm/semibold",
        color: "text-muted",
        children: y.NW.format(y.t.P9pZOT, {
          addMembersHook: function(e, i) {
            return n ? null : (0, r.jsx)(o.eee, {
              onClick: t,
              children: e
            }, i)
          }
        })
      })]
    })
  })
}

function R(e) {
  let {
    guildId: t,
    roleId: n,
    query: s,
    headerHeight: a,
    locked: l,
    onScroll: c,
    roleMembers: A,
    handleAddClick: d
  } = e, {
    analyticsLocations: f
  } = (0, g.ZP)(u.Z.MEMBER_LIST), m = i.useMemo(() => s.trim().toLowerCase(), [s]);
  (0, x.rY)(t, m);
  let p = i.useMemo(() => A.filter(e => (0, x.eg)(m, e)), [A, m]),
    h = i.useMemo(() => p.sort((e, t) => e.name.localeCompare(t.name)), [p]);
  return (0, r.jsx)(g.Gt, {
    value: f,
    children: (0, r.jsx)(o._2F, {
      className: w.list,
      sections: [Math.max(p.length, 1)],
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
        if (0 === h.length) return (0, r.jsx)(L, {
          handleAddClick: d,
          locked: l
        }, "empty");
        let s = h[i];
        return (0, r.jsx)(S, {
          member: s,
          guildId: t,
          roleId: n,
          locked: l
        }, s.id)
      },
      onScroll: c
    })
  })
}

function Q(e) {
  let {
    query: t,
    setQuery: n,
    locked: i,
    handleAddClick: s
  } = e;
  return (0, r.jsxs)("div", {
    className: w.searchContainer,
    children: [(0, r.jsx)(o.E1j, {
      size: o.E1j.Sizes.MEDIUM,
      query: t,
      onChange: n,
      onClear: () => n(""),
      placeholder: y.NW.string(y.t.pYHobG),
      "aria-label": y.NW.string(y.t.pYHobG)
    }), (0, r.jsx)(o.zxk, {
      className: w.addButton,
      size: o.zxk.Sizes.SMALL,
      onClick: s,
      disabled: i,
      children: y.NW.string(y.t.cHszXl)
    })]
  })
}

function Z(e) {
  let {
    guild: t,
    role: s,
    locked: c,
    setSelectedSection: A
  } = e, [d, u] = i.useState(""), {
    headerHeight: g,
    headerRef: f
  } = (0, N.Z)(0), {
    scrolledToTop: m,
    handleScroll: p
  } = (0, j.V)(), b = s.managed || c, v = (0, x.e)(t.id, s.id), E = (0, l.e7)([C.Z], () => {
    var e, n;
    return null !== (n = null === (e = C.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[s.id]) && void 0 !== n ? n : 0
  }) > v.length, T = () => {
    h.default.track(O.rMx.OPEN_MODAL, {
      type: "Add Role Members",
      location_page: "Role Settings",
      location_section: "Members"
    }), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7590"), n.e("50327")]).then(n.bind(n, 24722));
      return n => (0, r.jsx)(e, D(B({}, n), {
        roleId: s.id,
        guildId: t.id
      }))
    })
  };
  return (0, r.jsxs)("div", {
    className: w.container,
    children: [(0, r.jsx)("div", {
      className: w.headerContainer,
      ref: f,
      children: (0, r.jsx)("div", {
        className: P.contentWidth,
        children: (0, r.jsxs)("div", {
          className: a()(P.header, {
            [P.stickyHeaderElevated]: !m
          }),
          children: [(0, r.jsx)(j.Z, {
            guild: t,
            role: s,
            selectedSection: I.ZI.MEMBERS,
            setSelectedSection: A
          }), (0, r.jsx)(Q, {
            query: d,
            setQuery: u,
            locked: b,
            handleAddClick: T
          }), E ? (0, r.jsx)(o.Wn, {
            className: w.searchWarning,
            messageType: o.QYI.INFO,
            children: y.NW.string(y.t.RQxHZ2)
          }) : null]
        })
      })
    }), (0, r.jsx)(R, {
      headerHeight: g + 8,
      query: d,
      guildId: t.id,
      roleId: s.id,
      locked: b,
      onScroll: p,
      roleMembers: v,
      handleAddClick: T
    })]
  })
}