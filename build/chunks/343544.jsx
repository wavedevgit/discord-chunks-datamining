/** Chunk was on 87337 **/
/** chunk id: 343544, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk511010 = require("./511010.js"),
  Chunk824469 = require("./824469.js"),
  Chunk444812 = require("./444812.js");

function m(e) {
  let {
    headerText: n,
    secondaryHeaderText: t,
    descriptionText: r,
    infoRows: m,
    onDismissAndStay: x,
    onDismissAndLeave: h,
    leaveButtonText: _,
    stayButtonText: f,
    transitionState: g,
    impression: j
  } = e;
  return <o.Y0X transitionState={g} impression={j} parentComponent={"BlockedUserWarningModal"}>{<img alt={""} className={c.headerImage} src={u} />}{<o.xBx separator={false} className={c.header}>{<o.X6q variant={"heading-xl/bold"} color={"header-primary"} className={c.title}>{n}{null != t && <s.Fragment>{<br />}{t}</s.Fragment>}</o.X6q>}{null != r && <o.Text variant={"text-md/medium"} color={"header-secondary"}>{r}</o.Text>}</o.xBx>}{<o.hzk className={c.content}>{<div className={c.infoGroup}>{m.map((e, n) => (0, s.jsxs)(i.Fragment, {
          children: [(0, s.jsxs)("div", {
            className: a()(c.infoRow, e.className),
            children: [e.icon, (0, s.jsx)(o.Text, {
              variant: "text-md/medium",
              children: e.text
            })]
          }), n < m.length - 1 && (0, s.jsx)(d.Z, {})]
        }, n))}</div>}{<div className={c.buttonGroup}>{<o.zxk variant={"secondary"} text={f} onClick={x} />}{<l.zx color={l.zx.Colors.BRAND} size={l.zx.Sizes.MEDIUM} onClick={h} className={c.leave}>{_}</l.zx>}</div>}</o.hzk>}</o.Y0X>
}