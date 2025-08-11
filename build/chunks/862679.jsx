/** Chunk was on web.js **/
/** chunk id: 862679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk423163 = require("./423163.js");
let f = function(e) {
  let {
    message: t,
    subtitle: n,
    countdown: f,
    buttonText: _,
    buttonColor: p,
    buttonSubmitting: h,
    onButtonClick: m,
    imageSrc: g,
    animationSrc: E,
    secondaryButtonText: b,
    onSecondaryButtonClick: y,
    children: O,
    useReducedMotion: v = false
  } = e, I = (0, a.e7)([u.ZP], () => u.ZP.getState().isMembersOpen);
  if (o.tq && I) return null;
  if (null == t) return <r.Fragment>{i.Children.only(O)}</r.Fragment>;
  let T = null;
  return null != g ? T = <img alt={""} src={g} className={d.image} /> : null != E && (T = <l.Fmz importData={E} shouldAnimate={!v} className={d.animation} />), <div className={d.wrapper}>{<div className={d.content}>{T}{<div className={d.text}>{<l.X6q variant={"heading-md/semibold"} className={d.title}>{t}</l.X6q>}{null != n && <l.Text color={"text-muted"} variant={"text-xs/normal"}>{n}</l.Text>}</div>}</div>}{<div className={d.buttonContainer}>{null != b && <s.zx className={d.button} size={s.zx.Sizes.SMALL} onClick={y} look={s.zx.Looks.LINK} color={s.zx.Colors.PRIMARY} submitting={h}>{b}</s.zx>}{null != _ && <s.zx className={d.button} innerClassName={d.innerButton} size={s.zx.Sizes.SMALL} onClick={m} submitting={h} color={null != p ? p : s.zx.Colors.PRIMARY}>{_}</s.zx>}</div>}{null != f && <c.Z className={d.countdown} deadline={f} />}</div>
}