/** Chunk was on 28636 **/
/** chunk id: 273423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j,
  I: () => f
}), require("./321073.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk486020 = require("./486020.js"),
  Chunk240248 = require("./240248.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk420783 = require("./420783.js"),
  f = ((r = {})[r.SMALL = (0, Chunk240248.xI)(Chunk319060.A.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", r[r.LARGE = (0, Chunk240248.xI)(Chunk319060.A.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE", r);
let x = {
    [f.SMALL]: Chunk420783.Ps,
    [f.LARGE]: Chunk420783.XY
  },
  v = {
    [f.SMALL]: Chunk420783.Bx,
    [f.LARGE]: Chunk420783.J3
  };

function j(e) {
  var t, n, r;
  let {
    application: a,
    mutualGuilds: d,
    mutualGuildShownMax: g = 4,
    className: j,
    textVariant: A = "text-sm/normal",
    compact: y,
    guildIconSize: C = f.LARGE,
    guildsClassName: O,
    children: S
  } = e, I = (0, o.bG)([h.default], () => h.default.locale), E = new Intl.ListFormat(I), P = null != (t = null == (r = a.directory_entry) ? true : r.guild_count) ? t : 0, N = null != (n = null == d ? true : d.length) ? n : 0, T = Math.max(0, P - N), {
    shownMutualGuilds: R,
    hiddenMutualGuilds: L
  } = i.useMemo(() => {
    let e = [],
      t = [];
    return null == d || d.forEach(n => {
      e.length < g && null != n.icon ? e.push(n) : t.push(n)
    }), e.length === g && t.length > 0 && (t.push(e[g - 1]), e = e.slice(0, g - 1)), {
      shownMutualGuilds: e,
      hiddenMutualGuilds: t
    }
  }, [d, g]), D = L.length, w = function(e, t, n, r, l) {
    if (0 === t && 0 === e) return null;
    if (t > 0 && 0 === n) return _.intl.formatToPlainString(_.t.pnzE1t, {
      mutualGuildCount: t
    });
    let i = t > 0 ? _.t.YR8PSL : _.t.GQjq6c,
      a = new Intl.NumberFormat(r, {
        notation: l ? "compact" : "standard",
        compactDisplay: "short"
      });
    return _.intl.formatToPlainString(i, {
      guildCount: a.format(e),
      mutualGuildCount: t,
      nonMutualGuildCount: a.format(n)
    })
  }(P, N, T, I, y);
  return 0 === R.length && null == w ? null : (0, l.jsxs)(l.Fragment, {
    children: [S, (0, l.jsxs)("div", {
      className: s()(j, b.iE),
      children: [(0, l.jsx)("div", {
        className: s()(b.Pt, O),
        children: R.length > 0 ? (0, l.jsxs)(l.Fragment, {
          children: [R.map((e, t) => {
            let n = t === R.length - 1 && 0 === D,
              r = m.Ay.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: C,
                canAnimate: false
              }),
              a = (0, l.jsx)(c.m, {
                text: e.name,
                position: "top",
                children: (0, l.jsx)("img", {
                  className: s()(b.Kk, v[C]),
                  src: r,
                  alt: ""
                })
              });
            return n ? (0, l.jsx)(i.Fragment, {
              children: a
            }, e.id) : (0, l.jsx)(p.Ay, {
              className: b.SA,
              height: C,
              width: C,
              mask: p.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
              children: a
            }, e.id)
          }), D > 0 ? (0, l.jsx)(c.m, {
            text: _.intl.formatToPlainString(_.t.m6oRrA, {
              appNames: E.format(L.map(e => e.name))
            }),
            position: "top",
            children: (0, l.jsxs)("div", {
              className: s()(b.S_, x[C]),
              children: ["+", D]
            })
          }) : null]
        }) : (0, l.jsx)(u.RR9, {
          size: "custom",
          color: "currentColor",
          width: C,
          height: C,
          className: b.DE
        })
      }), null != w ? (0, l.jsx)(u.Text, {
        variant: A,
        color: "text-default",
        children: w
      }) : null]
    })]
  })
}