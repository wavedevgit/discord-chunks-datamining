/** Chunk was on web.js **/
/** chunk id: 894939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk856768 = require("./856768.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk921801 = require("./921801.js"),
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
  Chunk647484 = require("./647484.js"),
  Chunk197571 = require("./197571.js");

function P(e) {
  return (0, s.e7)([h.Z], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: n
    } = e;
    return h.Z.getSound(t === A.hY ? A.X8 : t, n)
  })
}

function w(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(_.F, {
      setting: T.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: [(0, r.jsx)(v.Z, {
        refreshStyles: t
      }), (0, r.jsx)(I.Z, {
        refreshStyles: t
      })]
    }), (0, r.jsxs)(_.F, {
      setting: T.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: [t ? null : (0, r.jsx)(l.$i$, {
        className: N.callSoundsDivider
      }), (0, r.jsx)(D, {
        refreshStyles: t
      })]
    })]
  });
  return t ? n : (0, r.jsx)(l.hjN, {
    className: N.container,
    tag: l.RB0.H1,
    titleClassName: R.__invalid_marginBottom16,
    title: C.intl.string(C.t.ABjMWF),
    children: n
  })
}

function D(e) {
  let {
    refreshStyles: t
  } = e, {
    analyticsLocations: n
  } = (0, u.ZP)(), [a, c] = i.useState(A.hY), _ = (0, g.tT)(a), y = P(_), v = (null == _ ? true : _.type) === g.zx.GLOBAL, I = (0, s.e7)([h.Z], () => h.Z.hasFetchedAllSounds()) && null != _ && null == y;
  i.useEffect(() => {
    I && (0, m.tt)({
      location: n
    })
  }, [I, n]), i.useEffect(() => {
    (0, p.w)()
  }, []);
  let T = i.useCallback((e, t) => {
      let {
        inDropdown: n
      } = t;
      return null == e ? null : n ? (0, r.jsx)(x, {
        guildId: e.value
      }) : null
    }, []),
    w = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.xJW, {
        title: C.intl.string(C.t.nzUc3N),
        children: (0, r.jsx)(l.R94, {
          children: C.intl.format(C.t.u9RWmp, {
            helpdeskArticle: b.Z.getArticleURL(S.BhN.SOUNDBOARD)
          })
        })
      }), (0, r.jsx)(d.Z, {
        guildId: a,
        className: o()(N.guildSelector, {
          [N.refreshGuildSelector]: t
        }),
        globalOption: {
          label: C.intl.string(C.t.CpEUPz),
          value: A.hY
        },
        onChange: e => {
          c(null == e ? A.hY : e.id)
        },
        renderOptionSuffix: T,
        hideDivider: true
      }), (0, r.jsxs)(f.Z, {
        className: o()({
          [R.marginTop20]: !t
        }),
        title: C.intl.format(C.t.I2TsYG, {
          nitroWheelHook: () => (0, r.jsx)(l.SrA, {
            size: "md",
            color: "currentColor",
            className: N.nitroWheel
          })
        }),
        forcedDivider: !t,
        children: [(0, r.jsx)(E.Z, {
          sound: y,
          isGlobal: v,
          onSelect: e => {
            null == e ? (0, m.aC)(a, n) : (0, m.SZ)(a, e, n)
          }
        }), I && (0, r.jsx)(l.Wn, {
          className: N.notice,
          messageType: l.QYI.WARNING,
          children: C.intl.string(C.t.WkPsFR)
        })]
      })]
    });
  return t ? (0, r.jsx)(O.Z, {
    children: w
  }) : w
}

function x(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([y.Z], () => {
    var e, n, r;
    return null == (r = y.Z.settings.guilds) || null == (n = r.guilds) || null == (e = n[t]) ? true : e.joinSound
  }), i = P(n);
  if (null == n || null == i) return null;
  let {
    emojiId: a,
    emojiName: o
  } = i, u = null != a || null != o;
  return (0, r.jsxs)("div", {
    className: N.pill,
    children: [u ? (0, r.jsx)(c.Z, {
      emojiId: a,
      emojiName: o,
      className: N.pillIcon
    }) : (0, r.jsx)(l.gj8, {
      size: "md",
      color: "currentColor",
      className: N.pillIcon
    }), (0, r.jsx)(l.Text, {
      className: N.pillText,
      variant: "text-xs/medium",
      children: i.name
    })]
  })
}