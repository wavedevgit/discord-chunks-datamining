/** Chunk was on 21738 **/
/** chunk id: 804052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk405269 = require("./405269.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk671818 = require("./671818.js");
let p = e => {
    let {
      IconComponent: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(d.kJ, n),
      children: (0, r.jsx)(t, {
        className: d.Kk,
        color: "currentColor"
      })
    })
  },
  h = e => {
    let {
      circle: t,
      smallHeader: n,
      text: i,
      className: l
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(d.yX, l),
      children: [t, (0, r.jsxs)("div", {
        className: d.h_,
        children: [null != n ? (0, r.jsx)("div", {
          className: d.VA,
          children: n
        }) : null, (0, r.jsx)("div", {
          className: d.Qq,
          children: i
        })]
      })]
    })
  };
class g extends Chunk64700.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === c.g_B.RECENT_RELEASE_DATE) return (0, r.jsx)(h, {
      className: t,
      circle: (0, r.jsx)(p, {
        IconComponent: s.CTc
      }),
      smallHeader: u.intl.string(u.t.u81aYY),
      text: (0, o.i$)(e.releaseDate, "LL")
    });
    if (e.type === c.g_B.RELEASE_DATE) return (0, r.jsx)(h, {
      className: t,
      circle: (0, r.jsx)(p, {
        IconComponent: s.CTc
      }),
      smallHeader: u.intl.string(u.t.qpwaNY),
      text: (0, o.i$)(e.releaseDate, "LL")
    });
    if (e.type === c.g_B.EARLY_ACCESS)
      if (null != e.releaseDate) return (0, r.jsx)(h, {
        className: t,
        circle: (0, r.jsx)(p, {
          IconComponent: s.wUM,
          className: d.gY
        }),
        smallHeader: u.intl.string(u.t.HYys0s),
        text: (0, o.i$)(e.releaseDate, "LL")
      });
      else return (0, r.jsx)(h, {
        className: t,
        circle: (0, r.jsx)(p, {
          IconComponent: s.wUM,
          className: d.gY
        }),
        text: u.intl.string(u.t.HYys0s)
      });
    return e.type === c.g_B.FLAVOR_TEXT ? (0, r.jsx)(h, {
      circle: (0, r.jsx)(p, {
        IconComponent: s.A9s
      }),
      text: e.flavorText,
      className: t
    }) : e.type === c.g_B.HAS_FREE_PREMIUM_CONTENT ? (0, r.jsx)(h, {
      className: t,
      circle: (0, r.jsx)(p, {
        IconComponent: s.tvc,
        className: d.uf
      }),
      text: u.intl.string(u.t.R9SwVl)
    }) : null
  }
}