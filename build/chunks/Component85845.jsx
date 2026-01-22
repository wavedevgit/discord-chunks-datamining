/** Chunk was on web.js **/
/** chunk id: 85845, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N,
  L: () => R
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

function C(e) {
  return (0, a.bG)([p.A], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: n
    } = e;
    return p.A.getSound(t === S.XH ? S.mV : t, n)
  })
}

function N() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.x, {
      setting: A.H.VOICE_AND_VIDEO_SOUNDBOARD,
      children: [(0, r.jsx)(y.A, {}), (0, r.jsx)(O.A, {})]
    }), (0, r.jsx)(d.x, {
      setting: A.H.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: (0, r.jsx)(R, {})
    })]
  })
}

function R() {
  let {
    analyticsLocations: e
  } = (0, l.Ay)(), [t, n] = i.useState(S.XH), o = (0, h.mz)(t), d = C(o), E = (null == o ? true : o.type) === h.PP.GLOBAL, y = (0, a.bG)([p.A], () => p.A.hasFetchedAllSounds()) && null != o && null == d;
  i.useEffect(() => {
    y && (0, _.ND)({
      location: e
    })
  }, [y, e]), i.useEffect(() => {
    (0, f.E7)()
  }, []);
  let O = i.useCallback((e, t) => {
    let {
      inDropdown: n
    } = t;
    return null == e ? null : n ? (0, r.jsx)(w, {
      guildId: e.value
    }) : null
  }, []);
  return (0, r.jsx)(b.A, {
    children: (0, r.jsxs)(s.nVY, {
      label: I.intl.string(I.t.nzUc3B),
      description: I.intl.format(I.t.u9RWmv, {
        helpdeskArticle: g.A.getArticleURL(v.MVz.SOUNDBOARD)
      }),
      children: [(0, r.jsx)(c.A, {
        guildId: t,
        className: T.Dt,
        globalOption: {
          label: I.intl.string(I.t["CpEUP/"]),
          value: S.XH
        },
        onChange: e => {
          n(null == e ? S.XH : e.id)
        },
        renderOptionSuffix: O,
        hideDivider: true
      }), (0, r.jsxs)(u.A, {
        title: I.intl.format(I.t.I2TsYN, {
          nitroWheelHook: () => (0, r.jsx)(s.tvc, {
            size: "md",
            color: "currentColor",
            className: T.ax
          })
        }),
        children: [(0, r.jsx)(m.A, {
          sound: d,
          isGlobal: E,
          onSelect: n => {
            null == n ? (0, _.Dv)(t, e) : (0, _.un)(t, n, e)
          }
        }), y && (0, r.jsx)(s.po8, {
          className: T.lm,
          messageType: s.YCn.WARNING,
          children: I.intl.string(I.t.WkPsFR)
        })]
      })]
    })
  })
}

function w(e) {
  let {
    guildId: t
  } = e, n = (0, a.bG)([E.A], () => {
    var e, n, r;
    return null == (r = E.A.settings.guilds) || null == (n = r.guilds) || null == (e = n[t]) ? true : e.joinSound
  }), i = C(n);
  if (null == n || null == i) return null;
  let {
    emojiId: l,
    emojiName: c
  } = i, u = null != l || null != c;
  return (0, r.jsxs)("div", {
    className: T.Io,
    children: [u ? (0, r.jsx)(o.A, {
      emojiId: l,
      emojiName: c,
      className: T.nW
    }) : (0, r.jsx)(s.HKD, {
      size: "md",
      color: "currentColor",
      className: T.nW
    }), (0, r.jsx)(s.Text, {
      className: T.dK,
      variant: "text-xs/medium",
      children: i.name
    })]
  })
}