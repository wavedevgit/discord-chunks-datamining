/** Chunk was on 20601 **/
/** chunk id: 656854, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => m,
  O: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk31457 = require("./31457.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk712104 = require("./712104.js");

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
        await a.A.verifyResend(), i(true), d(true)
      } catch (e) {} finally {
        t(false)
      }
    }
  };
  return n ? (0, r.jsx)(s.Text, {
    className: u.$6,
    variant: "text-sm/normal",
    color: "text-feedback-positive",
    children: c.intl.string(c.t.H3Q7U8)
  }) : (0, r.jsx)(s.Button, {
    variant: "primary",
    size: "sm",
    text: o ? c.intl.string(c.t.WnX4J2) : c.intl.string(c.t["13ofGu"]),
    loading: e,
    onClick: m
  })
}

function m() {
  return (0, r.jsx)(o.ZK, {
    className: u.jm,
    icon: s.u6c,
    text: c.intl.string(c.t.c6EUJI),
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: false,
    children: (0, r.jsx)(i.m, {
      asContainer: true,
      text: c.intl.string(c.t.mGlP30),
      children: (0, r.jsx)(s.Button, {
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
  return (0, r.jsx)(o.ZK, {
    className: u.jm,
    icon: s.u6c,
    text: n,
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: t,
    children: (0, r.jsx)(d, {})
  })
}