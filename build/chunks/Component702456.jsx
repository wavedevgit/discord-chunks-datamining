/** Chunk was on 1272 **/
/** chunk id: 702456, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk742280 = require("./742280.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk938359 = require("./938359.js");

function Z(e) {
  var t, n;
  let {
    user: i,
    index: l,
    isCompetitive: a
  } = e, {
    status: o,
    isMobile: c
  } = (0, s.cj)([I.Z], () => ({
    status: I.Z.getStatus(i.id),
    isMobile: I.Z.isMobileOnline(i.id)
  })), d = (0, s.e7)([C.Z, O.Z], () => {
    let e = O.Z.getDMFromUserId(i.id);
    return null != e && C.Z.isTyping(e, i.id)
  }, [i]), {
    avatarSrc: f,
    eventHandlers: g
  } = (0, _.Z)({
    userId: i.id,
    size: u.EFr.SIZE_32,
    animateOnHover: true
  }), b = async () => {
    var e, t;
    await p.Z.openPrivateChannel({
      recipientIds: [i.id],
      location: h.Z.FREQUENT_FRIENDS_ROW
    });
    let n = O.Z.getDMFromUserId(i.id);
    null != n && (0, m.yw)(x.rMx.CHANNEL_OPENED, (e = function(e) {
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
    }({}, (0, m.$H)(n)), t = t = {
      location: "".concat(h.Z.FREQUENT_FRIENDS_ROW, " ").concat(l + 1)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, E = 0 === l, v = E ? u.YqE : a ? u.XcD : true, y = E ? P.intl.string(P.t.aI4VOL) : a ? P.intl.string(P.t.kABl2x) : true;
  return (0, r.jsx)(u.P3F, {
    className: A.frequentFriendAvatarButton,
    onClick: b,
    onMouseEnter: g.onMouseEnter,
    onMouseLeave: g.onMouseLeave,
    "aria-label": P.intl.formatToPlainString(P.t.M5FjCr, {
      username: i.username
    }),
    children: (0, r.jsx)(u.qEK, {
      src: f,
      "aria-label": null != (t = i.globalName) ? t : i.username,
      status: o,
      isTyping: d,
      isMobile: c && !d,
      size: u.EFr.SIZE_32,
      CutoutIcon: v,
      avatarTooltipAsset: E ? "\uD83D\uDD25" : a ? "❄️" : true,
      avatarTooltipText: y,
      statusTooltip: true,
      statusTooltipDelay: 50,
      avatarTooltipTitle: null != (n = i.globalName) ? n : i.username
    })
  })
}

function w() {
  let {
    enabled: e
  } = (0, j.Q)("frequent_friends_row"), t = function() {
    let e = (0, s.Wu)([E.Z], () => [...E.Z.getUserAffinities()].sort((e, t) => E.Z.compare(e.otherUserId, t.otherUserId))),
      t = (0, s.Wu)([S.default, y.Z], () => {
        let t = e.map(e => e.otherUserId),
          n = [];
        for (let e of t)
          if (n.length < 5) {
            let t = S.default.getUser(e);
            !(0, N.lm)(t) || y.Z.isIgnored(t.id) || y.Z.isBlocked(t.id) || n.push(t)
          } else break;
        return n
      }, [e]),
      n = i.useMemo(() => {
        var n, r;
        if (t.length < 5) returnfalse;
        let i = e.findIndex(e => e.otherUserId === t[4].id);
        return !!(i < e.length - 1) && !!((null == (n = e[i]) ? true : n.communicationProbability) - .25 <= (null == (r = e[i + 1]) ? true : r.communicationProbability))
      }, [e, t]);
    return t.length < 3 ? null : {
      frequentFriends: t,
      showCompetitiveSpot: n
    }
  }(), n = (0, s.e7)([v.Z], () => v.Z.hasConsented(x.pjP.PERSONALIZATION)), l = (0, s.e7)([S.default], () => {
    var e, t;
    return null != (t = null == (e = S.default.getCurrentUser()) ? true : e.nsfwAllowed) && t
  }), [p, h] = i.useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0
  }), m = i.useRef(null), _ = (0, s.e7)([T.Z], () => T.Z.ipCountryCode), O = (0, g.gD)(), I = i.useCallback(() => {
    var e;
    let t = null == (e = m.current) ? true : e.getScrollerNode();
    null != t && h({
      scrollLeft: t.scrollLeft,
      scrollWidth: t.scrollWidth,
      clientWidth: t.clientWidth
    })
  }, []);
  i.useEffect(() => {
    (null == t ? true : t.frequentFriends.length) != null && I()
  }, [null == t ? true : t.frequentFriends.length, null == t ? true : t.showCompetitiveSpot, I]);
  let C = (0, f.y)(I, []),
    w = i.useCallback(e => {
      let t = e.currentTarget;
      h({
        scrollLeft: t.scrollLeft,
        scrollWidth: t.scrollWidth,
        clientWidth: t.clientWidth
      })
    }, [h]);
  if (i.useEffect(() => {
      (0, d.GE)()
    }, []), !e || null == t || !n) return null;
  let {
    frequentFriends: L,
    showCompetitiveSpot: R
  } = t, D = (_ === o.S.AU || _ === o.S.GB) && !O, M = null != _ && o.M.EU_COUNTRIES.has(_) && !l, k = !D && !M && null != _ && R, U = p.scrollWidth > p.clientWidth, G = p.scrollLeft > 0, H = p.scrollLeft < p.scrollWidth - p.clientWidth - 2;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: A.frequentFriendsRow,
      children: [(0, r.jsxs)("div", {
        className: A.frequentFriendsHeader,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/semibold",
          className: A.frequentFriendsTitle,
          children: P.intl.string(P.t.QEh90H)
        }), (0, r.jsx)(c.u, {
          text: P.intl.string(P.t.tqCMcU),
          children: (0, r.jsx)(u.d3s, {
            className: A.frequentFriendsInfoIcon
          })
        })]
      }), (0, r.jsx)(u.xVE, {
        ref: e => {
          m.current = e, C.current = (null == e ? true : e.getScrollerNode()) != null ? e.getScrollerNode() : null
        },
        className: a()(A.frequentFriendsAvatars, {
          [A.scrollMaskLeft]: U && G,
          [A.scrollMaskRight]: U && H
        }),
        orientation: "horizontal",
        onScroll: w,
        children: L.map((e, t) => (0, r.jsx)(Z, {
          user: e,
          index: t,
          isCompetitive: k && t === L.length - 1
        }, e.id))
      })]
    }), (0, r.jsx)(b.d, {})]
  })
}