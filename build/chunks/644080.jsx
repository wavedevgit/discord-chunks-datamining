/** Chunk was on 12009 **/
/** chunk id: 644080, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk523751 = require("./523751.jsx"),
  Chunk637853 = require("./637853.js"),
  Chunk434404 = require("./434404.js"),
  Chunk159300 = require("./159300.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk18314 = require("./18314.js"),
  Chunk63190 = require("./63190.js"),
  Chunk102219 = require("./102219.js");
let _ = e => {
  let n = r.useMemo(() => null == e ? null : p.ZP.getGuildHomeHeaderURL({
    id: e.id,
    homeHeader: e.homeHeader
  }), [e]);
  return {
    homeHeaderImage: n,
    isHomeHeaderImageSet: null != n,
    homeHeaderScroll: 200 * (null != n)
  }
};

function Z(e) {
  let {
    guild: n
  } = e, {
    variant: t,
    icon: r,
    text: a
  } = n.features.has(x.oNc.BANNER) ? {
    variant: "overlay-secondary",
    icon: c.FmF,
    text: b.intl.string(b.t.b0y3DA)
  } : {
    variant: "expressive",
    icon: c.$Eu,
    text: b.intl.string(b.t["+7XY39"])
  };
  return <div className={j.editButtonContainer}><c.zxk variant={t} icon={r} text={a} onClick={() => {
        h.Z.open(n.id, x.pNK.ONBOARDING, true, x.KsC.SERVER_GUIDE)
      }} /></div>
}
let I = Chunk73800.memo(function(e) {
  let {
    guild: n,
    titleClassName: r
  } = e, {
    homeHeaderImage: a,
    isHomeHeaderImageSet: h
  } = _(n), p = (0, m.b$)(n.id), I = (0, s.e7)([g.Z], () => (0, f.b)(g.Z, n)), y = (0, o.ZP)();
  return <div className={j.header}>{<div className={j.headerArtWrapper}>{<div className={i()(j.headerArt, {
          [j.headerArtPlaceholder]: !h
        })} style={{
          backgroundImage: "url(".concat(h ? a : "dark" === y ? C : v, ")")
        }} />}{p && <Z guild={n} />}</div>}{<div className={j.titleWrapper}><div className={r}>{<d.Z className={j.headerIcon} guild={n} size={d.Z.Sizes.XLARGE} active={true} />}{<c.y5t><div className={j.headerName}>{<c.X6q className={j.headerName} variant={"heading-xxl/bold"}>{n.name}</c.X6q>}{<u.Z size={24} guild={n} tooltipPosition={"bottom"} tooltipColor={c.ua7.Colors.PRIMARY} />}{I && <div data-button-hoisted-classname-wrapper={true} className={j.inviteButton}><c.zxk variant={"secondary"} text={b.intl.string(b.t.VINpSE)} onClick={() => (0, c.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([t.e("7654"), t.e("17439")]).then(t.bind(t, 560114));
                  return t => {
                    var r, a;
                    return (0, l.jsx)(e, (r = function(e) {
                      for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                          l = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), l.forEach(function(n) {
                          var l;
                          l = t[n], n in e ? Object.defineProperty(e, n, {
                            value: l,
                            enumerable: true,
                            configurable: true,
                            writable: true
                          }) : e[n] = l
                        })
                      }
                      return e
                    }({}, t), a = a = {
                      guild: n,
                      source: x.t4x.GUILD_HOME
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, l)
                      }
                      return t
                    })(Object(a)).forEach(function(e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    }), r))
                  }
                })} /></div>}</div></c.y5t>}</div></div>}</div>
})