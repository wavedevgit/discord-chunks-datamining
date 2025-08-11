/** Chunk was on 75708 **/
/** chunk id: 894939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk576813 = require("./576813.js"),
  Chunk20493 = require("./20493.js");

function A(e) {
  return (0, l.e7)([h.Z], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: n
    } = e;
    return h.Z.getSound(t === T.hY ? T.X8 : t, n)
  })
}

function P(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(p.F, {
      setting: v.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: [(0, i.jsx)(C.Z, {
        refreshStyles: t
      }), (0, i.jsx)(O.Z, {
        refreshStyles: t
      })]
    }), (0, i.jsxs)(p.F, {
      setting: v.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: [t ? null : (0, i.jsx)(o.$i$, {
        className: N.callSoundsDivider
      }), (0, i.jsx)(R, {
        refreshStyles: t
      })]
    })]
  });
  return t ? n : (0, i.jsx)(o.hjN, {
    className: N.container,
    tag: o.RB0.H1,
    titleClassName: y.__invalid_marginBottom16,
    title: I.intl.string(I.t.ABjMWF),
    children: n
  })
}

function R(e) {
  let {
    refreshStyles: t
  } = e, {
    analyticsLocations: n
  } = (0, d.ZP)(), [s, c] = r.useState(T.hY), p = (0, b.tT)(s), j = A(p), C = (null == p ? true : p.type) === b.zx.GLOBAL, O = (0, l.e7)([h.Z], () => h.Z.hasFetchedAllSounds()) && null != p && null == j;
  r.useEffect(() => {
    O && (0, f.tt)({
      location: n
    })
  }, [O, n]), r.useEffect(() => {
    (0, g.w)()
  }, []);
  let v = r.useCallback((e, t) => {
      let {
        inDropdown: n
      } = t;
      return null == e ? null : n ? (0, i.jsx)(D, {
        guildId: e.value
      }) : null
    }, []),
    P = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.xJW, {
        title: I.intl.string(I.t.nzUc3N),
        children: (0, i.jsx)(o.R94, {
          children: I.intl.format(I.t.u9RWmp, {
            helpdeskArticle: _.Z.getArticleURL(S.BhN.SOUNDBOARD)
          })
        })
      }), (0, i.jsx)(u.Z, {
        guildId: s,
        className: a()(N.guildSelector, {
          [N.refreshGuildSelector]: t
        }),
        globalOption: {
          label: I.intl.string(I.t.CpEUPz),
          value: T.hY
        },
        onChange: e => {
          c(null == e ? T.hY : e.id)
        },
        renderOptionSuffix: v,
        hideDivider: true
      }), (0, i.jsxs)(m.Z, {
        className: a()({
          [y.marginTop20]: !t
        }),
        title: I.intl.format(I.t.I2TsYG, {
          nitroWheelHook: () => (0, i.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: N.nitroWheel
          })
        }),
        forcedDivider: !t,
        children: [(0, i.jsx)(x.Z, {
          sound: j,
          isGlobal: C,
          onSelect: e => {
            null == e ? (0, f.aC)(s, n) : (0, f.SZ)(s, e, n)
          }
        }), O && (0, i.jsx)(o.Wn, {
          className: N.notice,
          messageType: o.QYI.WARNING,
          children: I.intl.string(I.t.WkPsFR)
        })]
      })]
    });
  return t ? (0, i.jsx)(E.Z, {
    children: P
  }) : P
}

function D(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([j.Z], () => {
    var e, n, i;
    return null == (i = j.Z.settings.guilds) || null == (n = i.guilds) || null == (e = n[t]) ? true : e.joinSound
  }), r = A(n);
  if (null == n || null == r) return null;
  let {
    emojiId: s,
    emojiName: a
  } = r, d = null != s || null != a;
  return (0, i.jsxs)("div", {
    className: N.pill,
    children: [d ? (0, i.jsx)(c.Z, {
      emojiId: s,
      emojiName: a,
      className: N.pillIcon
    }) : (0, i.jsx)(o.gj8, {
      size: "md",
      color: "currentColor",
      className: N.pillIcon
    }), (0, i.jsx)(o.Text, {
      className: N.pillText,
      variant: "text-xs/medium",
      children: r.name
    })]
  })
}