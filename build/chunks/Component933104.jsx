/** Chunk was on 30437 **/
/** chunk id: 933104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $h: () => A,
  En: () => M,
  cO: () => D,
  dJ: () => L,
  jG: () => w,
  yI: () => R
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk494497 = require("./494497.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk326660 = require("./326660.js"),
  Chunk639777 = require("./639777.js"),
  Chunk441536 = require("./441536.js"),
  Chunk795338 = require("./795338.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk269794 = require("./269794.js"),
  Chunk459196 = require("./459196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk428197 = require("./428197.js"),
  Chunk611087 = require("./611087.js"),
  Chunk928381 = require("./928381.js"),
  Chunk283902 = require("./283902.js"),
  Chunk225375 = require("./225375.js");

function w(e) {
  let {
    guildId: t,
    powerup: n,
    markAsDismissed: i
  } = e;
  return (0, r.jsx)(k, {
    asset: (0, r.jsx)(_.g, {
      className: I.image
    }),
    header: S.intl.formatToPlainString(E.default["Zg/m9K"], {
      perkName: n.title
    }),
    content: S.intl.formatToPlainString(E.default["1EGXSK"], {
      perkName: n.title
    }),
    buttonCTA: S.intl.string(S.t.RzWDqY),
    onClick: () => (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
    markAsDismissed: i
  })
}

function A(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e, i = (0, m.Z)(t);
  return (0, r.jsx)(k, {
    asset: (0, r.jsx)("img", {
      alt: "",
      src: N.Z,
      className: l()(I.image, I.newPerksImage)
    }),
    header: S.intl.string(E.default.QpQBPQ),
    content: i ? S.intl.string(E.default["6hn0xF"]) : S.intl.string(E.default.RDuvXp),
    buttonCTA: S.intl.string(S.t.RzWDqY),
    onClick: () => i ? (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERKS) : (0, d.f)({
      guildId: t,
      location: {
        section: v.jXE.GUILD_POWERUPS_NEW_PERKS_COACHMARK
      }
    }),
    markAsDismissed: n,
    caretPosition: i ? f.DF.LEFT_TOP : f.DF.TOP_CENTER
  })
}

function R(e) {
  let {
    guildId: t,
    powerups: n,
    markAsDismissed: i
  } = e, l = (0, s.e7)([h.Z], () => {
    var e;
    return null == (e = h.Z.getGuild(t)) ? true : e.name
  }), {
    onActivate: o
  } = (0, O.ZP)(t, n[0]);
  if (0 === n.length) return;
  let a = n.length >= 3 ? S.intl.formatToPlainString(E.default["6Sv+3M"], {
      perk: n[0].title,
      perk2: n[1].title,
      perk3: n[2].title
    }) : 2 === n.length ? S.intl.formatToPlainString(E.default.wcQOqC, {
      perks: "".concat(n[0].title, " & ").concat(n[1].title)
    }) : S.intl.formatToPlainString(E.default.ZF8NT6, {
      perk: n[0].title
    }),
    c = 1 === n.length;
  return (0, r.jsx)(k, {
    asset: 1 === n.length ? (0, r.jsx)(_.m, {
      className: I.image,
      powerup: n[0]
    }) : (0, r.jsx)(_.g, {
      className: I.image
    }),
    header: S.intl.formatToPlainString(E.default.LmpChE, {
      guildName: l
    }),
    content: a,
    buttonCTA: c ? S.intl.string(E.default.gSxlHf) : S.intl.string(S.t.RzWDqY),
    onClick: e => c ? o(e) : (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS),
    markAsDismissed: i
  })
}

function D(e) {
  let {
    guildId: t,
    powerups: n,
    markAsDismissed: i
  } = e, l = n.find(e => e.skuId === o.A$);
  if (null != l) return (0, r.jsx)(k, {
    header: S.intl.string(E.default.Ygpx4Q),
    content: S.intl.string(E.default.mmNkUA),
    asset: (0, r.jsx)("img", {
      alt: "",
      src: T.Z,
      className: I.image
    }),
    onClick: () => (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, l.skuId),
    markAsDismissed: i,
    buttonCTA: S.intl.string(S.t.RzWDqY)
  });
  let a = n.find(e => y.NL.has(e.skuId));
  return null != a ? (0, r.jsx)(k, {
    header: S.intl.string(E.default["kA2c+n"]),
    content: S.intl.string(E.default.TUilLj),
    asset: (0, r.jsx)("img", {
      alt: "",
      src: Z.Z,
      className: I.image
    }),
    onClick: () => (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId),
    markAsDismissed: i,
    buttonCTA: S.intl.string(S.t.RzWDqY)
  }) : null
}

function L(e) {
  let {
    guildId: t,
    type: n,
    markAsDismissed: i
  } = e, o = (0, O.Td)(t, true);
  return (0, r.jsx)(k, {
    asset: (0, r.jsx)("img", {
      alt: "",
      src: P.Z,
      className: l()(I.image, I.newPerksImage)
    }),
    header: S.intl.string(n === g.J.GAME_SERVER_HOSTING_AVAILABLE ? C.default.wXLChx : C.default["8z8RpY"]),
    content: n === g.J.GAME_SERVER_HOSTING_AVAILABLE ? S.intl.string(C.default.lZ6m7Q) : S.intl.format(C.default["IQ1E+d"], {
      boostCount: o
    }),
    buttonCTA: S.intl.string(S.t.RzWDqY),
    onClick: () => (0, b.Z)(t, u.Z.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
    markAsDismissed: i
  })
}

function M(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsx)(k, {
    asset: (0, r.jsx)("img", {
      alt: "",
      src: P.Z,
      className: l()(I.image, I.newPerksImage)
    }),
    header: S.intl.string(C.default["eX64+z"]),
    content: S.intl.string(C.default.NpgfEB),
    buttonCTA: S.intl.string(S.t.RzWDqY),
    onClick: () => (0, p.uL)(v.Z5c.CHANNEL(t, j.oC.GAME_SERVERS)),
    markAsDismissed: n
  })
}

function k(e) {
  var {
    asset: t,
    header: n,
    content: i,
    caretPosition: o,
    markAsDismissed: s
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["asset", "header", "content", "caretPosition", "markAsDismissed"]);
  let d = null != o ? o : f.DF.LEFT_TOP,
    p = d === f.DF.TOP_CENTER || d === f.DF.LEFT_TOP ? I[d] : "";
  return (0, r.jsx)(f.ZP, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    "data-migration-pending": true,
    asset: (0, r.jsxs)("div", {
      className: I.imageContainer,
      children: [t, (0, r.jsx)(c.olH, {
        "data-migration-pending": true,
        className: I.close,
        onClick: () => null == s ? true : s(x.L.USER_DISMISS)
      })]
    }),
    header: (0, r.jsx)(a.xvT, {
      variant: "text-md/semibold",
      children: n
    }),
    content: (0, r.jsx)(a.xvT, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: i
    }),
    className: l()(I.container, p),
    headerClassName: I.header,
    contentClassName: I.header,
    caretPosition: d,
    markAsDismissed: s
  }, u))
}