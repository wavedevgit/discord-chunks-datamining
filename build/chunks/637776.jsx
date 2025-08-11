/** Chunk was on 27978 **/
/** chunk id: 637776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk231239 = require("./231239.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk844800 = require("./844800.js"),
  Chunk580497 = require("./580497.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk742834 = require("./742834.js");

function g(e) {
  let {
    location: t
  } = e, [g, _] = i.useState(false), {
    verifySuccess: x,
    verifyErrors: b,
    redirectGuildId: E
  } = (0, l.e7)([d.Z], () => d.Z.getState());
  i.useEffect(() => {
    let e = (0, s.Z)(t);
    o.Z.verify(e), (0, u.e)("verify_hub_email")
  }, [t]);
  let v = () => {
    (0, h.Z)(E), _(true)
  };
  return g ? <a.ZP>{<a.Dx className={m.title}>{f.intl.string(f.t.csrAMD)}</a.Dx>}{<a.DK className={m.subtitle}>{f.intl.string(f.t["m1+IBg"])}</a.DK>}{<a.zx className={m.spacedButton} onClick={() => (0, c.uL)(p.Z5c.CHANNEL(E))}>{f.intl.string(f.t.fIv16O)}</a.zx>}</a.ZP> : x ? <a.ZP>{<a.Ee className={m.image} src={n(73962)} />}{<a.Dx className={m.title}>{f.intl.string(f.t.dAfGb2)}</a.Dx>}{<a.zx onClick={v}>{f.intl.string(f.t.uJWIj4)}</a.zx>}</a.ZP> : null != b ? <a.ZP>{<a.Ee className={m.image} src={n(375673)} />}{<a.Dx className={m.title}>{f.intl.string(f.t.PCgG39)}</a.Dx>}{<a.DK className={m.subtitle}>{f.intl.string(f.t.tQpeAw)}</a.DK>}{<a.zx onClick={v}>{f.intl.string(f.t.uJWIj4)}</a.zx>}</a.ZP> : <a.ZP>{<a.Ee className={m.image} src={n(892235)} />}{<a.Dx className={m.title}>{f.intl.string(f.t["0c8+5u"])}</a.Dx>}{<a.DK className={m.subtitle}>{f.intl.string(f.t.ULTCBA)}</a.DK>}{<a.zx submitting={true} color={a.zx.Colors.PRIMARY} />}</a.ZP>
}
Chunk442837.ZP.initialize()