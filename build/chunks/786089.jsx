/** Chunk was on 1272 **/
/** chunk id: 786089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk887003 = require("./887003.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk410030 = require("./410030.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk352084 = require("./352084.jsx"),
  Chunk125011 = require("./125011.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk45017 = require("./45017.js");
let P = (0, Chunk73800.memo)(function(e) {
  var t, n, l, P, j, x;
  let {
    quest: A
  } = e, [Z, w] = (0, i.useState)(false), [L, R] = (0, i.useState)(24), [D, k] = (0, i.useState)(false), M = (0, i.useRef)(null), U = (0, i.useRef)(null), G = (0, i.useRef)(null), V = (0, c.e7)([m.default], () => m.default.getCurrentUser()), {
    ref: H,
    height: B = 0
  } = (0, p.ZP)(), F = (0, f.ZP)(), z = (0, O.B6)(null == (t = A.userStatus) ? true : t.claimedAt, {
    month: "numeric",
    day: "numeric"
  }), W = null != (j = null == (n = A.userStatus) ? true : n.claimedTier) ? j : 0, Y = A.config.rewards[W], K = (null == Y ? true : Y.type) === s.w.FRACTIONAL_PREMIUM, q = (null == Y ? true : Y.type) === s.w.COLLECTIBLE, X = (null == Y ? true : Y.type) === s.w.VIRTUAL_CURRENCY, Q = null == Y || null == (P = Y.collectibleProduct) || null == (l = P.items) ? true : l[0], J = (null == Q ? true : Q.type) === o.Z.AVATAR_DECORATION ? Q : null;
  (0, p.PM)(M, e => {
    let {
      height: t
    } = e;
    if (!q || null == t || null == U.current || null == M.current || null == G.current) return;
    let n = M.current.getBoundingClientRect(),
      r = U.current.getBoundingClientRect(),
      i = G.current.getBoundingClientRect();
    R((r.top - n.top - i.height) / 2)
  });
  let $ = (0, u.wj)(F),
    ee = (0, i.useMemo)(() => null != A.config.cosponsorMetadata, [A]),
    et = (0, i.useMemo)(() => (0, y.fh)(A, y.eC.REWARD), [A]),
    en = Z ? B + 8 : 0,
    er = (0, _.mH)(E.jn.TROPHY_CASE_CARD),
    {
      content_position: ei,
      row_index: el
    } = er,
    ea = function(e, t) {
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
    }(er, ["content_position", "row_index"]),
    eo = () => {
      w(true), b.default.track(S.rMx.QUEST_HOVER, function(e) {
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
        quest_id: A.id
      }, ea))
    },
    es = () => w(false),
    ec = e => {
      k(true), b.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
        source: e,
        asset_id: e,
        quest_id: A.id
      })
    };
  return null == Y || D ? null : <d.tEY><div ref={M} tabIndex={0} onFocus={eo} onBlur={es} onMouseEnter={eo} onMouseLeave={es} className={a()(T.container, {
        [T.hovered]: Z
      })}>{null != V && q && null != J && <div ref={G} className={T.decoWrapper} style={{
          top: L
        }}><h.Z avatarDecorationOverride={J} user={V} guildId={null} /></div>}{K ? <v.Z className={T.image} /> : X ? <I.Z className={T.image} /> : et.isAnimated ? <g.Z className={T.assetBlurred} autoPlay={false}><source src={et.url} type={null != (x = et.mimetype) ? x : true} onError={() => ec(et.url)} /></g.Z> : <img className={T.image} src={et.url} alt={A.config.messages.questName} onError={() => ec(et.url)} />}{<div className={a()(T.overlay, {
          [T.darkThemeGradient]: $,
          [T.lightThemeGradient]: !$
        })} />}{<div ref={U} className={T.logoContainer} style={{
          transform: "translateY(-".concat(en, "px)")
        }}><C.ZP logotypeClassName={a()(T.logo, {
            [T.logoWithCosponsor]: ee
          })} quest={A} withGameTile={false} /></div>}{<div ref={H} className={T.details}>{<d.X6q className={T.title} variant={"heading-md/semibold"} color={"always-white"}>{N.intl.format(N.t.EAYZAg, {
            questName: A.config.messages.questName
          })}</d.X6q>}{<d.Text variant={"text-sm/medium"} color={$ ? "text-muted" : "always-white"} style={{
            opacity: $ ? 1 : .75
          }}>{N.intl.format(N.t.kXVcV1, {
            reward: Y.name,
            claimedDate: z
          })}</d.Text>}</div>}</div></d.tEY>
})