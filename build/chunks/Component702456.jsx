/** Chunk was on 1272 **/
/** chunk id: 702456, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk663701 = require("./663701.jsx"),
  Chunk393903 = require("./393903.js"),
  Chunk752048 = require("./752048.js"),
  Chunk518950 = require("./518950.js"),
  Chunk592125 = require("./592125.js"),
  Chunk480294 = require("./480294.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk111583 = require("./111583.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk399521 = require("./399521.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944658 = require("./944658.js");

function S(e) {
  var t, n;
  let {
    user: i,
    isFirst: l,
    isCompetitive: a
  } = e, {
    status: u,
    isMobile: d
  } = (0, o.cj)([m.Z], () => ({
    status: m.Z.getStatus(i.id),
    isMobile: m.Z.isMobileOnline(i.id)
  })), p = (0, o.e7)([_.Z, h.Z], () => {
    let e = h.Z.getDMFromUserId(i.id);
    return null != e && _.Z.isTyping(e, i.id)
  }, [i]), {
    avatarSrc: g,
    eventHandlers: b
  } = (0, f.Z)({
    userId: i.id,
    size: s.EFr.SIZE_32,
    animateOnHover: true
  }), O = async () => {
    await c.Z.openPrivateChannel({
      recipientIds: [i.id],
      location: "frequent_friends_row"
    })
  }, E = l ? s.YqE : a ? s.XcD : true, v = l ? I.intl.string(I.t.aI4VOL) : a ? I.intl.string(I.t.kABl2x) : true;
  return (0, r.jsx)(s.P3F, {
    className: C.frequentFriendAvatarButton,
    onClick: O,
    onMouseEnter: b.onMouseEnter,
    onMouseLeave: b.onMouseLeave,
    "aria-label": I.intl.formatToPlainString(I.t.M5FjCr, {
      username: i.username
    }),
    children: (0, r.jsx)(s.qEK, {
      src: g,
      "aria-label": null != (t = i.globalName) ? t : i.username,
      status: u,
      isTyping: p,
      isMobile: d && !p,
      size: s.EFr.SIZE_32,
      CutoutIcon: E,
      avatarTooltipAsset: l ? "\uD83D\uDD25" : a ? "❄️" : true,
      avatarTooltipText: v,
      statusTooltip: true,
      statusTooltipDelay: 50,
      avatarTooltipTitle: null != (n = i.globalName) ? n : i.username
    })
  })
}

function T() {
  let {
    enabled: e
  } = (0, Chunk399521.Q)("frequent_friends_row"), t = function() {
    let e = (0, Chunk442837.Wu)([Chunk752048.Z], () => [...Chunk752048.Z.getUserAffinities()].sort((e, t) => p.Z.compare(e.otherUserId, t.otherUserId))),
      t = (0, Chunk442837.Wu)([Chunk594174.default, Chunk699516.Z], () => {
        let t = module.map(e => e.otherUserId),
          n = [];
        for (let e of exports)
          if (require.length < 5) {
            let t = Chunk594174.default.getUser(module);
            !(0, Chunk823379.lm)(exports) || Chunk699516.Z.isIgnored(exports.id) || Chunk699516.Z.isBlocked(exports.id) || require.push(exports)
          } else break;
        return require
      }, [module]),
      n = Chunk647438.useMemo(() => {
        var n, r;
        if (exports.length < 5) returnfalse;
        let i = module.findIndex(e => e.otherUserId === t[4].id);
        return !!(Chunk647438 < module.length - 1) && !!((null == (n = module[Chunk647438]) ? true : require.communicationProbability) - .25 <= (null == (r = module[Chunk647438 + 1]) ? true : Chunk951288.communicationProbability))
      }, [module, exports]);
    return exports.length < 3 ? null : {
      frequentFriends: exports,
      showCompetitiveSpot: require
    }
  }(), n = (0, Chunk442837.e7)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)), [l, c] = Chunk647438.useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0
  }), f = Chunk647438.useRef(null), h = Chunk647438.useCallback(() => {
    var e;
    let t = null == (e = Chunk518950.current) ? true : module.getScrollerNode();
    null != exports && Chunk493683({
      scrollLeft: exports.scrollLeft,
      scrollWidth: exports.scrollWidth,
      clientWidth: exports.clientWidth
    })
  }, []);
  Chunk647438.useEffect(() => {
    (null == exports ? true : exports.frequentFriends.length) != null && Chunk592125()
  }, [null == exports ? true : exports.frequentFriends.length, null == exports ? true : exports.showCompetitiveSpot, Chunk592125]);
  let m = (0, Chunk393903.y)(Chunk592125, []),
    _ = Chunk647438.useCallback(e => {
      let t = e.currentTarget;
      c({
        scrollLeft: t.scrollLeft,
        scrollWidth: t.scrollWidth,
        clientWidth: t.clientWidth
      })
    }, [Chunk493683]);
  if (!module || null == exports || !require) return null;
  let {
    frequentFriends: T,
    showCompetitiveSpot: N
  } = exports, j = Chunk120356.scrollWidth > Chunk120356.clientWidth, P = Chunk120356.scrollLeft > 0, x = Chunk120356.scrollLeft < Chunk120356.scrollWidth - Chunk120356.clientWidth - 2;
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk944658.frequentFriendsRow,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk944658.frequentFriendsHeader,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          className: Chunk944658.frequentFriendsTitle,
          children: Chunk388032.intl.string(Chunk388032.t.QEh90H)
        }), (0, Chunk951288.jsx)(Chunk481060.aML, {
          "data-migration-pending": true,
          text: Chunk388032.intl.string(Chunk388032.t.tqCMcU),
          children: e => {
            var t, n;
            return (0, r.jsx)(s.d3s, (t = function(e) {
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
            }({}, e), n = n = {
              className: C.frequentFriendsInfoIcon
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.xVE, {
        ref: e => {
          f.current = e, m.current = (null == e ? true : e.getScrollerNode()) != null ? e.getScrollerNode() : null
        },
        className: a()(Chunk944658.frequentFriendsAvatars, {
          [Chunk944658.scrollMaskLeft]: j && P,
          [Chunk944658.scrollMaskRight]: j && x
        }),
        orientation: "horizontal",
        onScroll: Chunk111583,
        children: T.map((e, t) => (0, r.jsx)(S, {
          user: e,
          isFirst: 0 === t,
          isCompetitive: t === T.length - 1 && N
        }, e.id))
      })]
    }), (0, Chunk951288.jsx)(Chunk663701.d, {})]
  })
}