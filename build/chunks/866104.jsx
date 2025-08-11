/** Chunk was on web.js **/
/** chunk id: 866104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => R,
  Z: () => C
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk357352 = require("./357352.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk353254 = require("./353254.js"),
  Chunk695346 = require("./695346.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk506071 = require("./506071.js"),
  Chunk696014 = require("./696014.jsx"),
  Chunk847033 = require("./847033.jsx"),
  Chunk544978 = require("./544978.js"),
  Chunk893182 = require("./893182.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk414521 = require("./414521.js");

function A(e) {
  let {
    onClick: t
  } = e;
  return <l.P3F onClick={t} className={S.showMoreButton}>{<l.Text variant={"text-sm/medium"} color={"header-primary"}>{T.intl.string(T.t.J4cw1t)}</l.Text>}{<l.LZC size={4} horizontal={true} />}{<g.Z direction={g.Z.Directions.RIGHT} className={S.showMoreArrow} />}</l.P3F>
}

function N(e) {
  return (0, s.cj)([h.ZP, m.default], () => {
    var t, n;
    let r = m.default.getCurrentUser();
    a()(null != r, "user cannot be null");
    let i = h.ZP.getMember(e, r.id);
    return {
      nickname: null != (t = null == i ? true : i.nick) ? t : E.ZP.getName(r),
      nickcolor: null != (n = null == i ? true : i.colorString) ? n : true
    }
  }, [e])
}

function C(e) {
  let {
    coverImageAsset: t,
    isPreview: n = false
  } = e, i = p.QK.useSetting(), o = (0, b.n)() && i, [a, s] = (0, _.Z)(t, o), l = o ? <d.Z autoPlay={true} loop={true} className={S.coverImage} width={655} poster={(0, u.b)("server_products/storefront/default-header.png")} src={(0, u.b)("server_products/storefront/default-header.mov")} /> : <img src={(0, u.b)("server_products/storefront/default-header.png")} alt={""} className={S.coverImage} />;
  return <div ref={a} className={S.coverImageContainer}>{null == s || n ? l : (0, r.jsx)("img", {
      src: s,
      alt: "",
      className: S.coverImage
    })}</div>
}

function R(e) {
  var t, n;
  let {
    guild: o,
    subscriptionsSettings: a
  } = e, s = o.id, {
    nickname: d,
    nickcolor: _
  } = N(s), {
    isTruncated: p,
    ExpandableTextContainer: h
  } = (0, y.s)(), m = () => (0, I.Z)({
    guildId: s
  }), g = (null != (n = null == a || null == (t = a.description) ? true : t.trim().length) ? n : 0) > 0, [E, b] = i.useState(1), R = (0, c.Z)("(max-width: 1439px)"), {
    selectedTab: P,
    isPhantomPreview: w
  } = (0, O.m)(), D = P === v.y.GUILD_PRODUCTS_PREVIEW ? T.intl.string(T.t["LvXy/P"]) : T.intl.string(T.t.XyqKh4), L = e => {
    null != e && e.clientHeight > 30 && b(2)
  };

  function x(e, t) {
    return <span style={{
        color: _
      }}>{e}</span>
  }
  let M = g ? <r.Fragment>{<h lineClamp={R || 2 === E ? 2 : 3}><l.Text variant={"text-sm/normal"} color={"text-default"}>{null == a ? true : a.description}</l.Text></h>}{p && <r.Fragment>{<l.LZC size={4} />}{<A onClick={m} />}</r.Fragment>}</r.Fragment> : <l.Text variant={"text-sm/normal"} color={"text-default"}>{w ? D : T.intl.string(T.t["NY/FIS"])}</l.Text>;
  return <div className={S.container}>{<div className={S.infoContainer}>{<div><f.Z guild={o} size={f.Z.Sizes.LARGER} iconSrc={null == o.icon || w ? (0, u.b)("server_products/storefront/default-guild-icon.jpg") : true} /></div>}{<l.LZC size={16} horizontal={true} />}{<div>{<div ref={L}><l.X6q variant={"heading-xl/semibold"} color={"header-primary"} lineClamp={2}>{w ? T.intl.string(T.t.rtgp7u) : T.intl.formatToPlainString(T.t.NZeik5, {
              guildName: o.name
            })}</l.X6q></div>}{<l.LZC size={8} />}{<l.Text variant={"text-md/normal"} color={"text-default"}>{T.intl.format(T.t["7JwrlJ"], {
            username: d,
            usernameHook: x
          })}</l.Text>}{<l.LZC size={9} />}{M}</div>}</div>}{<C coverImageAsset={null == a ? true : a.cover_image_asset} isPreview={w} />}</div>
}