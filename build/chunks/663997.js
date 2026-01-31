/** Chunk was on 17534 **/
/** chunk id: 663997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => d,
  L: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk198982 = require("./198982.js"),
  Chunk661191 = require("./661191.js"),
  Chunk624458 = require("./624458.js"),
  Chunk513461 = require("./513461.js");
let u = 100;

function d(e) {
  let {
    guildId: t,
    guildJoinRequests: n
  } = e, l = r.useRef(false), [d, h] = r.useState(null), p = r.useRef(null), g = r.useRef(false);
  return {
    fetchNextPage: r.useCallback(async (e, r) => {
      if (l.current) return;
      let f = "".concat(e, "-").concat(r),
        m = false;
      if (f !== p.current && (p.current = f, g.current = false, m = true), g.current) return;
      null != d && h(null);
      let b = function(e, t, n, r) {
        let l = n === c.B5.SUBMITTED;
        if (t === c._e.TIMESTAMP_DESC)
          if (r) return {
            before: a.default.fromTimestamp(new Date().getTime())
          };
          else {
            let t = e[e.length - 1];
            return {
              before: l ? t.joinRequestId : t.actionedAt
            }
          } if (r) return {
          after: a.default.fromTimestamp(i()().subtract(180, "days").valueOf())
        };
        {
          let t = e[e.length - 1];
          return {
            after: l ? t.joinRequestId : t.actionedAt
          }
        }
      }(n, e, r, m);
      try {
        l.current = true;
        let e = await o.A.fetchGuildJoinRequests(function(e) {
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
        }({
          guildId: t,
          status: r,
          limit: u,
          force: true
        }, b));
        if (null != e) {
          let {
            guild_join_requests: t
          } = e.body;
          t.length < u && (g.current = true)
        }
      } catch (e) {
        h(new s.LG(e).getAnyErrorMessage())
      } finally {
        l.current = false
      }
    }, [d, t, n]),
    error: d
  }
}