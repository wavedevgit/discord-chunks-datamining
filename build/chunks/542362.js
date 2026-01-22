/** Chunk was on web.js **/
/** chunk id: 542362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk340287 = require("./340287.js"),
  Chunk669507 = require("./669507.js"),
  Chunk412700 = require("./412700.js"),
  o = require.n(Chunk412700),
  Chunk418034 = require("./418034.js"),
  c = [],
  u = function(e, t, n) {
    true === n && (n = {});
    var s = r.useRef(null),
      u = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || c
      },
      d = r.useState({
        styles: {
          popper: {
            position: u.strategy,
            left: "0",
            top: "0"
          },
          arrow: {
            position: "absolute"
          }
        },
        attributes: {}
      }),
      f = d[0],
      p = d[1],
      _ = r.useMemo(function() {
        return {
          name: "updateState",
          enabled: true,
          phase: "write",
          fn: function(e) {
            var t = e.state,
              n = Object.keys(t.elements);
            i.flushSync(function() {
              p({
                styles: (0, l.PW)(n.map(function(e) {
                  return [e, t.styles[e] || {}]
                })),
                attributes: (0, l.PW)(n.map(function(e) {
                  return [e, t.attributes[e]]
                }))
              })
            })
          },
          requires: ["computeStyles"]
        }
      }, []),
      h = r.useMemo(function() {
        var e = {
          onFirstUpdate: u.onFirstUpdate,
          placement: u.placement,
          strategy: u.strategy,
          modifiers: [].concat(u.modifiers, [_, {
            name: "applyStyles",
            enabled: false
          }])
        };
        return o()(s.current, e) ? s.current || e : (s.current = e, e)
      }, [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, _]),
      m = r.useRef();
    return (0, l.Es)(function() {
      m.current && m.current.setOptions(h)
    }, [h]), (0, l.Es)(function() {
      if (null != e && null != t) {
        var r = n.createPopper || a.n,
          i = r(e, t, h);
        return m.current = i,
          function() {
            i.destroy(), m.current = null
          }
      }
    }, [e, t, n.createPopper]), {
      state: m.current ? m.current.state : null,
      styles: f.styles,
      attributes: f.attributes,
      update: m.current ? m.current.update : null,
      forceUpdate: m.current ? m.current.forceUpdate : null
    }
  }