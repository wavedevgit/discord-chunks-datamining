/** Chunk was on 36878 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk134439 = require("./134439.js");

function m(e) {
  let {
    icon: t,
    onClick: n
  } = e;
  return <s.zx look={s.zx.Looks.BLANK} size={s.zx.Sizes.ICON} className={f.contentHeaderButton} innerClassName={f.iconButtonInner} onClick={n}><t size={"sm"} /></s.zx>
}

function x(e) {
  let {
    title: t,
    onClose: n,
    setShowNavigationMobile: o
  } = e;
  return <div className={f.contentHeader}>{<div className={f.contentHeaderLeft}>{a.tq && <m icon={c.yFM} onClick={() => o(true)} />}{<c.X6q variant={"heading-md/normal"} color={"header-secondary"}>{t}</c.X6q>}</div>}{!a.tq && <m icon={c.Uz9} onClick={n} />}</div>
}
let g = Chunk73800.memo(function(e) {
  let {
    onClose: t,
    setShowNavigationMobile: n,
    setting: o
  } = e, l = o.useTitle(), {
    showNavigationMobile: s
  } = (0, u.t)();
  return <div className={r()(f.content, {
      [f.mobile]: a.tq,
      [f.mobileNavigationOpen]: s
    })}>{<x title={l} onClose={t} setShowNavigationMobile={n} />}{<c.w0Z className={f.contentScroller}><d.Z node={o} /></c.w0Z>}</div>
})