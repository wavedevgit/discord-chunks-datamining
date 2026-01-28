/** Chunk was on 60449 **/
/** chunk id: 85845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  L: () => I
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

function N(e) {
  return (0, l.bG)([h.A], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: n
    } = e;
    return h.A.getSound(t === C.XH ? C.mV : t, n)
  })
}

function _() {
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(u.x, {
      setting: S.H.VOICE_AND_VIDEO_SOUNDBOARD,
      children: [(0, i.jsx)(E.A, {}), (0, i.jsx)(b.A, {})]
    }), (0, i.jsx)(u.x, {
      setting: S.H.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: (0, i.jsx)(I, {})
    })]
  })
}

function I() {
  let {
    analyticsLocations: e
  } = (0, o.Ay)(), [t, n] = s.useState(C.XH), a = (0, A.mz)(t), u = N(a), j = (null == a ? true : a.type) === A.PP.GLOBAL, E = (0, l.bG)([h.A], () => h.A.hasFetchedAllSounds()) && null != a && null == u;
  s.useEffect(() => {
    E && (0, x.ND)({
      location: e
    })
  }, [E, e]), s.useEffect(() => {
    (0, g.E7)()
  }, []);
  let b = s.useCallback((e, t) => {
    let {
      inDropdown: n
    } = t;
    return null == e ? null : n ? (0, i.jsx)(y, {
      guildId: e.value
    }) : null
  }, []);
  return (0, i.jsx)(O.A, {
    children: (0, i.jsxs)(r.nVY, {
      label: f.intl.string(f.t.nzUc3B),
      description: f.intl.format(f.t.u9RWmv, {
        helpdeskArticle: m.A.getArticleURL(v.MVz.SOUNDBOARD)
      }),
      children: [(0, i.jsx)(c.A, {
        guildId: t,
        className: T.Dt,
        globalOption: {
          label: f.intl.string(f.t["CpEUP/"]),
          value: C.XH
        },
        onChange: e => {
          n(null == e ? C.XH : e.id)
        },
        renderOptionSuffix: b,
        hideDivider: true
      }), (0, i.jsxs)(d.A, {
        title: f.intl.format(f.t.I2TsYN, {
          nitroWheelHook: () => (0, i.jsx)(r.tvc, {
            size: "md",
            color: "currentColor",
            className: T.ax
          })
        }),
        children: [(0, i.jsx)(p.A, {
          sound: u,
          isGlobal: j,
          onSelect: n => {
            null == n ? (0, x.Dv)(t, e) : (0, x.un)(t, n, e)
          }
        }), E && (0, i.jsx)(r.po8, {
          className: T.lm,
          messageType: r.YCn.WARNING,
          children: f.intl.string(f.t.WkPsFR)
        })]
      })]
    })
  })
}

function y(e) {
  let {
    guildId: t
  } = e, n = (0, l.bG)([j.A], () => {
    var e, n, i;
    return null == (i = j.A.settings.guilds) || null == (n = i.guilds) || null == (e = n[t]) ? true : e.joinSound
  }), s = N(n);
  if (null == n || null == s) return null;
  let {
    emojiId: o,
    emojiName: c
  } = s, d = null != o || null != c;
  return (0, i.jsxs)("div", {
    className: T.Io,
    children: [d ? (0, i.jsx)(a.A, {
      emojiId: o,
      emojiName: c,
      className: T.nW
    }) : (0, i.jsx)(r.HKD, {
      size: "md",
      color: "currentColor",
      className: T.nW
    }), (0, i.jsx)(r.Text, {
      className: T.dK,
      variant: "text-xs/medium",
      children: s.name
    })]
  })
}