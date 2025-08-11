/** Chunk was on web.js **/
/** chunk id: 22267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570908 = require("./570908.js"),
  Chunk204418 = require("./204418.js"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.js"),
  Chunk172751 = require("./172751.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.js"),
  Chunk654904 = require("./654904.js"),
  Chunk210887 = require("./210887.js"),
  Chunk271383 = require("./271383.js"),
  Chunk158776 = require("./158776.js"),
  Chunk579407 = require("./579407.js"),
  Chunk388032 = require("./388032.js"),
  Chunk538566 = require("./538566.js"),
  Chunk460400 = require("./460400.js"),
  Chunk943549 = require("./943549.js");
let N = {
    xlarge: Chunk481060.EFr.SIZE_48,
    large: Chunk481060.EFr.SIZE_40,
    default: Chunk481060.EFr.SIZE_32
  },
  C = e => {
    let {
      user: t,
      guildId: n,
      nameplate: o,
      nameplateData: C,
      className: R,
      innerClassName: P,
      isHighlighted: w,
      showStatus: D,
      showPlaceholderUser: L,
      pendingGlobalName: x,
      nameplatePreviewSize: M = "default",
      isPurchased: k = false
    } = e, j = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)), U = null != o ? (0, v.EU)(o) : C, G = (0, s.e7)([O.Z], () => null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE), B = j ? "#706F74" : "#aaaab2", Z = i.useRef(null), F = (0, s.e7)([y.ZP], () => null != n && null != t ? y.ZP.getMember(n, t.id) : null), V = null != t ? (0, E.Ly)({
      pendingNickname: true,
      pendingGlobalName: x,
      user: t,
      guildMember: F
    }) : true, H = N[M], Y = (0, f.Y)({
      location: "NameplatePreview"
    });
    return <div role={"img"} aria-label={I.intl.string(I.t.SZeUdX)} style={{
        color: j ? "white" : "black",
        width: "100%"
      }}><c.Rny className={a()(R, T.nameplatePreview, {
          [T.nameplatePurchased]: k && !w,
          [T.large]: "large" === M,
          [T.xlarge]: "xlarge" === M
        })}>{null != U && <g.Z nameplate={U} hovered={w} placement={m.i.PREVIEW} content={L ? true : Z} />}{<div className={T.overlayContainer}>{null != t ? <div className={a()(T.avatarContainer, !L && T.avatarVisible)}><u.Z ref={Z} avatar={(0, r.jsx)(d.Z, {
                user: t,
                guildId: n,
                avatarSize: H,
                status: D ? G : true,
                "aria-hidden": true
              })} decorators={(0, r.jsx)(h.ZP, {
                userId: t.id,
                contextGuildId: n,
                className: T.tagChiplet
              })} name={(0, r.jsx)(p.Z, {
                userName: V,
                displayNameStyles: t.displayNameStyles,
                effectDisplayType: _.F.ANIMATED
              })} innerClassName={P} withDisplayNameStyles={Y && null != t.displayNameStyles} /></div> : null}{<div className={a()(T.avatarContainer, L && T.avatarVisible)}>{<c.qEK src={j ? S : A} size={H} aria-hidden={true} status={c.Skl.ONLINE} statusColor={B} className={T.avatar} />}{<div className={T.placeholderUsername} />}</div>}</div>}</c.Rny></div>
  }