/** Chunk was on 42402 **/
/** chunk id: 483270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Q
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk837381 = require("./837381.jsx"),
  Chunk884362 = require("./884362.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk414798 = require("./414798.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk485947 = require("./485947.jsx"),
  Chunk509536 = require("./509536.jsx"),
  Chunk201275 = require("./201275.js"),
  Chunk111864 = require("./111864.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk561010 = require("./561010.js"),
  Chunk441446 = require("./441446.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js"),
  Chunk303727 = require("./303727.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk488926 = require("./488926.js"),
  Chunk427262 = require("./427262.js"),
  Chunk837921 = require("./837921.js"),
  Chunk110574 = require("./110574.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk767952 = require("./767952.js"),
  Chunk701939 = require("./701939.js");

function K(e) {
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
let W = Chunk837921.Ay.getEnableHardwareAcceleration(),
  z = 44 + Chunk110574.b,
  X = Chunk64700.memo(function(e) {
    let {
      channel: t,
      sectionId: i,
      userId: s,
      guildOwnerId: a
    } = e, o = l.useRef(null), u = (0, p.bG)([w.A], () => w.A.isTyping(t.id, s)), h = (0, p.bG)([I.Ay], () => I.Ay.getMember(t.guild_id, s)), m = (0, p.bG)([N.A], () => {
      var e;
      return (null == h ? true : h.colorRoleId) != null ? null == (e = N.A.getRole(t.guild_id, h.colorRoleId)) ? true : e.name : true
    }, [t.guild_id, h]), b = (0, p.bG)([R.default], () => R.default.getUser(s)), A = (0, p.bG)([R.default], () => R.default.getCurrentUser()), y = (null == b ? true : b.id) === (null == A ? true : A.id), j = (0, p.bG)([T.A, P.A], () => y ? P.A.getStatus() : T.A.getStatus(s, t.guild_id)), _ = (0, p.bG)([T.A], () => T.A.isMobileOnline(s)), v = (0, p.bG)([T.A, P.A], () => y ? P.A.getActivities() : T.A.getActivities(s, t.guild_id)), D = (0, p.bG)([S.A], () => S.A.getAnyStreamForUser(s)), L = (0, c.rm)(s), G = (0, p.bG)([E.A], () => E.A.canUserViewChannel(t.id, i, s)), U = (null == b ? true : b.id) != null && b.id === a, F = l.useCallback(e => {
      null != b && (0, g.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("67447"), n.e("79961")]).then(n.bind(n, 708202));
        return n => {
          var l, i;
          return (0, r.jsx)(e, (l = K({}, n), i = i = {
            user: b,
            guildId: t.guild_id,
            channel: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
          }), l))
        }
      })
    }, [b, t]), Y = l.useCallback(() => {
      if (null == b) return;
      let e = "@".concat(k.Ay.getUserTag(b, {
          decoration: "never"
        })),
        n = "<@".concat(b.id, ">");
      M._.dispatch(B.jej.TEXTAREA_FOCUS, {
        channelId: t.id
      }), M._.dispatchToLastSubscribed(B.jej.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), f.A.startTyping(t.id)
    }, [b, t]), z = l.useCallback(e => {
      e.stopPropagation(), (0, O.K)({
        guildId: t.guild_id,
        location: {
          section: B.JJy.THREAD_MEMBER_LIST,
          object: B.ZSU.BOOST_GEM_ICON
        }
      })
    }, [t.guild_id]), X = (0, x.r)({
      user: b,
      guildId: t.guild_id
    }), [q, J] = l.useState(false);
    if (null == b) return null;
    let Q = null == h ? true : h.premiumSince;
    return (0, r.jsx)(C.A, {
      targetElementRef: o,
      user: b,
      guildId: t.guild_id,
      channelId: t.id,
      position: d.Fr ? "window_center" : "left",
      spacing: 16,
      onShiftClick: Y,
      shouldShow: q,
      onRequestClose: () => J(false),
      children: e => {
        let {
          onClick: n,
          onMouseDown: l
        } = e, i = function(e, t) {
          if (null == e) return {};
          var n, r, l, i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }
          if (i = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
              for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
              return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }(e, ["onClick", "onMouseDown"]);
        return (0, r.jsx)(V.A, K({
          ref: o,
          onContextMenu: F,
          shouldAnimateStatus: W,
          user: b,
          currentUser: A,
          nick: null == h ? true : h.nick,
          status: j,
          activities: v,
          colorString: null == h ? true : h.colorString,
          colorStrings: null == h ? true : h.colorStrings,
          colorRoleName: m,
          isTyping: u,
          channel: t,
          guildId: t.guild_id,
          isMobile: _,
          selected: q,
          applicationStream: D,
          premiumSince: null == Q ? null : new Date(Q),
          onClickPremiumGuildIcon: z,
          itemProps: L,
          lostPermissionTooltipText: G ? true : H.intl.string(H.t["/QcoTz"]),
          isOwner: U,
          nameplate: X,
          onClick: e => {
            e.shiftKey ? null == Y || Y() : J(e => !e)
          },
          onMouseDown: e => {
            q ? e.stopPropagation() : null == l || l(e)
          }
        }, i))
      }
    })
  }),
  q = Chunk64700.memo(function(e) {
    let {
      id: t,
      label: n,
      count: l,
      guildId: i
    } = e, s = (0, j.$7)({
      roleId: t,
      guildId: i,
      size: 16
    });
    return t === B.clD.UNKNOWN ? (0, r.jsx)("div", {
      className: Y.lL,
      children: (0, r.jsx)("div", {
        className: Y.k1
      })
    }) : (0, r.jsxs)(y.A, {
      className: Y.lL,
      "aria-label": H.intl.formatToPlainString(H.t.Uaqbke, {
        title: n,
        count: l
      }),
      children: [null != s ? (0, r.jsx)(_.A, K({
        className: Y.UT
      }, s)) : null, (0, r.jsxs)("span", {
        "aria-hidden": true,
        children: [n, " — ", l]
      })]
    })
  }),
  J = Chunk64700.memo(function(e) {
    let {
      channel: t
    } = e;
    return t.type === B.rbe.PRIVATE_THREAD ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: F.yF
      }), (0, r.jsxs)(h.Text, {
        variant: "text-xs/bold",
        color: "text-default",
        className: F.Uz,
        children: [(0, r.jsx)(h.XAi, {
          size: "xxs",
          color: "currentColor"
        }), "\xa0", H.intl.string(H.t.BTLTAs)]
      }), (0, r.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: F.GA,
        children: H.intl.string(H.t.Hsd8hC)
      })]
    }) : null
  });

function Q(e) {
  var t, n;
  let i, a, d, g, f, {
      channel: y,
      guild: O
    } = e,
    j = "members-".concat(y.id),
    {
      analyticsLocations: x
    } = (0, A.Ay)(b.A.MEMBER_LIST),
    _ = (0, v.q)(y.id, O),
    E = _.filter(e => e.userIds.length > 0).reverse()[0],
    {
      navigator: C,
      listRef: S
    } = (t = j, n = z, i = (0, p.bG)([m.A], () => m.A.keyboardModeEnabled), a = l.useRef(null), d = l.useCallback((e, t) => {
      let r = a.current;
      if (null == r) return;
      let l = parseInt(t, 10),
        [i, s] = r.getSectionRowFromIndex(l),
        o = 0 === i && 0 === s ? n : 0;
      r.scrollToIndex({
        section: i,
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
    }, [n]), g = l.useCallback(() => new Promise(e => {
      let t = a.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []), f = l.useCallback(() => new Promise(e => {
      let t = a.current;
      if (null == t) return e();
      t.scrollToBottom({
        callback() {
          requestAnimationFrame(() => setTimeout(e, 100))
        }
      })
    }), []), {
      navigator: (0, u.Ay)({
        id: t,
        setFocus: d,
        isEnabled: i,
        scrollToStart: g,
        scrollToEnd: f
      }),
      listRef: a
    }),
    I = 0 === _.length || _.every(e => 0 === e.userIds.length);
  if (l.useEffect(() => {
      L.default.track(B.HAw.MEMBER_LIST_VIEWED, {
        channel_id: y.id,
        channel_type: y.type,
        guild_id: y.guild_id
      })
    }, [y.guild_id, y.id, y.type]), I) return (0, r.jsx)(Z, {
    channel: y
  });
  let N = o().omit(C.containerProps, ["ref"]),
    T = G.wT(O);
  return (0, r.jsx)(A.f5, {
    value: x,
    children: (0, r.jsx)(c.hD, {
      navigator: C,
      children: (0, r.jsx)(h.skg, {
        children: e => (0, r.jsx)("div", {
          className: s()(Y.yg, Y.ML, F.kL),
          children: (0, r.jsx)(h.B8B, K({
            ref: S,
            className: Y.ol,
            paddingTop: 0,
            sectionHeight: 40,
            renderSection: e => {
              let {
                section: t
              } = e, n = _[t];
              return (0, r.jsx)(q, {
                id: n.id,
                label: n.label,
                count: n.userIds.length,
                guildId: O.id
              }, n.id)
            },
            rowHeight: z,
            renderRow: e => {
              let {
                section: t,
                row: n
              } = e, {
                userIds: l,
                id: i
              } = _[t];
              return (0, r.jsx)(X, {
                channel: y,
                sectionId: i,
                userId: l[n],
                guildOwnerId: T
              }, l[n])
            },
            footerHeight: e => 80 * (_[e] === E && y.type === B.rbe.PRIVATE_THREAD),
            renderFooter: e => _[e.section] === E ? (0, r.jsx)(J, {
              channel: y
            }, "footer") : null,
            innerAriaLabel: H.intl.string(H.t["9Oq93m"]),
            innerTag: "ul",
            sections: _.map(e => e.userIds.length),
            fade: true
          }, N, e), j)
        })
      })
    })
  })
}

function Z(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(F.p$, F.kL, Y.yg, Y.ML, Y.ol),
    children: [(0, r.jsx)(h.Text, {
      className: F.ks,
      variant: "text-xs/bold",
      color: "interactive-text-default",
      children: H.intl.string(H.t["9Oq93m"])
    }), (0, r.jsxs)("div", {
      className: F.hs,
      children: [(0, r.jsx)("div", {
        className: F.AI,
        children: (0, r.jsx)(h.nFg, {
          size: "lg",
          color: "currentColor"
        })
      }), (0, r.jsx)(D.A, {
        className: F.WA
      })]
    }), (0, r.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      children: t.isForumPost() ? H.intl.string(H.t.p0UgNQ) : H.intl.string(H.t["9/n5vz"])
    }), (0, r.jsx)(h.Text, {
      className: F.WO,
      variant: "text-sm/normal",
      color: "text-default",
      children: H.intl.string(H.t.emw8UP)
    })]
  })
}