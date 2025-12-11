/** Chunk was on 92504 **/
/** chunk id: 194594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j,
  x: () => x
}), require("./539854.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk768581 = require("./768581.js"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk229059 = require("./229059.js"),
  x = ((a = {})[a.SMALL = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", a[a.LARGE = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE", a);
let v = {
    [x.SMALL]: Chunk229059.moreGuildsSmall,
    [x.LARGE]: Chunk229059.moreGuildsLarge
  },
  C = {
    [x.SMALL]: Chunk229059.iconSmall,
    [x.LARGE]: Chunk229059.iconLarge
  };

function j(e) {
  var t, n, a;
  let {
    application: l,
    mutualGuilds: d,
    mutualGuildShownMax: f = 4,
    className: j,
    textVariant: _ = "text-sm/normal",
    compact: y,
    guildIconSize: I = x.LARGE,
    guildsClassName: S,
    children: P
  } = e, O = (0, o.e7)([m.default], () => m.default.locale), E = new Intl.ListFormat(O), N = null != (n = null == (t = l.directory_entry) ? true : t.guild_count) ? n : 0, T = null != (a = null == d ? true : d.length) ? a : 0, A = Math.max(0, N - T), {
    shownMutualGuilds: L,
    hiddenMutualGuilds: R
  } = i.useMemo(() => {
    let e = [],
      t = [];
    return null == d || d.forEach(n => {
      e.length < f && null != n.icon ? e.push(n) : t.push(n)
    }), e.length === f && t.length > 0 && (t.push(e[f - 1]), e = e.slice(0, f - 1)), {
      shownMutualGuilds: e,
      hiddenMutualGuilds: t
    }
  }, [d, f]), Z = R.length, w = function(e, t, n, a, r) {
    if (0 === t && 0 === e) return null;
    if (t > 0 && 0 === n) return g.intl.formatToPlainString(g.t.pnzE1t, {
      mutualGuildCount: t
    });
    let i = t > 0 ? g.t.YR8PSL : g.t.GQjq6c,
      l = new Intl.NumberFormat(a, {
        notation: r ? "compact" : "standard",
        compactDisplay: "short"
      });
    return g.intl.formatToPlainString(i, {
      guildCount: l.format(e),
      mutualGuildCount: t,
      nonMutualGuildCount: l.format(n)
    })
  }(N, T, A, O, y);
  return 0 === L.length && null == w ? null : (0, r.jsxs)(r.Fragment, {
    children: [P, (0, r.jsxs)("div", {
      className: s()(j, b.wrapper),
      children: [(0, r.jsx)("div", {
        className: s()(b.icons, S),
        children: L.length > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [L.map((e, t) => {
            let n = t === L.length - 1 && 0 === Z,
              a = h.ZP.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: I,
                canAnimate: false
              }),
              l = (0, r.jsx)(c.u, {
                text: e.name,
                position: "top",
                children: (0, r.jsx)("img", {
                  className: s()(b.icon, C[I]),
                  src: a,
                  alt: ""
                })
              });
            return n ? (0, r.jsx)(i.Fragment, {
              children: l
            }, e.id) : (0, r.jsx)(p.ZP, {
              className: b.iconMask,
              height: I,
              width: I,
              mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
              children: l
            }, e.id)
          }), Z > 0 ? (0, r.jsx)(c.u, {
            text: g.intl.formatToPlainString(g.t.m6oRrA, {
              appNames: E.format(R.map(e => e.name))
            }),
            position: "top",
            children: (0, r.jsxs)("div", {
              className: s()(b.moreGuilds, v[I]),
              children: ["+", Z]
            })
          }) : null]
        }) : (0, r.jsx)(u.QTo, {
          size: "custom",
          color: "currentColor",
          width: I,
          height: I,
          className: b.defaultIcon
        })
      }), null != w ? (0, r.jsx)(u.Text, {
        variant: _,
        color: "text-default",
        children: w
      }) : null]
    })]
  })
}