/** Chunk was on 4670 **/
/** chunk id: 591203, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  L: () => L
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

function m(e) {
  return (0, s.bG)([A.A], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: i
    } = e;
    return A.A.getSound(t === N.XH ? N.mV : t, i)
  })
}

function f(e) {
  let {
    guildId: t
  } = e, i = (0, s.bG)([O.A], () => {
    var e, i, n;
    return null == (n = O.A.settings.guilds) || null == (i = n.guilds) || null == (e = i[t]) ? true : e.joinSound
  }), l = m(i);
  if (null == i || null == l) return null;
  let {
    emojiId: u,
    emojiName: o
  } = l, d = null != u || null != o;
  return (0, n.jsxs)("div", {
    className: p.Io,
    children: [d ? (0, n.jsx)(a.A, {
      emojiId: u,
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
let L = (0, Chunk419954.E2)(Chunk780964.X.ENTRANCE_SOUNDS_SETTING, {
  useSearchTerms: () => [b.intl.string(b.t.nzUc3B)],
  Component: function() {
    let {
      analyticsLocations: e
    } = (0, u.Ay)(), [t, i] = l.useState(N.XH), a = (0, _.mz)(t), T = m(a), I = (null == a ? true : a.type) === _.PP.GLOBAL, O = (0, s.bG)([A.A], () => A.A.hasFetchedAllSounds()) && null != a && null == T;
    l.useEffect(() => {
      O && (0, S.ND)({
        location: e
      })
    }, [O, e]), l.useEffect(() => {
      (0, c.E7)()
    }, []);
    let L = l.useCallback((e, t) => {
      let {
        inDropdown: i
      } = t;
      return null == e ? null : i ? (0, n.jsx)(f, {
        guildId: e.value
      }) : null
    }, []);
    return (0, n.jsxs)(r.nVY, {
      label: b.intl.string(b.t.nzUc3B),
      description: b.intl.format(b.t.u9RWmv, {
        helpdeskArticle: g.A.getArticleURL(C.MVz.SOUNDBOARD)
      }),
      children: [(0, n.jsx)(o.A, {
        guildId: t,
        className: p.Dt,
        globalOption: {
          label: b.intl.string(b.t["CpEUP/"]),
          value: N.XH
        },
        onChange: e => {
          i(null == e ? N.XH : e.id)
        },
        renderOptionSuffix: L,
        hideDivider: true
      }), (0, n.jsxs)(d.A, {
        title: b.intl.format(b.t.I2TsYN, {
          nitroWheelHook: () => (0, n.jsx)(r.tvc, {
            size: "md",
            color: "currentColor",
            className: p.ax
          })
        }),
        children: [(0, n.jsx)(E.A, {
          sound: T,
          isGlobal: I,
          onSelect: i => {
            null == i ? (0, S.Dv)(t, e) : (0, S.un)(t, i, e)
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