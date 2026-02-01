/** Chunk was on 21738 **/
/** chunk id: 150574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk440703 = require("./440703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk736653 = require("./736653.js"),
  Chunk291661 = require("./291661.jsx"),
  Chunk607470 = require("./607470.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk590202 = require("./590202.js"),
  Chunk734736 = require("./734736.jsx"),
  Chunk247455 = require("./247455.jsx"),
  Chunk57718 = require("./57718.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk834600 = require("./834600.js");
let T = (0, Chunk64700.memo)(function(e) {
  var t, n, l, T, j, x;
  let {
    quest: P
  } = e, [w, L] = (0, i.useState)(false), [R, D] = (0, i.useState)(24), [M, k] = (0, i.useState)(false), U = (0, i.useRef)(null), G = (0, i.useRef)(null), V = (0, i.useRef)(null), B = (0, c.bG)([f.default], () => f.default.getCurrentUser()), {
    ref: H,
    height: F = 0
  } = (0, p.Ay)(), Y = (0, h.Ay)(), K = (0, b.S5)(null == (l = P.userStatus) ? true : l.claimedAt, {
    month: "numeric",
    day: "numeric"
  }), W = null != (t = null == (T = P.userStatus) ? true : T.claimedTier) ? t : 0, q = P.config.rewards[W], z = (null == q ? true : q.type) === o.l.FRACTIONAL_PREMIUM, Q = (null == q ? true : q.type) === o.l.COLLECTIBLE, X = (null == q ? true : q.type) === o.l.VIRTUAL_CURRENCY, Z = null == q || null == (x = q.collectibleProduct) || null == (j = x.items) ? true : j[0], J = (null == Z ? true : Z.type) === s.R.AVATAR_DECORATION ? Z : null;
  (0, p.i4)(U, e => {
    let {
      height: t
    } = e;
    if (!Q || null == t || null == G.current || null == U.current || null == V.current) return;
    let n = U.current.getBoundingClientRect(),
      r = G.current.getBoundingClientRect(),
      i = V.current.getBoundingClientRect();
    D((r.top - n.top - i.height) / 2)
  });
  let $ = (0, u.Mw)(Y),
    ee = (0, i.useMemo)(() => null != P.config.cosponsorMetadata, [P]),
    et = (0, i.useMemo)(() => (0, E.tW)(P, E.fY.REWARD), [P]),
    en = w ? F + 8 : 0,
    er = (0, O.fF)(_.uF.TROPHY_CASE_CARD),
    {
      content_position: ei,
      row_index: el
    } = er,
    ea = function(e, t) {
      if (null == e) return {};
      var n, r, i, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.getOwnPropertyNames(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
          return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(er, ["content_position", "row_index"]),
    es = () => {
      L(true), A.default.track(S.HAw.QUEST_HOVER, function(e) {
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
        quest_id: P.id
      }, ea))
    },
    eo = () => {
      L(false)
    },
    ec = e => {
      k(true), A.default.track(S.HAw.QUEST_ASSET_LOADING_FAILURE, {
        source: e,
        asset_id: e,
        quest_id: P.id
      })
    };
  return null == q || M ? null : (0, r.jsx)(d.vN3, {
    children: (0, r.jsxs)("div", {
      ref: U,
      tabIndex: 0,
      onFocus: es,
      onBlur: eo,
      onMouseEnter: es,
      onMouseLeave: eo,
      className: a()(N.kL, {
        [N.yo]: w
      }),
      children: [null != B && Q && null != J && (0, r.jsx)("div", {
        ref: V,
        className: N.FX,
        style: {
          top: R
        },
        children: (0, r.jsx)(g.A, {
          avatarDecorationOverride: J,
          user: B,
          guildId: null,
          animateOnHover: !w
        })
      }), z ? (0, r.jsx)(y.A, {
        className: N.Sl
      }) : X ? (0, r.jsx)(I.A, {
        className: N.Sl,
        isAnimated: w,
        questName: P.config.messages.questName
      }) : et.isAnimated ? (0, r.jsx)(m.A, {
        className: N.JU,
        autoPlay: false,
        children: (0, r.jsx)("source", {
          src: et.url,
          type: null != (n = et.mimetype) ? n : true,
          onError: () => ec(et.url)
        })
      }) : (0, r.jsx)("img", {
        className: N.Sl,
        src: et.url,
        alt: P.config.messages.questName,
        onError: () => ec(et.url)
      }), (0, r.jsx)("div", {
        className: a()(N.Lw, {
          [N.en]: $,
          [N.So]: !$
        })
      }), (0, r.jsx)("div", {
        ref: G,
        className: N.r$,
        style: {
          transform: "translateY(-".concat(en, "px)")
        },
        children: (0, r.jsx)(v.Ay, {
          logotypeClassName: a()(N.wm, {
            [N.A0]: ee
          }),
          quest: P,
          withGameTile: false
        })
      }), (0, r.jsxs)("div", {
        ref: H,
        className: N.zH,
        children: [(0, r.jsx)(d.Heading, {
          className: N.DD,
          variant: "heading-md/semibold",
          color: "always-white",
          children: C.intl.format(C.t.EAYZAr, {
            questName: P.config.messages.questName
          })
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: $ ? "text-muted" : "always-white",
          style: {
            opacity: $ ? 1 : .75
          },
          children: C.intl.format(C.t["kXVcV+"], {
            reward: q.name,
            claimedDate: K
          })
        })]
      })]
    })
  })
})