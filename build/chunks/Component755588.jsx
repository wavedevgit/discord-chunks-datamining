/** Chunk was on 7685 **/
/** chunk id: 755588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let x = Chunk64700.memo(function(e) {
  let {
    startTimestampMs: t
  } = e, n = (0, N.A)(), [l, i] = r.useState(() => Date.now());
  r.useEffect(() => {
    let e = n.setInterval(() => i(Date.now()), 1e3);
    return () => n.clearInterval(e)
  }, [n]);
  let s = Math.max(0, (l - t) / 1e3);
  return (0, m.f)(s)
});
x.displayName = "OverlayElapsedTime";
let D = Chunk64700.memo(function() {
  var e;
  let t = (0, N.A)(),
    [n, l] = r.useState(() => Date.now());
  r.useEffect(() => {
    let e = t.setInterval(() => l(Date.now()), 1e3);
    return () => t.clearInterval(e)
  }, [t]);
  let i = null != (e = (0, a.bG)([S.A], () => {
    var e;
    return null != (e = S.A.getDuration()) ? e : 0
  }, [n])) ? e : 0;
  return (0, m.f)(i / 1e3)
});

function M(e) {
  var t, n, i, s, m, S, b;
  let N, {
      currentUser: M,
      activity: j,
      currentGameName: w
    } = e,
    P = null != (t = null == M ? true : M.id) ? t : null,
    R = (0, f.A)({
      userId: P,
      guildId: null
    }),
    {
      isMobileOnline: U,
      status: G
    } = (0, a.cf)([y.A], () => null == P ? {
      isMobileOnline: true,
      status: true
    } : {
      isMobileOnline: y.A.isMobileOnline(P),
      status: y.A.getStatus(P)
    }, [P]),
    L = (0, a.bG)([v.A], () => v.A.getVoiceChannelId()),
    k = (0, a.bG)([A.A], () => null != L ? A.A.getChannel(L) : null, [L]),
    F = (0, d.Ay)(k),
    V = null != (n = (0, h.A)(null != P ? P : "0")) ? n : null,
    H = null != P ? V : null,
    Y = null == (N = null != (m = (0, c.A)(j, true).text) ? m : w) ? null : (null == j ? true : j.type) === T.$pd.PLAYING || null == j ? _.intl.formatToPlainString(_.t.lFApmz, {
      game: N
    }) : N,
    W = (null == j || null == (s = j.timestamps) ? true : s.start) != null ? (S = j.timestamps.start) < 1e12 ? 1e3 * S : S : null,
    z = r.useMemo(() => (function(e) {
      let {
        activityLabel: t,
        activityStartTimestampMs: n,
        voiceCallName: l,
        customStatusActivity: r
      } = e;
      return null != t ? {
        type: "activity",
        label: t,
        startTimestampMs: n
      } : null != l ? {
        type: "voice_call",
        label: l
      } : null != r ? {
        type: "custom_status",
        customStatusActivity: r
      } : {
        type: "none"
      }
    })({
      activityLabel: Y,
      activityStartTimestampMs: W,
      voiceCallName: F,
      customStatusActivity: H
    }), [Y, W, F, H]);
  if (null == M) return null;
  let B = null == M.banner ? null : null != (b = (0, O.z)({
      id: M.id,
      banner: M.banner,
      canAnimate: E.kt.getSetting(),
      size: 600
    })) ? b : null,
    K = null != (i = M.globalName) ? i : M.username;
  return (0, l.jsxs)("div", {
    className: C.cI,
    children: [(0, l.jsx)("div", {
      className: C.CK,
      style: {
        backgroundImage: null != B ? "url(".concat(B, ")") : true
      }
    }), (0, l.jsxs)("div", {
      className: C.vK,
      children: [(0, l.jsxs)("div", {
        className: C.iy,
        children: [(0, l.jsx)(u.A, {
          user: M,
          isMobile: U,
          status: G,
          className: C.my,
          size: o._3J.SIZE_40
        }), (0, l.jsxs)("div", {
          className: C.ic,
          children: [(0, l.jsx)(I.A, {
            userName: K,
            textClassName: C.Xh,
            displayNameStyles: R,
            effectDisplayType: p.G.ANIMATED
          }), (() => {
            switch (z.type) {
              case "activity":
                return (0, l.jsxs)("div", {
                  className: C.nU,
                  children: [(0, l.jsx)(o._xR, {
                    size: "xxs",
                    color: "currentColor",
                    className: C.Wo
                  }), (0, l.jsx)(o.Text, {
                    className: C.Yg,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: z.label
                  })]
                });
              case "voice_call":
                return (0, l.jsxs)("div", {
                  className: C.nU,
                  children: [(0, l.jsx)(o.HKD, {
                    size: "xxs",
                    color: "currentColor",
                    className: C.Wo
                  }), (0, l.jsx)(o.Text, {
                    className: C.Yg,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: z.label
                  })]
                });
              case "custom_status":
                return (0, l.jsx)("div", {
                  className: C.nU,
                  children: (0, l.jsx)(g.A, {
                    activity: z.customStatusActivity,
                    className: C.tR,
                    emojiClassName: C.qp,
                    textClassName: C.Yg,
                    hideTooltip: true
                  })
                });
              default:
                return null
            }
          })()]
        })]
      }), "activity" === z.type ? null == z.startTimestampMs ? null : (0, l.jsx)(o.Text, {
        className: C.p0,
        variant: "code",
        tag: "div",
        children: (0, l.jsx)(x, {
          startTimestampMs: z.startTimestampMs
        })
      }) : "voice_call" === z.type ? null == L ? null : (0, l.jsx)(o.Text, {
        className: C.p0,
        variant: "code",
        tag: "div",
        children: (0, l.jsx)(D, {})
      }) : null]
    })]
  })
}

function j(e) {
  let {
    currentUser: t,
    activity: n,
    currentGameName: r,
    activeTab: i,
    onTabChange: s
  } = e;
  return (0, l.jsxs)("div", {
    className: C.kL,
    children: [(0, l.jsx)(M, {
      currentUser: t,
      activity: n,
      currentGameName: r
    }), (0, l.jsx)("div", {
      className: C.vR,
      role: "tablist",
      "aria-label": _.intl.string(_.t.TdEu5X),
      children: [{
        id: b.x.FRIENDS,
        label: _.t.TdEu5X
      }, {
        id: b.x.MESSAGES,
        label: _.t.OIgYlQ
      }, {
        id: b.x.VOICE,
        label: _.t.K3lovD
      }].map(e => {
        let {
          id: t,
          label: n
        } = e;
        return (0, l.jsx)(w, {
          tab: t,
          label: _.intl.formatToPlainString(n, {}),
          selected: i === t,
          onSelect: s
        }, t)
      })
    })]
  })
}

function w(e) {
  let {
    tab: t,
    label: n,
    selected: r,
    onSelect: i,
    className: a
  } = e;
  return (0, l.jsx)(o.DUT, {
    role: "tab",
    "aria-selected": r,
    className: s()(C.Mf, r && C.jP, a),
    onClick: () => i(t),
    children: (0, l.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      children: n
    })
  })
}
D.displayName = "OverlayVoiceCallElapsedTime"