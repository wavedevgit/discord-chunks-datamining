/** Chunk was on 11324 **/
/** chunk id: 118346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => f,
  b: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162359 = require("./162359.js");

function d() {
  let [e, t] = Chunk473749.useState(false), [n, i] = Chunk473749.useState(false), [o, d] = Chunk473749.useState(false);
  Chunk473749.useEffect(() => {
    let e;
    return require && (e = setTimeout(() => {
      Chunk28664(false)
    }, 2e3)), () => {
      null != module && clearTimeout(module)
    }
  }, [require]);
  let m = async () => {
    if (!module) {
      exports(true);
      try {
        await Chunk893776.Z.verifyResend(), Chunk28664(true), d(true)
      } catch (e) {} finally {
        exports(false)
      }
    }
  };
  return require ? (0, Chunk54381.jsx)(Chunk481060.Text, {
    className: Chunk162359.verifyConfirmText,
    variant: "text-sm/normal",
    color: "text-feedback-positive",
    children: Chunk388032.intl.string(Chunk388032.t.H3Q7U8)
  }) : (0, Chunk54381.jsx)(Chunk481060.Button, {
    variant: "primary",
    size: "sm",
    text: Chunk489813 ? Chunk388032.intl.string(Chunk388032.t.WnX4J2) : Chunk388032.intl.string(Chunk388032.t["13ofGu"]),
    loading: module,
    onClick: m
  })
}

function m() {
  return (0, Chunk54381.jsx)(Chunk489813.PU, {
    className: Chunk162359.editableRequirementContainer,
    icon: Chunk481060._XJ,
    text: Chunk388032.intl.string(Chunk388032.t.c6EUJI),
    footnote: Chunk388032.intl.string(Chunk388032.t["jMh+TY"]),
    meetsRequirement: false,
    children: (0, Chunk54381.jsx)(Chunk28664.u, {
      asContainer: true,
      text: Chunk388032.intl.string(Chunk388032.t.mGlP30),
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        disabled: true,
        text: Chunk388032.intl.string(Chunk388032.t["13ofGu"])
      })
    })
  })
}

function f(e) {
  let {
    isUserVerified: t
  } = e, n = t ? c.intl.string(c.t.qY1jHN) : c.intl.string(c.t.c6EUJI);
  return (0, r.jsx)(o.PU, {
    className: u.editableRequirementContainer,
    icon: s._XJ,
    text: n,
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: t,
    children: (0, r.jsx)(d, {})
  })
}