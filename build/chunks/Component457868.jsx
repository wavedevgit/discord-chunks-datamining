/** Chunk was on 91053 **/
/** chunk id: 457868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => X
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk623624 = require("./623624.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk850020 = require("./850020.js"),
  Chunk48950 = require("./48950.jsx"),
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
  Y = 44 + Chunk276264.x,
  q = Chunk647438.memo(function(e) {
    let {
      channel: t,
      sectionId: l,
      userId: a,
      guildOwnerId: s
    } = e, o = i.useRef(null), d = (0, p.e7)([R.Z], () => R.Z.isTyping(t.id, a)), h = (0, p.e7)([Z.ZP], () => Z.ZP.getMember(t.guild_id, a)), m = (0, p.e7)([P.Z], () => {
      var e;
      return (null == h ? true : h.colorRoleId) != null ? null == (e = P.Z.getRole(t.guild_id, h.colorRoleId)) ? true : e.name : true
    }, [t.guild_id, h]), b = (0, p.e7)([w.default], () => w.default.getUser(a)), _ = (0, p.e7)([w.default], () => w.default.getCurrentUser()), y = (null == b ? true : b.id) === (null == _ ? true : _.id), v = (0, p.e7)([T.Z, N.Z], () => y ? N.Z.getStatus() : T.Z.getStatus(a, t.guild_id)), O = (0, p.e7)([T.Z], () => T.Z.isMobileOnline(a)), C = (0, p.e7)([T.Z, N.Z], () => y ? N.Z.getActivities() : T.Z.getActivities(a, t.guild_id)), A = (0, p.e7)([E.Z], () => E.Z.getAnyStreamForUser(a)), D = (0, c.JA)(a), M = (0, p.e7)([I.Z], () => I.Z.canUserViewChannel(t.id, l, a)), U = (null == b ? true : b.id) != null && b.id === s, B = i.useCallback(e => {
      null != b && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("70675"), n.e("96456")]).then(n.bind(n, 654663));
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
      L.S.dispatch(H.CkL.TEXTAREA_FOCUS, {
        channelId: t.id
      }), L.S.dispatchToLastSubscribed(H.CkL.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), g.Z.startTyping(t.id)
    }, [b, t]), Y = i.useCallback(e => {
      e.stopPropagation(), (0, x.f)({
        guildId: t.guild_id,
        location: {
          section: H.jXE.THREAD_MEMBER_LIST,
          object: H.qAy.BOOST_GEM_ICON
        }
      })
    }, [t.guild_id]), q = (0, j.K)({
      user: b,
      guildId: t.guild_id
    }), [K, Q] = i.useState(false);
    if (null == b) return null;
    let X = null == h ? true : h.premiumSince;
    return (0, r.jsx)(S.Z, {
      targetElementRef: o,
      user: b,
      guildId: t.guild_id,
      channelId: t.id,
      position: u.tq ? "window_center" : "left",
      spacing: 16,
      onShiftClick: V,
      shouldShow: K,
      onRequestClose: () => Q(false),
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
        return (0, r.jsx)(G.Z, z({
          ref: o,
          onContextMenu: B,
          shouldAnimateStatus: W,
          user: b,
          currentUser: _,
          nick: null == h ? true : h.nick,
          status: v,
          activities: C,
          colorString: null == h ? true : h.colorString,
          colorStrings: null == h ? true : h.colorStrings,
          colorRoleName: m,
          isTyping: d,
          channel: t,
          guildId: t.guild_id,
          isMobile: O,
          selected: K,
          applicationStream: A,
          premiumSince: null == X ? null : new Date(X),
          onClickPremiumGuildIcon: Y,
          itemProps: D,
          lostPermissionTooltipText: M ? true : F.intl.string(F.t["/QcoTz"]),
          isOwner: U,
          nameplate: q,
          onClick: e => {
            e.shiftKey ? null == V || V() : Q(e => !e)
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
    return t === H.Skl.UNKNOWN ? (0, r.jsx)("div", {
      className: V.membersGroup,
      children: (0, r.jsx)("div", {
        className: V.memberGroupsPlaceholder
      })
    }) : (0, r.jsxs)(y.Z, {
      className: V.membersGroup,
      "aria-label": F.intl.formatToPlainString(F.t.Uaqbke, {
        title: n,
        count: i
      }),
      children: [null != a ? (0, r.jsx)(O.Z, z({
        className: V.roleIcon
      }, a)) : null, (0, r.jsxs)("span", {
        "aria-hidden": true,
        children: [n, " — ", i]
      })]
    })
  }),
  Q = Chunk647438.memo(function(e) {
    let {
      channel: t
    } = e;
    return t.type === H.d4z.PRIVATE_THREAD ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: B.divider
      }), (0, r.jsxs)(h.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: B.private,
        children: [(0, r.jsx)(h.mBM, {
          size: "xxs",
          color: "currentColor"
        }), "\xa0", F.intl.string(F.t.BTLTAs)]
      }), (0, r.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: B.instructions,
        children: F.intl.string(F.t.Hsd8hC)
      })]
    }) : null
  });

function X(e) {
  let {
    channel: t,
    guild: n
  } = e, l = "members-".concat(t.id), {
    analyticsLocations: s
  } = (0, _.ZP)(b.Z.MEMBER_LIST), u = (0, C.D)(t.id, n), f = u.filter(e => e.userIds.length > 0).reverse()[0], {
    navigator: g,
    listRef: y
  } = function(e, t) {
    let n = (0, p.e7)([m.Z], () => m.Z.keyboardModeEnabled),
      r = i.useRef(null),
      l = i.useCallback((e, n) => {
        let i = r.current;
        if (null == i) return;
        let l = parseInt(n, 10),
          [a, s] = i.getSectionRowFromIndex(l),
          o = 0 === a && 0 === s ? t : 0;
        i.scrollToIndex({
          section: a,
          row: s,
          padding: o,
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
      s = i.useCallback(() => new Promise(e => {
        let t = r.current;
        if (null == t) return e();
        t.scrollToBottom({
          callback() {
            requestAnimationFrame(() => setTimeout(e, 100))
          }
        })
      }), []);
    return {
      navigator: (0, d.ZP)({
        id: e,
        setFocus: l,
        isEnabled: n,
        scrollToStart: a,
        scrollToEnd: s
      }),
      listRef: r
    }
  }(l, Y), x = 0 === u.length || u.every(e => 0 === e.userIds.length);
  if (i.useEffect(() => {
      D.default.track(H.rMx.MEMBER_LIST_VIEWED, {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id
      })
    }, [t.guild_id, t.id, t.type]), x) return (0, r.jsx)(J, {
    channel: t
  });
  let v = o().omit(g.containerProps, ["ref"]),
    j = M.iJ(n);
  return (0, r.jsx)(_.Gt, {
    value: s,
    children: (0, r.jsx)(c.bG, {
      navigator: g,
      children: (0, r.jsx)(h.Wdt, {
        children: e => (0, r.jsx)("div", {
          className: a()(V.membersWrap, V.hiddenMembers, B.container),
          children: (0, r.jsx)(h.aVo, z({
            ref: y,
            className: V.members,
            paddingTop: 0,
            sectionHeight: 40,
            renderSection: e => {
              let {
                section: t
              } = e, i = u[t];
              return (0, r.jsx)(K, {
                id: i.id,
                label: i.label,
                count: i.userIds.length,
                guildId: n.id
              }, i.id)
            },
            rowHeight: Y,
            renderRow: e => {
              let {
                section: n,
                row: i
              } = e, {
                userIds: l,
                id: a
              } = u[n];
              return (0, r.jsx)(q, {
                channel: t,
                sectionId: a,
                userId: l[i],
                guildOwnerId: j
              }, l[i])
            },
            footerHeight: e => 80 * (u[e] === f && t.type === H.d4z.PRIVATE_THREAD),
            renderFooter: e => u[e.section] === f ? (0, r.jsx)(Q, {
              channel: t
            }, "footer") : null,
            innerAriaLabel: F.intl.string(F.t["9Oq93m"]),
            innerTag: "ul",
            sections: u.map(e => e.userIds.length),
            fade: true
          }, v, e), l)
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
    className: a()(V.membersWrap, V.hiddenMembers, V.members, B.emptyState),
    children: [(0, r.jsx)(h.Text, {
      className: B.emptyStateHeader,
      variant: "text-xs/bold",
      color: "interactive-normal",
      children: F.intl.string(F.t["9Oq93m"])
    }), (0, r.jsxs)("div", {
      className: B.emptyStateIconContainer,
      children: [(0, r.jsx)("div", {
        className: B.emptyStateIcon,
        children: (0, r.jsx)(h.BFJ, {
          size: "lg",
          color: "currentColor"
        })
      }), (0, r.jsx)(A.Z, {
        className: B.emptyStateStars
      })]
    }), (0, r.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      children: t.isForumPost() ? F.intl.string(F.t.p0UgNQ) : F.intl.string(F.t["9/n5vz"])
    }), (0, r.jsx)(h.Text, {
      className: B.emptyStateSubtext,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: F.intl.string(F.t.emw8UP)
    })]
  })
}