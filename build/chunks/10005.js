/** Chunk was on 9207 **/
/** chunk id: 10005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js"),
  Chunk899847 = require("./899847.js"),
  Chunk695515 = require("./695515.js"),
  Chunk191627 = require("./191627.js");

function o(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [o, c] = r.useState(false), [d, u] = r.useState(false), [_, p] = r.useState(false), [m, g] = r.useState(false), [A, f] = r.useState(false), [b, h] = r.useState(false), [E, O] = r.useState(false), [x, C] = r.useState(false), S = o || d || _ || m || b || x, T = r.useCallback(async e => {
    if (!S) {
      c(true);
      try {
        await (0, l.nt)(e, a.Ef.ACTIVE), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        c(false)
      }
    }
  }, [S, t, n]), I = r.useCallback(async e => {
    if (!S) {
      u(true);
      try {
        await (0, l.nt)(e, a.Ef.DECLINED), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        u(false)
      }
    }
  }, [S, t, n]), N = r.useCallback(async e => {
    if (!S) {
      p(true);
      try {
        await (0, l.nt)(e, a.Ef.INACTIVE), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        p(false)
      }
    }
  }, [S, t, n]), y = r.useCallback(async e => {
    if (!S) {
      g(true);
      try {
        await (0, l.e$)(e), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        g(false)
      }
    }
  }, [S, t, n]), v = r.useCallback(async () => {
    if (!A) {
      f(true);
      try {
        await (0, l.HB)(), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        f(false)
      }
    }
  }, [A, t, n]), j = r.useCallback(async e => {
    if (!E) {
      O(true);
      try {
        await l.Ay.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        O(false)
      }
    }
  }, [E, t, n]);
  return {
    acceptLinkRequest: T,
    declineLinkRequest: I,
    disconnectLinkRequest: N,
    cancelLinkRequest: y,
    selectTeenUser: j,
    getLinkCode: v,
    requestLink: r.useCallback(async (e, r) => {
      if (!b) {
        h(true);
        try {
          await l.Ay.requestLink(e, r), null == n || n()
        } catch (n) {
          let e = new i.LG(n);
          null == t || t(e)
        } finally {
          h(false)
        }
      }
    }, [b, t, n]),
    loadMore: r.useCallback(async e => {
      let n = s.A.getActionsForDisplayType(e),
        r = n[n.length - 1],
        a = s.A.getStartId(),
        o = s.A.getSelectedTeenId();
      if (!x && null != a && null != o) {
        C(true);
        try {
          await l.Ay.fetchMoreTeenActivity(o, e, a, r.event_id)
        } catch (n) {
          let e = new i.LG(n);
          null == t || t(e)
        } finally {
          C(false)
        }
      }
    }, [x, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: _,
    isCancelLoading: m,
    isGetLinkCodeLoading: A,
    isSelectTeenUserLoading: E,
    isRequestingLink: b,
    isMoreLoading: x
  }
}