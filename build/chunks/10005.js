/** Chunk was on 60667 **/
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
  } = null != e ? e : {}, [o, c] = r.useState(false), [d, u] = r.useState(false), [_, p] = r.useState(false), [m, g] = r.useState(false), [A, f] = r.useState(false), [h, b] = r.useState(false), [E, x] = r.useState(false), [O, C] = r.useState(false), T = o || d || _ || m || h || O, I = r.useCallback(async e => {
    if (!T) {
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
  }, [T, t, n]), S = r.useCallback(async e => {
    if (!T) {
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
  }, [T, t, n]), j = r.useCallback(async e => {
    if (!T) {
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
  }, [T, t, n]), v = r.useCallback(async e => {
    if (!T) {
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
  }, [T, t, n]), N = r.useCallback(async () => {
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
  }, [A, t, n]), y = r.useCallback(async e => {
    if (!E) {
      x(true);
      try {
        await l.Ay.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new i.LG(n);
        null == t || t(e)
      } finally {
        x(false)
      }
    }
  }, [E, t, n]);
  return {
    acceptLinkRequest: I,
    declineLinkRequest: S,
    disconnectLinkRequest: j,
    cancelLinkRequest: v,
    selectTeenUser: y,
    getLinkCode: N,
    requestLink: r.useCallback(async (e, r) => {
      if (!h) {
        b(true);
        try {
          await l.Ay.requestLink(e, r), null == n || n()
        } catch (n) {
          let e = new i.LG(n);
          null == t || t(e)
        } finally {
          b(false)
        }
      }
    }, [h, t, n]),
    loadMore: r.useCallback(async e => {
      let n = s.A.getActionsForDisplayType(e),
        r = n[n.length - 1],
        a = s.A.getStartId(),
        o = s.A.getSelectedTeenId();
      if (!O && null != a && null != o) {
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
    }, [O, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: _,
    isCancelLoading: m,
    isGetLinkCodeLoading: A,
    isSelectTeenUserLoading: E,
    isRequestingLink: h,
    isMoreLoading: O
  }
}