/** Chunk was on web.js **/
/** chunk id: 894939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => P,
  Z: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk856768 = require("./856768.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk921801 = require("./921801.jsx"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk242291 = require("./242291.js"),
  Chunk893663 = require("./893663.js"),
  Chunk331642 = require("./331642.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk581883 = require("./581883.js"),
  Chunk738486 = require("./738486.jsx"),
  Chunk918257 = require("./918257.jsx"),
  Chunk970813 = require("./970813.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk395510 = require("./395510.js");

function A(e) {
  return (0, a.e7)([p.Z], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: n
    } = e;
    return p.Z.getSound(t === I.hY ? I.X8 : t, n)
  })
}

function N() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.F, {
      setting: v.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: [(0, r.jsx)(y.Z, {}), (0, r.jsx)(O.Z, {})]
    }), (0, r.jsx)(d.F, {
      setting: v.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: (0, r.jsx)(P, {})
    })]
  })
}

function P() {
  let {
    analyticsLocations: e
  } = (0, l.ZP)(), [t, n] = i.useState(I.hY), s = (0, h.tT)(t), d = A(s), E = (null == s ? true : s.type) === h.zx.GLOBAL, y = (0, a.e7)([p.Z], () => p.Z.hasFetchedAllSounds()) && null != s && null == d;
  i.useEffect(() => {
    y && (0, _.tt)({
      location: e
    })
  }, [y, e]), i.useEffect(() => {
    (0, f.w)()
  }, []);
  let O = i.useCallback((e, t) => {
    let {
      inDropdown: n
    } = t;
    return null == e ? null : n ? (0, r.jsx)(w, {
      guildId: e.value
    }) : null
  }, []);
  return (0, r.jsx)(b.Z, {
    children: (0, r.jsxs)(o.C3N, {
      label: T.intl.string(T.t.nzUc3B),
      description: T.intl.format(T.t.u9RWmv, {
        helpdeskArticle: g.Z.getArticleURL(S.BhN.SOUNDBOARD)
      }),
      children: [(0, r.jsx)(c.Z, {
        guildId: t,
        className: C.guildSelector,
        globalOption: {
          label: T.intl.string(T.t["CpEUP/"]),
          value: I.hY
        },
        onChange: e => {
          n(null == e ? I.hY : e.id)
        },
        renderOptionSuffix: O,
        hideDivider: true
      }), (0, r.jsxs)(u.Z, {
        title: T.intl.format(T.t.I2TsYN, {
          nitroWheelHook: () => (0, r.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: C.nitroWheel
          })
        }),
        children: [(0, r.jsx)(m.Z, {
          sound: d,
          isGlobal: E,
          onSelect: n => {
            null == n ? (0, _.aC)(t, e) : (0, _.SZ)(t, n, e)
          }
        }), y && (0, r.jsx)(o.Wn, {
          className: C.notice,
          messageType: o.QYI.WARNING,
          children: T.intl.string(T.t.WkPsFR)
        })]
      })]
    })
  })
}

function w(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([E.Z], () => {
    var e, n, r;
    return null == (r = E.Z.settings.guilds) || null == (n = r.guilds) || null == (e = n[t]) ? true : e.joinSound
  }), i = A(n);
  if (null == n || null == i) return null;
  let {
    emojiId: l,
    emojiName: c
  } = i, u = null != l || null != c;
  return (0, r.jsxs)("div", {
    className: C.pill,
    children: [u ? (0, r.jsx)(s.Z, {
      emojiId: l,
      emojiName: c,
      className: C.pillIcon
    }) : (0, r.jsx)(o.gj8, {
      size: "md",
      color: "currentColor",
      className: C.pillIcon
    }), (0, r.jsx)(o.Text, {
      className: C.pillText,
      variant: "text-xs/medium",
      children: i.name
    })]
  })
}