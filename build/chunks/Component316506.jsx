/** Chunk was on 47841 **/
/** chunk id: 316506, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b,
  u: () => f
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

function f() {
  let [e, t] = i.useState(true);
  return {
    scrolledToTop: e,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function b(e) {
  let {
    guild: t,
    role: f,
    selectedSection: b,
    setSelectedSection: h
  } = e, x = i.useCallback(e => {
    h(e)
  }, [h]), j = (0, l.bG)([d.A], () => {
    var e;
    return null == (e = d.A.getRoleMemberCount(t.id)) ? true : e[f.id]
  }, [f.id, t.id]), _ = (0, c.Oy)(f), O = (0, u.A)(t.id, f);
  i.useEffect(() => {
    _ && h(g.T$.PERMISSIONS)
  }, [_, h]);
  let v = (0, o.x)(t, f);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: p.gn,
      children: [(0, r.jsx)(s.Text, {
        className: p.Qw,
        color: "text-strong",
        variant: "text-md/semibold",
        children: m.intl.format(m.t.BUdGkE, {
          roleName: f.name
        })
      }), v ? (0, r.jsx)(s.DUT, {
        className: p.MK,
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
                role: f
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
        "aria-label": m.intl.string(m.t.PdRCRg),
        children: (0, r.jsx)(s.jNK, {
          size: "md",
          color: "currentColor"
        })
      }) : null]
    }), null != O ? (0, r.jsx)(s.po8, {
      messageType: s.YCn.WARNING,
      children: O
    }) : null, (0, r.jsxs)(s.VQ0, {
      className: p.$H,
      "aria-label": m.intl.string(m.t["+1H47t"]),
      selectedItem: b,
      type: "top",
      look: "brand",
      onItemSelect: x,
      children: [(0, r.jsx)(s.VQ0.Item, {
        className: p.YU,
        id: g.T$.DISPLAY,
        disabled: _,
        children: m.intl.string(m.t.hmdomw)
      }), (0, r.jsx)(s.VQ0.Item, {
        className: p.YU,
        id: g.T$.PERMISSIONS,
        children: m.intl.string(m.t.WIDE1L)
      }), (0, r.jsx)(s.VQ0.Item, {
        className: p.YU,
        id: g.T$.VERIFICATIONS,
        disabled: _,
        children: m.intl.string(m.t["5//Muu"])
      }), (0, r.jsx)(s.VQ0.Item, {
        className: p.YU,
        id: g.T$.MEMBERS,
        disabled: _,
        children: _ ? m.intl.string(m.t["kg//+7"]) : m.intl.formatToPlainString(m.t.bHnZWW, {
          numMembers: String(j)
        })
      })]
    })]
  })
}