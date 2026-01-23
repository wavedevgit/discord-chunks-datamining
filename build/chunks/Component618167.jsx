/** Chunk was on web.js **/
/** chunk id: 618167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk496885 = require("./496885.jsx"),
  Chunk313375 = require("./313375.jsx"),
  Chunk61780 = require("./61780.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk942975 = require("./942975.js"),
  Chunk645619 = require("./645619.js"),
  Chunk434564 = require("./434564.js"),
  Chunk92707 = require("./92707.js");
class g extends Chunk64700.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, r.jsxs)("div", {
      className: m._v,
      children: [(0, r.jsx)(c.A, {
        className: m.U2,
        children: (0, r.jsx)(u.A, {
          tier: e,
          color: "currentColor",
          className: m.Zw
        })
      }), (0, f.gb)(e)]
    })
  }
}
let E = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e, i = (0, h.A)(n.id);
  if (0 === t) return null;
  let a = (0, f.P7)(n.id),
    s = (0, f.kN)(i + t),
    o = s - a;
  return 0 === o ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.A, {
      className: o > 0 ? m.$P : m.q0
    }), (0, r.jsx)(g, {
      tier: s
    })]
  })
};

function y(e) {
  let {
    guild: t,
    className: n,
    subscriptionChange: a
  } = e, c = (0, o.bG)([_.A], () => null != _.A.getStateForGuild(t.id));
  return i.useEffect(() => {
    c || (0, p.Xd)(t.id)
  }, [c, t.id]), (0, r.jsxs)("div", {
    className: s()(m.gP, n),
    children: [(0, r.jsx)(l.A, {
      guild: t,
      size: l.A.Sizes.LARGE
    }), (0, r.jsxs)("div", {
      className: m.EF,
      children: [(0, r.jsx)("div", {
        className: m.J5,
        children: t.name
      }), (0, r.jsxs)("div", {
        className: m.jp,
        children: [(0, r.jsx)(g, {
          tier: t.premiumTier
        }), (0, r.jsx)(E, {
          guild: t,
          subscriptionChange: null != a ? a : 0
        })]
      })]
    })]
  })
}