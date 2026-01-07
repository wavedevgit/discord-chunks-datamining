/** Chunk was on 93671 **/
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
  Chunk888327 = require("./888327.js");

function d() {
  let [e, t] = l.useState(false), [n, i] = l.useState(false), [o, d] = l.useState(false);
  l.useEffect(() => {
    let e;
    return n && (e = setTimeout(() => {
      i(false)
    }, 2e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [n]);
  let m = async () => {
    if (!e) {
      t(true);
      try {
        await s.Z.verifyResend(), i(true), d(true)
      } catch (e) {} finally {
        t(false)
      }
    }
  };
  return n ? (0, r.jsx)(a.Text, {
    className: u.verifyConfirmText,
    variant: "text-sm/normal",
    color: "text-feedback-positive",
    children: c.intl.string(c.t.H3Q7U8)
  }) : (0, r.jsx)(a.Button, {
    variant: "primary",
    size: "sm",
    text: o ? c.intl.string(c.t.WnX4J2) : c.intl.string(c.t["13ofGu"]),
    loading: e,
    onClick: m
  })
}

function m() {
  return (0, r.jsx)(o.PU, {
    className: u.editableRequirementContainer,
    icon: a._XJ,
    text: c.intl.string(c.t.c6EUJI),
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: false,
    children: (0, r.jsx)(i.u, {
      asContainer: true,
      text: c.intl.string(c.t.mGlP30),
      children: (0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        disabled: true,
        text: c.intl.string(c.t["13ofGu"])
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
    icon: a._XJ,
    text: n,
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: t,
    children: (0, r.jsx)(d, {})
  })
}