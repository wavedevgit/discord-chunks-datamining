/** Chunk was on 65354 **/
/** chunk id: 98493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => d,
  p: () => u
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk881052 = require("./881052.js"),
  Chunk709054 = require("./709054.js"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js");
let u = Chunk246364.tB * Chunk246364.hW;

function d(e) {
  let {
    guildId: t,
    guildJoinRequests: n
  } = e, i = r.useRef(false), [d, p] = r.useState(null), h = r.useRef(null), f = r.useRef(false);
  return {
    fetchNextPage: r.useCallback(async (e, r) => {
      if (i.current) return;
      let g = "".concat(e, "-").concat(r),
        m = false;
      if (g !== h.current && (h.current = g, f.current = false, m = true), f.current) return;
      null != d && p(null);
      let b = function(e, t, n, r) {
        let i = n === c.wB.SUBMITTED;
        if (t === c.Nw.TIMESTAMP_DESC)
          if (r) return {
            before: a.default.fromTimestamp(new Date().getTime())
          };
          else {
            let t = e[e.length - 1];
            return {
              before: i ? t.joinRequestId : t.actionedAt
            }
          } if (r) return {
          after: a.default.fromTimestamp(l()().subtract(180, "days").valueOf())
        };
        {
          let t = e[e.length - 1];
          return {
            after: i ? t.joinRequestId : t.actionedAt
          }
        }
      }(n, e, r, m);
      try {
        i.current = true;
        let e = await s.Z.fetchGuildJoinRequests(function(e) {
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
          t.length < u && (f.current = true)
        }
      } catch (e) {
        p(new o.Hx(e).getAnyErrorMessage())
      } finally {
        i.current = false
      }
    }, [d, t, n]),
    error: d
  }
}