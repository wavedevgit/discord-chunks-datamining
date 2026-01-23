/** Chunk was on 21738 **/
/** chunk id: 921318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./638769.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk997101 = require("./997101.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk308528 = require("./308528.js"),
  Chunk770178 = require("./770178.js"),
  Chunk36149 = require("./36149.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk176031 = require("./176031.jsx"),
  Chunk21119 = require("./21119.js"),
  Chunk854627 = require("./854627.js"),
  Chunk734057 = require("./734057.js"),
  Chunk153488 = require("./153488.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js"),
  Chunk615405 = require("./615405.js"),
  Chunk403362 = require("./403362.js"),
  Chunk344917 = require("./344917.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk680000 = require("./680000.js");

function w(e) {
  var t, n;
  let {
    user: i,
    index: l,
    isCompetitive: a
  } = e, {
    status: s,
    isMobile: c
  } = (0, o.cf)([y.A], () => ({
    status: y.A.getStatus(i.id),
    isMobile: y.A.isMobileOnline(i.id)
  })), d = (0, o.bG)([v.A, E.A], () => {
    let e = E.A.getDMFromUserId(i.id);
    return null != e && v.A.isTyping(e, i.id)
  }, [i]), {
    avatarSrc: h,
    eventHandlers: g
  } = (0, b.A)({
    userId: i.id,
    size: u._3J.SIZE_32,
    animateOnHover: true
  }), A = async () => {
    var e, t;
    await p.A.openPrivateChannel({
      recipientIds: [i.id],
      location: f.A.FREQUENT_FRIENDS_ROW
    });
    let n = E.A.getDMFromUserId(i.id);
    null != n && (0, m.zV)(j.HAw.CHANNEL_OPENED, (e = function(e) {
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
    }({}, (0, m.qL)(n)), t = t = {
      location: "".concat(f.A.FREQUENT_FRIENDS_ROW, " ").concat(l + 1)
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
  }, _ = 0 === l, O = _ ? u.Y3C : a ? u.Y5K : true, I = _ ? x.intl.string(x.t.aI4VOL) : a ? x.intl.string(x.t.kABl2x) : true;
  return (0, r.jsx)(u.DUT, {
    className: P.it,
    onClick: A,
    onMouseEnter: g.onMouseEnter,
    onMouseLeave: g.onMouseLeave,
    "aria-label": x.intl.formatToPlainString(x.t.M5FjCr, {
      username: i.username
    }),
    children: (0, r.jsx)(u.euF, {
      src: h,
      "aria-label": null != (t = i.globalName) ? t : i.username,
      status: s,
      isTyping: d,
      isMobile: c && !d,
      size: u._3J.SIZE_32,
      CutoutIcon: O,
      avatarTooltipAsset: _ ? "\uD83D\uDD25" : a ? "❄️" : true,
      avatarTooltipText: I,
      statusTooltip: true,
      statusTooltipDelay: 50,
      avatarTooltipTitle: null != (n = i.globalName) ? n : i.username
    })
  })
}

function L() {
  let e, t, n, {
      enabled: l
    } = (0, T.M)("frequent_friends_row"),
    p = (e = (0, o.yK)([_.A], () => [..._.A.getUserAffinities()].sort((e, t) => _.A.compare(e.otherUserId, t.otherUserId))), t = (0, o.yK)([S.default, I.A], () => {
      let t = e.map(e => e.otherUserId),
        n = [];
      for (let e of t)
        if (n.length < 5) {
          let t = S.default.getUser(e);
          !(0, N.Vq)(t) || I.A.isIgnored(t.id) || I.A.isBlocked(t.id) || n.push(t)
        } else break;
      return n
    }, [e]), n = i.useMemo(() => {
      var n, r;
      if (t.length < 5) returnfalse;
      let i = e.findIndex(e => e.otherUserId === t[4].id);
      return !!(i < e.length - 1) && !!((null == (n = e[i]) ? true : n.communicationProbability) - .25 <= (null == (r = e[i + 1]) ? true : r.communicationProbability))
    }, [e, t]), t.length < 3 ? null : {
      frequentFriends: t,
      showCompetitiveSpot: n
    }),
    f = (0, o.bG)([O.A], () => O.A.hasConsented(j.YAq.PERSONALIZATION)),
    m = (0, o.bG)([S.default], () => {
      var e, t;
      return null != (e = null == (t = S.default.getCurrentUser()) ? true : t.nsfwAllowed) && e
    }),
    [b, E] = i.useState({
      scrollLeft: 0,
      scrollWidth: 0,
      clientWidth: 0
    }),
    y = i.useRef(null),
    v = (0, o.bG)([C.A], () => C.A.ipCountryCode),
    L = (0, g.uE)(),
    R = i.useCallback(() => {
      var e;
      let t = null == (e = y.current) ? true : e.getScrollerNode();
      null != t && E({
        scrollLeft: t.scrollLeft,
        scrollWidth: t.scrollWidth,
        clientWidth: t.clientWidth
      })
    }, []);
  i.useEffect(() => {
    (null == p ? true : p.frequentFriends.length) != null && R()
  }, [null == p ? true : p.frequentFriends.length, null == p ? true : p.showCompetitiveSpot, R]);
  let D = (0, h.w)(R, []),
    M = i.useCallback(e => {
      let t = e.currentTarget;
      E({
        scrollLeft: t.scrollLeft,
        scrollWidth: t.scrollWidth,
        clientWidth: t.clientWidth
      })
    }, [E]);
  if (i.useEffect(() => {
      (0, d.xe)()
    }, []), !l || null == p || !f) return null;
  let {
    frequentFriends: k,
    showCompetitiveSpot: U
  } = p, G = (v === s.d.AU || v === s.d.GB) && !L, V = null != v && s.M.EU_COUNTRIES.has(v) && !m, B = !G && !V && null != v && U, H = b.scrollWidth > b.clientWidth, F = b.scrollLeft > 0, Y = b.scrollLeft < b.scrollWidth - b.clientWidth - 2;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: P.mk,
      children: [(0, r.jsxs)("div", {
        className: P.$r,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-sm/semibold",
          className: P.Uq,
          children: x.intl.string(x.t.QEh90H)
        }), (0, r.jsx)(c.m_, {
          text: x.intl.string(x.t.tqCMcU),
          children: (0, r.jsx)(u.mir, {
            className: P.BK
          })
        })]
      }), (0, r.jsx)(u.zCo, {
        ref: e => {
          y.current = e, D.current = (null == e ? true : e.getScrollerNode()) != null ? e.getScrollerNode() : null
        },
        className: a()(P.i9, {
          [P.BI]: H && F,
          [P.E2]: H && Y
        }),
        orientation: "horizontal",
        onScroll: M,
        children: k.map((e, t) => (0, r.jsx)(w, {
          user: e,
          index: t,
          isCompetitive: B && t === k.length - 1
        }, e.id))
      })]
    }), (0, r.jsx)(A.n, {})]
  })
}