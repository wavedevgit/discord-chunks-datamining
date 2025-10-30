/** Chunk was on 1272 **/
/** chunk id: 702456, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk393903 = require("./393903.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk791250 = require("./791250.jsx"),
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

function N(e) {
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

function j(e, t) {
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

function P(e) {
  var t, n;
  let {
    user: i,
    index: l,
    isCompetitive: a
  } = e, {
    status: u,
    isMobile: f
  } = (0, s.cj)([b.Z], () => ({
    status: b.Z.getStatus(i.id),
    isMobile: b.Z.isMobileOnline(i.id)
  })), m = (0, s.e7)([O.Z, g.Z], () => {
    let e = g.Z.getDMFromUserId(i.id);
    return null != e && O.Z.isTyping(e, i.id)
  }, [i]), {
    avatarSrc: _,
    eventHandlers: E
  } = (0, h.Z)({
    userId: i.id,
    size: o.EFr.SIZE_32,
    animateOnHover: true
  }), I = async () => {
    await c.Z.openPrivateChannel({
      recipientIds: [i.id],
      location: d.Z.FREQUENT_FRIENDS_ROW
    });
    let e = g.Z.getDMFromUserId(i.id);
    null != e && (0, p.yw)(C.rMx.CHANNEL_OPENED, j(N({}, (0, p.$H)(e)), {
      location: "".concat(d.Z.FREQUENT_FRIENDS_ROW, " ").concat(l + 1)
    }))
  }, y = 0 === l, v = y ? o.YqE : a ? o.XcD : true, P = y ? S.intl.string(S.t.aI4VOL) : a ? S.intl.string(S.t.kABl2x) : true;
  return (0, r.jsx)(o.P3F, {
    className: T.frequentFriendAvatarButton,
    onClick: I,
    onMouseEnter: E.onMouseEnter,
    onMouseLeave: E.onMouseLeave,
    "aria-label": S.intl.formatToPlainString(S.t.M5FjCr, {
      username: i.username
    }),
    children: (0, r.jsx)(o.qEK, {
      src: _,
      "aria-label": null != (t = i.globalName) ? t : i.username,
      status: u,
      isTyping: m,
      isMobile: f && !m,
      size: o.EFr.SIZE_32,
      CutoutIcon: v,
      avatarTooltipAsset: y ? "\uD83D\uDD25" : a ? "❄️" : true,
      avatarTooltipText: P,
      statusTooltip: true,
      statusTooltipDelay: 50,
      avatarTooltipTitle: null != (n = i.globalName) ? n : i.username
    })
  })
}

function x() {
  let {
    enabled: e
  } = (0, Chunk399521.Q)("frequent_friends_row"), t = function() {
    let e = (0, Chunk442837.Wu)([Chunk752048.Z], () => [...Chunk752048.Z.getUserAffinities()].sort((e, t) => m.Z.compare(e.otherUserId, t.otherUserId))),
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
  }), d = Chunk647438.useRef(null), p = Chunk647438.useCallback(() => {
    var e;
    let t = null == (e = Chunk100527.current) ? true : module.getScrollerNode();
    null != exports && Chunk493683({
      scrollLeft: exports.scrollLeft,
      scrollWidth: exports.scrollWidth,
      clientWidth: exports.clientWidth
    })
  }, []);
  Chunk647438.useEffect(() => {
    (null == exports ? true : exports.frequentFriends.length) != null && Chunk367907()
  }, [null == exports ? true : exports.frequentFriends.length, null == exports ? true : exports.showCompetitiveSpot, Chunk367907]);
  let h = (0, Chunk393903.y)(Chunk367907, []),
    g = Chunk647438.useCallback(e => {
      let t = e.currentTarget;
      c({
        scrollLeft: t.scrollLeft,
        scrollWidth: t.scrollWidth,
        clientWidth: t.clientWidth
      })
    }, [Chunk493683]);
  if (!module || null == exports || !require) return null;
  let {
    frequentFriends: b,
    showCompetitiveSpot: O
  } = exports, x = Chunk120356.scrollWidth > Chunk120356.clientWidth, A = Chunk120356.scrollLeft > 0, Z = Chunk120356.scrollLeft < Chunk120356.scrollWidth - Chunk120356.clientWidth - 2;
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
          children: e => (0, r.jsx)(o.d3s, j(N({}, e), {
            className: T.frequentFriendsInfoIcon
          }))
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.xVE, {
        ref: e => {
          d.current = e, h.current = (null == e ? true : e.getScrollerNode()) != null ? e.getScrollerNode() : null
        },
        className: a()(Chunk944658.frequentFriendsAvatars, {
          [Chunk944658.scrollMaskLeft]: x && A,
          [Chunk944658.scrollMaskRight]: x && Z
        }),
        orientation: "horizontal",
        onScroll: Chunk592125,
        children: Chunk158776.map((e, t) => (0, r.jsx)(P, {
          user: e,
          index: t,
          isCompetitive: t === b.length - 1 && O
        }, e.id))
      })]
    }), (0, Chunk951288.jsx)(Chunk791250.d, {})]
  })
}