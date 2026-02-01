/** Chunk was on 71447 **/
/** chunk id: 755588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk566903 = require("./566903.js"),
  Chunk47167 = require("./47167.js"),
  Chunk410540 = require("./410540.js"),
  Chunk302223 = require("./302223.jsx"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk853390 = require("./853390.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk486020 = require("./486020.js"),
  Chunk914853 = require("./914853.js"),
  Chunk545807 = require("./545807.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk742466 = require("./742466.js");
let C = Chunk64700.memo(function(e) {
  let {
    startTimestampMs: t
  } = e, n = (0, S.A)(), [i, l] = r.useState(() => Date.now());
  r.useEffect(() => {
    let e = n.setInterval(() => l(Date.now()), 1e3);
    return () => n.clearInterval(e)
  }, [n]);
  let a = Math.max(0, (i - t) / 1e3);
  return (0, y.f)(a)
});
C.displayName = "OverlayElapsedTime";
let N = Chunk64700.memo(function() {
  var e;
  let t = (0, S.A)(),
    [n, i] = r.useState(() => Date.now());
  r.useEffect(() => {
    let e = t.setInterval(() => i(Date.now()), 1e3);
    return () => t.clearInterval(e)
  }, [t]);
  let l = null != (e = (0, s.bG)([E.A], () => {
    var e;
    return null != (e = E.A.getDuration()) ? e : 0
  }, [n])) ? e : 0;
  return (0, y.f)(l / 1e3)
});

function w(e) {
  var t, n, l, a, y, E, _;
  let S, {
      currentUser: w,
      activity: P,
      currentGameName: D
    } = e,
    R = null != (t = null == w ? true : w.id) ? t : null,
    k = (0, f.A)({
      userId: R,
      guildId: null
    }),
    {
      isMobileOnline: M,
      status: L
    } = (0, s.cf)([b.A], () => null == R ? {
      isMobileOnline: true,
      status: true
    } : {
      isMobileOnline: b.A.isMobileOnline(R),
      status: b.A.getStatus(R)
    }, [R]),
    U = (0, s.bG)([O.A], () => O.A.getVoiceChannelId()),
    G = (0, s.bG)([v.A], () => null != U ? v.A.getChannel(U) : null, [U]),
    V = (0, d.Ay)(G),
    z = null != (n = (0, h.A)(null != R ? R : "0")) ? n : null,
    F = null != R ? z : null,
    H = null == (S = null != (y = (0, c.A)(P, true).text) ? y : D) ? null : (null == P ? true : P.type) === I.$pd.PLAYING || null == P ? j.intl.formatToPlainString(j.t.lFApmz, {
      game: S
    }) : S,
    Y = (null == P || null == (a = P.timestamps) ? true : a.start) != null ? (E = P.timestamps.start) < 1e12 ? 1e3 * E : E : null,
    K = r.useMemo(() => (function(e) {
      let {
        activityLabel: t,
        activityStartTimestampMs: n,
        voiceCallName: i,
        customStatusActivity: r
      } = e;
      return null != t ? {
        type: "activity",
        label: t,
        startTimestampMs: n
      } : null != i ? {
        type: "voice_call",
        label: i
      } : null != r ? {
        type: "custom_status",
        customStatusActivity: r
      } : {
        type: "none"
      }
    })({
      activityLabel: H,
      activityStartTimestampMs: Y,
      voiceCallName: V,
      customStatusActivity: F
    }), [H, Y, V, F]);
  if (null == w) return null;
  let W = null == w.banner ? null : null != (_ = (0, x.z)({
      id: w.id,
      banner: w.banner,
      canAnimate: A.kt.getSetting(),
      size: 600
    })) ? _ : null,
    B = null != (l = w.globalName) ? l : w.username;
  return (0, i.jsxs)("div", {
    className: T.cI,
    children: [(0, i.jsx)("div", {
      className: T.CK,
      style: {
        backgroundImage: null != W ? "url(".concat(W, ")") : true
      }
    }), (0, i.jsxs)("div", {
      className: T.vK,
      children: [(0, i.jsxs)("div", {
        className: T.iy,
        children: [(0, i.jsx)(u.A, {
          user: w,
          isMobile: M,
          status: L,
          className: T.my,
          size: o._3J.SIZE_40
        }), (0, i.jsxs)("div", {
          className: T.ic,
          children: [(0, i.jsx)(m.A, {
            userName: B,
            textClassName: T.Xh,
            displayNameStyles: k,
            effectDisplayType: g.G.ANIMATED
          }), (() => {
            switch (K.type) {
              case "activity":
                return (0, i.jsxs)("div", {
                  className: T.nU,
                  children: [(0, i.jsx)(o._xR, {
                    size: "xxs",
                    color: "currentColor",
                    className: T.Wo
                  }), (0, i.jsx)(o.Text, {
                    className: T.Yg,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: K.label
                  })]
                });
              case "voice_call":
                return (0, i.jsxs)("div", {
                  className: T.nU,
                  children: [(0, i.jsx)(o.HKD, {
                    size: "xxs",
                    color: "currentColor",
                    className: T.Wo
                  }), (0, i.jsx)(o.Text, {
                    className: T.Yg,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: K.label
                  })]
                });
              case "custom_status":
                return (0, i.jsx)("div", {
                  className: T.nU,
                  children: (0, i.jsx)(p.A, {
                    activity: K.customStatusActivity,
                    className: T.tR,
                    emojiClassName: T.qp,
                    textClassName: T.Yg,
                    hideTooltip: true
                  })
                });
              default:
                return null
            }
          })()]
        })]
      }), "activity" === K.type ? null == K.startTimestampMs ? null : (0, i.jsx)(o.Text, {
        className: T.p0,
        variant: "code",
        tag: "div",
        children: (0, i.jsx)(C, {
          startTimestampMs: K.startTimestampMs
        })
      }) : "voice_call" === K.type ? null == U ? null : (0, i.jsx)(o.Text, {
        className: T.p0,
        variant: "code",
        tag: "div",
        children: (0, i.jsx)(N, {})
      }) : null]
    })]
  })
}

function P(e) {
  let {
    currentUser: t,
    activity: n,
    currentGameName: r,
    activeTab: l,
    onTabChange: a
  } = e;
  return (0, i.jsxs)("div", {
    className: T.kL,
    children: [(0, i.jsx)(w, {
      currentUser: t,
      activity: n,
      currentGameName: r
    }), (0, i.jsx)("div", {
      className: T.vR,
      role: "tablist",
      "aria-label": j.intl.string(j.t.TdEu5X),
      children: [{
        id: _.x.FRIENDS,
        label: j.t.TdEu5X
      }, {
        id: _.x.MESSAGES,
        label: j.t.OIgYlQ
      }, {
        id: _.x.VOICE,
        label: j.t.K3lovD
      }].map(e => {
        let {
          id: t,
          label: n
        } = e;
        return (0, i.jsx)(D, {
          tab: t,
          label: j.intl.formatToPlainString(n, {}),
          selected: l === t,
          onSelect: a
        }, t)
      })
    })]
  })
}

function D(e) {
  let {
    tab: t,
    label: n,
    selected: r,
    onSelect: l,
    className: s
  } = e;
  return (0, i.jsx)(o.DUT, {
    role: "tab",
    "aria-selected": r,
    className: a()(T.Mf, r && T.jP, s),
    onClick: () => l(t),
    children: (0, i.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      children: n
    })
  })
}
N.displayName = "OverlayVoiceCallElapsedTime"