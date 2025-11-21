/** Chunk was on 1272 **/
/** chunk id: 702456, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk742280 = require("./742280.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk493683 = require("./493683.js"),
  Chunk393903 = require("./393903.js"),
  Chunk81643 = require("./81643.js"),
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
  Chunk351402 = require("./351402.js"),
  Chunk823379 = require("./823379.js"),
  Chunk399521 = require("./399521.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944658 = require("./944658.js");

function A(e) {
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

function Z(e, t) {
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

function w(e) {
  var t, n;
  let {
    user: i,
    index: l,
    isCompetitive: a
  } = e, {
    status: s,
    isMobile: u
  } = (0, o.cj)([y.Z], () => ({
    status: y.Z.getStatus(i.id),
    isMobile: y.Z.isMobileOnline(i.id)
  })), p = (0, o.e7)([I.Z, E.Z], () => {
    let e = E.Z.getDMFromUserId(i.id);
    return null != e && I.Z.isTyping(e, i.id)
  }, [i]), {
    avatarSrc: f,
    eventHandlers: m
  } = (0, b.Z)({
    userId: i.id,
    size: c.EFr.SIZE_32,
    animateOnHover: true
  }), _ = async () => {
    await d.Z.openPrivateChannel({
      recipientIds: [i.id],
      location: h.Z.FREQUENT_FRIENDS_ROW
    });
    let e = E.Z.getDMFromUserId(i.id);
    null != e && (0, g.yw)(j.rMx.CHANNEL_OPENED, Z(A({}, (0, g.$H)(e)), {
      location: "".concat(h.Z.FREQUENT_FRIENDS_ROW, " ").concat(l + 1)
    }))
  }, O = 0 === l, v = O ? c.YqE : a ? c.XcD : true, C = O ? P.intl.string(P.t.aI4VOL) : a ? P.intl.string(P.t.kABl2x) : true;
  return (0, r.jsx)(c.P3F, {
    className: x.frequentFriendAvatarButton,
    onClick: _,
    onMouseEnter: m.onMouseEnter,
    onMouseLeave: m.onMouseLeave,
    "aria-label": P.intl.formatToPlainString(P.t.M5FjCr, {
      username: i.username
    }),
    children: (0, r.jsx)(c.qEK, {
      src: f,
      "aria-label": null != (t = i.globalName) ? t : i.username,
      status: s,
      isTyping: p,
      isMobile: u && !p,
      size: c.EFr.SIZE_32,
      CutoutIcon: v,
      avatarTooltipAsset: O ? "\uD83D\uDD25" : a ? "❄️" : true,
      avatarTooltipText: C,
      statusTooltip: true,
      statusTooltipDelay: 50,
      avatarTooltipTitle: null != (n = i.globalName) ? n : i.username
    })
  })
}

function L() {
  let {
    enabled: e
  } = (0, Chunk399521.Q)("frequent_friends_row"), t = function() {
    let e = (0, Chunk442837.Wu)([Chunk752048.Z], () => [...Chunk752048.Z.getUserAffinities()].sort((e, t) => _.Z.compare(e.otherUserId, t.otherUserId))),
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
      n = Chunk473749.useMemo(() => {
        var n, r;
        if (exports.length < 5) returnfalse;
        let i = module.findIndex(e => e.otherUserId === t[4].id);
        return !!(Chunk473749 < module.length - 1) && !!((null == (n = module[Chunk473749]) ? true : require.communicationProbability) - .25 <= (null == (r = module[Chunk473749 + 1]) ? true : Chunk54381.communicationProbability))
      }, [module, exports]);
    return exports.length < 3 ? null : {
      frequentFriends: exports,
      showCompetitiveSpot: require
    }
  }(), n = (0, Chunk442837.e7)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)), l = (0, Chunk442837.e7)([Chunk594174.default], () => {
    var e, t;
    return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.nsfwAllowed) && exports
  }), [d, h] = Chunk473749.useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0
  }), g = Chunk473749.useRef(null), b = (0, Chunk442837.e7)([Chunk351402.Z], () => Chunk351402.Z.ipCountryCode), E = (0, Chunk81643.gD)(), y = Chunk473749.useCallback(() => {
    var e;
    let t = null == (e = Chunk367907.current) ? true : module.getScrollerNode();
    null != exports && Chunk100527({
      scrollLeft: exports.scrollLeft,
      scrollWidth: exports.scrollWidth,
      clientWidth: exports.clientWidth
    })
  }, []);
  Chunk473749.useEffect(() => {
    (null == exports ? true : exports.frequentFriends.length) != null && Chunk158776()
  }, [null == exports ? true : exports.frequentFriends.length, null == exports ? true : exports.showCompetitiveSpot, Chunk158776]);
  let I = (0, Chunk393903.y)(Chunk158776, []),
    L = Chunk473749.useCallback(e => {
      let t = e.currentTarget;
      h({
        scrollLeft: t.scrollLeft,
        scrollWidth: t.scrollWidth,
        clientWidth: t.clientWidth
      })
    }, [Chunk100527]);
  if (Chunk473749.useEffect(() => {
      (0, Chunk355467.GE)()
    }, []), !module || null == exports || !require) return null;
  let {
    frequentFriends: R,
    showCompetitiveSpot: D
  } = exports, M = (Chunk518950 === Chunk742280.S.AU || Chunk518950 === Chunk742280.S.GB) && !Chunk592125, k = null != Chunk518950 && Chunk742280.M.EU_COUNTRIES.has(Chunk518950) && !Chunk120356, U = !M && !k && null != Chunk518950 && D, G = Chunk493683.scrollWidth > Chunk493683.clientWidth, B = Chunk493683.scrollLeft > 0, H = Chunk493683.scrollLeft < Chunk493683.scrollWidth - Chunk493683.clientWidth - 2;
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk944658.frequentFriendsRow,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk944658.frequentFriendsHeader,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          className: Chunk944658.frequentFriendsTitle,
          children: Chunk388032.intl.string(Chunk388032.t.QEh90H)
        }), (0, Chunk54381.jsx)(Chunk481060.aML, {
          "data-migration-pending": true,
          text: Chunk388032.intl.string(Chunk388032.t.tqCMcU),
          children: e => (0, r.jsx)(c.d3s, Z(A({}, e), {
            className: x.frequentFriendsInfoIcon
          }))
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.xVE, {
        ref: e => {
          g.current = e, I.current = (null == e ? true : e.getScrollerNode()) != null ? e.getScrollerNode() : null
        },
        className: a()(Chunk944658.frequentFriendsAvatars, {
          [Chunk944658.scrollMaskLeft]: G && B,
          [Chunk944658.scrollMaskRight]: G && H
        }),
        orientation: "horizontal",
        onScroll: L,
        children: R.map((e, t) => (0, r.jsx)(w, {
          user: e,
          index: t,
          isCompetitive: U && t === R.length - 1
        }, e.id))
      })]
    }), (0, Chunk54381.jsx)(Chunk791250.d, {})]
  })
}