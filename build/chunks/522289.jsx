/** Chunk was on web.js **/
/** chunk id: 522289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.js"),
  Chunk223390 = require("./223390.js");

function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk565138.Z.Sizes.SMALLER;
  switch (module) {
    case Chunk565138.Z.Sizes.SMOL:
      return Chunk223390.size16;
    case Chunk565138.Z.Sizes.MINI:
      return Chunk223390.size20;
    case Chunk565138.Z.Sizes.SMALLER:
    default:
      return Chunk223390.size24
  }
}

function _() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk565138.Z.Sizes.SMALLER;
  switch (module) {
    case Chunk565138.Z.Sizes.SMOL:
    case Chunk565138.Z.Sizes.MINI:
      return "text-xxs/semibold";
    case Chunk565138.Z.Sizes.SMALLER:
    default:
      return "text-xs/medium"
  }
}

function p(e) {
  let {
    className: t,
    maxGuilds: n,
    guilds: i,
    onFocus: a,
    onClick: p,
    size: h = u.Z.Sizes.SMALLER,
    hideOverflowCount: m = false,
    disableGuildNameTooltip: g = false
  } = e, E = f(h);

  function b() {
    let e = i.length - n,
      t = e + 1,
      f = e > 0 && !m,
      b = Math.min(i.length, n) - 1,
      y = s()(i).take(n).map((e, t) => {
        let n = e.name,
          i = t === b && !f,
          a = o()(d.avatar, E, i && d.isLast);
        return g ? <div className={a}><u.Z guild={e} onClick={p} size={h} showTooltip={false} /></div> : <c.DY3 text={n} className={a}><u.Z guild={e} onClick={p} size={h} /></c.DY3>
      }).value();
    if (f) {
      let e = _(h);
      y[y.length - 1] = <l.zx className={o()(d.overflow, E)} onFocus={a} onClick={e => null == p ? true : p(e)} look={l.zx.Looks.BLANK} size={l.zx.Sizes.NONE}><c.Text variant={e}>{t > 99 ? ">99" : "+".concat(t)}</c.Text></l.zx>
    }
    return y
  }
  return i.length <= 0 ? null : <div className={o()(t, d.avatars)}>{b()}</div>
}