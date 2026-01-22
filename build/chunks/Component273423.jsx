/** Chunk was on 28636 **/
/** chunk id: 273423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  I: () => x
}), require("./321073.js");
var l, Chunk627968 = require("./627968.js"),
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
  x = ((l = {})[l.SMALL = (0, Chunk240248.xI)(Chunk319060.A.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", l[l.LARGE = (0, Chunk240248.xI)(Chunk319060.A.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE", l);
let v = {
    [x.SMALL]: Chunk420783.Ps,
    [x.LARGE]: Chunk420783.XY
  },
  j = {
    [x.SMALL]: Chunk420783.Bx,
    [x.LARGE]: Chunk420783.J3
  };

function A(e) {
  var t, n, l;
  let {
    application: i,
    mutualGuilds: d,
    mutualGuildShownMax: b = 4,
    className: A,
    textVariant: _ = "text-sm/normal",
    compact: y,
    guildIconSize: O = x.LARGE,
    guildsClassName: S,
    children: C
  } = e, E = (0, c.bG)([h.default], () => h.default.locale), I = new Intl.ListFormat(E), P = null != (t = null == (l = i.directory_entry) ? true : l.guild_count) ? t : 0, N = null != (n = null == d ? true : d.length) ? n : 0, R = Math.max(0, P - N), {
    shownMutualGuilds: T,
    hiddenMutualGuilds: L
  } = r.useMemo(() => {
    let e = [],
      t = [];
    return null == d || d.forEach(n => {
      e.length < b && null != n.icon ? e.push(n) : t.push(n)
    }), e.length === b && t.length > 0 && (t.push(e[b - 1]), e = e.slice(0, b - 1)), {
      shownMutualGuilds: e,
      hiddenMutualGuilds: t
    }
  }, [d, b]), D = L.length, w = function(e, t, n, l, a) {
    if (0 === t && 0 === e) return null;
    if (t > 0 && 0 === n) return f.intl.formatToPlainString(f.t.pnzE1t, {
      mutualGuildCount: t
    });
    let r = t > 0 ? f.t.YR8PSL : f.t.GQjq6c,
      i = new Intl.NumberFormat(l, {
        notation: a ? "compact" : "standard",
        compactDisplay: "short"
      });
    return f.intl.formatToPlainString(r, {
      guildCount: i.format(e),
      mutualGuildCount: t,
      nonMutualGuildCount: i.format(n)
    })
  }(P, N, R, E, y);
  return 0 === T.length && null == w ? null : (0, a.jsxs)(a.Fragment, {
    children: [C, (0, a.jsxs)("div", {
      className: s()(A, g.iE),
      children: [(0, a.jsx)("div", {
        className: s()(g.Pt, S),
        children: T.length > 0 ? (0, a.jsxs)(a.Fragment, {
          children: [T.map((e, t) => {
            let n = t === T.length - 1 && 0 === D,
              l = m.Ay.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: O,
                canAnimate: false
              }),
              i = (0, a.jsx)(o.m, {
                text: e.name,
                position: "top",
                children: (0, a.jsx)("img", {
                  className: s()(g.Kk, j[O]),
                  src: l,
                  alt: ""
                })
              });
            return n ? (0, a.jsx)(r.Fragment, {
              children: i
            }, e.id) : (0, a.jsx)(p.Ay, {
              className: g.SA,
              height: O,
              width: O,
              mask: p.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
              children: i
            }, e.id)
          }), D > 0 ? (0, a.jsx)(o.m, {
            text: f.intl.formatToPlainString(f.t.m6oRrA, {
              appNames: I.format(L.map(e => e.name))
            }),
            position: "top",
            children: (0, a.jsxs)("div", {
              className: s()(g.S_, v[O]),
              children: ["+", D]
            })
          }) : null]
        }) : (0, a.jsx)(u.RR9, {
          size: "custom",
          color: "currentColor",
          width: O,
          height: O,
          className: g.DE
        })
      }), null != w ? (0, a.jsx)(u.Text, {
        variant: _,
        color: "text-default",
        children: w
      }) : null]
    })]
  })
}