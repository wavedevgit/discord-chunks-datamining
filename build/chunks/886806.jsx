/** Chunk was on 27978 **/
/** chunk id: 886806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk893776 = require("./893776.js"),
  Chunk493773 = require("./493773.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk17894 = require("./17894.js"),
  Chunk108427 = require("./108427.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk726401 = require("./726401.js"),
  Chunk20493 = require("./20493.js");

function b(e) {
  n.g.location.assign(e)
}

function E(e) {
  let {
    location: t,
    transitionTo: l = b
  } = e, [s, E] = i.useState("submitting"), v = i.useRef(true);
  (0, c.ZP)(() => {
    (0, p.e)("verify_email");
    let e = (0, u.Z)(t);
    if (null == e) return void E("failed");
    (async () => {
      try {
        let t = await a.Z.verify(e);
        E("succeeded"), v.current = t
      } catch (e) {
        E("failed")
      }
    })()
  });
  let j = i.useCallback(() => {
      l(m.Z5c.LOGIN, {
        source: "verify_email"
      })
    }, [l]),
    I = i.useCallback(() => {
      f.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: v.current
      }), (0, h.Z)("verify_email")
    }, []);
  return "failed" === s ? <d.ZP>{<d.Ee src={n(375673)} className={o()(_.image, x.marginBottom20)} />}{<d.Dx className={x.marginBottom8}>{g.intl.string(g.t.PCgG39)}</d.Dx>}{<d.DK className={x.marginBottom40}>{g.intl.string(g.t.tQpeAw)}</d.DK>}{<d.zx onClick={j}>{g.intl.string(g.t.dKhVQE)}</d.zx>}</d.ZP> : "succeeded" === s ? <d.ZP>{<d.Ee src={n(73962)} className={o()(_.image, x.marginBottom20)} />}{<d.Dx className={x.marginBottom40}>{g.intl.string(g.t.dAfGb2)}</d.Dx>}{<d.zx onClick={I}>{g.intl.string(g.t.uJWIj4)}</d.zx>}</d.ZP> : <d.ZP>{<d.Ee src={n(892235)} className={o()(_.image, x.marginBottom20)} />}{<d.Dx className={x.marginBottom8}>{g.intl.string(g.t["0c8+5u"])}</d.Dx>}{<d.DK className={x.marginBottom40}>{g.intl.string(g.t.ULTCBA)}</d.DK>}{<d.zx submitting={true} color={d.zx.Colors.PRIMARY} />}</d.ZP>
}
Chunk442837.ZP.initialize()