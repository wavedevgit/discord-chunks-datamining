/** Chunk was on 34749 **/
/** chunk id: 618167, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => f
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
class p extends Chunk64700.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, n.jsxs)("div", {
      className: j._v,
      children: [(0, n.jsx)(u.A, {
        className: j.U2,
        children: (0, n.jsx)(c.A, {
          tier: e,
          color: "currentColor",
          className: j.Zw
        })
      }), (0, m.gb)(e)]
    })
  }
}
let C = e => {
  let {
    subscriptionChange: t,
    guild: l
  } = e, r = (0, h.A)(l.id);
  if (0 === t) return null;
  let i = (0, m.P7)(l.id),
    s = (0, m.kN)(r + t),
    a = s - i;
  return 0 === a ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.A, {
      className: a > 0 ? j.$P : j.q0
    }), (0, n.jsx)(p, {
      tier: s
    })]
  })
};

function f(e) {
  let {
    guild: t,
    className: l,
    subscriptionChange: i
  } = e, u = (0, a.bG)([g.A], () => null != g.A.getStateForGuild(t.id));
  return r.useEffect(() => {
    u || (0, x.Xd)(t.id)
  }, [u, t.id]), (0, n.jsxs)("div", {
    className: s()(j.gP, l),
    children: [(0, n.jsx)(o.A, {
      guild: t,
      size: o.A.Sizes.LARGE
    }), (0, n.jsxs)("div", {
      className: j.EF,
      children: [(0, n.jsx)("div", {
        className: j.J5,
        children: t.name
      }), (0, n.jsxs)("div", {
        className: j.jp,
        children: [(0, n.jsx)(p, {
          tier: t.premiumTier
        }), (0, n.jsx)(C, {
          guild: t,
          subscriptionChange: null != i ? i : 0
        })]
      })]
    })]
  })
}