/** Chunk was on web.js **/
/** chunk id: 222957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk24156 = require("./24156.js"),
  Chunk978008 = require("./978008.js"),
  Chunk427753 = require("./427753.js"),
  s = require.n(Chunk427753),
  Chunk658346 = require("./658346.js"),
  c = [],
  u = function(e, t, n) {
    true === n && (n = {});
    var o = r.useRef(null),
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
      _ = d[1],
      p = r.useMemo(function() {
        return {
          name: "updateState",
          enabled: true,
          phase: "write",
          fn: function(e) {
            var t = e.state,
              n = Object.keys(t.elements);
            i.flushSync(function() {
              _({
                styles: (0, l.sq)(n.map(function(e) {
                  return [e, t.styles[e] || {}]
                })),
                attributes: (0, l.sq)(n.map(function(e) {
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
          modifiers: [].concat(u.modifiers, [p, {
            name: "applyStyles",
            enabled: false
          }])
        };
        return s()(o.current, e) ? o.current || e : (o.current = e, e)
      }, [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, p]),
      m = r.useRef();
    return (0, l.LI)(function() {
      m.current && m.current.setOptions(h)
    }, [h]), (0, l.LI)(function() {
      if (null != e && null != t) {
        var r = n.createPopper || a.fi,
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