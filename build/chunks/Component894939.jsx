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
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: [(0, Chunk54381.jsx)(Chunk918257.Z, {}), (0, Chunk54381.jsx)(Chunk970813.Z, {})]
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: (0, Chunk54381.jsx)(P, {})
    })]
  })
}

function P() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), [t, n] = Chunk473749.useState(Chunk710111.hY), s = (0, Chunk893663.tT)(exports), d = A(Chunk596454), E = (null == Chunk596454 ? true : Chunk596454.type) === Chunk893663.zx.GLOBAL, y = (0, Chunk442837.e7)([Chunk763296.Z], () => Chunk763296.Z.hasFetchedAllSounds()) && null != Chunk596454 && null == Chunk921801;
  Chunk473749.useEffect(() => {
    Chunk918257 && (0, Chunk242291.tt)({
      location: module
    })
  }, [Chunk918257, module]), Chunk473749.useEffect(() => {
    (0, Chunk208049.w)()
  }, []);
  let O = Chunk473749.useCallback((e, t) => {
    let {
      inDropdown: n
    } = t;
    return null == e ? null : n ? (0, r.jsx)(R, {
      guildId: e.value
    }) : null
  }, []);
  return (0, Chunk54381.jsx)(Chunk738486.Z, {
    children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.nzUc3B),
      description: Chunk388032.intl.format(Chunk388032.t.u9RWmv, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SOUNDBOARD)
      }),
      children: [(0, Chunk54381.jsx)(Chunk856768.Z, {
        guildId: exports,
        className: Chunk395510.guildSelector,
        globalOption: {
          label: Chunk388032.intl.string(Chunk388032.t["CpEUP/"]),
          value: Chunk710111.hY
        },
        onChange: e => {
          n(null == e ? I.hY : e.id)
        },
        renderOptionSuffix: Chunk970813,
        hideDivider: true
      }), (0, Chunk54381.jsxs)(Chunk993413.Z, {
        title: Chunk388032.intl.format(Chunk388032.t.I2TsYN, {
          nitroWheelHook: () => (0, Chunk54381.jsx)(Chunk481060.SrA, {
            size: "md",
            color: "currentColor",
            className: Chunk395510.nitroWheel
          })
        }),
        children: [(0, Chunk54381.jsx)(Chunk331642.Z, {
          sound: Chunk921801,
          isGlobal: Chunk581883,
          onSelect: n => {
            null == n ? (0, _.aC)(t, e) : (0, _.SZ)(t, n, e)
          }
        }), Chunk918257 && (0, Chunk54381.jsx)(Chunk481060.Wn, {
          className: Chunk395510.notice,
          messageType: Chunk481060.QYI.WARNING,
          children: Chunk388032.intl.string(Chunk388032.t.WkPsFR)
        })]
      })]
    })
  })
}

function R(e) {
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