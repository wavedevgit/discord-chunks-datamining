/** Chunk was on 11788 **/
/** chunk id: 264233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => _,
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk317632 = require("./317632.js"),
  Chunk174767 = require("./174767.js"),
  Chunk240126 = require("./240126.jsx"),
  Chunk326838 = require("./326838.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201848 = require("./201848.js");

function g() {
  let e = (0, Chunk442837.Wu)([Chunk317632.Z], () => Chunk317632.Z.getInvites()),
    t = (0, Chunk442837.e7)([Chunk317632.Z], () => Chunk317632.Z.getInviteStatuses()),
    [n, l] = Chunk647438.useMemo(() => o().partition(module, e => {
      var n;
      return (null == (n = t[e.invite_id]) ? true : n.joinable) !== false && (Date.now() - new Date(e.created_at).getTime()) / 1e3 < e.ttl
    }), [module, exports]);
  return (Chunk647438.useEffect(() => {
    (0, Chunk174767.sJ)()
  }), 0 === module.length) ? (0, Chunk951288.jsx)("div", {
    className: Chunk201848.__invalid_emptyStateContainer,
    children: (0, Chunk951288.jsx)(Chunk240126.Z, {
      Icon: Chunk481060.iWm,
      header: Chunk388032.intl.string(Chunk388032.t.PbSPWc),
      tip: Chunk388032.intl.string(Chunk388032.t.BxNbSz)
    })
  }) : (0, Chunk951288.jsx)(Chunk481060.h21, {
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk201848.invitesContainer,
      children: [require.length > 0 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(m, {
          title: Chunk388032.intl.string(Chunk388032.t.yflAJV)
        }), require.map(e => (0, r.jsx)(p.Z, {
          invite: e,
          expired: false
        }, e.invite_id))]
      }), Chunk392711.length > 0 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(m, {
          title: Chunk388032.intl.string(Chunk388032.t.f0Ia4V)
        }), Chunk392711.map(e => (0, r.jsx)(p.Z, {
          invite: e,
          expired: true
        }, e.invite_id))]
      })]
    })
  })
}

function m(e) {
  let {
    title: t
  } = e;
  return (0, r.jsxs)("div", {
    className: f.headerContainer,
    children: [(0, r.jsx)(s.Text, {
      className: f.headerTitle,
      variant: "text-xs/semibold",
      color: "interactive-normal",
      children: t
    }), (0, r.jsx)("div", {
      className: f.headerDivider
    })]
  })
}

function b() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("13111").then(require.bind(require, 93756));
    return t => {
      var n, i;
      return (0, r.jsx)(e, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, t), i = i = {
        onDelete: async () => {
          await t.onClose()
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}

function _() {
  return 0 === (0, Chunk442837.Wu)([Chunk317632.Z], () => Chunk317632.Z.getInvites()).length ? null : (0, Chunk951288.jsx)(Chunk481060.M0o, {
    tooltip: Chunk388032.intl.string(Chunk388032.t["Zy3MR/"]),
    color: Chunk481060.YX$.SECONDARY,
    icon: (0, Chunk951288.jsx)(Chunk481060.XHJ, {
      size: "xs"
    }),
    onClick: b
  })
}