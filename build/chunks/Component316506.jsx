/** Chunk was on 47841 **/
/** chunk id: 316506, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p,
  u: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk665013 = require("./665013.jsx"),
  Chunk34457 = require("./34457.js"),
  Chunk642133 = require("./642133.js"),
  Chunk458334 = require("./458334.jsx"),
  Chunk927573 = require("./927573.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk286420 = require("./286420.js");

function m() {
  let [e, t] = i.useState(true);
  return {
    scrolledToTop: e,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function p(e) {
  let {
    guild: t,
    role: m,
    selectedSection: p,
    setSelectedSection: x
  } = e, h = i.useCallback(e => {
    x(e)
  }, [x]), j = (0, l.bG)([d.A], () => {
    var e;
    return null == (e = d.A.getRoleMemberCount(t.id)) ? true : e[m.id]
  }, [m.id, t.id]), O = (0, o.Oy)(m), y = (0, u.A)(t.id, m);
  i.useEffect(() => {
    O && x(f.T$.PERMISSIONS)
  }, [O, x]);
  let v = (0, c.x)(t, m);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: b.gn,
      children: [(0, r.jsx)(s.Text, {
        className: b.Qw,
        color: "text-strong",
        variant: "text-md/semibold",
        children: g.intl.format(g.t.BUdGkE, {
          roleName: m.name
        })
      }), v ? (0, r.jsx)(s.DUT, {
        className: b.MK,
        onClick: function(e) {
          (0, a.L3)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 665013));
            return n => {
              var i, l;
              return (0, r.jsx)(e, (i = function(e) {
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
              }({}, n), l = l = {
                guild: t,
                role: m
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(l)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
              }), i))
            }
          })
        },
        "aria-label": g.intl.string(g.t.PdRCRg),
        children: (0, r.jsx)(s.jNK, {
          size: "md",
          color: "currentColor"
        })
      }) : null]
    }), null != y ? (0, r.jsx)(s.po8, {
      messageType: s.YCn.WARNING,
      children: y
    }) : null, (0, r.jsxs)(s.VQ0, {
      className: b.$H,
      "aria-label": g.intl.string(g.t["+1H47t"]),
      selectedItem: p,
      type: "top",
      look: "brand",
      onItemSelect: h,
      children: [(0, r.jsx)(s.VQ0.Item, {
        className: b.YU,
        id: f.T$.DISPLAY,
        disabled: O,
        children: g.intl.string(g.t.hmdomw)
      }), (0, r.jsx)(s.VQ0.Item, {
        className: b.YU,
        id: f.T$.PERMISSIONS,
        children: g.intl.string(g.t.WIDE1L)
      }), (0, r.jsx)(s.VQ0.Item, {
        className: b.YU,
        id: f.T$.VERIFICATIONS,
        disabled: O,
        children: g.intl.string(g.t["5//Muu"])
      }), (0, r.jsx)(s.VQ0.Item, {
        className: b.YU,
        id: f.T$.MEMBERS,
        disabled: O,
        children: O ? g.intl.string(g.t["kg//+7"]) : g.intl.formatToPlainString(g.t.bHnZWW, {
          numMembers: String(j)
        })
      })]
    })]
  })
}