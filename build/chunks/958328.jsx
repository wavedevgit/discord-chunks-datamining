/** Chunk was on 93886 **/
/** chunk id: 958328, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk233608 = require("./233608.js"),
  Chunk71080 = require("./71080.js"),
  Chunk390094 = require("./390094.js"),
  Chunk616257 = require("./616257.js");

function j(e) {
  let {
    title: t,
    can: a
  } = e, r = a ? o.dz2 : o.Dio, i = <div className={l()(f.iconOuter, a ? f.iconCheck : f.iconCross)}><r className={f.icon} /></div>;
  return <div className={f.scope}>{i}{<div className={f.scopeInner}><o.Text variant={"text-md/normal"}>{t}</o.Text></div>}</div>
}

function g() {
  let e = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId()),
    t = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    a = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module)),
    r = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)),
    g = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.computePermissions(require)),
    _ = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.computePermissions(Chunk120356)),
    y = (0, Chunk933557.ZP)(require, true),
    C = null != require ? (0, Chunk71080.IG)(require, false) : null,
    N = null != Chunk120356 ? Chunk233608.Z.getGuildPermissionSpecMap(Chunk120356) : null,
    O = Object.values(null != C ? C : {}).map(e => {
      let {
        title: t,
        flag: a
      } = e, r = i.e$(g, a);
      return <j title={t} can={r} />
    }),
    T = Object.values(null != N ? N : {}).map(e => {
      let {
        title: t,
        flag: a
      } = e, r = i.e$(_, a);
      return <j title={t} can={r} />
    });
  return <div className={l()(Chunk616257.panel, Chunk390094.panel)}><div className={Chunk390094.panelInner}>{<section className={Chunk390094.section}>{<Chunk481060.X6q variant={"heading-md/semibold"}>{null != y ? "Permissions in ".concat(y) : "No channel selected"}</Chunk481060.X6q>}{O}</section>}{<section className={Chunk390094.section}>{<Chunk481060.X6q variant={"heading-md/semibold"}>{null != Chunk120356 ? "Permissions in ".concat(Chunk120356.name) : "No guild selected"}</Chunk481060.X6q>}{T}</section>}</div></div>
}