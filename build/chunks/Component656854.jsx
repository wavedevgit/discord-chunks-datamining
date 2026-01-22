/** Chunk was on 20601 **/
/** chunk id: 656854, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  G: () => f,
  O: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk31457 = require("./31457.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk712104 = require("./712104.js");

function u() {
  let [e, t] = r.useState(false), [l, s] = r.useState(false), [o, u] = r.useState(false);
  r.useEffect(() => {
    let e;
    return l && (e = setTimeout(() => {
      s(false)
    }, 2e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [l]);
  let f = async () => {
    if (!e) {
      t(true);
      try {
        await a.A.verifyResend(), s(true), u(true)
      } catch (e) {} finally {
        t(false)
      }
    }
  };
  return l ? (0, n.jsx)(i.Text, {
    className: d.$6,
    variant: "text-sm/normal",
    color: "text-feedback-positive",
    children: c.intl.string(c.t.H3Q7U8)
  }) : (0, n.jsx)(i.Button, {
    variant: "primary",
    size: "sm",
    text: o ? c.intl.string(c.t.WnX4J2) : c.intl.string(c.t["13ofGu"]),
    loading: e,
    onClick: f
  })
}

function f() {
  return (0, n.jsx)(o.ZK, {
    className: d.jm,
    icon: i.u6c,
    text: c.intl.string(c.t.c6EUJI),
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: false,
    children: (0, n.jsx)(s.m, {
      asContainer: true,
      text: c.intl.string(c.t.mGlP30),
      children: (0, n.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        disabled: true,
        text: c.intl.string(c.t["13ofGu"])
      })
    })
  })
}

function m(e) {
  let {
    isUserVerified: t
  } = e, l = t ? c.intl.string(c.t.qY1jHN) : c.intl.string(c.t.c6EUJI);
  return (0, n.jsx)(o.ZK, {
    className: d.jm,
    icon: i.u6c,
    text: l,
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: t,
    children: (0, n.jsx)(u, {})
  })
}