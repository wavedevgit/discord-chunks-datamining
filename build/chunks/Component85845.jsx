/** Chunk was on 60667 **/
/** chunk id: 85845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v,
  L: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk687021 = require("./687021.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk536432 = require("./536432.js"),
  Chunk984813 = require("./984813.js"),
  Chunk595953 = require("./595953.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk617617 = require("./617617.js"),
  Chunk772927 = require("./772927.jsx"),
  Chunk410316 = require("./410316.jsx"),
  Chunk681677 = require("./681677.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk980504 = require("./980504.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk646561 = require("./646561.js");

function j(e) {
  return (0, l.bG)([p.A], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: n
    } = e;
    return p.A.getSound(t === T.XH ? T.mV : t, n)
  })
}

function v() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(u.x, {
      setting: O.H.VOICE_AND_VIDEO_SOUNDBOARD,
      children: [(0, r.jsx)(E.A, {}), (0, r.jsx)(x.A, {})]
    }), (0, r.jsx)(u.x, {
      setting: O.H.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: (0, r.jsx)(N, {})
    })]
  })
}

function N() {
  let {
    analyticsLocations: e
  } = (0, o.Ay)(), [t, n] = i.useState(T.XH), a = (0, g.mz)(t), u = j(a), h = (null == a ? true : a.type) === g.PP.GLOBAL, E = (0, l.bG)([p.A], () => p.A.hasFetchedAllSounds()) && null != a && null == u;
  i.useEffect(() => {
    E && (0, m.ND)({
      location: e
    })
  }, [E, e]), i.useEffect(() => {
    (0, _.E7)()
  }, []);
  let x = i.useCallback((e, t) => {
    let {
      inDropdown: n
    } = t;
    return null == e ? null : n ? (0, r.jsx)(y, {
      guildId: e.value
    }) : null
  }, []);
  return (0, r.jsx)(b.A, {
    children: (0, r.jsxs)(s.nVY, {
      label: I.intl.string(I.t.nzUc3B),
      description: I.intl.format(I.t.u9RWmv, {
        helpdeskArticle: f.A.getArticleURL(C.MVz.SOUNDBOARD)
      }),
      children: [(0, r.jsx)(c.A, {
        guildId: t,
        className: S.Dt,
        globalOption: {
          label: I.intl.string(I.t["CpEUP/"]),
          value: T.XH
        },
        onChange: e => {
          n(null == e ? T.XH : e.id)
        },
        renderOptionSuffix: x,
        hideDivider: true
      }), (0, r.jsxs)(d.A, {
        title: I.intl.format(I.t.I2TsYN, {
          nitroWheelHook: () => (0, r.jsx)(s.tvc, {
            size: "md",
            color: "currentColor",
            className: S.ax
          })
        }),
        children: [(0, r.jsx)(A.A, {
          sound: u,
          isGlobal: h,
          onSelect: n => {
            null == n ? (0, m.Dv)(t, e) : (0, m.un)(t, n, e)
          }
        }), E && (0, r.jsx)(s.po8, {
          className: S.lm,
          messageType: s.YCn.WARNING,
          children: I.intl.string(I.t.WkPsFR)
        })]
      })]
    })
  })
}

function y(e) {
  let {
    guildId: t
  } = e, n = (0, l.bG)([h.A], () => {
    var e, n, r;
    return null == (r = h.A.settings.guilds) || null == (n = r.guilds) || null == (e = n[t]) ? true : e.joinSound
  }), i = j(n);
  if (null == n || null == i) return null;
  let {
    emojiId: o,
    emojiName: c
  } = i, d = null != o || null != c;
  return (0, r.jsxs)("div", {
    className: S.Io,
    children: [d ? (0, r.jsx)(a.A, {
      emojiId: o,
      emojiName: c,
      className: S.nW
    }) : (0, r.jsx)(s.HKD, {
      size: "md",
      color: "currentColor",
      className: S.nW
    }), (0, r.jsx)(s.Text, {
      className: S.dK,
      variant: "text-xs/medium",
      children: i.name
    })]
  })
}