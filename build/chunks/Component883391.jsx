/** Chunk was on 21738 **/
/** chunk id: 883391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk492462 = require("./492462.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk800342 = require("./800342.js"),
  Chunk490415 = require("./490415.jsx"),
  Chunk481859 = require("./481859.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk857071 = require("./857071.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk71393 = require("./71393.js"),
  Chunk860689 = require("./860689.js"),
  Chunk590858 = require("./590858.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk811911 = require("./811911.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class N extends Chunk64700.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == e || null == t ? null : (0, r.jsxs)(f.A, {
      className: S.Fj,
      align: f.A.Align.CENTER,
      children: [(0, r.jsx)("div", {
        className: S.JX
      }), (0, r.jsx)("span", {
        className: S.WI,
        children: v.intl.format(v.t["LC+S+m"], {
          membersOnline: t
        })
      }), (0, r.jsx)("div", {
        className: S.Li
      }), (0, r.jsx)("span", {
        className: S.WI,
        children: v.intl.format(v.t.zRl6XR, {
          count: e
        })
      })]
    })
  }
  render() {
    let {
      guild: e,
      inChannel: t,
      isInGuild: n,
      isLurking: i,
      isAuthenticated: l,
      className: s,
      pageSize: o
    } = this.props;
    if (t && n) return null;
    let d = (0, O.rx)(e),
      p = v.intl.string(v.t.pxwdrA),
      h = this.handleJoinOrView,
      A = c.$n.Looks.FILLED,
      _ = c.$n.Colors.PRIMARY;
    return l ? n ? (A = c.$n.Looks.OUTLINED, _ = S.yh, p = (0, r.jsxs)(f.A, {
      align: f.A.Align.CENTER,
      children: [(0, r.jsx)("div", {
        children: v.intl.string(v.t.cEnaWx)
      }), (0, r.jsx)(u.A9s, {
        size: "md",
        color: "currentColor",
        className: S.BW
      })]
    })) : i && t && (p = v.intl.string(v.t.XpeFYr)) : (p = v.intl.string(v.t.dKhVQN), h = this.handleLogin), (0, r.jsxs)("div", {
      className: a()(s, o === y.q.SMALL ? S.T8 : S.vm),
      children: [(0, r.jsx)(g.A, {
        children: v.intl.string(v.t.s1KcLo)
      }), (0, r.jsxs)("div", {
        className: S.Qs,
        children: [(0, r.jsxs)("div", {
          className: S.pq,
          children: [(0, r.jsx)(m.A, {
            guild: d,
            active: true,
            size: m.A.Sizes.LARGE,
            className: S.$f
          }), (0, r.jsxs)("div", {
            className: S.aV,
            children: [(0, r.jsx)("div", {
              className: S.UU,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, r.jsx)(c.$n, {
          size: c.$n.Sizes.SMALL,
          className: S.hP,
          fullWidth: true,
          color: _,
          look: A,
          onClick: h,
          children: p
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), C(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: n,
        isLurking: r
      } = this.props, i = () => (0, b.u)(e.id);
      if (r)(0, p.S5)(t).then(i);
      else if (n) i();
      else try {
        await d.A.joinGuild(e.id, {
          lurker: true,
          source: I.Q4z.APPLICATION_STORE
        }), i()
      } catch (e) {}
    }), C(this, "handleLogin", () => {
      let e = {
        redirect_to: I.BVt.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, _.pX)(I.BVt.LOGIN, {
        search: (0, s.stringify)(e),
        source: "verified_guild_invite"
      })
    })
  }
}
let T = (0, Chunk490415.A)(Chunk311907.Ay.connectStores([Chunk71393.A, Chunk857071.A], e => {
  let {
    guild: t
  } = e, n = A.A.isLurking(t.id);
  return {
    isInGuild: null != E.A.getGuild(t.id) && !n,
    isLurking: n
  }
})(N))