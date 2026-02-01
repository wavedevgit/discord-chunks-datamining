/** Chunk was on 30485 **/
/** chunk id: 591203, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  L: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk687021 = require("./687021.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk536432 = require("./536432.js"),
  Chunk984813 = require("./984813.js"),
  Chunk595953 = require("./595953.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk617617 = require("./617617.js"),
  Chunk652215 = require("./652215.js"),
  Chunk980504 = require("./980504.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk17786 = require("./17786.js");

function L(t) {
  return (0, s.bG)([S.A], () => {
    if (null == t) return null;
    let {
      guildId: e,
      soundId: i
    } = t;
    return S.A.getSound(e === C.XH ? C.mV : e, i)
  })
}

function D(t) {
  let {
    guildId: e
  } = t, i = (0, s.bG)([O.A], () => {
    var t, i, n;
    return null == (n = O.A.settings.guilds) || null == (i = n.guilds) || null == (t = i[e]) ? true : t.joinSound
  }), l = L(i);
  if (null == i || null == l) return null;
  let {
    emojiId: a,
    emojiName: o
  } = l, d = null != a || null != o;
  return (0, n.jsxs)("div", {
    className: p.Io,
    children: [d ? (0, n.jsx)(u.A, {
      emojiId: a,
      emojiName: o,
      className: p.nW
    }) : (0, n.jsx)(r.HKD, {
      size: "md",
      color: "currentColor",
      className: p.nW
    }), (0, n.jsx)(r.Text, {
      className: p.dK,
      variant: "text-xs/medium",
      children: l.name
    })]
  })
}
let m = (0, Chunk419954.E2)(Chunk780964.X.ENTRANCE_SOUNDS_SETTING, {
  useSearchTerms: () => [b.intl.string(b.t.nzUc3B)],
  Component: function() {
    let {
      analyticsLocations: t
    } = (0, a.Ay)(), [e, i] = l.useState(C.XH), u = (0, E.mz)(e), T = L(u), I = (null == u ? true : u.type) === E.PP.GLOBAL, O = (0, s.bG)([S.A], () => S.A.hasFetchedAllSounds()) && null != u && null == T;
    l.useEffect(() => {
      O && (0, c.ND)({
        location: t
      })
    }, [O, t]), l.useEffect(() => {
      (0, A.E7)()
    }, []);
    let m = l.useCallback((t, e) => {
      let {
        inDropdown: i
      } = e;
      return null == t ? null : i ? (0, n.jsx)(D, {
        guildId: t.value
      }) : null
    }, []);
    return (0, n.jsxs)(r.nVY, {
      label: b.intl.string(b.t.nzUc3B),
      description: b.intl.format(b.t.u9RWmv, {
        helpdeskArticle: _.A.getArticleURL(N.MVz.SOUNDBOARD)
      }),
      children: [(0, n.jsx)(o.A, {
        guildId: e,
        className: p.Dt,
        globalOption: {
          label: b.intl.string(b.t["CpEUP/"]),
          value: C.XH
        },
        onChange: t => {
          i(null == t ? C.XH : t.id)
        },
        renderOptionSuffix: m,
        hideDivider: true
      }), (0, n.jsxs)(d.A, {
        title: b.intl.format(b.t.I2TsYN, {
          nitroWheelHook: () => (0, n.jsx)(r.tvc, {
            size: "md",
            color: "currentColor",
            className: p.ax
          })
        }),
        children: [(0, n.jsx)(g.A, {
          sound: T,
          isGlobal: I,
          onSelect: i => {
            null == i ? (0, c.Dv)(e, t) : (0, c.un)(e, i, t)
          }
        }), O && (0, n.jsx)(r.po8, {
          className: p.lm,
          messageType: r.YCn.WARNING,
          children: b.intl.string(b.t.WkPsFR)
        })]
      })]
    })
  }
})