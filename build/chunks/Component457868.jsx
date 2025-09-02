/** Chunk was on 62987 **/
/** chunk id: 457868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk144144 = require("./144144.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk82295 = require("./82295.jsx"),
  Chunk91218 = require("./91218.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk850020 = require("./850020.js"),
  Chunk965376 = require("./965376.js"),
  Chunk159299 = require("./159299.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk111583 = require("./111583.js"),
  Chunk594174 = require("./594174.js"),
  Chunk499033 = require("./499033.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk700785 = require("./700785.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk276264 = require("./276264.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk61722 = require("./61722.js"),
  Chunk32482 = require("./32482.js");

function z(e) {
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
let W = Chunk998502.ZP.getEnableHardwareAcceleration(),
  q = 44 + Chunk276264.x,
  Y = Chunk647438.memo(function(e) {
    let {
      channel: t,
      sectionId: l,
      userId: a,
      guildOwnerId: o
    } = e, s = i.useRef(null), u = (0, p.e7)([A.Z], () => A.Z.isTyping(t.id, a)), h = (0, p.e7)([P.ZP], () => P.ZP.getMember(t.guild_id, a)), g = (0, p.e7)([Z.Z], () => {
      var e;
      return (null == h ? true : h.colorRoleId) != null ? null == (e = Z.Z.getRole(t.guild_id, h.colorRoleId)) ? true : e.name : true
    }, [t.guild_id, h]), b = (0, p.e7)([w.default], () => w.default.getUser(a)), y = (0, p.e7)([w.default], () => w.default.getCurrentUser()), _ = (null == b ? true : b.id) === (null == y ? true : y.id), C = (0, p.e7)([T.Z, N.Z], () => _ ? N.Z.getStatus() : T.Z.getStatus(a, t.guild_id)), v = (0, p.e7)([T.Z], () => T.Z.isMobileOnline(a)), j = (0, p.e7)([T.Z, N.Z], () => _ ? N.Z.getActivities() : T.Z.getActivities(a, t.guild_id)), R = (0, p.e7)([I.Z], () => I.Z.getAnyStreamForUser(a)), M = (0, c.JA)(a), L = (0, p.e7)([E.Z], () => E.Z.canUserViewChannel(t.id, l, a)), U = (null == b ? true : b.id) != null && b.id === o, F = i.useCallback(e => {
      null != b && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("70675")]).then(n.bind(n, 654663));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = z({}, n), l = l = {
            user: b,
            guildId: t.guild_id,
            channel: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    }, [b, t]), V = i.useCallback(() => {
      if (null == b) return;
      let e = "@".concat(k.ZP.getUserTag(b, {
          decoration: "never"
        })),
        n = "<@".concat(b.id, ">");
      D.S.dispatch(G.CkL.TEXTAREA_FOCUS, {
        channelId: t.id
      }), D.S.dispatchToLastSubscribed(G.CkL.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), m.Z.startTyping(t.id)
    }, [b, t]), q = i.useCallback(e => {
      e.stopPropagation(), (0, x.f)({
        guildId: t.guild_id,
        location: {
          section: G.jXE.THREAD_MEMBER_LIST,
          object: G.qAy.BOOST_GEM_ICON
        }
      })
    }, [t.guild_id]), Y = (0, O.K)({
      user: b,
      guildId: t.guild_id,
      location: "ThreadMembers"
    }), [K, X] = i.useState(false);
    if (null == b) return null;
    let Q = null == h ? true : h.premiumSince;
    return (0, r.jsx)(S.Z, {
      targetElementRef: s,
      user: b,
      guildId: t.guild_id,
      channelId: t.id,
      position: d.tq ? "window_center" : "left",
      spacing: 16,
      onShiftClick: V,
      shouldShow: K,
      onRequestClose: () => X(false),
      children: e => {
        var {
          onClick: n,
          onMouseDown: i
        } = e, l = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, ["onClick", "onMouseDown"]);
        return (0, r.jsx)(B.Z, z({
          ref: s,
          onContextMenu: F,
          shouldAnimateStatus: W,
          user: b,
          currentUser: y,
          nick: null == h ? true : h.nick,
          status: C,
          activities: j,
          colorString: null == h ? true : h.colorString,
          colorStrings: null == h ? true : h.colorStrings,
          colorRoleName: g,
          isTyping: u,
          channel: t,
          guildId: t.guild_id,
          isMobile: v,
          selected: K,
          applicationStream: R,
          premiumSince: null == Q ? null : new Date(Q),
          onClickPremiumGuildIcon: q,
          itemProps: M,
          lostPermissionTooltipText: L ? true : H.intl.string(H.t["/QcoT0"]),
          isOwner: U,
          nameplate: Y,
          onClick: e => {
            e.shiftKey ? null == V || V() : X(e => !e)
          },
          onMouseDown: e => {
            K ? e.stopPropagation() : null == i || i(e)
          }
        }, l))
      }
    })
  }),
  K = Chunk647438.memo(function(e) {
    let {
      id: t,
      label: n,
      count: i,
      guildId: l
    } = e, a = (0, v.p9)({
      roleId: t,
      guildId: l,
      size: 16
    });
    return t === G.Skl.UNKNOWN ? (0, r.jsx)("div", {
      className: V.membersGroup,
      children: (0, r.jsx)("div", {
        className: V.memberGroupsPlaceholder
      })
    }) : (0, r.jsxs)(_.Z, {
      className: V.membersGroup,
      "aria-label": H.intl.formatToPlainString(H.t.UaqbkZ, {
        title: n,
        count: i
      }),
      children: [null != a ? (0, r.jsx)(C.Z, z({
        className: V.roleIcon
      }, a)) : null, (0, r.jsxs)("span", {
        "aria-hidden": true,
        children: [n, " — ", i]
      })]
    })
  }),
  X = Chunk647438.memo(function(e) {
    let {
      channel: t
    } = e;
    return t.type === G.d4z.PRIVATE_THREAD ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: F.divider
      }), (0, r.jsxs)(h.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: F.private,
        children: [(0, r.jsx)(h.mBM, {
          size: "xxs",
          color: "currentColor"
        }), "\xa0", H.intl.string(H.t.BTLTAg)]
      }), (0, r.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: F.instructions,
        children: H.intl.string(H.t.Hsd8hI)
      })]
    }) : null
  });

function Q(e) {
  let {
    channel: t,
    guild: n
  } = e, l = "members-".concat(t.id), {
    analyticsLocations: o
  } = (0, y.ZP)(b.Z.MEMBER_LIST), d = (0, j.D)(t.id, n), f = d.filter(e => e.userIds.length > 0).reverse()[0], {
    navigator: m,
    listRef: _
  } = function(e, t) {
    let n = (0, p.e7)([g.Z], () => g.Z.keyboardModeEnabled),
      r = i.useRef(null),
      l = i.useCallback((e, n) => {
        let i = r.current;
        if (null == i) return;
        let l = parseInt(n, 10),
          [a, o] = i.getSectionRowFromIndex(l),
          s = 0 === a && 0 === o ? t : 0;
        i.scrollToIndex({
          section: a,
          row: o,
          padding: s,
          callback: () => {
            requestAnimationFrame(() => {
              var t;
              return null == (t = document.querySelector(e)) ? true : t.focus({
                preventScroll: true
              })
            })
          }
        })
      }, [t]),
      a = i.useCallback(() => new Promise(e => {
        let t = r.current;
        if (null == t) return e();
        t.scrollToTop({
          callback: () => requestAnimationFrame(() => e())
        })
      }), []),
      o = i.useCallback(() => new Promise(e => {
        let t = r.current;
        if (null == t) return e();
        t.scrollToBottom({
          callback() {
            requestAnimationFrame(() => setTimeout(e, 100))
          }
        })
      }), []);
    return {
      navigator: (0, u.ZP)({
        id: e,
        setFocus: l,
        isEnabled: n,
        scrollToStart: a,
        scrollToEnd: o
      }),
      listRef: r
    }
  }(l, q), C = 0 === d.length || d.every(e => 0 === e.userIds.length);
  if (i.useEffect(() => {
      M.default.track(G.rMx.MEMBER_LIST_VIEWED, {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id
      })
    }, [t.guild_id, t.id, t.type]), C) return (0, r.jsx)(J, {
    channel: t
  });
  let x = s().omit(m.containerProps, ["ref"]),
    v = L.iJ(n);
  return (0, r.jsx)(y.Gt, {
    value: o,
    children: (0, r.jsx)(c.bG, {
      navigator: m,
      children: (0, r.jsx)(h.Wdt, {
        children: e => (0, r.jsx)("div", {
          className: a()(V.membersWrap, V.hiddenMembers, F.container),
          children: (0, r.jsx)(h.aVo, z({
            ref: _,
            className: V.members,
            paddingTop: 0,
            sectionHeight: 40,
            renderSection: e => {
              let {
                section: t
              } = e, i = d[t];
              return (0, r.jsx)(K, {
                id: i.id,
                label: i.label,
                count: i.userIds.length,
                guildId: n.id
              }, i.id)
            },
            rowHeight: q,
            renderRow: e => {
              let {
                section: n,
                row: i
              } = e, {
                userIds: l,
                id: a
              } = d[n];
              return (0, r.jsx)(Y, {
                channel: t,
                sectionId: a,
                userId: l[i],
                guildOwnerId: v
              }, l[i])
            },
            footerHeight: e => 80 * (d[e] === f && t.type === G.d4z.PRIVATE_THREAD),
            renderFooter: e => d[e.section] === f ? (0, r.jsx)(X, {
              channel: t
            }, "footer") : null,
            innerAriaLabel: H.intl.string(H.t["9Oq93t"]),
            innerTag: "ul",
            sections: d.map(e => e.userIds.length),
            fade: true
          }, x, e), l)
        })
      })
    })
  })
}

function J(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(V.membersWrap, V.hiddenMembers, V.members, F.emptyState),
    children: [(0, r.jsx)(h.Text, {
      className: F.emptyStateHeader,
      variant: "text-xs/bold",
      color: "interactive-normal",
      children: H.intl.string(H.t["9Oq93t"])
    }), (0, r.jsxs)("div", {
      className: F.emptyStateIconContainer,
      children: [(0, r.jsx)("div", {
        className: F.emptyStateIcon,
        children: (0, r.jsx)(h.BFJ, {
          size: "lg",
          color: "currentColor"
        })
      }), (0, r.jsx)(R.Z, {
        className: F.emptyStateStars
      })]
    }), (0, r.jsx)(h.X6q, {
      variant: "heading-md/semibold",
      children: t.isForumPost() ? H.intl.string(H.t.p0UgNT) : H.intl.string(H.t["9/n5v7"])
    }), (0, r.jsx)(h.Text, {
      className: F.emptyStateSubtext,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: H.intl.string(H.t.emw8UF)
    })]
  })
}