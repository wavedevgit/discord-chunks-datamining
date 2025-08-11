/** Chunk was on 51343 **/
/** chunk id: 921869, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  m: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk424071 = require("./424071.jsx"),
  Chunk239358 = require("./239358.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475286 = require("./475286.js");

function h(e) {
  let {
    platformType: a,
    onContinue: t,
    onClose: h,
    img: m,
    headerConnect: N,
    headerReconnect: C,
    body: j,
    learnMoreLink: p,
    valueProps: v
  } = e, k = (0, n.e7)([o.Z], () => {
    let e = o.Z.getAccount(null, a);
    return (null == e ? true : e.twoWayLink) === false
  });
  return <c.Z>{<l.xBx direction={i.Z.Direction.VERTICAL} className={u.header} separator={false}>{<div className={u.illustration}>{m}{" "}</div>}{<l.X6q className={u.title} variant={"heading-xl/extrabold"}>{k && null != C ? C : N}</l.X6q>}{<l.olH className={u.closeButton} onClick={h} />}</l.xBx>}{<l.hzk className={u.body}>{<l.Text tag={"p"} variant={"text-md/normal"} color={"header-secondary"}>{j}</l.Text>}{<div className={u.valueProps}>{v.map((e, a) => {
          let {
            label: t,
            subLabel: n,
            icon: l
          } = e;
          return (0, r.jsxs)(s.Fragment, {
            children: [(0, r.jsx)(d.Z, {
              label: t,
              subLabel: n,
              icon: l
            }, t), a !== v.length - 1 && (0, r.jsx)("div", {
              className: u.valuePropDivider
            })]
          }, t)
        })}</div>}{null != p ? <l.Text tag={"p"} variant={"text-sm/normal"} color={"header-secondary"}>{x.intl.format(x.t["/l3n+/"], {
          helpCenterLink: p
        })}</l.Text> : null}</l.hzk>}{<l.mzw className={u.footer}><div data-button-hoisted-classname-wrapper={true} className={u.footerButton}><l.zxk variant={"primary"} text={x.intl.string(x.t["3PatS0"])} onClick={t} /></div></l.mzw>}</c.Z>
}