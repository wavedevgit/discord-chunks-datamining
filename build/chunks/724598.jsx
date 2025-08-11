/** Chunk was on 78431 **/
/** chunk id: 724598, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk357352 = require("./357352.js"),
  Chunk434404 = require("./434404.js"),
  Chunk626135 = require("./626135.js"),
  Chunk629481 = require("./629481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765214 = require("./765214.js");

function j(e) {
  let {
    pills: t
  } = e;
  return <div className={b.row}>{t.map(e => (0, n.jsx)("div", {
      className: b.pill,
      children: (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))}</div>
}

function g(e) {
  let {
    guildId: t,
    showCTA: r,
    responsive: i = true
  } = e, g = [
    [f.intl.string(f.t["73h51N"]), f.intl.string(f.t["gbjs//"])],
    [f.intl.string(f.t.mCoH0d), f.intl.string(f.t["l/BuSE"])],
    [f.intl.string(f.t.psQktr), f.intl.string(f.t.nMhIZW)],
    [f.intl.string(f.t["0ItLmJ"]), f.intl.string(f.t.yQHqsL)]
  ];
  return <div className={o()({
      [b.responsive]: i
    })}><div className={b.container}>{<div className={b.content}>{<div className={b.pillContainer}>{g.map((e, t) => (0, n.jsx)(j, {
            pills: e
          }, "pill-row-".concat(t)))}</div>}{<div className={b.ctaContent}>{<s.Text variant={"text-lg/medium"} color={"header-primary"}>{f.intl.string(f.t["67arYG"])}</s.Text>}{r && <s.gtL size={l.zx.Sizes.MEDIUM} className={b.getStartedButton} innerClassName={b.getStartedButtonContents} shineSize={s.gtL.ShineSizes.SMALL} onClick={() => {
              var e, r;
              u.default.track(p.rMx.GUILD_SHOP_PREVIEW_CLICK, (e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = n
                  })
                }
                return e
              }({}, (0, c.hH)(t)), r = r = {
                action_taken: C.mz.GET_STARTED_CLICK
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, n)
                }
                return r
              })(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }), e)), d.Z.open(t, p.pNK.GUILD_PRODUCTS)
            }}>{f.intl.string(f.t.oyzLpK)}{<s.ZSh size={"md"} color={"currentColor"} className={b.getStartedArrow} />}</s.gtL>}</div>}</div>}{<div className={b.muralImageContainer}>{<img src={(0, a.b)("server_products/storefront/preview-mural.png")} alt={""} className={b.muralImage} />}{<img src={(0, a.b)("server_products/storefront/preview-mural-reduced.png")} alt={""} className={b.muralImageReducedWidth} />}</div>}</div></div>
}